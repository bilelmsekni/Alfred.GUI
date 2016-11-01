"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************

var gulp = require('gulp');

var uglify = require('gulp-uglify');
var cleanDest = require('gulp-dest-clean');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var tsc = require("gulp-typescript");

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();
var paths = {
    pages: ['app/*.html']
}

//******************************************************************************
//* CLEAN-DIST: Clean dist folder 
//******************************************************************************

gulp.task('clean-dist', function(){
    return gulp.src('dist')
    .pipe(cleanDest('dist'));
});

//******************************************************************************
//* COPY-HTML: Copy HTML to dist 
//******************************************************************************

gulp.task('copy-html', ['clean-dist'],function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

//******************************************************************************
//* MINIFY-CSS: Compile less to css + move to dist + Minify CSS
//******************************************************************************

// Compile LESS files from /less into /css
gulp.task('less', ['clean-dist'], function () {
    return gulp.src('assets/less/sb-admin-2.less')
        .pipe(less())
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/css'))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function () {
    return gulp.src('dist/css/sb-admin-2.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
});

//******************************************************************************
//* MINIFY-JS: Copy JS to dist + Minify JS
//******************************************************************************

// Copy JS to dist
gulp.task('js',['clean-dist'], function () {
    return gulp.src(['assets/js/sb-admin-2.js'])
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/js'))
})

// Minify JS
gulp.task('minify-js', ['js'], function () {
    return gulp.src('dist/js/sb-admin-2.js')
        .pipe(uglify())
        //.pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
});

//******************************************************************************
//* COPY-VENDOR: Copy vendor libraries from /node_modules into /vendor
//******************************************************************************

gulp.task('copy-vendor', ['clean-dist'], function () {
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

//******************************************************************************
//* BUILD
//******************************************************************************
var tsProject = tsc.createProject("tsconfig.json");

gulp.task("build", ['clean-dist'],function () {
    return gulp.src([
        "app/main.ts",
        "app/**/**.ts"
    ])
        .pipe(tsProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js.pipe(gulp.dest("dist/js"));
});

//******************************************************************************
//* BUNDLE
//******************************************************************************
gulp.task('bundle', ['build'],function bundle() {
    return browserify({
        basedir: 'dist/js/.',
        debug: true,
        entries: ['main.js'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('alfred.bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean-dist','copy-html', 'copy-vendor', 'minify-css', 'minify-js', 'build', 'bundle']);

gulp.task('watch', ['default'], function () {
    browserSync.init({
        server: 'dist/.'
    });
    gulp.watch(['app/**/*.ts', 'app/main.ts'], ['default']);
    gulp.watch('dist/**/*.js').on('change', browserSync.reload);
});