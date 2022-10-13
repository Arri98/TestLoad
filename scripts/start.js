const config = require('../config/config');
const {createBrowserAndExecute} = require(`./${config.script}`);


for(let i=0; i<config.browserPerContainer; i++) {
    createBrowserAndExecute();
}
