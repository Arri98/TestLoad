const { By, until } = require('selenium-webdriver');

async function onAir(driver) {
    try {

        await driver.wait(until.elementLocated(By.id('onAir')), 5000);
        await driver.findElement(By.id('onAir')).click();
        await driver.wait(until.elementLocated(By.className('notification__button notification__button--accept role=')), 5000);
        await driver.findElement(By.className('notification__button notification__button--accept role=')).click();
    } catch (e) {
        console.error(e);
        await driver.quit();
    }
}

module.exports = { onAir };
