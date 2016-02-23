var JSX = require('node-jsx').install();
var router = require('express').Router();
var React = require('react');
var ReactDOM = require('react-dom');
var FeatureRequestApp = require('../../client/components/FeatureRequestApp.react');
var featureRequests = require('./feature_requests');
var path = require('path');

/*
router.route('/api')
	.get('/feature_requests', features.onGetAll)
	.post('/feature_requests', features.onNew)
	.get('/feature_requests/:id', features.onGet)
	.put('/feature_requests/:id', features.onUpdate)
	.delete('/feature_requests/:id', features.onDelete);
*/
router.route('/')
	.get(onGetIndex);

function onGetIndex(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, '../../client/public/dist') });
};

module.exports = router;
