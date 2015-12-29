var SportsPage = require('../../../source/general/pages/sports_page.js');

//Popular League links are the part of left_aside menus
describe('Popular League menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
		page.betslip().deleteAllBets();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 10; i++) {
		it('Verify that Popular link #'+ (i+1) +' shows at least one event', function(){
			page.leftMenu().clickPopularLink(i);
			expect(page.betsAmount()).toBeGreaterThan(0);
		});
	}

});
