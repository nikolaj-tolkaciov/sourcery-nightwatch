var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('h1');

        browser.element('css selector', '#react-select-2--value', function (result) {
            if (result.status != -1) {
                browser.click('#react-select-2--value');
            }
        });

        browser.element('css selector', '[aria-label="Lukas Klimišinas"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Lukas Klimišinas"]');
            }
        });

        browser.assert.containsText('#react-select-2--value-item', 'Lukas Klimišinas');

        browser.element('css selector', '#react-select-3--value', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '#react-select-3--value');
            }
        });

        browser.element('css selector', '[aria-label="Admin"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Admin"]');
            }
        });

        browser.assert.containsText('#react-select-3--value-item', 'Admin');

        browser.element('css selector', '[type="submit"]', function (result) {
            if (result.status != -1) {
                browser
                    .click('css selector', '[type="submit"]')
                    .waitForElementVisible('.user-info__title');
            }
        });

        browser.waitForElementVisible('.user-info__title')
            .assert.containsText('.user-info__title', 'Lukas Klimišinas')
            .waitForElementVisible('.main-nav')
            .assert.containsText('.main-nav', 'Time Logging')
            .assert.containsText('.main-nav', 'Invoices')
            .assert.containsText('.main-nav', 'Projects')
            .assert.containsText('.main-nav', 'Clients')
            .assert.containsText('.main-nav', 'Time Entries')
            .assert.containsText('.main-nav', 'Tasks')
            .assert.containsText('.main-nav__link--active', 'Time Logging')
            .assert.cssProperty('.main-nav__link--active', 'color', 'rgba(64, 76, 237, 1)')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};