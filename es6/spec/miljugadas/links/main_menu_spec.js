var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Main menu test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 2; i++) {
		it('Verify that Main Menu page #'+ (i+1) +' doesnt show an error', function(){
			page.mainMenu().clickLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	it('Verify that Sports Sports page doesnt show an error', function(){
		page.mainMenu().clickLink(0);
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
	});
});