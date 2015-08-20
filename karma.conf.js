module.exports = function(config){
    config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
    basePath : '',
 
    // files to include, ordered by dependencies
    files: [
      // framework files and dependencies
      "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular-mocks.js",
      // test files
      "app/js/app.js",
      "app/js/test.controller.js",
      "app/js/test.directive.js",
      "karma/test.spec.js",
      // where to find templates
      'app/partials/*.html', 
    ],
    // files to exclude
    exclude : [
      
    ],
 
    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : true,
 
    // testing framework, be sure to install the karma plugin
    frameworks: ['jasmine'],
 
    // browsers to test against, be sure to install the correct karma browser launcher plugin
    browsers : [
      //'Chrome',
      'PhantomJS'
     ],

    // web server port
    port: 9876,
 
    // progress is the default reporter
    reporters: ['progress'],

    logLevel: config.LOG_INFO,
 
    // map of preprocessors that is used mostly for plugins
    preprocessors: {
      'app/partials/*.html':'ng-html2js',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: "app/",
      moduleName: 'templates'
    },
 
    // list of karma plugins
    plugins : [
        //'karma-chrome-launcher',
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-ng-html2js-preprocessor',
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
})}
