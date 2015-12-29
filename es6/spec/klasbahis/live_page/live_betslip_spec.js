var LivePage = require('../../../source/general/pages/live_page.js');

describe('Live betslip test', function(){
	var page = new LivePage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('live');
		page.removeChat();
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	it('Verify that totals and stakes are calculated', function() {
		page.placeBets(3);
		page.betslip().waitForBets(3);
		page.betslip().placeStakes(1);
		expect(page.betslip().totalStake()).toBe('3.00');
		expect(page.betslip().totalCalculated()).toBe(true);
	});

	it('Verify that you can go to the Sport page and still see your bets in the Betslip', function() {
		page.placeBets(1);
		page.betslip().waitForBets(1);
		page.visit('');
		page.removeChat();
		page.betslip().clickConfirm();
		page.betslip().waitForBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
		page.visit('live');
		page.removeChat();
		page.betslip().clickConfirm();
		page.betslip().waitForBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify that you can place bets from different widgets', function() {
		page.highlights().placeBets(1);
		page.liveMenu().placeBets(1);
		page.placeBets(1);
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);
	});

	it('Verify that odds are updated in the real time in the Betslip', function() {
		page.placeBets(3);
		page.betslip().waitForBets(3);
		page.betslip().waitForOddsChanges();
		page.betslip().clickConfirm();
		expect(page.betslip().betsAmount()).toBeGreaterThan(0);		
	});
});