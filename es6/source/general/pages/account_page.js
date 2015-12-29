var BasePage = require('../../../lib/base/base_page');
var AccountMenu = require('../widgets/account_menu.js');
var accountMenu = new AccountMenu();
var LiveChat = require('../widgets/live_chat_widget.js');
var liveChat = new LiveChat();
var SlideChat = require('../widgets/slide_chat.js');
var slideChat = new SlideChat();
var RightMenu = require('../widgets/right_menu.js');
var rightMenu = new RightMenu();
var BonusLoyaltyWidget = require('../widgets/loyalty_widget.js');
var bonusLoyaltyWidget = new BonusLoyaltyWidget;

class AccountPage extends BasePage {
	
	constructor () {
		super();

		this.liveChatLink = "//a[@id='_lpChatBtn' or @id='sd5PNX' or @class='live-chat' or @data-href='chat-link' or contains(@href,'messenger.providesupport')] | //*[@class='livechat_button']";
		this.slideChatLink = "//a[@id='full-view-button']";
		this.closeSlideChatLink = ".//*[@id='close-chat']/span";
		this.minimizeSlideChatLink = ".//*[@id='minimize']/span";
	}

	//Connected widgets
	loyalty() { return bonusLoyaltyWidget; }
	accountMenu() { return accountMenu; }
	liveChat() { return liveChat; }
	slideChat() { return slideChat; }
	rightMenu() { return rightMenu; }
	
	openLiveChat() {
		element(by.xpath(this.liveChatLink)).click();
	}

	openSlideChat() {
		browser.switchTo().frame('livechat-compact-view');
		element(by.xpath(this.slideChatLink)).click();
		browser.switchTo().defaultContent();
		browser.switchTo().frame('livechat-full-view');
	}

	closeSlideChat() {
		var close = element(by.xpath(this.closeSlideChatLink));
		var minimize = element(by.xpath(this.minimizeSlideChatLink));

		browser.switchTo().defaultContent();
		browser.switchTo().frame('livechat-full-view');
        close.isPresent().then(function(present) {
            if (present) {
            	close.isDisplayed().then(function(diplayed){
            		if (diplayed) {
            			close.click();
            		}
            	});               
            }
        });

        minimize.isPresent().then(function(present) {
            if (present) {
                minimize.isDisplayed().then(function(diplayed){
            		if (diplayed) {
            			minimize.click();
            		}
            	});
            }
        });

        browser.switchTo().defaultContent();
	}
}

module.exports = AccountPage;
