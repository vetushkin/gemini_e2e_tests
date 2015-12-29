var GamesMobilePage = require('../../../source/mobile/mobile_pages/games_mobile_page.js');

describe('Casino page tests', function(){
	var page = new GamesMobilePage();

	beforeAll(function(){
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/casino');
	});
	
	afterEach(function(){
	});

	it('Verify that you can see balances and they are in the correct format', function(){
		expect(page.isCorrect('balance')).toBe(true);
		//expect(page.isCorrect('bonus')).toBe(true);
		expect(page.isCorrect('points')).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that you can see on the top that you are logged in', function(){
		expect(page.isLoggedIn()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that by click on the top logo the landing page is opened', function(){
		page.clickLogo();
		expect(page.currentUrl()).not.toContain('casino');
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that by click on the account button the account page is opened', function(){
		page.clickAccountButton();
		expect(page.currentUrl()).toContain('account');
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that you can launch the promo game in real mode', function(){
		page.clickPromoGame();
		page.startGame('real');
		expect(page.isGameStarted()).toBe(true);
	});

	it('Verify that you can launch the promo game in free mode', function(){
		page.clickPromoGame();
		page.startGame('free');
		expect(page.isGameStarted()).toBe(true);
	});

	for (var i = 0; i < 3; i++) {
		it('Verify that you can start three random casino games in free mode', function(){
			page.visit('mobile/casino');
			page.clickRandomGame();
			page.startGame('free');
			expect(page.isGameStarted()).toBe(true);
		});
	}

	for (var i = 0; i < 3; i++) {
		it('Verify that you can start three random casino games in real mode', function(){
			page.visit('mobile/casino');
			page.clickRandomGame();
			page.startGame('real');
			expect(page.isGameStarted()).toBe(true);
		});
	}

	it('Verify that return button works on a game page', function(){
		page.clickPromoGame();
		page.clickReturnButton();
		expect(page.currentUrl()).toContain('casino');
	});

	it('Verify that you can start a random casino games in free mode while logged out', function(){
		page.forceLogout();
		page.visit('mobile/casino');
		page.clickRandomGame();
		page.startGame('free');
		expect(page.isGameStarted()).toBe(true);
	});

	it('Verify that by click on the register button the registration page is opened', function(){
		page.logout();
		page.visit('mobile/casino');
		page.clickRegisterButton();
		expect(page.currentUrl()).toContain('registration');
		expect(page.brokenImagesCount()).toBe(0);
	});

});