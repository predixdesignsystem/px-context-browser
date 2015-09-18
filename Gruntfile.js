'use strict';

var importOnce = require('node-sass-import-once');

module.exports = function (grunt) {

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
            'css/noprefix/px-context-browser.css': 'sass/px-context-browser-predix.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers: ['last 3 version']
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
            interrupt: true
          }
        }
      },

        depserve: {
            options: {
                open: '<%= depserveOpenUrl %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dep-serve');
    grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', 'Basic build', [
    'sass',
    'autoprefixer'
  ]);

    // First run task.
    grunt.registerTask('firstrun', 'Basic first run', function() {
        grunt.config.set('depserveOpenUrl', '/index.html');
        grunt.task.run('default');
        grunt.task.run('depserve');
    });

    // Default task.
    grunt.registerTask('test', 'Test', [
        'jshint'
    ]);

    grunt.registerTask('release', 'Release', [
        'clean',
        'shell:bower',
        'default',
        'test'
    ]);

};
