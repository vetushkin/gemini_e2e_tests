var BaseWidget = require('../../../lib/base/base_widget');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class ArticlesWidget extends BaseWidget {
    
    constructor() {
        super();

        this.promotionsLinks = ".//*[@id='articles']//a[@class='read_more_new']";
        this.promoButtons = "//*[@class='promo_one']//a[@href] | //*[@id='main']//a[contains(@href,'promo')]";
        this.articleTimeSelector = ".//*[@class='article_text_container']//time";
        this.timeZoneMenu = ".//*[@class='opener']";
        this.timeZones = ".//*[@class='timezone_select']/ul/li";
    }

    selectArticle(value) {
    	var articleElement = element(by.xpath("//div[contains(@id,'article" + (value + 1) + "')]"));
    	//This will timeout for some of the specs!
        basic.waitForElement(articleElement, 60000);
    	articleElement.click();
        basic.waitUntilPageLoaded();
    }

    selectPromotion(value) {
    	element.all(by.xpath(this.promoButtons)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    openPromotions() {
    	var moreButton = element.all(by.xpath(this.promotionsLinks)).first();
    	basic.waitForElement(moreButton, 60000);
    	moreButton.click();
        basic.waitUntilPageLoaded();
    }

    articleTime(value) {
        return element.all(by.xpath(this.articleTimeSelector)).get(value).getText();
    }

    selectZone(value) {
        element(by.xpath(this.timeZoneMenu)).click();
        element.all(by.xpath(this.timeZones)).get(value).click();
    }
}

module.exports = ArticlesWidget;