jest.dontMock('../../components/FeatureRequestApp.react');

describe('FeatureRequestApp', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var FeatureRequestApp = require('../../components/FeatureRequestApp.react');

	it('should render NewFeatureRequest', function() {
		var featureRequestApp = TestUtils.renderIntoDocument(<FeatureRequestApp />);
		expect(TestUtils.isCompositeComponent(featureRequestApp)).toBeTruthy();
	});

	it('should render ClientList');
	it('should render ProductAreaList');
	it('should render FeatureRequestList');
});
