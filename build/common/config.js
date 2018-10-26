var CONSTANT = require('./constant');

var path = require('path');
var program = require('commander');
var UtilClass = require('./util');
var util = null;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var DefinePlugin = Webpack.DefinePlugin;

program
  .option('-e, --env [env]', 'Indicate the env')
  .option('-w --watch', 'Whether watch mode or not')
  .option('--host', 'Host ip for devserver')
  .option('--port', 'Listen port for devserver')
  .option('--hot', 'Use Hot Module Replacement or not')
  .option('--inline', 'Compile inline while using hot flag')
  .option('--color', 'Colorful output')
  .option('--progress', 'Output progress')
  .option('-c, --config [env]', 'Indicate the config file')
  .parse(process.argv);

util = UtilClass({
  env: program.env
});

var config = {
  // context: CONSTANT.ROOT_PATH,
  entry: {
    'home': path.resolve(CONSTANT.SRC_PATH, 'home/index.js'),
    'about': path.resolve(CONSTANT.SRC_PATH, 'about/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: 'ejs-compiled-loader',
      },
      {
        test: /\.js$/,
        include: CONSTANT.SRC_PATH,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      // 环境相关
      ENV: JSON.stringify(program.env),
      isEnvPrd: JSON.stringify(util.isEnvPrd()),
      isEnvStg: JSON.stringify(util.isEnvStg()),
      isEnvDev: JSON.stringify(util.isEnvDev()),
    }),
    // 生成页面插件
    new HtmlWebpackPlugin({
      filename: 'home/index.html',  //默认目录路径为output.path
      template: path.resolve(CONSTANT.SRC_PATH, 'home/html.js'), //默认目录路径为根目录
      inject: true,
      chunks: [ 'home' ],
      minify: (program.env === CONSTANT.ENV_PRD)
        ? {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          html5: true,
          minifyCSS: true,
          removeComments: true,
          removeEmptyAttributes: true,
        }
        : false,
    }),
    new HtmlWebpackPlugin({
      filename: 'about/index.html',  //默认目录路径为output.path
      // template: path.resolve(CONSTANT.SRC_PATH, 'about/html.js'), //默认目录路径为根目录
      // template: 'ejs-compiled!'+path.resolve(CONSTANT.SRC_PATH, 'about/index.ejs'), //默认目录路径为根目录
      template: 'ejs-compiled-loader!'+'./src/about/index.ejs', //默认目录路径为根目录
      inject: true,
      chunks: [ 'about' ],
      minify: (program.env === CONSTANT.ENV_PRD)
        ? {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          html5: true,
          minifyCSS: true,
          removeComments: true,
          removeEmptyAttributes: true,
        }
        : false,
    }),
  ]
};

module.exports = {
  config: config,
  program: program,
  util: util,
};