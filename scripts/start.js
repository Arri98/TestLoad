const config = require('../config/config');

const { createBrowserAndExecute } = require(`./${config.script}`);

createBrowserAndExecute();
