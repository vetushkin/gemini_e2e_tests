var SportsPage = require('../../source/general/pages/sports_page');
var page = new SportsPage();

page.start().suite('ApostasOnline Sportsbook Page', function(parent) {
	parent.setUrl('/').before(function(actions, find) {
		this.userName = find('#user_username');
		this.password = find('#user_password');
		this.submitButton = find('#logged_out_bar input[type="submit"]');
		actions.setWindowSize(1920, 1080);
	});

	page.start().suite('Header Logo', function(child) {
		child
		.setCaptureElements(page.getHeader())
		.capture('Logged out');
	});

	page.start().suite('User Menu', function(child) {
		child
		.setCaptureElements(page.getUserMenu())
		.capture('Logged out')
		.capture('Logged in', function(actions) {
			actions.sendKeys(this.userName, '');
			actions.sendKeys(this.password, '');
			actions.click(this.submitButton);
		});
	});

	page.start().suite('Navigation Menu', function(child) {
		child
		.setCaptureElements(page.getNavigationMenu())
		.capture('plain');
	});

	page.start().suite('Betslip widget', function(child) {
		child
		.setCaptureElements(page.getBetslipWidget())
		.capture('empty');
	});

	page.start().suite('Favourites Menu', function(child) {
		child
		.setCaptureElements(page.getFavouritesMenu())
		.capture('plain');
	});

	page.start().suite('Sports Menu', function(child) {
		child
		.setCaptureElements(page.getSportsMenu())
		.capture('plain');
	});

	page.start().suite('Articles', function(child) {
		child
		.setCaptureElements(page.getArticlesWidget())
		.capture('plain');
	});

	page.start().suite('Live widget', function(child) {
		child
		.setCaptureElements(page.getLiveWidget())
		.capture('plain');
	});

	page.start().suite('Next Games', function(child) {
		child
		.setCaptureElements(page.getNextGamesWidget())
		.ignoreElements('.event_name').capture('plain');
	}); 
});