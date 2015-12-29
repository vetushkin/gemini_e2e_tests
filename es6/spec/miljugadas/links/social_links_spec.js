var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Social links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');	
	});

	afterAll(function(){
	});
	
	afterEach(function(){
		page.closePopup();
	});

	it('Verify that Twitter social link opens the Twitter page', function(){
		page.social().clickLink('twitter');
		page.goToPopup();
		expect(page.currentUrl()).toContain('twitter');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Facebook social link opens the Facebook page', function(){
		page.social().clickLink('facebook');
		page.goToPopup();
		expect(page.currentUrl()).toContain('facebook');
		expect(page.noError()).toBe(true);
	});

});