var AccountNetentPage = require('../../../source/general/pages/account_netent_page.js');

describe('Account Netent bonus page verification', function(){
	var page = new AccountNetentPage();

	beforeAll(function(){
		page.visit('');
		page.login();
		page.visit('account/netent_bonus');
	});

	afterAll(function(){
		page.forceLogout();
	});

	beforeEach(function(){
	});

	afterEach(function(){
	});

	it('Verify that Bakiye balance is showed in the correct format', function(){
		expect(page.bonusBalance('balance')).toMatch(/\$[0-9]+\.[0-9]+/);
	});

	it('Verify that BONUS balance is showed in the correct format', function(){
		expect(page.bonusBalance('bonus')).toMatch(/\$[0-9]+\.[0-9]+/);
	});

	it('Verify that Harcanan Miktar balance is showed in the correct format', function(){
		expect(page.bonusBalance('wagered')).toMatch(/\$[0-9]+\.[0-9]+/);
	});

	it('Verify that Kalan Miktar balance is showed in the correct format', function(){
		expect(page.bonusBalance('left_to_wager')).toMatch(/\$[0-9]+\.[0-9]+/);
	});
});