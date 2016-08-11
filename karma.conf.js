module.exports = function (config) {
    config.set({
        basePath: '',
        port: 9876,
        autoWatch: false,
        singleRun: true,

        reporters: ['spec', 'coverage'],
        logLevel: config.LOG_INFO,
        colors: true,

        specReporter: {
            showSpecTiming: true
        },

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        files: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            'src/scripts/**/*.js',

            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './node_modules/babel-polyfill/dist/polyfill.min.js',
            'test/scripts/init.js',
            'test/scripts/**/*Spec.js'
        ],
        exclude: [],

        // preprocess matching files before serving them to the browser
        // https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/scripts/**/*.js': ['babel', 'coverage'],
            'test/scripts/**/*Spec.js': ['babel']
        },

        coverageReporter: {
            dir: 'dist/coverage',
            reporters: [
                {
                    type: 'html',
                    includeAllSources: true
                },
                {
                    type: 'text-summary',
                    file: 'text-summary.txt',
                    includeAllSources: true
                }
            ]
        }
    });
};
