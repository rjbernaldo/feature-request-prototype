jest.dontMock('../../components/ClientList.react');

describe('ClientList', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var ClientList = require('../../components/ClientList.react');

	it('should render succesfully', function() {
		var clientList = TestUtils.renderIntoDocument(<ClientList/>);
		expect(TestUtils.isCompositeComponent(clientList)).toBeTruthy();
	});

	it('should render clients from an array of objects passed as prop', function() {
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

		var clientList = TestUtils.renderIntoDocument(<ClientList clients={ clients }/>);
		var contents = TestUtils.scryRenderedDOMComponentsWithClass(clientList, 'client-list-content');

		expect(contents.length).toEqual(3);
		expect(contents[0].textContent).toEqual('Client A');
		expect(contents[1].textContent).toEqual('Client B');
		expect(contents[2].textContent).toEqual('Client C');
	});
});
