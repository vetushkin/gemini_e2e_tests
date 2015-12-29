var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class RegistrationPage extends BasePage {

    constructor () {
        super();

        this.policyCheck = ".//*[@id='confirm_policy']";
        this.submitButton = "//*[self::button or self::input][@type='submit']";

        this.countryList = ".//*[@id='country']/option";
        this.currencyList = ".//*[@id='currency']/option";
        
        this.preRegDateLink = ".//*[@data-field='date']";
        this.preRegDayInput = "//*[@class='dtpicker-comp day']/input";
        this.preRegMonthInput = "//*[@class='dtpicker-comp month']/input";
        this.preRegYearInput = "//*[@class='dtpicker-comp year']/input";
        this.preRegSetButton = "//*[contains(@class,'buttonSet')]";

        this.focusElement = "//*[@class='well registration-form__block'][1]//*[contains(@class,'title')]";

        this.errorIcon = "//ancestor::*[contains(@class,'registration-field')][contains(@class,'error')]";
        this.checkIcon = "//following::*[contains(@class,'icon')][1]//*[@id='check-circle']";
        this.errorMessage = "//following::*[contains(@class,'field__message')][1]/*[contains(@class,'error')]";
        this.submitMessage = "//following::*[contains(@class,'col')][2]/*[contains(@class,'error')]";
        this.serverCheck = "//following::*[contains(@class,'field__message')][1]/*[contains(text(),'Validation')]";
    }

    //Keyboard DELETE button press
    pressDelete() {
        basic.keyboardPress(protractor.Key.DELETE);
    }

    //Enter text in the field
    enterFieldText(id, value) {
        //Click is required for IE11 to clear the field later
        element(by.xpath(".//*[@id='" + id + "' or @data-field='" + id + "']")).click();
        element(by.xpath(".//*[@id='" + id + "' or @data-field='" + id + "']")).clear().sendKeys(value);
    }

    selectCountry(value) {
        element.all(by.xpath(this.countryList)).get(value).click();
    }

    selectCurrency(value) {
        element.all(by.xpath(this.currencyList)).get(value).click();
    }

    //preRegistration page date select
    selectDate(day, month, year) {
        var link = element(by.xpath(this.preRegDateLink));
        var dayInput = element(by.xpath(this.preRegDayInput));
        var monthInput = element(by.xpath(this.preRegMonthInput));
        var yearInput = element(by.xpath(this.preRegYearInput));
        var setButton = element(by.xpath(this.preRegSetButton));

        link.click();
        dayInput.clear().sendKeys(day);
        monthInput.clear().sendKeys(month);
        yearInput.clear().sendKeys(year);
        setButton.click();
    }

    getFieldValue(value) {
        return element(by.xpath("//*[@id='" + value + "']")).getAttribute('value');
    }

    //Check the confirm policy
    confirmPolicy() {
        this.moveFocus();
        element(by.xpath(this.policyCheck)).click();
    }
    
    //Click the Submit button
    clickSubmit() { 
        this.moveFocus();
        element(by.xpath(this.submitButton)).click();
        basic.waitUntilPageLoaded();
    }

    showsErrorIcon(value) {
        this.moveFocus();
        return element(by.xpath(".//*[@id='" + value + "']" + this.errorIcon)).isPresent();
    }

    showsSuccessIcon(value) {
        this.moveFocus();
        return element(by.xpath(".//*[@id='" + value + "']" + this.checkIcon)).isPresent();
    }

    showsErrorMessage(value) {
        this.moveFocus();

        if (value === 'confirm_policy') {
            return element(by.xpath(".//*[@id='" + value + "']" + this.submitMessage)).isPresent();       
        } else {
            return element(by.xpath(".//*[@id='" + value + "']" + this.errorMessage)).isPresent();       
        }
        
    }

    serverValidation(value) {
        if (value === 'username') { this.moveFocus(); } 
        return element(by.xpath(".//*[@id='" + value + "']" + this.serverCheck)).isPresent();   
    }

    //Moving focus
    moveFocus() {
        var focus = element(by.xpath(this.focusElement));
        focus.isPresent().then(function(present) {
            if (present) {
                focus.click();
            }
        });
    }

}

module.exports = RegistrationPage;
