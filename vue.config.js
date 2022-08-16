// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: (config) => {
    let plugins = []
    if (!isDev) {
      plugins = []
      // if (!isDev) {
      //   plugins = [
      //     // gZip
      //     new CompressionWebpackPlugin({
      //       filename: '[file].gz[query]',
      //       algorithm: 'gzip',
      //       test: /\.(js|css)(\?.*)?$/i,
      //       threshold: 10240,
      //       minRatio: 0.8
      //     })
      //   ]
      // }
    }
    config.plugins = [...config.plugins, ...plugins]
  }
}
