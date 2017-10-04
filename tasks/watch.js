import gulp from 'gulp';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';
import { srcHtml, srcFonts, srcImages, srcStyles, srcScripts } from './consts';

gulp.task('watch', () => {
	global.watch = true;

	watch(`${srcHtml}/**/*`, () => runSequence('html'));
	watch(`${srcFonts}/**/*`, () => runSequence('fonts'));
	watch(`${srcImages}/**/*`, () => runSequence('images'));
	watch(`${srcImages}/**/icon*.svg`, () => runSequence('svg'));
	watch(`${srcStyles}/**/*`, () => runSequence('styles'));
	watch(`${srcScripts}/**/*`, () => runSequence('scripts'));
});
