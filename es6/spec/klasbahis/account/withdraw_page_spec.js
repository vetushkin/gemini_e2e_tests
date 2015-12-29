var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();	
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/withdraw');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that BANKA HAVALE/EFT withdraw link doesnt show an error', function(){
		page.clickLink('BANKA HAVALE/EFT');
		expect(page.noError()).toBe(true);
	});

	it('Verify that EcoCard withdraw link doesnt show an error', function(){
		page.clickLink('EcoCard');
		expect(page.noError()).toBe(true);	});

	it('Verify that NETELLER withdraw link doesnt show an error', function(){
		page.clickLink('NETELLER');
		expect(page.noError()).toBe(true);
	});

});