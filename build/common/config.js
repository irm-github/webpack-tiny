var CONSTANT = require('./constant');

var qs = require('query-string');
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
  env: program.env,
  entryOpt: {
    absTplDir: CONSTANT.SRC_CONTAINER_PATH,
    exclude: [
      'common'
    ]
  },
});

var entries = util.getEntries();

var config = {
  // context: CONSTANT.ROOT_PATH,
  entry: entries.obj,
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
        use: 'compile-ejs-loader',
      },
      {
        test: /\.swig$/,
        exclude: /node_modules/,
        use: path.resolve(CONSTANT.BUILD_PATH, 'myloader/index.js'),
        // use: 'swig-loader',
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
  ]
};

config.plugins = config.plugins.concat(generateHtmlWebpackPlugins());

function generateHtmlWebpackPlugins() {
  var plugins = entries.arr.map(function(entry){
    return new HtmlWebpackPlugin({
      filename: entry + '/index.html',  //默认目录路径为output.path
      // template: '!!swig-loader!'+path.resolve(CONSTANT.SRC_CONTAINER_PATH, entry+'/index.swig'), //默认目录路径为根目录
      template: path.resolve(CONSTANT.SRC_CONTAINER_PATH, entry+'/html.js'), //默认目录路径为根目录
      inject: true,
      chunks: [ entry ],
      minify: (util.isEnvStg() || util.isEnvPrd())
        ? {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          html5: true,
          minifyCSS: true,
          removeComments: true,
          removeEmptyAttributes: true,
        }
        : false,
    });
  });
  return plugins;
}

var query = qs.stringify({ name: ['ironman', 'hulk'] }, {arrayFormat: 'bracket'})
console.log(query);
console.log(typeof query);

module.exports = {
  config: config,
  program: program,
  util: util,
};