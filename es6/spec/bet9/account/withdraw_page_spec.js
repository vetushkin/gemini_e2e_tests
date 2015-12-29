var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');	
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/withdraw');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Ukash - Verify that withdraw does not accept empty amount field', function(){
		page.clickLink('ukash');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("uma quantia");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Ukash - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('ukash');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("uma quantia");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Ecocard - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('ecocardnew');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_payment_purse', '232424232424');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("mínimo");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Ecocard - Verify that when entering amount more than maximum there is an error message', function(){
		page.clickLink('ecocardnew');
		page.enterText('withdraw_perform_amount', '10000');
		page.enterText('withdraw_perform_payment_purse', '232424232424');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that withdraw does not accept empty amount field', function(){
		page.clickLink('mb/withdraw');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("uma quantia");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('mb/withdraw');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("valor deve ser");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that when entering amount more than maximum there is an error message', function(){
		page.clickLink('mb/withdraw');
		page.enterText('withdraw_amount', '9999999999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("should be");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('VISA - Verify that withdraw page does not show an error', function(){
		page.clickLink('wc/withdraw');
		expect(page.noError()).toBe(true);
	});

	xit('Saque Transferencia bancaria - Verify that it is not available for current account', function(){
		page.clickLink('tbl/withdraw');
		expect(page.showNoticeMessage()).toContain("TBL");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	//Enable these two if previous one fails
	it('Saque Transferencia bancaria - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('tbl/withdraw');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_personal_id', '1234567891234');
		page.enterText('withdraw_perform_bank_account', '1234567891234');
		page.enterText('withdraw_perform_bank_agency', '1234567891234');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("mínimo");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Saque Transferencia bancaria - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('tbl/withdraw');
		page.enterText('withdraw_perform_amount', '9999999999');
		page.enterText('withdraw_perform_personal_id', '1234567891234');
		page.enterText('withdraw_perform_bank_account', '1234567891234');
		page.enterText('withdraw_perform_bank_agency', '1234567891234');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Neteller - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1234567891234');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("mínimo");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Neteller - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('neteller');
		page.enterText('withdraw_perform_amount', '999999');
		page.enterText('withdraw_perform_net_account', '1234567891234');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("exceeds");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});