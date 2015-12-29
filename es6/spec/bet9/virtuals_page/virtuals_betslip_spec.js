var VirtualsPage = require('../../../source/general/pages/virtuals_page.js');

describe('Virtuals betslip test', function()
{
	var page = new VirtualsPage();
	//To be fixed(beforeAll should use the logic) because we do not want to login before each test...
	beforeEach(function(){
		page.visit('virtuals/virtual_league');
		page.login();
		page.closeAd();
		page.removeChat();
		//Switch to the iFrame(vfl_frame) which holds most of the components
		page.moveToFrame(0);
	});

	afterAll(function() {
		page.visit('virtuals/virtual_league');
		page.forceLogout();
	});

	it('Verify you can see the betslip', function() {
		expect(page.betslip()).not.toBe(undefined);
	});

	it('Verify you can place a football bet and successfully see it inside betslip', function() {
		page.addBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
	});

	it('Verify you can place a tennis bet and successfully see it inside betslip', function() {
		//Select the tennis tab
		page.gameSelector(1);
		//Add a single bet to the betslip
		page.addBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
	});

	it('Verify you can place a horse bet and successfully see it inside betslip', function() {
		//Select the horses tab
		page.gameSelector(2);
		//Add a single bet to the betslip
		page.addBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
	});

	it('Verify you can place a greyhounds bet and successfully see it inside betslip', function() {
		//Select the greyhounds tab
		page.gameSelector(3);
		//Add a single bet to the betslip
		page.addBets(1);
		expect(page.betslip().betsAmount()).toBe(1);
	});

	it('Verify you can place more than one football bet and successfully see it inside betslip ', function() {
		//Select the football tab
		page.gameSelector(0);
		//Add a couple of bets to the betslip
		page.addBets(5);
		expect(page.betslip().betsAmount()).toBe(5);
	});

	it('Verify you can delete one bet from the betslip', function() {
		//Select the football tab
		page.gameSelector(0);
		//Add 1 bet
		page.addBets(1);
		//Remove one bet from the betslip
		page.betslip().deleteBets(1);
		//Expect the betslip to be empty
		expect(page.betslip().betsAmount()).toBe(0);
	});

	it('Verify you can delete more than one bet from the betslip', function() {
		//Select the football tab
		page.gameSelector(0);
		//Add 4 bet
		page.addBets(4);
		//Remove 2 bets from the betslip
		page.betslip().deleteBets(2);
		//Expect the betslip to have 2 bets
		expect(page.betslip().betsAmount()).toBe(2);
	});

	it('Verify you can delete all the bets from the betslip', function() {
		//Select the football tab
		page.gameSelector(0);
		//Add 4 bet
		page.addBets(4);
		//Remove all bets from the betslip
		page.betslip().deleteAllBets();
		//Expect the betslip to be empty
		expect(page.betslip().betsAmount()).toBe(0);
	});

});