var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class i18nWidget extends BaseWidget {
    
    constructor() {
        super();

        this.languageSelector = ".//*[@id='regional_options']//*[@class='language_select']";
        this.pageLanguage = ".//*[@id='regional_options']//a[contains(@class,'opener')]//*[@class='language_name']";
        this.timezoneSelector = ".//*[@id='timezone_form']//*[@class='timezone_select']";
        this.timeSelector = ".//*[@id='timezone_form']//a[@class='opener']";
    }

    selectLanguage(className) {
        element(by.xpath(this.languageSelector)).click();
        element(by.xpath(this.languageSelector + "//a[@class='" + className + "']")).click();
        basic.waitUntilPageLoaded();
    }

    isLanguage(value) {
    	return element(by.xpath(this.pageLanguage)).getText().then(function(text){
    		return (text === value);
    	});
    }

    selectTimezone(value) {
        element(by.xpath(this.timezoneSelector)).click();
        element(by.xpath(this.timezoneSelector + "//a[@data-offset='" + value + "']")).click();
        basic.waitUntilPageLoaded();
    }

    isTimezone(value) {
        return element(by.xpath(this.timeSelector)).getText().then(function(text) {
            return (text.indexOf(value) > -1);
        });
    }
}

module.exports = i18nWidget;
