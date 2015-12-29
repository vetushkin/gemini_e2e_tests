var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class HighlightsWidget extends BaseWidget {
    
    constructor() {
        super();

        this.activeBets = ".//*[@id='football_highlights_container']//a";
    }

    placeBets(value) {
        value = value || 1;
        var elements = element.all(by.xpath(this.activeBets));

        basic.triggerElement('betslip', 'hide');

        for (var i = 0; i < value; i++) {
            browser.sleep(400);
            elements.get(i).click();
        }

        basic.triggerElement('betslip', 'show');
    }
}

module.exports = HighlightsWidget;