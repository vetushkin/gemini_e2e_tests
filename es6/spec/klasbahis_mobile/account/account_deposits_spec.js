var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Deposits page tests', function(){
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
		page.visit('mobile/sportsbook');
	});

	it('Is Bankasi Cebe Havale - Verify that you can not deposit without entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('isbankasi');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('isbankasi');
	});

	it('Garanti Cep Bank - Verify that you can not deposit without entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('cepbank');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('cepbank');
	});

	it('Denizbank Cep Param - Verify that you can not deposit without entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('denizbank');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('denizbank');
	});
	
	it('Yapi Kredi Cep Havale - Verify that you can not deposit withtout entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('yapikredi');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('yapikredi');
	});

	it('Akbank Cep Transfer - Verify that you can not deposit without entering the needed data', function(){
		page.visit('mobile/account/payments');
		page.clickLink('akbank');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('akbank');
	});
	
});