var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Banners links test', function(){
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

	for (let i = 0; i < 2; i++) {
		it('Verify that left menu link #'+ (i+1) +' doesnt show an error page', function(){
			page.leftMenu().clickMenuLink(i);
			expect(page.noError()).toBe(true);
		});
	}
	
	it('Verify that left menu link #3 doesnt show an error page', function(){
		page.leftMenu().clickBannerLink(0);
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 5; i++) {
		it('Verify that right menu link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});