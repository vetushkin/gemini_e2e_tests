var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/summary');
	});

	afterEach(function(){
	});

	it('Verify that from Cuenta de apuestas deportivas to CTXMGames updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de apuestas deportivas');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('CTXMGames');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de apuestas deportivas');
		expect(before).not.toBe(after);
	});

	it('Verify that from CTXMGames to Cuenta de apuestas deportivas updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('CTXMGames');
		page.visit('account/transfer_funds');
		page.selectFrom('CTXMGames');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('CTXMGames');
		expect(before).not.toBe(after);	
	});

});