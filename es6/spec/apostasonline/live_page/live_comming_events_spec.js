var LivePage = require('../../../source/general/pages/live_page.js');
var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Live comming events test', function(){
	var page = new LivePage();
	var sportsPage = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){
	});

	beforeEach(function(){
		page.visit('pt-BR/live');
		page.removeChat();
	});

	afterEach(function(){
	});

	it('Verify that you can select one of the events from See All list', function() {
		page.comingEvents().seeAll();
		page.comingEvents().selectEventAll(5);
		sportsPage.closeCoupon();
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can select one of the events directly from the menu', function() {
		page.comingEvents().selectRandomEvent();
		sportsPage.closeCoupon();
		expect(page.noError()).toBe(true);
	});
});