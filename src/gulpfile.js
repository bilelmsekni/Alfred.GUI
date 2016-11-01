var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var paths = {
    pages: ['app/*.html']
}

// Copy HTML to dist
gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('assets/less/sb-admin-2.less')
        .pipe(less())
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/css'))
        //.pipe(browserSync.reload({
        //    stream: true
        //}))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('dist/css/sb-admin-2.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// Copy JS to dist
gulp.task('js', function() {
    return gulp.src(['assets/js/sb-admin-2.js'])
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/js'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
})

// Minify JS
gulp.task('minify-js', ['js'], function() {
    return gulp.src('dist/js/sb-admin-2.js')
        .pipe(uglify())
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy-vendor', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('dist/vendor/bootstrap'))

    gulp.src(['node_modules/bootstrap-social/*.css', 'node_modules/bootstrap-social/*.less', 'node_modules/bootstrap-social/*.scss'])
        .pipe(gulp.dest('dist/vendor/bootstrap-social'))

    gulp.src(['node_modules/datatables/media/**/*'])
        .pipe(gulp.dest('dist/vendor/datatables'))

    gulp.src(['node_modules/drmonty-datatables-plugins/integration/bootstrap/3/*'])
        .pipe(gulp.dest('dist/vendor/datatables-plugins'))

    gulp.src(['node_modules/drmonty-datatables-responsive/css/*', 'node_modules/drmonty-datatables-responsive/js/*'])
        .pipe(gulp.dest('dist/vendor/datatables-responsive'))

    gulp.src(['node_modules/flot/*.js'])
        .pipe(gulp.dest('dist/vendor/flot'))

    // gulp.src(['node_modules/flot.tooltip/js/*.js'])
    //     .pipe(gulp.dest('vendor/flot-tooltip'))

    gulp.src(['node_modules/font-awesome/**/*', '!node_modules/font-awesome/*.json', '!node_modules/font-awesome/.*'])
        .pipe(gulp.dest('dist/vendor/font-awesome'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('dist/vendor/jquery'))

    gulp.src(['node_modules/metismenu/dist/*'])
        .pipe(gulp.dest('dist/vendor/metismenu'))

    gulp.src(['node_modules/morris.js/*.js', 'node_modules/morris.js/*.css', '!node_modules/morris.js/Gruntfile.js'])
        .pipe(gulp.dest('dist/vendor/morrisjs'))

    gulp.src(['node_modules/raphael/raphael.js', 'node_modules/raphael/raphael.min.js'])
        .pipe(gulp.dest('dist/vendor/raphael'))

});

gulp.task('bundle', function bundle() {
    return browserify({
        basedir: 'app/.',
        debug: true,
        entries: ['main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['copy-html', 'copy-vendor','minify-css','minify-js','bundle']);

gulp.task('watch', ['default'], function () {
    browserSync.init({
        server: 'dist/.'
    });
    gulp.watch(['app/**/*.ts', 'app/main.ts'], ['default']);
    gulp.watch('dist/**/*.js').on('change', browserSync.reload);
});