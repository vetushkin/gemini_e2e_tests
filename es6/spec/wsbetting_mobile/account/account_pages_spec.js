var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Account pages tests', function(){
	var page = new AccountMobilePage();

	beforeAll(function(){
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});
	
	afterEach(function(){
	});

	it('Verify that you can expand and collapse all transactions on the History page', function(){
		page.visit('mobile/account/history');
		page.clickTransactions('all');
		expect(page.expandedTransactions()).toBeGreaterThan(0);
		page.clickTransactions('all');
		expect(page.expandedTransactions()).toBe(0);
	});

	it('Verify that you can see transactions only for one day', function(){
		page.visit('mobile/account/history');
		expect(page.daysShowed()).toBeLessThan(2);
	});
});