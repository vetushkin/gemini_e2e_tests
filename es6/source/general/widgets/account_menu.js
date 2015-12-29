var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountMenu extends Menu {
    
    constructor() {
		super();

		this.accountLinks = "//*[@id='account-links']";
	}

    //Click on the account menu link
    clickLink(label) {
        var menu = element(by.xpath(this.accountLinks + "//a[contains(@id,'" + label + "')]"));

        menu.isPresent().then(function(present) {
            if (present) {
                menu.click();
                basic.waitUntilPageLoaded();
            }
        });
    }
}

module.exports = AccountMenu;
