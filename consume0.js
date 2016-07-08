process.stdin.on('readable', () => {
    // read all available bytes
    var buf = process.stdin.read();
    console.dir(buf);
});
