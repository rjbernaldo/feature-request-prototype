var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var NewFeatureRequestModal = React.createClass({
	render: function() {
		return (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						New Feature Request
					</Modal.Header>
					<Modal.Body>
						<input></input>
					</Modal.Body>
					<Modal.Footer>
						<Button>Close</Button>
						<Button bStyle="primary">Save</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
});

module.exports = NewFeatureRequestModal;
