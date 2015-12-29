var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Live bets update tests', function(){
	var page = new SportsMobilePage();

	afterEach(function() {
	});

	beforeAll(function(){
		page.visit('mobile/live');
	});

	beforeEach(function() {
	});

	afterAll(function(){
	});

	it('Verify live bets stakes are updated in real time', function() {
		expect(page.stakesUpdated()).toBe(true);
	});
});