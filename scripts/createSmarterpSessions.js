const { createDriver } = require('./common/createDriver');
const sessionConfig = require('../config/smarterpConfig');
const config = require('../config/config');
const { log } = require('./common/logSmarterp');
const { interpret } = require('./common/interpret');
const { shareTech } = require('./common/shareTech');
const {onAir} = require("./common/onAir");
const {randomPublic} = require("./common/publicRandomButtons");

async function createBrowserAndExecute() {
  try {
    const tech = await createDriver(sessionConfig.tech);
    await tech.get(config.smarterpURL);
    await log(tech, sessionConfig.tech, sessionConfig.session);
    await shareTech(tech);
    const operator = await createDriver(sessionConfig.operator);
    await operator.get(config.smarterpURL);
    await log(operator, sessionConfig.operator, sessionConfig.session);
    await onAir(operator);

    for (let i = 0; i < sessionConfig.interpreters.length; i++) {
      /* eslint-disable */
      const interpreterConfig = sessionConfig.interpreters[i];
      const interpreter = await createDriver(interpreterConfig);
      await interpreter.get(config.smarterpURL);
      await log(interpreter, interpreterConfig, sessionConfig.session);
      if(!config.iddleParticipants){
        interpret(interpreter);

      }
        /* eslint-enable */
    }

    for(let i = 0; i < sessionConfig.numberPublic; i++){
      const public = await createDriver();
      if (!config.iddleParticipants){
        randomPublic(public, sessionConfig.publicAddr);
      }
    }

  } catch (e) {
    console.log(e);
  }
}

module.exports = { createBrowserAndExecute };
