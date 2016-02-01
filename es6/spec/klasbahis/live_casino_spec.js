var LiveCasinoPage = require('../../source/general/pages/live_casino_page');
var page = new LiveCasinoPage();

page.start().suite('BizimBahis Live Casino Page', function(parent) {
	parent.setUrl('/').before(function(actions, find) {
		this.userName = find('#user_username');
		this.password = find('#user_password');
		this.submitButton = find('#logged_out_bar input[type="submit"]');
		actions.setWindowSize(1920, 1080);
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

	page.start().suite('Live casino page', function(child) {
		child.setUrl('tr-TR/live_casino')
		.setCaptureElements(page.getCasinoNavigation())
		.capture('Get Live Casino navigation menu');
	});

	page.start().suite('Live casino page - content', function(child) {
		child.setUrl('tr-TR/live_casino')
		.setCaptureElements(page.getCasinoContent())
		.capture('Get Live Casino content');
	});

});