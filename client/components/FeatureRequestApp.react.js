var React = require('react');

var NewFeatureRequest = require('./NewFeatureRequest.react');
var ClientList = require('./ClientList.react');
var ProductAreaList = require('./ProductAreaList.react');
var FeatureRequestList = require('./FeatureRequestList.react');

var FeatureRequestApp = React.createClass({
	render: function() {
		return (
			<div>
				<NewFeatureRequest />
				<ClientList />
				<ProductAreaList />
				<FeatureRequestList />
			</div>
		);
	}
});

module.exports = FeatureRequestApp;
