var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./config/webpack.config.dev.js');
var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'app/**/*.ts', load: false, instrument: false },
            { pattern: 'app/**/*.spec.ts', ignore: true },
            //{ pattern: 'app/**/*.ts', load: false },
            { pattern: 'app/**/*.html', load: false }
        ],

        tests: [
            { pattern: 'app/**/*.spec.ts', load: false }
        ],

        postprocessor: wallabyPostprocessor,
        compilers: {
            'app/**/*.js': wallaby.compilers.typeScript({
                "target": "es5",
                "module": "commonjs",
                "allowJs": true,
                "suppressOutputPathCheck": true
            })
        },
        testFramework: 'mocha',
        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};