var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
	});

	afterEach(function(){
	});

	it('Visa/Mastercard - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickVoxbetLink('Visa/Mastercard');
		page.enterText('deposit_cardnumber', '1111111111111111');
		page.enterText('deposit_code', '123');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Visa/Mastercard - Verify that you get an error message when amount placed is more than maximum', function(){
		page.clickVoxbetLink('Visa/Mastercard');
		page.enterText('deposit_cardnumber', '1111111111111111');
		page.enterText('deposit_code', '123');
		page.enterText('deposit_amount', '2500');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("debe ser inferior");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Paysafecard - Verify that you are transferred to the account deposit page when entering a valid mount', function(){
		page.clickVoxbetLink('Paysafecard');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("paysafecard");
	});

	it('Paysafecard - Verify that you are not transferred to the account deposit page when entered amount is not valid', function(){
		page.clickVoxbetLink('Paysafecard');
		page.enterText('deposit_amount', '999999999999999999999999');
		page.clickSubmitButton();
		expect(page.currentUrl()).not.toContain("paysafecard");
	});

	it('NETeller - Verify that you get an error message when account is invalid', function(){
		page.clickVoxbetLink('NETeller');
		page.enterText('deposit_perform_net_account', '123421421312');
		page.enterText('deposit_perform_secure_id', '123468');
		page.enterText('deposit_perform_amount', '100');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickVoxbetLink('Skrill');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("cantidad debe ser");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickVoxbetLink('Skrill');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("cantidad debe ser");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

});

