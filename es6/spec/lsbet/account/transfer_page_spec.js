var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.visit('account/transfer_funds');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.closeAd();
	});

	afterEach(function(){
	});

	it('Verify that from SportsBook to NetEntCasino shows correct currency format', function(){
		page.selectLSBetFrom('sportsbook');
		page.selectLSBetTo('NetEntCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from SportsBook to GamesWallet shows correct currency format', function(){
		page.selectLSBetFrom('sportsbook');
		page.selectLSBetTo('GamesWallet');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from SportsBook to LiveCasino shows correct currency format', function(){
		page.selectLSBetFrom('sportsbook');
		page.selectLSBetTo('LiveCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from NetEntCasino to SportsBook shows correct currency format', function(){
		page.selectLSBetFrom('NetEntCasino');
		page.selectLSBetTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from GamesWallet to SportsBook shows correct currency format', function(){
		page.selectLSBetFrom('GamesWallet');
		page.selectLSBetTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from LiveCasino to SportsBook shows correct currency format', function(){
		page.selectLSBetFrom('LiveCasino');
		page.selectLSBetTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that you get a correct error message when transferring 0', function(){
		page.selectLSBetFrom('sportsbook');
		page.selectLSBetTo('LiveCasino');
		page.setAmount(0);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Invalid');
	});

	it('Verify that you get a correct error message when transferring incorrect amount', function(){
		page.selectLSBetFrom('sportsbook');
		page.selectLSBetTo('LiveCasino');
		page.setAmount('fffff');
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Invalid');
	});

	it('Verify that you get a correct error message when transferring amount bigger than available', function(){
		page.selectLSBetFrom('LiveCasino');
		page.selectLSBetTo('sportsbook');
		page.setAmount(999999);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Insufficient');
	});

});