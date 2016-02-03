var AccountPage = require('../../source/general/pages/account_page');
var page = new AccountPage();

	page.start().suite('BizimBahis Virtuals Page', function(parent) {
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
			actions.sendKeys(this.userName, '');
			actions.sendKeys(this.password, '');
			actions.click(this.submitButton);
		});
	});

	/* Disabled for now until a solution is found for the iFrame (using external to the websites data/elements etc.) 
	page.start().suite('Logo', function(child) {
		child.setUrl('tr-TR/virtuals/virtual_league')
		.setCaptureElements(page.getLogo())
		.capture('Get the logo');
	});

	page.start().suite('Virtuals page', function(child) {
		child.setUrl('tr-TR/virtuals/virtual_league')
		.setCaptureElements(page.getVirtualMenu())
		.capture('Get virtual menu');
	});  */

});