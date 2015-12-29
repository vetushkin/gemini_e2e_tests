var BasePage         = require('../../../lib/base/base_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountDepositPage extends BasePage {
	
	constructor () {
		super();

		this.depositLinks = ".//*[@id='deposit_payment_types_table']//a[@class='submit']";
		this.voxbetDepositLinks = "//*[@id='DepositMethods']//a[@class='m-name']";
		this.submitButton = ".//*[@id='deposit']//*[contains(@class,'submit')]";
		this.errorMessage = ".//*[contains(@id,'block')]/p[string-length(text()) > 3]";
		this.errorMessageBlock = ".//*[@id='error-block']//*[@class='error-message']";
		this.infoMessage = ".//*[@id='deposit_payment_types']//*[@class='errors']";
		this.depositMessage = ".//*[@id='deposit_payment_types']//*[@class='info']";
		this.focusElement = ".//*[@id='deposit']/h1";
		this.noticeMessage = ".//*[@class='notice-message']";
		this.dropMenu = "//*[@id='deposit_perform_bank']";
		this.banksList = "//*[@id='deposit_perform_bank']/option";
		this.confirmButton = ".//*[@class='submit']";
	}

	//Deposit links click action
	clickLink(label){
		var elem = element.all(by.xpath(this.depositLinks + "[contains(@title,'" + label + "')]"));
		var focus = element(by.xpath(this.focusElement));
		
		basic.hoverOn(focus);
		elem.last().click();
		basic.waitUntilPageLoaded();
	}

	//Deposit links click action
	clickVoxbetLink(text){
		var elem = element.all(by.xpath(this.voxbetDepositLinks + "[contains(text(),'" + text + "')]"));
		var focus = element(by.xpath(this.focusElement));
		
		basic.hoverOn(focus);
		elem.last().click();
		basic.waitUntilPageLoaded();
	}

	enterText(fieldID, text) {
		element(by.xpath(".//*[@id='" + fieldID + "']")).sendKeys(text);
	}

	clickSubmitButton() {
		element(by.xpath(this.submitButton)).click();
		basic.waitUntilPageLoaded();
	}

	clickDropMenu() {
		element(by.xpath(this.dropMenu)).click();
	}

	banksListSize() {
		return element.all(by.xpath(this.banksList)).count();
	}

	showConfirmButton() {
		return element(by.xpath(this.confirmButton)).getText();
	}

	showNoticeMessage() {
		return element(by.xpath(this.noticeMessage)).getText();
	}

	showErrorMessage() {
		return element(by.xpath(this.errorMessage)).getText();
	}

	showInfoMessage() {
		return element(by.xpath(this.infoMessage)).getText();
	}
	
	showDepositMessage() {
		return element.all(by.xpath(this.depositMessage)).first().getText();
	}

	showErrorMessageBlock() {
		return element(by.xpath(this.errorMessageBlock)).getText();
	}
}

module.exports = AccountDepositPage;
