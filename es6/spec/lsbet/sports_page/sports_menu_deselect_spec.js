var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that click on a selected element deselects it such that the offers are updated', function(){
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

	it('Verify that you can after deselecting seelcted leagues they\'re removed from the coupons' , function(){
		page.sportsMenu().clickLink('Football');
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickCountry(1);
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickLeague(1);
		page.sportsMenu().clickLeague(2);
		//Deselecting
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickLeague(1);
		expect(page.showedGames()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can after deselecting seelcted leagues they\'re removed from the coupons' , function(){
		page.sportsMenu().clickLink('Football');
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickCountry(1);
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickLeague(1);
		page.sportsMenu().clickLeague(2);
		//Deselecting
		page.sportsMenu().clickLeague(1);
		expect(page.showedGames()).toBeGreaterThan(1);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can after deselecting seelcted leagues they\'re removed from the coupons' , function(){
		page.sportsMenu().clickLink('Football');
		page.sportsMenu().clickCountry(0);
		page.sportsMenu().clickCountry(1);
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickLeague(1);
		page.sportsMenu().clickLeague(2);
		page.sportsMenu().clickLeague(3);
		page.sportsMenu().clickLeague(4);
		//Deselecting
		page.sportsMenu().clickLeague(0);
		page.sportsMenu().clickLeague(2);
		expect(page.showedGames()).toBeGreaterThan(2);
		expect(page.noError()).toBe(true);
	});

});