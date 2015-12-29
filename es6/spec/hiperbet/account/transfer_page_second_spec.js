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

	
	it('Verify that from Bahis Hesabınız to NetEntCasino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Bahis Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Bahis Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from NetEntCasino to Bahis Hesabınız updates balances on Summary page', function(){
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
	//Cannot transfer from/to Turkish poker with supporttest account - error
	xit('Verify that from Bahis Hesabınız to Turkish Poker updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Bahis Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('TurkishPoker');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Bahis Hesabınız');
		expect(before).not.toBe(after);
	});
	//Cannot transfer from/to Turkish poker with supporttest account - error
	xit('Verify that from Turkish Poker to Bahis Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Türk Pokeri');
		page.visit('account/transfer_funds');
		page.selectFrom('TurkishPoker');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Türk Pokeri');
		expect(before).not.toBe(after);
		
	});

	it('Verify that from Bahis Hesabınız to Casino EUR updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Bahis Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('TainCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Bahis Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from Casino EUR to Bahis Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Casino EUR');
		page.visit('account/transfer_funds');
		page.selectFrom('TainCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Casino EUR');
		expect(before).not.toBe(after);	
	});

	it('Verify that from Bahis Hesabınız to Oyunlar Hesabı updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Bahis Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('GamesWallet');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Bahis Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from Oyunlar Hesabı to Bahis Hesabınız updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Oyunlar Hesabı');
		page.visit('account/transfer_funds');
		page.selectFrom('GamesWallet');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Oyunlar Hesabı');
		expect(before).not.toBe(after);		
	});

	it('Verify that from Bahis Hesabınız to Canlı Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Bahis Hesabınız');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Bahis Hesabınız');
		expect(before).not.toBe(after);
	});

	it('Verify that from Canlı Casino to Bahis Hesabınız updates balances on Summary page', function(){
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