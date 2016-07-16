var lr             = require('tiny-lr'), // Минивебсервер для livereload
    gulp           = require('gulp'), // Сообственно Gulp JS
    jade           = require('gulp-jade'), // Плагин для Jade
    stylus         = require('gulp-stylus'), // Плагин для Stylus
    livereload     = require('gulp-livereload'), // Livereload для Gulp
    myth           = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso           = require('gulp-csso'), // Минификация CSS
    imagemin       = require('gulp-imagemin'), // Минификация изображений
    uglify         = require('gulp-uglify'), // Минификация JS
    concat         = require('gulp-concat'), // Склейка файлов
    connect        = require('connect'), // Webserver
    rename         = require("gulp-rename");// переименование
    notify         = require('gulp-notify'),// всплывающее сообщение
    sass           = require('gulp-sass'), // компилятор 
    browserSync    = require('browser-sync'), //Сервер
    server         = lr();

gulp.task('sass', function(){
    gulp.src('app/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true})) //автоматический релоад стрим при изменениях.
});
// Компилируем Sass в Css. в нашем случае Scss



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



gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
// Сервер 



gulp.task('scripts', function(){
  return gulp.src([
      'app/libs/jquery/dist/jquery.min.js',
      'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});
//Конкатинируем(объединяем) скрипты , выбирая их по массиву, минифицируем и кладем под новым именем в нужное место



gulp.task('watch',['browser-sync', 'sass'], function(){
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);// Запускает релоад
    gulp.watch('app/js/*.js', browserSync.reload);// при изменениях в html and js файлах
});
