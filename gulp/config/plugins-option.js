export const pluginsOption = {
  pug: {
    pretty: true,
    verbose: true,
  },

  prettyHtml: {
    indent_size: 2,
    indent_char: ' ',
    unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
  },

  rename: {
    basename: 'style',
  },
  renameMin: {
    basename: 'style',
    suffix: '.min',
  },

  autoprefixer: {
    grid: true,
    cascade: false,
  },

  imagemin: {
    progressiv: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 5,
  },
};
