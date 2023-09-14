#!/bin/bash

echo "$PWD"

if [[ -d "$PWD/drivers" ]]
then
    echo "Driver folder located"
else
    echo "Creating drivers folder, please download the appropiate drivers"
    mkdir drivers
    exit 15
fi

if [ -f "$PWD/config/config.js" ]
then
    echo "Config file found"
else
    echo "Creating config file, please fill the configuration before running again"
    cp config/configDefaults.js config/config.js
    exit 0
fi

if [[ -d "$PWD/files" ]]
    then
        echo "Files folder found"
    else
        echo "No files folder located, do not use custom video or audio"

fi

if ! which node > /dev/null
    then
        echo "Node not installed"
        exit 1
    else
        echo "Node installed"
fi


if ! which npm > /dev/null
    then
        echo "Npm not installed"
        exit 1
    else
        echo "Npm installed"
fi


npm start
