const gulp = require("gulp")
var exec = require('child_process').exec;

gulp.task("docs", (cb) => {
	exec('doxygen Doxyfile', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		exec('cp ./public/css/search.css ./htdocs/search/', function (err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
			cb(err);
		})
		
	  });
})
