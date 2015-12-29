var LivePage = require('../../../source/general/pages/live_page.js');

describe('Live menu test', function(){
	var page = new LivePage();

	beforeAll(function(){
		page.visit('live');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that you can place a bet directly from the live menu', function() {
		page.liveMenu().placeBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
		page.betslip().deleteAllBets();
	});

	it('Verify that bets are updated in the real time in the live menu', function() {
		expect(page.liveMenu().stakesUpdated()).toBe(true);
	});

	it('Verify that selected event is loaded', function(){
		//page.liveMenu().openAllCategories();
		page.liveMenu().selectEvent(1);
		expect(page.eventStakes()).toBeGreaterThan(0);
	});

	
});