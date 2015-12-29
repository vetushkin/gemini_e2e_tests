var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account Live Chat test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('info/contact_us/');
	});

	afterAll(function(){
	});
	
	afterEach(function(){
		page.forceLogout();
		page.closePopup();
	});

	it('Verify that you can start Live Chat session from Contact Us section', function(){
		page.openLiveChat();
		page.goToPopup();
		page.liveChat().enterAccountNumber('1111111111');
		page.liveChat().enterEmail('test@test.com');
		page.liveChat().selectIssue('VIP');
		page.liveChat().startChat();
		expect(page.liveChat().isStarted()).toBe(true);
	});
});