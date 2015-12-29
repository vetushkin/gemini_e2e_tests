var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class CasinoMobilePage extends BaseMobilePage {
    
    constructor () {
        super();

        this.balanceLink = ".//*[@id='casino_balance']//*[@class='amount']";
        this.logoLink = ".//*[@id='HeaderLogoImage']";
        this.accountButton = ".//*[@class='_casino_balance']//a[contains(@onclick,'account')]";
        this.registerButton = ".//*[@id='HeaderRegister']";
        this.promoGame = "//*[@id='evolution_casino_yeild']//*[@class='casino_banner']//a";
        this.casinoGames = "//*[@class='casino_games']//a[@data-game-id]";
        this.rotateAnimation = "//*[contains(@class,'orientationLocking')]";
        this.loginPopup = ".//*[@id='login_popup']";

        this.regExBalance = /\d+[\,|\.]?\d+\w{3}/;
    }

    //Returns true if text from the page matches to the regEx value
    isBalanceCorrect() {
        var regEx = this.regExBalance;
        var elem = element(by.xpath(this.balanceLink));

        basic.waitForElement(elem, 30000);

        return elem.getText().then(function(text){
            return regEx.test(text);
        });
    }

    isGameStarted() {
        var rotation = element(by.xpath(this.rotateAnimation));
        basic.waitForElement(rotation, 30000);

        return rotation.isDisplayed();
    }

    isLoggedOut() {
        var login = element(by.xpath(this.loginPopup));
        basic.waitForElement(login, 20000);

        return login.isDisplayed();
    }

    clickLogo() {
        element(by.xpath(this.logoLink)).click();
        basic.waitUntilPageLoaded();
    }

    clickAccountButton() {
        var button = element(by.xpath(this.accountButton));
        basic.waitForElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }

    clickRegisterButton() {
        var button = element(by.xpath(this.registerButton));
        basic.waitForElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }

    startPromoGame() {
        var game = element(by.xpath(this.promoGame));
        basic.waitForElement(game);
        game.click();
        basic.waitUntilPageLoaded();
    }

    startLiveGame(value) {
        var games = element.all(by.xpath(this.casinoGames));
        basic.waitForCountToBeGreaterThan(games, 0);
        games.get(value).click();
        basic.waitUntilPageLoaded();
    }
}

module.exports = CasinoMobilePage;
