const { createDriver } = require('./common/createDriver');
const { HackyGetWebRTCInternals } = require('./common/HackyGetWebRTCInternals');

async function createBrowserAndExecute() {
  const driver = await createDriver();
  try {
    console.log('Getting');
    await driver.get('http://localhost:3001');
    await new Promise((r) => setTimeout(r, 5000));
    await HackyGetWebRTCInternals(driver);
    await driver.quit();
  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { createBrowserAndExecute };
