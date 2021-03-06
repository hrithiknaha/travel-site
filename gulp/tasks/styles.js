var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssimport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba ,autoprefixer]))
	.on('error', function(errInfo){		//Error Handling in Gulp
		console.log(errInfo.toString());
		this.emit('end');		//Used to handel the error properly, without intreuppting the watch task, just remember it or copy it.
	})
	.pipe(gulp.dest('./app/temp/styles'));
});