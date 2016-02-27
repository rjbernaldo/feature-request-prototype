var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var featureRequestSchema = new Schema({
    title: String,
    description: String,
    client: String,
    clientPriority: Number,
    targetDate: Date,
    ticketUrl: String,
    productArea: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var FeatureRequest = mongoose.model('FeatureRequest', featureRequestSchema);

module.exports = FeatureRequest;
