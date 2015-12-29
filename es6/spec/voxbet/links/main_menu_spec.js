var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Main menu test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
	});

	it('Verify that Home page doesnt show an error', function(){
		page.mainMenu().clickLink(2);
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 8; i++) {
		it('Verify that Main Menu page #'+ (i+1) +' doesnt show an error', function(){
			page.mainMenu().clickLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});