var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.test');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        'test': 'mocha-loader!./config/mocha-test-shim.browser.js'
    },

    output: {
        path: helpers.root('tests'),
        publicPath: '/',
        filename: 'test.bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: helpers.root('test/mocha-index.html')
        }),
        new ExtractTextPlugin('mocha.css'),
    ]
});