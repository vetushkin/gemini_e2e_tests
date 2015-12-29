var RegistrationPage = require('../../../source/general/pages/registration_page.js');

describe('Registration page fields verification test', function(){
	var page = new RegistrationPage();

	beforeAll(function(){
		page.openUrl('http://development.regispage.divshot.io/');
	});

	afterAll(function(){
	});

	//CITY FIELD 
	it('City field positive validation. Five characters', function(){
		page.enterFieldText('city', 'qw');
		expect(page.showsSuccessIcon('city')).toBe(true);
		expect(page.showsErrorMessage('city')).toBe(false);
	});

	it('City field negative validation. Less than five characters', function(){
		page.enterFieldText('city', 'q');
		expect(page.showsErrorIcon('city')).toBe(true);
		expect(page.showsErrorMessage('city')).toBe(true);
	});

	//PROVINCE FIELD 
	it('Province field positive validation. Two characters', function(){
		page.enterFieldText('province', 'qw');
		expect(page.showsSuccessIcon('province')).toBe(true);
		expect(page.showsErrorMessage('province')).toBe(false);
	});

	it('Province field negative validation. Less than two characters', function(){
		page.enterFieldText('province', 'q');
		expect(page.showsErrorIcon('province')).toBe(true);
		expect(page.showsErrorMessage('province')).toBe(true);
	});

	//POSTCODE FIELD 
	it('Province field positive validation. Two characters', function(){
		page.enterFieldText('postcode', '12');
		expect(page.showsSuccessIcon('postcode')).toBe(true);
		expect(page.showsErrorMessage('postcode')).toBe(false);
	});

	it('Province field negative validation. Less than two characters', function(){
		page.enterFieldText('postcode', '1');
		expect(page.showsErrorIcon('postcode')).toBe(true);
		expect(page.showsErrorMessage('postcode')).toBe(true);
	});

	//CURRENCY FIELD 
	it('Currency field positive validation. Option selection', function(){
		page.selectCurrency(1);
		expect(page.showsSuccessIcon('currency')).toBe(true);
		expect(page.showsErrorMessage('currency')).toBe(false);
	});

	//USERNAME FIELD
	it('Username field positive validation. Minimum required amount of symbols. Backend validation', function(){
		page.enterFieldText('username', 'abcdef');
		expect(page.serverValidation('username')).toBe(true);
		expect(page.showsSuccessIcon('username')).toBe(true);
		expect(page.showsErrorMessage('username')).toBe(false);	
	});

	it('Username field negative validation. Less than minimum required amount of symbols', function(){
		page.enterFieldText('username', 'qw');
		expect(page.showsErrorIcon('username')).toBe(true);
		expect(page.showsErrorMessage('username')).toBe(true);		
	});

	it('Username field negative validation. Using only spaces in the username', function(){
		page.enterFieldText('username', '      ');
		expect(page.showsErrorIcon('username')).toBe(true);
		expect(page.showsErrorMessage('username')).toBe(true);	
	});

	//PASSWORD FIELD 
	it('Password field positive validation. Minimum required amount of symbols', function(){
		page.enterFieldText('password', '123456Ab');
		expect(page.showsSuccessIcon('password')).toBe(true);
		expect(page.showsErrorMessage('password')).toBe(false);	
	});

	it('Password field negative validation. Less than minimum required amount of symbols', function(){
		page.enterFieldText('password', 'Cf345');
		expect(page.showsErrorIcon('password')).toBe(true);
		expect(page.showsErrorMessage('password')).toBe(true);	
	});

	//Fails because the password field doesn't validate use of forbidden symbols
	it('Password field negative validation. Use of forbidden symbols', function(){
		page.enterFieldText('password', ',.: _-');
		expect(page.showsErrorIcon('password')).toBe(true);
		expect(page.showsErrorMessage('password')).toBe(true);	
	});

	//PASSWORD_CONFIRMATION FIELD 
	it('Password confirmation field positive validation. Match to the password field', function(){
		page.enterFieldText('password', '123456Ab');
		page.enterFieldText('password_confirmation', '123456Ab');
		expect(page.showsSuccessIcon('password_confirmation')).toBe(true);
		expect(page.showsErrorMessage('password_confirmation')).toBe(false);	
	});

	it('Password confirmation field negative validation. Doesnt match to the password field', function(){
		page.enterFieldText('password', '123456Ab');
		page.enterFieldText('password_confirmation', 'Ab123456');
		expect(page.showsErrorIcon('password_confirmation')).toBe(true);
		expect(page.showsErrorMessage('password_confirmation')).toBe(true);	
	});

	it('Password confirmation field negative validation. Less than minimum required amount of symbols', function(){
		page.enterFieldText('password', '12345');
		page.enterFieldText('password_confirmation', '65432');
		expect(page.showsErrorIcon('password_confirmation')).toBe(true);
		expect(page.showsErrorMessage('password_confirmation')).toBe(true);	
	});

	//POLICY_CONFIRMATION FIELD 
	it('Policy confirmation field negative validation. Submit while unchecked.', function(){
		page.clickSubmit();
		expect(page.showsErrorMessage('confirm_policy')).toBe(true);
	});
});