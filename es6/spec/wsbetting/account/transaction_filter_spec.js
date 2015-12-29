var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

describe('Account transaction history filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login("support");
		page.visit('account/history');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that All Transactions filter shows all transactions', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "All Transactions");
		//page.historyFilter().selectOption("For The Last").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);	
	});

	it('Verify that All Bets filter shows only won, lost and pending bets', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "All Bets").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Pending Bets filter shows only pending bets', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Unsettled Bets").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Settled Bets filter shows only won and lost bets', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Settled Bets").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Won Bets filter shows only won bets', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Won Bets").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Lost Bets filter shows only lost bets', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Lost Bets").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Transfers filter shows only transfers', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Transfers").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Other filter shows only failed transactions', function(){
		page.historyFilter().selectApostasOption("transaction_req_filter", "Other").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});