const webpack = require('webpack')
const webpackConfig = require('./configs/webpack.config.prod')

module.exports = function (argv) {
  const compiler = webpack(webpackConfig)

  // console.log(JSON.stringify(webpackConfig, null, 2))

  compiler.plugin('done', function ({ compilation }) {
    if (compilation.errors.length) {
      compilation.errors.forEach(error => {
        console.log('[error]')
        console.log(`name: ${error.name}`)
        console.log(`message: ${error.message}`)
        console.log(`detail: ${error.details || ''}`)
      })
    }

    if (compilation.warnings.length) {
      compilation.warnings.forEach(warning => {
        console.log('[warngin]')
        console.log(`name: ${warning.name}`)
        console.log(`message: ${warning.message}`)
        console.log(`detail: ${warning.details || ''}`)
      })
    }
  })
  compiler.run()
}