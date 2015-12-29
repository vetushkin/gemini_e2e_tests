var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

describe('Account per page filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login('support');
		page.visit('account/history');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.historyFilter().selectApostasOption("transaction_req_last_set", "1 Month");
		page.historyFilter().selectApostasOption("transaction_req_filter", "All Transactions");
	});

	afterEach(function(){
	});

	it('Verify that there are 10 or less rows in the history table when per page is set to 10', function(){
		page.historyFilter().selectApostasOption("per_page", "10").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(11);
	});

	it('Verify that there are 20 or less rows in the history table when per page is set to 10', function(){
		page.historyFilter().selectApostasOption("per_page", "20").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(21);
	});

	it('Verify that there are 50 or less rows in the history table when per page is set to 10', function(){
		page.historyFilter().selectApostasOption("per_page", "50").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(51);
	});

	it('Verify that there are 100 or less rows in the history table when per page is set to 10', function(){
		page.historyFilter().selectApostasOption("per_page", "100").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(101);
	});
});