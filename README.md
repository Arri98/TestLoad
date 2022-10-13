# WIP Repository to simulate client load in videconfernce webapps.
TODO Documentation properly done

### Prerequisites
- Node
- NPM

### Installation
1. Create files folder if you want to add your own media to play.
2. Create folder drivers and download chrome drivers for your chrome version: https://chromedriver.chromium.org/downloads
3. Put your own scripts in the scripts folder and execute them.
4. Copy configDefaults.js into config.js and fill the configuration

start.sh will check the prerequisites and the installation and create the folders and the config file if needed. 

Scripts need to export a function called createBrowserAndExecute that will be called by the start.sh scripts, you can change that in the start.js file 
## Config params:
Params in config.js file:
```
* config.browserPerContainer   Number of chrome browsers to launch
* config.headless              Headless mode: No GUI, set to true when creating docker image
* config.script                Selenium script in the script folder to launch when launching npm start
* config.chromeDriver          Chrome driver in the drivers folder
* config.videoFile             Your own video file to play
```
Config params are the default ones and some can be overwritten for each browser when creating the drivers
createDriver(params)

params overrides the config values.
Values that can be overwritten are:
```
* config.headless
* config.videoFile
```

### Common utils
Auxiliary functions are located in the scripts/common folder
- createDriver.js: Creates the chrome driver for selenium with the flags needed to test videoconference applications
- HackyGetWebRTCInternals.js: Downloads the webrtc stats report like a normal user, please do not use in production there are for sure better ways of doing this.

IMPORTANT: It seems there is a bug with chrome so you can't use headless chrome with http pages.
By default chrome does not allow http pages to access the camera but if you override the configuration it only works
with non headless chrome, so it does not work with docker images as they do not have GUI.
