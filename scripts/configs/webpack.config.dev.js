const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const devConfig = {
  mode: 'development'
}

module.exports = merge.smart(baseConfig, devConfig)