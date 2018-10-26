var CONSTANT = require('./constant');

var util = function(opt){
  var env = opt.env;

  return {
    isEnvPrd: function(){
      return env === CONSTANT.ENV_PRD;
    },
    isEnvStg: function(){
      return env === CONSTANT.ENV_STG;
    },
    isEnvDev: function(){
      return env === CONSTANT.ENV_DEV;
    },
  }

};

module.exports = util;