var gulp=require('gulp');
var stylus=require('gulp-stylus');

gulp.task('css',function(){

	gulp.src('./public/index.styl')
	.pipe(stylus({
		'include css':true
	}))
	.pipe(gulp.dest('./public/'))
});