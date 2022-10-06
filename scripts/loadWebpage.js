const {createDriver} = require("./createDriver");
const config = require('../config/config');


async function getPage(driver){
    try{
        console.log("Getting");
        await driver.get('http://localhost:3001');
        await new Promise(r => setTimeout(r, 30000));
        await driver.quit();
    } catch (e) {
        console.log("Caught error, ending");
        await driver.quit();
    }
}



async function createBrowserAndLoad(){
    const driver = await createDriver();
    await getPage(driver);
}




module.exports = {createBrowserAndLoad};
