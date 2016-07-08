var http = require('http');
var concat = require('concat-stream');
var qs = require('querystring');

var server = http.createServer(function (req, res) {
    req.pipe(concat(function (body) {
        var params = qs.parse(body.toString());
        res.end(JSON.stringify(params) + '\n');
    }))
});

server.listen(5005)
