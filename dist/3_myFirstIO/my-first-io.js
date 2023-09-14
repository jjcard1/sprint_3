"use strict";
const fss = require('fs');
const countLinesFile = () => {
    const pathFile = process.argv[2];
    console.log(pathFile);
    const contain = fss.readFileSync(pathFile, 'utf8');
    const countLines = contain.split('\n').length - 1;
    return countLines;
};
const lines = countLinesFile();
console.log(lines);
