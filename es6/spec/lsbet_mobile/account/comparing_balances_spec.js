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
		page.visit('en-GB/account/summary');
		expect(page.saveDesktopBalance('Sportsbook Account')).toBe(mobileBalance);
	});

	it('Verify that Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Casino');
		page.visit('mobile/full');
		page.visit('en-GB/account/summary');
		expect(page.saveDesktopBalance('Casino')).toBe(mobileBalance);
	});

	it('Verify that Poker balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Poker')).toBe(true);
		mobileBalance = page.saveMobileBalance('Poker');
		page.visit('mobile/full');
		page.visit('en-GB/account/summary');
		expect(page.saveDesktopBalance('Poker')).toBe(mobileBalance);
	});

	it('Verify that Games balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Games')).toBe(true);
		mobileBalance = page.saveMobileBalance('Games');
		page.visit('mobile/full');
		page.visit('en-GB/account/summary');
		expect(page.saveDesktopBalance('Games')).toBe(mobileBalance);
	});

	it('Verify that Live Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Live Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Live Casino');
		page.visit('mobile/full');
		page.visit('en-GB/account/summary');
		expect(page.saveDesktopBalance('Live Casino')).toBe(mobileBalance);
	});
});