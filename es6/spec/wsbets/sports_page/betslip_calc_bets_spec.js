var SportsPage = require('../../../source/general/pages/sports_page.js');

//To-Do Implement config/i18n here
describe('Verify that Betslip calculates stakes and possible payouts', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.closeAd();
		page.sportsMenu().clickLink('Futbol');
	});

	afterAll(function(){
	});

	beforeEach(function(){	
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that total stake field is calulated correctly', function(){		
		page.addBets(3);
		page.betslip().placeStakes(1);
		expect(page.betslip().totalStake()).toBe('3.00');
	});

	it('Verify that total possible payout calculated correctly', function(){		
		page.addBets(3);
		page.betslip().placeStakes(10);
		expect(page.betslip().totalCalculated()).toBe(true);
	});


});