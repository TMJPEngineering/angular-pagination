module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'src/pagination/pagination.module.js',
                    'src/pagination/pagination.controller.js',
                    'src/pagination/pagination.directive.js'
                ],
                dest: 'src/pagination.js'
            }
        },
        browserify: {
            pagination: {
                src: 'src/pagination.js',
                dest: 'dist/pagination.js'
            }
        },
        uglify: {
            pagination: {
                options: { mangle: false, compress: true },
                src: 'dist/pagination.js',
                dest: 'dist/pagination.min.js'
            }
        },
        watch: {
            src: {
                files: ['src/**/*.js'],
                tasks: ['concat', 'browserify', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'browserify', 'uglify', 'watch']);
};
