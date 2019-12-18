import browserSync from 'browser-sync';

import {
	distHtml, distStyles, distScripts, distImages, distFonts,
} from './consts';

export const bs = browserSync.create();

const bsTask = () => {
	bs.init({
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
};

export default bsTask;
