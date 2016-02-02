var AccountPage = require('../../source/general/pages/account_page');
var page = new AccountPage();

	page.start().suite('BizimBahis Account Page', function(parent) {
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

	page.start().suite('Logo', function(child) {
		child.setUrl('tr-TR/account/profile')
		.setCaptureElements(page.getLogo())
		.capture('Get the logo');
	});

	page.start().suite('Navigation Menu', function(child) {
		child
		.setCaptureElements(page.getNavigationMenu())
		.capture('plain');
	});

	page.start().suite('A form button', function(child) {
		child.setUrl('tr-TR/account/profile')
		.setCaptureElements(page.getForm())
		.capture('Get the form button');
	});

	page.start().suite('Summary page', function(child) {
		child.setUrl('tr-TR/account/summary')
		.setCaptureElements(page.getSummary())
		.capture('Get the summary');
	});

	page.start().suite('Summary transfer page', function(child) {
		child.setUrl('tr-TR/account/summary')
		.setCaptureElements(page.getTransfer())
		.capture('Get the transfer');
	});

	page.start().suite('Summary page Aside menu', function(child) {
		child.setUrl('tr-tr/account/summary')
		.setCaptureElements(page.getAsideMenu())
		.capture("Get the left aside menu");
	});

	page.start().suite('Transfer page', function(child) {
		child.setUrl('tr-TR/account/transfer_funds')
		.setCaptureElements(page.getTransfer())
		.capture('Get the transfer');
	});

	 page.start().suite('Transfer page summary', function(child) {
		child.setUrl('tr-TR/account/transfer_funds')
		.setCaptureElements(page.getSummary())
		.capture('Get the account summary');
	});

	page.start().suite('History page history form', function(child) {
		child.setUrl('tr-TR/account/history')
		.setCaptureElements(page.getHistoryForm())
		.capture('Get the history form');
	});

	page.start().suite('Profile page user details', function(child) {
		child.setUrl('tr-TR/account/profile')
		.setCaptureElements(page.getProfileDetails())
		.capture('Get the user details');
	});

	page.start().suite('Profile page user password', function(child) {
		child.setUrl('tr-TR/account/profile')
		.setCaptureElements(page.getProfilePassword())
		.capture('Get the user password');
	}); 

	page.start().suite('Deposit page deposit accounts list', function(child) {
		child.setUrl('tr-TR/account/deposit')
		.setCaptureElements(page.getDeposit())
		.capture('Get deposit accounts list');
	});

	page.start().suite('Withdraw page withdraw accounts list', function(child) {
		child.setUrl('tr-TR/account/withdraw')
		.setCaptureElements(page.getWithdraw())
		.capture('Get withdraw accounts list');
	});

	page.start().suite('Loyalty page', function(child) {
		child.setUrl('tr-TR/loyalty')
		.setCaptureElements(page.getLoyalty())
		.capture('Get loyalty bonus form');
	}); 

	page.start().suite('NetEnt page', function(child) {
		child.setUrl('tr-TR/account/netent_bonus')
		.setCaptureElements(page.getNetentBonus())
		.capture('Get NetEnt bonus');
	}); 

});