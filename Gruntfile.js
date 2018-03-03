module.exports = function(grunt) {



    function wrapModules(head, tail) {
        return head.concat(MODULE_LIST).concat(tail);
    }

    
  var MODULE_LIST = [
      'src/http.post.js',
      'src/http.json.js',
      'src/http.get.js'
    ];

  var HEAD_LIST = [
      'src/http.intro.js',
      'src/http.core.js'
    ];

  var TAIL_LIST = [
      'src/http.outro.js'
    ];

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      dist: {
        src: wrapModules(HEAD_LIST, TAIL_LIST),
        dest: 'dist/http.js'
      }
    },
    uglify: {
        dist: {
            files: {
                'dist/http.min.js': ['dist/http.js']
            }
        }
    },
    qunit: {
      files: ['test/qunit*.html']
    },
    jshint: {
      all_files: [
        'grunt.js',
        'src/http.!(get|json|outro|post|intro|core)*.js'
      ]
    }
  });

  grunt.registerTask('default', [
      'jshint',
      'build',
      'qunit'
    ]);
    
  grunt.registerTask('build', [
      'concat:dist',
      'uglify:dist'
    ]);
};
