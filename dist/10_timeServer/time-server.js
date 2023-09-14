"use strict";
const net = require('net');
const port = process.argv[2];
const zero = (n) => {
    let nn;
    n < 10 ? nn = `0${n}` : nn = n;
    return nn;
};
const server = net.createServer((socket) => {
    const date = new Date();
    const y = date.getFullYear();
    const m = zero(date.getMonth() + 1);
    const d = zero(date.getDate());
    const h = zero(date.getHours());
    const mi = zero(date.getMinutes());
    const dateFormat = `${y}-${m}-${d} ${h}:${mi}`;
    socket.end(dateFormat + '\n');
});
server.listen(port);
