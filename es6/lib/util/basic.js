class Basic {

	constructor() {}
	//Explicit wait for an element on a page
	//elem parameter is the ElementFinder object
	//time parameter is int in milliseconds
	//time is set to 5 seconds if undefined
	waitForElement(elem, waitTime) {
	    waitTime = waitTime || 5000;
	    var EC = protractor.ExpectedConditions;
	    var isClickable = EC.elementToBeClickable(elem);
	    browser.wait(isClickable, waitTime);
	}

	waitToDisappear(elem, waitTime) {
		waitTime = waitTime || 5000;
	    var EC = protractor.ExpectedConditions;
	    var isNotPresent = EC.not(EC.presenceOf(elem));
	    browser.wait(isNotPresent, waitTime);
	}

	waitForVisible(elem, waitTime) {
		waitTime = waitTime || 5000;
	    var EC = protractor.ExpectedConditions;
	    var isVisible = EC.visibilityOf(elem);
	    browser.wait(isVisible, waitTime);
	}

	waitForNotStale(elem, waitTime) {
		waitTime = waitTime || 5000;
	    var EC = protractor.ExpectedConditions;
	    var isNotStale = EC.not(EC.stalenessOf(elem));
	    browser.wait(isNotStale, waitTime);
	}

	//Hover on the element
	//Usually used to expand the list
	//So the link become clickable
	//elem parameter is the ElementFinder object
	hoverOn(elem) {
		elem.isPresent().then(function(present) {
			if (present) {
				browser.actions().mouseMove(elem).mouseMove(elem).perform();
			}
		});
	}

	//Pressing keyboard button
	//Keys shortcuts can be found here
	//http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/Keys.html
	keyboardPress(enumValue) {
        browser.actions().sendKeys(enumValue).perform();
    }

	//Waits until text in an element matches a provided RegEx
	//Throws an error after 10 seconds
	//waitTime is an optional parameter. Set to 5 seconds if not defined
	waitForElementTextToChange(element, textRegex, waitTime) {
		waitTime = waitTime || 5000;
	    return browser.wait(function () {
	        return element.getText().then(function (text) {
	                return textRegex.test(text);
	            },
	            function () {
	                return element.getText().then(function (text) {
	                    return textRegex.test(text);
	                });
	            }
	        );
	    }, waitTime);
	}

	//Waits until element's attribute value will be changed
	//Throws an error after 5 seconds
	//waitTime is an optional parameter. Set to 5 seconds if not defined
	waitForElementValueToChange(element, attribute, value, waitTime) {
		waitTime = waitTime || 5000;
	    return browser.wait(function () {
	        return element.getAttribute(attribute).then(function (text) {
	                return (text.indexOf(value) > -1);
	            },
	            function () {
	                return element.getAttribute(attribute).then(function (text) {
	                    return (text.indexOf(value) > -1);
	                });
	            }
	        );
	    }, waitTime);
	}

	//Waits until there be a certain amount of visible elements
	//Throws an error after 5 seconds by default
	waitForCountToBe(elements, value, waitTime) {
		waitTime = waitTime || 5000;
		return browser.wait(function () {
	        return elements.count().then(function (count) {
	                return (count === value);
	            },
	            function () {
	                return elements.count().then(function (count) {
	                	return (count === value);
	                });
	            }
	        );
	    }, waitTime);
	}

	//Waits until there be more than defined value of visible elements
	//Throws an error after 5 seconds by default
	waitForCountToBeGreaterThan(elements, value, waitTime) {
		waitTime = waitTime || 5000;
		return browser.wait(function () {
	        return elements.count().then(function (count) {
	                return (count > value);
	            },
	            function () {
	                return elements.count().then(function (count) {
	                	return (count > value);
	                });
	            }
	        );
	    }, waitTime);
	}

	//Waits until element will disappear
	//Throws an error after 5 seconds
	//waitTime is an optional parameter. Set to 5 seconds if not defined
	waitForElementToDisappear(elements, waitTime) {
		waitTime = waitTime || 5000;
		return browser.wait(function () {
	        return elements.count().then(function(count) {
	                return (count === 0);
	            },
	            function () {
	                return elements.count().then(function(count) {
	                	return (count === 0);
	                });
	            }
	        );
	    }, waitTime);
	}

    /**
	 * @name clickRandomItem
	 * @description Click random item from the list
	 * @param elems - IWebElements
	 * @returns void
	 */
    clickRandomItem(elems) {
        elems.count()
            .then(function(count) {
            	return (Math.round(Math.random() * count - 1));
            })
	        .then(function(random) {
	            elems.get(random).click();
        });
    }

    //Get the element location and scroll to it
    scrollToElement(elem) {
		elem.getLocation().then(function(location) {
            browser.executeScript("window.scrollBy(" + location.x + "," + location.y + ")", "");
        });
        browser.sleep(200);
    }

    isElementVisible(elems, value) {
    	value = value || 0;
    	var elem = elems.get(value);
    	return elem.isPresent().then(function(present) {
    		return present;
    	});
    }

    //Input parameter is a string with Turkish month
	//Returns the string with English month
	translateMonth(value) {
		var oldValue = value;
		var newValue = value;
		var engMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var turkMonths = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
		var esMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
		var brMonths = ["Jan", "Fev", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
		var length = turkMonths.length;

		for (var i = 0; i < length; i++) {
			if (oldValue.indexOf(turkMonths[i]) != -1) {
				newValue = oldValue.replace(turkMonths[i], engMonths[i]);
				break;
			} else if (oldValue.indexOf(esMonths[i]) != -1) {
				newValue = oldValue.replace(esMonths[i], engMonths[i]);
				break;
			} else if (oldValue.indexOf(brMonths[i]) != -1) {
				newValue = oldValue.replace(brMonths[i], engMonths[i]);
				break;
			}
		}

		return newValue;
	}

	waitUntilPageLoaded(waitTime) {
		waitTime = waitTime || 30000;

		return browser.wait(function () {
			return browser.executeScript("return document.readyState").then(function(result) {
				return (result === "complete");
			});
	    }, waitTime);
	}

	//Compares element text to the regular expression
	//Uses last element in the array if the provided value is greater than elements available
	//Returns bool value
    compareToRegexp(elems, value, regex) {
    	return elems.count().then(function(count) {
    		if (value >= count) {
    			return elems.last().getText().then(function(text) {
    				return regex.test(text);
    			});
    		} else {
    			return elems.get(value).getText().then(function(text) {
    				return regex.test(text);
    			});
    		}
    	});
    }

    //Remove element from a page by id or class
    removeElement(value) {
        var idElem = element(by.xpath('//*[contains(@id,"'+ value +'")]'));
        var classElem = element.all(by.xpath('//*[contains(@class,"'+ value +'")]'));
        
        idElem.isPresent().then(function(present) {
            if (present) {
                browser.executeScript('document.getElementById("' + value + '").remove();');
            }
        });

        classElem.count().then(function(count) {
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    browser.executeScript('document.getElementsByClassName("' + value + '")[0].remove();');
                }
            }
        });
    }
    
    //Hide or show element from the page
    //value can be class or id of the element
    //action shoild be 'hide' or 'show'
    triggerElement(value, action) {
        var idElem = element(by.xpath('//*[@id="'+ value +'"]'));
        var classElem = element.all(by.xpath('//*[@class="'+ value +'"]'));

        (action === 'hide')?(action = 'none'):(action = 'block');

        idElem.isPresent().then(function(present) {
            if (present) {
                browser.executeScript('document.getElementById("' + value + '").style.display = "' + action + '";');
            }
        });

        classElem.count().then(function(count) {
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    browser.executeScript('document.getElementsByClassName("' + value + '")[0].style.display = "' + action + '";');
                }
            }
        });
    }

    //Close alert if exists
    closeAlert() {
        browser.driver.switchTo().alert().then(
            function (alert) { alert.accept(); },
            function (err) {}
        );
    }
}

module.exports = Basic;