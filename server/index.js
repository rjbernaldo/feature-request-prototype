var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpack = require('webpack');
var http = require('http');
var routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/../client/public'));
app.use('/public/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/'));
app.use('/', routes);

mongoose.connect('mongodb://localhost/feature-request-prototype');

module.exports = http.createServer(app).listen(port, onServerCreated);

function onServerCreated() {
	console.log('Express server listening on port: ' + port);
}
