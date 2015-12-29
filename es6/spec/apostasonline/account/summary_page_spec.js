var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('pt-BR/account/summary');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Esportes balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Esportes')).toBe(true);
	});

	it('Verify that Cassino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cassino')).toBe(true);
	});

	it('Verify that Jogos balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Jogos')).toBe(true);
	});

	it('Verify that Cassino ao vivo balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cassino ao vivo')).toBe(true);
	});
});