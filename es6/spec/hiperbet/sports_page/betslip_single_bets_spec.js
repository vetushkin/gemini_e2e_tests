var SportsPage = require('../../../source/general/pages/sports_page.js');

//To-Do Implement config/i18n here
describe('Verify Betslip single bets interactions', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.sportsMenu().clickLink('Futbol');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.removeChat();
		page.betslip().deleteAllBets();	
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that you can add 1 bet to the Betslip', function(){
		page.addBets(1);
		expect(page.betslip().betsAmount()).toEqual(1);
	});

	it('Verify that you can add 2 bets to the Betslip', function(){
		page.addBets(2);
		expect(page.betslip().betsAmount()).toEqual(2);
	});

	it('Verify that you can delete bets from the Betslip', function(){
		page.addBets(2);
		page.betslip().deleteBets(1);
		expect(page.betslip().betsAmount()).toEqual(1);
	});

	it('Verify that you can delete all bets from the Betslip', function(){
		page.addBets(3);
		page.betslip().deleteAllBets();
		expect(page.betslip().betsAmount()).toEqual(0);
	});

});