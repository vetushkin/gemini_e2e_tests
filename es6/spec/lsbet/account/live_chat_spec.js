var SportsPage = require('../../../source/general/pages/sports_page.js');
var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account Live Chat test', function(){
	var page = new SportsPage();
	var accountPage = new AccountPage();

	beforeAll(function(){
		page.visit('info/contact_us/');
	});

	afterAll(function(){
	});
	
	afterEach(function(){
		page.logout();
		page.closePopup();
	});

	it('Verify that you can start Live Chat session from Contact Us section', function(){
		accountPage.openLiveChat();
		page.goToPopup();
		expect(accountPage.liveChat().isLSChatStarted()).toBe(true);
	});

	it('Verify that you can start Live Chat session from user menu', function(){
		page.userMenu().clickLink('livechatbuttonnn');
		page.goToPopup();
		expect(accountPage.liveChat().isLSChatStarted()).toBe(true);
	});

	it('Verify that you can start Live Chat session from right banners link', function(){
		page.rightMenu().clickLink('right_banners', 1);
		page.goToPopup();
		expect(accountPage.liveChat().isLSChatStarted()).toBe(true);
	});

	it('Verify that you can start Live Chat session from footer link', function(){
		page.footer().clickLink('footer_col', 'Live Chat Online');
		page.goToPopup();
		expect(accountPage.liveChat().isLSChatStarted()).toBe(true);
	});

});