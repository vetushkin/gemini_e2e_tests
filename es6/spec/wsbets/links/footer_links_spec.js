var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');	
	});

	afterAll(function(){		
	});

	beforeEach(function(){
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 5; i++) {
		it('Verify that first column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('first_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 5; i++) {
		it('Verify that second column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('second_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 5; i++) {
		it('Verify that third column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('third_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 5; i++) {
		it('Verify that fourth column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('fourth_column', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that footer menu link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_menu', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});