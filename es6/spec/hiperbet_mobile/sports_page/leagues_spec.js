var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Leagues tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/sportsbook');
	});
	
	afterEach(function(){
	});

	for (let i = 1; i < 23; i++) {
		it('Verify you can open league page and see event - sport ' + i + '', function() {
			page.openLeague(i);
			expect(page.isEventPresent()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

});