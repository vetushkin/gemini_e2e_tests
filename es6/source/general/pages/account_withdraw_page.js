var BasePage = require('../../../lib/base/base_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountWithdrawPage extends BasePage {
	
	constructor () {
		super();
		this.withdrawLinks = ".//*[@id='withdraw_payment_types_table']//a[@class='submit']";
		this.infoMessage = ".//*[@id='withdraw_form']//*[@class='errors']";
		this.submitButton = ".//*[contains(@id,'withdraw')]//*[contains(@class,'submit') or @type='submit']";
		this.noticeMessage = ".//*[@id='notice-block']//*[@class='notice-message']";
		this.errorMessage = ".//*[@id='error-block']//*[@class='error-message']";
		this.hoverElement = ".//*[@id='withdraw']/h1";
	}

	//Withdraw links click action
	clickLink(label){
		basic.hoverOn(element(by.xpath(this.hoverElement)));
		element(by.xpath(this.withdrawLinks + "[@title='" + label + "' or contains(@href,'" + label + "')]")).click();
		basic.waitUntilPageLoaded();
	}

	showInfoMessage() {
		return element(by.xpath(this.infoMessage)).getText();
	}

	enterText(fieldID, text) {
		element(by.xpath(".//*[@id='" + fieldID + "']")).sendKeys(text);
	}

	clickSubmitButton() {
		element(by.xpath(this.submitButton)).click();
		basic.waitUntilPageLoaded();
	}

	showNoticeMessage(label) {
		return element(by.xpath(this.noticeMessage)).getText();
	}

	showErrorMessage(label) {
		return element(by.xpath(this.errorMessage)).getText();
	}
}

module.exports = AccountWithdrawPage;
