var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Programs page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('programs');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/programs');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('List All programs');
            });
        });
    } );

    // test.it( 'Displays all programs', function() {
    //     var programs = driver.findElements(By.tagName('td'));
    //
    //     programs
    //         .then(function( elements ) {
    //             return elements[0].findElement(By.name('Sets'));
    //         })
    //         .then(function(element) {
    //             return element.getText();
    //         })
    //         .then(function(text) {
    //             expect(text).to.equal('5');
    //         } );
    //
    // } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});


