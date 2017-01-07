/**
 * Require Browsersync along with webpack and middleware for it
 */
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var stripAnsi = require('strip-ansi');
var historyApiFallback = require('connect-history-api-fallback');
var chalk = require('chalk');

/**
 * Require ./webpack.config.js and make a bundler from it
 */
var webpackConfig = require('../config/webpack.config.dev.js')(process.argv[2]);
var bundler = webpack(webpackConfig);

/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.plugin('done', function (stats) {
    if (stats.hasErrors() || stats.hasWarnings()) {
        return browserSync.sockets.emit('fullscreen:message', {
            title: "Webpack Error:",
            body: stripAnsi(stats.toString()),
            timeout: 100000
        });
    }
    browserSync.reload();
});

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
    server: webpackConfig.output.publicPath,
    open: false,
    logFileChanges: false,
    middleware: [
        historyApiFallback(),
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: { colors: true }
        })
    ],
    plugins: ['bs-fullscreen-message']
});