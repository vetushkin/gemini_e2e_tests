var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sports page sublinks test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 8; i++) {
		it('Verify that Sports Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('sportsbook');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});		
	}
	
	for (let i = 0; i < 8; i++) {
		it('Verify that Live Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});		
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Virtual Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('virtuals/virtual_league');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});		
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('netent_splash');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});		
	}

	for (let i = 0; i < 5; i++) {
		it('Verify that Live Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live_casino');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			expect(page.brokenImagesCount()).toBe(0);
		});		
	}

});