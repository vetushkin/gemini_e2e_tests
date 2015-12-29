var RegistrationPage = require('../../../source/general/pages/registration_page.js');

describe('Registration page fields verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.openUrl('http://development.regispage.divshot.io/');
	});

	afterAll(function(){
	});

	//FIRST NAME FIELD 
	it('First name field negative validation. Empty field', function(){
		page.enterFieldText('first_name', '');
		expect(page.showsErrorIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(true);
	});

	it('First name field positive validation. Minimum letters', function(){
		page.enterFieldText('first_name', 'ab');
		expect(page.showsSuccessIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(false);
	});

	it('First name field negative validation. Using symbols and letters', function(){
		page.enterFieldText('first_name', 'testname !@#$%^&*()-_=+');
		expect(page.showsErrorIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(true);
	});

	it('First name field negative validation. Using numbers only', function(){
		page.enterFieldText('first_name', '112233');
		expect(page.showsErrorIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(true);
	});

	it('First name field negative validation. Using numbers and letters', function(){
		page.enterFieldText('first_name', '11aa22');
		expect(page.showsErrorIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(true);
	});

	it('First name field negative validation. Using spaces only', function(){
		page.enterFieldText('first_name', '     ');
		expect(page.showsErrorIcon('first_name')).toBe(true);
		expect(page.showsErrorMessage('first_name')).toBe(true);
	});
	
	//LAST NAME FIELD
	it('Last name field negative validation. Empty field', function(){
		page.enterFieldText('last_name', '');
		expect(page.showsErrorIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(true);
	});

	it('Last name field positive validation. Minimum letters', function(){
		page.enterFieldText('last_name', 'ab');
		expect(page.showsSuccessIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(false);
	});

	it('Last name field negative validation. Using symbols and letters', function(){
		page.enterFieldText('last_name', 'testname !@#$%^&*()-_=+');
		expect(page.showsErrorIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(true);
	});

	it('Last name field negative validation. Less than minimum letters. Using numbers only', function(){
		page.enterFieldText('last_name', '112233');
		expect(page.showsErrorIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(true);
	});

	it('Last name field negative validation. Less than minimum letters. Using numbers and letters', function(){
		page.enterFieldText('last_name', '11aa22');
		expect(page.showsErrorIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(true);
	});

	it('Last name field negative validation. Using spaces only', function(){
		page.enterFieldText('last_name', '     ');
		expect(page.showsErrorIcon('last_name')).toBe(true);
		expect(page.showsErrorMessage('last_name')).toBe(true);
	});

	//EMAIL FIELD
	it('Email field negative validation. Empty field', function(){
		page.enterFieldText('email', '');
		expect(page.showsErrorIcon('email')).toBe(true);
		expect(page.showsErrorMessage('email')).toBe(true);
	});

	it('Email field positive validation. Correct pattern and backend response wait', function(){
		page.enterFieldText('email', 'a@a.com');
		expect(page.serverValidation('email')).toBe(true);
		expect(page.showsSuccessIcon('email')).toBe(true);
		expect(page.showsErrorMessage('email')).toBe(false);	
	});

	it('Email field negative validation. Using symbols in domain', function(){
		page.enterFieldText('email', 'a@a#$%^&.com');
		expect(page.showsErrorIcon('email')).toBe(true);
		expect(page.showsErrorMessage('email')).toBe(true);	
	});

	it('Email field negative validation. Using spaces in address', function(){
		page.enterFieldText('email', 'a b@a.com');
		expect(page.showsErrorIcon('email')).toBe(true);
		expect(page.showsErrorMessage('email')).toBe(true);
	});

	it('Email field negative validation. One letter after dot', function(){
		page.enterFieldText('email', 'a@a.c');
		expect(page.showsErrorIcon('email')).toBe(true);
		expect(page.showsErrorMessage('email')).toBe(true);	
	});

	//COUNTRY FIELD 
	it('Country field positive validation. Option selection', function(){
		page.selectCountry(1);
		expect(page.showsSuccessIcon('country')).toBe(true);
		expect(page.showsErrorMessage('country')).toBe(false);
	});

	//MOBILE FIELD 
	it('Mobile field positive validation. Correct number', function(){
		page.enterFieldText('mobile', '123456789');
		expect(page.showsSuccessIcon('mobile')).toBe(true);
		expect(page.showsErrorMessage('mobile')).toBe(false);
	});

	it('Mobile field negative validation. Incorrect number', function(){
		page.enterFieldText('mobile', '4321');
		page.pressDelete();
		expect(page.showsErrorIcon('mobile')).toBe(true);
		expect(page.showsErrorMessage('mobile')).toBe(true);	
	});

	//BIRTH DATE FIELD
	it('Date field positive validation. Correct date', function(){
		page.enterFieldText('date_of_birth', '10101990');
		expect(page.showsSuccessIcon('date_of_birth')).toBe(true);
		expect(page.showsErrorMessage('date_of_birth')).toBe(false);
	});

	it('Date field negative validation. Incorrect date', function(){
		page.enterFieldText('date_of_birth', '99999999');
		expect(page.showsErrorIcon('date_of_birth')).toBe(true);
		expect(page.showsErrorMessage('date_of_birth')).toBe(true);
	});

	it('Date field negative validation. Zeros in date and month', function(){
		page.enterFieldText('date_of_birth', '00001985');
		expect(page.showsErrorIcon('date_of_birth')).toBe(true);
		expect(page.showsErrorMessage('date_of_birth')).toBe(true);
	});

	it('Date field negative validation. 500 years old customer', function(){
		page.enterFieldText('date_of_birth', '01011515');
		expect(page.showsErrorIcon('date_of_birth')).toBe(true);
		expect(page.showsErrorMessage('date_of_birth')).toBe(true);
	});

	//ADDRESS FIELD 
	it('Address field positive validation. Five characters', function(){
		page.enterFieldText('address', 'qwert');
		expect(page.showsSuccessIcon('address')).toBe(true);
		expect(page.showsErrorMessage('address')).toBe(false);
	});

	it('Address field negative validation. Less than five characters', function(){
		page.enterFieldText('address', 'qwer');
		expect(page.showsErrorIcon('address')).toBe(true);
		expect(page.showsErrorMessage('address')).toBe(true);
	});

});