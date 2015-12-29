var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class popularCombineWdiget extends BaseWidget {
    
    constructor() {
	    super();
        //Tab for the 3 options to choose from
        this.popularCombineTabs = "//*[@id='main_page_coupons']/section[@id='multibets_yield']/ul/li";
        //Input stake field
        this.stakeField = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//input";
        //Submit button
        this.submitButton = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//button";
        //XPath selector for the possible returns (amount to be won)
        this.totalPayout = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//*[@id='multibet_possible_returns']";
        //Xpath selector for the total bet coefficient
        this.betOdds = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//span[contains(@id,'multibets')]";
        //Xpath for error message
        this.errorMessage = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//*[@class='error']";
        //Xpath for the success message
        this.successMessage = "//*[@id='main_page_coupons']/section[@id='multibets_yield']//*[@class='offer active']//*[@class='succes']";
        //Cashout badge
        this.cashoutBadge = ".//*[@class='badge']";
        //Cashout button
        this.cashoutButton = ".//*[@id='osg-my-bets-pending-cashout-button'][not(contains(@value, '0.00'))]";
        //Confirm cashout button
        this.cashoutAccept = ".//*[@id='osg-my-bets-pending-cashout-confirmation'][not(contains(@class, 'hidden'))]//*[@id='osg-my-bets-pending-cashout-yes']";
        //Cashout loading/progress spinner - wait for this element to disappear
        this.cashoutSpinner = ".//*[@id='osg-my-bets-pending-cashout-message'][not(contains(@class, 'hidden'))]";
        //Regex - 1 or more digits followed by a dot followed by exactly 2 digits
        this.RegEx = /(\d+)\.(\d{2})/;
        //Regex for cashout badge
        this.RegEx2 = /^[1-9]\d*/;
    }

    cashoutBet() {
        var badge = element(by.xpath(this.cashoutBadge));
        var cashoutButton = element(by.xpath(this.cashoutButton));
        var accept = element(by.xpath(this.cashoutAccept));
        var loading = element.all(by.xpath(this.cashoutSpinner));

        basic.waitForElementTextToChange(badge, this.RegEx2, 10000);

        badge.click();

        cashoutButton.click();

        accept.click().then(function() {
            basic.waitForElementToDisappear(loading, 7777);
        });

        
    }

    selectTab(value) {
        var value = value || 0;
        var tab = element.all(by.xpath(this.popularCombineTabs)).get(value);
        tab.click();
    }

    placeBets(value) {
        var value = value || 1;
        var input = element(by.xpath(this.stakeField));
        var submit = element(by.xpath(this.submitButton));

        input.clear().then(function() {
            input.sendKeys(value);
        });
      
        submit.click();
    }

    //Return "ok" if the bet was placed successfully, return "error" if the bet was not successfull and an error message appears
    getResult() {
        var success = element.all(by.xpath(this.successMessage));
        var error = element.all(by.xpath(this.errorMessage));
        //End result to be returned - "ok" or "error"
        var result;

        success.count().then(function(count) {
           
            if(count > 0) {
                result = "ok";
            }
            
        }); 
       

        error.count().then(function(count) {
            
            if(count > 0) {
                result = "error";
            }
            
        });  
    
        
        

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    return result;
        });
    }

    isOddsCorrect(value) {
    var value = value || 0;
    var elems = element.all(by.xpath(this.betOdds));

    return basic.compareToRegexp(elems, value, this.RegEx);
  }
  
}

module.exports = popularCombineWdiget;