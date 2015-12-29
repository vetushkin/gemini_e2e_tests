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
	});

	afterEach(function(){
	});

	it('Verify that from Sportsbook to NetEntCasino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Sportsbook to Live casino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Live casino to Sportsbook shows correct currency', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that you get a correct error message when transferring 0', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount(0);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Invalid');
	});

	it('Verify that you get a correct error message when transferring incorrect amount', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount('fffff');
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Invalid');
	});

	it('Verify that you get a correct error message when transferring amount bigger than available', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setAmount(999999);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Insufficient funds');
	});

});