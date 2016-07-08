var Readable = require('stream').Readable;

var rs = new Readable;
var c = 97;

rs._read = function () {
    if (String.fromCharCode(c) > 'z') {
        return rs.push(null);
    }
    setTimeout(function () {
        rs.push(String.fromCharCode(c++));
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() has been called ' + (c - 97) + ' times');
});

// in case receive EPIPE
process.stdout.on('error', function () {
    process.exit();
});
