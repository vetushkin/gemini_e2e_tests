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
	
	afterEach(function(){
	});

	it('Verify that User Menu \'my_account\' link opens user profile page', function(){
		page.userMenu().showList('my_account').clickLink('overview');
		expect(page.currentUrl()).toContain('summary');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'deposit\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('my_bets');
		expect(page.currentUrl()).toContain('history');
		expect(page.noError()).toBe(true);
	});

	it('Verify that User Menu \'last\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.currentUrl()).toContain('withdraw');
		expect(page.noError()).toBe(true);
	});
});