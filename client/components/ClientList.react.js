var React = require('react');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;

var ClientList = React.createClass({
	renderClients: function(clients) {
		if (!clients) clients = [];

		var output = [];

		clients.forEach(function(client, index) {
			output.push(
				<Button key={ index } className="client-list-content">
					{ client.name }
				</Button>
			);
		});

		return output;
	},
	render: function() {
		return (
			<ButtonToolbar>
				{ this.renderClients(this.props.clients) }
			</ButtonToolbar>
		);
	}
});

module.exports = ClientList;
