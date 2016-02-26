jest.autoMockOff();

var frisby = require('frisby');
var server = require('../../index.js');

var URL = 'http://localhost:8080/api/feature_requests';

frisby.create('onGetAll Feature Requests')
    .get(URL)
    .expectStatus(200)
    .after(function() {
        server.close();
    })
    .toss();
