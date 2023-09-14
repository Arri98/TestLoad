// const { By, until } = require('selenium-webdriver');

const {until, By, Key} = require("selenium-webdriver");

async function clickCameraButton(driver) {
  await driver.wait(until.elementLocated(By.id('camera')), 5000);
  const divCamera = await driver.findElement(By.id('camera'));
  await divCamera.findElement(By.className('switch')).click();
}

async function clickFloorButton(driver) {
  await driver.wait(until.elementLocated(By.id('input:floor')), 5000);
  const inputFloor =  await driver.findElement(By.id('input:floor'));
  await inputFloor.findElement(By.className('switch')).click();
}

async function isActive(driver) {
  await driver.wait(until.elementLocated(By.id('interpreterRole')), 5000);
  const classes = await driver.findElement(By.id('interpreterRole')).getAttribute("class");
  return classes.includes('consoleInterpreter__role--active')
}

async function clickMicrophone(driver){
  await driver.wait(until.elementLocated(By.id('microphone')), 5000);
  await driver.findElement(By.id('microphone')).click();
  if(!await isActive(driver)){
    await driver.wait(until.elementLocated(By.className('notification__button notification__button--accept role=')), 5000);
    await driver.findElement(By.className('notification__button notification__button--accept role=')).click();
  };
}

async function clickOutput(driver){
  const inputList = await driver.findElement(By.id('outputs'));
  const buttons = await inputList.findElements(By.className('row consoleInterpreter__outputRow'));
  let number = Math.floor(Math.random()*buttons.length);
  if (number === buttons.length){
    number--;
  }
  buttons[number].click();
}

async function moveVolume(driver){

  const number = Math.floor(Math.random()*2);
  if(number){
    await driver.findElement(By.id('volumeInputs__slider')).sendKeys(Key.ARROW_LEFT, Key.ARROW_LEFT);
  } else {
    await driver.findElement(By.id('volumeInputs__slider')).sendKeys(Key.ARROW_RIGHT, Key.ARROW_RIGHT);
  }
}

async function sendMessage(driver){
  const chatList = await driver.findElement(By.id('chatList'));
  const chats = await chatList.findElements(By.className('chatConver'));
  let number = Math.floor(Math.random()*chats.length);
  if (number === chats.length){
    number--;
  }
  chats[number].click();

  const chatDiv = await driver.findElement(By.id('chat'));
  await chatDiv.findElement(By.className('emojionearea')).sendKeys('message hola hola');
  await driver.findElement(By.id('sendMessage')).click();
}



async function interpret(driver) {
  try {
    await clickCameraButton(driver);
    if(await isActive(driver)){
      await clickMicrophone(driver)
    }

    const functions = [async ()=>{await clickOutput(driver)},
                      async()=>{await clickMicrophone(driver)},
                      async()=>{await sendMessage(driver)},
                      async()=>{await moveVolume(driver)},
                      async () => {await clickFloorButton(driver)}]

    while(true){
      functions[Math.floor(Math.random()*functions.length)]();
      await new Promise((r) => setTimeout(r, 7000));
    }

  } catch (e) {
    console.log(e);
    await driver.quit();
  }
}

module.exports = { interpret };
