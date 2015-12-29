var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

//Disable until fixed. Endless page loading on Reskin website 
describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
	});

	afterEach(function(){
	});

	it('Visa/Mastercard - Verify that you open the page without an error', function(){
		page.clickLink('Credit/Debit WireCard');
		expect(page.noError()).toBe(true);
	});

	it('NETELLER - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('NETELLER');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});

