var Menu = require('../../../lib/base/base_menu');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class LeftMenu extends Menu {

    constructor() {
        super();

        this.leftMenuLinks = ".//section[contains(@class,'left_menu')]//a";
        this.leftBannerLinks = "//section[contains(@id,'left_banners')]//*[self::div[@class='leftmenu_sport_sub'] or self::h1 or self::ul]//a";
        this.popularLeagueLinks = ".//*[contains(@id,'populer-lig') or contains(@class,'top_leagues')]//a";
        this.favouritesLinks = ".//*[contains(@class,'favourites_menu')]//*[not(contains(@style,'none'))]/a[not(@href='#')]";
        this.miscMenuLinks = ".//section[contains(@id,'misc_menu')]//a";
    }
    
    clickLink(section, value) {
        element.all(by.xpath("//section[contains(@class,'" + section + "')]//a")).get(value).click();
        basic.waitUntilPageLoaded();
    }

    clickMenuLink(value) {
        element.all(by.xpath(this.leftMenuLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    clickMiscLink(value) {
        element.all(by.xpath(this.miscMenuLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    clickBannerLink(value) {
        element.all(by.xpath(this.leftBannerLinks)).get(value).click();
        basic.waitUntilPageLoaded();
    }

    clickFavouritesLink(value) {
        var elems = element.all(by.xpath(this.favouritesLinks));
        
        elems.count().then(function (count) {
            if (value >= count) {
                elems.last().click();
            } else {
                elems.get(value).click();
            }
        });

        basic.waitUntilPageLoaded();
    }

    clickPopularLink(value) {
        var links = element.all(by.xpath(this.popularLeagueLinks));

        links.count().then(function(count) {
            if (value < count) {
                links.get(value).click();
            } else {
                links.last().click();
            }
        });
        basic.waitUntilPageLoaded();
    }
}

module.exports = LeftMenu;
