var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountSummaryPage extends BasePage {
	
	constructor () {
		super();

		this.balanceElem = ".//*[@id='account_summary']//*[contains(@class,'account')]";
		this.bonusElem = ".//*[@id='AccSummaryExtra']//*[@class='info_field']";
	}

	isBalanceCorrect(text) {
		var elem = element.all(by.xpath(this.balanceElem + "[contains(.,'" + text + "')]/following-sibling::*[contains(@class,'total')]")).first();
		basic.waitForElementTextToChange(elem, /[0-9\.\,]+\ [A-Za-z]+/i, 5000);
		return true;
	}

	//Voxbet specific bonuses on the Summary page
	isBonusCorrect(text) {
		var elem = element.all(by.xpath(this.bonusElem + "[contains(.,'" + text + "')]/following-sibling::*[@class='amount_field']")).first();
		basic.waitForElementTextToChange(elem, /[0-9\.\,]+\ [A-Za-z]+/i, 5000);
		return true;
	}
}

module.exports = AccountSummaryPage;
