var SportsPage = require('../../../source/general/pages/sports_page.js');

describe('Timezone change test on LSBet', function(){
	var page = new SportsPage();

	beforeAll(function(){
		page.visit('');
	});

	afterAll(function(){
	});

	it('Verify that you can change timezone to -11', function(){
		page.i18nWidget().selectTimezone('-11:00');
		expect(page.i18nWidget().isTimezone('-11')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -10', function(){
		page.i18nWidget().selectTimezone('-10:00');
		expect(page.i18nWidget().isTimezone('-10')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -8', function(){
		page.i18nWidget().selectTimezone('-08:00');
		expect(page.i18nWidget().isTimezone('-8')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -7', function(){
		page.i18nWidget().selectTimezone('-07:00');
		expect(page.i18nWidget().isTimezone('-7')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -6', function(){
		page.i18nWidget().selectTimezone('-06:00');
		expect(page.i18nWidget().isTimezone('-6')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -5', function(){
		page.i18nWidget().selectTimezone('-05:00');
		expect(page.i18nWidget().isTimezone('-5')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -4:30', function(){
		page.i18nWidget().selectTimezone('-04:30');
		expect(page.i18nWidget().isTimezone('-4:30')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -4', function(){
		page.i18nWidget().selectTimezone('-04:00');
		expect(page.i18nWidget().isTimezone('-4')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -4', function(){
		page.i18nWidget().selectTimezone('-04:00');
		expect(page.i18nWidget().isTimezone('-4')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -3', function(){
		page.i18nWidget().selectTimezone('-03:00');
		expect(page.i18nWidget().isTimezone('-3')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -2', function(){
		page.i18nWidget().selectTimezone('-02:00');
		expect(page.i18nWidget().isTimezone('-2')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to -1', function(){
		page.i18nWidget().selectTimezone('-01:00');
		expect(page.i18nWidget().isTimezone('-1')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to 00:00', function(){
		page.i18nWidget().selectTimezone('00:00');
		expect(page.i18nWidget().isTimezone('')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +1', function(){
		page.i18nWidget().selectTimezone('01:00');
		expect(page.i18nWidget().isTimezone('+1')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +2', function(){
		page.i18nWidget().selectTimezone('02:00');
		expect(page.i18nWidget().isTimezone('+2')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +3', function(){
		page.i18nWidget().selectTimezone('03:00');
		expect(page.i18nWidget().isTimezone('+3')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +4', function(){
		page.i18nWidget().selectTimezone('04:00');
		expect(page.i18nWidget().isTimezone('+4')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +4:30', function(){
		page.i18nWidget().selectTimezone('04:30');
		expect(page.i18nWidget().isTimezone('+4:30')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +5', function(){
		page.i18nWidget().selectTimezone('05:00');
		expect(page.i18nWidget().isTimezone('+5')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +5:30', function(){
		page.i18nWidget().selectTimezone('05:30');
		expect(page.i18nWidget().isTimezone('+5:30')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +5:45', function(){
		page.i18nWidget().selectTimezone('05:45');
		expect(page.i18nWidget().isTimezone('+5:45')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +6', function(){
		page.i18nWidget().selectTimezone('06:00');
		expect(page.i18nWidget().isTimezone('+6')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +6:30', function(){
		page.i18nWidget().selectTimezone('06:30');
		expect(page.i18nWidget().isTimezone('+6:30')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +7', function(){
		page.i18nWidget().selectTimezone('07:00');
		expect(page.i18nWidget().isTimezone('+7')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +8', function(){
		page.i18nWidget().selectTimezone('08:00');
		expect(page.i18nWidget().isTimezone('+8')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +9', function(){
		page.i18nWidget().selectTimezone('09:00');
		expect(page.i18nWidget().isTimezone('+9')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +9:30', function(){
		page.i18nWidget().selectTimezone('09:30');
		expect(page.i18nWidget().isTimezone('+9:30')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +10', function(){
		page.i18nWidget().selectTimezone('10:00');
		expect(page.i18nWidget().isTimezone('+10')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +11', function(){
		page.i18nWidget().selectTimezone('11:00');
		expect(page.i18nWidget().isTimezone('+11')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +12', function(){
		page.i18nWidget().selectTimezone('12:00');
		expect(page.i18nWidget().isTimezone('+12')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +13', function(){
		page.i18nWidget().selectTimezone('13:00');
		expect(page.i18nWidget().isTimezone('+13')).toBe(true);
		expect(page.noError()).toBe(true);
	});

	it('Verify that you can change timezone to +14', function(){
		page.i18nWidget().selectTimezone('14:00');
		expect(page.i18nWidget().isTimezone('+14')).toBe(true);
		expect(page.noError()).toBe(true);
	});

});