var LivePage = require('../../source/general/pages/live_page');
var page = new LivePage();

page.start().suite('KlasBahis Live Page', function(parent) {
	parent.setUrl('/tr-TR/live').before(function(actions, find) {
		this.userName = find('#user_username');
		this.password = find('#user_password');
		this.submitButton = find('#logged_out_bar input[type="submit"]');
		this.cashoutTab = find('#betslip .tabs a[data-link="open_mybets"]');
		this.openedLiveSport = find('#livebetting_menu div[class*="opened"] div[class*="header"]');
		this.liveSports
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

	page.start().suite('Live Favourites Menu', function(child) {
		child
		.setCaptureElements(page.getLiveFavourites())
		.capture('plain');
	});

	page.start().suite('Livebetting Menu', function(child) {
		child
		.setCaptureElements(page.getLivebettingMenu())
		.ignoreElements('#livebetting_menu .sports')
		.capture('collapsed', function(actions) {
			actions.click(this.openedLiveSport);
		});
	});

	page.start().suite('Coming Events', function(child) {
		child
		.setCaptureElements(page.getComingEvents())
		.ignoreElements('#livebetting_coming_events .coming_events')
		.capture('plain');
	});

	page.start().suite('Live Betting Banner', function(child) {
		child
		.setCaptureElements(page.getLivebettingBanner())
		.ignoreElements('#livebetting_banner .banner-inner-container')
		.capture('plain');
	});

	page.start().suite('Football Highlights', function(child) {
		child
		.setCaptureElements(page.getFootballHighlights())
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
			actions.sendKeys(this.userName, 'supporttest');
			actions.sendKeys(this.password, 'offsidebet10');
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