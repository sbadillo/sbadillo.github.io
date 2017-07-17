var gulp = require('gulp'),
mainBowerFiles = require('main-bower-files'),
browserSync = require('browser-sync').create(),
concat = require('gulp-concat'),
debug = require('gulp-debug'),


exec = require('child_process').exec,
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
merge = require('merge-stream'),
jshint = require('gulp-jshint'),
ignore = require('gulp-ignore'),
gutil = require('gulp-util');

// Directory where to run pelican
var pelicanDir = '../../..';  //go up three levels

// set common input directories
var bowerDir = './bower_components';
var ownDir = './own';

// set common output dir
var staticDir = '../static';


// ==============================
//  vendor files to static folder
// ==============================

gulp.task('copy-vendor-files', function(cb) {

  // copy vendor js files
  var js_vendor = gulp.src(mainBowerFiles('**/*.js', {includeDev:'mixed'} ))
  .pipe(debug({title:'concat to vendor.js:', showFiles:true}))
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest(staticDir + '/js/'));

  // copy own js files
  var js_own = gulp.src( ownDir + '/js/**/*.js' )
  .pipe(debug({title:'concat to own.js:', showFiles:false}))
  .pipe(concat('own.js'))
  .pipe(gulp.dest(staticDir + '/js/'));

  // copy vendor CSS files 
  var css_vendor = gulp.src(mainBowerFiles('**/*.css'))
  .pipe(gulp.dest(staticDir + '/css/'));

  return merge(js_vendor, js_own, css_vendor);

});

// ==============================
//  compile custom bootstrap to static folder
// ==============================

gulp.task('sass', function () {
	gulp.src( ownDir + '/scss/main.scss' )
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(staticDir + '/css/'));
});


// ==============================
//  run Pelican 
// ==============================

gulp.task('runPelican', ['copy-vendor-files', 'sass'], function (cb) {
	exec( 'pelican -d', { cwd: pelicanDir
	}, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});	

gulp.task('default', ['copy-vendor-files','sass', 'runPelican'], function(){});



// ==============================
//  Serve watch and browsersync 
// ==============================


// auxiliary task to ensure browserSync runs after default is done.
gulp.task('reload-browser', ['default'], function(){
	// when changes arrive to output folder, refresh browser
	browserSync.reload()
});

// main 
gulp.task('serve', ['default'], function() {

	// initialize server at localhost:3000
	
	browserSync.init({
		server: pelicanDir + "/output"
	});
	
	// run all default tasks if sources change,
	// then reload browser
	
	gulp.watch([
		"../templates/*.html",
		bowerDir + "**/**/*.*",
		ownDir + "**/**/*.*",
		pelicanDir + "/pelicanconf.py",
		pelicanDir + "/content/**/*.*"
		],
		['reload-browser']);
	
});

