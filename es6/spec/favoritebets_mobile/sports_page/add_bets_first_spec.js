var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Add bets first tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.forceDeleteBets('en-GB', 'mobile/sportsbook');
	});
	
	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	for (let i = 2; i < 5; i++) {
		it('Verify you can add bets ("' + i + '" total) from live page.', function() {
			page.addBets(i);
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

	for (let i = 1; i < 4; i++) {
		it('Verify you can delete bets one by one("' + i + '" total bets).', function() {
			page.addBets(i);
			page.betslip().clickBetslip();
			page.betslip().deleteBets(i);
			expect(page.betslip().betsAmount()).toBe(0);
			expect(page.betslip().getBetslipNumber()).toBe(0);
		});
	}

	for (let i = 1; i < 4; i++) {
		it('Verify you can delete bets with the delete all button("' + i + '" total bets).', function() {
			page.addBets(i);
			page.betslip().clickBetslip();
			page.betslip().deleteAllBets();
			expect(page.betslip().betsAmount()).toBe(0);
			expect(page.betslip().getBetslipNumber()).toBe(0);
		});
	}

}); 