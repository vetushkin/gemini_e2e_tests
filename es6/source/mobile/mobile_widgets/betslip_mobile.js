var BaseWidget = require('../../../lib/base/base_widget');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();
var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var basicMobile = new BaseMobilePage;

class BetslipMobileWidget extends BaseWidget {

	constructor() {
		super();

		this.mobileBetslip = ".//*[@id='betslip_link']/a";
		this.betslipNumber = ".//*[@id='betslip_link']/a/span";
		this.backButton = ".//*[@id='betslip_back']";
		//The second part of the XPath will find at least one element when the stakes are updated (the first part does not find any elements if the stakes change)
		this.betslipStakes = ".//*[contains(@class, 'betslip_selection_stake') and @data-input-type='selection'] | .//div[not(contains(@style, 'none'))]//*[@id='betslip_changed_selections'] //*[@class='betslip_market_period']";
		this.deleteAllButton = ".//*[@data-button='remove_selections']";
		this.deleteButton = ".//*[contains(@class,'betslip_selection_delete') and text()='X']";
		this.multibetStakes = ".//*[@data-input-type='multiple'][@data-multiple-id='1']";
		this.systembetStakes = ".//*[@data-input-type='multiple'][not(@data-multiple-id='1')]";
		this.betStakeFields = ".//*[@id='betslip_selections']//input[not(contains(@style,'none'))]";
		this.totalStakeField = ".//*[@data-betslip-total-stake]";
		this.totalPayoutField = ".//*[@data-betslip-total-payout]";
		this.submitButton = ".//*[@data-button='submit']";
		this.placeBetsButton = ".//*[@id='betslip_footer']/a[contains(@class,'bet_button')]";
		this.acceptButton = ".//*[@id='betslip'][not(contains(@style,'none'))]/*[@data-button='accept_changes']";
		this.successMessage = ".//*[@id='betslip']/div[@class='receipt_item']/*[@class='OK']";
		//Inside the betslip, the XPath finds all the NAMES that the user placed a bet on.
		//Example 'Manchester United vs Chelsea', placed a bet on Chelsea, 'Chelsea' will be found inside betslip
		//We can wait for those elements since they will appear only when the stakes have been updated!
		this.updatedBetNames = ".//div[not(contains(@style,'none'))]//*[@id='betslip_changed_selections']//*[@class='betslip_market_period']";
		this.spinnerLoading = ".//*[@id='spinner'] | .//*[@class='osg-messages-container' and not(contains(@style, 'none'))]";
	}

	clickBetslip() {	
		//Do not scroll to this element because it will not be clicked successfully!	
		element(by.xpath(this.mobileBetslip)).click();
	}

	//Returns the integer of the string result - in decimal
	getBetslipNumber() {
		this.clickConfirm();
		return element.all(by.xpath(this.betslipNumber)).getText().then(function(text) {
			return parseInt(text, 10);
		});
	}

	//Returns true only if the betslip widget is opened and the user can see the X - back button
	isBackbuttonPresent() {
		return element(by.xpath(this.backButton)).isPresent();
	}

	//Click delete all bets button if available.
	//Otherway do nothing
	deleteAllBets() {
		var deleteAllButton = element.all(by.xpath(this.deleteAllButton));
		var pressConfirm = this.clickConfirm();
		var loading = element(by.xpath(this.spinnerLoading));

		basicMobile.visit('mobile/sportsbook');
		this.clickBetslip();

		pressConfirm;
		deleteAllButton.count().then(function(count) {
			if (count > 0) {
				//basicMobile.removeElement("osg-betslip-messages");
				pressConfirm;
				deleteAllButton.first().click();
				basic.waitToDisappear(loading);
			}
		});
	}

