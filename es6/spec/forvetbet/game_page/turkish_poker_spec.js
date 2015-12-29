var GamesPage = require('../../../source/general/pages/games_page.js');

xdescribe('Turkish Poker page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('turk_pokeri');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){	
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can Start Turkish Poker game', function(){
		page.startTurkishPoker();
		page.goToPopup();
		expect(page.isGameLoaded('table')).toBe(true);
	});

});