var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/summary');
	});

	afterEach(function(){
	});

	it('Verify that from Sportsbook to EnetPoker shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('EnetPoker');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Sportsbook to TainCasino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('TainCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Sportsbook to LiveCasino shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from EnetPoker to Sportsbook shows correct currency', function(){
		page.selectFrom('EnetPoker');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from TainCasino to Sportsbook shows correct currency', function(){
		page.selectFrom('TainCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from LiveCasino to Sportsbook shows correct currency', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that you get a correct error message when transferring 0', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount(0);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('inválida');
	});

	it('Verify that you get a correct error message when transferring incorrect amount', function(){
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setAmount('fffff');
		page.clickTransfer();
		expect(page.errorMessage()).toContain('inválida');
	});

	it('Verify that you get a correct error message when transferring amount bigger than available', function(){
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setAmount(999999);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Fondos insuficientes');
	});

});