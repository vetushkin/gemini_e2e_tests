var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Netent games page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('netent_splash');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.closeAd();
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can see your balance and bonus points', function(){
		expect(page.showsBalance()).toBe(true);
	});
	
	for (let i = 0; i < 28; i++) {
		it('Verify that you can select game #'+ (i+1) +' and click real play', function(){
			page.selectGames('real', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 94; i++) {
		it('Verify that you can select game #'+ (i+1) +' from bottom list and click real play', function(){
			page.selectNetentGames('left');
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 28; i++) {
		it('Verify that you can select game #'+ (i+1) +' and click free play', function(){
			page.logout();
			page.visit('netent_splash');
			page.selectGames('real', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('netent_splash/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

});