const express = require('express');
const app = express();

app.use(express.static('public'));

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
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});