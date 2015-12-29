var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sports menu multiple events selections', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that you can select 1 game from Basketbol sport', function(){
		page.sportsMenu().clickLink('Basketbol');
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickLeague(0);
		expect(page.showedGames()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});
	
	it('Verify that you can select 1 game from Futbol sport', function(){
		page.sportsMenu().clickLink('Futbol');
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickCountry(0);
		expect(page.showedGames()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select one game from a random sport', function(){
		page.sportsMenu().clickRandomSport();
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickLeague(0);
		expect(page.showedGames()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

});