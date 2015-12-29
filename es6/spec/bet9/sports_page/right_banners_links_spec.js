var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Right banners links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.logout();
		page.removeChat();
		page.betslip().deleteBets(5);
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 7; i++) {
		it('Verify that link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(0);
			page.goToPopup();
			expect(page.noError()).toBe(true);
		});
	}
	
});