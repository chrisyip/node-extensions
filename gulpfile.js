var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish')

gulp.task('test', function () {
  return gulp.src('test/index.js', { read: false })
          .pipe(mocha({ reporter: 'nyan' }))
})

gulp.task('lint', function () {
  return gulp.src([
            'index.js',
            'lib/**/*.js',
            'bench/**/*.js',
            'test/**/*.js'
          ])
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
})

gulp.task('default', ['test', 'lint'])
