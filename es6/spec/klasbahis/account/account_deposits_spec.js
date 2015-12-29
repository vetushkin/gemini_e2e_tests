var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

xdescribe('Deposit accounts test', function(){
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

	it('Ukash - Verify that when using incorrect card number there is an error message', function(){
		page.clickLink('Ukash');
		page.enterText('deposit_cardnumber', 'some text');
		page.enterText('deposit_pin', 'some 12345');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Hatalı");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
	it('Ukash - Verify that when using correct card number but incorrect amount there is an error message', function(){
		page.clickLink('Ukash');
		page.enterText('deposit_cardnumber', '11111111111111111');
		page.enterText('deposit_pin', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("query failed");
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

	it('EPRO - Verify that you get an error message when amount placed is less than minimum', function(){
		page.clickLink('Epro');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_amount', '20');
		page.enterText('deposit_perform_securitycode', '111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('BANKA HAVALE/EFT - Verify that page has no errors', function(){
		page.clickLink('BANKA HAVALE/EFT');
		expect(page.noError()).toBe(true);
	});

	it('AKBANK CEP TRANSFER - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('AKBANK CEP TRANSFER');
		page.enterText('field_5', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('DENİZBANK TRANSFER - Verify that when enter incorrect amount there will be message', function(){
		page.clickLink('DENİZBANK TRANSFER');
		page.enterText('field_3', '50');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('DENİZBANK TRANSFER - Verify that when enter correct amount there will be error for the missing fields', function(){
		page.clickLink('DENİZBANK TRANSFER');
		page.enterText('field_3', '101');
		page.clickSubmitButton();
		expect(page.showDepositMessage()).toContain("Lutfen DENIZBANK CEP ile yatırmak");
		expect(page.showDepositMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('YAPI KREDİ CEP HAVALE TRANSFER - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('YAPI KREDİ CEP HAVALE TRANSFER');
		page.enterText('field_4', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('GARANTİ CEP BANK - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('GARANTİ CEP BANK');
		page.enterText('field_3', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('İŞ BANKASI CEBE HAVALE - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('İŞ BANKASI CEBE HAVALE');
		page.enterText('field_4', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('ECOCARD (ECOPAYZ) - Verify that you get an error when amount is less than minimum', function(){
		page.clickLink('ECOCARD (ECOPAYZ)');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_cardnumber', '1111111111111111');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Yatırılabilecek tutar minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Astropay - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('Astropay');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_cardnumber', '12345');
		page.enterText('deposit_perform_securitycode', '123');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("should be 16 characters");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('KREDİ KARTI PARA YATIRMA - Verify that when enter incorrect card format there will be error', function(){
		page.clickLink('KREDİ KARTI PARA YATIRMA');
		page.enterText('deposit_perform_amount', '50');
		page.enterText('deposit_perform_card_number', '1243125465757868');
		page.enterText('deposit_perform_issue_number', '12');
		page.clickSubmitButton();
		expect(page.showInfoMessage()).toContain("Geçerli Değil");
		expect(page.showInfoMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('NETELLER - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('NETELLER');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Yatırılabilecek tutar minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('PAYSAFECARD - Verify that you are transferred to the paymentpage after submit', function(){
		page.clickLink('PAYSAFECARD');
		page.enterText('deposit_amount', '1');
		page.clickSubmitButton();
		expect(page.currentUrl()).toContain("paysafecard");
	});

	it('Skrill - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Skrill');
		page.enterText('deposit_amount', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("veya TRY üstünde olmalıdır.");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
});

