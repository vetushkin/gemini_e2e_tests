var BaseWidget = require('../../../lib/base/base_widget');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class NewsWidget extends BaseWidget {
    
    constructor() {
        super();

        this.newsLinks = ".//*[@id='news_articles_wrapper']//*[contains(@class,'title')]/a";
        this.allNewsLink = ".//*[@id='main']//article/following-sibling::footer/a";
    }

    selectArticle(value) {
        element.all(by.xpath(this.newsLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    showAll() {
        element(by.xpath(this.allNewsLink)).click();
        basic.waitUntilPageLoaded();
    }
}

module.exports = NewsWidget;