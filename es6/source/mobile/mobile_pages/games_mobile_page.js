var BaseMobilePage = require('../../../lib/base/base_mobile_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class GamesMobilePage extends BaseMobilePage {
	
	constructor () {
		super();

		this.logoLink = ".//*[@id='HeaderLogoImage']";
        this.accountButton = ".//*[@id='_casino_balance']//a[contains(@onclick,'account')]";
        this.registerButton = ".//*[@id='HeaderRegister']";
        this.promoGame = ".//*[@id='casino_yeild']//*[@class='casino_banner']//a[@onclick]";
        this.casinoGames = ".//*[@class='casino_games']//a[@onclick]";
        this.freePlay = ".//*[contains(@class,'logged')]//a[contains(@href,'DEMO')]";
        this.realPlay = ".//*[@class='logged_in_menu']/a[@href][not(contains(@href,'DEMO'))]";
        this.returnButton = ".//*[contains(@class,'logged')]/a[contains(@onclick,'mobile/casino')]";
        this.rotateAnimation = "//*[@id='rotateanim' or @id='spinButton']";

        this.regExBalance = /[0-9\.]+([A-Z]+)?/;
	}

    //Returns true if text from the page matches to the regEx value
    isCorrect(value) {
        var regEx = this.regExBalance;
        var elem = element(by.xpath("//*[contains(@class,'casino_" + value + "')]//*[@class='amount']"));
        
        basic.waitForElement(elem, 30000);

        return elem.getText().then(function(text){
            return regEx.test(text);
        });
    }

    isGameStarted() {
        var rotation = element(by.xpath(this.rotateAnimation));
        basic.waitForElement(rotation, 15000);

        return rotation.isDisplayed();
    }

    clickLogo() {
        element(by.xpath(this.logoLink)).click();
        basic.waitUntilPageLoaded();
    }

    clickAccountButton() {
        var button = element(by.xpath(this.accountButton));
        basic.waitForElement(button);
        basic.waitForNotStale(button, 10000);
        button.click();
        basic.waitUntilPageLoaded();
    }

    clickRegisterButton() {
        var button = element(by.xpath(this.registerButton));
        basic.waitForElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }

    clickReturnButton() {
        var button = element(by.xpath(this.returnButton));
        basic.waitForElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }

    clickPromoGame() {
        var game = element(by.xpath(this.promoGame));
        basic.waitForElement(game);
        game.click();
        basic.waitUntilPageLoaded();
    }

    clickRandomGame() {
        var games = element.all(by.xpath(this.casinoGames));

        games.count()
            .then(function(count) {
                return (Math.round(Math.random() * count - 1));
            })
            .then(function(random) {
                basic.scrollToElement(games.get(random));
                games.get(random).click();
        });

        basic.waitUntilPageLoaded();
    }

    clickGame(value) {
        var games = element.all(by.xpath(this.casinoGames));

        games.count().then(function(count) {
            if (value >= count) {
                basic.scrollToElement(games.last());
                games.last().click();
            } else {
                basic.scrollToElement(games.get(value));
                games.get(value).click();
            }
        });

        basic.waitUntilPageLoaded();
    }

    startGame(value) {
        var button;
        value = value || 'free';

        if (value === 'free') {
            button = element(by.xpath(this.freePlay));
        } else if (value === 'real') {
            button = element(by.xpath(this.realPlay));
        }

        basic.waitForElement(button);
        button.click();
        basic.waitUntilPageLoaded();
    }
}

module.exports = GamesMobilePage;
