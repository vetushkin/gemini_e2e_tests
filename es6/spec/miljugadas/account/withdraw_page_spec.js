var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/withdraw');
	});

	afterEach(function(){
	});

	it('Verify that Saque via Skrill withdraw does not accept less than minimum amount', function(){
		page.clickLink('Skrill (Moneybookers)');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Monto debe ser");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Saque via Skrill withdraw does not accept empty withdraw amount', function(){
		page.clickLink('Skrill (Moneybookers)');
		page.enterText('withdraw_amount', '');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Debe introducir una cantidad");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Saque via Skrill withdraw does not accept more than maximum amount', function(){
		page.clickLink('Skrill (Moneybookers)');
		page.enterText('withdraw_amount', '99999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("por debajo de");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferencias Bancarias Retiros withdraw does not accept less than minimum amount', function(){
		page.clickLink('Transferencias Bancarias Retiros\ ');
		page.enterText('field_7', '1');
		page.enterText('field_1', '1111');
		page.enterText('field_3', '1111');
		page.enterText('field_6', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Debe introducir una");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferencias Bancarias Retiros withdraw does not accept empty withdraw amount', function(){
		page.clickLink('Transferencias Bancarias Retiros\ ');
		page.enterText('field_7', '');
		page.enterText('field_1', '1111');
		page.enterText('field_3', '1111');
		page.enterText('field_6', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferencias Bancarias Retiros withdraw does not accept empty personal id', function(){
		page.clickLink('Transferencias Bancarias Retiros\ ');
		page.enterText('field_7', '15');
		page.enterText('field_1', '');
		page.enterText('field_3', '1111');
		page.enterText('field_6', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Debe introducir");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferencias Bancarias Retiros withdraw does not accept empty bank account', function(){
		page.clickLink('Transferencias Bancarias Retiros\ ');
		page.enterText('field_7', '15');
		page.enterText('field_1', '1111');
		page.enterText('field_3', '');
		page.enterText('field_6', '1111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Debe introducir");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferencias Bancarias Retiros withdraw does not accept empty bank agency', function(){
		page.clickLink('Transferencias Bancarias Retiros\ ');
		page.enterText('field_7', '15');
		page.enterText('field_1', '1111');
		page.enterText('field_3', '1111');
		page.enterText('field_6', '');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Debe introducir");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for CC', function(){
		page.clickLink('Neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is too short");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});