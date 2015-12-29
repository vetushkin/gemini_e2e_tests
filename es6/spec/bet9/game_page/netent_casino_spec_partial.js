var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Netent games page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('netent_splash');
		page.login();
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.closeAd();
		page.removeChat();
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can see your balance and bonus points', function(){
		expect(page.showsBonus()).toBe(true);
		expect(page.showsBalance()).toBe(true);
	});

	it('Verify that Deposit button opens the correct page', function(){
		page.clickLink('pay_in');
		page.goToPopup();
		expect(page.currentUrl()).toContain('to=NetEntCasino');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=NetEntCasino');
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select random game and click free play', function(){
			page.selectRandomGame('free');
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select random game and click real play', function(){
			page.selectRandomGame('real');
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select random game from bottom list and click real play', function(){
			page.selectRandomNetentGame('bottom');
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

});