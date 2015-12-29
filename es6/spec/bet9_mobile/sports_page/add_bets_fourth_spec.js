var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Add bets fourth tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.forceDeleteBets('pt-BR', 'mobile/sportsbook');
	});
	
	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	for(let i = 1 ; i < 5 ; i++) {
		it('Verify that you can see a correct amount of bets on the Betslip link.', function() {
			page.selectPopularSport(0);
			page.addBets(i, "popular");
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBe(page.betslip().getBetslipNumber());	
		});
	}

	for(let i = 5 ; i < 8 ; i++) {
		it('Verify that stakes are updated in real time in the Betslip.', function() {
			page.addBets(i);
			page.betslip().clickBetslip();
			page.betslip().waitForOddsChanges();
			expect(page.betslip().betsUpdated()).toBe(true);
		});
	}

	for(let i = 4 ; i < 6; i++) {
		it('Verify that you can see System bets and Multibets when you place "' + i + '" bets', function() {
			page.selectPopularSport(0);
			page.addBets(i, "popular");
			page.betslip().clickBetslip();
			expect(page.betslip().systembetsAmount()).toBeGreaterThan(0);
			expect(page.betslip().multibetsAmount()).toBeGreaterThan(0);
		});
	}

}); 