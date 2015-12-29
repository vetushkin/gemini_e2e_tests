var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Loyalty and Bonus page test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.visit('loyalty');
	});

	afterAll(function(){
	});
	
	afterEach(function(){
	});

	for(let i = 0 ; i < 35 ; i ++) {
		it('Verify that all bonuses inside Loyalty page are in the correct format', function() {
			expect(page.loyalty().isTypeAmountCorrect(i)).toBe(true);
		});
	}

	it('Verify that after clicking the Para Puan Bozdur button the correct page is displayed', function() {
		page.loyalty().clickExchangeButton();
		expect(page.currentUrl()).toContain('payments');
	});
	
	for(let i = 0 ; i < 2 ; i ++) {
		it('Verify that all bonuses inside Bonus page are in the correct format', function() {
			page.visit('loyalty/bonus');
			expect(page.loyalty().isBonusCorrect(i)).toBe(true);
		});
	}

});