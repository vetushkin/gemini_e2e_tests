var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account page navigation test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('');
		page.login();		
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account');
	});
	
	afterEach(function(){
	});

	it('Verify that Transfer Funds page doesnt show an error', function(){
		page.accountMenu().clickLink('transfer_funds');
		expect(page.noError()).toBe(true);
		//expect(page.brokenImagesCount()).toBe(0);
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

	it('Verify that Netent Bonus page doesnt show an error', function(){
		page.accountMenu().clickLink('netent_bonus');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

});