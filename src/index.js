#!/usr/bin/env node
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2));
const Converter = require('./converter')
const run = async () => {
    if (!fs.existsSync(argv._[0])) {
        console.log(`Path ${argv._[0]} is not a valid file.`)
        return;
    }
    const fileContent = fs.readFileSync(argv._[0], "utf8");
    const converter = new Converter(fileContent);
    console.log(converter.convertToLiterals())
}

run();
