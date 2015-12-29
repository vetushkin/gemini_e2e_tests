var LivePage = require('../../../source/general/pages/live_page.js');

describe('Live markets test', function(){
	var page = new LivePage();

	beforeAll(function(){
		page.visit('pt-BR/live');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that there is a loaded event on the page load', function() {
		expect(page.eventStakes()).toBeGreaterThan(0);
	});

	it('Verify that bets are updated in the real time in the opened event', function() {
		expect(page.stakesUpdated()).toBe(true);
	});

	it('Verify that you can place a bet from the opened coupon markets', function() {
		page.placeBets(1);
		page.betslip().waitForBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
		page.betslip().deleteBets(3);
	});

	it('Verify that you can place multiple bets from the opened coupon markets', function() {
		page.placeBets(3);
		page.betslip().waitForBets(3);
		expect(page.betslip().betsAmount()).toBe(3);
		page.betslip().deleteBets(5);
	});
});