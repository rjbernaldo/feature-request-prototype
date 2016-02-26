jest.autoMockOff();

require('../../index.js');

var frisby = require('frisby');

var URL = 'http://localhost:8080';

frisby.create('GET Index Page')
    .get(URL)
    .expectStatus(200)
    .toss();
