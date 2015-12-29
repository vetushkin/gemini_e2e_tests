var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class RegistrationMobilePage extends BaseMobilePage {
	
	constructor () {
		super();

		this.submitButton = ".//*[@id='the_real_submit_button']";
		this.backButton = ".//*[@id='theBackButton'][contains(@class,'backRegister')]";
        this.cancelButton = ".//*[@id='theBackButton'][contains(@class,'cancelRegister')]";
        this.countriesList = ".//*[@id='country']//option[not(contains(text(),'-----'))]";
        this.currenciesList = ".//*[@id='currency']//option";
        this.termsCheckbox = ".//*[@id='regform_t_and_c']";

	}

    inputData(id, value) {
        var inputField = element(by.xpath("//input[@id='" + id + "']"));

        if (id !== 'date_of_birth') {
            inputField.clear();
        }

        inputField.sendKeys(value);
    }

    clickSubmit() {
    	var button = element(by.xpath(this.submitButton));
    	
    	basic.scrollToElement(button);
    	button.click();
    	basic.waitUntilPageLoaded();
    }

    clickBack() {
    	var button = element(by.xpath(this.backButton));
    	
    	basic.scrollToElement(button);
    	button.click();
    	basic.waitUntilPageLoaded();
    }

    clickCancel() {
        var button = element(by.xpath(this.cancelButton));
        
        basic.scrollToElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }

    acceptTerms() {
        element(by.xpath(this.termsCheckbox)).click();
    }

    selectCountry(value) {
        var countries = element.all(by.xpath(this.countriesList));

        if (value === 'random') {
            basic.clickRandomItem(countries);
        } else {
            element(by.xpath(this.countriesList + "[contains(text(), '" + value + "')]")).click();    
        }
    }

    selectCurrency(value) {
        var currencies = element.all(by.xpath(this.currenciesList));

        if (value === 'random') {
            basic.clickRandomItem(currencies);
        } else {
            element(by.xpath(this.currencies + "[contains(text(), '" + value + "')]")).click();    
        }
    }

    isSubmitEnabled() {
        return element(by.xpath(this.submitButton)).isEnabled().then(function(isEnabled) {
            return isEnabled;
        });
    }
}

module.exports = RegistrationMobilePage;
