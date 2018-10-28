var path = require('path');

// 路径常量
var ROOT_PATH = path.resolve(__dirname, '../../');
var SRC_PATH = path.resolve(ROOT_PATH, './src');
var DIST_PATH = path.resolve(ROOT_PATH, './dist');
var BUILD_PATH = path.resolve(ROOT_PATH, './build');
var SRC_CONTAINER_PATH = path.resolve(SRC_PATH, './container');

// 环境常量
var ENV_DEV = 'DEV';
var ENV_STG = 'STG';
var ENV_PRD = 'PRD';

module.exports = {
  ROOT_PATH,
  SRC_PATH,
  DIST_PATH,
  BUILD_PATH,
  SRC_CONTAINER_PATH,

  ENV_DEV,
  ENV_STG,
  ENV_PRD,
};
