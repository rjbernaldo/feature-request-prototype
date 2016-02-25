jest.dontMock('../../components/ProductAreaList.react');

describe('ProductAreaList', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var ProductAreaList = require('../../components/ProductAreaList.react');
	var setProductAreaListFilterFunc = jest.genMockFunction();

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

	it('should render succesfully', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas } setProductAreaListFilter={ setProductAreaListFilterFunc }/>);

		expect(TestUtils.isCompositeComponent(productAreaList)).toBeTruthy();
	});

	it('should render product areas from an array of objects passed as prop', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas } setProductAreaListFilter={ setProductAreaListFilterFunc }/>);
		var contents = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'product-area-list-content');

		expect(contents.length).toEqual(4);
		expect(contents[0].textContent).toEqual('Policies');
		expect(contents[1].textContent).toEqual('Billing');
		expect(contents[2].textContent).toEqual('Claims');
		expect(contents[3].textContent).toEqual('Reports');
	});

	it('should highlight default filter option on initialize', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas } setProductAreaListFilter={ setProductAreaListFilterFunc }/>);
		var currentFilter = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'show-product-area');

		expect(currentFilter[0].textContent).toBe('All Product Areas');
	});

	it('should call prop function on calling a filter', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas } setProductAreaListFilter={ setProductAreaListFilterFunc }/>);
		var button = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'product-area-list-content');

		TestUtils.Simulate.click(button[0]);

		expect(setProductAreaListFilterFunc).toBeCalled();
	});

	it('should highlight currently applied filter', function() {
		var productAreaList = TestUtils.renderIntoDocument(<ProductAreaList productAreas={ productAreas } setProductAreaListFilter={ setProductAreaListFilterFunc }/>);
		var button = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'product-area-list-content');

		TestUtils.Simulate.click(button[0]);

		var currentFilter = TestUtils.scryRenderedDOMComponentsWithClass(productAreaList, 'show-product-area');
		expect(currentFilter[0].textContent).toBe('Policies');
	});
});
