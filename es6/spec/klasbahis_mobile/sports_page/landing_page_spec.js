var LandingMobilePage = require('../../../source/mobile/mobile_pages/landing_mobile_page.js');

describe('Landing page links test', function(){
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

	

	it('Verify that Live Page link opens the correct page', function(){
		page.clickLink('live');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('live');
	});

	it('Verify that Account link opens the correct page', function(){
		page.clickLink('account');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('account');
	});

	it('Verify that Terms link opens the correct page', function(){
		page.clickLink('terms');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('terms');
	});

	it('Verify that Desktop version link opens the correct page', function(){
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

	it('Verify that you can close a popup opened by Footer Casino link', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('casino');
		page.clickPopup('close');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('sportsbook');
	});

	it('Verify that you can click Casino button in a popup opened by Footer Casino link', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('casino');
		page.clickPopup('casino_link');
		//expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('casino');
	});

	it('Verify that you can click Live Casino button in a popup opened by Footer Casino link', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('casino');
		page.clickPopup('live_casino_link');
		//expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('live_casino');
	});

	it('Verify that Footer Account link opens the correct page', function(){
		page.visit('mobile/sportsbook');
		page.clickFooterLink('account');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('account');
	});
});