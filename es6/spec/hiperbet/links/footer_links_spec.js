var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){		
	});

	afterAll(function(){		
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
	});

	afterEach(function(){
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that Left Footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('left', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 8; i++) {
		it('Verify that Right Footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('right', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});