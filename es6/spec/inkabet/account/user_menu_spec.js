var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('User Menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login();		
	});

	afterAll(function(){
		page.forceLogout();
	});
	
	beforeEach(function() {
	});

	afterEach(function(){
	});

	it('Verify that User Menu \'user_welcome\' link opens user profile page', function(){
		page.userMenu().clickLink('user_welcome');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('profile');
	});

	it('Verify that User Menu \'user_account_number\' link opens user summary page', function(){
		page.userMenu().clickLink('user_account_number');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'user_balance\' link opens user summary page', function(){
		page.userMenu().clickLink('user_balance');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('history');
	});

	it('Verify that User Menu \'overview\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('overview');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'transfer_funds\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('transfer_funds');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('transfer_funds');
	});

	it('Verify that User Menu \'history\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('history');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('history');
	});

	it('Verify that User Menu \'profile\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('profile');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('profile');
	});

	it('Verify that User Menu \'deposit\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu \'withdraw\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('withdraw');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('withdraw');
	});

	it('Verify that User Menu \'netent bonus\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('netent bonus');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('netent_bonus');
	});

	it('Verify that User Menu \'logout\' link opens sports page', function(){
		page.userMenu().showList('my_account').clickLink('logout');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('sportsbook');
	});

});