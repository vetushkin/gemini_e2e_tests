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

	it('Verify that Slotlar balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Slotlar')).toBe(true);
		mobileBalance = page.saveMobileBalance('Slotlar');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Slotlar')).toBe(mobileBalance);
	});

	it('Verify that Sportsbook balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		mobileBalance = page.saveMobileBalance('Sportsbook');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Spor Bahisleri')).toBe(mobileBalance);
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

	it('Verify that Oyunlar balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Oyunlar')).toBe(true);
		mobileBalance = page.saveMobileBalance('Oyunlar');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Oyunlar')).toBe(mobileBalance);
	});

	it('Verify that Canlı Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Canlı Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Canlı Casino');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Canlı Casino')).toBe(mobileBalance);
	});
});