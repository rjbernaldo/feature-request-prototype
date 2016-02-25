var React = require('react');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;

var ProductAreaList = React.createClass({
	renderProductAreas: function(productAreas) {
		if (!productAreas) productAreas = [];

		var output = [];

		productAreas.forEach(function(productArea, index) {
			output.push(
				<Button key={ index } className="product-area-list-content">
					{ productArea.name }
				</Button>
			);
		});

		return output;
	},
	render: function() {
		return (
			<ButtonToolbar>
				{ this.renderProductAreas(this.props.productAreas) }
			</ButtonToolbar>
		);
	}
});

module.exports = ProductAreaList;
