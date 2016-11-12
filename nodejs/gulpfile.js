var gulp=require('gulp');
var stylus=require('gulp-stylus');
var rename=require('gulp-rename');
var browserify=require('browserify');
 var vinyl=require('vinyl-source-stream');
var babel =require('babelify');
var watchify=require('watchify');




gulp.task('assets',function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
	});



gulp.task('css',function(){

	gulp.src('./assets/index.styl')
	.pipe(stylus({
		'include css':true
	}))
	.pipe(rename('app.css'))
	.pipe(gulp.dest('./public/'))
});

gulp.task('js',function(){
	
	
	});

function compile(watch)
{
	var bundle=watchify(browserify('./sources/index.js'));
	function rebundle()
	{
		bundle
		.transform(babel)
		.bundle()
		.pipe(vinyl('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))
	}
	if(watch)
	{
		bundle.on('update',function(){
			console.log('-->Construyendo....');
			rebundle();
	})
	}
	rebundle();
}
gulp.task('build', function(){
	return compile();
	});
gulp.task('watch',function(){
	return compile(true);
	});

gulp.task('default',['css','assets','build']);



