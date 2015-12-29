var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Live widget bets test', function() 
{
	var page = new SportsPage();

	afterEach(function() {
		page.betslip().deleteBets(2);
	});

	beforeEach(function() {
		page.removeChat();
	});

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
	});

	it('Verify you can place one bet from first tab', function() {
		page.liveMatches().selectGame(0);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place more than one bet from first tab', function() {
		page.liveMatches().selectGame(0);
		page.liveMatches().addLiveBets(2);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place one bet from second tab', function() {
		page.liveMatches().selectGame(1);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place more than one bet from second tab', function() {
		page.liveMatches().selectGame(1);
		page.liveMatches().addLiveBets(2);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place one bet from third tab', function() {
		page.liveMatches().selectGame(2);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place more than one bet from third tab', function() {
		page.liveMatches().selectGame(2);
		page.liveMatches().addLiveBets(2);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place one bet from fourth tab', function() {
		page.liveMatches().selectGame(3);
		page.liveMatches().addLiveBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can place more than one bet from fourth tab', function() {
		page.liveMatches().selectGame(3);
		page.liveMatches().addLiveBets(2);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify you can click on the basketball path event', function() {
		var eventTitle;
		page.visit('');
		page.liveMatches().selectGame("Basquete");
		eventTitle = page.liveMatches().getEventTitle();
		page.liveMatches().selectEvent();
		expect(page.liveMatches().getTitles()).toBe(eventTitle);
	});

	it('Verify you can click on the football path event', function() {
		var eventTitle;
		page.visit('');
		page.liveMatches().selectGame("Futebol");
		eventTitle = page.liveMatches().getEventTitle();
		page.liveMatches().selectEvent();
		expect(page.liveMatches().getTitles()).toBe(eventTitle);
	});
		
});