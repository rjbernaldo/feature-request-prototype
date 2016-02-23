var JSX = require('node-jsx').install();
var router = require('express').Router();
var React = require('react');
var ReactDOM = require('react-dom');
var FeatureRequestApp = require('../../client/components/FeatureRequestApp.react');
var features = require('./features');
var path = require('path');

/*
router.route('/api')
	.get('/features', features.onGetAll)
	.post('/features', features.onNew)
	.get('/features/:id', features.onGet)
	.put('/features/:id', features.onUpdate)
	.delete('/features/:id', features.onDelete);
*/
router.route('/')
	.get(onGetIndex);

function onGetIndex(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, '../../client/public/dist') });
};

module.exports = router;
