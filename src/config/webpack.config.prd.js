var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.config');
var helpers = require('./helpers');
var chalk = require('chalk');

module.exports = function (arg) {
    var configEnv = (arg === undefined) ? 'release' : arg;
    console.log(chalk.blue(`Starting server using ${configEnv} settings. This will take a moment...`));
    var settings = require(`../app/common/settings/alfred.${configEnv}.json`);
    return webpackMerge(commonConfig, {
        entry: {
            'polyfills': './app/polyfills.ts',
            'vendor': './app/vendor.ts',
            'app': './app/main-aot.ts'
        },
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

    })
};