"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
require("reflect-metadata")
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanDest = require('gulp-dest-clean');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var tsc = require('gulp-typescript');
var tslint = require("gulp-tslint");
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

//******************************************************************************
//* CLEAN-DIST: Clean dist folder 
//******************************************************************************

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(cleanDest('dist'));
});

//******************************************************************************
//* COPY-DATA: Copy html and json data to dist 
//******************************************************************************

gulp.task('copy-data', function () {
    gulp.src(['api/*.json'])
        .pipe(gulp.dest('dist/api'));
    gulp.src(['config/*.json'])
        .pipe(gulp.dest('dist/config'));
    gulp.src(['app/*.html', 'app/**/*.html', 'app/**/*.png', 'app/**/*.jpg'])
        .pipe(gulp.dest('dist'));
});

//******************************************************************************
//* BUILD-VENDOR: Copy vendor libraries from /node_modules into /vendor
//******************************************************************************

gulp.task('build-vendor', ['copy-data'], function () {

    gulp.src('vendor/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/vendor'))

    gulp.src('vendor/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/vendor'))

    gulp.src(['vendor/**/fonts/*'])
        .pipe(gulp.dest('dist/vendor'))
});

//******************************************************************************
//* BUILD
//******************************************************************************

gulp.task('lint', function () {
    return gulp.src([
        'app/**/**.ts',
        'test/**/**.test.ts'
    ])
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

var tsProject = tsc.createProject('tsconfig.json');

gulp.task("build", ['copy-data'], function () {
    return gulp.src([
        "app/**/*.ts"
    ])
        .pipe(tsProject())
        .on("error", function (err) {
            throw 'build failed:' + err;
        })
        .js.pipe(gulp.dest("dist"));
});

//******************************************************************************
//* BUNDLE
//******************************************************************************

gulp.task('bundle', ['build'], function bundle() {
    return browserify({
        basedir: 'dist/.',
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
        //.pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
gulp.task('watch', ['build-vendor', 'bundle'], function () {
    browserSync.init({
        server: {
            baseDir: "dist",
            middleware: [historyApiFallback()]
        }
    });
    gulp.watch(['app/**/*.ts', 'app/**/*.html'], ['bundle']);
    gulp.watch('dist/**/*.js').on('change', browserSync.reload);
});

//******************************************************************************
//* TEST
//******************************************************************************

var tsTestProject = tsc.createProject('tsconfig.json');

gulp.task('test-build', ['clean'], function () {
    return gulp.src([
        'app/**/*.ts'
    ])
        .pipe(tsTestProject())
        .on("error", function (err) {
            throw 'test-build failed:' + err;
        })
        .js.pipe(gulp.dest('dist'));
});

gulp.task('istanbul:hook', ['test-build'], function () {
    return gulp.src(['dist/**/*.js'])
        .pipe(istanbul({ includeUntested: true }));
});

gulp.task('test', ['istanbul:hook'], function () {
    return gulp.src('dist/test/*.test.js')
        .pipe(mocha({ ui: 'bdd' }))
        .pipe(istanbul.writeReports(
            {
                dir: 'dist/unit-test-coverage',
                reporters: ['lcov'],
                reportOpts: { dir: 'dist/unit-test-coverage' }
            }
        ));
});
