var BasePage = require('../../../lib/base/base_page');

class GamePage extends BasePage {

    constructor () {
        super();

        //List of CSS selectors on the page
        this.chat = "div.zopim:nth-child(2)";
        this.gameTabPanels = "#games_menu";
        this.slideshow = "#slideshow_content";
        this.balance = "#balance_container";
        this.topWinners = "#top_winners";
        this.gamesCategoryLinks = ".game_category_links";
        this.buttonForm = ".form_button";
        this.casinoContent = "#live_casino_content";
        this.netentBonus = "#netent_bonus";
        this.virtualMenu = "iframe";
        this.casinoNavigation = "section.top_menu ul";
        this.loyalty = "div#main";
        this.withdraw = "#withdraw";
        this.deposit = "#deposit";
        this.historyForm = "#history_form";
        this.profileDetails = "#profile_details";
        this.profilePassword = "#profile_password";
        this.aside = "aside#menu";
        this.accountSummary = "#account_summary";
        this.transferFunds = "#transfer_funds";
        this.logo = "header#top h1 a";
        this.header = ".header_content h1";
        this.userMenu = "#user_menu";
        this.navigationMenu = "#menu";
        this.betslipWidget = "#betslip";
        this.favouritesMenu = "section.favourites_menu";
        this.sportsMenu = "#a-z";
        this.articlesWidget = "#articles";
        this.liveWidget = "#live-widget-container";
        this.nextGamesWidget = "#coupon_next_games"; 
    }

    //Connected widgets
    getChat() { return this.chat; }
    getGameTabPanels() { return this.gameTabPanels; }
    getBalance() { return this.balance; }
    getSlideshow() { return this.slideshow; }
    getTopWinners() { return this.topWinners; }
    getGamesCategoryLinks() { return this.gamesCategoryLinks; }
    getLogo() { return this.logo; }
    getUserMenu() { return this.userMenu; }
    getNavigationMenu() { return this.navigationMenu; }

}

module.exports = GamePage;
