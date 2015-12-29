var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account page navigation test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('Verify that Transfer Funds page doesnt show an error', function(){
		page.accountMenu().clickLink('transfer_funds');
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

	it('Verify that Currency Rate page doesnt show an error', function(){
		page.accountMenu().clickLink('loyalty_link');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Bonus page doesnt show an error', function(){
		page.accountMenu().clickLink('bonus');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});

	it('Verify that Ukash Payouts page doesnt show an error', function(){
		page.accountMenu().clickLink('ukash');
		expect(page.noError()).toBe(true);
		expect(page.brokenImagesCount()).toBe(0);
	});
});