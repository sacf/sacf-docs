module.exports = {
	
	clean: {
		enabled: 'dist',
		paths: ['./htdocs/**/*.map', './src/tmp']
	},

	paths: {
		// "DESTINATION" : ['SOURCE']
		css: {
			'./public/css/': ['./src/scss/**/*.scss']
		},
		es6: {
			'./public/js/scripts.js': ['./src/js/index.js']
		},
		es6Watch: {
			0: ['./src/js/**/*.js']
		},
		js: {
			'./htdocs/js/vendor.js': [
				'./src/js/vendor/*.js'
			]
		},
		images: {
			'./htdocs/img/': [
				'./src/img/**/*.jpeg',
				'./src/img/**/*.jpg',
				'./src/img/**/*.png',
				'./src/img/**/*.gif'
			]
		},
		svg: {
			'./htdocs/img/': ['./src/img/**/*.svg']
		},
		copy: {
			'./htdocs/fonts/': ['./src/fonts/**/*.*']
		},
		favicons: {
			'./htdocs/favicons/': ['./src/favicons/**/*.png']
		},
		docsWatch: {
			0: ['./public/**/*.*',
				'../sacf/**/*.*']
		}
	},

	// All tasks above are available (css, js, images and svg)
	combinedTasks: {
		dist: ['es6', 'js', 'images', 'svg', 'css', 'clean', 'docs', 'copy', ],
		default: [['dist', 'watch']]
	},

	watchTask: {
		images: ['images'],
		svg: ['svg'],
		css: ['css'],
		es6Watch: ['es6'],
		js: ['js'],
		copy: ['copy'],
		docsWatch: ['docs']
	}
}
