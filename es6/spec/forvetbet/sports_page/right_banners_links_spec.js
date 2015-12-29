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
		page.betslip().deleteAllBets();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that Right Banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});