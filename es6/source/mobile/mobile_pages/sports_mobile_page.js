var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var basicMobile = new BaseMobilePage;
var Betslip = require('../mobile_widgets/betslip_mobile.js');
var betslip = new Betslip();
var Cashout = require('../mobile_widgets/cashout_mobile_widget.js');
var cashout = new Cashout();
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class SportsMobilePage extends BaseMobilePage {

	constructor() {
		super();

		this.registerButton = ".//*[contains(@class,'register')] | .//*[contains(@id, 'HeaderRegister')]";
		this.verticalSports = ".//*[@id='sportsmenu']//*[contains(@class,'active') or contains(@id,'sport')]//*[@class='menu-item']";
		this.sportsRegion = ".//*[contains(@id, 'SportsRegions_')]";
		//Title of a bet event
		this.titles = ".//*[contains(@id, 'InLive_Match_Title')]//div[1]";
		//This spinner/loading element needs to be waited (if present) whenever you delete/add bets
		this.progressBar = ".//*[@id='spinner'] | .//*[@class='osg-messages-container' and not(contains(@style, 'none'))]";
		this.couponOfDay = ".//*[@id='LiveSportHeaderCategory2']";
		this.homeTeam = ".//*[@id='LiveEventResults']//*[1]";
		this.upcomingMatches = ".//*[@class='Schedule_Match_Text']";
		this.upcomingTitle = ".//*[@id='ExpandedDetailHeader']";
		this.dateTimesSelector = ".//*[@id='Livebet_Match_Title_*X*'][2]/preceding-sibling::*[contains(@id, 'Livebet_Match_Title_Detail')]/*[@id]";
		this.popularGames = ".//*[@id= 'NextSportHeaderCategories']/*[@id]";
		//All left bets (which are not suspended)
		this.activeBets = "//a[not(contains(@class,'selected'))]//*[not(contains(@class,'isSuspended'))]/*[contains(@id, 'Left_Name')]";
		this.popularBets = ".//*[@id='upcoming']//a[not(contains(@class,'selected'))]//*[contains(@id, 'Left_Name')]";
		this.leagueBets = ".//*[contains(@class,'gradientLightGray')]/*[contains(@id, 'Left_Name')]";
		this.selectedBets = "//a[contains(@class,'selected')]//*[not(contains(@class,'isSuspended'))]/*[contains(@id, 'Left_Name')]";
		//Xpath for the message 'Selections removed'
		this.betRemovedMessage = ".//*[contains(@style,'none')]//*[@id='osg-selections-messages'][text()='Seçenek Kaldırıldı' or text()='Eliminar' or text()='Removed Selection' or text()='Removido']";
	}

	betslip() { return betslip; }
	cashout() { return cashout; }

	selectPopularSport(value) {
		var spin = element.all(by.xpath(this.progressBar));
		var elems = element.all(by.xpath(this.popularGames));

		basic.triggerElement("main_footer", "hide");
		basic.waitForNotStale(elems.get(value));
		basic.scrollToElement(elems.get(value));
		elems.get(value).click();
		basic.triggerElement("main_footer", "show");
	}

	removeBets(value) {
		//Using value more than 1 can cause stale element errors
		value = value || 1;
		var bets = element.all(by.xpath(this.selectedBets));

		bets.count().then(function(count) {
			if(count > 0) {
				for (let i = 0; i < value; i++) {
					//Remove the live bet by clicking on it
					bets.get(0).isPresent().then(function(isPresent) {
						if (isPresent) {
							basic.scrollToElement(bets.get(0));
							bets.get(0).click();
							browser.sleep(2000);
						}
					});
				}
			}
		});
	}

	isBetsRemoved() {
		var message = element.all(by.xpath(this.betRemovedMessage));
		var result;

		//This is the message which is displayed when a bet is removed.
		//The current XPath finds the message AFTER it has been shown and then disappeared(still in the DOM though)
		message.count().then(function(count) {
			result = ((count === 0) ? false : true);
		});

		return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                	return result;
                	});
	}

	//Add a bet or a number of bets specified by the value
	addBets(value, betType) {
		value = value || 1;

		if (betType === "popular") {
			bets = this.popularBets;
		} else if (betType === "league") {
			bets = this.leagueBets;
		} else {
			bets = this.activeBets;
		}

		var loading = element(by.xpath(this.progressBar));
		var elems = element.all(by.xpath(bets));
		var bets;

		//basic.waitToDisappear(loading);
		basic.triggerElement("main_footer", "hide");

		for(var i = 0 ; i < value ; i++) {
			basic.waitForNotStale(elems.get(i));
			basic.scrollToElement(elems.get(i));
			basic.waitForNotStale(elems.get(i));
			elems.get(i).click();
			basic.waitToDisappear(loading);
		}

		basic.triggerElement("main_footer", "show");
	}

	forceDeleteBets(context, backPage) {
		basicMobile.visit('mobile/full');
		basicMobile.visit(context + '/web/remove_from_slip?remove_all=*');
		basicMobile.visit(backPage);
	}

    stakesUpdated(waitTime) {
    	waitTime = waitTime || 110000;
        var result;
        var bets = element.all(by.xpath(this.activeBets));

        bets.getText().then(function(text) {
 			result = text.toString();
 		});
 
        return browser.wait(function () {
			return bets.getText().then(function(text) {
				browser.driver.navigate().refresh();
				return (result !== text.toString());
			});
	    }, waitTime);
    }

    stakesAmount() {
    	var result;
        var bets = element.all(by.xpath(this.activeBets));

 		bets.getText().then(function(text) {
 			result = text.toString().split(/[\/\,\t\n]/);
 		});

 		return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                	return result;
        });
    }

	//Function to addZero before the hours/minutes
	addZero(i)
	{
    	if (i < 10) {
      	  i = "0" + i;
    	}
    	return i;
	}

	notStartedEvent(value) {
		value = value || 0;
		var loading = element.all(by.xpath(this.progressBar));
		var d = new Date();
		var today;
		var finalResult;
		var upcoming = element.all(by.xpath(this.dateTimesSelector));
		//Get today's time in format hours:minutes (i.e. 10:30)
		today = this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes());
		basic.waitForElementToDisappear(loading, 30000);

		upcoming.count().then(function(count) {
			//If the value is greater than the number of upcoming matches use the first available match instead
			if(value >= count) {
				value = 0;
			}

			upcoming.get(value).getText().then(function(text) {
				//Store and split the hours and minutes in an array i.e. result[0] = 14; result[1] = 35
				var result = text.split(/[\/\:\t\n]/);
				//Split today's time in an array so 10:30 --> 10,30  similiar to what we are doing with upcoming match's time.
				var todaySplit = today.split(/[\/\:\t\n]/);
				//Subtract today's time from upcoming matches time and get a number i.e. (upcoming) 1400 - (current time) 1330 = 30. If the number is positive, the test will pass.
				finalResult = (result[0] + result[1]) - (todaySplit[0] + todaySplit[1]);
			});

		});

		return protractor.promise.controlFlow()
            .execute(function() {return protractor.promise.fulfilled()},'wait for control flow')
                .then(function() {
	                //Final result is true/false (it should be a positive number if the test is successful)
	 				return (finalResult > 0);
        });
	}

	openUpcomingGames(value) {
		value = value || 1;
		var upcoming = element.all(by.xpath(this.upcomingMatches)).get(value);
		var calendar = element(by.xpath(this.couponOfDay));
		var loading = element.all(by.xpath(this.progressBar));

		basic.waitForElementToDisappear(loading, 30000);
		//basicMobile.removeElement("main_footer");
		calendar.click();
		basic.waitForElementToDisappear(loading, 30000);
		//Determine the number of upcoming matches
		upcoming.isPresent().then(function(present) {
			if (present) {
				basic.scrollToElement(upcoming);
				basic.waitForNotStale(upcoming);
				browser.sleep(200);
				upcoming.click();
			}
		});

		basic.waitForElementToDisappear(loading, 30000);
	}

	isGamePresent()	{
		return element(by.xpath(this.upcomingTitle)).isPresent();
	}
	

	openLiveEvent(value) {
		value = value || 1;
		var eventsTitles = element.all(by.xpath(this.titles));
		var loading = element.all(by.xpath(this.progressBar));

		basicMobile.removeElement("betslip_link");
		basic.waitForElementToDisappear(loading, 30000);
		basicMobile.removeElement("main_footer");
		//basic.waitForNotStale(eventsTitles.get(value));
		this.clickIfExists(eventsTitles, value);
		basic.waitForElementToDisappear(loading, 30000);
	}

	//Return true or false if there is an event title present
	isTeamPresent()	{
		return element(by.xpath(this.homeTeam)).isPresent();
	}

	openCoupon(value) {
		value = value || 1;
		var sports = element.all(by.xpath(this.verticalSports));
		var coupon = element(by.xpath(this.couponOfDay));
		var loading = element.all(by.xpath(this.progressBar));

		basicMobile.removeElement("betslip_link");
		//basic.waitForNotStale(sports.get(value));
		this.clickIfExists(sports, value);
		basic.waitForElementToDisappear(loading, 30000);
		basic.waitForNotStale(coupon);
		coupon.click();
		basic.waitForElementToDisappear(loading, 30000);
	}
	
	//Return true or false if there is an event title present
	isCouponPresent() {
		return element.all(by.xpath(this.titles)).get(0).isPresent();
	}

	openLeague(value) {
		value = value || 1;
		basic.waitUntilPageLoaded(30000);
		var sports = element.all(by.xpath(this.verticalSports));
		var sportsRegions = element.all(by.xpath(this.sportsRegion));
		var loading = element.all(by.xpath(this.progressBar));

		basicMobile.removeElement("betslip_link");

		this.clickIfExists(sports, value);
		basic.waitForElementToDisappear(loading, 30000);
		sportsRegions.get(0).click();
		basic.waitForElementToDisappear(loading, 30000);
		//Click the first available league
		sportsRegions.get(0).click();
		basic.waitForElementToDisappear(loading, 30000);
	}

	openVerticalSport(value) {
		value = value || 1;
		basic.waitUntilPageLoaded(30000);
		var sports = element.all(by.xpath(this.verticalSports));
		var loading = element(by.xpath(this.progressBar));

		//basic.waitToDisappear(loading);

		this.clickIfExists(sports, value);
	}

	isEventPresent() {
		//Return true or false if there is an event title present
		return element.all(by.xpath(this.titles)).get(0).isPresent();
	}	

	//Click on a sport
	clickSport(value) {
		value = value || 1;
		var sports = element.all(by.xpath(this.verticalSports));
		var loading = element.all(by.xpath(this.progressBar));

		basicMobile.removeElement("betslip_link");
		this.clickIfExists(sports, value);
		basic.waitForElementToDisappear(loading, 30000);
	}

	isLeaguePresent() {	
		return element.all(by.xpath(this.sportsRegion)).get(0).isPresent();
	}

	//Returns true/false if register button is present
	getRegisterButton() {
		return element(by.xpath(this.registerButton)).isPresent();
	}

	//Method for clicking on the register button
	clickRegister() {
		var regButton = element(by.xpath(this.registerButton));
	
		regButton.isPresent().then(function(present) {
			if(present) {
				regButton.click();
			} else {
				return false;
			}
		});
	}

	//Private method
	//Clicks the last element if value is greater than amount of element
	clickIfExists(elems, value) {
		elems.count().then(function(count) {
			if (value >= count) {
				basic.scrollToElement(elems.last());
				elems.last().click();	
			} else {
				basic.scrollToElement(elems.get(value));
				elems.get(value).click();	
			}
		});
	}
}

module.exports = SportsMobilePage;