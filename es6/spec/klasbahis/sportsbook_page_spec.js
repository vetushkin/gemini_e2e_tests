var SportsPage = require('../../source/general/pages/sports_page');
var page = new SportsPage();

page.start().suite('KlasBahis Sportsbook Page', function(parent) {
	parent.setUrl('/').before(function(actions, find) {
		this.userName = find('#user_username');
		this.password = find('#user_password');
		this.submitButton = find('#logged_out_bar input[type="submit"]');
		this.cashoutTab = find('#betslip .tabs a[data-link="open_mybets"]');
		actions.setWindowSize(1920, 1080);
	});

	page.start().suite('Header Logo', function(child) {
		child
		.setCaptureElements(page.getHeader())
		.capture('plain');
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

	page.start().suite('Cashout widget', function(child) {
		child
		.setCaptureElements(page.getBetslipWidget())
		.capture('Logged out', function(actions) {
			actions.click(this.cashoutTab);
		});
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
		.ignoreElements('#article_timer', '.article_image_container')
		.capture('plain');
	});

	page.start().suite('Live widget', function(child) {
		child
		.setCaptureElements(page.getLiveWidget())
		.ignoreElements('#osg-events-region')
		.capture('plain');
	});

	page.start().suite('Next Games', function(child) {
		child
		.setCaptureElements(page.getNextGamesWidget())
		.ignoreElements('#coupon_next_games table')
		.capture('plain');
	});

	page.start().suite('Footer', function(child) {
		child
		.setCaptureElements(page.getFooter())
		.capture('plain');
	});

	page.start().suite('User Menu', function(child) {
		child
		.setCaptureElements(page.getUserMenu())
		.capture('Logged out')
		.ignoreElements('#user_balance span.user_value')
		.capture('Logged in', function(actions) {
			actions.sendKeys(this.userName, '');
			actions.sendKeys(this.password, '');
			actions.click(this.submitButton);
		});
	});

	page.start().suite('Cashout widget - second state', function(child) {
		child
		.setCaptureElements(page.getBetslipWidget())
		.ignoreElements('#betslip .badge', '#osg-my-bets-pending-items')
		.capture('Logged in', function(actions) {
			actions.click(this.cashoutTab);
		});
	});


});