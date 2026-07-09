import gulp from 'gulp';
import gulpStylelint from 'gulp-stylelint';
import { ESLint } from 'eslint';
import browserSyncModule from 'browser-sync';

const browserSync = browserSyncModule.create();
const stylesPath = './src/styles/';
const scriptsPath = './src/scripts/';

function lintCss() {
  return gulp
    .src(`${stylesPath}**/*.css`)
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'verbose', console: true}
      ]
    }));
}

async function lintJs() {
	const eslint = new ESLint();
	const results = await eslint.lintFiles([`${scriptsPath}**/*.js`]);

	const formatter = await eslint.loadFormatter('stylish');
	const resultText = await formatter.format(results);

	if (resultText) {
		console.log(resultText);
	}

	const hasErrors = results.some((result) => result.errorCount > 0);

	if (hasErrors) {
		throw new Error('ESLint found errors.');
	}
}

function serveBrowser(done) {
	browserSync.init({
		server: './',
		files: ['*.html', `${stylesPath}**/*.css`, `${scriptsPath}**/*.js`],
		browser: "chrome"
	});

	done();
}

function reload(done) {
	browserSync.reload();
	done();
}

function watchFiles() {
	gulp.watch(`${stylesPath}**/*.css`, gulp.series(lintCss, reload));
	gulp.watch(['*.html', `${stylesPath}**/*.css`, `${scriptsPath}**/*.js`], reload);
	gulp.watch(`${scriptsPath}**/*.js`, gulp.series(lintJs, reload));
}

export const lint = gulp.parallel(lintCss, lintJs);
export const watch = watchFiles;
export const serve = serveBrowser;
export default gulp.series(serve, watch);
