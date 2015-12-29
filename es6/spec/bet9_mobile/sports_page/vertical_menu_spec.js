var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Vertical menu tests', function(){
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

	for (let i = 1; i < 25; i++) {
		it('Verify each sport in vertical menu opens a page with leagues - Sport #' + i + '', function() {
			page.clickSport(i);
			expect(page.isLeaguePresent()).toBe(true);
		});
	}
});