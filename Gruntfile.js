module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    pngmin: {
      compile: {
        options: {
          concurrency: 8,             // specify how many exucutables get spawned in parallel
          colors: 128,                // reduce colors to 128
          ext: '.png',                // use .png as extension for the optimized files default: -opt.png
          quality: '30-60',           // output quality should be between 65 and 80 like jpeg quality
          speed: 10,                  // pngquant should be as fast as possible
          force: false                // force overwrites if destination file exists - very expensive    
        },
        files: [
          {
            expand: true,
            src: ['**/*.png'],
            cwd: 'img-src/',
            dest: 'img/'
          }
        ]
      }
    },
    
    jpgmin: {
      compile: {
        options: {
          ext: '.jpg',                // use .jpg as extension for the optimized files default: -opt.jpg
          progressive: true,          // progressive jpg output
          force: false                // force overwrites if destination file exists - very expensive    
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,JPG}'],
            cwd: 'img-src/',
            dest: 'img/'
          }
        ]
      }
    },
    
    resizes: {
      compile: {
        options: {
          force: false,                // force overwrites if destination file exists - very expensive
          quality: 0.8,                // output quality
          progressive: true,           // progressive jpg
          strip: true,                 // strip metadata
          sizes: [250, 450, 650]       // array of resizes. images will be named image-250.jpg, image-450.jpg, image-650.jpg...
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,JPG,png}'],
            cwd: 'resize/',
            dest: 'img/'
          }
        ]
      }
    },
    
    uglify: {
      dist: {
        options: {
          sourceMap: 'js/main.map',
          outputStyle: 'compressed'
        },
        files: {
          'js/main.min.js': 'js/main.js',
          'js/foundation.min.js': 'js/foundation.concat.js'
        }
      }
    },

    sass: {
      options: {
        includePaths: ['css/scss/foundation']
      },
      dev: {
        files: {
          'css/main.css': 'css/scss/main.scss'
        }        
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/main.min.css': 'css/scss/main.scss'
        }        
      }
    },
    
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/foundation/foundation.js',
              //'js/foundation/foundation.abide.js',
              //'js/foundation/foundation.accordion.js',
              //'js/foundation/foundation.alert.js',
              //'js/foundation/foundation.clearing.js',
              //'js/foundation/foundation.dropdown.js',
              //'js/foundation/foundation.equalizer.js',
              //'js/foundation/foundation.interchange.js',
              //'js/foundation/foundation.joyride.js',
              //'js/foundation/foundation.magellan.js',
              'js/foundation/foundation.offcanvas.js',
              //'js/foundation/foundation.orbit.js',
              //'js/foundation/foundation.reveal.js',
              //'js/foundation/foundation.tab.js',
              //'js/foundation/foundation.tooltip.js',
              //'js/foundation/foundation.topbar.js'
              ],
        dest: 'js/foundation.concat.js',
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      
      uglify: {
        files: ['js/main.js', 'js/foundation.concat.js'],
        tasks: ['uglify'],
        options: {
          livereload: true,
        }
      },
      
      sass: {
        files: 'css/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      
      pngmin: {
        files: 'img-src/**/*.png',
        tasks: ['pngmin']
      },
      
      jpgmin: {
        files: 'img-src/**/*.{jpg,JPG}',
        tasks: ['jpgmin']
      },
      
      resizes: {
        files: 'resize/**/*.{jpg,JPG,png}',
        tasks: ['resizes']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-image-processor');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['concat', 'sass', 'uglify', 'pngmin', 'jpgmin', 'resizes']);
  grunt.registerTask('default', ['build','watch']);
}