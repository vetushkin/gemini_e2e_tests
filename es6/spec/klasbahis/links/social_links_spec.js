var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Social links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');	
	});

	afterAll(function(){
	});
	
	beforeEach(function(){
		page.removeChat();
	});
	
	afterEach(function(){
		page.closePopup();
	});

	it('Verify that Facebook social link opens the Facebook page', function(){
		page.social().clickLink('facebook');
		page.goToPopup();
		expect(page.currentUrl()).toContain('facebook');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Contact Us link opens the correct page', function(){
		page.social().clickLink('contact');
		expect(page.noError()).toBe(true);
	});

	it('Verify that About Us link opens the correct page', function(){
		page.social().clickLink('about');
		expect(page.noError()).toBe(true);
	});

});