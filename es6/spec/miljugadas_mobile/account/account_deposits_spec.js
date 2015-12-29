var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Deposits page tests', function(){
	var page = new AccountMobilePage();

	beforeAll(function(){
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/account');
	});
	
	afterEach(function(){
		page.visit('mobile/sportsbook');
	});

	xit('Ukash - Verify that you can not deposit without entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('ukash');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('ukash');
	});
});