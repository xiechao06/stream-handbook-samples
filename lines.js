// read lines

var offset = 0;

process.stdin.on('readable', () => {
    var buf = process.stdin.read();
    if (!buf) {
        return;
    }

    for (; offset < buf.length; ++offset) {
        if (buf[offset] == 0x0a) {
            // we met newline, output the bytes before newline
            console.dir(buf.slice(0, offset).toString());
            // put the bytes after newline back
            buf = buf.slice(offset + 1);
            offset = 0;
            process.stdin.unshift(buf);
            return;
        } 
    }

    // we don't
    process.stdin.unshift(buf);
    
});

