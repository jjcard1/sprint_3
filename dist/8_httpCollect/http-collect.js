"use strict";
const http8 = require('http');
const bl = require('bl');
const url8 = process.argv[2];
http8.get(url8, (response) => {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
