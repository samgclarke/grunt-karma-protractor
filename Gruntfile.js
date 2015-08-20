module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    */
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    protractor: {
      options: {
        keepAlive: true,
        configFile: "protractor/protractor.conf.js"
      },
      run: {}
    },
    nodestatic: {
      server: {
        options: {
          port: 8080,
          base: '.',
          keepAlive: true,
        }
      }
    }
  });
  //grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('test', [
    //'nodemon',
    'karma',
    'protractor:run'
  ]);
};