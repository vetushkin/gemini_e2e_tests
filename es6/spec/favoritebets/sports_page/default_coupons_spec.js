var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that Sports Page shows default coupons on openning', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	beforeEach(function(){	
	});

	afterEach(function(){
	});

	it('Verify that Sports Page contains Top Games coupon', function(){
		expect(page.containsCoupon('top_games')).toBe(true);
	});

	it('Verify that Sports Page contains News section', function(){
		expect(page.containsCoupon('news')).toBe(true);
	});

	it('Verify that Sports Page contains Next Games(Last Minute Bets) coupon', function(){
		expect(page.containsCoupon('coupon_next_games')).toBe(true);
	});

});