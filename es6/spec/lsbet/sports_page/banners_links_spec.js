var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Banners links test', function(){
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

	for (let i = 0; i < 4; i++) {
		it('Verify that Left Banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.leftMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 0; i < 3; i++) {
		it('Verify that Right Betslip link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickLink('betslip', i);
			expect(page.noError()).toBe(true);
		});
	}

	for (let i = 2; i < 5; i++) {
		it('Verify that Right Banner link #'+ (i+1) +' doesnt show an error page', function(){
			page.rightMenu().clickBannerLink(i);
			expect(page.noError()).toBe(true);
		});
	}

	it('Verify that Right Banner link #6 doesnt show an error page', function(){
		page.rightMenu().clickBannerLink(5);
		page.goToPopup();
		expect(page.noError()).toBe(true);
	});

	it('Verify that Live Chat link doesnt show an error page', function(){
		page.rightMenu().clickBannerLink(1);
		page.goToPopup();
		expect(page.noError()).toBe(true);
	});

});