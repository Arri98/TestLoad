const { By, until } = require('selenium-webdriver');

async function shareTech(driver) {
  try {
    console.log('url');
    await driver.wait(until.elementLocated(By.id('shareCameraButton')), 5000);
    await driver.findElement(By.id('shareCameraButton')).click();
    await driver.findElement(By.id('shareScreenButton')).click();
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { shareTech };
