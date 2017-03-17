var wallabyWebpack = require('wallaby-webpack');
//var webpackConfig = require('./config/webpack.test.node.js');
//var wallabyPostprocessor = wallabyWebpack(webpackConfig);

var wallabyPostprocessor = wallabyWebpack({
    entryPatterns: [
        'config/mocha-test-shim.node.js',
        'src/**/*spec.js'
    ],

    module: {
        loaders: [
            // if you use templateUrl in your components and want to inline your templates uncomment the below line
            { test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/ },

            // if importing .scss files in your component styleUrls uncomment the following line
            // { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }
});

module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'config/mocha-test-shim.node.js', load: false },
            { pattern: 'app/**/*.ts', load: false },
            { pattern: 'app/**/*.css', load: false },
            { pattern: 'app/**/*.less', load: false },
            { pattern: 'app/**/*.scss', load: false },
            { pattern: 'app/**/*.sass', load: false },
            { pattern: 'app/**/*.html', load: false },
            { pattern: 'app/**/*spec.ts', ignore: true },
        ],

        tests: [
            { pattern: 'app/**/*spec.ts', load: false },
        ],
        env: {
            type: 'node'
        },

        postprocessor: wallabyPostprocessor,
        // compilers: {
        //     'app/**/*.ts': wallaby.compilers.typeScript({
        //         "target": "es5",
        //         "module": "commonjs",
        //         "allowJs": true,
        //         "suppressOutputPathCheck": true
        //     })
        // },
        testFramework: 'mocha',
        setup: function () {
            // required to trigger test loading
            //window.__moduleBundler.loadTests();
            const jsdom = require('jsdom').jsdom
            //const sinon = require('sinon')
            const chai = require('chai')
            const expect = chai.expect
            const $ = require('jquery')
            //const chaiJquery = require('chai-jquery')
            //require('babel-polyfill')

            // from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
            const propagateToGlobal = (window) => {
                for (var key in window) {
                    if (!window.hasOwnProperty(key)) continue
                    if (key in global) continue

                    global[key] = window[key]
                }
            }

            // setup the simplest document possible
            const doc = jsdom('')
            const win = doc.defaultView
            global.document = doc
            global.window = win
            //global.sinon = sinon
            global.expect = expect
            global.chai = chai
            global.$ = $(win)

            propagateToGlobal(win)
            global.window.____isjsdom = true
        },
        debug: true
    };
};