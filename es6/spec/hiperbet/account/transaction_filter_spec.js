var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

//Pending transactions verifications are commented. They're not always present in the filters.
//'false' transactions verifications cause errors due to the defect DEV-1994
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
		page.historyFilter().selectOption("1 Hafta");
		page.historyFilter().selectOption("Bütün İşlemler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);	
	});

	it('Verify that All Bets filter shows only won, lost and pending bets', function(){
		page.historyFilter().selectOption("Bütün Bahisler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Pending Bets filter shows only pending bets', function(){
		page.historyFilter().selectOption("Bekleyen Bahisler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Settled Bets filter shows only won and lost bets', function(){
		page.historyFilter().selectOption("Sonuçlanmış Bahisler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Won Bets filter shows only won bets', function(){
		page.historyFilter().selectOption("Kazanan Bahisler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Lost Bets filter shows only lost bets', function(){
		page.historyFilter().selectOption("Kaybeden Bahisler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Transfers filter shows only transfers', function(){
		page.historyFilter().selectOption("Transferler").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Other filter shows only failed transactions', function(){
		page.historyFilter().selectOption("Diğer").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});