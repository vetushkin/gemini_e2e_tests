var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class LiveMenu extends Menu {

    constructor() {
        super();

        this.categoriesLinks = ".//*[@id='livebetting_menu']//*[contains(@class,'sport-header')]";
        this.eventsLinks = ".//*[@id='livebetting_menu']//div[contains(@class,'opened')]//a[@class='live_betting_event']";
        this.activeEvent = ".//*[@id='livebetting_menu']//*[contains(@class,'active')]//a[@class='live_betting_event']";
        this.closedCategories = ".//*[@id='livebetting_menu']//*[@class='sports']/*[not(contains(@class,'opened'))]";
        this.openedCategories = ".//*[@id='livebetting_menu']//*[@class='sports']/*[contains(@class,'opened')]";
        this.activeBets = ".//*[@id='livebetting_menu']//*[contains(@class,'opened')]//*[contains(@class,'multiple') or @class='events']//*[contains(@class,'market_selection')]/a";
        this.updatedBets = ".//*[@id='livebetting_menu']//*[contains(@class,'arrow')]";
    }

    selectCategory(value) {
        element.all(by.xpath(this.categoriesLinks)).get(value).click();
    }

    selectRandomEvent() {
        var events = element.all(by.xpath(this.eventsLinks));

        basic.waitForElement(element.all(by.xpath(this.eventsLinks)).first());

        basic.clickRandomItem(events);
    }

    selectEvent(value) {
        var selection = element.all(by.xpath(this.eventsLinks));
        browser.sleep(500);
        basic.waitForCountToBeGreaterThan(selection, 0, 5000);
        element.all(by.xpath(this.eventsLinks)).get(value).click();
    }

    openAllCategories() {
        var closed = element.all(by.xpath(this.closedCategories));

        closed.each(function(elem) {
            elem.click();
            browser.sleep(100);
        });

        basic.waitForCountToBe(closed, 0, 5000);        
        browser.sleep(500);
    }

    closeAllCategories() {
        element.all(by.xpath(this.openedCategories)).each(function(elem) {
            elem.click();
        });
    }

    placeBets(value) {
        browser.sleep(1000);
        value = value || 1;
        var elements = element.all(by.xpath(this.activeBets));

        basic.waitForCountToBeGreaterThan(elements, 0, 10000);

        for (var i = 0; i < value; i++) {
            browser.sleep(400);
            element.all(by.xpath(this.activeBets)).get(i).click();    
        }
    }

    stakesUpdated() {
        basic.waitForCountToBeGreaterThan(element.all(by.xpath(this.updatedBets)), 0, 100000);
        return true;
    }
}

module.exports = LiveMenu;
