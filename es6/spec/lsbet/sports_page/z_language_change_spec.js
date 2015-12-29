var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Language change test on LSBet', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	it('Verify that you can change language to Czech', function(){
		page.i18nWidget().selectLanguage('cs-CZ');
		expect(page.i18nWidget().isLanguage('Čeština')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to German', function(){
		page.i18nWidget().selectLanguage('de-DE');
		expect(page.i18nWidget().isLanguage('Deutsch')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Greek', function(){
		page.i18nWidget().selectLanguage('el-GR');
		expect(page.i18nWidget().isLanguage('Ελληνικά')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Hungarian', function(){
		page.i18nWidget().selectLanguage('hu-HU');
		expect(page.i18nWidget().isLanguage('Magyar')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Italian', function(){
		page.i18nWidget().selectLanguage('it-IT');
		expect(page.i18nWidget().isLanguage('Italiano')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Polish', function(){
		page.i18nWidget().selectLanguage('pl-PL');
		expect(page.i18nWidget().isLanguage('Polski')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Portugal', function(){
		page.i18nWidget().selectLanguage('pt-PT');
		expect(page.i18nWidget().isLanguage('Português')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Romanian', function(){
		page.i18nWidget().selectLanguage('ro-RO');
		expect(page.i18nWidget().isLanguage('Româna')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Russian', function(){
		page.i18nWidget().selectLanguage('ru-RU');
		expect(page.i18nWidget().isLanguage('Русский')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Spanish', function(){
		page.i18nWidget().selectLanguage('es-ES');
		expect(page.i18nWidget().isLanguage('Español')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to Swedish', function(){
		page.i18nWidget().selectLanguage('sv-SE');
		expect(page.i18nWidget().isLanguage('Svenska')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change language to English', function(){
		page.i18nWidget().selectLanguage('en-GB');
		expect(page.i18nWidget().isLanguage('English')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});