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

	it('Verify that Adress Line One field is required', function(){
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Adress Line Two field is required', function(){
		page.inputData('address_line_one', 'Some Street 1');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that City field is required', function(){
		page.inputData('address_line_two', 'appartment 1');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Province field is required', function(){
		page.inputData('city', 'TestCity');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Postcode field is required', function(){
		page.inputData('province', 'TestProvince');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
	});

	it('Verify that Back button returns you to the first page of Registration', function(){
		page.inputData('postcode', 'AZ12345');
		page.selectCountry('random');
		page.clickSubmit();
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