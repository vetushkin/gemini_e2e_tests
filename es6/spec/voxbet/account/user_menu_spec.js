var SportsPage = require('../../../source/general/pages/sports_page.js');

xdescribe('User Menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login();		
	});

	afterAll(function(){
		page.logout();
	});
	
	beforeEach(function() {
	});

	afterEach(function(){
	});

	it('Verify that User Menu summary link opens user summary page', function(){
		page.userMenu().clickLink('summary');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	})

	it('Verify that User Menu deposit link opens user deposit page', function(){
		page.userMenu().clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu withdraw link opens user withdraw page', function(){
		page.userMenu().clickLink('withdraw');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('withdraw');
	});

	it('Verify that User Menu summary link opens user summary page', function(){
		page.userMenu().clickLink('summary');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu history link opens user summary page', function(){
		page.userMenu().clickLink('history');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('history');
	});

	it('Verify that User Menu contacts link opens user contacts page', function(){
		page.userMenu().clickLink('contact_center');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('contact_center');
	});

	it('Verify that User Menu logout link logs out a user', function(){
		page.userMenu().clickLink('do_logout');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('sportsbook');
	});

});