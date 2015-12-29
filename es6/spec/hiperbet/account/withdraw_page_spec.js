var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('VISA withdraw does not accept less than 12 digits for CC', function(){
		page.clickLink('Kredi Kartı Para Çekme');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_card_number', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('VISA withdraw check for balance', function(){
		page.clickLink('Kredi Kartı Para Çekme');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_card_number', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Miktar minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that BANKA HAVALE/EFT withdraw link doesnt show an error', function(){
		page.clickLink('BANKA HAVALE/EFT');
		expect(page.noError()).toBe(true);
	});

	it('Verify that EcoCard withdraw link check for account balance', function(){
		page.clickLink('ECOCARD');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_payment_purse', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("Miktar minimum");
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
		expect(page.showNoticeMessage()).toContain("Miktar minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});