var React = require('react');

var NewFeatureRequest = require('./NewFeatureRequest.react');
var ClientList = require('./ClientList.react');
var ProductAreaList = require('./ProductAreaList.react');
var FeatureRequestList = require('./FeatureRequestList.react');

var clients = [
	{
		id: 1,
		name: 'Client A'
	},
	{
		id: 2,
		name: 'Client B'
	},
		{
		id: 3,
		name: 'Client C'
	}
];

var FeatureRequestApp = React.createClass({
	render: function() {
		return (
			<div>
				<NewFeatureRequest />
				<ClientList clients={ clients }/>
				<ProductAreaList />
				<FeatureRequestList />
			</div>
		);
	}
});

module.exports = FeatureRequestApp;
