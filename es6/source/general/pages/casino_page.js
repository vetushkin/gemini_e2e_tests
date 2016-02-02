var BasePage = require('../../../lib/base/base_page');

class CasinoPage extends BasePage {

    constructor() {
        super();

        //List of CSS selectors on the page
        this.header = ".header_content h1";
        this.userMenu = "#user_menu";
        this.topWinners = "#top_winners";
        this.gamesMenu = "#games_menu";
        this.sligshowContent = "#slideshow_content";
        this.gamesBottomMenu = "#inner_games_bottom_menu";
        this.footerLogos = "img[alt~='footer_logos']";
        this.gameTabPanels = "div.game_block";
        this.gameCategoryLinks = ".game_category_links";
        this.footerLegal = "#footer_legal";
        this.navigationMenu = ".top_menu";
    }
    getHeader() { return this.header; }
    getUserMenu() { return this.userMenu; }
    getTopWinners() { return this.topWinners; }
    getGamesMenu() { return this.gamesMenu; }
    getSlideShowContent() { return this.sligshowContent; }
    getGamesBottomMenu() { return this.gamesBottomMenu; }
    getFooterLogos() { return this.footerLogos; }
    getGameTabPanels() { return this.gameTabPanels; }
    getGameCategoryLinks() { return this.gameCategoryLinks;}
    getFooterLegal() { return this.footerLegal; }
    getNavigationMenu() { return this.navigationMenu; }

}
module.exports = CasinoPage;
