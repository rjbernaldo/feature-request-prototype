jest.dontMock('../../components/FeatureRequestApp.react');
jest.dontMock('../../components/NewFeatureRequest.react');

describe('NewFeatureRequest', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');

	var NewFeatureRequest = require('../../components/NewFeatureRequest.react');
	var newFeatureRequest = TestUtils.renderIntoDocument(<NewFeatureRequest />);

	it('should render succesfully', function() {
		expect(TestUtils.isCompositeComponent(newFeatureRequest)).toBeTruthy();
	});

	it('should not render modal by default');

	it('should render modal on click');
});
