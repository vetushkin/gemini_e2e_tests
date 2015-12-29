var LivePage = require('../../../source/general/pages/live_page.js');

describe('Football highlights test', function(){
	var page = new LivePage();

	beforeAll(function(){
		page.visit('live');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that you can place a single bet from the Highlights section', function() {
		page.highlights().placeBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
	});

	it('Verify that you can place multiple bets from the Highlights section', function() {
		page.highlights().placeBets(3);
		page.betslip().waitForBets(3);
		expect(page.betslip().betsAmount()).toBe(3);
	});

});