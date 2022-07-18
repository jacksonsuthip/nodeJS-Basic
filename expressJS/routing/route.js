const express = require('express');
const route = express.Router();

route.get('/', function (req, res) {
    res.sendFile(__dirname + "/link.html")
});
route.get('/youtube', function (req, res) {
    res.redirect("https://www.youtube.com/")
});
route.get('/ExpressJS', function (req, res) {
    res.redirect("https://expressjs.com/")
});
route.get('/form', function (req, res) {
    res.sendFile("D:/AntoJackson/nodeJS/expressJS/index.html")
});

module.exports = route;