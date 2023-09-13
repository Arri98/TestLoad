const { createDriver } = require('./common/createDriver');
const sessionConfig = require('../config/smarterpConfig');
const config = require('../config/config');
const { log } = require('./common/logSmarterp');
const { interpret } = require('./common/interpret');
const { shareTech } = require('./common/shareTech');

async function createBrowserAndExecute() {
  try {
    const tech = await createDriver(sessionConfig.tech);
    await tech.get(config.smarterpURL);
    await log(tech, sessionConfig.tech, sessionConfig.session);
    await shareTech(tech);
    const operator = await createDriver(sessionConfig.operator);
    await operator.get(config.smarterpURL);
    await log(operator, sessionConfig.operator, sessionConfig.session);

    const coordinator = await createDriver(sessionConfig.coordinator);
    await coordinator.get(config.smarterpURL);
    await log(coordinator, sessionConfig.coordinator, sessionConfig.session);


    for (let i = 0; i < sessionConfig.interpreters.length; i++) {
      /* eslint-disable */
      const interpreterConfig = sessionConfig.interpreters[i];
      const interpreter = await createDriver(interpreterConfig);
      await interpreter.get(config.smarterpURL);
      await log(interpreter, interpreterConfig, sessionConfig.session);
      interpret(interpreter);
        /* eslint-enable */
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = { createBrowserAndExecute };
