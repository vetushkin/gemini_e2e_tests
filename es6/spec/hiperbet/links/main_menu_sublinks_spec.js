var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Pages sublinks test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	for (let i = 0; i < 2; i++) {
		it('Verify that Casino sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('casino');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});