const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const mode = {
  isProd: isProd,
  isDev: isDev,
};
