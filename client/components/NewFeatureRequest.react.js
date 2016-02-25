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
		this.onCloseModal();
	},
	render: function() {
		return (
			<div>
				<button className="new-feature-request" onClick={ this.onOpenModal }>New Feature Request</button>

				<Modal show={ this.state.showModal } onHide={ this.onCloseModal } className="static-modal">
					<Modal.Header>
						New Feature Request
					</Modal.Header>
					<Modal.Body>
						<input></input>
					</Modal.Body>
					<Modal.Footer>
						<Button className='close-new-feature-request' onClick={ this.onCloseModal }>Close</Button>
						<Button className='create-new-feature-request' bStyle="primary" onClick={ this.onSubmit }>Create</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});

module.exports = NewFeatureRequest;
