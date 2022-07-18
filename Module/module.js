var http = require('http');
var fs = require('fs');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hii Jack!'); //write a response to the client
    res.end(' ..'); //end the response
}).listen(8000); //the server object listens on port 8080

/////////////////////////////
http.createServer(function (req, res) {
    fs.readFile('api.json', function (err, data) { // File system Module
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('404 link not fount');
        }
        res.write(data)
        res.end('\n\nThank you!')
    })
}).listen(8001);

/////////////////////////////
http.createServer(function (req, res) {
    var qr = url.parse(req.url, true); // url Module
    var filePath = "." + qr.pathname
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('404 link not fount');
        }
        res.write(data)
        res.end('\n\nThank you!')
    })
}).listen(8002);

