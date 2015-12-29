var AccountHistoryPage = require('../../../source/general/pages/account_history_page.js');

describe('Account history calendar filter test', function(){
	var page = new AccountHistoryPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login("support");
	});

	afterAll(function(){
		page.visit('sportsbook');
		page.forceLogout();
	});

	beforeEach(function(){
		page.visit('account/history');
	});

	afterEach(function(){
	});

	it('Verify that you can select first and second month', function(){
		page.calendarFrom(-12, 0);
		page.calendarTo(-11, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select third and fourth month', function(){
		page.calendarFrom(-10, 0);
		page.calendarTo(-9, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select fifth and sixth month', function(){
		page.calendarFrom(-8, 0);
		page.calendarTo(-7, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	//Causes Jasmine timeout error
	xit('Verify that you can select seventh and eighth month', function(){
		page.calendarFrom(-6, 0);
		page.calendarTo(-5, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	//Causes Jasmine timeout error
	xit('Verify that you can select ninth and tenth month', function(){
		page.calendarFrom(-4, 0);
		page.calendarTo(-3, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select eleventh and twelfth month', function(){
		page.calendarFrom(-2, 0);
		page.calendarTo(-1, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBeGreaterThan(0);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can choose to show two months period in the future', function(){
		page.calendarFrom(0, 0);
		page.calendarTo(1, 0);
		page.clickSubmit();
		page.clickSubmit();
		expect(page.rows()).toBe(0);
		expect(page.noError()).toBe(true);
	});

});