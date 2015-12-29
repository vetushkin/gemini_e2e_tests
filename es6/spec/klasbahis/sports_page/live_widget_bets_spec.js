var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Live widget bets test', function() 
{
	var page = new SportsPage();

	beforeEach(function(){
		page.removeChat();	
	});

	afterEach(function() {
		page.betslip().deleteAllBets();
		page.liveMatches().showMore();
	});

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});


	it('Verify you can place one bet from first tab', function() {
		page.liveMatches().selectGame(0);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toEqual(1);
	});

	it('Verify you can place one bet from second tab', function() {
		page.liveMatches().selectGame(1);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toEqual(1);
	});

	it('Verify you can place more than one bet from first tab', function() {
		page.liveMatches().selectGame(0);
		page.liveMatches().addLiveBets("maximum");
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});
 
	it('Verify you can place more than one bet from second tab', function() {
		page.liveMatches().selectGame(1);
		page.liveMatches().addLiveBets("maximum");
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
		
	});

	it('Verify you can place one bet from third tab', function() {
		page.liveMatches().selectGame(2);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toEqual(1);
	});

	it('Verify you can place more than one bet from third tab', function() {
		page.liveMatches().selectGame(2);
		page.liveMatches().addLiveBets("maximum");
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
		
	});

	it('Verify you can click on the basketball path event', function() {
		var eventTitle;
		page.liveMatches().selectGame("Basketbol");
		eventTitle = page.liveMatches().getEventTitle();
		page.liveMatches().selectEvent();
		expect(page.liveMatches().getTitles()).toBe(eventTitle);
	});

	it('Verify you can click on the football path event', function() {
		page.visit('sportsbook');
		var eventTitle;
		page.liveMatches().selectGame("Futbol");
		eventTitle = page.liveMatches().getEventTitle();
		page.liveMatches().selectEvent();
		expect(page.liveMatches().getTitles()).toBe(eventTitle);
	});

});