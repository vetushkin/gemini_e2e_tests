var BaseWidget = require('../../../lib/base/base_widget');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class virtualBetslipWidget extends BaseWidget {
	constructor()
	{
		super();
		//Delete all bets button
		this.deleteAllButton = ".//*[@id='betSlipInner']//*[@id='deleteSlipBin']";
		//Submit button
		this.submitButton = "//*[@id='proceedButton']";
		//Delete a single bet button
		this.deleteButton = ".//*[@id='betSlipInUse']//div[@class='betslip_x']";
		//Total payout field
		this.totalPayoutField = ".//*[@id='possibleReturnText']";
		//Total stake field
		this.totalOdds = ".//*[@id='totalOddsText']";
		//All bet coefficients (can be 1 or more)
		this.betOdds = ".//*[contains(@id, 'outcomeOdds_')]";
		//Betslip stake (the user types the value to bet in this field) - only one field is present at all times!!
		this.betStakeField = ".//*[@id='stakeText']";
	}

	//Delete a single bet, specified by the user
	deleteBets(value)
	{
		value = value || 1;
		var deleteButton = this.deleteButton;

		for(var i = 0 ; i < value ; i++)
		{
			element.all(by.xpath(deleteButton)).count().then(function(count){
				if(count>0)					
				{
					element.all(by.xpath(deleteButton)).first().click();
				}
			});
		}
	}

	//Delete all bets
	deleteAllBets()
	{
		element(by.xpath(this.deleteAllButton)).click();
	}

	//Returns the number of all bets in the betslip
	betsAmount()
	{
		return element.all(by.xpath(this.betOdds)).count();
	}

	//Wait until there are a set amount of bets in the Betslip
	waitForBets(value)
	{
		var bets = element.all(by.xpath(this.betOdds));
		basic.waitForCountToBe(bets, value);
	}

	//Place a bet
	placeStakes(value)
	{
		var bets = element.all(by.xpath(this.betStakeField));
		basic.waitForCountToBeGreaterThan(bets, 0);
		bets.each(function(elem){
			elem.clear().sendKeys(value);
		});
	}

	//Returns string of total Betslip stake
	totalStake() {
		return element(by.xpath(this.betStakeField)).getText();
	}
}
module.exports = virtualBetslipWidget;