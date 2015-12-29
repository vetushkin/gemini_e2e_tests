var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Social links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
	});

	afterAll(function(){
	});

	afterEach(function(){
		page.closePopup();
		page.visit('sportsbook');
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

	it('Verify that İletişim link opens the correct page', function(){
		page.social().clickLink('contact_us');
		expect(page.currentUrl()).toContain('contact_us');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Affiliate link opens the correct page', function(){
		page.social().clickLink('affiliate');
		page.goToPopup();
		expect(page.currentUrl()).toContain('affiliate');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Hakkımızda link opens the correct page', function(){
		page.social().clickLink('about_us');
		expect(page.currentUrl()).toContain('about_us');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Mobil link opens the correct page', function(){
		page.social().clickLink('mobile');
		expect(page.currentUrl()).toContain('mobile');
		expect(page.noError()).toBe(true);
	});
});