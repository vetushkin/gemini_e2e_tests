var RegistrationPage = require('../../../source/general/pages/registration_page.js');

describe('PreRegistration page data transfer verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.visit('t/lp_prereg');
	});

	afterAll(function(){
	});

	it('Verify that prereg fields values are saved', function(){
		page.enterFieldText('email', 'test@mail.com');
		page.enterFieldText('first_name', 'firstName');
		page.enterFieldText('last_name', 'lastName');
		page.selectDate('01', '10', '1990');
		page.clickSubmit();
		expect(page.getFieldValue('user_email')).toContain('test@mail.com');
		expect(page.getFieldValue('user_first_name')).toContain('firstName');
		expect(page.getFieldValue('user_last_name')).toContain('lastName');
		expect(page.getFieldValue('user_day')).toContain('1');
		expect(page.getFieldValue('user_month')).toContain('1');
		expect(page.getFieldValue('user_year')).toContain('1990');
	});

});