var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountMobilePage extends BaseMobilePage {
	
	constructor () {
		super();

		this.accountLinks = ".//*[@id='account_yeild']//*";
        this.balanceLink = ".//*[@id='account_yeild']//*[*[@class='balance']]";
        this.desktopBalances = ".//*[@id='account_summary']//tr//following::td[contains(@class,'total')]";
        this.loadingMessage = ".//*[@class='osg-messages-container'][not(contains(@style,'none'))]";
        this.historyTransactions = ".//*[@class='account_history']//*[contains(@onclick,'expand_collapse')]";
        this.expTransactions = ".//*[@class='history_transaction'][not(contains(@style,'none'))]";
        this.transactionDates = ".//*[contains(@class,'transaction')]/*[@class='history_field date']";
        this.amountField = ".//*[@id='amount']";
        this.fromBalance = ".//*[@id='from_balances']";
        this.toBalance = ".//*[@id='to_balances']";
        this.errorMessage = "//*[@id='theMessageBox']";

        this.regExBalance = /\d+[\,|\.]\d+\ \w{3}/;
	}

	//Click on the account menu link
    clickLink(value) {
        var menu = element(by.xpath(this.accountLinks + "[contains(@onclick,'" + value + "')]"));

        menu.isPresent().then(function(present) {
            if (present) {
                menu.click();
                basic.waitUntilPageLoaded();
            }
        });
    }

    clickButton(value) {
        var loading = element.all(by.xpath(this.loadingMessage));
        var button = element(by.xpath(this.accountLinks + "[contains(@onclick,'" + value + "') or @type='" + value + "']"));
        
        if (value !== 'submit') {
            basic.waitForElementToDisappear(loading);
        }

        basic.waitForElement(button);

        button.click();

        if (value === 'submit') {
        
        } else {
            browser.sleep(2000);
            basic.waitUntilPageLoaded();
            basic.waitForElementToDisappear(loading);
        }
    }

    clickTransactions(value) {
        let i = 0;
        var loading = element.all(by.xpath(this.loadingMessage));
        var elems = element.all(by.xpath(this.historyTransactions));
        basic.waitForElementToDisappear(loading, 10000);

        if (value === "all") {
            elems.count().then(function(count) {
                for (i; i < count; i++) {
                    basic.scrollToElement(elems.get(i));
                    elems.get(i).click();
                }
            });
        } else {
            elems.get(value).click();
        }     
    }

    inputAmount(value) {
        var loading = element.all(by.xpath(this.loadingMessage));
        basic.waitForElementToDisappear(loading, 10000);

        element(by.xpath(this.amountField)).clear().sendKeys(value);
    }

    transferFrom(value) {
        var loading = element.all(by.xpath(this.loadingMessage));
        basic.waitForElementToDisappear(loading, 10000);

        element(by.xpath(this.fromBalance + "/option[@value='" + value + "']")).click();
    }

    transferTo(value) {
        var loading = element.all(by.xpath(this.loadingMessage));
        basic.waitForElementToDisappear(loading, 10000);
        
        element(by.xpath(this.toBalance + "/option[@value='" + value + "']")).click();
    }

    //Returns amount of days showed in the history filter
    daysShowed() {
        var today, lastDate;
        var loading = element.all(by.xpath(this.loadingMessage));
        basic.waitForElementToDisappear(loading, 10000);

        element.all(by.xpath(this.transactionDates)).last().getText().then(function(text) {
            var parts = text.split(/\//);
            lastDate = (new Date(2015, Number(parts[1]) - 1, Number(parts[0]))).getTime();
            today = Date.now();       
        });

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    return ((today - lastDate) / (1000 * 60 * 60 * 24));
        });
    }

    //Returns amount of expanded transactions on the History page
    expandedTransactions() {
        return element.all(by.xpath(this.expTransactions)).count();
    }

    saveMobileBalance(value) {
        var balance = element(by.xpath(this.balanceLink + "[preceding-sibling::*[text()='" + value + "']]"));
        
        basic.waitForElementTextToChange(balance, this.regExBalance, 5000);
        return balance.getText().then(function(text) {
            return text;
        });
    }

    saveDesktopBalance(value) {
        var balance;

        if (typeof value === 'number') {
            balance = element.all(by.xpath(this.desktopBalances)).get(value);
        } else {
            balance = element(by.xpath(this.desktopBalances + "[preceding-sibling::*[text()='" + value + "']]"));
        }

        basic.waitForElementTextToChange(balance, this.regExBalance, 5000);
        return balance.getText().then(function(text) {
            return text;
        });
    }

    isBalanceCorrect(value) {
        var regEx = this.regExBalance;
        var elem = element(by.xpath(this.balanceLink + "[preceding-sibling::*[text()='" + value + "']]"));

        basic.waitForElement(elem, 15000);

        return elem.getText().then(function(text){
            return regEx.test(text);
        });
    }

    isNotSubmitted() {
        return element(by.xpath(this.errorMessage)).getText();
    }
}

module.exports = AccountMobilePage;
