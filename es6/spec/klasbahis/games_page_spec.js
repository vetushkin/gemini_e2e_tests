var GamePage = require('../../source/general/pages/game_page');
var page = new GamePage();

page.start().suite('BizimBahis Game Page', function(parent) {
	parent.setUrl('/').before(function(actions, find) {
		this.userName = find('#user_username');
		this.password = find('#user_password');
		this.submitButton = find('#logged_out_bar input[type="submit"]');
		actions.setWindowSize(1920, 3080);
	});

	page.start().suite('User Menu', function(child) {
		child
		.setCaptureElements(page.getUserMenu())
		.capture('Logged out')
		.capture('Logged in', function(actions) {
			actions.sendKeys(this.userName, 'supporttest');
			actions.sendKeys(this.password, 'offsidebet10');
			actions.click(this.submitButton);
		});
	});

	page.start().suite('Games page - navigation menu', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getNavigationMenu())
		.capture('plain');
	});

	page.start().suite('Games page - games category links', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getGamesCategoryLinks())
		.capture('Get Games category links');
	});

	page.start().suite('Games page Logo', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getLogo())
		.capture('Get the logo');
	});

	page.start().suite('Games page - game slideshow widget', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getSlideshow())
		.capture('Get the game slideshow widget');
	});

	page.start().suite('Games page - top winners', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getTopWinners())
		.capture('Get the top winners');
	});

	page.start().suite('Games page - game tab panels [captures left game menu, games]', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getGameTabPanels())
		.ignoreElements(page.getChat())
		.capture('Get the game tab panels');
	});

	page.start().suite('Games page - balance container', function(child) {
		child.setUrl('tr-TR/games')
		.setCaptureElements(page.getBalance())
		.capture('Get the balance container');
	});

});