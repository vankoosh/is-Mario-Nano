const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const browserSync = require('browser-sync').create();

function lintCss() {
  return gulp
    .src('*.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'verbose', console: true}
      ]
    }));
}

function serve(done) {
	browserSync.init({
		server: './',
		files: ['*.html', '*.css', '*.js']
	});

	done();
}

function reload(done) {
	browserSync.reload();
	done();
}

function watchFiles() {
	gulp.watch('*.css', gulp.series(lintCss, reload));
	gulp.watch(['*.html', '*.js'], reload);
}

exports.lint = lintCss;
exports.watch = watchFiles;
exports.serve = serve;
exports.default = gulp.series(serve, watchFiles);
