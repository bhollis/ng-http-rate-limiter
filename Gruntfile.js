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
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', '<%= pkg.name %>.js', 'ng-<%= pkg.name %>.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('default', ['jshint', 'copy', 'uglify', 'usebanner']);
  grunt.registerTask('test', ['jshint']);
};
