var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('User Menu links test', function(){
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

	it('Verify that User Menu \'user_account_number\' link opens user summary page', function(){
		page.userMenu().clickLink('user_welcome');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('profile');
	});

	it('Verify that User Menu \'deposit\' link opens deposit page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu \'overview\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('overview');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'my_bets\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('my_bets');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('history');
	});

});