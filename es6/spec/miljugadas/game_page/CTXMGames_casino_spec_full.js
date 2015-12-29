var GamesPage = require('../../../source/general/pages/games_page.js');

describe('CTXMGames casino page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('game');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('game');
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can see your first and second balances', function(){
		expect(page.showsBalance()).toBe(true);
	});

	it('Verify that Deposit button opens the correct page', function(){
		page.clickLink('pay_in');
		page.goToPopup();
		expect(page.currentUrl()).toContain('to=CTXMGames');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=CTXMGames');
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 6; i++) {
		it('Verify that you can select random game and click fun play', function(){
			page.selectCTXMGames('demo', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('game/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
			expect(page.currentUrl()).toContain('games.offsidebet.com');
		});
	}

	for (let i = 0; i < 6; i++) {
		it('Verify that you can select random game and click real play', function(){
			page.selectCTXMGames('play', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('game/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 62; i++) {
		it('Verify that you can select random game from the left menu and click fun play', function(){
			page.selectLeftCTXMGames('fun', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('game/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 62; i++) {
		it('Verify that you can select random game from the left menu and click real play', function(){
			page.selectLeftCTXMGames('real', i);
			page.goToPopup();
			expect(page.currentUrl()).toContain('game/popup');
			expect(page.isGameLoaded()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

});