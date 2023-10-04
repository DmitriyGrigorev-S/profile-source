import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const src = './src';
const build = './build';

export const path = {
  build: {
    html: `${build}/`,
    style: `${build}/css/`,
    script: `${build}/js/`,
    images: `${build}/assets/images/`,
    files: `${build}/assets/files/`,
    svg: `${build}/assets/images/svg/`,
    fonts: `${build}/assets/fonts/`
  },
  src: {
    html: `${src}/pug/pages/*.pug`,
    style: `${src}/scss/main.scss`,
    script: `${src}/js/index.js`,
    images: `${src}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${src}/assets/images/**/*.svg`,
    svgicons: `${src}/assets/images/svg/**/*.svg`,
    files: `${src}/assets/files/**/*.*`,
    data: `${src}/data-json/`,
    json: `${src}/data-json/*.json`,
    // temp: `${src}/data/temp/`
  },
  watch: {
    html: `${src}/pug/**/*.pug`,
    style: `${src}/scss/**/*.scss`,
    script: `${src}/js/**/*.js`,
    images: `${src}/assets/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    files: `${src}/assets/files/**/*.*`,
    json: `${src}/data-json/*.json`,
    pugComponents: `${src}/components/**/*.pug`,
    scssComponents: `${src}/components/**/*.scss`
  },
  clean: build,
  buildFolder: build,
  srcFolder: src,
  rootFolder: rootFolder,
}