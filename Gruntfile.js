'use strict';

var path = require('path');

var importOnce = require('node-sass-import-once');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    clean: {
      css: ['css'],
      bower: ['bower_components']
    },

    sass: {
      options: {
        sourceMap: false, //no source maps b/c web-components inline css anyway...
        importer: importOnce,
        importOnce: {
          index: true,
          bower: true
        }
      },
      dist: {
        files: {
          'css/noprefix/px-context-browser-sketch.css': 'sass/px-context-browser-sketch.scss',
          'css/noprefix/px-context-browser.css': 'sass/px-context-browser-predix.scss',
          'css/noprefix/px-context-browser-demo.css': 'sass/px-context-browser-demo.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/noprefix/*.css',
        dest: 'css'
      }
    },

    shell: {
      options: {
        stdout: true,
        stderr: true
      },
      bower: {
        command: 'bower install'
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'js/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          interrupt: true,
          livereload: true
        }
      },
      htmljs: {
        files: ['*.html', '*.js'],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    },

    depserve: {
      options: {
        open: '<%= depserveOpenUrl %>'
      }
    },

    webdriver: {
      options: {
        specFiles: ['test/*spec.js']
      },
      local: {
        webdrivers: ['chrome']
      }
    },

    concurrent: {
      devmode: {
        tasks: ['watch', 'depserve'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    'polymer-css-compiler': {
      //Custom options - will append filename to output file, and use the returned moduleId value
      custom_options: {
        files: {
          './px-context-browser.html': [
            'css/px-context-browser.css'
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dep-serve');
  grunt.loadNpmTasks('webdriver-support');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('polymer-css-compiler');

  // Default task.
  grunt.registerTask('default', 'Basic build', [
    'sass',
    'autoprefixer',
    'polymer-css-compiler'
  ]);

  grunt.registerTask('devmode', 'Development Mode', [
    'concurrent:devmode'
  ]);

  // First run task.
  grunt.registerTask('firstrun', 'Basic first run', function() {
    grunt.config.set('depserveOpenUrl', '/index.html');
    grunt.task.run('default');
    grunt.task.run('depserve');
  });

  // Default task.
  grunt.registerTask('test', 'Test', [
    'jshint',
    'webdriver'
  ]);

  grunt.registerTask('release', 'Release', [
    'clean',
    'shell:bower',
    'default',
    'test'
  ]);

};
