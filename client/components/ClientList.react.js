var React = require('react');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var classNames = require('classnames');

var ClientList = React.createClass({
	getInitialState: function() {
		return {
			clientListFilter: null
		}
	},
	render: function() {
		return (
			<ButtonToolbar>
				{ this.renderClients(this.props.clients) }
				<Button
					className={ classNames({ 'show-client': this.state.clientListFilter === null, 'btn-info': this.state.clientListFilter === null }) }
					onClick={ this.setClientListFilter.bind(this, null) }>
					All Clients
				</Button>
			</ButtonToolbar>
		);
	},
	renderClients: function(clients) {
		if (!clients) clients = [];

		var output = [];

		clients.forEach(function(client, index) {
			var btnClasses = classNames({
				'client-list-content': true,
				'show-client': this.state.clientListFilter === client.name,
				'btn-info': this.state.clientListFilter === client.name
			});

			output.push(
				<Button
					onClick={ this.setClientListFilter.bind(this, client.name) }
					key={ index }
					className={ btnClasses }>
					{ client.name }
				</Button>
			);
		}.bind(this));

		return output;
	},
	setClientListFilter: function(clientListFilter) {
		this.setState({
			clientListFilter: clientListFilter
		});

		this.props.setClientListFilter(clientListFilter);
	}
});

module.exports = ClientList;
