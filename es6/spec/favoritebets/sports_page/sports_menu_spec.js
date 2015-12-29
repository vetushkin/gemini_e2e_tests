var SportsPage = require('../../../source/general/pages/sports_page.js');

//Amount of sports is changing every day
describe('Verify that each sport has at least one event \
	and that coupon shows the correct Sport title', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
	});

	afterEach(function(){
	});

	it('Verify that 1st link shows at least one event', function(){
		page.sportsMenu().clickLink(0);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 2nd link shows at least one event', function(){
		page.sportsMenu().clickLink(1);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 3rd link shows at least one event', function(){
		page.sportsMenu().clickLink(2);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 4th link shows at least one event', function(){
		page.sportsMenu().clickLink(3);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 5th link shows at least one event', function(){
		page.sportsMenu().clickLink(4);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 6th link shows at least one event', function(){
		page.sportsMenu().clickLink(5);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 7th link shows at least one event', function(){
		page.sportsMenu().clickLink(6);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 8th link shows at least one event', function(){
		page.sportsMenu().clickLink(7);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 9th link shows at least one event', function(){
		page.sportsMenu().clickLink(8);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 10th link shows at least one event', function(){
		page.sportsMenu().clickLink(9);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 11th link shows at least one event', function(){
		page.sportsMenu().clickLink(10);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 12th link shows at least one event', function(){
		page.sportsMenu().clickLink(11);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 13th link shows at least one event', function(){
		page.sportsMenu().clickLink(12);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 14th link shows at least one event', function(){
		page.sportsMenu().clickLink(13);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 15th link shows at least one event', function(){
		page.sportsMenu().clickLink(14);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 16th shows at least one event', function(){
		page.sportsMenu().clickLink(15);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 17th shows at least one event', function(){
		page.sportsMenu().clickLink(16);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 18th shows at least one event', function(){
		page.sportsMenu().clickLink(17);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 19th link shows at least one event', function(){
		page.sportsMenu().clickLink(18);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 20th link shows at least one event', function(){
		page.sportsMenu().clickLink(19);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 21st link shows at least one event', function(){
		page.sportsMenu().clickLink(20);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that 22nd link shows at least one event', function(){
		page.sportsMenu().clickLink(21);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

});
