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
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
};
