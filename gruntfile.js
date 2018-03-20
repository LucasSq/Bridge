module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['test/**/*.html']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    jasmine: {
      test: {
        src: 'src/**/*.component.ts',
        options: {
          specs: 'src/**/*.spec.ts'
        }
      }
    },
    protractor: {
      options: {
        configFile: "protractor.conf.js",
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {   all: {},
        options: {
          // configFile: "e2e.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      }
    },
    cucumberjs: {
      src: 'test/features',
      options: {
        steps: "test/step_definitions.js"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner')
  grunt.loadNpmTasks('grunt-cucumber')
};
