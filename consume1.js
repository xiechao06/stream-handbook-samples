process.stdin.on('readable', () => {
    // read just 3 bytes
    var buf = process.stdin.read(3);
    console.dir(buf);
});
