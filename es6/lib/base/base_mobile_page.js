var param      = browser.params.env;
var opts       = browser.params.opts;

var Basic = require('../util/basic');
var basic = new Basic();

class BaseMobilePage {

    constructor() {
        this.url = [ 'https://', param.user, param.password, param.url, param.context].join('');
        this.defaultUserName = opts.user;
        this.defaultPassword = opts.password;
        this.supportName = opts.supportUser;
        this.supportPass = opts.supportPassword;
        this.cashoutName = opts.cashoutUser;
        this.cashoutPass = opts.cashoutPassword;
        this.usernameSelector = "//*[@id='theUserNameField']";
        this.passwordSelector= "//*[@id='thePasswordField']";
        this.loginSelector = "//*[@id='login']//*[@type='submit']";
        this.logoutSelector = ".//*[@id='account_yeild']//a[contains(@onclick,'logout')]";
        this.serverErrors = ".//*[@id='content_panel']/section[@class='error_page']";
        this.accountLink = "//*[@id='login']";
        this.accountInfo = ".//*[@id='LoggedIn']";
        this.sportsLoading = ".//*[@id='spinner']/img";
        this.loginSuccess = ".//*[@id='theUserName']";
        this.loginPopup = "//*[@id='theMessageBox'][not(@class='item_hidden')]";
    }

    //Skips the login process if already logged in
    login(username, password) {
        var accountButton = element(by.xpath(this.accountLink));
        var usernameField = element(by.xpath(this.usernameSelector));
        var passwordField = element(by.xpath(this.passwordSelector));
        var loginButton = element(by.xpath(this.loginSelector));
        var loginBox = element(by.xpath(this.loginPopup));
        var loading = element(by.xpath(this.sportsLoading));
        var info = element(by.xpath(this.accountInfo));
        var logged = element(by.xpath(this.loginSuccess));
      
        if (username === 'support') {
            username = this.supportName;
            password = this.supportPass;
        } else if (username === 'cashout') {
            username = this.cashoutName;
            password = this.cashoutPass;
        }
        else {
            username = username || this.defaultUserName;
            password = password || this.defaultPassword;
        }

        this.visit('mobile/sportsbook');

        accountButton.isPresent().then(function(isPresent) {
            if (isPresent) {
                accountButton.click();
                usernameField.sendKeys(username);
                passwordField.sendKeys(password);
                browser.sleep(1000);
                loginButton.click();
                basic.waitToDisappear(loginBox, 30000);
                basic.waitUntilPageLoaded();
                basic.waitToDisappear(loading, 30000);
                basic.waitToDisappear(accountButton, 30000);
            }
        });
}

    //Logout flow. Can be used after successful login flow
    logout() {
        var logoutButton = element(by.xpath(this.logoutSelector));
        this.visit('mobile');
        browser.sleep(1000);
        this.visit('mobile/account');
        browser.sleep(1000);
        logoutButton.isPresent().then(function(isPresent) {
            if (isPresent) {
                logoutButton.click();
                basic.waitUntilPageLoaded();
            }
        });

        browser.sleep(1000);
    }

    //Logout via request logout
    forceLogout() {
        this.visit('mobile/account/logout');
        basic.waitUntilPageLoaded();
    }

    //Returns true if you can see your account information on the top
    isLoggedIn() {
        return element(by.xpath(this.accountInfo)).isDisplayed();
    }

    //Visit any page by providing part of URL address.
    //Call with an empty string opens a main page.
    visit(page) {
        var loading = element(by.xpath(this.sportsLoading));
        browser.driver.get(this.url + page);
        basic.waitUntilPageLoaded();
        basic.waitToDisappear(loading, 30000);
    }

    //Open any page
    openUrl(url) {
        browser.driver.get(url);
        basic.waitUntilPageLoaded();
    }

    //Verifies that Main logo is present on the page
    noError(){
        var errors = element.all(by.xpath(this.serverErrors))

        return errors.count().then(function(count){
            return (count > 0) ? false : true;
        });
    }

    //Return the current page URL as string
    currentUrl() {
        return browser.driver.getCurrentUrl();
    }

    //Returns amount of not loaded images on the page
    brokenImagesCount() {
        return browser.executeAsyncScript(function (callback) {
        var imgs = document.getElementsByTagName('img'),
            loaded = 0;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].naturalWidth > 0) {
                loaded = loaded + 1;
            };
        };
        callback(imgs.length - loaded);
        }).then(function (brokenImagesCount) {
            return brokenImagesCount;
        });
    }

    //Remove element from a page by id
    removeElement(value) {
        var elem = element(by.xpath('//*[contains(@id,"'+ value +'")]'));
        elem.isPresent().then(function(present) {
            if (present) {
                browser.executeScript('document.getElementById("' + value + '").remove();');
            }
        });
    }
}

module.exports = BaseMobilePage;
