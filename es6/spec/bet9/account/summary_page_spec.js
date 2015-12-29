var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.visit('account/summary');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Cuenta de apuestas deportivas balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Apostas de Esporte')).toBe(true);
	});

	it('Verify that Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cassino')).toBe(true);
	});

	it('Verify that Cartera de Juegos balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Jogos')).toBe(true);
	});

	it('Verify that Casino en Vivo balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cassino ao Vivo')).toBe(true);
	});

});