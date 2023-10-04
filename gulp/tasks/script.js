import webpack from 'webpack-stream';

export const script = () => {
  return app.gulp.src(app.path.src.script, { sourcemaps: app.mode.isDev })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JavaScript",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(webpack(app.webpackConfig))
  .pipe(app.gulp.dest(app.path.build.script, { sourcemaps: app.mode.isDev }))
  .pipe(app.plugins.browsersync.stream())
}