var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = function(configEnv) {
    var settings = require(`../app/common/settings/alfred.${configEnv}.json`);
    return webpackMerge(commonConfig, {
    devtool: 'inline-source-map',
    output: {
        path: helpers.root('build'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(configEnv),
                'SETTINGS': JSON.stringify(settings)
            }
        })
    ]
})};