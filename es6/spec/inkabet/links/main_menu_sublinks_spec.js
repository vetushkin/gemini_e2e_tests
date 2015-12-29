var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Pages sublinks test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.removeChat();
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that Sports Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('sportsbook');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('netent_splash');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 2; i++) {
		it('Verify that Live Casino Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('live_casino');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Promociones Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('info/promociones');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Tutoriales Page sublink #'+ (i+1) +' doesnt show an error', function(){
			page.visit('info/tutorial');
			page.mainMenu().clickSubLink(i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});