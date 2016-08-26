var gulp = require('gulp'),
	uglify = require('gulp-uglilfy');


gulp.task('compress', function() {
	return gulp.src('src/js/*.js')
		   .pipe(uglify({manage: false}))
		   .pipe(gulp.dest('build/js/*.js'));
});

gulp.task('default', ['compress']);