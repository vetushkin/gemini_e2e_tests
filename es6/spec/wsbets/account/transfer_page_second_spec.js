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

	
	it('Verify that from Ana Hesabınız to NetEntCasino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Ana Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Ana Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from NetEntCasino to Ana Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Dolar Casino');
		page.visit('account/transfer_funds');
		page.selectFrom('NetEntCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Dolar Casino');
		expect(before).not.toBe(after);
	});

	it('Verify that from Ana Hesabınız to EUR Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Ana Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('TainCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Ana Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from EUR Casino to Ana Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('EUR Casino');
		page.visit('account/transfer_funds');
		page.selectFrom('TainCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('EUR Casino');
		expect(before).not.toBe(after);
		
	});

	it('Verify that from Ana Hesabınız to Canlı Dolar Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Ana Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Ana Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from Canlı Dolar Casino to Ana Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Canlı Casino');
		page.visit('account/transfer_funds');
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Canlı Casino');
		expect(before).not.toBe(after);
	});

});