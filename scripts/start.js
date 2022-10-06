const config = require('../config/config');
const {createBrowserAndLoad} = require(`./${config.script}`);


for(let i=0; i<config.browserPerContainer; i++) {
    createBrowserAndLoad();
}
