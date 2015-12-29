var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class MainMenu extends Menu {
    
    constructor() {
        super();

        this.activeMenuSubLinks = ".//*[@id='menu']//li[contains(@class,'active')]//li[contains(@class,'submenu')]/a | .//*[@class='sub_menu']//a";
        this.menuLinks = ".//*[@id='menu']//li[@class][not(contains(@class,'submenu'))]/a";
    }

    //Click on the main menu link by element class
    clickLink(value) { 
        var elems = element.all(by.xpath(this.menuLinks));

        elems.count().then(function (count) {
            if (value >= count) {
                elems.last().click();
            } else {
                elems.get(value).click();
            }
        });

        basic.waitUntilPageLoaded();
    }

    //Click on active menu sub link
    clickSubLink(value) {
        var elems = element.all(by.xpath(this.activeMenuSubLinks));

        elems.count().then(function (count) {
            if (value >= count) {
                elems.last().click();
            } else {
                elems.get(value).click();
            }
        });

        basic.waitUntilPageLoaded();
    }

}

module.exports = MainMenu;
