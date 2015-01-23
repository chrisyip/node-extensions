var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish')

gulp.task('lint', function () {
  return gulp.src([
            'gulpfile.js',
            'index.js',
            'lib/**/*.js',
            'bench/**/*.js',
            'test/**/*.js'
          ])
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
          .pipe(jshint.reporter('fail'))
})

gulp.task('default', ['lint'])
