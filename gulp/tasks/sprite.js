import svgSprite from 'gulp-svg-sprite'

export const sprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "svg",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../svg/sprite/sprite.svg',
        example: true
      }
    }
  }))
  .pipe(app.gulp.dest(app.path.build.images))
}