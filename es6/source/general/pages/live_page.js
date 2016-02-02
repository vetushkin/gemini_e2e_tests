var BasePage = require('../../../lib/base/base_page');

class LivePage extends BasePage {

    constructor () {
        super();

        //List of CSS selectors on the page
        this.header = ".header_content h1";
        this.userMenu = "#user_menu";
        this.navigationMenu = "#menu";
        this.betslipWidget = "#betslip";
        this.liveFavourites = "#livebetting_favorites";
        this.livebettingMenu = "#livebetting_menu";
        this.comingEvents = "#livebetting_coming_events";
        this.livebettingBanner = "#livebetting_banner";
        this.footballHighlights = "#football_highlights>header";
        this.footer = "#page_footer";
    }

    getHeader() { return this.header; }
    getUserMenu() { return this.userMenu; }
    getNavigationMenu() { return this.navigationMenu; }
    getBetslipWidget() { return this.betslipWidget; }
    getLiveFavourites() { return this.liveFavourites; }
    getLivebettingMenu() { return this.livebettingMenu; }
    getComingEvents() { return this.comingEvents; }
    getLivebettingBanner() { return this.livebettingBanner; }
    getFootballHighlights() { return this.footballHighlights; }
    getFooter() { return this.footer; }
}

module.exports = LivePage;
