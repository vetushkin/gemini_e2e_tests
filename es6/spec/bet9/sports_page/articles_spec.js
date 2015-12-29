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

	for (let i = 0; i < 2; i++) {
		it('Verify that article #'+ (i+1) +' doesnt show an error page', function(){
			page.articles().selectArticle(i);
			expect(page.noError()).toBe(true);
		});
	}

		it('Verify that article time is changed when you change the timezone', function() {
			var before;
			var after;
			page.articles().selectZone(1);
			page.articles().selectArticle(0);
			before = page.articles().articleTime(0);
			page.articles().selectZone(2);
			page.articles().selectArticle(0);
			after = page.articles().articleTime(0);
			expect(after).not.toBe(before);
		});
});