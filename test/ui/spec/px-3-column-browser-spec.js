'use strict';

/*
 * Copyright (c) 2013 GE Global Research. All rights reserved.
 *
 * The copyright to the computer software herein is the property of
 * GE Global Research. The software may be used and/or copied only
 * with the written permission of GE Global Research or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */

/**
 * @class UI test spec for this component using https://github.sw.ge.com/DT/webdriver-support.
 *
 * @author
 *
 * TODO: make a selenium "PageObject" out of the toggle switch to provide an interface to expected behavior
 */

var webdriver = require('webdriver-support/node_modules/selenium-webdriver'),
    until = webdriver.until,
    chai = require('chai'),
    webdriverFactory = require('webdriver-support');

chai.use(require('chai-as-promised'));

describe('<%= name %> tests', function () {

    var driver, driverSession;

    before(function() {
        driverSession = webdriverFactory.create();
        driver = driverSession.setup({spec: __filename});
    });

    after(function(done) {
        driverSession.teardown(done);
    });

    afterEach(function (done) {
        driverSession.logState(this.currentTest, done);
    });

    describe('CSS applied', function () {

        before(function() {
            driver.get('/test/ui/fixtures/<%= name %>-fixture.html');
            return driver.wait(until.elementsLocated(webdriver.By.css(".<%= name %>")), 4000);
        });

        it('should be the default background color', function () {
            return chai.expect(driver.findElement(webdriver.By.css(".<%= name %>")).getCssValue("background-color"))
                .to.eventually.equal("rgba(118, 185, 0, 1)");
        });

    });

    describe('Instancing a TestComp', function () {

        it('should automatically instance a <%= name %> from the expected element', function () {
            return chai.expect(driver.findElement(webdriver.By.css("#instancedAutomatically.<%= dxComponentName %>")))
                    .to.eventually.not.be.null;
        });

        it('should use the default options', function () {
            return chai.expect(driver.findElement(webdriver.By.css("#instancedAutomatically.<%= dxComponentName %> .toggler")).getText())
                .to.eventually.equal("Click me!");
        });

        it('should not automatically instance a TestComp without the expected DOM', function () {
            return chai.expect(driver.isElementPresent(webdriver.By.css("#instancedViaJavaScript.<%= dxComponentName %>")))
                .to.eventually.be.false;
        });

        it('should can be instanced via JavaScript using custom options', function () {
            driver.executeScript("$('#instancedViaJavaScript').<%= dxComponentClassName %>({prompt: 'Really click!'});");
            return chai.expect(driver.isElementPresent(webdriver.By.css("#instancedViaJavaScript.<%= dxComponentName %>")))
                .to.eventually.be.true;
        });

        it('should give the new instance the default background color', function () {
            return chai.expect(driver.findElement(webdriver.By.css("#instancedViaJavaScript")).getCssValue("background-color"))
                .to.eventually.equal("rgba(118, 185, 0, 1)");
        });

    });

    describe('Clicking the toggler', function () {

        it('should change color when clicking the toggler', function () {
            driver.findElement(webdriver.By.css("#instancedAutomatically .toggler")).click();
            return chai.expect(driver.findElement(webdriver.By.css("#instancedAutomatically")).getCssValue("background-color"))
                .to.eventually.equal("rgba(238, 51, 36, 1)");
        });

        it('should change color when clicking the toggler on the second instance', function () {
            driver.findElement(webdriver.By.css("#instancedViaJavaScript .toggler")).click();
            return chai.expect(driver.findElement(webdriver.By.css("#instancedAutomatically")).getCssValue("background-color"))
                .to.eventually.equal("rgba(238, 51, 36, 1)");
        });
    });

});