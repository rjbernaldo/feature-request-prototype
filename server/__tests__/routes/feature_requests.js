jest.autoMockOff();

var frisby = require('frisby');
var server = require('../../index.js');

var URL = 'http://localhost:8080/api/feature_requests';

frisby.create('onGetAll Feature Requests')
    .get(URL)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .after(function() {
        frisby.create('onNew Feature Request')
            .get(URL)
            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .after(function() {
                frisby.create('onGet Feature Request')
                    .get(URL)
                    .expectStatus(200)
                    .expectHeaderContains('content-type', 'application/json')
                    .after(function() {
                        frisby.create('onUpdate Feature Request')
                            .get(URL)
                            .expectStatus(200)
                            .expectHeaderContains('content-type', 'application/json')
                            .after(function() {
                                frisby.create('onDelete Feature Request')
                                    .get(URL)
                                    .expectStatus(200)
                                    .expectHeaderContains('content-type', 'application/json')
                                    .after(function() {
                                        server.close();
                                    })
                                    .toss();
                            })
                            .toss();
                    })
                    .toss();
            })
            .toss();
    })
    .toss();
