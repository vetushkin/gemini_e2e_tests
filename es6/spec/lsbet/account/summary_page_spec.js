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
		page.closeAd();
	});

	afterEach(function(){
	});

	it('Verify that Sportsbook Account balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Sportsbook Account')).toBe(true);
	});

	it('Verify that Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Casino')).toBe(true);
	});

	it('Verify that Games balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Games')).toBe(true);
	});

	it('Verify that Live Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Live Casino')).toBe(true);
	});

});