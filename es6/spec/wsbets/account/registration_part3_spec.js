var RegistrationPage = require('../../../source/general/pages/registration_page.js');

describe('Registration page fields verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.openUrl('http://development.regispage.divshot.io/');
	});

	afterAll(function(){
	});

	//The registration process takes around 10 seconds.
	//Shouldn't be successful if takes less than 17 seconds
	it('Registration process positive validation. All fields are correct', function(){
		page.enterFieldText('first_name', 'FirstName');
		page.enterFieldText('last_name', 'LastName');
		page.enterFieldText('email', 'test@test.com');
		page.selectCountry(1);
		page.enterFieldText('mobile', '123456789');
		page.enterFieldText('date_of_birth', '10101990');
		page.enterFieldText('address', 'test address, 1, 2');
		page.enterFieldText('city', 'test-city');
		page.enterFieldText('province', 'testProvince');
		page.enterFieldText('postcode', '12345');
		page.selectCurrency(1);
		page.enterFieldText('username', 'testUser1');
		page.enterFieldText('password', 'Qwerty1');
		page.enterFieldText('password_confirmation', 'Qwerty1');
		page.confirmPolicy();
		page.clickSubmit();
		expect(page.currentUrl()).toContain('deposits');
	});
});