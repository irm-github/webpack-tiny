var CONSTANT = require('./constant');
var fs = require('fs');
var path = require('path');

var util = function(opt){
  var env = opt.env;
  var entryOpt = opt.entryOpt || {};

  return {
    // 环境相关
    isEnvPrd: function(){
      return env === CONSTANT.ENV_PRD;
    },
    isEnvStg: function(){
      return env === CONSTANT.ENV_STG;
    },
    isEnvDev: function(){
      return env === CONSTANT.ENV_DEV;
    },

    // 构建入口相关
    getEntries: function(){
      var absTplDir = entryOpt.absTplDir || '';
      var excludeArr = entryOpt.exclude || [];
      var entryObj = {};
      var entryArr = fs.readdirSync(absTplDir);
      // 过滤排除掉的文件夹
      entryArr = entryArr.filter(function(entry){
        if (excludeArr.indexOf(entry) === -1) {
          entryObj[entry] = path.resolve(absTplDir, entry);
          return true;
        }
        return false;
      });
      return {
        arr: entryArr,
        obj: entryObj
      };
    },
  }

};

module.exports = util;