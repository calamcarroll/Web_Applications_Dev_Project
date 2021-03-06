var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noPrograms;
var navBarSelector ;

test.describe('add Programs page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('addPrograms');
        driver.get('http://localhost:3000/#/addProgram');
        driver.wait(until.elementLocated(By.tagName('h1')), 2000);
        driver.findElements(By.tagName('tr'))
            .then( function( programs ) {
                noPrograms = programs.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/addProgram');
        driver.wait(until.elementLocated(pageSelector), 2000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on add programs page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Time to create a program');
            });
        });
    } );

    test.it( 'accepts a program and displays in list', function() {
        var input = driver.findElement(By.id('MuscleType'));
        input
            .then(function() {
                return driver.findElement(By.id('MuscleType'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Legs');
            } )
        var input = driver.findElement(By.id('ExerciseName'));
        input
            .then(function() {
                return driver.findElement(By.id('ExerciseName'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Squats');
            } )
        var input = driver.findElement(By.id('Sets'));
        input
            .then(function() {
                return driver.findElement(By.id('Sets'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('4');
            } )
        var input = driver.findElement(By.id('Reps'));
        input
            .then(function() {
                return driver.findElement(By.id('Reps'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('8');
            } )
        var input = driver.findElement(By.id('RestTime'));
        input
            .then(function() {
                return driver.findElement(By.id('RestTime'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('60');
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

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )



    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});


