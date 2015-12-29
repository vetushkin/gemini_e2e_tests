var SportsPage = require('../../../source/general/pages/sports_page.js');

//Amount of sports is changing every day
describe('Verify that when opening the Sports Menu, selecting Football then clicking on the under/over button is working', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
	});

	afterEach(function(){
	});

	it('Verify that inside Sports Menu (Football) under/over as well as three-way-bets buttons are working correctly', function(){
		var before;
		var after;
		page.sportsMenu().clickLink(0);
		page.sportsMenu().clickUnderOver();
		before = page.sportsMenu().getUnderOverBets();
		page.sportsMenu().clickThreeWay();
		after = page.sportsMenu().getThreeBets();
		expect(after).not.toBe(before);
	});

});
