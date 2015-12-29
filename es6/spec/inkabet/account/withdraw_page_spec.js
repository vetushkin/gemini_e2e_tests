var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login();	
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/withdraw');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that Banco de Credito withdraw does not accept empty amount field', function(){
		page.clickLink('banco_credito');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Banco de Credito withdraw does not accept ammount less than minimum', function(){
		page.clickLink('banco_credito');
		page.enterText('field_8', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("que 50 PEN");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Banco de Credito withdraw does not accept ammount less than minimum', function(){
		page.clickLink('banco_credito');
		page.enterText('field_8', '9999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("error ");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Interbank withdraw does not accept empty amount field', function(){
		page.clickLink('interbank');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Interbank withdraw does not accept ammount less than minimum', function(){
		page.clickLink('interbank');
		page.enterText('field_8', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("que 50 PEN");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Interbank withdraw does not accept ammount less than minimum', function(){
		page.clickLink('interbank');
		page.enterText('field_8', '9999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("error ");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that BBVA Continental withdraw does not accept empty amount field', function(){
		page.clickLink('banco_continental');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that BBVA Continental withdraw does not accept ammount less than minimum', function(){
		page.clickLink('banco_continental');
		page.enterText('field_8', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("que 50 PEN");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that BBVA Continental withdraw does not accept ammount less than minimum', function(){
		page.clickLink('banco_continental');
		page.enterText('field_8', '9999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("error");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Otros Bancos withdraw link doesnt show an error', function(){
		page.clickLink('otros_bancos');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Sin Cuenta Bancaria withdraw link doesnt show an error', function(){
		page.clickLink('sin_cuenta_bancaria');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Visa withdraw link doesnt show an error', function(){
		page.clickLink('wc/withdraw');
		expect(page.showErrorMessage()).toContain("WireCard no");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
		expect(page.noError()).toBe(true);
	});

	it('Verify that NETELLER withdraw link check for CC', function(){
		page.clickLink('Neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Neteller');
		page.enterText('withdraw_perform_amount', '9999999999');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("amount exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Skrill withdraw link doesnt show an error', function(){
		page.forceLogout();
		page.login('support');
		page.visit('account/withdraw');
		page.removeChat();
		page.clickLink('Skrill');
		expect(page.currentUrl()).toContain('mb/withdraw');
		expect(page.noError()).toBe(true);
	});
});