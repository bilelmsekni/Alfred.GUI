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
    gulp.src(['app/*.html', 'app/**/*.html'])
        .pipe(gulp.dest('dist'));
});

//******************************************************************************
//* MINIFY-CSS: Compile less to css + move to dist + Minify CSS
//******************************************************************************

gulp.task('minify-css', ['clean'], function () {
    return gulp.src('assets/less/sb-admin-2.less')
        .pipe(less())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
});

//******************************************************************************
//* MINIFY-JS: Copy JS to dist + Minify JS
//******************************************************************************

gulp.task('minify-js', ['clean'], function () {
    return gulp.src('assets/js/sb-admin-2.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
});

//******************************************************************************
//* COPY-VENDOR: Copy vendor libraries from /node_modules into /vendor
//******************************************************************************

gulp.task('copy-vendor', ['clean'], function () {
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

    gulp.src(['node_modules/core-js/client/shim.min.js'])
        .pipe(gulp.dest('dist/vendor/core-js'))

    gulp.src(['node_modules/zone.js/dist/zone.js'])
        .pipe(gulp.dest('dist/vendor/zone.js'))

    gulp.src(['node_modules/reflect-metadata/Reflect.js'])
        .pipe(gulp.dest('dist/vendor/reflect-metadata'))

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
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['prepare', 'build', 'lint']);
gulp.task('prepare', ['copy-vendor', 'minify-css', 'minify-js'])
gulp.task('refresh', ['copy-data','bundle']);
gulp.task('watch', ['refresh'], function () {
    browserSync.init({
        server: {
            baseDir: "dist",
            middleware: [historyApiFallback()]
        }
    });
    gulp.watch(['app/**/*.ts', 'app/**/*.html'], ['refresh']);
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
        .pipe(istanbul({includeUntested: true}));
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