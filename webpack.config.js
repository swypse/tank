'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports = {
	// context: "",
	
	entry: {
		app: "./app"
	},
	
	output: {
		path: __dirname + "/build",
		filename: "[name].js",
		library: "[name]"
	},
	
	watch: NODE_ENV == 'development',
	
	watchOptions: {
		aggregateTimeout: 100
	},
	
	devtool: NODE_ENV == 'development' ? 'source-map' : null,
	
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	],
	
	module: {
		
		loaders: [{
			test:	/\.js$/,
			loader:	'babel'
		}]
		
	}
	
};