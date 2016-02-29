var FeatureRequest = require('../models/FeatureRequest');

module.exports = {
	onGetAll: onGetAll,
	onNew: onNew,
	onGet: onGet,
	onUpdate: onUpdate,
	onDelete: onDelete
};

function onGetAll(req, res) {
	FeatureRequest.find().sort({ clientPriority: 1 }).exec(function(err, results) {
		if (err) {
			res.status(404);
		} else {
			res.status(201).json({
				featureRequests: results
			});
		}
	});
}

function onNew(req, res) {
	var clientPriority = parseInt(req.body.featureRequest.clientPriority, 10);

	FeatureRequest.find({ clientPriority: { $gte: clientPriority }}).sort({ clientPriority: 1 }).exec(function(err, results) {
		var _currentPriority = clientPriority;

		results.forEach(function(result) {
			if (result.clientPriority === _currentPriority) {
				FeatureRequest.update({ _id: result._id }, { clientPriority: ++_currentPriority }, function(featureRequest) {});
			}
		});

		FeatureRequest.create(req.body.featureRequest, function(err, result) {
			if (err) {
				res.status(404);
			} else {
				res.status(201).json({
					id: result._id
				});
			}
		});
	});
}

function onGet(req, res) {
	// TODO: get individual feature request
	res.json(200);
}

function onUpdate(req, res) {
	// TODO: update individiual feature request
	res.json(200);
}

function onDelete(req, res) {
	// TODO: delete indiviudal feature request
	res.json(200);
}
