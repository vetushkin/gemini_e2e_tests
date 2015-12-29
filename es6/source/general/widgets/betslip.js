var BaseWidget = require('../../../lib/base/base_widget');
var BasePage = require('../../../lib/base/base_page');
var basePage = new BasePage();

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class BetslipWidget extends BaseWidget {

	constructor() {
		super();

		this.betslipStakes = ".//*[@id='betslip']//*[@class='betslip_row']/section";
		this.deleteAllButton = ".//*[@id='betslip_container']//a[@id='remove_selections']";
		this.deleteButton = ".//*[@id='betslip_container']//a[@data-method='delete']";
		this.multibetStakes = ".//*[@id='betslip_multiples']//div[@data-betslip-multiple-id='Kombine' or contains(@data-betslip-multiple-id,'Multi') or contains(@data-betslip-multiple-id,'Múltiple') or contains(@data-betslip-multiple-id,'múltipla')]";
		this.systembetStakes = ".//*[@id='betslip_multiples']//div[contains(@data-betslip-multiple-id,'stem') or contains(@data-betslip-multiple-id,'combinada')]";
		this.betStakeFields = ".//*[@id='betslip']//*[@class='stake col']//input[contains(@id,'bet')]";
		this.betReturnFields = ".//*[@id='betslip']//*[@class='returns col']//input[contains(@id,'bet')]";
		this.betSystemFields = ".//*[@id='betslip']//*[@class='stake'][(child::label[contains(@for, '2') or contains(@for, 'combinada')])]//input";
		this.betMultiFields = ".//*[@id='betslip']//*[@class='stake'][(child::label[contains(@for, 'Multi') or contains (@for, 'bet[Múltiple]') or contains(@for, 'Kombine') or contains(@for, 'múltipla')])]//input";
		this.totalStakeField = ".//*[@id='total_stake']";
		this.totalPayoutField = ".//*[@id='total_possible_payout']";
		this.submitButton = ".//*[@id='betslip_message']/button[@type='submit']";
		//Button to send your bets - i.e. placing them successfully
		this.placeBetsButton = ".//*[@id='betslip_submit']/button[@type='submit']";
		//Error message displayed to users when the input is erroneous - negative numbers, strings, etc.
		this.errorMessage = "//*[@id='betslip_messages']/li";
		this.successMessage = ".//*[@id='betslip_receipts']";
		//this.errorMessage = ".//li[contains(text(), 'stake') or contains(text(), 'apuesta') or contains(text(), 'Bahis') or contains(text(), 'aposta')  or contains(text(), 'disponibilidade') or contains(text(), 'Minimum bahis') or contains(text(), 'tutar giriniz') or contains(text(), 'valor')]";
		this.coloredSelections = ".//*[@id='betslip']//*[contains(@id,'selection_')][contains(@style,'color')]";
        this.buttonSpinner = ".//*[@class='spinner'][not (contains(@style, 'none'))]";
	}

	//Click delete all bets button if available.
	//Otherway do nothing
	deleteAllBets() {
		this.clickConfirm();

		var deleteAllButton = this.deleteAllButton;

		basic.removeElement('betslip_fade');

		element.all(by.xpath(deleteAllButton)).count().then(function(count) {
			if (count > 0) {
				element(by.xpath(deleteAllButton)).click();
			}
		});
	}

	//Method that returns true or false if the error message when trying to put an erroenous input as a bet value
	errorMessagePresent() {
		var result = element(by.xpath(this.errorMessage)).isPresent();
		this.clickConfirm();
		return result;
	}

	successMessagePresent() {
		var resultMessage = element(by.xpath(this.successMessage));
		basic.waitForElement(resultMessage, 15000);
		return resultMessage.isPresent();
	}	

	//Method for placing your bet - send bets
	placeBets() {
		var button = element(by.xpath(this.placeBetsButton));
		var spin = element.all(by.xpath(this.buttonSpinner));
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

	//Delete bets one by one
	//If used when there are no bets in the Betslip it will do nothing
	deleteBets(value) {
		value = value || 1;
		var deleteButton = this.deleteButton;
		var submitBtn = this.submitButton;
		var redSelections = element.all(by.xpath(this.coloredSelections));
		basic.waitForElementToDisappear(redSelections, 10000);

		for (var i = 0; i < value; i++) {
			element.all(by.xpath(deleteButton)).count().then(function(count) {
				if (count > 0) {
					browser.sleep(500);
					element.all(by.xpath(submitBtn)).count().then(function(count) {
						if (count > 0) {
							element(by.xpath(submitBtn)).click();
						}
					});
					browser.sleep(200);
					element.all(by.xpath(deleteButton)).count().then(function(count) {
						if (count > 0) {
							element.all(by.xpath(deleteButton)).first().click();
						}	
					})
				}
			});
		}
		
	}

	forceDeleteBets(backPage) {
		backPage = backPage || 'sportsbook';
		basePage.visit('/web/remove_from_slip?remove_all=*');
		basePage.visit(backPage);
	}

	clickConfirm() {
		var submitBtn = element(by.xpath(this.submitButton));

		submitBtn.isPresent().then(function(present) {
			if (present) {
				submitBtn.isDisplayed().then(function(isDisplayed) {
					if (isDisplayed) {
						submitBtn.click();
					}
				});
        	}
        });
	}

	//Returns int amount of bets in the Betslip
	betsAmount() {
		var redSelections = element.all(by.xpath(this.coloredSelections));
		basic.waitForElementToDisappear(redSelections, 10000);
		this.clickConfirm();
		return element.all(by.xpath(this.betslipStakes)).count()
			.then(function(count) {
				return count;
			});
	}

	//Returns int amount of multibets in the Betslip
	multibetsAmount() {
		var redSelections = element.all(by.xpath(this.coloredSelections));
		basic.waitForElementToDisappear(redSelections, 10000);
		this.clickConfirm();
		return element.all(by.xpath(this.multibetStakes)).count()
			.then(function(count) {
				return count;
			});
	}

	//Returns int amount of multibets in the Betslip
	systembetsAmount() {
		var redSelections = element.all(by.xpath(this.coloredSelections));
		basic.waitForElementToDisappear(redSelections, 10000);
		this.clickConfirm();
		return element.all(by.xpath(this.systembetStakes)).count()
			.then(function(count) {
				return count;
			});
	}

	//Wait until there'll be set amount of bets in the Betslip
	waitForBets(value) {
		var bets = element.all(by.xpath(this.betslipStakes));
		basic.waitForCountToBe(bets, value);
	}

	//Wait until there'll be set amount of multibets in the Betslip
	waitForMultibets(value) {
		var bets = element.all(by.xpath(this.multibetStakes));
		basic.waitForCountToBe(bets, value);
	}

	//Wait until there'll be set amount of system in the Betslip
	waitForSystembets(value) {
		var bets = element.all(by.xpath(this.systembetStakes));
		basic.waitForCountToBe(bets, value);
	}

    waitForOddsChanges() {
        basic.waitForElement(element(by.xpath(this.submitButton)), 100000);
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

	placeSystemStakes(value) {
		browser.sleep(500);
		var conf = this.clickConfirm();
		var bets = element.all(by.xpath(this.betSystemFields));
		var pageLoading = element.all(by.xpath(".//*[@id='page_loading']"));

		basic.waitForElementToDisappear(pageLoading, 15000);
		this.clickConfirm();
		basic.waitForCountToBeGreaterThan(bets, 0);

		bets.count().then(function(count) {
			for (var i = 0; i < count; i++) {
				basic.waitForNotStale(bets.get(i), 15000);
				bets.get(i).clear().sendKeys(value);
			}
		});
	}

	placeMultiStakes(value) {
		browser.sleep(500);
		var conf = this.clickConfirm();
		var bets = element.all(by.xpath(this.betMultiFields));
		var pageLoading = element.all(by.xpath(".//*[@id='page_loading']"));

		basic.waitForElementToDisappear(pageLoading, 15000);

		this.clickConfirm();

		basic.waitForCountToBeGreaterThan(bets, 0);

		bets.each(function(elem) {
			conf;
			basic.waitForNotStale(elem, 15000);
			elem.sendKeys(value);
		});
	}

	//Returns string of total Betlip stake
	totalStake() {
		var redSelections = element.all(by.xpath(this.coloredSelections));
		this.clickConfirm();
		basic.waitForElementToDisappear(redSelections, 10000);
		return element(by.xpath(this.totalStakeField)).getText();
	}

	//Returns true if total possible payout equals to the sum of possible payouts
	totalCalculated() {

		var redSelections = element.all(by.xpath(this.coloredSelections));
		var possiblePayouts = 0;
		var totalPayout = 0;

		this.clickConfirm();
		basic.waitForElementToDisappear(redSelections, 10000);

		element.all(by.xpath(this.betReturnFields)).each(function(elem) {
			elem.getAttribute('value').then(function(text) {
				possiblePayouts += parseFloat(text);
			});
		});

		element(by.xpath(this.totalPayoutField)).getText()
			.then(function(text) {totalPayout = parseFloat(text);});

		return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    return Number(possiblePayouts.toFixed(2)) === totalPayout;
        });
	}
}

module.exports = BetslipWidget;