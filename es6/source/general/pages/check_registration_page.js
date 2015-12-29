var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class CheckRegistrationPage extends BasePage {

    constructor () {
        super();
        //Xpath used to find an input field (from all input fields), specified by the input data from sendInput method
        this.inputField = ".//*[@id='register_details' or @id='register_preferences' or @id='main']//*[@id='user_";
        //Xpath used to find the dropdown menu for the calendar - needs to be clicked before the dropdown elements are displayed
        this.calendarSelector = ".//*[@class='select_menu'][@data-select-id='user_";
        //XPath for the register button
        this.registerButton = ".//*[contains(@href, 'register')]";
        //XPath for the captcha field
        this.captchaField = ".//*[@id='captcha']";
        //Xpath for all the elements of the expanded menu - when used for months i.e. it will find 12 elements (January, February... etc.)
        this.menuElements = ".//*[@class='menu_select'][contains(@style, 'block')]/*[not(contains(@data-option-value, '-'))] | .//*[@id='user_";
        //XPath for the --------------------- element (not a valid input) inside the country menu
        this.invalidElement = ".//*[contains(@id,'user_country') and not(contains(@style, 'none'))]//*[(contains(text(), '--'))] | .//*[@class='menu_select']//*[contains(text(), '--')] ";
        //XPath for selecting the drop down list for the countries
        this.countryMenu = ".//*[@class='select_menu'][@data-select-id='user_country'] | .//*[contains(@id,'user_country') and not(contains(@style, 'none'))]";
        //Xpath for countries selector 
        this.countryElements = ".//*[@class='menu_select'][contains(@style, 'block')]/*[not(contains(text(), '--'))]";
        //Xpath for the green tick/successful tick which is dispalyed after the correct data is entered in a field (should be a total of 16/17 on the page)
        this.successTick = ".//*[contains(@class, 'status-active')]";
        //Xpath for the red tick/unsuccessful tick which is dispalyed after the incorrect data is entered in a field .
        this.errorTick = ".//*[contains(@class, 'status-error')]";
        //Xpath for username field - wsbetting uganda
        this.usernameUganda = ".//*[@id='register_details' or @id='register_preferences' or @id='main']//*[@id='username_input']| .//div[contains(@id, 'username_input')]";
    }

    clickRegister() {
        element(by.xpath(this.registerButton)).click();
        basic.waitUntilPageLoaded();
    }

    sendInput(name, value) {
        element(by.xpath(this.inputField + name + "']" + "| .//div[contains(@id, 'user_" + name + "')]")).click();
        element(by.xpath(this.inputField + name + "']" + "| .//div[contains(@id, 'user_" + name + "')]")).clear().sendKeys(value);
    }

    //Only used for wsbetting uganda
    sendUsername(value) {
        element(by.xpath(this.usernameUganda)).click();
        element(by.xpath(this.usernameUganda)).clear().sendKeys(value);
    }

     selectDate(name, value) {
        element(by.xpath(this.calendarSelector + name + "']" + " | .//div[contains(@id, 'user_" + name + "')]" + " | .//*[@id='user_" + name + "' and not(contains(@style, 'none'))]")).click();
        element.all(by.xpath(this.menuElements + name + "_chosen' and not(contains(@style, 'none'))]//li[not(contains(text(), '-'))]" + " | .//*[@id='user_" + name + "' and not(contains(@style, 'none'))]/*[not(contains(text(), '-'))]")).get(value-1).click();
    }

    selectCountry(value) {
        element(by.xpath(this.countryMenu)).click();
        element.all(by.xpath(this.countryElements)).get(value-1).click();
    }

    selectWrongCountry() {
        element(by.xpath(this.countryMenu)).click();
        element(by.xpath(this.invalidElement)).click();
    }

    fillCaptcha(value) {
        element(by.xpath(this.captchaField)).clear().sendKeys(value);
    }

    getSuccessCount() {
        return element.all(by.xpath(this.successTick)).count();
    }

     getErrorCount() {
        return element.all(by.xpath(this.errorTick)).count();
    }
} 

module.exports = CheckRegistrationPage;
