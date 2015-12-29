var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Sports page banners links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
	});

	afterEach(function(){
	});

	for (let i = 1; i < 4; i++) {
		it('Verify that Right Banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}	
	
});