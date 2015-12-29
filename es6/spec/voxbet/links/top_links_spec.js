var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Top links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});
	
	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Deposit link opens the correct page', function(){
		page.social().clickLink('deposit');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw link opens the correct page', function(){
		page.social().clickLink('withdraw');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Summary link opens the correct page', function(){
		page.social().clickLink('summary');
		expect(page.noError()).toBe(true);
	});

	it('Verify that History link opens the correct page', function(){
		page.social().clickLink('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Contact link opens the correct page', function(){
		page.social().clickLink('contact');
		expect(page.noError()).toBe(true);
	});
});