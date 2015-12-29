var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('sportsbook');
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

	it('ÖZEL BANKA HAVALE - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('ÖZEL BANKA HAVALE');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('VISA - Verify that when enter incorrect card format there will be an error', function(){
		page.clickLink('VISA KREDI KARTI');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_card_number', '1243125465757868');
		page.enterText('deposit_perform_issue_number', '12');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("is invalid");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EPRO - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('KREDİ KARTI PARA YATIRMA');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_securitycode', '111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAYKWIK - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('PAYKWIK');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('ASTROPAY - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('ASTROPAY');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_securitycode', '111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('ASTROPAY - Verify that you get an error message when a credit card number is incorrect', function(){
		page.clickLink('ASTROPAY');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_amount', '200');
		page.enterText('deposit_perform_securitycode', '111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("invalid");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EPAYCODE - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('EPAYCODE');
		page.enterText('deposit_perform_voucher', '1111111111111111');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('EPAYCODE - Verify that you get an error message when amount placed is more than maximum', function(){
		page.clickLink('EPAYCODE');
		page.enterText('deposit_perform_voucher', '1111111111111111');
		page.enterText('deposit_perform_amount', '9999999');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Maximum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Özel Banka Havalesi - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Özel Banka Havalesi');
		page.enterText('field_2', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('GARANTİ CEP BANK - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('GARANTİ CEP BANK');
		page.enterText('field_3', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('İŞ CEP - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('İŞ CEP');
		page.enterText('field_4', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('AKBANK CEP TRANSFER - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('AKBANK CEP TRANSFER');
		page.enterText('field_5', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('DENİZBANK CEP PARAM - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('DENİZBANK CEP PARAM');
		page.enterText('field_3', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('YAPI KREDİ CEP HAVALE - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('YAPI KREDİ CEP HAVALE');
		page.enterText('field_4', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("en az tutar");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('ECOPAYZ (ECOCARD) - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('ECOPAYZ (ECOCARD)');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain('minimum');
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('NETELLER - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('NETELLER');
		page.enterText('deposit_perform_amount', '1');
		page.enterText('deposit_perform_net_account', '123423456423');
		page.enterText('deposit_perform_secure_id', '324542');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain('minimum');
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('NETELLER - Verify that you get an error when a card number is incorrect', function(){
		page.clickLink('NETELLER');
		page.enterText('deposit_perform_amount', '200');
		page.enterText('deposit_perform_net_account', '123423456423');
		page.enterText('deposit_perform_secure_id', '324542');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain('not valid');
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAYSAFECARD - Verify that you are transferred to the payment page after submit', function(){
		page.clickLink('PAYSAFECARD');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("paysafecard");
	});

});

