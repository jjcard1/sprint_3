"use strict";
const http12 = require('http');
const map = require('through2-map');
const port12 = process.argv[2];
const server12 = http12.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('it must be a POST method');
    }
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server12.listen(port12);
