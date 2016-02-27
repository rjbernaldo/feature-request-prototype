var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/client/index.html',
	filename: 'index.html',
	inject: 'body'
});
var ShimModules = new webpack.ProvidePlugin({
	'Promise': 'es6-promise',
	'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
});

module.exports = {
	entry: [
		'./client/index.js'
	],
	output: {
		path: __dirname + '/client/public/dist',
		filename: 'bundle.js',
		publicPath: '/public/dist'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		HTMLWebpackPluginConfig,
		ShimModules
	]
};
