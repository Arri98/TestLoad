const { Builder, logging} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
let config = require('../../config/config');

async function createDriver(params) {
  const parsedConfig = config || {};
  const parsedParams = params || {};
  config = { ...parsedConfig, ...parsedParams };
  const service = new chrome.ServiceBuilder(`./drivers/${config.cromeDriver}`);
  const options = new chrome.Options();
  options.addArguments('--no-sandbox');
  options.addArguments('--autoplay-policy=no-user-gesture-required');
  if (config.headless) {
    options.addArguments('--headless=new');
  }
  options.addArguments("--window-size=1920,1080");
  options.addArguments("--ignore-certificate-errors");
  options.addArguments("force-device-scale-factor=0,5");
  options.addArguments('--disable-infobars');
  options.addArguments('--disable-features=PreloadMediaEngagementData,AutoplayIgnoreWebAudio,MediaEngagementBypassAutoplayPolicies');
  options.addArguments('--allow-file-access-from-files');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');
  options.addArguments('--unsafely-treat-insecure-origin-as-secure=http://138.4.7.114:3000/');
  options.addArguments('--use-fake-ui-for-media-stream');
  options.addArguments('--use-fake-device-for-media-stream');
  if (config.videoFile) {
    options.addArguments(`--use-file-for-fake-video-capture=./files/${config.videoFile}`);
  }

  if (config.audioFile) {
    options.addArguments(`--use-file-for-fake-audio-capture=./files/${config.audioFile}`);
  }

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(service)
    .build();

  return driver;
}

module.exports = { createDriver };
