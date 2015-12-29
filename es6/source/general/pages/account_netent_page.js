var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountNetentPage extends BasePage {
	
	constructor () {
		super();

		this.bonusContainer = ".//*[@id='netent_bonus_container']";
	}

	bonusBalance(className) {
		var elem = element(by.xpath(this.bonusContainer + "/div[@class='" + className + "']/span"));

		basic.waitForElementTextToChange(elem, /\$[0-9\,]+\.[0-9]+/);

		return elem.getText();
	}
}

module.exports = AccountNetentPage;
