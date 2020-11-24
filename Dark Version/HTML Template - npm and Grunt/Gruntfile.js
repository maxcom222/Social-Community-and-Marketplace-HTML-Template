module.exports = function(grunt) {

  const sass = require('node-sass'),
        cssnano = require('cssnano');

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'src/css/raw/styles.css': 'src/sass/main.scss'
        }
      }
    },
    postcss: {
      autoprefix: {
        options: {
          processors: [
            require('autoprefixer')()
          ],
          map: {
            inline: false,
            annotation: 'src/css/raw/'
          }
        },
        files: {
          'src/css/raw/styles.css': 'src/css/raw/styles.css'
        }
      },
      compressed: {
        options: {
          processors: [
            cssnano()
          ],
          map: {
            inline: false,
            annotation: 'src/css/'
          }
        },
        files: {
          'src/css/styles.min.css': 'src/css/raw/styles.css'
        }
      }
    },
    browserify: {
      options: {
        transform: [['babelify', {presets: ['@babel/env'], compact: true}]]
      },
      build: {
        files: {
          'src/js/bundle/app.bundle.js': 'src/js/app.js'
        }
      }
    },
    uglify: {
      build: {
        files: {
          'src/app.bundle.min.js': 'src/js/bundle/app.bundle.js'
        }
      }
    },
    concat: {
      build: {
        files: {
          'src/app.bundle.min.js': [
            'src/js/vendor/xm_accordion.min.js',
            'src/js/vendor/xm_dropdown.min.js',
            'src/js/vendor/xm_hexagon.min.js',
            'src/js/vendor/xm_popup.min.js',
            'src/js/vendor/xm_progressBar.min.js',
            'src/js/vendor/xm_tab.min.js',
            'src/js/vendor/xm_tooltip.min.js',
            'src/app.bundle.min.js'
          ]
        }
      }
    },
    connect: {
      build: {
        options: {
          base: 'src/',
          hostname: 'localhost',
          port: 8123,
          protocol: 'http',
          open: true,
          livereload: 9152
        }
      }
    },
    watch: {
      options: {
        livereload: 9152
      },
      html: {
        files: ['src/*.html']
      },
      sass: {
        files: ['src/sass/**'],
        tasks: ['styles']
      },
      js: {
        files: ['src/js/**/*.js', '!src/js/bundle/**', '!src/js/vendor/*.min.js'],
        tasks: ['scripts']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register global tasks
  grunt.registerTask('default', ['styles', 'scripts', 'launch']);

  // Register custom tasks
  grunt.registerTask('styles', ['sass:build', 'postcss:autoprefix', 'postcss:compressed']);
  grunt.registerTask('scripts', ['browserify:build', 'uglify:build', 'concat:build']);
  grunt.registerTask('launch', ['connect:build', 'watch']);
};