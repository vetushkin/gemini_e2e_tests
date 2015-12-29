var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');	
	});

	afterAll(function(){		
	});

	beforeEach(function(){
		page.removeChat();
	});

	afterEach(function(){
		page.visit('sportsbook');
	});

	for (let i = 0; i < 4; i++) {
		it('Verify that First Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('first_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Second Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('second_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Third Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('third_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that Fourth Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('fifth_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});