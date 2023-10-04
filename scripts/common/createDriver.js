const { Builder, logging} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const config = require('../../config/config');
const prefs = new logging.Preferences();
prefs.setLevel(logging.Type.BROWSER, logging.Level.WARNING);

async function createDriver(params) {
  const parsedConfig = config || {};
  const parsedParams = params || {};
  const newConfig = { ...parsedConfig, ...parsedParams };
  const service = new chrome.ServiceBuilder(`./drivers/chromedriver`);
  const options = new chrome.Options();
  options.addArguments('--no-sandbox');
  options.addArguments('--autoplay-policy=no-user-gesture-required');
  options.addArguments('--headless=new');
  options.addArguments('--window-size=1920,1080');
  options.addArguments('force-device-scale-factor=0,5');
  options.addArguments('--disable-infobars');
  options.addArguments('--disable-features=PreloadMediaEngagementData,AutoplayIgnoreWebAudio,MediaEngagementBypassAutoplayPolicies');
  options.addArguments('--allow-file-access-from-files');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');
  options.addArguments('--detach-driver');

  options.addArguments('--ignore-certificate-errors');
  if(newConfig.unscureIP){
    options.addArguments(`--unsafely-treat-insecure-origin-as-secure=${newConfig.unscureIP}`);
  }
  options.addArguments('--use-fake-ui-for-media-stream');
  options.addArguments('--use-fake-device-for-media-stream');
  if (newConfig.videoFile) {
    options.addArguments(`--use-file-for-fake-video-capture=./files/${newConfig.videoFile}`);
  }

  if (newConfig.audioFile) {
    options.addArguments(`--use-file-for-fake-audio-capture=./files/${newConfig.audioFile}`);
  }

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setLoggingPrefs(prefs)
    .setChromeService(service)
    .build();

  return driver;
}

module.exports = { createDriver };
