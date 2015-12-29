var GamesPage = require('../../../source/general/pages/games_page.js');

describe('EUR casino page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('tain_splash');
		page.login();
		page.closeAd();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){	
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
		expect(page.currentUrl()).toContain('to=TainCasino');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=TainCasino');
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select the game #'+ (i+1) +' and click free play', function(){
			page.selectGames('free', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('tain_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select the game #'+ (i+1) +' and click real play', function(){
			page.selectGames('real', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('tain_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that you can select the game #'+ (i+1) +' from the left menu', function(){
			page.selectNetentGames('bottom', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('tain_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

});