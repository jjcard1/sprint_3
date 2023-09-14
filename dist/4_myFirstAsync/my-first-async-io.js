"use strict";
const fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
    if (!err) {
        const text = data.toString();
        const arraytext = text.split('\n');
        console.log(arraytext.length - 1);
    }
    ;
});
