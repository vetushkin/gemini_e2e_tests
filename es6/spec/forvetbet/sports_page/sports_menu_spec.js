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

	it('Verify that Futbol link shows at least one event', function(){
		page.sportsMenu().clickLink(0);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Genisletilmis Bahis link shows at least one event', function(){
		page.sportsMenu().clickLink(1);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Basketbol link shows at least one event', function(){
		page.sportsMenu().clickLink(2);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Tenis link shows at least one event', function(){
		page.sportsMenu().clickLink(3);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Voleybol link shows at least one event', function(){
		page.sportsMenu().clickLink(4);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Beyzbol link shows at least one event', function(){
		page.sportsMenu().clickLink(5);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Hentbol link shows at least one event', function(){
		page.sportsMenu().clickLink(6);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Rugby Birliği link shows at least one event', function(){
		page.sportsMenu().clickLink(7);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Mma/Boks link shows at least one event', function(){
		page.sportsMenu().clickLink(8);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Formula 1 link shows at least one event', function(){
		page.sportsMenu().clickLink(9);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Amerikan Futbolu link shows at least one event', function(){
		page.sportsMenu().clickLink(10);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Avustralya Futbolu link shows at least one event', function(){
		page.sportsMenu().clickLink(11);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Buz Hokeyi link shows at least one event', function(){
		page.sportsMenu().clickLink(12);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Dart link shows at least one event', function(){
		page.sportsMenu().clickLink(13);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Golf link shows at least one event', function(){
		page.sportsMenu().clickLink(14);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Snooker link shows at least one event', function(){
		page.sportsMenu().clickLink(15);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Sutopu link shows at least one event', function(){
		page.sportsMenu().clickLink(16);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Futsal link shows at least one event', function(){
		page.sportsMenu().clickLink(17);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Bisiklet link shows at least one event', function(){
		page.sportsMenu().clickLink(18);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Moto Gp link shows at least one event', function(){
		page.sportsMenu().clickLink(19);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Masa Tenisi link shows at least one event', function(){
		page.sportsMenu().clickLink(20);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Kriket link shows at least one event', function(){
		page.sportsMenu().clickLink(21);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Futbol özel Bahisler link shows at least one event', function(){
		page.sportsMenu().clickLink(22);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Plaj Voleybolu link shows at least one event', function(){
		page.sportsMenu().clickLink(23);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Poker link shows at least one event', function(){
		page.sportsMenu().clickLink(24);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

	it('Verify that Sayısal Loto link shows at least one event', function(){
		page.sportsMenu().clickLink(25);
		expect(page.betsAmount()).toBeGreaterThan(0);
		//expect(page.couponTitle().isCorrect()).toBe(true);
	});

});
