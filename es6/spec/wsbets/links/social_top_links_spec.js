var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Top links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});
	
	beforeEach(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterEach(function(){
	});

	it('Verify that Mobile link opens the correct page', function(){
		page.social().clickLink('mobile');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Contact Us link opens the correct page', function(){
		page.social().clickLink('contact_us');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Payments link opens the correct page', function(){
		page.social().clickLink('payments');
		expect(page.noError()).toBe(true);
	});

	it('Verify that About Us link opens the correct page', function(){
		page.social().clickLink('about');
		expect(page.noError()).toBe(true);
	});

});