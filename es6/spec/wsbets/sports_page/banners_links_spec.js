var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sports page banners links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
	});

	afterEach(function(){
		page.logout();
	});

	for (let i = 0; i < 2; i++) {
		it('Verify that left banner #'+ (i+1) +' link doesnt show an error page', function(){
			page.leftMenu().clickMenuLink(i);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that left banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.leftMenu().clickBannerLink(i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
			page.closePopup();
		});
	}

	it('Verify that left banner link #4 doesnt show an error page', function(){
		page.leftMenu().clickBannerLink(3);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Hemen Katıl right banner link doesnt show an error page', function(){
		page.rightMenu().clickLink('register_button', 0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Para Yatırma right banner link doesnt show an error page', function(){
		page.login();
		page.rightMenu().clickLink('deposit_button', 0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Bahislerim right banner link doesnt show an error page', function(){
		page.login();
		page.rightMenu().clickLink('history_button', 0);
		expect(page.noError()).toBe(true);
	});
	
});