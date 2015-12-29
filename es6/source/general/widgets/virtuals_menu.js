var Menu = require('../../../lib/base/base_menu');

class VirtualsMenu extends Menu {

    constructor() {
        super();

        this.virtualLinks = "//*[@id='account-links']";
    }

    //Click on the account menu link
    clickLink(label) {
        var menu = element(by.xpath(this.virtualLinks + " //*[contains(@class,'menu_button') or contains(@class ,'menu_button_selected')]"));

        menu.isPresent().then(function(present) {
            if (present) {
                menu.click();
            }
        });
    }
}

module.exports = VirtualsMenu;