var webpackMerge = require('webpack-merge');
var nodeExternals = require('webpack-node-externals');

var commonConfig = require('./webpack.common.test');

module.exports = webpackMerge(commonConfig, {
    target: 'node',

    externals: [
        nodeExternals()
    ]
});