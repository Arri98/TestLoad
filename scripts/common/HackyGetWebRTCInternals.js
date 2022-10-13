const { By } = require('selenium-webdriver');

async function HackyGetWebRTCInternals(driver) {
  try {
    await driver.get('chrome://webrtc-internals');
    const button = await driver.findElement(By.xpath("//*[text()='Download the PeerConnection updates and stats data']"));
    const checkBox = await driver.findElement(By.xpath("//input[@type='checkbox']"));
    const summary = await driver.findElement(By.xpath('//summary'));
    await new Promise((r) => setTimeout(r, 1000));
    await summary.click();
    await checkBox.click();
    await button.click();
    await new Promise((r) => setTimeout(r, 5000));
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { HackyGetWebRTCInternals };
