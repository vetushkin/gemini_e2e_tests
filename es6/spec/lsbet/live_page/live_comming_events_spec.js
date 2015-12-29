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
		page.visit('live');
	});

	afterEach(function(){
	});

	it('Verify that you can select one of the events from See All list', function() {
		page.comingEvents().seeAll();
		page.comingEvents().selectEventAll(5);
		sportsPage.closeCoupon();
		expect(page.noError()).toBe(true);
	});

	//Defect - Click on an event opens See All list
	it('Verify that you can select one of the events directly from the menu', function() {
		page.comingEvents().selectRandomEvent();
		sportsPage.closeCoupon();
		expect(page.noError()).toBe(true);
	});
});