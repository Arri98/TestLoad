const { By, until } = require('selenium-webdriver');

async function log(driver, user, url) {
  try {
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys(user.email);
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.findElement(By.id('password')).sendKeys(user.password);
    await driver.findElement(By.xpath('//input[@type=\'submit\']')).click();
    await driver.get(url);
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { log };
