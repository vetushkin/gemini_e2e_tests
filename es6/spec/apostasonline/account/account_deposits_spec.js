var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

 
describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login('');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('pt-BR/account/deposit');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Astropay - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("O valor deve ser ao menos");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '9999999');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("must be less than");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error when correct(but not valid) card number is entered', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("card number is invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("must be greater than 0");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank card number there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank security code number there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect security code number there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', 'dsa');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is not a number");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_cardnumber', '12345');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("should be 16 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that when enter correct amount there will be payment with Astropay is not available now', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_personal_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Astropay is not available now");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '999999999');
		page.enterText('deposit_perform_personal_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor máximo deve ser de 1000000.00 USD");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '2');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos 10.00 USD");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that when enter blank personal id there will be error', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_personal_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter correct amount there will be payment with Astropay is not available now', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_personal_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Astropay is not available now");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '999999999');
		page.enterText('deposit_perform_personal_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor máximo deve ser de 1000000.00 USD");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '2');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos 10.00 USD");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter blank personal id there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_personal_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify there are banks available in the dropdown menu', function() {
		page.clickLink('Astropay Bancário');
		page.clickDropMenu();
		expect(page.banksListSize()).toBeGreaterThan(0);
	});

	it('Boleto Bancário - Verify that when enter correct amount you will be redirected to the bank statement page', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("webservicesystem");
	});

	it('Boleto Bancário - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '999999999');
		page.enterText('deposit_perform_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor máximo deve ser de");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto Bancário - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '2');
		page.enterText('deposit_perform_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto Bancário - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto Bancário - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto Bancário - Verify that when enter blank personal id there will be error', function(){
		page.clickLink('Boleto Bancário');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_tax_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária - Verify that when enter correct amount there will be a confirm payment button', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_customer_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showConfirmButton()).toBe("FINALIZAR PAGAMENTO");
	});

	it('Transferência Bancária - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '999999999');
		page.enterText('deposit_perform_customer_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor máximo deve ser de");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '2');
		page.enterText('deposit_perform_customer_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_customer_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_customer_tax_id', '12345');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária - Verify that when enter blank customer tax id there will be error', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_customer_tax_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	//Disabling this specs because of migration to PSP Gateway. At the moment there is no such check.
	xit('Cartão de Crédito/Débito via Entropay - Verify that you get an error when correct(but not valid) card number is entered', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '10');
		page.enterText('deposit_cardnumber', '1111111111111111');
		page.enterText('deposit_code', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not allowed to use this card number");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Cartão de Crédito/Débito via Entropay - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '0');
		page.enterText('deposit_cardnumber', '1111111111111111');
		page.enterText('deposit_code', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Cartão de Crédito/Débito via Entropay - Verify that when enter blank card number there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '100');
		page.enterText('deposit_cardnumber', '');
		page.enterText('deposit_code', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Incorrect card number");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Cartão de Crédito/Débito via Entropay - Verify that when enter blank security code number there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '150');
		page.enterText('deposit_cardnumber', '1111111111111111');
		page.enterText('deposit_code', '');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Incorrect CVC");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Cartão de Crédito/Débito via Entropay - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '');
		page.enterText('deposit_cardnumber', '1111111111111118');
		page.enterText('deposit_code', '234');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Cartão de Crédito/Débito via Entropay - Verify that when enter incorrect security code number there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '140');
		page.enterText('deposit_cardnumber', '1111111111111112');
		page.enterText('deposit_code', 'asd');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Incorrect CVC");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	//Disabling this specs because of migration to PSP Gateway. At the moment there is no such check.
	xit('Cartão de Crédito/Débito via Entropay - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('Cartão de Crédito/ Débito via Entropay');
		page.enterText('deposit_amount', '50');
		page.enterText('deposit_cardnumber', '12345');
		page.enterText('deposit_code', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not allowed to use this card number");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("O valor deve ser de");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that you are transferred to Skrill payment page after submit', function(){
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '11');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("skrill");
	});

	it('Depósito NETELLER - Verify that when enter smaller than minimum amount there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank net account there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is too short");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank secure id there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});			

	it('Depósito NETELLER - Verify that when enter incorrect(too short) account there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '31');
		page.enterText('deposit_perform_net_account', '1111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter incorrect(too short) secure id there will be error', function(){
		page.clickLink('Depósito Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 6 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});