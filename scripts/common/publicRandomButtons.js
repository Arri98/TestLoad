const { By, until, logging} = require('selenium-webdriver');
const {write} = require("./writeToFile");

async function randomPublic(driver, publicAddr) {
    try {
        await driver.get(publicAddr);
        await driver.wait(until.elementLocated(By.id('connect')), 5000);
        await driver.findElement(By.id('connect')).click();
        await driver.wait(until.elementLocated(By.id('spokenLanguagesJS')), 5000);
        const inputList = await driver.findElement(By.id('spokenLanguagesJS'));
        const buttons = await inputList.findElements(By.className('languageContainer__input'));

        while (true){
            let number = Math.floor(Math.random()*buttons.length);
            if (number === buttons.length){
                number--;
            }
            buttons[number].click();
            await new Promise((r) => setTimeout(r, 10000));
            driver.manage().logs().get(logging.Type.BROWSER)
                .then(function(entries) {
                    entries.forEach(function(entry) {
                        write(entry.level.name, entry.message);
                        console.log('[%s] %s', entry.level.name, entry.message);
                    });
            });
        }
    } catch (e) {
        console.log(e);
        await driver.quit();
    }
}

module.exports = { randomPublic };
