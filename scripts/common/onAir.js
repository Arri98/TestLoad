const { By, until, logging} = require('selenium-webdriver');
const {write} = require("./writeToFile");

async function onAir(driver) {
    try {

        await driver.wait(until.elementLocated(By.id('onAir')), 5000);
        await driver.findElement(By.id('onAir')).click();
        await driver.wait(until.elementLocated(By.className('notification__button notification__button--accept role=')), 5000);
        await driver.findElement(By.className('notification__button notification__button--accept role=')).click();
        driver.manage().logs().get(logging.Type.BROWSER)
            .then(function(entries) {
                entries.forEach(function(entry) {
                    write(entry.level.name, entry.message);
                    console.log('[%s] %s', entry.level.name, entry.message);
                });
            });
    } catch (e) {
        console.error(e);
        await driver.quit();
    }
}

module.exports = { onAir };
