var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Main menu test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	it('Verify that Sports page doesnt show an error', function(){
		page.mainMenu().clickLink(0);
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that page #'+ (i+1) +' doesnt show an error', function(){
			page.mainMenu().clickLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});