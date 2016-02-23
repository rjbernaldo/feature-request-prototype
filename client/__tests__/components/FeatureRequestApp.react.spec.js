jest.dontMock('../../components/FeatureRequestApp.react');
jest.dontMock('../../components/NewFeatureRequest.react');

describe('FeatureRequestApp', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');

	var FeatureRequestApp = require('../../components/FeatureRequestApp.react');
	var NewFeatureRequest = require('../../components/NewFeatureRequest.react');
	var ClientList = require('../../components/ClientList.react');
	var ProductAreaList = require('../../components/ProductAreaList.react');
	var FeatureRequestList = require('../../components/FeatureRequestList.react');

	var featureRequestApp = TestUtils.renderIntoDocument(<FeatureRequestApp />);

	it('should render succesfully', function() {
		expect(TestUtils.isCompositeComponent(featureRequestApp)).toBeTruthy();
	});

	it('should render child component NewFeatureRequest', function() {
		var newFeatureRequest = TestUtils.scryRenderedComponentsWithType(featureRequestApp, NewFeatureRequest);

		expect(newFeatureRequest.length).toBeTruthy();
	});

	it('should render child component ClientList', function() {
		var clientList = TestUtils.scryRenderedComponentsWithType(featureRequestApp, ClientList);

		expect(clientList.length).toBeTruthy();
	});

	it('should render child component ProductAreaList', function() {
		var productAreaList = TestUtils.scryRenderedComponentsWithType(featureRequestApp, ProductAreaList);

		expect(productAreaList.length).toBeTruthy();
	});

	it('should render child component FeatureRequestList', function() {
		var featureRequestList = TestUtils.scryRenderedComponentsWithType(featureRequestApp, FeatureRequestList);

		expect(featureRequestList.length).toBeTruthy();
	});
});
