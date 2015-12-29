var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Add bets second tests', function(){
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

	for (let i = 1; i < 4; i++) {
		it('Verify you can add bets (upcoming game #"' + i + '") from upcoming games page.', function() {
			page.visit('mobile/live');
			page.openUpcomingGames(i);
			page.addBets(1);
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

	for (let i = 1; i < 4; i++) {
		it('Verify you can add bets (League #"' + i + '") from leagues page.', function() {
			page.openLeague(i);
			page.addBets(1, "league");
			page.visit('mobile/sportsbook');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify you can add bets (Event #"' + (i+1) + '") from events page.', function() {
			page.visit('mobile/live');
			page.openLiveEvent(i);
			page.addBets(1);
			page.visit('mobile/sportsbook');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

}); 