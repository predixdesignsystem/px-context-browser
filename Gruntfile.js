'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            css: ['dist/css'],
            lib: ['lib'],
            dist: ['dist']
        },

        sass: {
            options: {
                sourceMap: false //no source maps b/c web-components inline css anyway...
            },
            dist: {
                files: {
                    'dist/css/px-3-column-browser-sketch.css': 'src/sass/px-3-column-browser-sketch.scss',
                    'dist/css/px-3-column-browser.css': 'src/sass/px-3-column-browser-predix.scss'
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

        "px-comp-dist": {
            dist: {
                inlineCSS: false
            }
        },

        watch: {
            html: {
                files: ['src/**/*,html'],
                tasks: 'px-comp-dist',
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: ['src/sass/**/*,scss'],
                tasks: 'sass',
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
    grunt.loadNpmTasks('grunt-px-comp-dist');

    // Default task.
    grunt.registerTask('default', 'Basic build', [
        'clean',
        'shell:bower',
        'sass',
        'px-comp-dist'
    ]);

    grunt.registerTask('dist', 'Basic build', [
        'clean:dist',
        'sass',
        'px-comp-dist',
        'test'
    ]);

};
