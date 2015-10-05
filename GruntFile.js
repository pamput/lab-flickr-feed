module.exports = function (grunt) {
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),


            clean: {
                'default': ['dist/*', 'tmp'],
                'bower': ['client/bower_components/*'],
                'tmp': 'tmp'
            },

            copy: {
                server: {
                    expand: true,
                    cwd: "server",
                    src: '**',
                    dest: "dist/"
                },

                client: {
                    expand: true,
                    cwd: "client",
                    src: '**/*.{html,json,jpg,jpeg,png,gif,css,eot,svg,ttf,woff}',
                    dest: "dist/static"
                }
            },

            less: {
                development: {
                    options: {
                        compress: true
                    },
                    files: {
                        "dist/static/style/frontend.css": "client/style/frontend.less"
                    }
                }
            },

            browserify: {

                dist: {
                    files: {
                        'dist/static/js/flicker-feed.js': 'client/js/flickr-feed.js'
                    }
                },

                options: {
                    transform: ['babelify', 'concatenify']
                }
            },

            injector: {
                options: {
                    relative: true,
                    addRootSlash: false,
                    min: true
                },
                dependencies: {
                    files: {
                        'dist/static/index.html': [
                            'dist/static/js/**/*',
                            'dist/static/style/**/*'
                        ]
                    }
                }
            },

            express: {
                options: {
                    port: process.env.PORT || 9000,
                    debug: 5858,
                    delay: 1500
                },
                dev: {
                    options: {
                        script: 'dist/app.js',
                        debug: 5858
                    }
                },
                prod: {
                    options: {
                        script: 'dist/app.js'
                    }
                }
            },

            watch: {
                prod: {
                    files: [
                        '{client,server}/**/*.{js,json,jsx,less,html}'
                    ],
                    tasks: ['build', 'express:prod'],
                    options: {
                        livereload: true,
                        nospawn: true //Without this option specified express won't be reloaded
                    }
                },
                dev: {
                    files: [
                        '{client,server}/**/*.{js,json,jsx,less,html}'
                    ],
                    tasks: ['build:dev', 'express:dev'],
                    options: {
                        livereload: true,
                        nospawn: true //Without this option specified express won't be reloaded
                    }
                },
                dev2: {
                    files: [
                        '{client,server}/**/*.{js,json,jsx,less,html}'
                    ],
                    tasks: ['build:dev2', 'express:dev'],
                    options: {
                        livereload: true,
                        nospawn: true //Without this option specified express won't be reloaded
                    }
                }
            }

            //jasmine: {
            //    calendar: {
            //        src: 'dist/static/js/**/*.js',
            //        options: {
            //            specs: 'tmp/test-babel.jsx.js',
            //            vendor: ['dist/static/lib/**/*.js', '!**/*min.js']
            //        }
            //    }
            //}
        }
    );

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-redis');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('serv', ['clean', 'build', 'express:prod', 'watch:prod']);
    grunt.registerTask('build', ['copy', 'less', 'browserify:dist', 'injector', 'clean:tmp']);

};