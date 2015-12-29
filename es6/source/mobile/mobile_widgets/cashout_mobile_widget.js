var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();
var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var basicMobile = new BaseMobilePage;

class CashoutMobileWidget extends BaseWidget {

	constructor() {
		super();
		this.showMoreButton = ".//*[@id='osg-my-bets-pending-more-button']";
		this.cashout = ".//*[@id='MyBetsButton']";
		this.backButton = ".//*[@id='betslip_back']";
		this.cashoutCount = ".//*[@id='mybets-counter']";
		this.bets = ".//*[@class='osg-my-bets-pending-item']";
		this.cashoutButton = ".//*[contains(@class, 'osg-cash-out')][not(contains(@class, 'hidden'))]";
		this.confirmButton = ".//*[@id='osg-my-bets-pending-cashout-confirmation'][not(contains(@class,'hidden'))]//button[contains(@id,'yes')]";
		this.cancelButton = ".//*[@id='osg-my-bets-pending-cashout-confirmation'][not(contains(@class,'hidden'))]//button[contains(@id,'no')]";
        this.pendingCashoutMessage = "//*[@id='osg-my-bets-pending-cashout-message'][not(contains(@class,'hidden'))]"
		this.typeAmounts = ".//*[contains(@id,'amount-currency-type')]";
		this.eventsNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-event')]";
		this.marketsNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-market')]";
		this.outcomesNames = ".//*[contains(@class,'item')][1]/*[contains(@id,'item-outcome')]";
		this.spinner = ".//*[@id='spinner']";

		this.typeRegexp = /^\w+\s\d{1,}[\.\,]\d{2}\s[A-Z]{3}/;
        this.eventRegexp = /[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\w\s\-\/\,\.]+/;
        this.marketRegexp = /^[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\s\/\w\d\(\)\,\.\?\-]+\-[x00-\xFF\u00BF-\u1FFF\u2C00-\uD7FF\s\/\w\d\.]+$/;
        this.outcomeRegexp = /^[x00-\xFF\s\(\)\,\.\+\-\d]+\@\s\d{1,}[\.\,]\d{2,}/;
	}

	openCashout() {
		var spin = element.all(by.xpath(this.spinner));
		var cashoutContainer = element.all(by.xpath(this.cashout));
		//Wait for the loading (spinner wheel)
		basic.waitForElementToDisappear(spin);
		
		cashoutContainer.first().click();
	}

	cashoutBetsAmount()	{
		//Return the integer of the string result - in decimal
		return element(by.xpath(this.cashoutCount)).getText().then(function(text)
		{
			return parseInt(text, 10);
		});
	}

	betsAmount() {
		return element.all(by.xpath(this.bets)).count();
	}

    badgeAmount() {
        return element(by.xpath(this.cashoutCount)).getText();
    }

	isCashoutPresent() {
		//Return true if the link is present, otherwise false
		return element(by.xpath(this.cashout)).isPresent();
	}

	showMore() {
		var showMoreButton = element.all(by.xpath(this.showMoreButton));
		//Click the showMore button only if present
		showMoreButton.count().then(function(count)	{
			if(count > 0) {
				basic.scrollToElement(showMoreButton);
				//Remove the footer tab with the elements, so they do not receive the click instead.
				basicMobile.removeElement("main_footer"); 
				showMoreButton.first().click();
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

    isButtonPresent(value, i) {
    	var button;

    	if (value === 'confirm') {
    		button = element.all(by.xpath(this.confirmButton));
    	} else if (value === 'cancel') {
    		button = element.all(by.xpath(this.cancelButton));
    	} else if (value === 'cashout') {
    		button = element.all(by.xpath(this.cashoutButton));
    	} else if (value === 'showmore') {
    		button = element.all(by.xpath(this.showMoreButton));
    	}

    	return button.count().then(function(count) {
    	
    		if (i >= count && count > 0) {
    			return button.last().isDisplayed();
    		}

    		if (i < count && count > 0) {
    			return button.get(i).isDisplayed();
    		} else if (count === 0) {
    			return false;
    		}
    	});
    }

    //Waits until the cashout badge value is updated
    //browser.sleep(3000) is required due to the cashout badge update logic
    isBadgeUpdated(oldValue) {
        var badge = element(by.xpath(this.cashoutCount));
        browser.sleep(3000);

        return browser.wait(function () {
            return badge.getText().then(function (text) {
                return (text !== oldValue);
            });
        }, 30000);
    }

    clickButton(value, i) {
    	var button;
        var pendingMessage = element.all(by.xpath(this.pendingCashoutMessage));

    	if (value === 'confirm') {
    		button = element.all(by.xpath(this.confirmButton));
    	} else if (value === 'cancel') {
    		button = element.all(by.xpath(this.cancelButton));
    	} else if (value === 'cashout') {
    		button = element.all(by.xpath(this.cashoutButton));
    	}

    	button.count().then(function(count) {
    		if(i >= count && count > 0) {
    			button.last().click();
    		}
    		if (i < count && count > 0) {
    			button.get(i).click();
    		}
    	});

        basic.waitForElementToDisappear(pendingMessage, 30000);
    }

}

module.exports = CashoutMobileWidget;