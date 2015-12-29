var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify Betslip multibets interactions', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.sportsMenu().clickLink('Futbol');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that you can create a multibet by adding bets from different events', function(){		
		page.addBets(5);
		page.betslip().waitForBets(5);
		page.betslip().waitForMultibets(1);
		expect(page.betslip().multibetsAmount()).toEqual(1);
	});

	it('Verify that you can create a system bet by adding bets from different events', function(){
		page.addBets(5);
		page.betslip().waitForBets(5);
		page.betslip().waitForSystembets(3);
		expect(page.betslip().systembetsAmount()).toEqual(3);
	});

});