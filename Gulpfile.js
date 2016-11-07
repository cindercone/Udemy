var gulp, sass;

gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('default', ['compile-sass', 'compile-scss']);

gulp.task('compile-sass', function() {
  gulp.src('app/assets/stylesheets/**/*.sass')
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(gulp.dest('public/assets'));
});

gulp.task('compile-scss', function() {
  gulp.src('app/assets/stylesheets/**/*.scss')
      .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
      .pipe(gulp.dest('public/assets'));
});

gulp.task('watch', ['watch-sass', 'watch-scss']);

gulp.task('watch-sass', function() {
  gulp.watch('app/assets/stylesheets/**/*.sass', ['compile-sass']);
});

gulp.task('watch-scss', function() {
  gulp.watch('app/assets/stylesheets/**/*.scss', ['compile-scss']);
});