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
	
	beforeEach(function() {
	});

	afterEach(function(){
	});

	it('Verify that User Menu \'Minha conta\' link opens user summary page', function(){
		page.userMenu().clickLink('my_account');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'Sacar\' link opens withdraw page', function(){
		page.userMenu().clickLink('withdraw');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('withdraw');
	});
	
	it('Verify that User Menu \'Depositar\' link opens deposits page', function(){
		page.userMenu().clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that username, currency and balance are in a correct format in the User Menu', function(){
		expect(page.userMenu().isUsernameCorrect()).toBe(true);
		expect(page.userMenu().isCurrencyCorrect()).toBe(true);
		expect(page.userMenu().isBalanceCorrect()).toBe(true);
	});

	it('Verify that you can see social media buttons(at least 1) in the User Menu', function(){
		expect(page.userMenu().socialLinksAmount()).toBeGreaterThan(0);
	});

	it('Verify that User Menu \'Sair\' link logs out user successfully', function(){
		page.userMenu().clickLink('logout');
		expect(page.noError()).toBe(true);
		expect(page.userMenu().isSubmitButtonPresent()).toBe(true);
	});
});