var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class RightMenu extends Menu {

    constructor() {
        super();

        this.rightAside = "//*[@id='right_aside']";
        this.rightBanner = "//*[contains(@class,'logged')][contains(@class,'banner')][not(contains(@style,'none'))]";
        this.rightBannerLinks = "//*[@id='right-slider' or @id='right_banners']//a";
        this.accuLinks = ".//*[contains(@class,'logged')][not(contains(@style,'none'))]//*[@id='bannerContent']//a";
     }
     
    //Hover on the list to make link visible and clickale
    //More stable with second MouseOver
    showList(label) {
        basic.hoverOn(element(by.xpath(this.rightBanner + "//*[@id='" + label + "']")));
        return this;
    }

    clickAccuLink(value) {
        var links = element.all(by.xpath(this.accuLinks));
        basic.waitForCountToBeGreaterThan(links, 0, 5000);
        basic.hoverOn(links.get(value));
        links.count().then(function(count) {
            if (count > 0) {
                links.get(value).click();
                basic.waitUntilPageLoaded();
            }
        });
    }

    //'section' is a mandatory value. You can provide a partial class name of the module
    //If 'value' parameter will be string then the link will be searched by containing text
    //If 'value' parameter will be int then the method will click on the specified link starting from 0.
    clickLink(section, value){
        var links = element.all(by.xpath(this.rightAside + "//*[contains(@class,'" + section + "') or contains(@id,'" + section + "')]//a"));

        if (typeof value === "string") {
            links.filter(function(elem, index) {
                return elem.getText().then(function(text) {
                    return text === value;
                });
            }).then(function(filteredElements) {
                basic.waitForElement(filteredElements[0]);
                basic.hoverOn(filteredElements[0]);
                filteredElements[0].click();
                basic.waitUntilPageLoaded();
            });
        } else if (typeof value === "number") {
            basic.waitForCountToBeGreaterThan(links, 0, 5000);
            basic.hoverOn(links.get(value));
            links.count().then(function(count) {
                if (count > 0) {
                    basic.waitForElement(links.get(value), 35000);
                    links.get(value).click();
                    basic.waitUntilPageLoaded();
                }
            });
        } else {
            throw "\nWrong input.\nUse only int or string values as second parameter.";
        }
    }

    clickBannerLink(value) {
        basic.triggerElement('betslip', 'hide');
        element.all(by.xpath(this.rightBannerLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

}

module.exports = RightMenu;