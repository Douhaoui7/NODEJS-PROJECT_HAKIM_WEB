const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });

   gulp.watch('*/**/*.ejs').on('change', browserSync.reload); 
   gulp.watch('css/*.css').on('change', browserSync.reload); 
   gulp.watch('js/*.js').on('change', gulp.series('app-js', browserSync.reload)); 
});