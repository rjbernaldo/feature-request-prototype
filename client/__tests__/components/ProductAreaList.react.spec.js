jest.dontMock('../../components/ProductAreaList.react');

describe('ProductAreaList', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var ProductAreaList = require('../../components/ProductAreaList.react');

	it('should render succesfully', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList/>);
		expect(TestUtils.isCompositeComponent(productAreaList)).toBeTruthy();
	});

	it('should render product areas from an array of objects passed as prop', function() {
		var productAreas = [
			{
				name: 'Policies'
			},
			{
				name: 'Billing'
			},
			{
				name: 'Claims'
			},
			{
				name: 'Reports'
			}
		];

		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas }/>);
		var contents = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'product-area-list-content');

		expect(contents.length).toEqual(4);
		expect(contents[0].textContent).toEqual('Policies');
		expect(contents[1].textContent).toEqual('Billing');
		expect(contents[2].textContent).toEqual('Claims');
		expect(contents[3].textContent).toEqual('Reports');
	});
});
