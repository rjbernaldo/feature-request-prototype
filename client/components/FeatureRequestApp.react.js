var React = require('react');

var NewFeatureRequest = require('./NewFeatureRequest.react');
var ClientList = require('./ClientList.react');
var ProductAreaList = require('./ProductAreaList.react');
var FeatureRequestList = require('./FeatureRequestList.react');
var PageHeader = require('react-bootstrap').PageHeader;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var FeatureRequestApp = React.createClass({
	getInitialState: function() {
		return {
			clientListFilter: null,
			productAreaListFilter: null,
			clients: [],
			productAreas: [],
			featureRequests: []
		}
	},
	componentDidMount: function() {
		this.reload();
	},
	render: function() {
		return (
			<Grid>
				<PageHeader>
					Feature Request App
				</PageHeader>

				<div className="row-custom">
					<NewFeatureRequest reload={ this.reload }/>
				</div>

				<div className="row-custom">
					<ClientList
						clients={ this.state.clients }
						setClientListFilter={ this.setClientListFilter } />
				</div>

				<div className="row-custom">
					<ProductAreaList
						productAreas={ this.state.productAreas }
						setProductAreaListFilter={ this.setProductAreaListFilter } />
				</div>

				<div className="row-custom">
					<FeatureRequestList
						featureRequests={ this.state.featureRequests }
						clientListFilter={ this.state.clientListFilter }
						productAreaListFilter={ this.state.productAreaListFilter } />
				</div>
			</Grid>
		);
	},
	reload: function() {
		this.getClients();
		this.getProductAreas();
		this.getFeatureRequests();
	},
	getFeatureRequests: function() {
		fetch('/api/feature-requests').then(function(response) {
			response.text().then(function(responseText) {
				var featureRequests = [];

				try {
					var dbFeatureRequests = JSON.parse(responseText).featureRequests;

					featureRequests = featureRequests.concat(dbFeatureRequests);
				} catch(e) {
					console.log(e);
				}

				this.setState({
					featureRequests: featureRequests
				});
			}.bind(this));
		}.bind(this));

		// var date = new Date().toISOString();
		// var featureRequests = [
		// 	{
		// 		title: 'Please add email functionality',
		// 		description: 'It will be really helpful to have email functionality',
		// 		client: 'Client A',
		// 		clientPriority: 1,
		// 		targetDate: date,
		// 		ticketUrl: 'https://google.com',
		// 		productArea: 'Claims'
		// 	},
		// 		{
		// 		title: 'Add Twitter integration',
		// 		description: 'Lorem ipsum',
		// 		client: 'Client B',
		// 		clientPriority: 2,
		// 		targetDate: date,
		// 			ticketUrl: 'https://google.com',
		// 		productArea: 'Reports'
		// 	}
		// ];
		//
		// return featureRequests;
	},
	getClients: function() {
		// fixtures for now
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

		this.setState({
			clients: clients
		});
	},
	getProductAreas: function() {
		// fixtures for now
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

		this.setState({
			productAreas: productAreas
		});
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
