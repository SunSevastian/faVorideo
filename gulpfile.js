var lr = require('tiny-lr'), // Минивебсервер для livereload
    gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    stylus = require('gulp-stylus'), // Плагин для Stylus
    livereload = require('gulp-livereload'), // Livereload для Gulp
    myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    connect = require('connect'), // Webserver
    rename = require("gulp-rename");// переименование
    notify =require('gulp-notify'),
    sass = require('gulp-sass'),
    server = lr();

gulp.task('sass', function(){
    gulp.src('app/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});

gulp.task('default',function(){
    gulp.src('app/css/*.css') 
      .pipe(concat('css/con/bundle.css'))
      .pipe(gulp.dest('app/'))
      .pipe(csso())
      .pipe(rename('css/min/bundle.min.css'))
      .pipe(gulp.dest('app/'))
      .pipe(notify(' - Чык-Чырык!!!'))

});
// Объединение CSS и их минификация

gulp.task('watch', function(){
    gulp.watch('app/sass/*.scss', ['sass'])
});
