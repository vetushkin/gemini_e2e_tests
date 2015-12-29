var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('User Menu links test', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');	
	});

	afterAll(function(){
		page.logout();
	});
	
	beforeEach(function(){
		page.closeAd();
	});

	afterEach(function(){
	});

	it('Verify that User Menu \'Cashier\' link opens Deposit page', function(){
		page.userMenu().clickLink('cashier_top');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu \'My Account\' link opens user Summary page', function(){
		page.userMenu().clickLink('my_account');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'My Bets\' link opens user History page', function(){
		page.userMenu().showList('my_account').clickLSBetLink('My Bets');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('history');
	});

	it('Verify that User Menu \'Deposit\' link opens user Deposit page', function(){
		page.userMenu().showList('my_account').clickLSBetLink('Deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu \'Withdraw\' link opens user Withdraw page', function(){
		page.userMenu().showList('my_account').clickLSBetLink('Withdraw');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('withdraw');

	});

});