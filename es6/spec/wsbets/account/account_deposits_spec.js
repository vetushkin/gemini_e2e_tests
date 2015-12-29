var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('Astropay - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_cardnumber', '12345');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("hatalı giriş yaptınız");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('VISA - Verify that when enter incorrect card format there will be an error', function(){
		page.clickLink('VISA Kredi Kartı');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_card_number', '1243125465757868');
		page.enterText('deposit_perform_issue_number', '12');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is invalid");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	xit('GCE - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('GCE - Online Banka Transferi');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	xit('GCE - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('GCE - Online Banka Transferi');
		page.enterText('deposit_perform_amount', '9999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EcoCard - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('EcoCard');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAYKWIK - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('PayKwik');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EpayCode - Verify that when using correct card format but incorrect amount ', function(){
		page.clickLink('EpayCode');
		page.enterText('deposit_perform_voucher', '11111111111111111');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EpayCode - Verify that when using correct card format but incorrect amount ', function(){
		page.clickLink('EpayCode');
		page.enterText('deposit_perform_voucher', 'asdasdasd');
		page.enterText('deposit_perform_amount', '20');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Invalid voucher");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Banka Havale - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('Banka Havale');
		page.enterText('field_2', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Banka Havale - Verify that you get an error when amount is more than maximum', function(){
		page.clickLink('Banka Havale');
		page.enterText('field_2', '9999999999999999999999999999999999999999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('IS BANKASI CEBE HAVALE - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('IS BANKASI CEBE HAVALE');
		page.enterText('field_4', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('IS BANKASI CEBE HAVALE - Verify that you get an error when amount is incorrect', function(){
		page.clickLink('IS BANKASI CEBE HAVALE');
		page.enterText('field_4', '10e20');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not been submitted");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('GARANTİ CEP BANK - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('GARANTI CEP BANK');
		page.enterText('field_3', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('DenizBank CEP PARAM - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('DenizBank CEP PARAM');
		page.enterText('field_3', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('DenizBank CEP PARAM - Verify that you get an error when amount is incorrect', function(){
		page.clickLink('DenizBank CEP PARAM');
		page.enterText('field_3', '10e20');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not been submitted");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('AKBANK CEP TRANSFER - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('AKBANK CEP TRANSFER');
		page.enterText('field_5', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('YAPI KREDİ CEP HAVALE TRANSFER - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('YAPI KRED CEP HAVALE TRANSFER');
		page.enterText('field_4', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('NETELLER - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('NETELLER');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAYSAFECARD - Verify that you are transferred to the paymentpage after submit', function(){
		page.clickLink('PAYSAFECARD');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("paysafecard");
	});

});

