"use strict";
const fs5 = require('fs');
const path5 = require('path');
const dir = process.argv[2];
const ext = '.' + process.argv[3];
fs5.readdir(dir, (err, files) => {
    if (err) {
        return console.log(err);
    }
    files.forEach(file => {
        if (path5.extname(file) === ext) {
            console.log(file);
        }
        ;
    });
});
