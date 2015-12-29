var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Cashout tests', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that you can place a real bet', function(){
		var oldValue = page.cashout().badgeAmount();
		page.sportsMenu().clickLink('Futebol');
		page.addBets(1);
		page.betslip().placeStakes(2);
		expect(page.betslip().betsAmount()).toEqual(1);
		page.betslip().placeBets();
		expect(page.betslip().successMessagePresent()).toBe(true);
		expect(page.cashout().isBadgeUpdated(oldValue)).toBe(true);
	});

	it('Verify that you can see an amount of bets on the cashout badge', function(){
		page.cashout().openTab();
		expect(page.cashout().badgeAmount()).toBeGreaterThan(0);
	});

	for (let i = 0; i < 5; i++) {
		it('Verify that you can see bet type, amount, market name, market type in the bet #' + (i+1) + '', function(){
			page.cashout().openTab();
			expect(page.cashout().isTypeAmountCorrect(i)).toBe(true);
			expect(page.cashout().isEventCorrect(i)).toBe(true);
			expect(page.cashout().isMarketCorrect(i)).toBe(true);
			expect(page.cashout().isOutcomeCorrect(i)).toBe(true);
		});	
	}

	it('Verify that a bet is not cashed out if you click the cancel button', function(){
		page.cashout().openTab();
		page.cashout().clickButton('cashout');
		page.cashout().clickButton('cancel');
		expect(page.cashout().isButtonPresent('confirm')).toBe(false);
		expect(page.cashout().isButtonPresent('cancel')).toBe(false);
	});	

	it('Verify that you can see confirm and cancels buttons after the click on cashout button', function(){
		page.cashout().openTab();
		page.cashout().clickButton('cashout');
		expect(page.cashout().isButtonPresent('confirm')).toBe(true);
		expect(page.cashout().isButtonPresent('cancel')).toBe(true);
		page.cashout().clickButton('cancel');
	});

	it('Verify that you can cashout a real bet', function(){
		var oldValue = page.cashout().badgeAmount();
		page.cashout().openTab();
		page.cashout().clickButton('cashout');
		page.cashout().clickButton('confirm');
		expect(page.cashout().isBadgeUpdated(oldValue)).toBe(true);
	});

	it('Verify that cashout shows a warning message instead of bets when logged out', function(){
		page.forceLogout();
		page.cashout().openTab();
		expect(page.cashout().showsMessage()).toBe(true);
	});

	it('Verify that you can see show more button if there are more than 5 bets', function(){
		page.forceLogout();
		page.login('cashout');
		page.removeChat();
		page.cashout().openTab();
		page.cashout().clickShowButton();
		expect(page.cashout().betsAmount()).toBeGreaterThan(5);
	});

});
