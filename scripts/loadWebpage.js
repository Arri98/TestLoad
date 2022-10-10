const { By} = require('selenium-webdriver');
const {createDriver} = require("./common/createDriver");
const config = require('../config/config');
const {HackyGetWebRTCInternals} = require('./common/HackyGetWebRTCInternals');


async function getPage(driver){
    try{
        console.log("Getting");
        await driver.get('http://localhost:3001');
        await new Promise(r => setTimeout(r, 5000));
        await HackyGetWebRTCInternals(driver);
        await driver.quit();
    } catch (e) {
        console.log(e);
        await driver.quit();
    }
}



async function createBrowserAndLoad(){
    const driver = await createDriver();
    await getPage(driver);
}




module.exports = {createBrowserAndLoad};
