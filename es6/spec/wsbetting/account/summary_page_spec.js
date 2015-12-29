var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('Verify that Türk Pokeri balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Sportsbook Account')).toBe(true);
	});

});