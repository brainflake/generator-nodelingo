'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'bower_components/jquery', src: ['jquery.js'], dest: 'public/javascript', filter: 'isFile'}
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
}
