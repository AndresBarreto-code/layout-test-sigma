let gulp = require('gulp');
let sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', async () => {
    gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', async () => {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('./sass/components/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass','sass:watch'), async () => {
    console.log("Se han ejecutado las tareas.");
});
