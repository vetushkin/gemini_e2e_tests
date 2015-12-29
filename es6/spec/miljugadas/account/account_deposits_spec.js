var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

 
describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
	});

	afterEach(function(){
	});

	it('Astropay - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '9999999');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that you get an error when correct(but not valid) card number is entered', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("card number is invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank card number there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank security code number there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect security code number there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '10');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', 'dsa');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is not a number");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('Astropay - Tarjeta Virtual');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_cardnumber', '12345');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("should be 16 characters");
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
		expect(page.showErrorMessage()).toContain("maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '2');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter 0 deposit amount there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '0');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_personal_id', '12345');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify that when enter blank personal id there will be error', function(){
		page.clickLink('Astropay Bancário');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_personal_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay Bancário - Verify there are banks available in the dropdown menu', function() {
		page.clickLink('Astropay Bancário');
		page.clickDropMenu();
		expect(page.banksListSize()).toBeGreaterThan(0);
	});

	it('Skrill - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Monto debe ser");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that you are transferred to Skrill payment page after submit', function(){
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '11');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("skrill");
	});

	it('Depósito NETELLER - Verify that when enter smaller than minimum amount there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank deposit amount there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("No puede estar en blanco");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank net account there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is too short");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter blank secure id there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is too short");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});			

	it('Depósito NETELLER - Verify that when enter incorrect(too short) account there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '31');
		page.enterText('deposit_perform_net_account', '1111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Depósito NETELLER - Verify that when enter incorrect(too short) secure id there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '32');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 6 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});