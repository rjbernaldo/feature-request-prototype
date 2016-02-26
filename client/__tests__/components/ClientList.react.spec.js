// jest.dontMock('./../../components/ClientList.react');
jest.autoMockOff();

describe('ClientList', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var ClientList = require('./../../components/ClientList.react');
	var setClientListFilterFunc = jest.genMockFunction();

	var clients = [
		{
			name: 'Client A'
		},
		{
			name: 'Client B'
		},
		{
			name: 'Client C'
		}
	];

	it('should render succesfully', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients } setClientListFilter={ setClientListFilterFunc }/>);

		expect(TestUtils.isCompositeComponent(clientList)).toBeTruthy();
	});

	it('should render clients from an array of objects passed as prop', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients } setClientListFilter={ setClientListFilterFunc }/>);
		var contents = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'client-list-content');

		expect(contents.length).toEqual(3);
		expect(contents[0].textContent).toEqual('Client A');
		expect(contents[1].textContent).toEqual('Client B');
		expect(contents[2].textContent).toEqual('Client C');
	});

	it('should highlight default filter option on initialize', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients } setClientListFilter={ setClientListFilterFunc }/>);
		var currentFilter = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'show-client');

		expect(currentFilter[0].textContent).toBe('All Clients');
	});

	it('should call prop function on clicking a filter', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients } setClientListFilter={ setClientListFilterFunc }/>);
		var button = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'client-list-content');

		TestUtils.Simulate.click(button[0]);

		expect(setClientListFilterFunc).toBeCalled();
	});

	it('should highlight currently applied filter', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients } setClientListFilter={ setClientListFilterFunc }/>);
		var button = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'client-list-content');

		TestUtils.Simulate.click(button[0]);

		var currentFilter = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'show-client');
		expect(currentFilter[0].textContent).toBe('Client A');
	});
});
