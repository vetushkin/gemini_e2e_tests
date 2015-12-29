var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Register button tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/account');
	});
	
	afterEach(function(){
	});

	it('Verify you can see register button when not logged in', function() {
		expect(page.getRegisterButton()).toBe(true);
		page.clickRegister();
		expect(page.currentUrl()).toContain("registration");
	});

	it('Verify you can not see register button when you are logged in', function() {
		page.login('support');
		expect(page.getRegisterButton()).toBe(false);
	});

});