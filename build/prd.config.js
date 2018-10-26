var path = require('path');
var Webpack = require('webpack');
var DefinePlugin = Webpack.DefinePlugin;
var CleanPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var CONSTANT = require('./common/constant');
var CONFIG = require('./common/config').config;
var program = require('./common/config').program;
var util = require('./common/config').util;

var config = {
  // 共有配置  
  // context: CONFIG.context,
  module: CONFIG.module,
  entry: CONFIG.entry,
  
  // 单独配置
  mode: 'production',
  output: {
    path: CONSTANT.DIST_PATH,
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: "[name].chunk.[chunkhash:8].js"
  },
  plugins: [
    new CleanPlugin([ 'dist' ], {
      root: CONSTANT.ROOT_PATH, //指定根目录
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle:   true,
        warnings: true,
        compress: true,
        output: {
          beautify: false
        }
      }
    }),
  ],
};

// 测试环境
if (util.isEnvStg()) {
  config.devtool = 'source-maps';
}

config.plugins = CONFIG.plugins.concat(config.plugins);

module.exports = config;