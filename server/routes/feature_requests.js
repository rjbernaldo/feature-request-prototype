var FeatureRequest = require('../models/FeatureRequest');

module.exports = {
	onGetAll: onGetAll,
	onNew: onNew,
	onGet: onGet,
	onUpdate: onUpdate,
	onDelete: onDelete
};

function onGetAll(req, res) {
	res.json(200);
}

function onNew(req, res) {
	console.log(req);
	// console.log('req.headers', req.headers);
	// console.log('req.body', req.body);
	// console.log('req.body', req.body);
	// FeatureRequest.create(req.body.featureRequest, function(err, result) {
	// 	if (err) {
	// 		res.status(404);
	// 	} else {
	// 		res.status(201).json({
	// 			id: result._id
	// 		});
	// 	}
	// });
}

function onGet(req, res) {
	console.log('req.params', req.params);
}

function onUpdate(req, res) {
	res.json(200);
}

function onDelete(req, res) {
	res.json(200);
}
