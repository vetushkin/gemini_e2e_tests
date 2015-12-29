var VirtualsMenu = require('../widgets/virtuals_menu.js');
var virtualsMenu = new VirtualsMenu();
var BasePage = require('../../../lib/base/base_page');
var Basic = require('../../../lib/util/basic');
var basic = new Basic();

var Betslip = require('../widgets/virtuals_betslip.js');
var betslip = new Betslip();

class VirtualsPage extends BasePage
{
	constructor()
	{
		super();
		//Tab selector
		this.tabSelector = ".//div[@id='virtualsPage']//*[contains(@id,'menu_')]";
		//Unique XPath for elements that you can bet on (every 1st element from each row) - fix in order to test multiple bets on Football
		this.uniqueGameBets = ".//*[contains(@id, 'Events')][not(contains(@style,'none'))][not(contains(@class,'other_events'))]//*[contains(@id, 'Outcome_')][1]";
		//XPath used only when testing multibets on Football (selects the first bet option from each football match)
		this.footballGameBets= ".//*[contains(@id, 'Games_')]/div[1]/*[contains(@id, 'outcomes_')]/div[1]";
	}

	//returns virtualBetslipWdiget widget
	betslip()
	{
		return betslip;
	}

	//Selector for one of the game tabs
	gameSelector(value)
	{
		value = value || 0;
		var elements = element.all(by.xpath(this.tabSelector));
		elements.get(value).click();
	}

	//Method to add bets to betslip (only Football can have more than 1 bet in the betslip!)
	addBets(value)
	{
		value = value || 0;
		//Get all the 1st option you can bet on, from each football match(8 in total)
		var footballElements = element.all(by.xpath(this.footballGameBets));
		//Get all the possible bets[1st element, every row] that you can bet on
		var elements = element.all(by.xpath(this.uniqueGameBets));
		//Only used when a single bet is tested
		if(value < 2)
		{
			elements.get(0).click();
		}
		//Sentinel value in order to test multibets in Football. Temporary solution (i*10) because XPath should be kept unique...
		if(value >=2 && value <=8)
		{
			for(var i=0; i < value; i++)
			{
					footballElements.get(i).click();
			}
		}
	}

	//Move to the main frame or iFrame which holds all the elements, betslip etc..
	moveToFrame(value)
	{
		value = value;
		if(typeof value === "string" || typeof value === "number")
		{
			//move to a frame by index or by string
			browser.switchTo().frame(value);
		}

		if(value === "default")
		{
			browser.switchTo().defaultContent();
		}
	}
}

module.exports = VirtualsPage;