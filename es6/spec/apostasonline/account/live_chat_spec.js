var AccountPage = require('../../../source/general/pages/account_page.js');

describe('Account Live Chat test', function(){
	var page = new AccountPage();

	beforeAll(function(){
		page.visit('');
		page.closeAd();
	});

	afterAll(function(){
	});
	
	beforeEach(function(){
		page.login('support');
	});	

	afterEach(function(){
		page.logout();
		page.closePopup();
	});

	it('Verify that you can start Live Chat session', function(){
		//Chat only works from 9:00-20:00/9:00-17:00(weekends) Brazil time, no widget available at other times 
		page.openSlideChat();
		page.liveChat().enterName('QA test');
		page.liveChat().enterEmail('test@test.com');
		page.liveChat().startApostasChat();
		expect(page.liveChat().isApostasChatStarted()).toContain("Bem-vindo ao suporte ApostasOnline.com");
	});

});