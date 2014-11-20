var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var server = require('gulp-express');
var karma = require('karma').server;

gulp.task('server', function () {
    server.run({
        file: 'app.js'
    });

    gulp.watch(['app/**/*.html'], server.notify);
    gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
    gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]);
    gulp.watch(['app/scripts/**/*.js'], ['jshint']);
    gulp.watch(['app/images/**/*'], server.notify);
    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('sass', function () {
   return gulp.src('sass/*.scss')
     .pipe(sass())
     .pipe(gulp.dest('css'))
     .pipe(livereload());
});

gulp.task('test', function (done) {
   karma.start({
     configFile: __dirname + '/karma.conf.js'
   }, done);
})

gulp.task('default', ['server', 'test'], function() {
   gulp.watch('sass/*.scss', ['sass']);
   gulp.watch('specs/**/*.spec.js', ['test']);
});
