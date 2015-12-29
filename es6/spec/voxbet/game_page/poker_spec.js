var GamesPage = require('../../../source/general/pages/games_page.js');

describe('Poker page verifications', function(){
	var page = new GamesPage();

	beforeAll(function(){
		page.visit('poker_splash');	
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){	
	});

	afterEach(function(){
		page.closePopup();
	});

	it('Verify that you can see your balance', function(){
		expect(page.showsBalance()).toBe(true);
	});

	it('Verify that Deposit button opens the correct page', function(){
		page.clickLink('pay_in');
		page.goToPopup();
		expect(page.currentUrl()).toContain('to=EnetPoker');
		expect(page.noError()).toBe(true);
	});

	it('Verify that Withdraw button opens the correct page', function(){
		page.clickLink('pay_out');
		page.goToPopup();
		expect(page.currentUrl()).toContain('from=EnetPoker');
		expect(page.noError()).toBe(true);
	});

	it('Verify that windows and mac links are available for download', function(){
		expect(page.isXTRMPokerAvailable('windows')).toBe(true);
		expect(page.isXTRMPokerAvailable('mac')).toBe(true);
	});

	for (let i = 0; i < 8; i++) {
		it('Verify that you can open the poker link #'+ (i+1) +'', function(){
			page.visit('poker_splash');
			page.clickVoxbetLink(i);
			expect(page.noError()).toBe(true);
		});
	}

});