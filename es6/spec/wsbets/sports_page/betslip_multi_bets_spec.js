var SportsPage = require('../../../source/general/pages/sports_page.js');

//To-Do Implement config/i18n here
describe('Verify Betslip multibets interactions', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.closeAd();
	});

	afterAll(function(){
	});

	beforeEach(function(){	
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that you can create a multibet by adding bets from different events', function(){		
		page.sportsMenu().clickLink('Basketbol');
		page.addBets(2);
		page.betslip().waitForBets(2);
		page.betslip().waitForMultibets(1);
		expect(page.betslip().multibetsAmount()).toEqual(1);
	});

	it('Verify that you can create a system bet by adding bets from different events', function(){
		page.sportsMenu().clickLink('Futbol');
		page.addBets(4);
		page.betslip().waitForBets(4);
		page.betslip().waitForSystembets(2);
		expect(page.betslip().systembetsAmount()).toEqual(2);
	});

});