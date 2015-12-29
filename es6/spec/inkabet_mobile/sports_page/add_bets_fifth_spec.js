var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Add bets fifth tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.forceDeleteBets('es-ES', 'mobile/sportsbook');
	});
	
	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	for(let i = 3 ; i < 6 ; i++) {
		it('Verify that you can place bets when not logged in.', function() {
			page.logout();
			page.visit('mobile/sportsbook');
			page.addBets(i);
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
			
		});
	}

	for(let i = 1 ; i < 4 ; i++) {
		it('Verify that you can place bets when not logged in and see the bets you placed after login.', function() {
			page.logout();
			page.visit('mobile/sportsbook');
			page.addBets(i);
			page.visit('');
			page.login('support');
			page.visit('mobile/sportsbook');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
			
		});
	}

	for (let i = 1; i < 5; i++) {
		it('Verify that added bets ("' + i + '" total) are saved in the Betslip when you are navigating over the mobile website.', function() {
			page.selectPopularSport(0);
			page.addBets(i, "popular");
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);

			page.visit('mobile/eventpaths/240');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);

			page.visit('mobile/eventpaths/215');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

}); 