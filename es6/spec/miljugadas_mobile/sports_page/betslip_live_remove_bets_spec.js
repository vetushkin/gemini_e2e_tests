var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Remove live bets after bet update spec', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('mobile/live');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.forceDeleteBets('es-ES', 'mobile/sportsbook');
	});
	
	afterEach(function(){
	});

	for (let i = 2; i < 6; i++) {
		it('Verify you can add bets ("' + i + '" total) from live page and remove them after a bet stake has updated in the betslip.', function() {
			page.addBets(i);
			page.betslip().clickBetslip();
			page.betslip().waitUpdatedBets();
			page.visit('mobile/live');
			page.removeBets();
			expect(page.isBetsRemoved()).toBe(true);
		});
	}

}); 