var React = require('react');
var NewFeatureRequestModal = require('./NewFeatureRequestModal.react');

var NewFeatureRequest = React.createClass({
	getInitialState: function() {
		return {
			modalIsOpen: false
		}
	},
	toggleModal: function() {
		this.setState({
			modalIsOpen: !this.state.modalIsOpen
		});
	},
	render: function() {
		return (
			<div>
				<button className="new-feature-request-button" onClick={ this.toggleModal }>New Feature Request</button>
				{ this.state.modalIsOpen ? <NewFeatureRequestModal /> : null }
			</div>
		);
	}
});

module.exports = NewFeatureRequest;
