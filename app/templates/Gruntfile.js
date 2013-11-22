'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'public/**/*',
          'app/views/**/*'
        ]
      }
    },
    express: {
      options: {
        script: 'server.js'
      },
      dev: {
        options: {
          node_env: 'development'
        }
      },
      prod: {
        options: {
          node_env: 'production'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', ['express:dev', 'watch']);
}
