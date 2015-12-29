var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class UpcomingGames extends Menu {
	
	constructor() {
        super();

        this.upGamesLink = ".//*[@id='menu']//a[@class='current_events']";
        this.loadingIcon = ".//*[@id='page_loading']";
        this.dateTimesSelector = ".//*[@id='main']//*[contains(@class,'date highlight')]";
        this.activeBets = ".//*[@id='main']//a[@data-price-id]";
        this.activeEvents = ".//*[@id='main']//a[@class='current_event_link']";
        this.loadedEvents = ".//*[@class='show_more']/following::*[contains(@class,'sport_id')]";
        this.showMoreLinks = ".//*[@class='show_more']/a[@id]";
    }

    openWidget() {
        var loading = element.all(by.xpath(this.loadingIcon));
        element(by.xpath(this.upGamesLink)).click();
        basic.waitForElementToDisappear(loading, 10000);
    }

    //Verifies that list in hh:mm format on the page doesn't contain time less than now
    //Returns list of booleans
    //If time on a page is greater than now - returns false
    //Use expect not.toContain(false) to verify
    dateTimes() {
        var dateTimes = element.all(by.xpath(this.dateTimesSelector));
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) { dd='0'+dd } 
        if(mm<10) { mm='0'+mm } 
        today = mm + '/' + dd + '/' + yyyy;

        basic.waitForCountToBeGreaterThan(dateTimes, 0);

        return dateTimes.reduce(function(acc, elem) {
            return elem.getText().then(function(text) {
                return acc + ((Date.parse(today + " " + text) - Date.now()) > 0) + ' ';
            })
        })
    }

    //Add bets one by one from a coupon
    addBets(value) {
        value = value || 1;
        var loadingElement = element.all(by.xpath(this.loadingIcon));
        var bets = element.all(by.xpath(this.activeBets));

        basic.waitForElementToDisappear(loadingElement);
        basic.waitForCountToBeGreaterThan(bets, 0);

        for (var i = 0; i < value; i++) {
            browser.sleep(500);
            bets.get(i).click();  
        }
    }

    openEvent(value) {
        var loading = element.all(by.xpath(this.loadingIcon));
        element.all(by.xpath(this.activeEvents)).get(value).click();
        basic.waitForElementToDisappear(loading, 10000);
    }

    showMore() {
        element.all(by.xpath(this.showMoreLinks)).last().click();
        basic.waitUntilPageLoaded();
    }

    moreEventsLoaded() {
        var events = element.all(by.xpath(this.loadedEvents));
        basic.waitForCountToBeGreaterThan(events, 0, 10000);
        
        return events.count().then(function(count) {
            if (count > 0) {
                return true;
            } else {
                return false;
            }
        });
    }
}

module.exports = UpcomingGames;