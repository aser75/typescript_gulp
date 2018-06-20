var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
const stylus = require('gulp-stylus');
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

var paths = {
    srcStyl:      './asset/stylus/style.styl',
    allStyl:      './asset/stylus/**/*.styl',
    srcCss:       './dist/css/style.css',
    distCss:      './dist/css',
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/ts/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));


function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist/js"));
}

gulp.task('css', function () {
    return gulp.src( "./src/stylus/style.styl" )
        .pipe(stylus())
        .pipe(gulp.dest( "./dist/css" ));
});

gulp.task('minify', ['css'] , function () {
    return gulp.src( paths.srcCss )
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.distCss));
});

gulp.task('imagemini', () =>
    gulp.src( './src/images/**/*' )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest( './dist/images/' ))
);

gulp.task("js-watch", bundle);
gulp.task("integration",['minify'] )

gulp.task('css-watch', function () {
  gulp.watch( "./src/stylus/**/*.styl", ['integration', 'imagemini']);
});

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
