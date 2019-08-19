/*
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8000);c
*/
const express = require('express');
const app = express();

//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});