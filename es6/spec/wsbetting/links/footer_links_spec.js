var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that left footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){		
	});

	afterAll(function(){		
	});

	beforeEach(function(){
		page.visit('sportsbook');
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 8; i++) {
		it('Verify that Footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_menu', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});