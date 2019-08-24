const withCSS = require('@zeit/next-css');
const appConfig = require('./app.config');

module.exports = withCSS({
  cssModules: true,
  publicRuntimeConfig: {
    ...appConfig
  }
});
