var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('account/transfer_funds');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that from Sportsbook to CTXMGames shows correct currency', function(){
		page.selectFrom('sportsbook');
		page.selectTo('CTXMGames');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from CTXMGames to Sportsbook shows correct currency', function(){
		page.selectFrom('CTXMGames');
		page.selectTo('sportsbook');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});
});