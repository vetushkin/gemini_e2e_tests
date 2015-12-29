var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Already started events tests', function(){
	var page = new SportsMobilePage();

	afterEach(function() {
	});

	beforeAll(function(){
		page.visit('mobile/live/schedule');
	});

	beforeEach(function() {
		page.visit('mobile/live/schedule');
	});

	afterAll(function(){
	});

	for (let i = 0; i < 10; i++) {
		it('Verify that upcoming game #' + (i+1) + ' does not contain an already started event', function() {
			expect(page.notStartedEvent(i)).toBe(true);
		});	
	}
});