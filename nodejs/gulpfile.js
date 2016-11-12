var gulp=require('gulp');
var stylus=require('gulp-stylus');
var rename=require('gulp-rename');
var browserify=require('browserify');
 var vinyl=require('vinyl-source-stream');
var babel =require('babelify');




gulp.task('assets',function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
	});



gulp.task('css',function(){

	gulp.src('./public/index.styl')
	.pipe(stylus({
		'include css':true
	}))
	.pipe(rename('app.css'))
	.pipe(gulp.dest('./public/'))
});

gulp.task('js',function(){
	browserify('./sources/index.js')
	.transform(babel)
	.bundle()
	.pipe(vinyl('index.js'))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('public'))
	});




gulp.task('default',['css','assets','js']);



