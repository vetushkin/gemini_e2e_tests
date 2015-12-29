var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('Verify that Ana Hesabınız balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Ana Hesabınız')).toBe(true);
	});

	it('Verify that Dolar Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Dolar Casino')).toBe(true);
	});

	it('Verify that Turkish Poker balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Türk Pokeri')).toBe(true);
	});

	it('Verify that EUR Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('EUR Casino')).toBe(true);
	});

	it('Verify that Canlı Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Canlı Casino')).toBe(true);
	});
});