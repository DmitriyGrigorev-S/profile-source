import gulp from 'gulp';

// config
import { path } from './gulp/config/path.js';
import { mode } from './gulp/config/mode.js';
import { plugins } from './gulp/config/plugins.js';
import { pluginsOption } from './gulp/config/plugins-option.js';
import { webpackConfig } from './webpack.config.js';

// tasks
import { html } from './gulp/tasks/html.js';
import { style } from './gulp/tasks/style.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/images.js';
import { copy } from './gulp/tasks/copy.js';
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js';
// import { data } from './gulp/tasks/data.js';

import { clean } from './gulp/tasks/clean.js';
import { server } from './gulp/tasks/server.js';

// global variable
global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
  pluginsOption: pluginsOption,
  mode: mode,
  webpackConfig: webpackConfig
};

// watcher
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.style, style);
  gulp.watch(path.watch.script, script);
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.json, html);
  gulp.watch(path.watch.pugComponents, html);
  gulp.watch(path.watch.scssComponents, style)
}

// global tasks
const fonts = gulp.series(otfToTtf, ttfToWoff)

const build = gulp.series(
  clean,
  fonts,
  gulp.parallel(copy, html, style, script, images, sprite)
);

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
);

export default mode.isProd
 ? build
 : dev;