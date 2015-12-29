var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountTransferPage extends BasePage {
	
	constructor () {
		super();

		this.fromOptions = "//*[@id='transfer_from' or @data-select-id='transfer_from'][not(contains(@style,'none'))]//*[self::option or self::div[@class='menu_option']]";
		this.toOptions = "//*[@id='transfer_to' or @data-select-id='transfer_to'][not(contains(@style,'none'))]//*[self::option or self::div[@class='menu_option']]";
		this.fromLSBetOptions = ".//*[@data-select-id='transfer_from']";
		this.toLSBetOptions = ".//*[@data-select-id='transfer_to']";
		this.currencySymbol = ".//*[@id='currency_symbol']";
		this.transferAmount = ".//*[@id='transfer_amount']";
		this.transferButton = ".//*[@id='transfer_button_container']/input";
		this.errorSelector = ".//*[@id='error-block']/*[@class='error-message']";
		this.fromApostasOptions = ".//*[@id='transfer_from_chosen']";
		this.toApostasOptions = ".//*[@id='transfer_to_chosen']";
		this.balanceElem = ".//*[@id='account_summary']//*[contains(@class,'account')]";
	}

	selectFrom(value) {
		var arrow = element(by.xpath(this.fromOptions + "[@value='" + value + "' or @data-option-value='" + value + "']//preceding::*[@class='select_menu_arrow'][1]"));
		var option = element(by.xpath(this.fromOptions + "[@value='" + value + "' or @data-option-value='" + value + "']"));

		arrow.isPresent().then(function(present) {
			if (present) {
				arrow.click();
			}
		});

		option.click();
	}

	selectTo(value) {
		var arrow = element(by.xpath(this.toOptions + "[@value='" + value + "' or @data-option-value='" + value + "']//preceding::*[@class='select_menu_arrow'][1]"));
		var option = element(by.xpath(this.toOptions + "[@value='" + value + "' or @data-option-value='" + value + "']"));

		arrow.isPresent().then(function(present) {
			if (present) {
				arrow.click();
			}
		});

		option.click();
	}

	selectLSBetFrom(value) {
		element(by.xpath(this.fromLSBetOptions)).click();
		element(by.xpath(this.fromLSBetOptions + "//*[@class='menu_option'][@data-option-value='" + value + "']")).click();
	}

	selectLSBetTo(value) {
		element(by.xpath(this.toLSBetOptions)).click();
		element(by.xpath(this.toLSBetOptions + "//*[@class='menu_option'][@data-option-value='" + value + "']")).click();
	}

	selectApostasFrom(value) {
		element(by.xpath(this.fromApostasOptions)).click();
		element(by.xpath(this.fromApostasOptions + "//li[text()='" + value + "']")).click();
	}

	selectApostasTo(value) {
		element(by.xpath(this.toApostasOptions)).click();
		element(by.xpath(this.toApostasOptions + "//li[text()='" + value + "']")).click();
	}

	currencyLabel() {
		return element(by.xpath(this.currencySymbol)).getText();
	}

	setAmount(value) {
		element(by.xpath(this.transferAmount)).clear().sendKeys(value);
	}

	setRandomAmount() {
		//Generating the random number
		var value = ((Math.random() * 2) + 1.5).toFixed(2);
		element(by.xpath(this.transferAmount)).clear().sendKeys(value);
	}

	clickTransfer() {
		element(by.xpath(this.transferButton)).click();
		basic.waitUntilPageLoaded();
	}

	errorMessage() {
		return element(by.xpath(this.errorSelector)).getText();
	}

	getBalance(text) {
		var elem = element.all(by.xpath(this.balanceElem + "[contains(.,'" + text + "')]/following-sibling::*[contains(@class,'total')]")).first();
		return elem.getText();
	}
}

module.exports = AccountTransferPage;