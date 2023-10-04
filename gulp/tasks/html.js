import pug from 'gulp-pug';
import prettyHtml from 'gulp-pretty-html';
import webpHtml from 'gulp-webp-html';
import fs from 'fs';
import data from 'gulp-data';
import path from 'path';

export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(data(function (file) {
    return JSON.parse(fs.readFileSync(app.path.src.data + path.basename(file.path, '.pug') + '.json'));
  }))
  .pipe(pug(app.pluginsOption.pug))
  .pipe(webpHtml())
  .pipe(prettyHtml(app.pluginsOption.prettyHtml))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream())
}