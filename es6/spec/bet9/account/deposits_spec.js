var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login('');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Astropay Boleto - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_personal_id', '11111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Boleto - Verify that you get an error message when using incorrect id', function(){
		page.clickLink('Astropay Boleto');
		page.enterText('deposit_perform_amount', '500');
		page.enterText('deposit_perform_personal_id', '11111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not available");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Banks - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_personal_id', '11111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Banks - Verify that you get an error message when using incorrect id', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '500');
		page.enterText('deposit_perform_personal_id', '11111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not available");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error message when using incorrect card number', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '500');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("card number is invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Boleto');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto - Verify that you get an error message when amount placed is more than maximum', function(){
		page.clickLink('Boleto');
		page.enterText('deposit_perform_amount', '999999');
		page.enterText('deposit_perform_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("should be maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Boleto - Verify that you are transferred to the payment page', function(){
		page.clickLink('Boleto');
		page.enterText('deposit_perform_amount', '100');
		page.enterText('deposit_perform_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("BoletoBancario.aspx");
	});

	it('Transferência Bancária Local - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Transferência Bancária Local');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_customer_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Transferência Bancária Local - Verify that you get an error message when amount placed is more than maximum', function(){
		page.clickLink('Transferência Bancária Local');
		page.enterText('deposit_perform_amount', '999999999');
		page.enterText('deposit_perform_customer_tax_id', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("should be maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill MoneyBookers - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Moneybookers');
		expect(page.showErrorMessage()).toContain("Infelizmente, os depósitos com Skrill não estão disponíveis para a sua moeda");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EcoCard - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('EcoCard');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínimo");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EcoCard - Verify that you get an error message when amount placed is more than maximum', function(){
		page.clickLink('EcoCard');
		page.enterText('deposit_perform_amount', '600');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("should be below");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito com cartão de crédito Entropay - Verify that you get an error message when an incorrect card number is used', function(){
		page.clickLink('Entropay');
		page.enterText('deposit_amount', '1');
		page.enterText('deposit_cardnumber', '1114111111131111');
		page.enterText('deposit_code', '1211121121121112');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Você só pode depositar com");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito com cartão de crédito Entropay - Verify that you get an error message when the amount field is empty', function(){
		page.clickLink('Entropay');
		page.enterText('deposit_amount', '');
		page.enterText('deposit_cardnumber', '1114111111131111');
		page.enterText('deposit_code', '1211121121121112');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("uma quantia");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Neteller - Verify that you get an error message when an incorrect card number is used', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Invalid accountId or email");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});

