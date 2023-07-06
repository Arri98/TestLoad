const { By, until, logging} = require('selenium-webdriver');
const { createDriver } = require('./common/createDriver');

async function createBrowserAndExecute(index) {
    const driver = await createDriver();
    try {
        await driver.get('http://138.4.7.114:3000/');
        await driver.wait(until.elementLocated(By.id('email')), 5000);
        await driver.findElement(By.id('email')).sendKeys('student'+(index+1)+'@test.com');
        await driver.wait(until.elementLocated(By.id('password')), 5000);
        await driver.findElement(By.id('password')).sendKeys('1234');
        await driver.findElement(By.xpath('//input[@type=\'submit\']')).click();
        await driver.wait(until.elementLocated(By.xpath('//a[@href=\'/vcr/0045f5de-9571-41e8-8e7c-21b1ae9c8379\']')), 5000);
        await driver.findElement((By.xpath('//a[@href=\'/vcr/0045f5de-9571-41e8-8e7c-21b1ae9c8379\']'))).click();
        console.log('enter');
        await new Promise((r) => setTimeout(r, 10000));
        driver.manage().logs().get(logging.Type.BROWSER)
            .then(function(entries) {
                entries.forEach(function(entry) {
                    console.log('[%s] %s', entry.level.name, entry.message);
                });
                driver.quit();
            });

    } catch (e) {
        console.log(e);
        await driver.quit();
    }
}

module.exports = { createBrowserAndExecute };
