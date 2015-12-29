var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class popularEventsWidget extends BaseWidget {
    
    constructor() {
	    super();

        //All the dates and time of the events
        this.dates = ".//*[@class='top_game_table']//*[@datetime]";
        //All the events
        this.events = ".//*[@class='top_game_table']//*[@class='event']/a";
        //All the first column odds that you can bet on
        this.betOdds = ".//*[@class='top_game_table']//*[contains(@class,'center outcome')][1]";
        //All the show more bets - when you click it a page of the event opens, where you have the full set of odd options to choose from
        this.moreBets = ".//*[@class='top_game_table']//*[contains(@class,'center more')]";
        //Xpath for the name of the event (the page with the full set of bet options)
        this.eventName = ".//*[@class='coupon']//h1";
        //Xpath for the date and time of the matches in the widget
        this.dateTimesSelector = ".//*[contains(@class,'top_game_table')]//*[@datetime]";

    }

    showMoreBets(value) {
        value = value || 0;
        var moreBets = element.all(by.xpath(this.moreBets));

        //If the value specified in the test is greater than the number of events currently present inside the widget, click the last element
        moreBets.count().then(function(count) {
            if(value >= count) {
                moreBets.last().click();
            } else {
                moreBets.get(value).click();
            }
        });

        basic.waitForElementToDisappear(moreBets, 5000);      
    }

    isEventOpened() {
        return element(by.xpath(this.eventName)).isPresent();
    }

    addBets(value) {
        value = value || 0;
        var betOdds = element.all(by.xpath(this.betOdds));
        
        basic.waitForCountToBeGreaterThan(betOdds, 0, 30000);

        betOdds.count().then(function(count) {
            if(value >= count) {
                betOdds.last().click();
            } else {
                betOdds.get(value).click();
            }
        });
    }

    //Returns true if all matches in the coupon are starting at time later than now
    dateTimes() {
        var today = Date.now();
        var dateTimes = element.all(by.xpath(this.dateTimesSelector));
        basic.waitForCountToBeGreaterThan(dateTimes, 0, 30000);

        return dateTimes.reduce(function(acc, elem) {
            return elem.getAttribute('datetime').then(function(text) {
                return ((Date.parse(text) - today) > 0);
            });
        });
    }
}

module.exports = popularEventsWidget;