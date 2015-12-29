var AccountSummaryPage = require('../../../source/general/pages/account_summary_page.js');

describe('Account summary page verification', function(){
	var page = new AccountSummaryPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login('support');
		page.visit('account/summary');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Casino')).toBe(true);
	});

	it('Verify that Slotlar balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Slotlar')).toBe(true);
	});

	it('Verify that Spor Bahisleri balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Spor Bahisleri')).toBe(true);
	});

	it('Verify that Canlı Casino balance shows in the correct format', function(){
		expect(page.isBalanceCorrect('Canlı Casino')).toBe(true);
	});
});