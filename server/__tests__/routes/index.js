jest.autoMockOff();

var frisby = require('frisby');
var server = require('../../index.js');

var URL = 'http://localhost:8080';

frisby.create('onGet Index Page')
    .get(URL)
    .expectStatus(200)
    .after(function() {
        server.close();
    })
    .toss();
