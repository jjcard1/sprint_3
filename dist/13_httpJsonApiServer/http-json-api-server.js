"use strict";
const http13 = require('http');
const url13 = require('url');
const port13 = process.argv[2];
const formatDate = (date) => {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
};
const formateUnix = (date) => {
    return {
        unixtime: date.getTime()
    };
};
const server13 = http13.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const urlObj = url13.parse(req.url, true);
    const route = urlObj.pathname;
    const date = new Date(urlObj.query.iso);
    let data;
    if (route == '/api/parsetime') {
        data = formatDate(date);
    }
    else if (route == '/api/unixtime') {
        data = formateUnix(date);
    }
    res.end(JSON.stringify(data));
});
server13.listen(port13);
