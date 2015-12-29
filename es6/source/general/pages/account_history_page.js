var BasePage         = require('../../../lib/base/base_page');
var AccountMenu = require('../widgets/account_menu.js');
var accountMenu = new AccountMenu();

var Basic = require('../../../lib/util/basic');
var basic = new Basic();

class AccountHistoryPage extends BasePage {
	
	constructor () {
		super();
		this.submitButton = "//*[contains(@id,'filter')]//a[contains(@class,'submit')]";
		this.historyOption = "//*[@id='filter']//*[self::div[@class='menu_select'] or self::select[not(contains(@style,'none'))]]";
		this.paginationButtons = "//*[@id='history_data']//*[@class='pagination']/a[not(@class)]";
		this.tableDates = "//*[@id='history_table']//tr/td[contains(@class,'even')][1]";
		this.calendarFromLink = ".//*[contains(@id,'from_date')]/following-sibling::img";
		this.calendarToLink = ".//*[contains(@id,'to_date')]/following-sibling::img";
		this.calendarDates = ".//*[@id='ui-datepicker-div']//td[contains(@onclick,'date_and_time')]";
		this.calendarBackButton = ".//*[@id='ui-datepicker-div']//a[contains(@class,'prev')]";
		this.calendarForwardButton = ".//*[@id='ui-datepicker-div']//a[contains(@class,'next')]";

		this.calendarMonth = ".//*[@id='ui-datepicker-div']//*[contains(@class,'title')]//*[contains(@class,'month')]";
		this.calendarYear = ".//*[@id='ui-datepicker-div']//*[contains(@class,'title')]//*[contains(@class,'year')]";

		this.historyElems = ".//*[@id='history_table']//td[5][span]";
		this.focusElement = ".//*[@id='history_form']//h1";
	}

	//Connected widgets
	accountMenu() { return accountMenu; }

	//Unnecessary methods to make things look good
	historyFilter() { return this; }
	historyTable() { return this; }

	//Select an option from the history filter
	selectOption(value) {
		var arrow = element(by.xpath(this.historyOption + "//*[text()='" + value + "']//preceding::*[@class='select_menu_arrow'][1]"));
		var option = element(by.xpath(this.historyOption + "//*[text()='" + value + "']"));

		arrow.isPresent().then(function(present) {
			if (present) {
				arrow.click();
			}
		});

		option.click();
		return this;
	}

	selectApostasOption(value, option) {
		element(by.xpath(".//*[@id='history_options' or @id='history_form']//*[@id='" + value + "']")).click();
		var option = element(by.xpath(".//*[@id='history_options' or @id='history_form']//*[@id='"+ value + "']//*[text()='" + option + "']"));
		
		option.isPresent().then(function(present) {
			if(present) {
				option.click();
			}
		});
		return this;
	}

	//Click on the Submit button
	clickSubmit() {
		var submit = element(by.xpath(this.submitButton));

		basic.waitForElement(submit);
		submit.click();
		basic.waitUntilPageLoaded(80000);
	}

	historyElements(label){
		return element.all(by.xpath(this.historyElems + "/span[contains(@class,'" + label + "')]"));
	}

	//True if history table contains 1 or more label elements
	contains(label) {
		return this.historyElements(label).count().then(function(count){
			return (count > 0) ? true : false;
		});
	}

	//Returns the amount of visible rows in the history table
	rows() {
		return this.historyElements('').count().then(function(count){
			return parseInt(count);
		});
	}

	//Select last page in the history table
	selectLastPage() {
		var buttons = element.all(by.xpath(this.paginationButtons));

		buttons.count().then(function(count){
			if (count > 0) {
				buttons.last().click();
			}
		});
		basic.waitUntilPageLoaded(80000);
	}

	//Returns amount of days showed in the history filter
	daysShowed() {
		var today, lastDate;
		var timeDiff = 0;

		element.all(by.xpath(this.tableDates)).last().getText().then(function(text) {
			var parts = text.split(/[\/\:\t\n]/);
			
			if (text.indexOf("/") > -1) {
				lastDate = (new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]), Number(parts[3]), Number(parts[4]), Number(parts[5]))).getTime();
			} else {
				lastDate = Date.parse(basic.translateMonth(text));
			}

			browser.executeScript("return document.URL").then(function(result) {
				if (result.indexOf('inkabet') > -1) {
					//7 hours difference between Inkabet time and executor machine time
					timeDiff = 7 * 1000 * 3600;
				} else if (result.indexOf('miljugadas') > -1) {
					//8 hours difference between Inkabet time and executor machine time
					timeDiff = 5 * 1000 * 3600;
				}
				today = Date.now() - timeDiff;
			});
			
		});

        return protractor.promise.controlFlow()
            .execute(function(){return protractor.promise.fulfilled()},'wait for control flow')
                .then(function(){
                    return ((today - lastDate) / (1000 * 60 * 60 * 24));
        });
	}

	//Set the date in the Calendar From widget
	//if months < 0 => clicks on the back button
	//if months > 0 => clicks on the forward button
	//date starting from 0 selects a date in the calendar
	calendarFrom(months, date) {
		var focus = element.all(by.xpath(this.focusElement)).first();
		var calendarFrom = element(by.xpath(this.calendarFromLink));

		basic.hoverOn(focus);
		basic.waitForElement(calendarFrom);
		calendarFrom.click();

		if (months < 0) {
			this.clickBack(Math.abs(months));
		} else if (months > 0) {
			this.clickForward(months);
		} else if (months === 0) {}

		this.selectDate(date);
		basic.hoverOn(focus);
	}

	//Set the date in the Calendar To widget
	//if months < 0 => clicks on the back button
	//if months > 0 => clicks on the forward button
	//date starting from 0 selects a date in the calendar
	calendarTo(months, date) {
		var focus = element.all(by.xpath(this.focusElement)).first();
		var calendarTo = element(by.xpath(this.calendarToLink));
		
		basic.hoverOn(focus);
		basic.waitForElement(calendarTo);
		calendarTo.click();

		if (months < 0) {
			this.clickBack(Math.abs(months));
		} else if (months > 0){
			this.clickForward(months);
		} else if (months === 0) {}

		this.selectDate(date);
		basic.hoverOn(focus);
	}

	//Click back button in the Calendar widget 'value' times
	clickBack(value) {
		var i = 0;
		for (i; i < value; i++) {
			element(by.xpath(this.calendarBackButton)).click();	
		}
	}

	//Click forward button in the Calendar widget 'value' times
	clickForward(value) {
		var i = 0;
		for (i; i < value; i++) {
			element(by.xpath(this.calendarForwardButton)).click();	
		}
	}

	//Click forward button in the Calendar widget 'value' times
	selectDate(value) {
		element.all(by.xpath(this.calendarDates)).get(value).click();
	}

}

module.exports = AccountHistoryPage;
