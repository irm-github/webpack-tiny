var path = require('path');
var Webpack = require('webpack');
var DefinePlugin = Webpack.DefinePlugin;

var CONSTANT = require('./common/constant');
var CONFIG = require('./common/config').config;

var config = {
  // 共有配置  
  // context: CONFIG.context,
  module: CONFIG.module,
  entry: CONFIG.entry,
  
  // 单独配置
  mode: 'development',
  output: {
    path: CONSTANT.DIST_PATH,
    publicPath: '/dist/', //静态资源存放于index.html同根目录下使用，即不分开部署时使用
    filename: '[name].bundle.dev.js',
    chunkFilename: "[name].chunk.dev.js"
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: false,
    disableHostCheck: true,
    contentBase: CONSTANT.ROOT_PATH,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  plugins: [
  ],
};

// 合并公共配置中的插件
config.plugins = CONFIG.plugins.concat(config.plugins);

module.exports = config;