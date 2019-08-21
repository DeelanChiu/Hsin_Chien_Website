const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

const readXlsx = require('read-excel-file/node');


io.on('connection', function(socket) {
    readXlsx('hcm_vessels.xlsx').then((rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        io.emit("vessel info", rows);
    })
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/view/index.html');
});
app.get('/index.html', function(request, response) {
    response.sendFile(__dirname + '/view/index.html');
});
app.get('/about.html', function(request, response) {
    response.sendFile(__dirname + '/view/about.html');
});
app.get('/organization.html', function(request, response) {
    response.sendFile(__dirname + '/view/organization.html');
});
app.get('/vessels.html', function(request, response) {
    response.sendFile(__dirname + '/view/vessels.html');
});
app.get('/products.html', function(request, response) {
    response.sendFile(__dirname + '/view/products.html');
});
app.get('/store.html', function(request, response) {
    response.sendFile(__dirname + '/view/store.html');
});

// listen for requests :)
http.listen(3000, function() {
    console.log('Your app is listening on port ' + 3000);
});