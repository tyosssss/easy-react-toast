const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const prodConfig = {
  mode: 'production'
}

module.exports = merge.smart(baseConfig, prodConfig)