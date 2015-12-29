var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Articles and News coupon functionality testing', function(){
	var page = new SportsPage();

	beforeAll(function(){	
	});

	afterAll(function(){
	});

	beforeEach(function() {
		page.visit('');
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that article #'+ (i+1) +' doesnt show an error page', function(){
			page.articles().selectArticle(i);
			expect(page.noError()).toBe(true);
		});
	}
});