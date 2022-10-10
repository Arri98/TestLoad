const { By, Builder, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
let config = require('../../config/config');

async function createDriver(params){
    config = config ? config : {};
    params = params ? params : {};
    config = {...config, ...params};
    const service = new chrome.ServiceBuilder(`./drivers/${config.cromeDriver}`);
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--autoplay-policy=no-user-gesture-required');
    if(config.headless){
        options.addArguments('--headless');
    }
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-features=PreloadMediaEngagementData,AutoplayIgnoreWebAudio,MediaEngagementBypassAutoplayPolicies');
    options.addArguments('--allow-file-access-from-files');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--disable-gpu');
    options.addArguments('--use-fake-device-for-media-stream');
    options.addArguments('--use-fake-ui-for-media-stream');
    if(config.videoFile){
        options.addArguments(`--use-file-for-fake-video-capture=./files/${config.videoFile}`);
    }


    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(service)
        .build();
    return  driver;
}

module.exports = {createDriver}
