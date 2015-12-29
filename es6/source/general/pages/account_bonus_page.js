var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountBonusPage extends BasePage {
	
	constructor () {
		super();

		this.bonusContainers = ".//*[@id='loyalty_bonus']//*[contains(@class,'values')]//span";
	}

	isBalanceCorrect(value) {
		var elems = element.all(by.xpath(this.bonusContainers));
		basic.waitForElementTextToChange(elems.get(value), /[0-9]+\.[0-9]+\ [A-Za-z]+/);
		return true;
	}
}

module.exports = AccountBonusPage;