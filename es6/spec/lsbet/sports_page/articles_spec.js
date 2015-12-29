var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Articles and News coupon functionality testing', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function() {
		page.visit('info/promotions');
	});

	afterEach(function() {
		page.closePopup();
	});

	it('Verify that you can open articles page from the articles widget', function(){
		page.visit('');
		page.articles().openPromotions();
		expect(page.noError()).toBe(true);
	});

	for (let i = 0; i < 7; i++) {
		it('Verify that promotion article #'+ (i+1) +'doesnt show an error page', function(){
			page.articles().selectPromotion(i);
			expect(page.noError()).toBe(true);
		});
	}
	
});