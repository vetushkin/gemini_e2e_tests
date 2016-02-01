 var BasePage = require('../../../lib/base/base_page');

class AccountPage extends BasePage {

    constructor () {
        super();

        //List of CSS selectors on the page
        this.buttonForm = ".form_button";
        this.netentBonus = "#netent_bonus";
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
        this.userMenu = "#user_menu";
        this.navigationMenu = "#menu";
    }

    //Connected widgets
    getWithdraw() { return this.withdraw; }
    getNetentBonus() { return this.netentBonus; }
    getDeposit() { return this.deposit; }
    getLoyalty() { return this.loyalty; }
    getProfileDetails() { return this.profileDetails; }
    getProfilePassword() { return this.profilePassword; }
    getHistoryForm() { return this.historyForm; }
    getAsideMenu()  { return this.aside; }
    getTransfer() { return this.transferFunds; }
    getSummary() { return this.accountSummary; }
    getForm() { return this.buttonForm; }
    getLogo() { return this.logo; }
    getUserMenu() { return this.userMenu; }
    getNavigationMenu() { return this.navigationMenu; }
}

module.exports = AccountPage;
