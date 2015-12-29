var RegistrationMobilePage = require('../../../source/mobile/mobile_pages/registration_mobile_page.js');

describe('Registration page 2 positive tests', function(){
	var page = new RegistrationMobilePage();

	beforeAll(function(){
		page.visit('mobile/account/registration');
	});

	afterAll(function(){
	});

	beforeEach(function(){
	});
	
	afterEach(function(){
	});

	it('Verify that Submit button opens the second Registration page', function(){
		page.inputData('first_name', 'firstName');
		page.inputData('last_name', 'lastName');
		page.inputData('date_of_birth', '12121990');
		page.inputData('email', 'test@testmail.com');
		page.inputData('username', 'testAccount9583');
		page.inputData('password', 'testPass1');
		page.inputData('password_confirm', 'testPass1');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Submit button opens the third Registration page', function(){
		page.inputData('address_line_one', 'Some Street 1');
		page.inputData('address_line_two', 'appartment 1');
		page.inputData('city', 'TestCity');
		page.inputData('province', 'TestProvince');
		page.inputData('postcode', 'AZ12345');
		page.selectCountry('random');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/2');
	});

	it('Verify that accepting terms activates the submit button', function(){
		expect(page.isSubmitEnabled()).toBe(false);
		page.acceptTerms();
		expect(page.isSubmitEnabled()).toBe(true);
	});

	it('Verify that Telephone field is required', function(){
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/2');
	});

	it('Verify that Mobile Telephone field is required', function(){
		page.inputData('telephone', '0123456789');
		expect(page.currentUrl()).toContain('registration/2');
	});

	it('Verify that Verification field is required', function(){
		page.inputData('mobile_telephone', '0987654321');
		page.selectCurrency('random');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/2');
	});

	it('Verify that Back button returns you to the second page of Registration', function(){
		expect(page.currentUrl()).toContain('registration/2');
		page.clickBack();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Cancel button returns you to the Sportsbook page', function(){
		page.clickSubmit();
		page.clickCancel();
		expect(page.currentUrl()).not.toContain('registration');
	});

});