var AccountMobilePage = require('../../../source/mobile/mobile_pages/account_mobile_page.js');

describe('Transfer page tests', function(){
	var page = new AccountMobilePage();

	beforeAll(function(){
		page.visit('mobile/sportsbook');
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});
	
	afterEach(function(){
	});

	it('Verify that you can not transfer a negative amount', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('NetEntCasino');
		page.transferTo('sportsbook');
		page.inputAmount(-10);
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('transfer');
	});

	it('Verify that you can not input an amount with characters', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('NetEntCasino');
		page.transferTo('sportsbook');
		page.inputAmount('oneHundred');
		page.clickButton('submit');
		expect(page.currentUrl()).toContain('transfer');
	});

	it('Verify that you can make a transfer from Sportsbook to NetEntCasino', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('sportsbook');
		page.transferTo('NetEntCasino');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	it('Verify that you can make a transfer from NetEntCasino to Sportsbook', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('NetEntCasino');
		page.transferTo('sportsbook');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	xit('Verify that you can make a transfer from Sportsbook to EnetPoker', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('sportsbook');
		page.transferTo('EnetPoker');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	xit('Verify that you can make a transfer from EnetPoker to Sportsbook', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('EnetPoker');
		page.transferTo('sportsbook');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	it('Verify that you can make a transfer from Sportsbook to TainCasino', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('sportsbook');
		page.transferTo('TainCasino');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	it('Verify that you can make a transfer from TainCasino to Sportsbook', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('TainCasino');
		page.transferTo('sportsbook');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	it('Verify that you can make a transfer from Sportsbook to LiveCasino', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('sportsbook');
		page.transferTo('LiveCasino');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

	it('Verify that you can make a transfer from LiveCasino to Sportsbook', function(){
		page.visit('mobile/account/transfer');
		page.transferFrom('LiveCasino');
		page.transferTo('sportsbook');
		page.inputAmount(1);
		page.clickButton('submit');
		expect(page.isBalanceCorrect('Sportsbook')).toBe(true);
		expect(page.currentUrl()).toContain('summery');
	});

});