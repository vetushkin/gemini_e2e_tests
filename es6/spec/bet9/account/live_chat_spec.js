var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account Live Chat test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('info/contact_us/');
	});

	afterAll(function(){
	});
	
	beforeEach(function(){
	});	

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can start Live Chat session from Contact Us section', function(){
		page.rightMenu().clickBannerLink(0);
		page.goToPopup();
		page.liveChat().enterName('QA Team');
		page.liveChat().enterEmail('test@test.com');
		page.liveChat().startChat();
		expect(page.liveChat().isStarted()).toBe(true);
	});

});