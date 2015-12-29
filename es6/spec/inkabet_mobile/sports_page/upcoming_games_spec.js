var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Upcoming games tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/live');
	});
	
	afterEach(function(){
	});

	for (let i = 0; i < 10; i++) {
		it('Verify you can click on upcoming games tab and select a game - #' + (i+1) + ' game', function() {
			page.openUpcomingGames(i);
			expect(page.isGamePresent()).toBe(true);
		});	
	}

});