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

	
	it('Verify that from Esportes to Cassino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Esportes');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Esportes');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cassino to Esportes updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cassino');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Cassino');
		page.selectApostasTo('Esportes');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cassino');
		expect(before).not.toBe(after);
	});

	it('Verify that from Esportes to Jogos updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Esportes');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Jogos');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Esportes');
		expect(before).not.toBe(after);
	});

	it('Verify that from Jogos to Esportes updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Jogos');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Jogos');
		page.selectApostasTo('Esportes');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Jogos');
		expect(before).not.toBe(after);	
	});

	it('Verify that from Esportes to Cassino ao vivo updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Esportes');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino ao vivo');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Esportes');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cassino ao vivo to Esportes updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cassino ao vivo');
		page.visit('account/transfer_funds');
		page.selectApostasFrom('Cassino ao vivo');
		page.selectApostasTo('Esportes');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cassino ao vivo');
		expect(before).not.toBe(after);
	});

});