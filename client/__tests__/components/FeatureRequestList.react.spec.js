jest.dontMock('../../components/FeatureRequestList.react');

describe('FeatureRequestList', function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');
	var FeatureRequestList = require('../../components/FeatureRequestList.react');

	it('should render succesfully', function() {
		var featureRequestList = TestUtils.renderIntoDocument(<FeatureRequestList/>);
		expect(TestUtils.isCompositeComponent(featureRequestList)).toBeTruthy();
	});

	it('should render feature requests from an array of objects passed as prop', function() {
		var date = new Date().toISOString();

		var featureRequests = [
			{
				title: 'Please add email functionality',
				description: 'It will be really helpful to have email functionality',
				date: date,
				client: 'Client A',
				productArea: 'Claims'
			},
			{
				title: 'Add Twitter integration',
				description: 'Lorem ipsum',
				date: date,
				client: 'Client B',
				productArea: 'Reports'
			}
		];

		var featureRequestList = TestUtils.renderIntoDocument(<FeatureRequestList featureRequests={ featureRequests }/>);
		var contents = TestUtils.scryRenderedDOMComponentsWithClass(featureRequestList, 'feature-request-list-content');

		expect(contents.length).toEqual(2);
	});
});
