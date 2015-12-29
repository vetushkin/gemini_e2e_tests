var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		//Test account is not allowed to make transfers so using support instead
		page.login('');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/summary');
	});

	afterEach(function(){
	});

	
	it('Verify that from Apostas de Esporte to Cassino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Apostas de Esporte');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('sportsbook');
		page.selectApostasTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Apostas de Esporte');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cassino to Apostas de Esporte updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cassino');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('NetEntCasino');
		page.selectApostasTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cassino');
		expect(before).not.toBe(after);
	});

	it('Verify that from Apostas de Esporte to Jogos updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Apostas de Esporte');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('sportsbook');
		page.selectApostasTo('GamesWallet');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Apostas de Esporte');
		expect(before).not.toBe(after);
	});

	it('Verify that from Jogos to Apostas de Esporte updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Jogos');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('GamesWallet');
		page.selectApostasTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Jogos');
		expect(before).not.toBe(after);	
	});

	it('Verify that from Apostas de Esporte to Cassino ao Vivo updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Apostas de Esporte');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('sportsbook');
		page.selectApostasTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Apostas de Esporte');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cassino ao Vivo to Apostas de Esporte updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cassino ao Vivo');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('LiveCasino');
		page.selectApostasTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cassino ao Vivo');
		expect(before).not.toBe(after);
	});

});