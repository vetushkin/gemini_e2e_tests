var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account Live Chat test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});
	
	beforeEach(function(){
	});	

	afterEach(function(){
		page.forceLogout();
		page.closeSlideChat();
	});

	it('Verify that you can start Live Chat session from the slide widget', function(){
		page.openSlideChat();
		page.slideChat().enterName('testName');
		page.slideChat().enterEmail('test@test.com');
		page.slideChat().enterSubject('test Subject');
		page.slideChat().enterMessage('testing the live chat');
		page.slideChat().submitMessage();
		expect(page.slideChat().isMessageSubmited()).toBe(true);
		page.closeSlideChat();
	});

});