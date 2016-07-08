var fs = require('fs');

var ws = fs.createWriteStream('message.txt');
ws.write('beep ');
setTimeout(function() {
    ws.end('boon\n');
}, 1000);
