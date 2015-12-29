var BasePage = require('../../../lib/base/base_page');

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class GamesPage extends BasePage {

    constructor () {
        super();

        this.balanceAmount = "//*[@id='balance_available']/*[@class='amount'] | //*[@id='ctxm_balance_wrapper']//h1/following-sibling::*[1]/*[contains(@class,'balance_value')] | //*[@id='wrapper']//*[contains(@class,'_balance')]/span";
        this.bonusPoints = ".//*[@id='balance_points']/*[@class='amount'] | .//*[@id='ctxm_balance_wrapper']//h1/following-sibling::*[2]/*[contains(@class,'balance_value')]";
        this.transferToField = "//*[@id='transfer_funds']/h1";
        this.categoriesList = "//*[@class='new_game_category_links']//a/div";
        this.visibleGames = ".//*[@class='game_content'][not(contains(@style,'none'))]/*[@class='game_detail_block']/div[not(contains(@style,'none'))][not(contains(@class,'force_detail'))]";
        this.bottomGamesList = "//*[@id='games_bottom_menu']//ul//a";
        this.leftGamesList = ".//*[@id='games_menu']//*[contains(@id,'games_menu')][not(contains(@style,'none'))]//a";
        this.ctxmGamesList = ".//*[@id='game_content']//*[contains(@id,'featured_') or @class='home_content']";
        this.ctxmLeftGames = ".//*[contains(@class,'ctxm_games')]//a";
        this.ctxmGamesOptions = ".//*[@id='ctxm_game_options']";
        this.balanceContent = "//*[contains(@id,'balance_content') or contains(@class,'balance_content') or contains(@id,'ctxm_transfer')]";
        this.liveCasinoGames = "//*[@id='lc-content' or contains(@id,'live_casino')]";
        this.gamesOsMenu = ".//*[@id='ctxm_balance_wrapper']/h1";
        this.casinoPopupButton = ".//*[contains(@id,'popUpDiv')][not(contains(@style,'none'))]//a[contains(@onclick,'fun') or contains(@onclick,'real')]";
        this.popupGamesButtons = ".//*[@id='options_panel' or @id='popup_links' or @class='popup_links']//a";
        this.turkishPoker = "//a[contains(@onclick,'turk-pokeri')]";
        this.gameTabs = ".//*[contains(@class,'game_category')]//a";
        this.voxbetLinks = ".//*[@id='poker']//*[@class='xtrmBlocks']//a";
        this.xtrmPokerLinks = ".//*[@id='poker']//*[@class='download-blk']//a";

        this.regExBalances = /.?[0-9]+([\.|\,][0-9]+)?([a-zA-z ]{4})?/;
    }

    //Click button on the selected game
    clickButton(value) {
        var hoverGames = element.all(by.xpath(this.visibleGames));
        var games = element.all(by.xpath(this.visibleGames + "//a[contains(@onclick,'" + value + "')]"));
        basic.hoverOn(hoverGames.get(0));
		games.get(0).click();
    }

    //Load game from Live Casino page
    loadGame(value) {
        element.all(by.xpath(this.liveCasinoGames + "//*[contains(@onclick,'" + value + "') or contains(@href,'" + value + "') or @data-game-name='" + value + "']"))
        .first()
        .click();
    }

    //Start Turkish poker game
    startTurkishPoker() {
        var poker = element.all(by.xpath(this.turkishPoker));
        basic.waitForVisible(poker.get(0), 30000);
        poker.get(0).click();
    }

    clickVoxbetLink(value) {
        element.all(by.xpath(this.voxbetLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    isGameLoaded() {
        var frames = element.all(by.xpath("//iframe"));
        var embeds = element.all(by.xpath("//*[self::embed or self::object][@id]"));
        var amount = 0;
        var frameId;
        var embedId;

        frames.count().then(function(count) {
            if (count > 0) {
                frames.first().getAttribute('id').then(function(attr) {
                    frameId = attr;
                });
                amount = 1;
            }
        });

        embeds.count().then(function(count) {
            if (count > 0) {
                embeds.first().getAttribute('id').then(function(attr) {
                    embedId = attr;
                });
                amount = 2;
            }
        });

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    if (amount === 1) {
                        if (frameId === "") {
                            browser.switchTo().frame(0);
                        } else {
                            browser.switchTo().frame(frameId);
                        }                 
                    } else if (frameId === 2) {
                        while (browser.executeScript("return document.getElementById('" + embedId + "').PercentLoaded()") < 100) {} 
                        return true;
                    }

                    return (amount > 0);
        });
    }

    isXTRMPokerAvailable(value) {
        var osFormat;

        if (value === 'windows') {
            osFormat = 'exe';
        } else if (value === 'mac') {
            osFormat = 'zip';
        }

        return element(by.xpath(this.xtrmPokerLinks + "[contains(@href,'" + osFormat + "')]")).isPresent();
    }

    //Returns true if Bonus amount on the page matches the RegEx expression
    showsBonus() {
        this.expandBalancesMenu();
        var bonus = element.all(by.xpath(this.bonusPoints)).first();
        basic.waitForElementTextToChange(bonus, this.regExBalances);
        return true;
    }

    //Returns true if Balance amount on the page matches the RegEx expression
    showsBalance(value) {
        var balance;

        switch (value) {
            case 'Forvetbet':
                balance = element.all(by.xpath(this.balanceAmount)).last();
                break;
            default:
                balance = element.all(by.xpath(this.balanceAmount)).first();
                break;
        }

        this.expandBalancesMenu();
        basic.waitForElementTextToChange(balance, this.regExBalances);
        return true;
    }

    expandBalancesMenu() {
        var menu = element.all(by.xpath(this.gamesOsMenu));
        menu.count().then(function(count){
            if (count > 0) {
                basic.hoverOn(menu.first());
            }
        });
    }

    //Click on link by class name
    //Used to click on Deposit and Withdraw buttons
    clickLink(className) {
        this.expandBalancesMenu();
        element.all(by.xpath(this.balanceContent + "//a[contains(@class,'" + className + "')]")).last().click();
    }

    clickGameButton(value) {
        var button = element(by.xpath(this.popupGamesButtons + "[contains(@onclick,'" + value + "')]"));

        button.isDisplayed().then(function(isDisplayed) {
            if (isDisplayed) {
                button.click();
            }

            if (value === 'close') {
                browser.getAllWindowHandles().then(function(handles){
                    browser.driver.switchTo().window(handles[0]);
                });
            }
        });
    }

    selectRandomCategory() {
        var categories = element.all(by.xpath(this.categoriesList));
        basic.clickRandomItem(categories);
    }

    selectRandomCTXMGame(value) {
        browser.sleep(1000);
        var ctxmGames = element.all(by.xpath(this.ctxmGamesList + "//a[contains(@class,'" + value + "')]" ));
        basic.clickRandomItem(ctxmGames);
        basic.closeAlert();
        basic.waitUntilPageLoaded();
    }

    selectCTXMGames(value, i) {
        var ctxmGames = element.all(by.xpath(this.ctxmGamesList + "//a[contains(@class,'" + value + "')]" ));
        
        ctxmGames.count().then(function(count) {
            if (i < count) {
                ctxmGames.get(i).click();
            } else {
                ctxmGames.last().click();
            }
        });

        basic.closeAlert();
        basic.waitUntilPageLoaded();
    }

    selectRandomLeftCTXMGame(value) {
        browser.sleep(1000);
        var leftCGames = element.all(by.xpath(this.ctxmLeftGames));
        basic.clickRandomItem(leftCGames);
        basic.closeAlert();
        basic.waitUntilPageLoaded();
        element.all(by.xpath(this.ctxmGamesOptions + "//*[contains(@class,'" + value + "')]/a")).first().click();
        basic.closeAlert();
    }

    selectLeftCTXMGames(value, i) {
        var leftCGames = element.all(by.xpath(this.ctxmLeftGames));
        
        leftCGames.count().then(function(count) {
            if (i < count) {
                leftCGames.get(i).click();
            } else {
                leftCGames.last().click();
            }
        });

        basic.closeAlert();
        basic.waitUntilPageLoaded();
        element.all(by.xpath(this.ctxmGamesOptions + "//*[contains(@class,'" + value + "')]/a")).first().click();
        basic.closeAlert();
    }

    selectRandomNetentGame(value) {
        var games;

        switch (value) {
            case 'left':
                games = element.all(by.xpath(this.leftGamesList));
                break;
            case 'bottom':
            default:
                games = element.all(by.xpath(this.bottomGamesList));
                break;
        }

        basic.clickRandomItem(games);

        basic.closeAlert();
        browser.sleep(500);
    }

    selectNetentGames(value, i) {
        var games;

        switch (value) {
            case 'left':
                games = element.all(by.xpath(this.leftGamesList));
                break;
            case 'bottom':
            default:
                games = element.all(by.xpath(this.bottomGamesList));
                break;
        }

        games.count().then(function(count) {
            if (i < count) {
                games.get(i).click();
            } else {
                games.last().click();
            }
        });
        
        basic.closeAlert();
        browser.sleep(500);
    }

    selectRandomGame(value) {
        var hoverGames = element.all(by.xpath(this.visibleGames + "//*[contains(@class,'" + value + "') or contains(@onclick,'" + value + "')]/*/ancestor::*[contains(@class,'game_block') or contains(@class,'box-container')]"));
        var games = element.all(by.xpath(this.visibleGames + "//*[contains(@class,'" + value + "') or contains(@onclick,'" + value + "')]/*"));
        var buttons = element.all(by.xpath(this.casinoPopupButton));

        games.count()
            .then(function(count) { return (Math.round(Math.random() * count - 1))})
            .then(function(random) {
                basic.hoverOn(hoverGames.get(random));
                games.get(random).click();
                
                basic.closeAlert();

                buttons.count().then(function(count) {
                    if (count > 0) {
                        buttons.first().isDisplayed().then(function(isDisplayed){
                            if (isDisplayed) {
                                buttons.first().click();
                            }
                        });
                    }
                });
        });
    }

    selectGames(value, i) {
        var hoverGames = element.all(by.xpath(this.visibleGames + "//*[contains(@class,'" + value + "') or contains(@onclick,'" + value + "')]/*/ancestor::*[contains(@class,'game_block') or contains(@class,'box-container')]"));
        var games = element.all(by.xpath(this.visibleGames + "//*[contains(@class,'" + value + "') or contains(@onclick,'" + value + "')]/*"));
        var buttons = element.all(by.xpath(this.casinoPopupButton));

        hoverGames.count().then(function(count) {
            if (i < count) {
                basic.hoverOn(hoverGames.get(i));
                basic.waitForElement(games.get(i));
                games.get(i).click();
            } else {
                basic.hoverOn(hoverGames.last());
                basic.waitForElement(games.last());
                games.last().click();
            }
        });

        basic.closeAlert();

        buttons.count().then(function(count) {
            if (count > 0) {
                buttons.first().isDisplayed().then(function(isDisplayed){
                    if (isDisplayed) {
                        buttons.first().click();
                    }
                });
            }
        });
    }

}

module.exports = GamesPage;
