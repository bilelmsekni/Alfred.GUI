var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require('./webpack.common.config');
var helpers = require('./helpers');
var chalk = require('chalk');

module.exports = function(arg) {
    var configEnv = (arg === undefined)? 'debug': arg;
    console.log(chalk.blue(`Starting server using ${configEnv} settings. This will take a moment...`));
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