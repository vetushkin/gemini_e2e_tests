    var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class UserMenu extends Menu {
	
	constructor() {
        super();

        this.userMenu = "//*[@id='user_menu']";
        this.userAccount = "//*[@id='my_account']";
        this.userName = ".//*[@id='user_welcome']//*[@class='user_name']";
        this.userCurrency = ".//*[@id='user_welcome']//*[@data-hook='currency']";
        this.userBalance = ".//*[@id='user_welcome']//*[@id='user_current_balance']";
        this.submitButton = ".//*[@id='user_menu']//*[@type='submit']"
        this.socialLinks = ".//*[@id='social']/a";
        //Miljugadas info links under user menu
        this.infoLinks = ".//*[@id='info']//a[not(contains(@class,'hidden'))]";

        this.userNameRegexp = /.{1,}/;
        this.userCurrencyRegexp = /[A-Z]{3}/;
        this.userBalanceRegexp = /[0-9.,]{1,}/;

    }

	clickLink(value) {
        var links1 = element.all(by.xpath(this.userMenu + "//*[@id='" + value + "' or @class='" + value + "']//a"));
        var links2 = element.all(by.xpath(this.userMenu + "//a[contains(@href,'" + value + "')]"));
        //Sentinel variable for the cases where links1 and links2 both find an element by XPath - default sentinel value is 0(element not found yet); if the element is found - sentinel is 1
        var sentinel = 0;
        links1.count().then(function(count) {
            //Execute the if statement only if the sentinel is = 0 and the count is > 0
            if (count > 0 && sentinel === 0) {
                //If the element is found by the Xpath of links1, set the sentinel variable to 1
                sentinel = 1;
                links1.first().click();
            }
        });

        links2.count().then(function(count) {
            //Execute the if statement only if the sentinel is = 0 and the count is > 0 (sentinel can be 1 if the element was already found by links1 XPath)
            if (count > 0 && sentinel === 0) {
                sentinel = 1;
                links2.first().click();
            }
        });

        basic.waitUntilPageLoaded();
    }

    clickInfoLink(value) {
        element.all(by.xpath(this.infoLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    clickLSBetLink(value) {
        element(by.xpath(this.userMenu + "//a[.='" + value + "']")).click();
    }

    isUsernameCorrect() {
        var elem = element(by.xpath(this.userName));
        var regexp = this.userNameRegexp;

        return elem.getText().then(function(text) {
            return regexp.test(text);
        });
    }

    isCurrencyCorrect() {
        var elem = element(by.xpath(this.userCurrency));
        var regexp = this.userCurrencyRegexp;

        return elem.getText().then(function(text) {
            return regexp.test(text);
        });
    }

    isBalanceCorrect() {
        var elem = element(by.xpath(this.userBalance));
        var regexp = this.userBalanceRegexp;

        return elem.getText().then(function(text) {
            return regexp.test(text);
        });
    }

    isSubmitButtonPresent() {
        return element(by.xpath(this.submitButton)).isPresent();
    }

    socialLinksAmount() {
        return element.all(by.xpath(this.socialLinks)).count();
    }

    //Hover on the list to make link visible and clickale
    showList(label) {
        basic.hoverOn(element(by.xpath(this.userMenu + "//*[@id='" + label + "']")));
        return this;
    }
}

module.exports = UserMenu;