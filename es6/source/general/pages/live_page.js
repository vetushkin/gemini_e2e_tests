var BasePage = require('../../../lib/base/base_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

var LiveMenu = require('../widgets/live_menu.js');
var liveMenu = new LiveMenu();
var Betslip = require('../widgets/betslip.js');
var betslip = new Betslip();
var ComingEvents = require('../widgets/coming_events_widget.js');
var comingEvents = new ComingEvents();
var Highlights = require('../widgets/highlights_widget.js');
var highlights = new Highlights();

class LivePage extends BasePage {

    constructor () {
        super();

        this.activeEvent = ".//*[@id='livebetting_menu']//*[contains(@class,'active')]//a[@class='live_betting_event']";

        this.bannerHomeTeam = ".//*[@id='livebetting_banner']//*[@class='home']";
        this.bannerAwayTeam = ".//*[@id='livebetting_banner']//*[@class='away']";

        this.marketStakes = ".//*[@id='livebetting_markets']//*[@class='stake']/a";
        this.marketLoading = "//img[contains(@src,'loader')]";

        this.activeBets = ".//*[@id='livebetting_markets']//*[@class='stake']/a";
        this.updatedBets = ".//*[@id='livebetting_markets']//*[contains(@class,'arrow')]";
    }

    //Connected widgets
    liveMenu() { return liveMenu; }
    comingEvents() { return comingEvents; }
    highlights() { return highlights; }
    betslip() { return betslip; }
  
    eventStakes() {
    	var stakes = element.all(by.xpath(this.marketStakes));
    	var loading = element.all(by.xpath(this.marketLoading));

    	basic.waitForElementToDisappear(loading);
        basic.waitForElement(stakes.first());

    	return stakes.count();
    }

    stakesUpdated() {
        basic.waitForCountToBeGreaterThan(element.all(by.xpath(this.updatedBets)), 0, 110000);
        return true;
    }

    placeBets(value) {
        browser.sleep(500);
        value = value || 0;
        var elements = element.all(by.xpath(this.activeBets));

        basic.waitForCountToBeGreaterThan(elements, 0);
        
        for (var i = 0; i < value; i++) {
            browser.sleep(400);
            elements.get(i).click();    
        }
    }
}

module.exports = LivePage;
