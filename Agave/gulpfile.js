var gulp      = require('gulp'),
    webserver = require('gulp-webserver'),
    sass      = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

var config = {
  styles : {
    main    : './src/sass/app.scss',
    watch   : './src/sass/*/*.scss',
    output  : './build/css'
  },
  html   : {
    watch : './build/*.html'
  }
};

gulp.task('server', function() {
  gulp.src('./build')
      .pipe(webserver({
        host        : '0.0.0.0',
        port        : '8080',
        livereload  : true
      }));
});

gulp.task('build:css', function(){
  gulp.src(config.styles.main)
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest(config.styles.output))
});

gulp.task('watch', function(){
  gulp.watch(config.styles.main, ['build:css']);
  gulp.watch(config.styles.watch, ['build:css']);
  gulp.watch(config.html.watch, ['build']);
});

gulp.task('build', ['build:css']);
gulp.task('default', ['server', 'watch', 'build']);
