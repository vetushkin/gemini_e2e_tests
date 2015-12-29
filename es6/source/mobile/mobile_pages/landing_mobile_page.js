var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class LandingMobilePage extends BaseMobilePage {
	
	constructor () {
		super();
	}

    clickLink(value) {
        //We need to scroll to this element because it might not always be visible
        basic.scrollToElement(element(by.xpath("//*[@href='/mobile/" + value + "' or contains(@onclick,'" + value + "')]")));
        element(by.xpath("//*[@href='/mobile/" + value + "' or contains(@onclick,'" + value + "')]")).click();
        basic.waitUntilPageLoaded();

    }

    clickFooterLink(value) {
    	element(by.xpath(".//*[@id='main_footer']//div[@id='" + value + "']")).click();
        basic.waitUntilPageLoaded();
    }

    clickPopup(value) {
    	element(by.xpath(".//*[@id='popup_container']//a[@class='" + value + "' or @id='" + value + "']")).click();
        basic.waitUntilPageLoaded();
    } 
}

module.exports = LandingMobilePage;
