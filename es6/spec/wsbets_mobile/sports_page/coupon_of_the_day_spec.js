var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Coupon of the day tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/sportsbook');
	});
	
	afterEach(function(){
	});

	for (let i = 1; i < 24; i++) {
		it('Verify you can open coupon of the day page - sport ' + i + '', function() {
			page.openCoupon(i);
			expect(page.isCouponPresent()).toBe(true);
			expect(page.noError()).toBe(true);
		});	
	}

});