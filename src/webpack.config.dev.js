var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var directoryName = 'build';

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        './app/main.ts'
    ],
    target: 'web',
    output: {
        buildDirectoryName: directoryName,
        path: path.resolve(__dirname, directoryName),
        publicPath: './app',
        filename: 'alfred.bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("app.css", { allChunks: true })
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css'] },
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
        ]
    }
}