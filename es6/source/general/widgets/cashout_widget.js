var BaseWidget = require('../../../lib/base/base_widget');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class CashoutWidget extends BaseWidget {

	constructor() {
		super();

		this.cashoutTab = ".//*[@id='betslip']//a[@data-link='open_mybets']";
		this.betslipTab = ".//*[@id='betslip']//a[@data-link='open_betslip']";
		this.cashOutContainer = ".//*[@id='my_bets']";
		this.cashoutMessage = ".//*[@id='my_bets']/p";
		this.countBadge = ".//*[@id='betslip']//*[@class='badge']";
		this.pendingBets = ".//*[@id='osg-my-bets-pending-items']//*[contains(@class,'pending')]";
		this.typeAmounts = ".//*[contains(@id,'amount-currency-type')]";
		this.eventsNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-event')]";
		this.marketsNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-market')]";
		this.outcomesNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-outcome')]";
		this.showMoreButton = ".//*[@id='osg-my-bets-pending-more-button']";
		this.cashoutButton = ".//*[@id='osg-my-bets-pending-cashout'][not(contains(@class,'hidden'))]//button[contains(@id,'button')]";
		this.confirmButton = ".//*[@id='osg-my-bets-pending-cashout-confirmation'][not(contains(@class,'hidden'))]//button[contains(@id,'yes')]";
		this.cancelButton = ".//*[@id='osg-my-bets-pending-cashout-confirmation'][not(contains(@class,'hidden'))]//button[contains(@id,'no')]";

		this.currentBalance = ".//*[@id='user_current_balance']";
		this.cashoutSpinner = ".//*[@id='osg-my-bets-pending-cashout-message']//*[@class='spinner']";

		this.typeRegexp = /^\w+\s\d{1,}[\.\,]\d{2}\s[A-Z]{3}/;
		this.eventRegexp = /[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\w\s\-\/\,\.]+/;
		this.marketRegexp = /^[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\s\/\w\d\(\)\,\.\?\-]+\-[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\s\/\w\d\.]+$/;
		this.outcomeRegexp = /^[x00-\xFF\s\(\)\,\.\+\-\d]+\@\s\d{1,}[\.\,]\d{2,}/;
	}

	openTab() {
		var container = element(by.xpath(this.cashOutContainer));
		var tab = element(by.xpath(this.cashoutTab));

        tab.click();
        basic.waitForVisible(container);
    }

    badgeAmount() {
    	return element(by.xpath(this.countBadge)).getText();
    }

    betsAmount() {
    	return element.all(by.xpath(this.pendingBets)).count();	
    }

    //Clicks the button if there are more than 5 bets
    clickShowButton() {
    	var button = element(by.xpath(this.showMoreButton));

    	element(by.xpath(this.countBadge)).getText().then(function(text) {
    		if (parseInt(text, 10) > 5) {
    			basic.hoverOn(button);
    			button.click();
    			basic.waitToDisappear(button);		
    		}
    	});
    }

    clickCashoutButton() {
    	var button = element.all(by.xpath(this.cashoutButton));

    	button.count().then(function(count) {
    		if (count > 0) {
    			button.get(0).click();
    		}
    	});
    }

    clickButton(value) {
    	var button;

    	if (value === 'confirm') {
    		button = element.all(by.xpath(this.confirmButton));
    	} else if (value === 'cancel') {
    		button = element.all(by.xpath(this.cancelButton));
    	} else if (value === 'cashout') {
    		button = element.all(by.xpath(this.cashoutButton));
    	}

    	button.count().then(function(count) {
    		if (count > 0) {
    			button.get(0).click();
    		}
    	});
    }

    isButtonPresent(value) {
    	var button;

    	if (value === 'confirm') {
    		button = element.all(by.xpath(this.confirmButton));
    	} else if (value === 'cancel') {
    		button = element.all(by.xpath(this.cancelButton));
    	} else if (value === 'cashout') {
    		button = element.all(by.xpath(this.cashoutButton));
    	}

    	return button.count().then(function(count) {
    		if (count > 0) {
    			return button.get(0).isDisplayed();
    		} else {
    			return false;
    		}
    	});
    }

    isTypeAmountCorrect(value) {
    	value = value || 0;
    	var elems = element.all(by.xpath(this.typeAmounts));
    	var regex = this.typeRegexp;

    	return basic.compareToRegexp(elems, value, regex);
    }

    isEventCorrect(value) {
    	value = value || 0;
    	var elems = element.all(by.xpath(this.eventsNames));
    	var regex = this.eventRegexp;

    	return basic.compareToRegexp(elems, value, regex);
    }

    isMarketCorrect(value) {
    	value = value || 0;
    	var elems = element.all(by.xpath(this.marketsNames));
    	var regex = this.marketRegexp;

    	return basic.compareToRegexp(elems, value, regex);
    }

    isOutcomeCorrect(value) {
    	value = value || 0;
    	var elems = element.all(by.xpath(this.outcomesNames));
    	var regex = this.outcomeRegexp;

    	return basic.compareToRegexp(elems, value, regex);
    }

    //Waits until the cashout badge value is updated
    isBadgeUpdated(oldValue) {
        var badge = element(by.xpath(this.countBadge));
        var badgeValue;
        
        badge.getText().then(function(text) {
            badgeValue = text;
        });
        
        return browser.wait(function () {
            return badge.getText().then(function (text) {
                return (text !== oldValue);
            });
        }, 30000);
    }

    showsMessage() {
    	return element(by.xpath(this.cashoutMessage)).isDisplayed();
    }
    
}

module.exports = CashoutWidget;