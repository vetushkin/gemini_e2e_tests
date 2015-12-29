var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login();	
	});

	afterAll(function(){		
	});

	beforeEach(function(){
	});

	afterEach(function(){
		page.closePopup();
	});

	for (let i = 0; i < 6; i++) {
		it('Verify that footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_menu', i);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 6; i++) {
		it('Verify that footer partner logos link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('partner_logos', i);
			page.goToPopup();
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 24; i++) {
		it('Verify that footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('footer_texts', i);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 4; i++) {
		it('Verify that info link #'+ (i+1) +' doesnt show an error page', function(){
			page.userMenu().clickInfoLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});