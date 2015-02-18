'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            css: ['css'],
            bower: ['bower_components'],
            build: ['build-local']
        },

        sass: {
            options: {
                sourceMap: false //no source maps b/c web-components inline css anyway...
            },
            dist: {
                files: {
                    'css/px-3-column-browser-sketch.css': 'sass/px-3-column-browser-sketch.scss',
                    'css/px-3-column-browser.css': 'sass/px-3-column-browser-predix.scss'
                }
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

        buildlocal: {
            localDev: {
                inlineCSS: false
            }
        },

        watch: {
            html: {
                files: ['*.html'],
                tasks: 'buildlocal',
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'buildlocal'],
                options: {
                    interrupt: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-px-comp-build');

    // Default task.
    grunt.registerTask('default', 'Basic build', [
        'sass',
        'buildlocal'
    ]);

    grunt.registerTask('release', 'Release', [
        'clean',
        'shell:bower',
        'sass',
        'buildlocal',
        'test'
    ]);

};
