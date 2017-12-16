var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noRegister;
var navBarSelector ;

test.describe('Register Page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('register');
        driver.get('http://localhost:3000/#/Register');
        driver.wait(until.elementLocated(By.tagName('h2')), 2000);
        driver.findElements(By.tagName('tr'))
            .then( function( user ) {
                noUser = user.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/Register');
        driver.wait(until.elementLocated(pageSelector), 2000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on the register page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header the register page', function() {
        driver.findElement(By.tagName('h2')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Registration Form');
            });
        });
    } );

    test.it( 'Registers a user from the form', function() {
        var input = driver.findElement(By.id('Username'));
        input
            .then(function() {
                return driver.findElement(By.id('Username'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('EoinC123');
            } )
        var input = driver.findElement(By.id('FirstName'));
        input
            .then(function() {
                return driver.findElement(By.id('FirstName'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Eoin');
            } )
        var input = driver.findElement(By.id('LastName'));
        input
            .then(function() {
                return driver.findElement(By.id('LastName'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Coogan');
            } )
        var input = driver.findElement(By.id('Email'));
        input
            .then(function() {
                return driver.findElement(By.id('Email'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('eoinc@gmail.com');
            } )
        var input = driver.findElement(By.id('Password'));
        input
            .then(function() {
                return driver.findElement(By.id('Password'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('12345');
            } )
        var input = driver.findElement(By.id('Weight'));
        input
            .then(function() {
                return driver.findElement(By.id('Weight'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('100');
            } )
        var input = driver.findElement(By.id('Height'));
        input
            .then(function() {
                return driver.findElement(By.id('Height'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('107');
            } )

        var input = driver.findElement(By.id('BodyFat'));
        input
            .then(function() {
                return driver.findElement(By.id('BodyFat'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('12');
            } )

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )

            .then(function() {
                driver.wait(until.elementLocated(By.id('register')),20000);
                return driver.findElements(By.tagName('tr'));
            })


    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});


