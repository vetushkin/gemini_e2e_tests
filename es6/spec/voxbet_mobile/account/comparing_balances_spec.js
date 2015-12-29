var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Comparing balances tests', function(){
	var page = new AccountMobilePage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.login();
		page.visit('mobile/account');
	});
	
	afterEach(function(){
		page.logout();
	});

	it('Verify that Sportsbook balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		mobileBalance = page.saveMobileBalance('Sportsbook');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Cuenta de Apuestas')).toBe(mobileBalance);
	});

	it('Verify that Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Casino');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Casino')).toBe(mobileBalance);
	});

	it('Verify that Xtrm Poker balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Xtrm Poker')).toBe(true);
		mobileBalance = page.saveMobileBalance('Xtrm Poker');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Xtrm Poker')).toBe(mobileBalance);
	});

	it('Verify that Tain Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Tain Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Tain Casino');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Tain Casino')).toBe(mobileBalance);
	});

	it('Verify that Canlı Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Live Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Live Casino');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Live Casino')).toBe(mobileBalance);
	});
});