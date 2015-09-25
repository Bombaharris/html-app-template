'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                files: [
                    {src: 'index.html', dest: 'dist/index.html'},
                    {src: 'favicon.ico', dest: 'dist/favicon.ico'},
                    {src: 'apple-touch-icon.png', dest: 'dist/apple-touch-icon.png'},
                    {src: 'robots.txt', dest: 'dist/robots.txt'},
                    {src: 'crossdomain.xml', dest: 'dist/crossdomain.xml'},
                    {src: '.htaccess', dest: 'dist/.htaccess'},
                    {expand: true, cwd: 'img/', src: ['**'], dest: 'dist/img/'},
                    {expand: true, cwd: 'fonts/', src: ['**'], dest: 'dist/fonts/'},
                    {expand: true, cwd: 'video/', src: ['**'], dest: 'dist/video/'},
                    {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['**'], dest: 'dist/fonts/'}
                ]
            }
        },
        'useminPrepare': {
            options: {
                dest: 'dist'
            },
            html: 'index.html'
        },
        usemin: {
            html: ['dist/index.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['useminPrepare', 'copy', 'concat', 'cssmin', 'uglify', 'usemin']);
};
