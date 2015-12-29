var CasinoMobilePage = require('../../../source/mobile/mobile_pages/casino_mobile_page.js');

describe('Live Casino page tests', function(){
	var page = new CasinoMobilePage();

	beforeAll(function(){
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/live_casino');
	});
	
	afterEach(function(){
	});

	it('Verify that you can see the balance and it is in the correct format', function(){
		expect(page.isBalanceCorrect()).toBe(true);
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

	it('Verify that you can launch the promo game', function(){
		page.startPromoGame();
		expect(page.isGameStarted()).toBe(true);
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that you can start #'+ (i+1) +' live casino game', function(){
			page.visit('mobile/live_casino');
			page.startLiveGame(i);
			expect(page.isGameStarted()).toBe(true);
		});
	}

	it('Verify that when you try to start a game while not logged in you see a login form instead', function(){
		page.logout();
		page.visit('mobile/live_casino');
		page.startLiveGame(0);
		expect(page.isLoggedOut()).toBe(true);
	});

	it('Verify that by click on the register button the registration page is opened', function(){
		page.logout();
		page.visit('mobile/live_casino');
		page.clickRegisterButton();
		expect(page.currentUrl()).toContain('registration');
		expect(page.brokenImagesCount()).toBe(0);
	});

});