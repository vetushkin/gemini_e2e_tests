var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Add bets third tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.forceDeleteBets('tr-TR', 'mobile/sportsbook');
	});
	
	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	for (let i = 1; i < 4; i++) {
		it('Verify you can add bets (Coupon #"' + i + '") from coupon page.', function() {
			page.openCoupon(i);
			page.addBets(1);
			page.visit('mobile/sportsbook');
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify you can add bets (Sport selected #"' + (i+1) + '") from popular games widget.', function() {
			page.selectPopularSport(i);
			page.addBets(1, "popular");
			page.betslip().clickBetslip();
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
			expect(page.betslip().getBetslipNumber()).toBeGreaterThan(0);
		});
	}

}); 