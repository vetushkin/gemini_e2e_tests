var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
		page.login();
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('VISA - Verify that when using incorrect card number there is an error message', function(){
		page.clickLink('Tarjeta de Crédito Visa o Mastercard / Débito');
		page.enterText('deposit_amount', '1');
		page.enterText('deposit_cardnumber', 'some text');
		page.enterText('deposit_code', 'some 12345');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Incorrect");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('VISA - Verify that when entering amount less than minimum there is an error message', function(){
		page.clickLink('Visa o Mastercard');
		page.enterText('deposit_amount', '2');
		page.enterText('deposit_cardnumber', '11111111111111111');
		page.enterText('deposit_code', '12345');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAGO - Verify that page does not show an error', function(){
		page.clickLink('Transferencia Bancaria');
		expect(page.noError()).toBe(true);
	});

	it('Paysafecard - Verify that page does not show an error', function(){
		page.clickLink('Paysafecard');
		expect(page.noError()).toBe(true);
	});

	it('Interbank - Verify that page does not show an error', function(){
		page.clickLink('Interbank');
		expect(page.noError()).toBe(true);
	});

	it('Otros Bancos - Verify that page does not show an error', function(){
		page.clickLink('interbancaria por internet');
		expect(page.noError()).toBe(true);
	});

	it('Neteller - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Neteller');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that when enter incorrect amount there will be error', function(){
		page.forceLogout();
		page.login('support');
		page.visit('account/deposit');
		page.removeChat();
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Monto debe");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});

