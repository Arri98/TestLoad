const { By, until, logging} = require('selenium-webdriver');
const {write} = require("./writeToFile");

async function shareTech(driver) {
  try {
    console.log('url');
    await driver.wait(until.elementLocated(By.id('shareCameraButton')), 5000);
    await driver.findElement(By.id('shareCameraButton')).click();
    await driver.findElement(By.id('shareScreenButton')).click();
    driver.manage().logs().get(logging.Type.BROWSER)
        .then(function(entries) {
          entries.forEach(function(entry) {
            write(entry.level.name, entry.message);
            console.log('[%s] %s', entry.level.name, entry.message);
          });
        });
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { shareTech };
