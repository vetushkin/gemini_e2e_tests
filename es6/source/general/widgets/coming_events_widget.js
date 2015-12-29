var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class ComingEventsWidget extends BaseWidget {
    
    constructor() {
        super();

        this.comingEvents = ".//*[@id='livebetting_coming_events']//*[@title]";
        this.seeAllLink = ".//*[@id='livebetting_coming_events']//*[@class='see-all']/a";

        this.allEvents = "//*[@id='upcoming-full-list']//*[@title] | //*[@id='livebetting_coming_events_lcbet']//*[contains(@class,'sport_id')]/following-sibling::div[1]/a";
    }

    selectEvent(value) {
        element.all(by.xpath(this.comingEvents)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    selectEventAll(value) {
        element.all(by.xpath(this.allEvents)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    selectRandomEvent() {
        var events = element.all(by.xpath(this.comingEvents));
        basic.clickRandomItem(events);
        basic.waitUntilPageLoaded();
    }

    selectRandomEventAll() {
        var events = element.all(by.xpath(this.allEvents));
        basic.clickRandomItem(events);
        basic.waitUntilPageLoaded();
    }

    seeAll() {
        var allLinks = element.all(by.xpath(this.allEvents));
        element(by.xpath(this.seeAllLink)).click();
        basic.waitForCountToBeGreaterThan(allLinks, 0);
    }

}

module.exports = ComingEventsWidget;
