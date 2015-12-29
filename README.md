# E2E test suite for Offside gaming platform

E2E tests using [Protractor](http://angular.github.io/protractor) and [Jasmine](http://jasmine.github.io/)

## Installation of test environment 

### Install Node (IO.js)

[IO.js](https://iojs.org/) 

`brew install iojs` on Mac OS X

### Install Protractor

[Protractor](http://angular.github.io/protractor) E2E testing framework and its dependencies 

`npm install -g protractor` 

Note: Will also install dependencies like Jasmine etc

## Update & start the web driver

```
webdriver-manager update
webdriver-manager start
```

### Install local dev dependencies

`npm install`

## Checkout test suite

`git clone https://github.com/smigit/protractor_e2e_tests.git e2e-offside`

## Configuration

Edit `conf.js` file to set the HTTP basic & form authentication passwords:

```js
params: {
  test_env: {
   url: 'stage.lsbet.com',
   context: '/en-GB/sportsbook/',
   user: 'stage',
   password: '*******'
  },
  lsbet_stg_opts: {
   url: 'stage.lsbet.com',
   context: '/en-GB/sportsbook/',
   user: 'autoStageLSBet',
   password: '*******'
  },
  debug: false
}
```

### Development

Watch file changes in `/es6` folder. Babel will compile to ES5 javascript.

`gulp`

### Design

Pages can consist of multiple widgets. A widget can be on multiple pages.

- Write Page Objects in `es6/pages` folder
- Write Widgets in `es6/pages/widgets` folder
- Pages can extend other Pages
- Widgets can extend other Widgets
- Pages can use Widgets

- Write specs in `es6/spec` folder
- Each spec should be a Page spec, specifying behavior and appearance for a single page 
- Complex pages such as Home, Live and Prematch can have their own subfolders
- Spec page folders can have section specs to test a particular section of a page
- import Page Objects to be used for each page spec

### General recommendations

 - Created tests should be approved before committing to the master branch
 - Check for `webdriver-manager`, `protractor` and `npm` packages updates daily
 - Use private protractor configuration files `protractor.conf.private.js` when creating tests
 - Do not update `protractor.conf_no_pass.js` with real username / password

### Naming conventions

 - Use camelCase for methods `closePopup() {}` and variables `var loginButton`
 - Avoid using more than three words in a method name
 - Method names should be self-explanatory `selectGame(label); enterText(param); clickLink(param)`
 - Methods that return a bool value should be named `isLoaded()` for example
 - Files with finished/approved tests should be named *_spec.js `withdraw_page_spec.js`
 - In progress tests files should be named *_test.js `withdraw_page_test.js`

### Creating Page-Objects

 - Use the 'method chaining' technic to avoid a duplication `page.getField('user_email').enterText('a@a.a');`
 - Write comments for complicated methods
 - Avoid using selectors that search elements by text
 - Move methods that can be used on all pages/methods to base classes `es6/pages/base`
 - Create util methods in the Basic class `es6/pages/util/basic.js`
 - Use `browser.sleep(5000)` only for the debugging purposes. Remove all sleeps from final tests
 - Implicit wait value should always be set to 1 second or less
 - Use explicit waits for AJAX elements on a page

### Creating tests in Jasmine

 - Avoid creating objects and variables and using loops in tests
 - Make sure your final test is stable. If one of the tests fails others won't
 - Every test file should contain only one 'describe' block. 'describe' equal 'user story'
 - Avoid manual navigation if the tested page can be opened by URL

### Run test suite

Run all tests: `protractor conf.js` 
   
Run individual specs:

`protractor conf.js --specs es5/spec/forvetbet/account/history_filter_spec.js`

Run multiple specs at once:

You can use asterisk(*) in the path name to run multiple specs.

By running the command below protractor will run the next specs: registration_part1_spec.js, registration_part2_spec.js and registration_part3_spec.js
`protractor conf.js --specs es5/spec/forvetbet/account/registration_*_spec.js`

By running the command below protractor will run all specs inside the folder.
`protractor conf.js --specs es5/spec/forvetbet/account/*_spec.js`


TODO...

### Translations

Uses [i18n](https://github.com/mashpie/i18n-node) for node

[i18n api](https://github.com/mashpie/i18n-node/blob/master/test/i18n.api.js)

```js
var i18n = require('i18n');

i18n.configure({
  locales: ['en', 'de'],
  directory: './locales',
  register: global
});
```

### Widgets config

Configuration of texts to tests for can be configured via YAML files in `/configand `config/widgets`

This is in order to avoid hard coding strings directly in the tests.

Instead it should be done something like this:

```
get(menuItem(widgets.mainMenu.item[0]))`
get(menuItem(texts.service))
```

This way we can declare and maintain the textual content external to the specs.

Combined with translations using I18n:

`get(menuItem(I18n.t(texts.service)))`

This way we can run the same tests on multiple apps each with their own translations!

##Scripts to run from jenkins or any linux shell script
You can find set of shell scripts in scripts directory. By default the are supposed to stays outside of protractor_e2e_tests directory.
Things you need to do in order to use them are:
1. Set display if you will run on machine without X - set_display.sh. Run it without parameters.
2. Run the main scrip called run_protractor.sh. It will pull latest code, start Selenium server and run tests. It is working with two arguments. The first one is browser name and the seccond suite name. Suite names are set in your protractor config file. Your shell should look like: ./run_protractor.sh -b firefox/chrome -s suiteName
