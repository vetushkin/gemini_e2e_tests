var AccountTransferPage = require('../../../source/general/pages/account_transfer_page.js');

describe('Account transfer page verification', function(){
	var page = new AccountTransferPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
		page.visit('pt-BR/account/transfer_funds');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that from Esportes to NetEntCasino shows correct currency', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Esportes to Turkish Poker shows correct currency', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Esportes to CTXMGames shows correct currency', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Jogos');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Esportes to Cassino ao vivo shows correct currency', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino ao vivo');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Cassino to Esportes shows correct currency', function(){
		page.selectApostasFrom('Cassino');
		page.selectApostasTo('Esportes');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Jogos to Esportes shows correct currency', function(){
		page.selectApostasFrom('Jogos');
		page.selectApostasTo('Esportes');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that from Cassino ao vivo to Esportes shows correct currency', function(){
		page.selectApostasFrom('Cassino ao vivo');
		page.selectApostasTo('Esportes');
		expect(page.currencyLabel()).toMatch(/[A-Z]{3}/i);
	});

	it('Verify that you get a correct error message when transferring 0', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino ao vivo');
		page.setAmount(0);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('inválido');
	});

	it('Verify that you get a correct error message when transferring incorrect amount', function(){
		page.selectApostasFrom('Esportes');
		page.selectApostasTo('Cassino ao vivo');
		page.setAmount('fffff');
		page.clickTransfer();
		expect(page.errorMessage()).toContain('inválido');
	});

	it('Verify that you get a correct error message when transferring amount bigger than available', function(){
		page.selectApostasFrom('Cassino ao vivo');
		page.selectApostasTo('Esportes');
		page.setAmount(999999);
		page.clickTransfer();
		expect(page.errorMessage()).toContain('Insufficient funds');
	});

});