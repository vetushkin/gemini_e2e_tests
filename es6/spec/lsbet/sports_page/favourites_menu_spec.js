var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Favourites menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.betslip().deleteAllBets();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that link #'+ (i+1) +' shows at least one event', function(){
			page.leftMenu().clickFavouritesLink(i);
			expect(page.betsAmount()).toBeGreaterThan(0);
		});
	}
	
});