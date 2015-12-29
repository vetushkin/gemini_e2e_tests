var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login();
		page.visit('account/transfer_funds');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that from Bahis Hesabınız to NetEntCasino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Bahis Hesabınız to Turkish Poker shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('TurkishPoker');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Bahis Hesabınız to TainCasino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('TainCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Bahis Hesabınız to Slotlar Hesabı shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('GamesWallet');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Bahis Hesabınız to Canlı Casino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from NetEntCasino to Bahis Hesabınız shows correct currency', function(){
		page.selectFrom('NetEntCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Turkish Poker to Bahis Hesabınız shows correct currency', function(){
		page.selectFrom('TurkishPoker');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from TainCasino to Bahis Hesabınız shows correct currency', function(){
		page.selectFrom('TainCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Slotlar Hesabı to Bahis Hesabınız shows correct currency', function(){
		page.selectFrom('GamesWallet');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Canlı Casino to Bahis Hesabınız shows correct currency', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that you get a correct error message when transferring 0', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount(0);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Geçersiz Bakiye');
	});

	it('Verify that you get a correct error message when transferring incorrect amount', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount('fffff');
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Geçersiz Bakiye');
	});

	it('Verify that you get a correct error message when transferring amount bigger than available', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setAmount(999999);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Yetersiz Bakiye');
	});

});