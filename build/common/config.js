var CONSTANT = require('./constant');

var program = require('commander');
var Webpack = require('webpack');
var DefinePlugin = Webpack.DefinePlugin;

program
  .option('-e, --env [env]', 'Indicate the env')
  .option('-w --watch', 'Whether watch mode or not')
  .option('-c, --config [env]', 'Indicate the config file')
  .parse(process.argv);

var judgeEnv = function(env, which){
  return env === which;
};

var config = {
  context: CONSTANT.ROOT_PATH,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: CONSTANT.SRC_PATH,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      ENV: "'" + program.env + "'",
      isEnvPrd: function(){ return judgeEnv(ENV, CONSTANT.ENV_PRD); },
      isEnvStg: function(){ return judgeEnv(ENV, CONSTANT.ENV_STG); },
      isEnvDev: function(){ return judgeEnv(ENV, CONSTANT.ENV_DEV); },
    }),
  ]
};

module.exports = {
  program: program,
  config: config,
};