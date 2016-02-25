var React = require('react');
var PanelGroup = require('react-bootstrap').PanelGroup;
var Panel = require('react-bootstrap').Panel;

var FeatureRequestList = React.createClass({
	renderFeatureRequests: function(featureRequests) {
		if (!featureRequests) featureRequests = [];

		var output = [];

		featureRequests.forEach(function(featureRequest, index) {
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
		});

		return output;
	},
	render: function() {
		return (
			<PanelGroup>
				{ this.renderFeatureRequests(this.props.featureRequests) }
			</PanelGroup>
		);
	}
});

module.exports = FeatureRequestList;
