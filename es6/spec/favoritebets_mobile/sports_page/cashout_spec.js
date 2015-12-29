var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Cashout widget tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.forceDeleteBets('en-GB', 'mobile/sportsbook');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/sportsbook');
	});
	
	afterEach(function(){
	});

	it('Verify that you can place a real bet', function(){
		page.selectPopularSport(0);
		page.addBets(1, "popular");
		var oldValue = page.cashout().badgeAmount();
		page.betslip().clickBetslip();
		page.betslip().placeStakes(0.6);
		expect(page.betslip().betsAmount()).toEqual(1);
		page.betslip().placeBets();
		expect(page.betslip().isSuccessMessagePresent()).toBe(true);
		page.visit('mobile/sportsbook');
		expect(page.cashout().isBadgeUpdated(oldValue)).toBe(true);
	});

	for (let i = 1; i < 7; i++) {
		it('Verify each pending bet contains all fields', function() {
			page.cashout().openCashout();
			page.cashout().showMore();
			expect(page.cashout().isTypeAmountCorrect(i)).toBe(true);
			expect(page.cashout().isEventCorrect(i)).toBe(true);
			expect(page.cashout().isMarketCorrect(i)).toBe(true);
			expect(page.cashout().isOutcomeCorrect(i)).toBe(true);
		});
	}

	it('Verify that a pending bet contains cashout button', function() {
		page.cashout().openCashout();
		page.cashout().showMore();
		expect(page.cashout().isButtonPresent("cashout", 0)).toBe(true);
	});

	it('Verify that that after clicking on the bet cashout button you can see accept and decline buttons', function() {
		page.cashout().openCashout();
		page.cashout().showMore();
		expect(page.cashout().isButtonPresent("cashout", 0)).toBe(true);
		page.cashout().clickButton("cashout", 0);
		expect(page.cashout().isButtonPresent("cancel", 0)).toBe(true);
		expect(page.cashout().isButtonPresent("confirm", 0)).toBe(true);
	});

	it('Verify that that after clicking on the bet cashout button you can cancel the cashout successfully', function() {
		page.cashout().openCashout();
		page.cashout().showMore();
		expect(page.cashout().isButtonPresent("cashout", 0)).toBe(true);
		page.cashout().clickButton("cashout", 0);
		expect(page.cashout().isButtonPresent("cancel", 0)).toBe(true);
		expect(page.cashout().isButtonPresent("confirm", 0)).toBe(true);

		page.cashout().clickButton("cancel", 0);
		expect(page.cashout().isButtonPresent("cancel", 0)).toBe(false);
		expect(page.cashout().isButtonPresent("confirm", 0)).toBe(false);
		expect(page.cashout().betsAmount()).toBeGreaterThan(0);
	});
	
	it('Verify you can see the Cashout link when logged in, with default counter greater or equal than 0', function() {
		page.visit('mobile/sportsbook');
		expect(page.cashout().isCashoutPresent()).toBe(true);
		expect(page.cashout().cashoutBetsAmount()).toBeGreaterThan(-1);
	});

	it('Verify that you can cashout a real bet', function(){
		var oldValue = page.cashout().badgeAmount();
		page.cashout().openCashout();
		page.cashout().clickButton("cashout", 0);
		page.cashout().clickButton("confirm", 0);
		page.visit('mobile/sportsbook');
		expect(page.cashout().isCashoutPresent()).toBe(true);
		expect(page.cashout().isBadgeUpdated(oldValue)).toBe(true);
	});

	it('Verify you cant see the cashout link when logged out.', function() {
		page.logout();
		page.visit('mobile/sportsbook');
		expect(page.cashout().isCashoutPresent()).toBe(false);
	});

	it('Verify if there are more than 5 bets a show more button is displayed and expands more bets when clicked', function() {
		page.logout();
		page.login('cashout');
		page.cashout().openCashout();
		expect(page.cashout().isButtonPresent("showmore", 0)).toBe(true);
		page.cashout().showMore();
		expect(page.cashout().betsAmount()).toBeGreaterThan(5);
	});	

}); 