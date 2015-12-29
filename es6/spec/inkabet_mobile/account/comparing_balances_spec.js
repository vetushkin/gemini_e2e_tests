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
		expect(page.saveDesktopBalance('Cuenta de apuestas deportivas')).toBe(mobileBalance);
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

	it('Verify that Cartera de Juegos balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Cartera de Juegos')).toBe(true);
		mobileBalance = page.saveMobileBalance('Cartera de Juegos');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Cartera de Juegos')).toBe(mobileBalance);
	});

	it('Verify that Casino en Vivo balances are the same on mobile and desktop versions of the website', function(){
		var mobileBalance;
		page.clickLink('summery');
		expect(page.isBalanceCorrect('Casino en Vivo')).toBe(true);
		mobileBalance = page.saveMobileBalance('Casino en Vivo');
		page.visit('mobile/full');
		page.visit('tr-TR/account/summary');
		expect(page.saveDesktopBalance('Casino en Vivo')).toBe(mobileBalance);
	});
});