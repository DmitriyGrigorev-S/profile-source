import { mode } from './gulp/config/mode.js';

export const webpackConfig = {
  mode: mode.isProd ? 'production' : 'development',
  output: {
    filename: 'script.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  target: ['web', 'es5'],
};
