let config = {};

config.browserPerContainer = 1;
config.headless = false;
config.script = 'loadWebpage.js'
config.cromeDriver = 'chromedriver106';
config.videoFile = 'fakeCamera.mjpeg';

module.exports = config;
