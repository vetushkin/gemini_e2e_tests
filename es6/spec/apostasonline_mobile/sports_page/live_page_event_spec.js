var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Live page events tests', function(){
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

	for (let i = 0; i < 5; i++) {
		it('Verify you can open an event #' + (i+1) + 'from the live page', function() {
			page.openLiveEvent(i);
			expect(page.isTeamPresent()).toBe(true);
			expect(page.currentUrl()).toContain('live');
			expect(page.noError()).toBe(true);
		});
	}
});