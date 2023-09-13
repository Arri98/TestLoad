const { By, until, logging } = require('selenium-webdriver');
const { createDriver } = require('./common/createDriver');

async function createBrowserAndExecute(index) {
  const driver = await createDriver();
  try {
    await driver.get('http://138.4.7.114:3000/');
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys(`student${index + 1}@test.com`);
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.findElement(By.id('password')).sendKeys('1234');
    await driver.findElement(By.xpath('//input[@type=\'submit\']')).click();
    await driver.wait(until.elementLocated(By.xpath('//a[@href=\'/vcr/267c0503-a57f-46b4-a27b-2f1ddb92c5a8\']')), 5000);
    await driver.findElement((By.xpath('//a[@href=\'/vcr/267c0503-a57f-46b4-a27b-2f1ddb92c5a8\']'))).click();
    console.log('enter');
    await new Promise((r) => setTimeout(r, 100000));
    driver.manage().logs().get(logging.Type.BROWSER)
      .then((entries) => {
        entries.forEach((entry) => {
          console.log('[%s] %s', entry.level.name, entry.message);
        });
        driver.quit();
      });
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { createBrowserAndExecute };
