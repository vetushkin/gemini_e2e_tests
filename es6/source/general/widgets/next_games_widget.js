var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class NextGamesWidget extends BaseWidget {
    
    constructor() {
        super();

        this.dateTimesSelector = ".//*[@id='coupon_next_games' or contains(@class,'coupon_next_games')]//*[@datetime]";
        this.gameTabs = ".//*[@id='coupon_next_games']//a[contains(@class,'next_games')]";
        this.nextGames = ".//*[@id='coupon_next_games' or contains(@class,'coupon_next_games')]//td[contains(@class,'more_markets')]/a[@data-event-id]";
        this.gameBets = ".//*[@id='coupon_next_games' or contains(@class,'coupon_next_games')]//a[@data-price-id]";

        this.loadingAnimation = "//*[@id='loading_display']";
    }

    //Returns true if all matches in the coupon are starting at time later than now
    dateTimes() {
        var today;
        var timeDiff = 0;
        var dateTimes = element.all(by.xpath(this.dateTimesSelector));
        basic.waitForCountToBeGreaterThan(dateTimes, 0, 30000);

        browser.executeScript("return document.URL").then(function(result) {
            if (result.indexOf('inkabet') > -1 ) {
                //8 hours difference between Inkabet time and executor machine time
                timeDiff = 8 * 1000 * 3600;
            }
            today = Date.now() - timeDiff;
        });

    	return dateTimes.reduce(function(acc, elem) {
    		return elem.getAttribute('datetime').then(function(text) {
    			return acc + ((Date.parse(text) - today) > 0) + ' ';
    		})
    	})
    }

    //Select a tab in the coupon startting from 0
    selectTab(value) {
        var tabs = element.all(by.xpath(this.gameTabs));
        var loading = element.all(by.xpath(this.loadingAnimation));

        basic.waitForCountToBeGreaterThan(tabs, 0, 30000);
    	tabs.get(value).click();
        basic.waitForElementToDisappear(loading);
    	basic.waitForElementValueToChange(tabs.get(value), 'class', 'active', 30000);
    }

    //Select a game in coupon starting from 0
    selectGame(value) {
        var games = element.all(by.xpath(this.nextGames));
        basic.waitForCountToBeGreaterThan(games, 0, 30000);
    	games.get(value).click();
        basic.waitUntilPageLoaded();
    }

    //Place a bet by clicking on the random element
    placeBet() {
        var bets = element.all(by.xpath(this.gameBets));
    	basic.clickRandomItem(bets);
    }
}

module.exports = NextGamesWidget;
