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
		expect(page.saveDesktopBalance('Apostas de Esporte')).toBe(mobileBalance);
	});

	it('Verify that Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Casino')).toBe(true);
		mobileBalance = page.saveMobileBalance('Casino');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Cassino')).toBe(mobileBalance);
	});

	it('Verify that Jogos balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Jogos')).toBe(true);
		mobileBalance = page.saveMobileBalance('Jogos');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Jogos')).toBe(mobileBalance);
	});

	it('Verify that Canlı Casino balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Cassino ao Vivo')).toBe(true);
		mobileBalance = page.saveMobileBalance('Cassino ao Vivo');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Cassino ao Vivo')).toBe(mobileBalance);
	});
});