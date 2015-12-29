var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class favoriteEventsWidget extends BaseWidget {
    
    constructor() {
	    super();

        //Elements inside the Favorite events tab on the left side of the site
        this.bannerEvents = ".//*[@class='banners']/*[a]"; 
    }

    getCount() {
        return element.all(by.xpath(this.bannerEvents)).count();
    }
   
    clickEvent(value) {
        value = value || 1;
        var events = element.all(by.xpath(this.bannerEvents));

        element.all(by.xpath(this.bannerEvents)).count().then(function(count) {
            if(value < count) {
                events.get(value).click();
            } else {
                events.last().click(); 
            }
        });
        
        basic.waitUntilPageLoaded(10000);
    }
}
module.exports = favoriteEventsWidget;