module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['public/javascripts/commands.js', 'specs/commands.spec.js'],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};