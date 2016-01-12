var BasePage = require('../../../lib/base/base_page');

class SportsPage extends BasePage {

    constructor () {
        super();

        //List of CSS selectors on the page
        this.header = ".header_content h1";
        this.userMenu = "#user_menu";
        this.navigationMenu = "#menu";
        this.betslipWidget = "#betslip";
        this.favouritesMenu = "section.favourites_menu";
        this.sportsMenu = "#a-z";
        this.articlesWidget = "#articles";
        this.liveWidget = "#live-widget-container";
        this.nextGamesWidget = "#coupon_next_games"; 
        this.footer = "#page_footer";
    }

    //Connected widgets
    getHeader() { return this.header; }
    getUserMenu() { return this.userMenu; }
    getNavigationMenu() { return this.navigationMenu; }
    getBetslipWidget() { return this.betslipWidget; }
    getFavouritesMenu() { return this.favouritesMenu; }
    getSportsMenu() { return this.sportsMenu; }
    getArticlesWidget() { return this.articlesWidget; }
    getLiveWidget() { return this.liveWidget; }
    getNextGamesWidget() { return this.nextGamesWidget; }
    getFooter() { return this.footer; }
}

module.exports = SportsPage;
