var gulp = require('gulp'),
	del = require('del'),
	less = require('less');

gulp.task('clean:dest', function(){
	// return gulp.src(['dest/.*'], {read: false})
	// 		   .pipe(clean());

	return del([
			'dest/**/*'
		]);
});

gulp.task('less', function(){

});

gulp.task('concat', function(){

});


gulp.task('bulid', function(){
	runSequence(
		'clean:dest',
		'less',
		'concat',
		function(error){
			if (error) {
				console.log(error.message);
			} else {
				console.log('bulid finish success.');
			}
		}
	)
});
