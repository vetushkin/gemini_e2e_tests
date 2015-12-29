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
		}

	);

	afterEach(function(){
	});

	it('Verify that User Menu \'Mi Cuenta\' link opens user summary page', function(){
		page.userMenu().showList('my_account').clickLink('my_account');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('summary');
	});

	it('Verify that User Menu \'Sacar\' link opens withdraw page', function(){
		page.userMenu().showList('my_account').clickLink('withdraw');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('withdraw');
	});
	
	it('Verify that User Menu \'Depósito\' link opens deposits page', function(){
		page.userMenu().showList('my_account').clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.currentUrl()).toContain('deposit');
	});

	it('Verify that User Menu \'Salir\' link logs out user successfully', function(){
		page.userMenu().clickLink('logout');
		expect(page.noError()).toBe(true);
		expect(page.userMenu().isSubmitButtonPresent()).toBe(true);
	});
});