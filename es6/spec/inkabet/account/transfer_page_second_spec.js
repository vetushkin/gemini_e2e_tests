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

	
	it('Verify that from Cuenta de apuestas deportivas to NetEntCasino updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de apuestas deportivas');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('NetEntCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de apuestas deportivas');
		expect(before).not.toBe(after);
	});

	it('Verify that from NetEntCasino to Cuenta de apuestas deportivas updates balances on Summary page', function(){
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

	it('Verify that from Cuenta de apuestas deportivas to Cartera de Juegos Hesabı updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de apuestas deportivas');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('GamesWallet');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de apuestas deportivas');
		expect(before).not.toBe(after);
	});

	it('Verify that from Cartera de Juegos Hesabı to Cuenta de apuestas deportivas updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cartera de Juegos');
		page.visit('account/transfer_funds');
		page.selectFrom('GamesWallet');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cartera de Juegos');
		expect(before).not.toBe(after);		
	});

	it('Verify that from Cuenta de apuestas deportivas to Casino en Vivo updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Cuenta de apuestas deportivas');
		page.visit('account/transfer_funds');
		page.selectFrom('sportsbook');
		page.selectTo('LiveCasino');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Cuenta de apuestas deportivas');
		expect(before).not.toBe(after);
	});

	it('Verify that from Casino en Vivo to Cuenta de apuestas deportivas updates balances on Summary page', function(){
		var before;
		var after;
		before = page.getBalance('Casino en Vivo');
		page.visit('account/transfer_funds');
		page.selectFrom('LiveCasino');
		page.selectTo('sportsbook');
		page.setRandomAmount();
		page.clickTransfer();
		page.visit('account/summary');
		after = page.getBalance('Casino en Vivo');
		expect(before).not.toBe(after);
	});

});