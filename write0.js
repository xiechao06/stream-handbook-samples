var Writable = require('stream').Writable;

var ws = new Writable;
ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);

