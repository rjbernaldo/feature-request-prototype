var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var NewFeatureRequest = React.createClass({
	getInitialState: function() {
		return {
			showModal: false
		}
	},
	onOpenModal: function() {
		this.setState({
			showModal: true
		});
	},
	onCloseModal: function() {
		this.setState({
			showModal: false
		});
	},
	onSubmit: function() {

	},
	render: function() {
		return (
			<div>
				<button className="new-feature-request-button" onClick={ this.onOpenModal }>New Feature Request</button>

				<Modal show={ this.state.showModal } onHide={ this.onCloseModal } className="static-modal">
					<Modal.Header>
						New Feature Request
					</Modal.Header>
					<Modal.Body>
						<input></input>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={ this.onCloseModal }>Close</Button>
						<Button bStyle="primary" onClick={ this.onSubmit }>Save</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});

module.exports = NewFeatureRequest;
