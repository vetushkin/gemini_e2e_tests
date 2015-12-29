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
		page.closeAd();
	});

	afterEach(function(){
	});


	it('Verify that Skrill link check for amount', function(){
		page.clickLink('MoneyBookers withdraw');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be");
	});

	it('Verify that Skrill link check for amount', function(){
		page.clickLink('MoneyBookers withdraw');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter");
	});

	it('Verify that NETELLER withdraw link check for CC', function(){
		page.clickLink('Neteller withdraw');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Neteller withdraw');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Neteller withdraw');
		page.enterText('withdraw_perform_amount', '999999');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Requested amount exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Bank Transfer withdraw link check for account balance', function(){
		page.clickLink('Bank Transfer withdraw');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that EcoCard withdraw link check for account balance', function(){
		page.clickLink('Ecocard withdraw');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_payment_purse', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that EcoCard withdraw link check for account balance', function(){
		page.clickLink('Ecocard withdraw');
		page.enterText('withdraw_perform_amount', '999999');
		page.enterText('withdraw_perform_payment_purse', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Requested amount exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that TBL withdraw link check for account balance', function(){
		page.clickLink('TBL');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_personal_id', '1111111111111111');
		page.enterText('withdraw_perform_bank_account', '1111111111111111');
		page.enterText('withdraw_perform_bank_agency', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Amount should be minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that TBL withdraw link check for account balance', function(){
		page.clickLink('TBL');
		page.enterText('withdraw_perform_amount', '999999999999');
		page.enterText('withdraw_perform_personal_id', '1111111111111111');
		page.enterText('withdraw_perform_bank_account', '1111111111111111');
		page.enterText('withdraw_perform_bank_agency', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Requested amount exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});