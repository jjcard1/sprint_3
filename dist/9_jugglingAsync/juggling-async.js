"use strict";
const http9 = require('http');
const bl9 = require('bl');
const ar = [];
const urls = process.argv.slice(2);
const printData = (arData) => {
    for (var i = 0; i < arData.length; i++) {
        console.log(arData[i]);
    }
};
const makeRequest = (url, index) => {
    http9.get(url, (response) => {
        response.pipe(bl9((err, data) => {
            if (err) {
                return console.error(err);
            }
            ar[index] = data.toString();
            if (ar.length == urls.length) {
                printData(ar);
            }
        }));
    });
};
for (let i = 0; i < urls.length; i++) {
    makeRequest(urls[i], i);
}
