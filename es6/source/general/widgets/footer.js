var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class Footer extends Menu {

	constructor() {
		super();
	}

	linksArray(section){
        return element.all(by.xpath("//*[@id='page_footer']//*[contains(@class,'" + section + "') or contains(@id,'" + section + "')]//a[@href]"));
    }

    //'section' is a mandatory value. You can provide a partial class name of the module
    //If 'value' parameter will be string then the link will be searched by containing text
    //If 'value' parameter will be int then the method will click on the specified link starting from 0.
	clickLink(section, value){
        var elems = this.linksArray(section);

        if (typeof value === "string") {
            elems.filter(function(elem, index) {
                return elem.getText().then(function(text) {
                    return text === value;
                });
            }).then(function(filteredElements) {
                filteredElements[0].click();
            });
        } else if (typeof value === "number") {
            elems.count().then(function (count) {
                if (value >= count) {
                    elems.last().click();
                } else {
                    elems.get(value).click();        
                }
            });
        } else {
            throw "\nWrong input.\nUse only int or string values as second parameter.";
        }

        basic.waitUntilPageLoaded();
    }
}

module.exports = Footer;