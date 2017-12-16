var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noDiet;
var navBarSelector ;

test.describe('update Diets page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('updateDietTest');
        driver.get('http://localhost:3000/#/updateDiet');
        driver.wait(until.elementLocated(By.tagName('h1')), 20000);
        driver.findElements(By.tagName('tr'))
            .then( function( diet ) {
                noDiet = diet.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/updateDiet');
        driver.wait(until.elementLocated(pageSelector), 20000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on update Diets page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header on update diets page', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Time to update a Diet');
            });
        });
    } );

    test.it( 'Updates a diet from the form', function() {
        var input = driver.findElement(By.id('Protein'));
        input
            .then(function() {
                return driver.findElement(By.id('Protein'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('50');
            } )
        var input = driver.findElement(By.id('Fats'));
        input
            .then(function() {
                return driver.findElement(By.id('Fats'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('30');
            } )
        var input = driver.findElement(By.id('Carbs'));
        input
            .then(function() {
                return driver.findElement(By.id('Carbs'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('50');
            } )
        var input = driver.findElement(By.id('numMeals'));
        input
            .then(function() {
                return driver.findElement(By.id('numMeals'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('2');
            } )
        var input = driver.findElement(By.id('MealType'));
        input
            .then(function() {
                return driver.findElement(By.id('MealType'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Lunch');
            } )
        var input = driver.findElement(By.id('MealCalories'));
        input
            .then(function() {
                return driver.findElement(By.id('MealCalories'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('400');
            } )
        var input = driver.findElement(By.id('MealTime'));
        input
            .then(function() {
                return driver.findElement(By.id('MealTime'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('13.0');
            } )

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )

            .then(function() {
                driver.wait(until.elementLocated(By.id('updateDietTest')),20000);
                return driver.findElements(By.tagName('tr'));
            })
            .then( function( diet ) {
                expect(diet.length).to.equal(noDiet+ 0) ;
                return diet;
            })

    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});


