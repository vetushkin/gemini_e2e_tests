var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Account page navigation test', function(){
	var page = new AccountMobilePage();

	beforeAll(function(){
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/account');
	});
	
	afterEach(function(){
	});

	it('Verify that Summary page doesnt show an error', function(){
		page.clickLink('summery');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that History page doesnt show an error', function(){
		page.clickLink('history');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Transfer page doesnt show an error', function(){
		page.clickLink('transfer');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that Payments page doesnt show an error', function(){
		page.clickLink('payments');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can click logout button from the account menu', function(){
		page.clickLink('logout');
		expect(page.brokenImagesCount()).toBe(0);
		expect(page.noError()).toBe(true);
	});

});