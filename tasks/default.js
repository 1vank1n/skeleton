import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import { distHtml, distStyles, distScripts, distImages, distFonts } from './consts';

browserSync.create();
module.exports.browserSync = browserSync;


gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: distHtml,
			directory: true,
			routes: {
				'/styles': distStyles,
				'/scripts': distScripts,
				'/images': distImages,
				'/fonts': distFonts,
			},
		},
	});
});

gulp.task('default', () => (
	runSequence(
		'clean',
		'html',
		'fonts',
		'styles',
		'scripts',
		'images',
		'svg',
		'browser-sync',
		'watch',
	)
));
