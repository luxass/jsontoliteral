#!/usr/bin/env node
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2));
const Converter = require('./converter')
const run = async () => {
    if (!argv.inputfile) {
        console.log("Fuck dig")
        return;
    }
    if (!fs.existsSync(argv.inputfile)) {
        console.log(`Path ${argv.inputfile} is not a valid path.`)
        return;
    }
    var fileContent = fs.readFileSync(argv.inputfile, "utf8")
    var converter = new Converter(fileContent);
    console.log(converter.convertToLiterals())
}

run();
