module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./dev/static/fonts/**/*.*')
            .pipe($.gulp.dest('./build/static/fonts/'));
    });
};
/*copy fonts from dir dev to dir build*/