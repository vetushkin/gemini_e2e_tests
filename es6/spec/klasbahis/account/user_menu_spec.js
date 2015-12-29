var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('User Menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('sportsbook');
		page.removeChat();
	});
	
	afterEach(function(){
	});

	it('Verify that User Menu \'overview\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('overview');
		expect(page.currentUrl()).toContain('summary');
		expect(page.noError()).toBe(true);
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

	it('Verify that User Menu \'user_balance\' link opens user summary page', function(){
		page.userMenu().clickLink('user_balance');
		expect(page.currentUrl()).toContain('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'withdraw\' link opens withdraw page', function(){
		page.userMenu().showList('my_account').clickLink('withdraw');
		expect(page.currentUrl()).toContain('withdraw');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'transfer_funds\' link opens transfer funds page', function(){
		page.userMenu().showList('my_account').clickLink('transfer_funds');
		expect(page.currentUrl()).toContain('transfer_funds');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'overview\' link opens user history page', function(){
		page.userMenu().showList('my_account').clickLink('history');
		expect(page.currentUrl()).toContain('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'profile\' link opens user profile page', function(){
		page.userMenu().showList('my_account').clickLink('profile');
		expect(page.currentUrl()).toContain('profile');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'netent bonus\' link opens netent bonus page', function(){
		page.userMenu().showList('my_account').clickLink('netent bonus');
		expect(page.currentUrl()).toContain('netent');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'deposit\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.currentUrl()).toContain('deposit');
		expect(page.noError()).toBe(true);
	});

	

});