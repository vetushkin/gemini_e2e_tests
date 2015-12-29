var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Pages sublinks test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});

	beforeEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that Sports Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('sportsbook');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 2; i++) {
		it('Verify that Live Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 1; i++) {
		it('Verify that Virtuals Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('virtuals/virtual_league');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('netent_splash');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Live Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live_casino');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 2; i++) {
		it('Verify that Games Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('games');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i+=3) {
		it('Verify that Poker Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('poker_splash');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 1; i++) {
		it('Verify that VIP Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('vip');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});