"use strict";
const mod = require('./mymodule');
const dir6 = process.argv[2];
const ext6 = process.argv[3];
mod(dir6, ext6, (err, files) => {
    if (err) {
        return console.error('error:', err);
    }
    files.forEach(file => {
        console.log(file);
    });
});
