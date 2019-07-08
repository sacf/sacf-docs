const imagemin = require('gulp-imagemin')
const browserlist = ['> 0.1%']

module.exports = {
	css: {
		scss: {
			config: {
				outputStyle: 'compressed' // nested, compact, expanded and compressed are available options
			}
		},

		sourcemaps: {
			enabled: 'dev'
		},

		autoprefixer: {
			enabled: true,
			config: {
				browserlist: browserlist
			}
		},

		cleanCss: {
			enabled: true,
			config: {
				inline: ["none"],
				compatibility: 'ie8'
			}
		}
	},

	js: {
		sourcemaps: {
			enabled: 'dev'
		},
		browserify: {
			enabled: false
		},

		babeljs: {
			enabled: true,
			config: {
				minified: true,
				comments: false
			}
		}
	},

	es6: {
		sourcemaps: {
			enabled: 'dev'
		},
		browserify: {
			enabled: true
		},

		babeljs: {
			enabled: true,
			config: {
				minified: true,
				presets: [
					[
						'@babel/preset-env',
						{
							targets: {
								browsers: browserlist
							}
						}
					]
				]
			}
		}
	},

	clean: {
		enabled: 'dist',
		paths: ['./htdocs/**/*.map', './src/tmp']
	},

	images: {
		imagemin: {
			enabled: true,
			config: [
				imagemin.gifsicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({ plugins: [{ removeViewBox: true }] })
			]
		}
	},

	svg: {
		svgmin: {
			enabled: true,
			config: {}
		}
	},

	favicons: {
		enabled: true,
		themeColor: '#cafe23',
		iconsPath: './',
		appName: 'FoobarBaz'
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
				'../wp-smart-acf-2/**/*.*']
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
