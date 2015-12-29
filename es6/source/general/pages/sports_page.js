var BasePage = require('../../../lib/base/base_page');
var Footer = require('../widgets/footer.js');
var footer = new Footer();
var MainMenu = require('../widgets/main_menu.js');
var mainMenu = new MainMenu();
var LeftMenu = require('../widgets/left_menu.js');
var leftMenu = new LeftMenu();
var RightMenu = require('../widgets/right_menu.js');
var rightMenu = new RightMenu();
var SportsMenu = require('../widgets/sports_menu.js');
var sportsMenu = new SportsMenu();
var UserMenu = require('../widgets/user_menu.js');
var userMenu = new UserMenu();
var Betslip = require('../widgets/betslip.js');
var betslip = new Betslip();
var CashoutWidget = require('../widgets/cashout_widget.js');
var cashoutWidget = new CashoutWidget();
var SocialWidget = require('../widgets/social_widget.js');
var social = new SocialWidget();
var I18nWidget = require('../widgets/i18n_widget.js');
var i18nWidget = new I18nWidget();
var NextGamesWidget = require('../widgets/next_games_widget.js');
var nextGamesWidget = new NextGamesWidget();
var ArticlesWidget = require('../widgets/articles_widget.js');
var articlesWidget = new ArticlesWidget();
var NewsWidget = require('../widgets/news_widget.js');
var newsWidget = new NewsWidget();
var UpcomingGamesWidget = require('../widgets/upcoming_games_widget.js');
var upcomingGamesWidget = new UpcomingGamesWidget();
var LiveMatchesWidget = require('../widgets/live_matches_widget.js');
var liveMatchesWidget = new LiveMatchesWidget();
var FavoriteMatchesWidget = require('../widgets/favorite_events_widget.js');
var favoriteMatchesWidget = new FavoriteMatchesWidget;
var PopularMatchesWidget = require('../widgets/popular_events_widget.js');
var popularMatchesWidget = new PopularMatchesWidget;
var PopularCombineWidget = require('../widgets/popular_combine_widget.js');
var popularCombineWidget = new PopularCombineWidget;



var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class SportsPage extends BasePage {

    constructor () {
        super();

        this.couponElement = "//*[@id='main']//div[@class='sport_seo_data']/h1";
        this.sportElement = "//*[@id='a-z']//a[@class='open']";
        this.defaultCoupons = "//*[@id='main_page_coupons']/section";
        this.eventsTitles = ".//section[@class='coupon']//header[@class='event_path']/h2";
        this.activeBets = "//*[@class='coupon']//td[contains(@class,'outcome')][not(contains(@class,'more_markets'))]";
        this.activeFirstBets = ".//*[@class='first_event']/*[@class='center outcome'][1]/a";
        this.activeLastBets = ".//*[@class='last_event' or @class='single_event']/*[@class='center outcome'][1]/a";
        //On each row, the first bet you can click on (home team to win bet option) - all bets from live widget will be selected.
        this.apostasLiveBets = ".//*[@class='live_table']/table/tbody/tr/td[2]/*/*[@class='stake']";
        this.couponBackButton = ".//*[@id='main']//a[@class='back_to']";
        this.loadingIcon = ".//*[@id='page_loading']";
        
    }

    //Connected widgets
    footer() { return footer; }
    mainMenu() { return mainMenu; }
    leftMenu() { return leftMenu; }
    rightMenu() { return rightMenu; }
    sportsMenu() { return sportsMenu; }
    userMenu() { return userMenu; }
    betslip() { return betslip; }
    cashout() { return cashoutWidget; }
    social() { return social; }
    i18nWidget() { return i18nWidget; }
    nextGames() { return nextGamesWidget; }
    articles() { return articlesWidget; }
    news() { return newsWidget; }
    upcomingGames() { return upcomingGamesWidget; }
    liveMatches() { return liveMatchesWidget; }
    couponTitle() { return this; }
    favoriteTab() { return favoriteMatchesWidget; }
    popularWidget() { return popularMatchesWidget; }
    popularCombine() { return popularCombineWidget; }
    
    betsAmount() {
        var loadingElement = element.all(by.xpath(this.loadingIcon));
        var bets = element.all(by.xpath(this.activeBets));
        
        basic.waitForElementToDisappear(loadingElement);

        return bets.count();
    }

    isCorrect() {
        var sportValue, couponValue;
        element(by.xpath(this.sportElement)).getText().then(function(text) {sportValue = text;});
        element(by.xpath(this.couponElement)).getText().then(function(text) {couponValue = text;});

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    return (sportValue === couponValue) ? true : false;
        });
    }

    //Verify that page contains a coupon by id or class name
    containsCoupon(value) {
        return element.all(by.xpath(this.defaultCoupons + "[@id='" + value + "' or @class='" + value + "']"))
        .count()
        .then(function(count) {
            return count > 0;
        });
    }

    showedGames() {
        var loadingElement = element.all(by.xpath(this.loadingIcon));
        basic.waitForElementToDisappear(loadingElement, 20000);

        return element.all(by.xpath(this.eventsTitles)).count().then(function(count){
            return count;
        });
    }

    //Add random bets from a coupone
    addRandomBets(value) {
        value = value || 1;
        var activeBets = element.all(by.xpath(this.activeFirstBets));

        basic.waitForElement(element.all(by.xpath(this.activeFirstBets)).first());

        for (var i = 0; i < value; i++) {
            basic.clickRandomItem(activeBets);
        }
    }

    //Add bets one by one from a coupon
    addBets(value) {
        value = value || 1;
        var loadingElement = element.all(by.xpath(this.loadingIcon));
        var bets = element.all(by.xpath(this.activeLastBets));

        basic.waitForElementToDisappear(loadingElement);
        basic.waitForCountToBeGreaterThan(bets, 0);

        for (var i = 0; i < value; i++) {
            browser.sleep(500);
            bets.get(i).click();
        }

    }

    //Add Apostas live bets
    addApostasLivebets(value) {
        value = value || 1;
        var bets = element.all(by.xpath(this.apostasLiveBets));

        for (var i = 0 ; i < value ; i ++) {
            browser.sleep(500);
            bets.get(i).click
        }
    }

    //Close opened coupon
    closeCoupon() {
        element(by.xpath(this.couponBackButton)).click();
        basic.waitUntilPageLoaded();
    }
}

module.exports = SportsPage;
