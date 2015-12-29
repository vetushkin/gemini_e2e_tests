var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sublinks Menu tests', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that Live sublink #1 doesnt show an error', function(){
		page.visit('sportsbook');
		page.mainMenu().clickSubLink(0);
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	for (let i = 1; i < 4; i++) {
		it('Verify that Sports Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('sportsbook');
			page.mainMenu().clickSubLink(i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 2; i++) {
		it('Verify that Live Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live');
			page.mainMenu().clickSubLink(i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Game Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('game');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});
	}

});