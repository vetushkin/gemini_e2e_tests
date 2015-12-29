var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class liveMatchesWidget extends BaseWidget
{
    constructor()
	{
		super();
        //XPath for the tab which holds the games
        this.tab = ".//*[@class='osg-live-widget-header-items']/*";
        //XPath for the 'tab' which holds the games - Football, Basketball, Tennis, Ice Hockey, etc....
        this.liveTab = ".//*[@id='live-widget-container']//div[@class='osg-live-widget-header-items']";
        //Show more button 
        this.showMoreButton = ".//*[@id='osg-show-more-button'][not(contains(@class, 'hide'))]";
        //Submit button
        this.submitButton = ".//*[@id='betslip_message']/button[@type='submit']";
        //XPath for home team tag
        this.bannerHomeTeam = ".//*[@id='livebetting_banner']//*[@class='home']";
        //XPath for away team tag       
        this.bannerAwayTeam = ".//*[@id='livebetting_banner']//*[@class='away']";
        //Unique Xpath for games
        this.uniqueGame = "//*[contains(@class,'osg-show')][not(contains(@class,'suspended'))]//*[contains(@class,'price')]";
        //Unique XPath for game live event path
        this.uniquePath = "//*[contains(@class,'osg-show')][not(contains(@class,'suspended'))]//a/div[1]";
        //Loading element for Apostasonline
        this.loading = ".//*[contains(@class, 'osg-loading')]";
        //RegEx used when comparing the home/away team strings not being empty
        this.RegEx = /[\d\w]{3,}/;
    }

    //Method to get the home and away team titles and concatenate them so the format will be
    // Team A - Team B    <---- this is how the matches are displayed (as text)   
    getTitles() {
        var homeTeam = element(by.xpath(this.bannerHomeTeam));
        var awayTeam = element(by.xpath(this.bannerAwayTeam));
        //Increased the wait time to 16 seconds - 6 seconds is not enough
        basic.waitForElementTextToChange(homeTeam, this.RegEx, 16000);
           
        homeTeam.getText().then(function(text) {homeTeam = text;});
        awayTeam.getText().then(function(text) {awayTeam = text;});

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    //Convert to uppercase letters in order to avoid case sensitive problems
                    return (homeTeam + " - " + awayTeam).toUpperCase();
        });
    }

    //Return the show more button 
    showMore() {
        var showMoreBtn = element(by.xpath(this.showMoreButton));
        //basic.waitForElement(showMoreBtn, 3500);
        showMoreBtn.isPresent().then(function(present) {
            if(present) {
                showMoreBtn.isDisplayed().then(function(displayed) {
                if (displayed) {
                    showMoreBtn.click();
                }
                });
            }
         });
     }

    //Select a live event and click on it
    selectEvent(value) {
        value = value || 0;
        var elems = element.all(by.xpath(this.uniquePath));
        basic.waitForNotStale(elems.get(value));
        elems.get(value).click();
    }

    //Get the title of the event
    getEventTitle(value) {
        value = value || 0;
        var elems = element.all(by.xpath(this.uniquePath))
        basic.waitForNotStale(elems.get(value));
        return elems.get(value).getText().then(function(text) {
            //Convert to uppercase letters in order to avoid case sensitive problems
            return text.toUpperCase();
        });
    }

    //Add bets one by one from the live widget
    addLiveBets(value) {
        value = value || 1;
        var loading = element(by.xpath(this.loading));
        var gameType = element.all(by.xpath(this.uniqueGame));
        var clickConf = this.clickConfirm();
        var showMore = this.showMore();

        basic.waitToDisappear(loading, 15000);
        gameType.count().then(function(count) {         
            if (count > 0 && value > 0) {
                showMore;
                for(var i = 0 ; i < value ; i++) {
                    clickConf;
                    gameType.get(i).click();
                    browser.sleep(500);
                }
            } else if (value === "maximum") {  
                for (var i = 0; i < count; i++) {
                    clickConf;
                    gameType.get(i).click();
                    browser.sleep(200);
                }
            }
        }); 
    }

    clickConfirm() {
        var submitBtn = element(by.xpath(this.submitButton));
        submitBtn.isPresent().then(function(present) {
            if (present) {
                submitBtn.click();
            }
        });
    }

    //Selector for one of the game tabs
    selectGame(value) {
        value = value || 0;
        var tabs = element.all(by.xpath(this.tab));
        var iconTab = element(by.xpath(this.tab + "[*[@title='" + value + "']]"));

        basic.waitForCountToBeGreaterThan(tabs, 0);
        
        tabs.count().then(function(count) {
            //Wraparound if value specified is greater than the current count of games inside the game tab container
            //We need to test event paths for basketball and football, and we do not know which index they are at
            //If the elements are more than 5 the text(i.e. Futebol) element found by XPath is not visible, so instead we need to click on the parent node
            if ((typeof value) === "string") {
                basic.waitForElement(iconTab);
                basic.waitForNotStale(iconTab);
                iconTab.click();
            } else if (value >= count) {
                basic.waitForElement(tabs.last());
                basic.waitForNotStale(tabs.last());
                tabs.last().click();
            } else {
                basic.waitForElement(tabs.get(value));
                basic.waitForNotStale(tabs.get(value));
                tabs.get(value).click();
            }
        });
    }
}
module.exports = liveMatchesWidget;