var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    del = require('del'),
    path = require('path');

// Compiles files in /es6 folder 
// Copies compiled (es5 compatible) files to /es5 folder

var paths = {
    es6: ['es6/**/*.js'],
    es5: 'es5',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'es6'),
};

gulp.task('babel', function () {
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.',
          { sourceRoot: paths.sourceRoot })
        )
        .pipe(gulp.dest(paths.es5));
});

/**
 * Remove all generated JavaScript files from ES5 folder.
 */
gulp.task('clean-es5', function (cb) {
  var typeScriptGenFiles = [paths.es5,               // path to generated JS files
                            paths.es5 +'**/*.js',    // path to all JS files auto gen'd by editor
                            paths.es5 +'**/*.js.map' // path to all sourcemap files auto gen'd by editor
                           ];

  // delete the files
  del(typeScriptGenFiles, cb);
});

// Watches es6 folder and compiles+copies whenever a file changes
// Usage: gulp watch
gulp.task('watch', function() {
    gulp.watch(paths.es6, ['babel']);
});

// Configure default gulp task
// Usage: gulp
gulp.task('default', ['watch']);