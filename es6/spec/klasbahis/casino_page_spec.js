
var CasinoPage = require('../../source/general/pages/casino_page');
var page = new CasinoPage();

page.start().suite('KlasBahis Casino Page', function(parent)
{
    parent.setUrl('/tr-TR/netent_splash').before(function (actions, find) {
        this.userName = find('#user_username');
        this.password = find('#user_password');
        this.submitButton = find('#logged_out_bar input[type="submit"]');
        actions.setWindowSize(1920, 1080);
    });

    page.start().suite('Header Logo', function (child) {
        child
            .setCaptureElements(page.getHeader())
            .capture('plain');
    });

    page.start().suite('User Menu ', function (child) {
        child
            .setCaptureElements(page.getUserMenu())
            .capture('plain');
    });

    page.start().suite('Top Winners Menu ', function (child) {
        child
            .setCaptureElements(page.getTopWinners())
            .capture('plain');
    });

    page.start().suite('Games Menu ', function (child) {
        child
            .setCaptureElements(page.getGamesMenu())
            .capture('plain');
    });

    page.start().suite('SlideShow Content ', function (child) {
        child
            .setCaptureElements(page.getSlideShowContent())
            .capture('plain');
    });

    page.start().suite('Games Bottom Menu ', function (child) {
        child
            .setCaptureElements(page.getGamesBottomMenu())
            .capture('plain');
    });

    page.start().suite('Footer Logos ', function (child) {
        child
            .setCaptureElements(page.getFooterLogos())
            .capture('plain');
    });

    page.start().suite('All visible games ', function (child) {
        child
            .setCaptureElements(page.getGameTabPanels())
            .capture('plain');
    });

    page.start().suite('Category Games links ', function (child) {
        child
            .setCaptureElements(page.getGameCategoryLinks())
            .capture('plain');
    });

    page.start().suite('Footer Legal ', function (child) {
        child
            .setCaptureElements(page.getFooterLegal())
            .capture('plain');
    });

    page.start().suite('Navigation Menu ', function (child) {
        child
            .setCaptureElements(page.getNavigationMenu())
            .capture('plain');
    });

});