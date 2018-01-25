// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-cheap-module-source-map',
  resolveLoader: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ],
  externals: require('webpack-node-externals')()
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
