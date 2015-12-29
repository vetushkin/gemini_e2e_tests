var LandingMobilePage = require('../../../source/mobile/mobile_pages/landing_mobile_page.js');

describe('Links test', function(){
	var page = new LandingMobilePage();

	beforeAll(function(){
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('');
	});
	
	afterEach(function(){
	});

	it('Verify that Terms link opens the correct page', function(){
		page.visit('mobile/account');
		page.clickLink('terms');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('terms');
	});

	it('Verify that Desktop version link opens the correct page', function(){
		page.visit('mobile/account');
		page.clickLink('full');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).not.toContain('mobile');
	});

	it('Verify that Footer Home link opens the correct page', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('home');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('mobile');
	});

	it('Verify that Footer Live link opens the correct page', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('live');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('live');
	});

	it('Verify that Footer Schedule link opens the correct page', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('schedule');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('schedule');
	});

	it('Verify that Footer Account link opens the correct page', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('account');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('account');
	});
});