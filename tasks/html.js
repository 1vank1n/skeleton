import { src, dest } from 'gulp';
import extender from 'gulp-html-extend';
import prettify from 'gulp-html-prettify';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { srcHtml, distHtml } from './consts';


const html = () => src(`${srcHtml}/*.html`)
	.pipe(plumber({
		errorHandler: notify.onError(
			err => ({
				title: 'Html',
				message: err.message,
			}),
		),
	}))
	.pipe(extender({ annotations: true, verbose: false }))
	.pipe(prettify({ indent_char: '	', indent_size: 1 }))
	.pipe(dest(distHtml));

export default html;
