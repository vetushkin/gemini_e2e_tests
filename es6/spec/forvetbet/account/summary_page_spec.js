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

	it('Verify that Spor Bahisleri balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Spor Bahisleri')).toBe(true);
	});

	it('Verify that Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Casino')).toBe(true);
	});

	it('Verify that Türk Pokeri balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Türk Pokeri')).toBe(true);
	});

	it('Verify that Oyunlar balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Oyunlar')).toBe(true);
	});

	it('Verify that Slotlar balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Slotlar')).toBe(true);
	});

	it('Verify that Canlı Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Canlı Casino')).toBe(true);
	});
});