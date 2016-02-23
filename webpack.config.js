var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/client/index.html',
	filename: 'index.html',
	inject: 'body'
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
			{ test: /\.js$/, include: __dirname + '/client', loader: 'babel-loader' }
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};
