var gulp = require('gulp');
var csso = require('gulp-csso'); 
var rename = require("gulp-rename");
var scss = require('gulp-sass');

gulp.task('scssTest', function(){
    return gulp.src('./app/sсss/*.scss') 
    .pipe(scss())
    .pipe(gulp.dest('./app/css'));
});

gulp.task('minCss', function () {
    return gulp.src('./app/css/style.css')    
       .pipe(csso()) 
       .pipe(rename({ suffix: ".min" })) 
       .pipe(gulp.dest('./dist/css')); 
});


gulp.task('watch', gulp.series (['scssTest'],['minCss'], function(){
    gulp.watch('./app/sсss/*.scss',gulp.series(['scssTest'], ['minCss']));
}));