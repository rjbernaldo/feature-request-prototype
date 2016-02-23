var express = require('express');
var mongoose = require('mongoose');
var webpack = require('webpack');
var http = require('http');
var routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

app.use('/public', express.static(__dirname + '/../client/public'));
app.use('/', routes);

mongoose.connect('mongodb://localhost/feature-request-prototype');

http.createServer(app).listen(port, onServerCreated);

function onServerCreated() {
	console.log('Express server listening on port: ' + port);
}
