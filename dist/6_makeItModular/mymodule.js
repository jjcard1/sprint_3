"use strict";
const fs6b = require('fs');
const path6b = require('path');
module.exports = function (dir, ext, cb) {
    ext = `.${ext}`;
    fs6b.readdir(dir, (err, files) => {
        if (err) {
            return cb(err);
        }
        ;
        const arFilter = [];
        files.forEach(file => {
            if (path6b.extname(file) === ext) {
                arFilter.push(file);
            }
        });
        return cb(null, arFilter);
    });
};
