var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sports menu multiple events select in one Sport category', function(){
	var page = new SportsPage();

	beforeAll(function(){	
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
	});

	afterEach(function(){
	});

	it('Verify that you can select 2 games from Tennis sport', function(){
		page.sportsMenu().clickLink('Tennis');
		page.sportsMenu().clickRandomCountry(2);
		page.sportsMenu().clickRandomLeague(2);
		expect(page.showedGames()).toBeGreaterThan(1);
		expect(page.noError()).toBe(true);
	});
	
	it('Verify that you can select 3 games from Football sport', function(){
		page.sportsMenu().clickLink('Football');
		page.sportsMenu().clickRandomCountry(3);
		page.sportsMenu().clickRandomLeague(3);
		expect(page.showedGames()).toBeGreaterThan(2);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select one game from a random sport', function(){
		page.sportsMenu().clickRandomSport();
		page.sportsMenu().clickRandomCountry(1);
		page.sportsMenu().clickRandomLeague(1);
		expect(page.showedGames()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

});