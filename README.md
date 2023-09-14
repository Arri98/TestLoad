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
5. Copy smarterpDefault into smarterpConfig.js

IMPORTANT: It seems there is a bug with chrome so you can't use headless chrome with http pages.
By default chrome does not allow http pages to access the camera but if you override the configuration it only works
with non headless chrome, so it does not work with docker images as they do not have GUI.
