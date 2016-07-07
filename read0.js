var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boon\n');
rs.push(null);

rs.pipe(process.stdout);
