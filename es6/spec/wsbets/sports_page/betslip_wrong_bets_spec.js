var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that you can not enter erroneous input as a bet value', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('sportsbook');
		page.login('support');
		page.closeAd();
	});

	afterAll(function(){
		page.betslip().forceDeleteBets();
		page.forceLogout();
	});

	beforeEach(function(){
		page.sportsMenu().clickLink("Futbol");
		page.removeChat();
	});

	afterEach(function(){
		page.betslip().forceDeleteBets('sportsbook');
	});

	it('Verify that you can not enter a 0 as a bet stake', function(){		
		page.addBets(2);
		page.betslip().placeStakes(0);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a negative number as a bet stake', function(){		
		page.addBets(2);
		page.betslip().placeStakes(-10);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a text as a bet stake', function(){		
		page.addBets(2);
		page.betslip().placeStakes("hashdhah");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});


	it('Verify that you can not enter symbols as a bet stake', function(){		
		page.addBets(2);
		page.betslip().placeStakes("$^*#");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a 0 as a multibet stake', function(){		
		page.addBets(2);
		page.betslip().placeMultiStakes(0);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a negative number as a multibet stake', function(){		
		page.addBets(2);
		page.betslip().placeMultiStakes(-10);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a text as a multibet stake', function(){		
		page.addBets(2);
		page.betslip().placeMultiStakes("hashdhah");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter symbols as a multibet stake', function(){		
		page.addBets(2);
		page.betslip().placeMultiStakes("$^*#");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a negative number as a system bet stake', function(){		
		page.addBets(3);
		page.betslip().placeSystemStakes(-10);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter a 0 as a system bet stake', function(){		
		page.addBets(3);
		page.betslip().placeSystemStakes(0);
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
		
	});

	it('Verify that you can not enter a text as a system bet stake', function(){		
		page.addBets(3);
		page.betslip().placeSystemStakes("hashdhah");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

	it('Verify that you can not enter symbols as a system bet stake', function(){		
		page.addBets(3);
		page.betslip().placeSystemStakes("$^*#");
		page.betslip().placeBets();
		expect(page.betslip().errorMessagePresent()).toBe(true);
	});

});