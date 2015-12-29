var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class LiveChatWidget extends BaseWidget {
    
    constructor() {
		super();

        this.accountNumberField = ".//*[@id='q1' or @id='field-6996']";
        this.emailField = ".//*[@id='q2' or @id='field-6999' or @id='email']";
        this.nameField = ".//*[@id='field-6997' or contains(@id,'vfield_3') or @id='name']";
        this.issueOptions = ".//*[@id='q7' or @id='q9']/option";
        this.startButton = ".//*[contains(@id,'start') or contains(@id,'submit')]/a | //*[@id='btn-start-chat'] | //*[@type='submit']";
        this.chatWindow = ".//*[@id='mytext' or @id='chat-input-control']";
        this.messageField = ".//*[@id='q5']";
        this.departmentOptions = ".//input[@type='radio']";
        this.lsFrame = "//frameset";
        this.chatWait = ".//*[contains(@id, 'container_') and @class='form_header'] | .//*[contains(@id, 'title-text')]";
	}

    enterAccountNumber(text) {
        element.all(by.xpath("//iframe[@id='initialtextFrame']"))
        .count().then(function(count) {
            if (count > 0) {
                browser.driver.switchTo().frame('initialtextFrame');        
            }      
        });

        element(by.xpath(this.accountNumberField))
        .sendKeys(text);
    }

    enterEmail(text) {
        element(by.xpath(this.emailField))
        .clear()
        .sendKeys(text);
    }

    enterMessage(text) {
        element(by.xpath(this.messageField))
        .clear()
        .sendKeys(text);
    }

    enterName(text) {
        var name = element(by.xpath(this.nameField));

        name.isPresent().then(function(present) {
            if (present) {
                name.clear().sendKeys(text);
            }
        });
    }

    //Select an issue type from a list if exists
    selectIssue(value) {
        var selection = element(by.xpath(this.issueOptions + "[@value='" + value + "']"));
        
        selection.isPresent().then(function(present) {
            if (present) {
                selection.click();
            }
        });
    }

    //Click on Start chat button
    startChat() {
        browser.switchTo().defaultContent();
        element(by.xpath(this.startButton))
        .click();
        basic.waitUntilPageLoaded();
    }

    //Click the Start chat button(ApostasOnline only)
    startApostasChat() {
        element(by.xpath(this.startButton))
        .click();
        basic.waitUntilPageLoaded();
    }

    //Minimize the livechat widget
    minimize() {
        element(by.xpath(this.minimize))
        .click();
    }

    //Returns true if there is an input chat window
    isStarted() {
        var today = new Date();

        return element.all(by.xpath(this.chatWindow)).count().then(function(count) {
            if (today.getHours() >= 11 || today.getHours() < 2) {
                return (count > 0) ? true : false;
            } else {
                return true;
            }     
        })
    }

    isLSChatStarted() {
        return element.all(by.xpath(this.lsFrame))
        .count().then(function(count) {
            if (count > 0) {
                return true;        
            } else {
                return false;
            }
        });
    }

    isApostasChatStarted() {
        return element.all(by.xpath(this.chatWait))
        .getText().then(function(text) {
                return text;
        });
    }
}

module.exports = LiveChatWidget;
