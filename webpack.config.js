const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		'app': './src/ts/app.ts'
	},
	output: {
		path: path.resolve('dest/common-mw/js'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [
			'.ts'
		]
	}
};
