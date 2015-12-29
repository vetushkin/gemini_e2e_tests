var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Articles and News coupon functionality testing', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function() {
		page.visit('promociones');
		page.removeChat();
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that first article doesnt show an error page', function(){
			page.articles().selectPromotion(i);
			expect(page.noError()).toBe(true);
		});	
	}	
});