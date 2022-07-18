const express = require('express');
const app = express();

var bodyVal = require('body-parser'); // to get post data from body
var urlEncode = bodyVal.urlencoded({ extended: false }) // to decrypt the body value

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get('/home/get', function (req, res) {
    res.send("<h1>GET<h1><br><h3> Name : " + req.query['name'] + "</h3><br><h3> Ph.No : " + req.query['phno'] + "</h3>") // in get type
});
app.post('/home/post', urlEncode, function (req, res) {
    res.send("<h1>POST<h1><h3><h2> Name : " + req.body.name + "</h2><br><h3> Ph.No : " + req.body.phno + "</h3>")  // in post type
});

app.listen(8000);