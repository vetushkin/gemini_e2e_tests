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

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that Sports Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('sportsbook');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Live Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Live Casino sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live_casino');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	it('Verify that Virtual sublink #1 doesnt show an error', function(){
		page.visit('virtuals/virtual_league');
		page.mainMenu().clickSubLink(0);
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Netent sublink #1 doesnt show an error', function(){
		page.visit('netent_splash');
		page.mainMenu().clickSubLink(0);
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that EUR Casino sublink #1 doesnt show an error', function(){
		page.visit('tain_splash');
		page.mainMenu().clickSubLink(0);
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
	});


	for (let i = 0; i < 5; i++) {
		it('Verify that Turkish Poker sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('turk_pokeri');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});