var AccountDepositPage = require('../../../source/general/pages/account_deposit_page.js');

describe('Deposit accounts test', function(){
	var page = new AccountDepositPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('account/deposit');
		page.closeAd();
	});

	afterEach(function(){
	});

	it('VISA - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Credit Card Deposit');
		page.enterText('deposit_amount', '11');
		page.enterText('deposit_cardnumber', '1131112111111112');
		page.enterText('deposit_code', '123');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("not allowed");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('Skrill - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('MoneyBookers deposit');
		page.enterText('deposit_amount', '5');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('NETELLER - Verify that when enter incorrect amount there will be error', function(){
		page.clickLink('Neteller deposit');
		page.enterText('deposit_perform_amount', '5');
		page.enterText('deposit_perform_net_account', '111111111111');
		page.enterText('deposit_perform_secure_id', '111111');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	xit('Ukash - Verify that when using incorrect card number there is error message', function(){
		page.clickLink('Ukash deposit');
		page.enterText('deposit_cardnumber', 'some text');
		page.enterText('deposit_pin', 'some 12345');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("incorrect");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
	xit('Ukash - Verify that when using correct card number but incorrect amount ', function(){
		page.clickLink('Ukash deposit');
		page.enterText('deposit_cardnumber', '11111111111111111');
		page.enterText('deposit_pin', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("query failed");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});

	it('ECO - Verify that when using correct card format but incorrect amount ', function(){
		page.clickLink('Ecocard deposit');
		page.enterText('deposit_perform_amount', '1');
		page.clickSubmitButton();
		expect(page.showErrorMessage()).toContain("Amount should be minimum");
		expect(page.showErrorMessage()).not.toMatch(/.*<([a-z])?.*(br)?>.*/i);
	});
	
});

