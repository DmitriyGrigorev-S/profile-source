import dartSass from 'sass';
import gulpSass from 'gulp-sass';

import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import shorthand from 'gulp-shorthand';
import gcmq from 'gulp-group-css-media-queries';
import bulkSass from 'gulp-sass-bulk-import';
import webpCss from 'gulp-webp-css';

const sass = gulpSass(dartSass)

export const style = () => {
  return app.gulp.src(app.path.src.style, { sourcemaps: app.mode.isDev })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "Style",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(bulkSass())
  .pipe(sass())
  .pipe(webpCss())
  .pipe(autoprefixer(app.pluginsOption.autoprefixer))
  .pipe(shorthand())
  .pipe(gcmq())
  .pipe(rename(app.pluginsOption.rename))
  .pipe(app.gulp.dest(app.path.build.style, { sourcemaps: app.mode.isDev }))
  .pipe(csso())
  .pipe(rename(app.pluginsOption.renameMin))
  .pipe(app.gulp.dest(app.path.build.style, { sourcemaps: app.mode.isDev }))
  .pipe(app.plugins.browsersync.stream())
}