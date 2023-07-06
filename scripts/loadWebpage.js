const { createDriver } = require('./common/createDriver');
const { HackyGetWebRTCInternals } = require('./common/HackyGetWebRTCInternals');
const { By, until } = require('selenium-webdriver');

async function createBrowserAndExecute(index, sessionId) {
  await new Promise((r) => setTimeout(r, Math.random()*20000));
  let random = Math.random()*50;
  let driver = await createDriver();;
  /*
  if (random > 40){
    console.log(random);
     driver = await createDriver({headless: false});
  }else{
     driver = await createDriver({headless: true});
  }*/
  try {
    console.log('Getting');
    await driver.get('http://localhost:3001/?sessionId='+sessionId+'&id='+index);
    await driver.wait(until.elementLocated(By.id("startButton")), 1000);
    let button = await driver.findElement(By.id("startButton"));
    button.click();
    await new Promise((r) => setTimeout(r, 90000));
    //await HackyGetWebRTCInternals(driver);

    await driver.quit();
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { createBrowserAndExecute };
