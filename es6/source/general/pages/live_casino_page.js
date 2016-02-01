var BasePage = require('../../../lib/base/base_page');

class LiveCasinoPage extends BasePage {

    constructor () {
        super();

        //List of CSS selectors on the page
        this.casinoContent = "#live_casino_content";
        this.casinoNavigation = "section.top_menu ul";
        this.userMenu = "#user_menu";
        
    }

    //Connected widgets
    getCasinoContent() { return this.casinoContent; }
    getCasinoNavigation() { return this.casinoNavigation; }
    getUserMenu() { return this.userMenu; }
  
}

module.exports = LiveCasinoPage;
