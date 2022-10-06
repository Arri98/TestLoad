const {createDriver} = require("./createDriver");

const { By, Builder, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const config = require('../config/config');

console.log(config);
async function getPage(driver){
    try{
        await driver.get('https://chotis2.dit.upm.es/room?id=6138c5906a6898ff68835578');
        await driver.wait(until.elementLocated(By.id('username_txt')),3000);
        await driver.findElement(By.id('username_txt')).sendKeys((Math.random() + 1).toString(36).substring(7));
        await driver.findElement(By.id('connect_button')).click();
        await new Promise(r => setTimeout(r, 10000));
        await driver.quit();
    } catch (e) {
        await driver.quit();
    }

}


async function createBrowserAndLoad(){
    const driver = await createDriver();
    await getPage(driver);
}




module.exports = {createBrowserAndLoad};



