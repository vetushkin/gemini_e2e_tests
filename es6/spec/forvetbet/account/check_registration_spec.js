var RegistrationPage = require('../../../source/general/pages/check_registration_page.js');

describe('Registration page fields verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.visit('');
		page.clickRegister();
	});

	afterEach(function(){
		page.visit('');
		page.clickRegister();
	});

	afterAll(function(){
	});

	it('Verify that you can see all the success ticks after the correct data is filled in the registration fields', function() {
		page.sendInput("first_name", "FirstName");
		page.sendInput("last_name", "LastName");
		page.sendInput("email", "Test1234@gmail.com");
		page.sendInput("address", "Test street");
		page.sendInput("province", "Area1234");
		page.sendInput("postcode", "1000");
		page.selectDate("day", "1");
		page.selectDate("month", "3");
		page.selectDate("year", "2");
		page.sendInput("telephone", "+903332345432");
		page.sendInput("username", "Username1234");
		page.sendInput("password", "asdf1234");
		page.sendInput("password_confirmation", "asdf1234");
		page.sendInput("city", "Test city");
		page.sendInput("mobilemask", "123456789");
		page.fillCaptcha("11111");
		expect(page.getSuccessCount()).toBe(16);
		expect(page.getErrorCount()).toBe(0);
	});

	it('Verify that you can see all the error ticks after the incorrect data is filled in the registration fields', function() {
		page.sendInput("first_name", "F");
		page.sendInput("last_name", "L");
		page.sendInput("email", "incorrect");
		page.sendInput("address", "");
		page.sendInput("province", "");
		page.sendInput("postcode", "z");
		page.selectDate("day", "1");
		page.sendInput("telephone", "asd");
		page.sendInput("username", "a");
		page.sendInput("password", "a");
		page.sendInput("password_confirmation", "b");
		page.sendInput("city", "");
		page.sendInput("mobilemask", "2");
		page.fillCaptcha("1");
		expect(page.getErrorCount()).toBe(14);
	});

});