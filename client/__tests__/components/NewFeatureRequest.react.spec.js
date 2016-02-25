jest.dontMock('../../components/FeatureRequestApp.react');
jest.dontMock('../../components/NewFeatureRequest.react');

describe('NewFeatureRequest', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var Button = require('react-bootstrap').Button;

	var NewFeatureRequest = require('../../components/NewFeatureRequest.react');
	var newFeatureRequest = TestUtils.renderIntoDocument(<NewFeatureRequest />);

	it('should render succesfully', function() {
		expect(TestUtils.isCompositeComponent(newFeatureRequest)).toBeTruthy();
	});

	it('should have initial state value for showModal as false', function() {
		expect(newFeatureRequest.state.showModal).toBeFalsy();
	});

	it('should change state value of showModal to true on button click', function() {
		expect(newFeatureRequest.state.showModal).toBeFalsy();

		var button = TestUtils.findRenderedDOMComponentWithClass(newFeatureRequest, 'new-feature-request');
		TestUtils.Simulate.click(button);

		expect(newFeatureRequest.state.showModal).toBeTruthy();
	});

	it('should change state value of showModal to false on clicking close button inside modal'); //TODO
});
