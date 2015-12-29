var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.visit('account/summary');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Cuenta de Apuestas balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cuenta de Apuestas')).toBe(true);
	});

	it('Verify that Tain Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Tain Casino')).toBe(true);
	});

	it('Verify that Canlı Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Live Casino')).toBe(true);
	});

	it('Verify that Bono (a liberar) bonus shows in the correct format', function(){
		expect(page.isBonusCorrect('Bono (a liberar)')).toBe(true);
	});

	it('Verify that Bono Disponible bonus shows in the correct format', function(){
		expect(page.isBonusCorrect('Bono Disponible')).toBe(true);
	});

	it('Verify that Bono Especial bonus shows in the correct format', function(){
		expect(page.isBonusCorrect('Bono Especial')).toBe(true);
	});

});