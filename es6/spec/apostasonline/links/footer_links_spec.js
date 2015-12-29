var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.removeChat();
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 17; i++) {
		it('Verify that link #' + (i+1) + ' doesnt show an error page', function(){
			page.footer().clickLink('footer_partner_logos', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});