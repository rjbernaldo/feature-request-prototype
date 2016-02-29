// jest.autoMockOff();

// var fetch = require.requireActual('node-fetch');
// var request = require.requireActual('superagent');
// var server = require.requireActual('../../index.js');
// var http = require.requireActual('http');
//
// var URL = 'http://localhost:8080/api/feature-requests';
//
// describe('Feature Requests', function() {
//     it('should be able to create new feature requests', function() {
//         var featureRequest = {
//             title: 'Mock Feature Request',
//             description: 'This is just a mock feature request',
//             client: 'Client A',
//             clientPriority: 1,
//             targetDate: '1456818720000',
//             ticketURL: 'http://google.com',
//             productArea: 'Policies'
//         };
//
//         var stringifiedFeatureRequest = JSON.stringify(featureRequest);
//
//         var request = http.request({
//             host: 'localhost',
//             port: 8080,
//             path: '/api/feature-requests',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Length': Buffer.byteLength(stringifiedFeatureRequest)
//             }
//         }, function(res) {
//             // res.setEncoding('UTF-8');
//             res.on('data', function(chunk) {
//                 console.log('Response:' + chunk);
//             });
//         });
//
//         // request.write(stringifiedFeatureRequest)
//         request.end();
//
//         // request
//         //     .post(URL)
//         //     .set('Content-Type', 'application/json; charset=utf8')
//         //     // .set('Accept', 'application/json')
//         //     .send({ featureRequest: featureRequest })
//         //     .end(function(err, res) {
//         //         console.log(err, res);
//         //     });
//
//         // fetch(URL, {
// 		// 	method: 'POST',
// 		// 	headers: {
// 		// 	// 	'Accept': 'application/json',
// 		// 		'Content-Type': 'application/json; charset=utf-8'
// 		// 	},
// 		// 	body: JSON.stringify({ featureRequest: featureRequest })
// 		// }).then(function(response) {
// 		// 	// response.text().then(function(responseText) {
//         //     //     var parsedResponse = JSON.parse(responseText);
//         //     //     var id = parsedResponse.id;
//         //     //     console.log('parsedResponse', parsedResponse);
//         //     //
//         //     //     // fetch(URL + '/' + id).then(function(response) {
//         //     //     //     response.text().then(function(responseText) {
//         //     //     //         expect(responseText).toBe('test');
//         //     //     //     });
//         //     //     // });
// 		// 	// });
// 		// });
//     });
// })

// function describeOnGetAll(done) {
//     // frisby.create('onGetAll Feature Requests')
//     //     .get(URL)
//     //     .expectStatus(200)
//     //     .expectHeaderContains('content-type', 'application/json')
//     //     // .expectJSON(fixtures)   // TODO
//     //     .after(done)
//     // .toss();
//     done();
// }
//
// function describeOnNew(done) {
//     var mockFeatureRequest = {
//         featureRequest: {
//             title: 'Mock Feature Request',
//             description: 'This is just a mock feature request',
//             client: 'Client A',
//             clientPriority: 1,
//             targetDate: '1456818720000',
//             ticketURL: 'http://google.com',
//             productArea: 'Policies'
//         }
//     };
//
//     var test = frisby.create('onNew Feature Request');
//
//     test.addHeaders({
//         'connection': 'keep-alive',
//         'accept-encoding': 'gzip, deflate',
//         'accept-language': 'en-US,en;q=0.8,fil;q=0.6',
//         'accept': 'application/json'
//     }).post(URL, mockFeatureRequest, { json: true })
//         .after(function(err, res, body) {
//             console.log(err, body);
//         });
//         // .expectStatus(201)
//         // .expectHeaderContains('content-type', 'application/json')
//         // .after(done)
//
//     test.toss()
// }
//
// function describeOnGet(done) {
//     // var mockFeatureRequest = {
//     //     featureRequest: {
//     //         title: 'Mock Feature Request',
//     //         description: 'This is just a mock feature request',
//     //         client: 'Client A',
//     //         clientPriority: 1,
//     //         targetDate: new Date(),
//     //         ticketUrl: 'http://google.com',
//     //         productArea: 'Policies'
//     //     }
//     // };
//     //
//     // var test = frisby.create('onGet Feature Request');
//     //
//     // test.post(URL, mockFeatureRequest, { json: true })
//     //     .after(function(err, res, body) {
//     //         console.log(body);
//     //         // test.get(URL)
//     //         //     .expectStatus(200)
//     //         //     .expectHeaderContains('content-type', 'application/json')
//     //         //     // expectJSON(mockFeatureRequest)
//     //         //     .after(done)
//     //     });
//     //
//     // test.toss();
// }
//
// function describeOnUpdate(done) {
//     // frisby.create('onUpdate Feature Request')
//     //     .get(URL)
//     //     .expectStatus(200)
//     //     .expectHeaderContains('content-type', 'application/json')
//     //     .after(done)
//     // .toss();
//     done();
// }
//
// function describeOnDelete(done) {
//     // frisby.create('onDelete Feature Request')
//     //     .get(URL)
//     //     .expectStatus(200)
//     //     .expectHeaderContains('content-type', 'application/json')
//     //     .after(done)
//     // .toss();
//     done();
// }
//
// function describeOnNewBetweenIndexes(done) {
//     // frisby.create('onNew Between Indexes')
//     //     .get(URL)
//     //     .expectStatus(200)
//     //     .expectHeaderContains('content-type', 'application/json')
//     //     .after(done)
//     // .toss();
//     done();
// }
//
// describeOnGetAll(function() {
//     describeOnNew(function() {
//         describeOnGet(function() {
//             describeOnUpdate(function() {
//                 describeOnDelete(function() {
//                     describeOnNewBetweenIndexes(function() {
//
//                     });
//                 });
//             });
//         });
//     });
// });
