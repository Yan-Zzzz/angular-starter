var gulp = require('gulp');
var connect = require('gulp-connect');
var vendor = require('./src/app/vendor');

gulp.task('default', ['build-dev']);

gulp.task('build-vendor', function() {
    return gulp.src(vendor.packages)
        .pipe(gulp.dest('dist/vendor'));
})

gulp.task('build-js', function() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('build-css', function() {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('build-index', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['build-js', 'build-css', 'build-index']);
});

gulp.task('connectDist', function() {
    connect.server({
        root: 'dist',
        port: 2000,
        livereload: true
    });
})

gulp.task('build-dev', ['build-vendor', 'build-js', 'build-css', 'build-index', 'watch', 'connectDist']);
