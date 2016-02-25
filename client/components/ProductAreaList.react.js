var React = require('react');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var classNames = require('classnames');

var ProductAreaList = React.createClass({
	getInitialState: function() {
		return {
			productAreaListFilter: null
		}
	},
	render: function() {
		return (
			<ButtonToolbar>
				{ this.renderProductAreas(this.props.productAreas) }
				<Button
					className={ classNames({ 'show-product-area': this.state.productAreaListFilter === null}) }
					onClick={ this.setProductAreaListFilter.bind(this, null) }>
				All Product Areas
				</Button>
			</ButtonToolbar>
		);
	},
	renderProductAreas: function(productAreas) {
		if (!productAreas) productAreas = [];

		var output = [];

		productAreas.forEach(function(productArea, index) {
			var btnClasses = classNames({
				'product-area-list-content': true,
				'show-product-area': this.state.productAreaListFilter === productArea.name
			});

			output.push(
				<Button
					onClick={ this.setProductAreaListFilter.bind(this, productArea.name) }
					key={ index }
					className={ btnClasses }>
					{ productArea.name }
				</Button>
			);
		}.bind(this));

		return output;
	},
	setProductAreaListFilter: function(productAreaListFilter) {
		this.setState({
			productAreaListFilter: productAreaListFilter
		});

		this.props.setProductAreaListFilter(productAreaListFilter);
	}
});

module.exports = ProductAreaList;
