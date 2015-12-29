var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer menu links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.removeChat();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_column_menu', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});	
	}

});