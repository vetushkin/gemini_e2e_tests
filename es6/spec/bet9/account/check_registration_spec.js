var RegistrationPage = require('../../../source/general/pages/check_registration_page.js');

describe('Registration page fields verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.visit('/account/register');
	});

	afterEach(function(){
		page.visit('/account/register');
	});

	afterAll(function(){
	});

	it('Verify that you can see all the success ticks after the correct data is filled in the registration fields', function() {
		page.sendInput("first_name", "FirstName");
		page.sendInput("last_name", "LastName");
		page.sendInput("email", "Test1234@gmail.com");
		page.sendInput("address", "Test street");
		page.sendInput("postcode", "1000");
		page.selectCountry("1");
		page.selectDate("day", "1");
		page.selectDate("month", "3");
		page.selectDate("year", "2");
		page.sendInput("username", "Username1234");
		page.sendInput("password", "asdf1234");
		page.sendInput("password_confirmation", "asdf1234");
		page.sendInput("city", "Test city");
		page.sendInput("mobile", "123456789");
		page.fillCaptcha("11111");
		browser.sleep(4000);
		expect(page.getSuccessCount()).toBe(14);
		expect(page.getErrorCount()).toBe(0);
	});

	it('Verify that you can see all the error ticks after the incorrect data is filled in the registration fields', function() {
		page.sendInput("first_name", "F");
		page.sendInput("last_name", "L");
		page.sendInput("email", "incorrect");
		page.sendInput("address", "");
		page.sendInput("postcode", "z");
		page.selectDate("day", "1");
		page.sendInput("username", "a");
		page.sendInput("password", "a");
		page.sendInput("password_confirmation", "b");
		page.sendInput("city", "");
		page.sendInput("mobile", "2");
		page.fillCaptcha("1");
		browser.sleep(4000);
		expect(page.getErrorCount()).toBe(14);
	});

});