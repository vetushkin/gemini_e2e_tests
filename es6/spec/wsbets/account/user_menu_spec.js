var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('User Menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	afterEach(function(){
	});

	it('Verify that User Menu \'user_welcome\' link opens user profile page', function(){
		page.userMenu().clickLink('user_welcome');
		expect(page.currentUrl()).toContain('profile');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'user_account_number\' link opens user summary page', function(){
		page.userMenu().clickLink('user_account_number');
		expect(page.currentUrl()).toContain('summary');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'user_balance\' link opens user history page', function(){
		page.userMenu().clickLink('user_balance');
		expect(page.currentUrl()).toContain('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'overview\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('overview');
		expect(page.currentUrl()).toContain('summary');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'my_bets\' link opens user history page', function(){
		page.userMenu().showList('my_account').clickLink('my_bets');
		expect(page.currentUrl()).toContain('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'deposit\' link opens user deposits page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.currentUrl()).toContain('deposit');
		expect(page.noError()).toBe(true);
	});

});