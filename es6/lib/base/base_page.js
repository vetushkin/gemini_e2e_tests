var param      = browser.params.env;
var opts       = browser.params.opts;

var Basic = require('../util/basic');
var basic = new Basic();

class BasePage {

    constructor() {
        this.url = [ 'https://', param.user, param.password, param.url, param.context].join('');
        this.defaultUserName = opts.user;
        this.defaultPassword = opts.password;
        this.supportName = opts.supportUser;
        this.supportPass = opts.supportPassword;
        this.cashoutName = opts.cashoutUser;
        this.cashoutPass = opts.cashoutPassword;
        this.usernameSelector = "//*[contains(@id,'user_')]//*[@id='user_username']";
        this.passwordSelector= "//*[contains(@id,'user_')]//*[@id='user_password']";
        this.loginSelector = "//*[contains(@id,'user_')]//*[@name='commit']";
        this.logoutSelector = "//*[contains(@id,'user_')]//*[@id='logout' or @class='logout']";
        this.userMenuList = ".//*[@id='my_account']";
        this.serverErrors = "//img[contains(@src,'error')] | .//*[contains(@id,'error')]//h1 | .//*[contains(@id,'errorPage')]";
        this.adCloseButton = "//*[@class='dismiss_modal' or contains(@src,'close')][not(ancestor::div[contains(@style,'none')])] | //*[@class='smcx-modal-close']";
        this.accountNumber = "//*[@data-hook='account_number']";
    }

    //Login flow. Works from every page that has user menu.
    //Skips the login process if already logged in
    login(username, password) {
        var loginButton = element(by.xpath(this.loginSelector));
        var logoutButton = element(by.xpath(this.logoutSelector));
        var usernameField = element(by.xpath(this.usernameSelector));
        var passwordField = element(by.xpath(this.passwordSelector));

        this.closeAd();
        basic.closeAlert();

        if (username === 'support') {
            username = this.supportName;
            password = this.supportPass;
        } else if (username === 'cashout') {
            username = this.cashoutName;
            password = this.cashoutPass;
        } else {
            username = username || this.defaultUserName;
            password = password || this.defaultPassword;
        }

        loginButton.isPresent().then(function(present) {
            if (present) {
                usernameField.sendKeys(username);
                passwordField.sendKeys(password);
                loginButton.click();

                basic.waitUntilPageLoaded();
            }
        });

        this.closeAd();
        basic.closeAlert();
    }

    //Logout flow. Can be used after successful login flow
    //Skips the logout process if already logged out
    logout() {
        var logoutButton = element(by.xpath(this.logoutSelector));
        var menu = element(by.xpath(this.userMenuList));

        this.closeAd();
        basic.closeAlert();

        logoutButton.isPresent().then(function(present) {
            if (present) {
                logoutButton.click();
                basic.waitUntilPageLoaded();
            }
        });
    }

    //Logout via request do_logout
    forceLogout() {
        this.visit('account/do_logout');
        basic.waitUntilPageLoaded();
    }

     //Removes the chat so it doesn't get in the way
    removeChat() {
        basic.removeElement('modal_popup_iframe');
        basic.removeElement('livechat-compact-container');
        basic.removeElement('livechat-eye-catcher');
        basic.removeElement('zopim');
    }

    //Visit any page by providing part of URL address.
    //Call with an empty string opens a main page.
    visit(page) {
        browser.driver.get(this.url + page);
        basic.waitUntilPageLoaded();
        this.closeAd();
    }

    //Open any page
    openUrl(url) {
        browser.driver.get(url);
        basic.waitUntilPageLoaded();
    }

    //Switch the focus to the opened tab or popup
    goToPopup(value) {
        value = value || 1;
        browser.driver.wait(function() {
            return browser.driver.getAllWindowHandles().then(function (handles) {
                if(handles.length > 0) {
                    return true;
                }
            });
        }, 15000);

        browser.driver.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[value]);
        }).then(function(){
            basic.waitUntilPageLoaded();
        });
    }

    //Close the opened tab/popup and switch the focus back to the page
    closePopup(value) {
        value = value || 1;
        browser.getAllWindowHandles().then(function(handles){
            if (handles.length > 1) {
                browser.driver.switchTo().window(handles[value]);
                browser.driver.close();
                browser.driver.switchTo().window(handles[0]);
            }
        });
    }

    closeAd() {
        browser.sleep(1000);
        var closeButton = element(by.xpath(this.adCloseButton));

        closeButton.isPresent().then(function(isPresent) {
            if (isPresent) {
                closeButton.isDisplayed().then(function(isVisible) {
                    if (isVisible) {
                        closeButton.click();
                    }
                });
            }
        });
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

    //Return the active window width or height
    getWindowSize(value) {
        return browser.driver.manage().window().getSize().then(function(size) {
            return size[value];
        });
    }

}

module.exports = BasePage;
