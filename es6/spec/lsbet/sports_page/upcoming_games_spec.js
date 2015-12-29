var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Upcoming Games coupon testing', function(){
	var page = new SportsPage();

	beforeEach(function(){
		page.visit('error');
		page.visit('sportsbook');
		page.upcomingGames().openWidget();
	});

	afterEach(function() {
		page.betslip().deleteAllBets();
	});

	beforeAll(function(){
	});

	afterAll(function(){
	});

	it('Verify that widget doesnt show already started events', function(){
		expect(page.upcomingGames().dateTimes()).not.toContain(false);
	});

	it('Verify that you can place bets from the upcomnig games widget', function(){
		page.upcomingGames().addBets(3);
		expect(page.betslip().betsAmount()).toEqual(3);
	});

	it('Verify that you can open an event from upcoming games widget', function(){
		page.upcomingGames().openEvent(5);
		page.closeCoupon();
		expect(page.noError()).toBe(true);
	});

	it('Verify that show more button loads more events', function(){
		page.upcomingGames().showMore();
		expect(page.upcomingGames().moreEventsLoaded()).toBe(true);
	});

});