let config = {};

config.browserPerContainer = 5;
config.headless = true;
config.script = 'loadChotis.js'
config.cromeDriver = 'chromedriver106';
config.videoFile = 'fakeCamera.mpeg';

module.exports = config;
