module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: [
                    'Fjs/**/*.js',
                    '!assets/js/build/*.js',
                    '!assets/js/**/*.annotated.js'
                ],
                tasks: ['ngAnnotate']
            },
            annotated: {
                files: [
                    'assets/js/**/*.annotated.js'
                ],
                tasks: ['uglify']
            },
            less: {
                files: [
                    'assets/less/*.less'
                ],
                tasks: ['less']
            },
            css: {
                files: [
                    'assets/css/style.css'
                ]
            },
            livereload: {
              options: {
                livereload: true
              },
              files: [
                'assets/js/**/*.js',
                'assets/less/*.less',
                'assets/css/style.css'
              ]
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'assets/js/vendor/*.js',
                    'assets/js/vendor/jquery-1.4.1.js',
                    'assets/js/modules/*/**.annotated.js',
                    'assets/js/controllers/*/**.annotated.js'
                ],
                dest: 'assets/js/build/<%= pkg.name %>.js'
            }
        },
        less: {
            dev: {
                files: {
                    'assets/css/style.css': 'assets/less/style.less'
                }
            },
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    'assets/css/style.css': 'assets/less/style.less'
                }
            }
        },      
        ngAnnotate: {
            options: {
                remove: true,
                add: true,
                singleQuotes: true
            },
            app: {
                src: [
                    'assets/js/**/*.js',
                    '!assets/js/**/*.annotated.js',
                    '!assets/js/vendor/*.js',
                    '!assets/js/build/*.js'
                ],
                expand: true,
                ext: '.annotated.js',
                extDot: 'last'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', ['watch']);

};