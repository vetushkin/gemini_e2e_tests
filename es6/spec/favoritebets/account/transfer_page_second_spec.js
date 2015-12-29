var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		//Test account is not allowed to make transfers so using support instead
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

	
	it('Verify that from Sportsbook Account to NetEntCasino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Sportsbook Account');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Sportsbook Account');
		expect(before).not.toBe(after);
	});

	it('Verify that from NetEntCasino to Sportsbook Account updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Casino');
		page.visit('account/transfer_funds');
		page.selectFrom('NetEntCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Casino');
		expect(before).not.toBe(after);
	});
	
	
	it('Verify that from Sportsbook Account to Live Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Sportsbook Account');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Sportsbook Account');
		expect(before).not.toBe(after);
	});

	it('Verify that from Live Casino to Sportsbook Account updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Live Casino');
		page.visit('account/transfer_funds');
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Live Casino');
		expect(before).not.toBe(after);
	});

});