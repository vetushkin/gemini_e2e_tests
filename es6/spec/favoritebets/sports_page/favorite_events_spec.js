var SportsPage = require('../../../source/general/pages/sports_page.js');


describe('Sports page Favorite events test', function(){
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

	it('Verify the amount of events inside the Favorite events tab is more than 1', function(){
		expect(page.favoriteTab().getCount()).toBeGreaterThan(1);
	});

	for (let i = 0; i < 9; i++) {
		it('Verify that when you click on an event #' + i + ' from Favorite events tab an event page opens', function() {
			page.favoriteTab().clickEvent(i);
			expect(page.currentUrl()).toContain("eventpaths");
		});
	}

});
