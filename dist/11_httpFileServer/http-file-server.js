"use strict";
const http11 = require('http');
const fs11 = require('fs');
const port11 = process.argv[2];
const file = process.argv[3];
const server11 = http11.createServer((req, res) => {
    const stream = fs11.createReadStream(file);
    stream.pipe(res);
});
server11.listen(port11);
