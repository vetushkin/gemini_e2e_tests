var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login();	
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/withdraw');
	});

	afterEach(function(){
	});

	it('Verify that WireCard withdraw opens the correct page', function(){
		page.clickLink('WireCard withdraw');
		expect(page.noError()).toBe(true);
	});


	it('Verify that Fast Bank Transfer withdraw link doesnt show an error', function(){
		page.clickLink('Fast Bank Transfer');
		expect(page.noError()).toBe(true);
	});

	it('Verify that UKASH withdraw link check for account balance shows a correct error message', function(){
		page.clickLink('UKASH');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for CC', function(){
		page.clickLink('NETELLER');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
	it('Verify that NETELLER withdraw link check for account balance shows a correct error message', function(){
		page.clickLink('NETELLER');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});