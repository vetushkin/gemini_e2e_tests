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

	
	it('Verify that from Cuenta de Apuestas to Xtrm Poker updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de Apuestas');
		page.visit('account/summary');
		page.selectFrom('sportsbook');
		page.selectTo('EnetPoker');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de Apuestas');
		expect(before).not.toBe(after);
	});

	it('Verify that from Xtrm Poker to Cuenta de Apuesta updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Xtrm Poker');
		page.visit('account/summary');
		page.selectFrom('EnetPoker');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Xtrm Poker');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cuenta de Apuestas to Tain Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de Apuestas');
		page.visit('account/summary');
		page.selectFrom('sportsbook');
		page.selectTo('TainCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de Apuestas');
		expect(before).not.toBe(after);
	});

	it('Verify that from Tain Casino to Cuenta de Apuesta updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Tain Casino');
		page.visit('account/summary');
		page.selectFrom('TainCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Tain Casino');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cuenta de Apuestas to Live Casino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de Apuestas');
		page.visit('account/summary');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de Apuestas');
		expect(before).not.toBe(after);
	});

	it('Verify that from Live Casino to Cuenta de Apuesta updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Live Casino');
		page.visit('account/summary');
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Live Casino');
		expect(before).not.toBe(after);
	});

});