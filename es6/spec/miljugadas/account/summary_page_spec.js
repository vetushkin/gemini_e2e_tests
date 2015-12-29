var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('account/summary');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Cuenta de apuestas deportivas balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Cuenta de apuestas deportivas')).toBe(true);
	});

	it('Verify that CTXMGames balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('CTXMGames')).toBe(true);
	});

});