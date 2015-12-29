var SportsPage = require('../../../source/general/pages/sports_page.js');

//Widget is removed from the Sports Page for now
xdescribe('Verify that you can see events inside popular games (Popüler Bahisler) widget', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
		page.login('support');
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('');
		page.removeChat();
	});

	afterEach(function(){
		page.betslip().deleteAllBets();
	});

	for(let i = 0 ; i < 5 ; i ++) {
		it('Verify that you can add bets directly from the widget' + '#' + (i+1) + ' bets added ', function(){
			page.popularWidget().addBets(i);
			expect(page.betslip().betsAmount()).toBeGreaterThan(0);
		});
	}

	for(let i = 0 ; i < 5 ; i ++) {
		it('Verify that you can click the show more bets button on each bet and see the event`s page ' + '#' + (i+1) + ' bet' , function() {
			page.popularWidget().showMoreBets(i);
			expect(page.popularWidget().isEventOpened()).toBe(true);
		});
	}

	it('Verify all matches inside the popular games widget have not already started', function() {
		expect(page.popularWidget().dateTimes()).toBe(true);
	});

});
