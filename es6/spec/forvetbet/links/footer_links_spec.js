var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer first row links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){		
	});

	afterAll(function(){		
	});

	beforeEach(function(){
		page.visit('');
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 16; i++) {
		it('Verify that Row link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_menu', i);
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 6; i++) {
		it('Verify that Left Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('first_column', i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

	for (let i = 0; i < 6; i++) {
		it('Verify that Right Column link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('third_column', i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
			//expect(page.brokenImagesCount()).toBe(0);
		});
	}

});