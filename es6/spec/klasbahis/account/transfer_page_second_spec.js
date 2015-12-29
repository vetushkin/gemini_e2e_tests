var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/summary');
	});

	afterEach(function(){
	});

	
	it('Verify that from Spor Bahisleri to NetEntCasino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Spor Bahisleri');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Spor Bahisleri');
		expect(before).not.toBe(after);
	});

	it('Verify that from NetEntCasino to Spor Bahisleri updates balances on Summary page', function(){
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

	it('Verify that from Spor Bahisleri to Slotlar Hesabı updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Spor Bahisleri');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('GamesWallet');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Spor Bahisleri');
		expect(before).not.toBe(after);
	});

	it('Verify that from Slotlar Hesabı to Spor Bahisleri updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Slotlar');
		page.visit('account/transfer_funds');
		page.selectFrom('GamesWallet');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Slotlar');
		expect(before).not.toBe(after);		
	});

	it('Verify that from Spor Bahisleri to Canlı Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Spor Bahisleri');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Spor Bahisleri');
		expect(before).not.toBe(after);
	});

	it('Verify that from Canlı Casino to Spor Bahisleri updates balances on Summary page', function(){
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