var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Left banners links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that left banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.leftMenu().clickMenuLink(i);
			expect(page.noError()).toBe(true);
		});
	}

	it('Verify that fourth left banner link doesnt show an error page', function(){
		page.leftMenu().clickLink('menu_container', 0);
		page.goToPopup();
		expect(page.noError()).toBe(true);
		page.closePopup();
	});

	it('Verify that first right banner link doesnt show an error page', function(){
		page.rightMenu().clickBannerLink(0);
		expect(page.noError()).toBe(true);
	});
	
});