var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify Popular combine coupon works properly', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login();
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.betslip().deleteAllBets();	
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	//Disabled because clear() the input field is not clearing the input field, so a large bet will be place (initially it has 10 in the input field)
	xit('Verify you can add a bet from the popular combine coupon without selecting a tab', function() {
		page.popularCombine().placeBets(1.5);
		expect(page.popularCombine().getResult()).toBe("ok");

		page.popularCombine().cashoutBet();
	});
	//Disabled because clear() the input field is not clearing the input field, so a large bet will be place (initially it has 10 in the input field)
	xit('Verify you can add a bet from the popular combine coupon by selecting the 2nd tab', function() {
		page.popularCombine().selectTab(1);
		page.popularCombine().placeBets(1.5);
		expect(page.popularCombine().getResult()).toBe("ok");

		page.popularCombine().cashoutBet();
	});
	//Disabled because clear() the input field is not clearing the input field, so a large bet will be place (initially it has 10 in the input field)
	xit('Verify you can add a bet from the popular combine coupon by selecting the 3rd tab', function() {
		page.popularCombine().selectTab(2);
		page.popularCombine().placeBets(1.5);
		expect(page.popularCombine().getResult()).toBe("ok");

		page.popularCombine().cashoutBet();
	});

	it('Verify you can add a very large bet from the popular combine coupon and see the error message. First tab', function() {
		page.popularCombine().selectTab(0);
		page.popularCombine().placeBets(99999999999);
		expect(page.popularCombine().getResult()).toBe("error");
	});

	it('Verify you can add a very large bet from the popular combine coupon and see the error message. Second tab', function() {
		page.popularCombine().selectTab(1);
		page.popularCombine().placeBets(99999999999);
		expect(page.popularCombine().getResult()).toBe("error");
	});

	it('Verify you can add a very large bet from the popular combine coupon and see the error message. Third tab', function() {
		page.popularCombine().selectTab(2);
		page.popularCombine().placeBets(99999999999);
		expect(page.popularCombine().getResult()).toBe("error");
	});

	it('Verify that bet odds are in the correct format in the first tab', function() {
	    page.popularCombine().selectTab(0);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(1);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(2);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);
	});

	it('Verify that bet odds are in the correct format in the second tab', function() {
	    page.popularCombine().selectTab(1);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(1);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(2);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);
	});

	it('Verify that bet odds are in the correct format in the third tab', function() {
	    page.popularCombine().selectTab(2);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(1);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);

	    page.popularCombine().selectTab(2);
	    expect(page.popularCombine().isOddsCorrect()).toBe(true);
	});

	it('Verify you can not place a bet when you are logged out and you can see the error message.', function() {
		page.logout();
		page.popularCombine().selectTab(0);
		page.popularCombine().placeBets(1.5);
		expect(page.popularCombine().getResult()).toBe("error");
	});

});