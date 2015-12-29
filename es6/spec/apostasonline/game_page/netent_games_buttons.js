var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Netent games buttons check', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('casino');
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

	it('Verify that you can click on the close button in a popup game', function(){
		page.selectRandomGame('free');
		page.goToPopup();
		page.clickGameButton('close');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the resize button in a popup game', function(){
		page.selectRandomGame('free');
		page.goToPopup();
		expect(page.getWindowSize("width")).toBeLessThan(700);
		expect(page.getWindowSize("height")).toBeLessThan(700);
		page.clickGameButton('ToFull');
		expect(page.getWindowSize("width")).toBeGreaterThan(700);
		expect(page.getWindowSize("height")).toBeGreaterThan(700);
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
		page.selectRandomGame('real');
		page.goToPopup();
		page.clickGameButton('close');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the resize button in a popup game', function(){
		page.selectRandomGame('real');
		page.goToPopup();
		expect(page.getWindowSize("width")).toBeLessThan(700);
		expect(page.getWindowSize("height")).toBeLessThan(700);
		page.clickGameButton('ToFull');
		expect(page.getWindowSize("width")).toBeGreaterThan(700);
		expect(page.getWindowSize("height")).toBeGreaterThan(700);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click on the rules button in a popup game', function(){
		page.selectRandomGame('real');
		page.goToPopup();
		page.clickGameButton('rules');
		page.goToPopup(2);
		expect(page.currentUrl()).toContain('rules');
		expect(page.noError()).toBe(true);
	});
});