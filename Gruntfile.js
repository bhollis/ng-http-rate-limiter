module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> - MIT Licensed, see http://github.com/bhollis/ng-http-rate-limiter */\n',
    copy: {
      main: {
        src: ['<%= pkg.name %>.js', 'ng-<%= pkg.name %>.js'],
        dest: 'dist/'
      }
    },
    uglify: {
      build: {
        files: {
          'dist/<%= pkg.name %>.min.js': '<%= pkg.name %>.js'
        }
      }
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: false
        },
        files: {
          src: [ 'dist/*.js' ]
        }
      }
    },

    eslint: {
        src: ["ng-http-rate-limiter.js"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('default', ['eslint', 'copy', 'uglify', 'usebanner']);
  grunt.registerTask('test', ['eslint']);
};
