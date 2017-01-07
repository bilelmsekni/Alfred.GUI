var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = function(configEnv){
    var settings = require(`../app/common/settings/alfred.${configEnv}.json`);
    webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: helpers.root('aot'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(configEnv),
                'SETTINGS': JSON.stringify(settings)
            }
        })
    ]

})};