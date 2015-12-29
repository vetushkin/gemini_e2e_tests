var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account page navigation test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('');
		page.login();		
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account');
	});
	
	afterEach(function(){
	});

	it('Verify that Wallet page doesnt show an error', function(){
		page.accountMenu().clickLink('wallet');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Deposit page doesnt show an error', function(){
		page.accountMenu().clickLink('deposit');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Withdraw page doesnt show an error', function(){
		page.accountMenu().clickLink('withdraw');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that History page doesnt show an error', function(){
		page.accountMenu().clickLink('history');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Profile page doesnt show an error', function(){
		page.accountMenu().clickLink('profile');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Change Password page doesnt show an error', function(){
		page.accountMenu().clickLink('change_pwd');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Low Cost Panel page doesnt show an error', function(){
		page.accountMenu().clickLink('low_cost_panel');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Low Cost Movements page doesnt show an error', function(){
		page.accountMenu().clickLink('low_cost_movements');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});
	
	it('Verify that Low Cost Friends page doesnt show an error', function(){
		page.accountMenu().clickLink('low_cost_friends');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Low Cost Tools page doesnt show an error', function(){
		page.accountMenu().clickLink('low_cost_tools');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

});