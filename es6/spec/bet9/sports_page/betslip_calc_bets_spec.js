var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that Betslip calculates stakes and possible payouts', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.sportsMenu().clickLink('Futebol');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
		page.betslip().deleteBets(3);
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