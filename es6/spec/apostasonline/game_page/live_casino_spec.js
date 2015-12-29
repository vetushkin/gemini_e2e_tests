var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Live casino page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('cassino-ao-vivo');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can see your balance', function(){
		expect(page.showsBalance()).toBe(true);
	});

	it('Verify that Deposit button opens the correct page', function(){
		page.clickLink('pay_in');
		page.goToPopup();
		expect(page.currentUrl()).toContain('to=LiveCasino');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=LiveCasino');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can launch the Black Jack game', function(){
		page.loadGame('blackjack');
		page.goToPopup();
		expect(page.isGameLoaded('flashContent')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can launch the Roulette game', function(){
		page.loadGame('roulette');
		page.goToPopup();
		expect(page.isGameLoaded('flashContent')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can launch the Casino Holdem game', function(){
		page.loadGame('holdem');
		page.goToPopup();
		expect(page.isGameLoaded('flashContent')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can launch the Baccarat game', function(){
		page.loadGame('baccarat');
		page.goToPopup();
		expect(page.isGameLoaded('flashContent')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});