	//Delete bets one by one
	//If used when there are no bets in the Betslip it will do nothing
	deleteBets(value) {
		value = value || 1;
		var deleteButton = element.all(by.xpath(this.deleteButton));
		var submitButton = element.all(by.xpath(this.acceptButton));
		var loading = element(by.xpath(this.spinnerLoading));
		var pressConfirm = this.clickConfirm();

		pressConfirm;

		for (var i = 0; i < value; i++) {
			deleteButton.count().then(function(count) {
				if (count > 0) {
					pressConfirm;
					basic.waitForNotStale(deleteButton.first());
					deleteButton.first().click();
					basic.waitToDisappear(loading);
				}
			});

			//basic.waitToDisappear(loading);
		}
		
	}

	clickConfirm() {
		var submitBtn = element(by.xpath(this.acceptButton));
		var loading = element(by.xpath(this.spinnerLoading));

		submitBtn.isPresent().then(function(present) {
			//basicMobile.removeElement("osg-betslip-messages");
			if (present) {
				//This should remove the 'invisible'/'fake' accept button element..
				//basicMobile.removeElement("osg-betslip-messages");
				//basic.waitToDisappear(loading);
				//basic.waitForNotStale(submitBtn);
				basic.scrollToElement(submitBtn);
				submitBtn.click();
				basic.waitToDisappear(loading);
        	}
        });

        //basic.waitToDisappear(loading);
	}

	//Returns int amount of bets in the Betslip
	betsAmount() {
		this.clickConfirm();
		return element.all(by.xpath(this.betslipStakes)).count();
			
	}

	//Returns int amount of multibets in the Betslip
	multibetsAmount() {
		this.clickConfirm();
		return element.all(by.xpath(this.multibetStakes)).count();
	}

	//Returns int amount of multibets in the Betslip
	systembetsAmount() {
		this.clickConfirm();
		return element.all(by.xpath(this.systembetStakes)).count();
	}

	//Wait until there'll be set amount of bets in the Betslip
	waitForBets(value) {
		var bets = element.all(by.xpath(this.betslipStakes));
		this.clickConfirm();
		basic.waitForCountToBe(bets, value);
	}

	//Wait until there'll be set amount of multibets in the Betslip
	waitForMultibets(value) {
		var bets = element.all(by.xpath(this.multibetStakes));
		this.clickConfirm();
		basic.waitForCountToBe(bets, value);
	}

	//Wait until there'll be set amount of system in the Betslip
	waitForSystembets(value) {
		var bets = element.all(by.xpath(this.systembetStakes));
		this.clickConfirm();
		basic.waitForCountToBe(bets, value);
	}

    waitForOddsChanges() {
    	basic.waitForElement(element(by.xpath(this.acceptButton)), 60000);
    }

    waitUpdatedBets() {
		var updated = element.all(by.xpath(this.updatedBetNames));
		basic.waitForCountToBeGreaterThan(updated, 0, 60000);		
	}

    betsUpdated() {
    	var button = element(by.xpath(this.acceptButton));
    	basic.waitForNotStale(button);
    	return button.isPresent();
    }

	placeStakes(value) {
		browser.sleep(500);
		var bets = element.all(by.xpath(this.betStakeFields));
		
		this.clickConfirm();
		basic.waitForCountToBeGreaterThan(bets, 0);

		bets.count().then(function(count) {
			for (var i = 0; i < count; i++) {
				basic.waitForNotStale(bets.get(i), 15000);
				bets.get(i).clear().sendKeys(value);
			}
		});
	}

	//Method for placing your bet - send bets
	placeBets() {
		var button = element(by.xpath(this.placeBetsButton));
		var spin = element.all(by.xpath(this.spinnerLoading));
		this.clickConfirm();

		button.isPresent().then(function(present) {
			if (present) {
				button.isDisplayed().then(function(isDisplayed) {
					if (isDisplayed) {
						button.click();
					}
				});
        	}
        });
        
        basic.waitForElementToDisappear(spin, 30000);
	}

	//Returns string of total Betlip stake
	totalStake() {
		this.clickConfirm();
		return element(by.xpath(this.totalStakeField)).getText();
	}

	isSuccessMessagePresent() {
		var resultMessage = element(by.xpath(this.successMessage));
		basic.waitForElement(resultMessage, 15000);
		return resultMessage.isPresent();
	}
}

module.exports = BetslipMobileWidget;