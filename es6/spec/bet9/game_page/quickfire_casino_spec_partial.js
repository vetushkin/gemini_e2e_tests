var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Quickfire casino page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('games');
		page.login('support');
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

	it('Verify that you can see your balance', function(){
		expect(page.showsBalance()).toBe(true);
	});

	it('Verify that Deposit button opens the correct page', function(){
		page.clickLink('pay_in');
		page.goToPopup();
		expect(page.currentUrl()).toContain('to=GamesWallet');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=GamesWallet');
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select the game #'+ (i+1) +' and click free play', function(){
			page.selectGames('free', i);
			page.goToPopup();
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
			expect(page.currentUrl()).toContain('quickfire');
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can the game #'+ (i+1) +' game and click real play', function(){
			page.selectGames('real', i);
			page.goToPopup();
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
			expect(page.currentUrl()).toContain('quickfire');
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select the game #'+ (i+1) +' from bottom list and click real play', function(){
			page.selectNetentGames('left', i);
			page.goToPopup();
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
			expect(page.currentUrl()).toContain('quickfire');
		});
	}

});