var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class LoyaltyWidget extends BaseWidget {
    
  constructor() {
    super();
    //RegEx - any number of digits followed by a dot (.) followed by exactly 2 digits. The regex includes negative numbers like : -12.34
    this.RegEx = /-?(\d*)\.(\d{2})/;
    this.typeAmounts = ".//*[@class='currency']";
    //Xpath for the Para Puan Bozdur button
    this.exchangeButton = ".//*[@class='moneys_exchange_link']";
    //Xpath for the account bonuses values on Bonuses page
    this.bonuses = ".//*[@class='loyalty_bonus_values']/div/span";
  }
  
  isTypeAmountCorrect(value) {
    var value = value || 0;
    var elems = element.all(by.xpath(this.typeAmounts));

    return basic.compareToRegexp(elems, value, this.RegEx);
  }

  clickExchangeButton() {
    element(by.xpath(this.exchangeButton)).click();
    basic.waitUntilPageLoaded(10000);
  }

  isBonusCorrect(value) {
    var value = value || 0;
    var elems = element.all(by.xpath(this.bonuses));

    return basic.compareToRegexp(elems, value, this.RegEx);
  }
}             

module.exports = LoyaltyWidget;