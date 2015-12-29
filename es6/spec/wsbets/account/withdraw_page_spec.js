var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('sportsbook');
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
	it('Verify that BANKA HAVALE/EFT withdraw link doesnt show an error', function(){
		page.clickLink('BANKA HAVALE/EFT');
		expect(page.noError()).toBe(true);
	});

	it('Verify that EcoCard withdraw link check for account balance', function(){
		page.clickLink('EcoCard');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_payment_purse', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
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

	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('NETELLER');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});