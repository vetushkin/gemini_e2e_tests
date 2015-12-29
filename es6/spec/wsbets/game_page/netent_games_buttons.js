var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Netent games buttons check', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('netent_splash');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){	
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can click on the close button in a popup game', function(){
		page.selectRandomGame('free');
		page.goToPopup();
		page.clickGameButton('close');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the resize button in a popup game', function(){
		page.selectRandomGame('free');
		page.goToPopup();
		expect(page.getWindowSize("width")).toBeLessThan(630);
		expect(page.getWindowSize("height")).toBeLessThan(630);
		page.clickGameButton('ToFull');
		expect(page.getWindowSize("width")).toBeGreaterThan(630);
		expect(page.getWindowSize("height")).toBeGreaterThan(630);
		page.clickGameButton('ToNormal');
		expect(page.getWindowSize("width")).toBeLessThan(630);
		expect(page.getWindowSize("height")).toBeLessThan(630);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the rules button in a popup game', function(){
		page.selectRandomGame('free');
		page.goToPopup();
		page.clickGameButton('rules');
		page.goToPopup(2);
		expect(page.currentUrl()).toContain('rules');
		expect(page.noError()).toBe(true);
		page.closePopup(2);
	});

	it('Verify that you can click on the close button in a popup game', function(){
		page.login();
		page.selectRandomGame('real');
		page.goToPopup();
		page.clickGameButton('close');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the resize button in a popup game', function(){
		page.login();
		page.selectRandomGame('real');
		page.goToPopup();
		expect(page.getWindowSize("width")).toBeLessThan(630);
		expect(page.getWindowSize("height")).toBeLessThan(630);
		page.clickGameButton('ToFull');
		expect(page.getWindowSize("width")).toBeGreaterThan(630);
		expect(page.getWindowSize("height")).toBeGreaterThan(630);
		page.clickGameButton('ToNormal');
		expect(page.getWindowSize("width")).toBeLessThan(630);
		expect(page.getWindowSize("height")).toBeLessThan(630);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the rules button in a popup game', function(){
		page.login();
		page.selectRandomGame('real');
		page.goToPopup();
		page.clickGameButton('rules');
		page.goToPopup(2);
		expect(page.currentUrl()).toContain('rules');
		expect(page.noError()).toBe(true);
		page.closePopup(2);
	});
});