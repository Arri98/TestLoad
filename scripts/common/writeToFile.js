const fs = require('fs');
const date = Date.now()

const errorFile = 'logs/' + date + '_error.txt';
const warningFile = 'logs/' + date + '_warning.txt';

function write(level, data){
    console.log(level, data);
    if(level === 'WARNING'){
        fs.appendFileSync(warningFile, data+'\n');
    } else if (level === 'ERROR' || level === 'SEVERE'){
        fs.appendFileSync(errorFile, data+'\n');
    }

}

module.exports = {write}
