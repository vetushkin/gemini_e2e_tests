var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Verify that footer links dont show errors', function(){
	var page = new SportsPage();

	beforeAll(function(){
	});

	afterAll(function(){		
	});

	beforeEach(function(){
		page.visit('');	
	});

	afterEach(function(){
	});

	for (let i = 0; i < 3; i++) {
		it('Verify that first column footer link #'+ (i+1) +' doesnt show an error page', function(){
			page.footer().clickLink('infoBottom', i);
			expect(page.noError()).toBe(true);
		});
	}

});