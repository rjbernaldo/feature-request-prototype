var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var DateTimeField = require('react-bootstrap-datetimepicker');

var NewFeatureRequest = React.createClass({
	getInitialState: function() {
		return {
			showModal: false,

			title: null,
			description: null,
			client: 'Client A',
			clientPriority: null,
			targetDate: null,
			ticketURL: null,
			productArea: 'Policies'
		}
	},
	render: function() {
		return (
			<div>
				<Button className="new-feature-request btn-success" onClick={ this.onOpenModal }>New Feature Request</Button>

				<Modal show={ this.state.showModal } onHide={ this.onCloseModal } className="static-modal">
					<Modal.Header>
						New Feature Request
					</Modal.Header>
					<Modal.Body>
							<Input type="text" label="Title" value={ this.state.title } onChange={ this.onTitleChange } />
						<Input type="text" label="Description" value={ this.state.description } onChange={ this.onDescriptionChange }/>
						<Input type="select" label="Client" value={ this.state.client } onChange={ this.onClientChange }>
							<option value="Client A">Client A</option>
							<option value="Client B">Client B</option>
							<option value="Client C">Client C</option>
						</Input>
						<Input type="number" label="Client Priority" value={ this.state.clientPriority } onChange={ this.onClientPriorityChange }/>
						<label>Target Date</label>
						<DateTimeField onChange={ this.onTargetDateChange } defaultText="Select Date" />
						<Input type="text" label="Ticket URL" value={ this.state.ticketURL } onChange={ this.onTicketURLChange }/>
						<Input type="select" label="Product Area" value={ this.state.productArea } onChange={ this.onProductAreaChange }>
							<option value="Policies">Policies</option>
							<option value="Billing">Billing</option>
							<option value="Claims">Claims</option>
							<option value="Reports">Reports</option>
						</Input>
					</Modal.Body>
					<Modal.Footer>
						<Button className='close-new-feature-request' onClick={ this.onCloseModal }>Close</Button>
						<Button className='create-new-feature-request btn-success' bStyle="primary" onClick={ this.onSubmit }>Create</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	},
	onOpenModal: function() {
		this.setState({
			showModal: true
		});
	},
	onCloseModal: function(e) {
		this.setState({
			showModal: false
		});
	},
	onSubmit: function() {
		var featureRequest = {
			title: this.state.title,
			description: this.state.description,
			client: this.state.client,
			clientPriority: this.state.clientPriority,
			targetDate: this.state.targetDate,
			ticketURL: this.state.ticketURL,
			productArea: this.state.productArea
		};

		fetch('/api/feature-requests', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': ' application/json'
			},
			body: JSON.stringify({ featureRequest: featureRequest })
		}).then(function(response) {
			response.text().then(function(responseText) {
				this.setState({
					showModal: false,

					title: null,
					description: null,
					client: 'Client A',
					clientPriority: null,
					targetDate: null,
					ticketURL: null,
					productArea: 'Policies'
				});

				this.props.reload();
				this.onCloseModal();
			}.bind(this));
		}.bind(this));
	},
	onTitleChange: function(e) {
		this.setState({
			title: e.target.value
		});
	},
	onDescriptionChange: function(e) {
		this.setState({
			description: e.target.value
		});
	},
	onClientChange: function(e) {
		this.setState({
			client: e.target.value
		});
	},
	onClientPriorityChange: function(e) {
		this.setState({
			clientPriority: e.target.value
		});
	},
	onTargetDateChange: function(date) {
		this.setState({
			targetDate: date
		});
	},
	onTicketURLChange: function(e) {
		this.setState({
			ticketURL: e.target.value
		});
	},
	onProductAreaChange: function(e) {
		this.setState({
			productArea: e.target.value
		});
	}
});

module.exports = NewFeatureRequest;
