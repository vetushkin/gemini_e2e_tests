var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

//Pending transactions verifications are commented. They're not always present in the filters.
//'false' transactions verifications cause errors due to the defect DEV-1994
describe('Account transaction history filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('pt-BR/account/history');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		
	});

	afterEach(function(){
	});

	it('Verify that All Transactions filter shows all transactions', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Todas as transações").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);	
	});

	it('Verify that All Bets filter shows only won, lost and pending bets', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Todas as Apostas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Pending Bets filter shows only pending bets', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Apostas Não Definidas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		//expect(page.historyTable().contains('pending')).toBe(true);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Settled Bets filter shows only won and lost bets', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Apostas Definidas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Won Bets filter shows only won bets', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Apostas Ganhas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(true);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Lost Bets filter shows only lost bets', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Apostas Perdidas").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(true);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(false);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Transfers filter shows only transfers', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Transferências").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Other filter shows only failed transactions', function(){
		page.historyFilter().selectApostasOption("since", "1 semana");
		page.historyFilter().selectApostasOption("per_page_chosen", "50").clickSubmit();
		page.historyFilter().selectApostasOption("transaction_req_filter_chosen", "Outros").clickSubmit();
		expect(page.historyTable().contains('won')).toBe(false);
		expect(page.historyTable().contains('lost')).toBe(false);
		expect(page.historyTable().contains('pending')).toBe(false);
		expect(page.historyTable().contains('false')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});