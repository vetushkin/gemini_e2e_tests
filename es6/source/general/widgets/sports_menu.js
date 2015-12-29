var BaseMenu = require('../../../lib/base/base_menu');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class SportsMenu extends BaseMenu {

	constructor() {
		super();

		this.linkShortcut = "//*[@id='a-z']//a[@data-eventpath-id][@class='open']/following-sibling::ul//li/a";
		this.countryList = this.linkShortcut + "[not(@data-last-children)][not(@class='open')]";
		this.leagueList = this.linkShortcut + "[@class='open']/following-sibling::ul/li/a[not(@class='selected')]";
		this.countryLink =	this.linkShortcut + "[not(@data-last-children)]";
		this.leagueLink = this.linkShortcut + "[@class='open']/following-sibling::ul[not(contains(@style,'none'))]/li/a[@data-last-children]";

		this.sportsList = "//*[@id='a-z']//a[@data-eventpath-id]";
		this.barArrows = ".//*[@id='a-z']//a[contains(@class,'jspArrow')]";
		this.loadingGif = ".//*[@id='page_loading']";
		this.showMoreButton = ".//*[@id='a-z']//*[contains(@class,'expand')]";
		this.underOverButton = ".//*[@id='main']//*[@class='view_uo']";
		this.threeWayButton = ".//*[@id='main']//*[@class='view_3_way']";
		this.underOverBets = ".//a[@data-price-id]";
		this.threeWayBets = "//*[@class='coupon']//td[contains(@class,'outcome')][not(contains(@class,'more_markets'))]";
		this.loading = ".//*[@id='page_loading']";
	}


	//Get the number of three-way-bets
	getThreeBets() {
		basic.waitForCountToBeGreaterThan(element.all(by.xpath(this.threeWayBets)), 1, 7777);
		return element.all(by.xpath(this.threeWayBets)).count();
	}

	//Get the number of under/over bets
	getUnderOverBets() {
		basic.waitForCountToBeGreaterThan(element.all(by.xpath(this.underOverBets)), 1, 6666);
		return element.all(by.xpath(this.underOverBets)).count();
	}

	clickUnderOver() {
		element(by.xpath(this.underOverButton)).click();
		basic.waitForElementToDisappear(element.all(by.xpath(this.loading)), 9999);
	}

	clickThreeWay() {
		element(by.xpath(this.threeWayButton)).click();
		basic.waitForElementToDisappear(element.all(by.xpath(this.loading)), 8888);
	}

	//Select Sport by name or number starting from 0
	clickLink(value) {
		var loading = element.all(by.xpath(this.loadingGif));
		var elements = element.all(by.xpath(this.sportsList));

		this.showMore();
		
		if (typeof value === 'string') {
			element(by.xpath(this.sportsList + "[text()='" + value + "']"))
			.click();
			basic.waitUntilPageLoaded();
		} else {
			elements.count().then(function(count) {
				if (count > value) {
					elements.get(value).click();
					basic.waitUntilPageLoaded();
				} else {
					elements.last().click();
					basic.waitUntilPageLoaded();
				}
			});
		}

		basic.waitForElementToDisappear(loading, 30000);
	}

	//Click on the country from the opened list
	//Value starts from 0
	clickCountry(value) {
		var loading = element.all(by.xpath(this.loadingGif));
		var elements = element.all(by.xpath(this.countryLink));

		elements.get(value).isPresent().then(function(present) {
			if (present) {
				elements.get(value).click();
			}
		})

		basic.waitForElementToDisappear(loading, 30000);
	}

	clickLeague(value) {
		var loading = element.all(by.xpath(this.loadingGif));
		var elements = element.all(by.xpath(this.leagueLink));

		elements.get(value).isPresent().then(function(present) {
			if (present) {
				elements.get(value).click();
			}
		})

		basic.waitForElementToDisappear(loading, 30000);
	}

	//Select random Sport from the list
	clickRandomSport() {
		var sport = element.all(by.xpath(this.sportsList));
		var loading = element.all(by.xpath(this.loadingGif));

		basic.clickRandomItem(sport);

		basic.waitForElementToDisappear(loading, 30000);
	}

	//Select random country/tournament from the opened Sport
	//Can select more than one by providing value  
	clickRandomCountry(value) {
		value = value || 1;
		var loading = element.all(by.xpath(this.loadingGif));
		var country = element.all(by.xpath(this.countryList));

		for (var i = 0; i < value; i++) {
			basic.clickRandomItem(country);
			basic.waitForElementToDisappear(loading, 30000);
		}	
	}

	//Select random game from opened country/tournament
	//Can select more than one by providing value 
	clickRandomLeague(value) {
		value = value || 1;
		var loading = element.all(by.xpath(this.loadingGif));
		var league = element.all(by.xpath(this.leagueList));

		for (var i = 0; i < value; i++) {
			basic.clickRandomItem(league);
			basic.waitForElementToDisappear(loading, 30000);
		}	
	}

	showMore() {
		var button = element(by.xpath(this.showMoreButton));

		button.isPresent().then(function(isPresent) {
			if (isPresent) {
				button.isDisplayed().then(function(isDisplayed) {
					if (isDisplayed) {
						button.click();		
					}
				});
			}
		});
	}
}

module.exports = SportsMenu;