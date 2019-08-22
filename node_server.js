const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

const readXlsx = require('read-excel-file/node');


io.on('connection', function(socket) {
    socket.on('query vessel', function() {
        readXlsx('hcm_vessels.xlsx').then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            io.emit("vessel info", rows);
        });
    });
    socket.on('query contact', function() {
        readXlsx('hcm_contact.xlsx').then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            io.emit("contact info", rows);
        });
    });
    socket.on('query career', function() {
        readXlsx('hcm_careers.xlsx').then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            io.emit("career info", rows);
        });
    });

});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/view/index.html');
});
app.get('/:page', function(request, response) {
    response.sendFile(__dirname + '/view/' + request.params.page);
});

// listen for requests :)
http.listen(3000, function() {
    console.log('Your app is listening on port ' + 3000);
});