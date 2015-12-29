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

	it('Verify that Bahis Hesabınız balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Bahis Hesabınız')).toBe(true);
	});

	it('Verify that Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Casino')).toBe(true);
	});

	it('Verify that Türk Pokeri balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Türk Pokeri')).toBe(true);
	});

	it('Verify that Casino EUR balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Casino EUR')).toBe(true);
	});

	it('Verify that Oyunlar Hesabı balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Oyunlar Hesabı')).toBe(true);
	});

	it('Verify that Canlı Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Canlı Casino')).toBe(true);
	});
});