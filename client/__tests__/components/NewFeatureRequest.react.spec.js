jest.dontMock('../../components/FeatureRequestApp.react');
jest.dontMock('../../components/NewFeatureRequest.react');

describe('NewFeatureRequest', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');

	var NewFeatureRequest = require('../../components/NewFeatureRequest.react');
	var NewFeatureRequestModal = require('../../components/NewFeatureRequestModal.react');

	var newFeatureRequest = TestUtils.renderIntoDocument(<NewFeatureRequest />);

	it('should render succesfully', function() {
		expect(TestUtils.isCompositeComponent(newFeatureRequest)).toBeTruthy();
	});

	it('should not render modal by default', function() {
		var newFeatureRequestModal = TestUtils.scryRenderedComponentsWithType(newFeatureRequest, NewFeatureRequestModal);

		expect(newFeatureRequestModal.length).toBeFalsy();
	});

	it('should render modal on click', function() {
		var newFeatureRequestButton = TestUtils.scryRenderedDOMComponentsWithClass(newFeatureRequest, 'new-feature-request-button');

		TestUtils.Simulate.click(newFeatureRequestButton[0]);

		var newFeatureRequestModal = TestUtils.scryRenderedComponentsWithType(newFeatureRequest, NewFeatureRequestModal);

		expect(newFeatureRequestModal.length).toBeTruthy();
	});
});
