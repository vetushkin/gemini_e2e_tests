var AccountWithdrawPage = require('../../../source/general/pages/account_withdraw_page.js');

describe('Account withdraw page links verification', function(){
	var page = new AccountWithdrawPage();

	beforeAll(function(){
		page.visit('');
		page.login('');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('pt-BR/account/withdraw');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that Saque via Skrill withdraw does not accept less than minimum amount', function(){
		page.clickLink('Saque Skrill');
		page.enterText('withdraw_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("O valor deve ser de");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Saque via Skrill withdraw does not accept empty withdraw amount', function(){
		page.clickLink('Saque Skrill');
		page.enterText('withdraw_amount', '');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("You must enter an amount");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Saque via Skrill withdraw does not accept more than maximum amount', function(){
		page.clickLink('Saque Skrill');
		page.enterText('withdraw_amount', '99999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferência Bancária withdraw does not accept less than minimum amount', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('withdraw_perform_amount', '0');
		page.enterText('withdraw_perform_personal_id', '1111');
		page.enterText('withdraw_perform_bank_account', '1111');
		page.enterText('withdraw_perform_bank_agency', '1111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferência Bancária withdraw does not accept empty withdraw amount', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('withdraw_perform_amount', '');
		page.enterText('withdraw_perform_personal_id', '1111');
		page.enterText('withdraw_perform_bank_account', '1111');
		page.enterText('withdraw_perform_bank_agency', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferência Bancária withdraw does not accept empty personal id', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('withdraw_perform_amount', '15');
		page.enterText('withdraw_perform_personal_id', '');
		page.enterText('withdraw_perform_bank_account', '1111');
		page.enterText('withdraw_perform_bank_agency', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferência Bancária withdraw does not accept empty bank account', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('withdraw_perform_amount', '15');
		page.enterText('withdraw_perform_personal_id', '1111');
		page.enterText('withdraw_perform_bank_account', '');
		page.enterText('withdraw_perform_bank_agency', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that Transferência Bancária withdraw does not accept empty bank agency', function(){
		page.clickLink('Transferência Bancária');
		page.enterText('withdraw_perform_amount', '15');
		page.enterText('withdraw_perform_personal_id', '1111');
		page.enterText('withdraw_perform_bank_account', '1111');
		page.enterText('withdraw_perform_bank_agency', '');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("can't be blank");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Verify that NETELLER withdraw link check for CC', function(){
		page.clickLink('Saque Neteller');
		page.enterText('withdraw_perform_amount', '1');
		page.enterText('withdraw_perform_net_account', '1111');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("minimum is 12 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
	it('Verify that NETELLER withdraw link check for account balance', function(){
		page.clickLink('Saque Neteller');
		page.enterText('withdraw_perform_amount', '0');
		page.enterText('withdraw_perform_net_account', '1111111111111111');
		page.clickSubmitButton();
		expect(page.showNoticeMessage()).toContain("O valor deve ser ao menos");
		expect(page.showNoticeMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});