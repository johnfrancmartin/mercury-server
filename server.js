// server.js

// var http = require('http');
//
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });
//
// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });
// import Mercury from '@postlight/mercury-parser';
var express = require('express');
var mercury = require('@postlight/mercury-parser');

var app = express();

var PORT = 3000;

// GET method route
app.get('/', function(req, res) {
  if (!req.query.url) {
    res.status(400).send("Error: no request url attached.");
  } else {
    let url = req.query.url;
    mercury.parse(url).then(result => res.status(200).send(result));
  }
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(PORT, function() {
  console.log('Server is running on PORT:',PORT);
});
