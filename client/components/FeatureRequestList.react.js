var React = require('react');
var PanelGroup = require('react-bootstrap').PanelGroup;
var Panel = require('react-bootstrap').Panel;

var FeatureRequestList = React.createClass({
	render: function() {
		return (
			<PanelGroup>
				{ this.renderFeatureRequests(this.props.featureRequests) }
			</PanelGroup>
		);
	},
	renderFeatureRequests: function(featureRequests) {
		if (!featureRequests) featureRequests = [];

		var output = [];

		featureRequests.forEach(function(featureRequest, index) {
			var fitsClientListFilter = this.props.clientListFilter ? this.props.clientListFilter === featureRequest.client : true;
			var fitsProductAreaListFilter = this.props.productAreaListFilter ? this.props.productAreaListFilter === featureRequest.productArea : true;

			if (fitsClientListFilter && fitsProductAreaListFilter) {
				output.push(
					<Panel
						key={ index }
						className="feature-request-list-content"
						header={ featureRequest.title }>
						<div>{ featureRequest.description }</div>
						<div>{ featureRequest.date }</div>
						<div>{ index }</div>
						<div>{ featureRequest.client }</div>
						<div>{ featureRequest.productArea }</div>
					</Panel>
				);
			}
		}.bind(this));

		return output;
	}
});

module.exports = FeatureRequestList;
