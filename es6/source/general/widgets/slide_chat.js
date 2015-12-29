var BaseWidget = require('../../../lib/base/base_widget');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class SlideChatWidget extends BaseWidget {
    
    constructor() {
		super();

        this.nameField = ".//*[@id='name']";
        this.emailField = ".//*[@id='email']";
        this.subjectField = ".//*[@id='subject']";
        this.messageField = ".//*[@id='container_4_4']";
        this.submitButton = ".//input[@type='submit']";
        this.submittedMessage = ".//*[@id='view-offline-message-sent' or @id='view-chat'][contains(@style,'block')]";

	}

    enterName(text) {
        var name = element(by.xpath(this.nameField));

        name.isPresent().then(function(present) {
            if (present) {
                name.clear().sendKeys(text);
            }
        });
    }

    enterEmail(text) {
        var email = element(by.xpath(this.emailField));

        email.isPresent().then(function(present) {
            if (present) {
                email.clear().sendKeys(text);
            }
        });
    }

    enterSubject(text) {
        var subject = element(by.xpath(this.subjectField));

        subject.isPresent().then(function(present) {
            if (present) {
                subject.clear().sendKeys(text);
            }
        });
    }

    enterMessage(text) {
        var message = element(by.xpath(this.messageField));

        message.isPresent().then(function(present) {
            if (present) {
                message.clear().sendKeys(text);
            }
        });
    }

    //Click on Submit chat button
    submitMessage() {
        element(by.xpath(this.submitButton)).click();
    }

    //Returns true if there is an input chat window
    isMessageSubmited() {
        var message = element(by.xpath(this.submittedMessage));
        basic.waitForElement(message);
        return true;
    }

}

module.exports = SlideChatWidget;
