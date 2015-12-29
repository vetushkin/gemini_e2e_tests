var RegistrationMobilePage = require('../../../source/mobile/mobile_pages/registration_mobile_page.js');

describe('Registration page 1 positive tests', function(){
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

	it('Verify that First Name field is required', function(){
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Last Name field is required', function(){
		page.inputData('first_name', 'firstName');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Date of Birth field is required', function(){
		page.inputData('last_name', 'lastName');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Email field is required', function(){
		page.inputData('date_of_birth', '12121990');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Username field is required', function(){
		page.inputData('email', 'test@testmail.com');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Password field is required', function(){
		page.inputData('username', 'testAccount9583');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Confirm Password field is required', function(){
		page.inputData('password', 'testPass1');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration');
	});

	it('Verify that Back button returns you to the first page of Registration', function(){
		page.inputData('password_confirm', 'testPass1');
		page.clickSubmit();
		expect(page.currentUrl()).toContain('registration/1');
		page.clickBack();
		expect(page.currentUrl()).not.toContain('registration/1');
	});

	it('Verify that Cancel button returns you to the Sportsbook page', function(){
		page.clickSubmit();
		page.clickCancel();
		expect(page.currentUrl()).not.toContain('registration');
	});

});