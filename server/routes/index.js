var JSX = require('node-jsx').install();
var router = require('express').Router();
var React = require('react');
var ReactDOM = require('react-dom');
var FeatureRequestApp = require('../../client/components/FeatureRequestApp.react');
var featureRequests = require('./feature_requests');
var path = require('path');

router
	.get('/api/feature_requests/', featureRequests.onGetAll)
	.post('/api/feature_requests', featureRequests.onNew)
	.get('/api/feature_requests/:id', featureRequests.onGet)
	.put('/api/feature_requests/:id', featureRequests.onUpdate)
	.delete('/api/feature_requests/:id', featureRequests.onDelete)
	.get('/', onGetIndex);

function onGetIndex(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, '../../client/public/dist') });
};

module.exports = router;
