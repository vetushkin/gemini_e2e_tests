var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class SocialWidget extends BaseWidget {

    constructor() {
		super();

        //this.topLink = "//*[@id='top' or @id='topBarRight']";
		this.emailLink = "//*[@class='email']/a";
        this.emailRegEx = /(mailto)\:[a-z]+\@[a-z]+\.[a-z]+/i;
	}

    //Click on the social link by providing an element class name
    clickLink(value) {
        if(value === 'contact')
        {
            element.all(by.xpath("//*[contains(@href,'" + value + "')]")).get(1).click();
        } else {
            element.all(by.xpath("//*[contains(@href,'" + value + "')]")).get(0).click();   
        }
       
        basic.waitUntilPageLoaded();
    }

    //Returns href tag text of the email link
    isEmailCorrect() {
        var regExp = this.emailRegEx;
    	return element(by.xpath(this.emailLink)).getAttribute("href")
        .then(function(attr) {
            return regExp.test(attr) ? true : false;
        });
    }
}

module.exports = SocialWidget;
