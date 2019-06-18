const gulp = require("gulp")
var exec = require('child_process').exec;


gulp.task("docs", (cb) => {
	exec('doxygen Doxyfile', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	  });
})
