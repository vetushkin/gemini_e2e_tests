var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

//Pending transactions verifications are commented. They're not always present in the filters.
//'false' transactions verifications cause errors due to the defect DEV-1994
describe('Account transaction history filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
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
		page.historyFilter().selectOption("1 Semana");
		page.historyFilter().selectOption("Todas las transacciones").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);	
	});

	it('Verify that All Bets filter shows only won, lost and pending bets', function(){
		page.historyFilter().selectOption("Todas las apuestas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Pending Bets filter shows only pending bets', function(){
		page.historyFilter().selectOption("Apuestas no resueltas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Settled Bets filter shows only won and lost bets', function(){
		page.historyFilter().selectOption("Apuestas resueltas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Won Bets filter shows only won bets', function(){
		page.historyFilter().selectOption("Apuestas ganadas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Lost Bets filter shows only lost bets', function(){
		page.historyFilter().selectOption("Apuestas perdidas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Transfers filter shows only transfers', function(){
		page.historyFilter().selectOption("Traslados").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Other filter shows only failed transactions', function(){
		page.historyFilter().selectOption("Otro").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});