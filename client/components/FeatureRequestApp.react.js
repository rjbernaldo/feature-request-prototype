var React = require('react');

var NewFeatureRequest = require('./NewFeatureRequest.react');
var ClientList = require('./ClientList.react');
var ProductAreaList = require('./ProductAreaList.react');
var FeatureRequestList = require('./FeatureRequestList.react');

// Fixtures until backend is finalized
var date = new Date().toISOString();
var featureRequests = [
	{
		title: 'Please add email functionality',
		description: 'It will be really helpful to have email functionality',
		client: 'Client A',
		clientPriority: 1,
		targetDate: date,
		ticketUrl: 'https://google.com',
		productArea: 'Claims'
	},
		{
		title: 'Add Twitter integration',
		description: 'Lorem ipsum',
		client: 'Client B',
		clientPriority: 2,
		targetDate: date,
			ticketUrl: 'https://google.com',
		productArea: 'Reports'
	}
];
var clients = [
	{
		name: 'Client A'
	},
	{
		name: 'Client B'
	},
	{
		name: 'Client C'
	}
];
var productAreas = [
	{
		name: 'Policies'
	},
	{
		name: 'Billing'
	},
	{
		name: 'Claims'
	},
	{
		name: 'Reports'
	}
];

var FeatureRequestApp = React.createClass({
	getInitialState: function() {
		return {
			clientListFilter: null,
			productAreaListFilter: null
		}
	},
	render: function() {
		return (
			<div>
				<NewFeatureRequest />

				<ClientList
					clients={ clients }
					setClientListFilter={ this.setClientListFilter } />

				<ProductAreaList
					productAreas={ productAreas }
					setProductAreaListFilter={ this.setProductAreaListFilter } />

				<FeatureRequestList
					featureRequests={ featureRequests }
					clientListFilter={ this.state.clientListFilter }
					productAreaListFilter={ this.state.productAreaListFilter } />
			</div>
		);
	},
	setClientListFilter: function(clientListFilter) {
		this.setState({
			clientListFilter: clientListFilter
		});
	},
	setProductAreaListFilter: function(productAreaListFilter) {
		this.setState({
			productAreaListFilter: productAreaListFilter
		});
	}
});

module.exports = FeatureRequestApp;
