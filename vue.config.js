const isDev = process.env.NODE_ENV !== 'production'

module.exportss = {
  configureWebpack: config => {
    let plugins = []
    if (!isDev) {
      plugins = [

      ]
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ]
  }
}
