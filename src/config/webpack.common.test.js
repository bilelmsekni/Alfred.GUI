var helpers = require('./helpers');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('reflect-metadata');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?sourceMap=false,inlineSourceMap=true', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw-loader'
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|\.spec\.ts)/,
                loader: "istanbul-instrumenter-loader",
                enforce: 'post'
            }
        ],
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('app'),
            {}
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]
}