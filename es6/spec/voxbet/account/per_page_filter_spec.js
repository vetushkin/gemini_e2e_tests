var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

describe('Account per page filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('account/history');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that there are 10 or less rows in the history table when per page is set to 10', function(){
		page.historyFilter().selectOption("1 Día");
		page.historyFilter().selectOption("Todas las transacciones");
		page.historyFilter().selectOption("10").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(11);
	});

	it('Verify that there are 20 or less rows in the history table when per page is set to 20', function(){
		page.historyFilter().selectOption("20").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(21);
	});

	it('Verify that there are 50 or less rows in the history table when per page is set to 50', function(){
		page.historyFilter().selectOption("50").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(51);
	});

	it('Verify that there are 100 or less rows in the history table when per page is set to 100', function(){
		page.historyFilter().selectOption("100").clickSubmit();
		expect(page.historyTable().rows()).toBeLessThan(101);
	});
});