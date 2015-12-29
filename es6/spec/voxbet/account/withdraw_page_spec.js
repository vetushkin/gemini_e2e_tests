var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login();	
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Bank Transfer - amount less than minimum', function(){
		page.visit('payments/bankplus/withdraw');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("mínima");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - amount less than minimum', function(){
		page.visit('payments/mb/withdraw');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("debe ser 10 EUR");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Neteller - amount less than minimum', function(){
		page.visit('payments/neteller_rest/withdraw');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '139865893264');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("minimum");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});