const {createDriver} = require("./common/createDriver");

const { By, until } = require('selenium-webdriver');



async function createBrowserAndExecute(){
    const driver = await createDriver();
    try{
        await driver.get('https://chotis2.dit.upm.es/room?id=6138c5906a6898ff68835578');
        await driver.wait(until.elementLocated(By.id('username_txt')),5000);
        await driver.findElement(By.id('username_txt')).sendKeys((Math.random() + 1).toString(36).substring(7));
        await driver.findElement(By.id('connect_button')).click();
        await new Promise(r => setTimeout(r, 30000));
        await driver.quit();
    } catch (e) {
        console.log(e);
        await driver.quit();
    }
}

module.exports = {createBrowserAndExecute};



