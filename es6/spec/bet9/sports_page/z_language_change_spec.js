var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Language change test on LSBet', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	it('Verify that you can change language to Spanish', function(){
		page.i18nWidget().selectLanguage('es-ES');
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Brazil', function(){
		page.i18nWidget().selectLanguage('pt-BR');
		expect(page.noError()).toBe(true);
	});

});