const config = {};

config.headless = true;
config.script = 'createSmarterpSessions.js';
config.cromeDriver = '';
config.videoFile = false;
config.audioFile = false;
config.useInscure = false;
config.unscureIP = ''; // http://138.4.7.114:3000/
config.smarterpURL = 'localhost';
config.iddleParticipants = true;

module.exports = config;
