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
    del            = require('del') // Удалятор
    imagemin       = require('gulp-imagemin')
    pngquant       = require('imagemin-pngquant')
    autoprefixer   = require('gulp-autoprefixer')
    server         = lr();

gulp.task('sass', function(){
    gulp.src([
      'app/sass/**/*.scss',
      'app/sass/**/*.sass'
      ])
      .pipe(sass())
      .pipe(autoprefixer(['last 15 version','> 1%','ie 8', 'ie 7'], {cascade: true }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true})) //автоматический релоад стрим при изменениях.
});
// Компилируем Sass в Css. в нашем случае Scss



// gulp.task('default',function(){
//     gulp.src('app/css/*.css') 
//       .pipe(concat('css/con/bundle.css'))
//       .pipe(gulp.dest('app/'))
//       .pipe(csso())
//       .pipe(rename('css/min/bundle.min.css'))
//       .pipe(gulp.dest('app/'))
//       .pipe(notify(' - Чык-Чырык!!!'))

// });
// Объединение CSS и их минификация



gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
// Сервер, директорией которого является указанная папка 



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



gulp.task('css-libs', ['sass'], function(){
  return gulp.src('app/css/libs.css')
  .pipe(csso())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
});
//минифицируем выбранный файл, переименовывая его, добавляя суфикс min и помещая в нужное место
//перед выполнением функции, выполняем сасс-таск.
//В watch соответсвенно меняем таск 'sass' на таск 'css-libs'



gulp.task('clean', function(){
  return del.sync('favorTheme')
});


gulp.task('img', function() {
  return gulp.src('app/img/**/*')
  .pipe(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    une: [pngquant()]
  }))
  .pipe(gulp.dest('favorTheme/img'));
});

gulp.task('watch',['browser-sync', 'css-libs', 'scripts'], function(){
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);// Запускает релоад
    gulp.watch('app/js/*.js', browserSync.reload);// при изменениях в html and js файлах
});



gulp.task('build', ['clean','img', 'sass', 'scripts'], function(){

  var buildCss = gulp.src([
      'app/css/main.css',
      'app/css/libs.min.css',
      'app/css/min/bootstrap-grid-3.3.1.min.css'
    ])
  .pipe(gulp.dest('favorTheme/css'))

  var buildFonts = gulp.src([
      'app/fonts/**/*'
    ]) 
  .pipe(gulp.dest('favorTheme/fonts'))

  var buildJs = gulp.src('app/js/**/*')
  .pipe(gulp.dest('favorTheme/js'))

  var buildHTML = gulp.src('app/*.html')
  .pipe(gulp.dest('favorTheme'))

  var buildPHP = gulp.src('app/*.php')
  .pipe(gulp.dest('favorTheme'))

  var buildPNG = gulp.src('app/*.png')
  .pipe(gulp.dest('favorTheme'))

  var buildStyleCss = gulp.src('app/css/main.css')
  .pipe(rename('style.css'))
  .pipe(gulp.dest('favorTheme'))
  ;
});