var AccountBonusPage = require('../../../source/general/pages/account_bonus_page.js');

describe('Account Netent bonus page verification', function(){
	var page = new AccountBonusPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.visit('loyalty/bonus');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	for (let i = 0; i < 2; i++) {
		it('Verify that Bonus #'+ (i+1) +' is showed in the correct format', function(){
			expect(page.isBalanceCorrect(i)).toBe(true);
		});
	}

});