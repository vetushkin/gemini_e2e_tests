var SportsMobilePage = require('../../../source/mobile/mobile_pages/sports_mobile_page.js');

describe('Betslip tests', function(){
	var page = new SportsMobilePage();

	beforeAll(function(){
		page.visit('mobile/sportsbook');
	});

	afterAll(function(){
		page.logout();
	});

	beforeEach(function(){
		page.visit('mobile/sportsbook');
	});
	
	afterEach(function(){
	});

	it('Verify you can see and click the betslip link', function() {
		page.betslip().clickBetslip();
		expect(page.betslip().isBackbuttonPresent()).toBe(true);
		expect(page.noError()).toBe(true);
	});

	for (let i = 1; i < 4; i++) {
		it('Verify that you can see the Betslip link on the Sports page - sport #' + i + ' ', function() {
			page.openVerticalSport(i);
			page.betslip().clickBetslip();
			expect(page.betslip().isBackbuttonPresent()).toBe(true);
			expect(page.noError()).toBe(true);
		});
	}

	it('Verify that you can see the Betslip link on the Account page ', function() {
		page.visit('mobile/account');
		page.betslip().clickBetslip();
		expect(page.betslip().isBackbuttonPresent()).toBe(true);
		expect(page.noError()).toBe(true);
	});


});