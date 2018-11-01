var swigLoader = require('swig-loader');
// var qs = require('query-string');
var loaderUtils = require('loader-utils');
var path = require('path');
var fs = require('fs');

var LocalsFilename = 'locals.js';

var dependencies = [];

if (!Object.keys) {
	Object.keys = function(obj){
		var keys = [];
		if (typeof obj === 'object' && Object.getPrototypeOf(obj) !== Array.prototype) {
			for (var k in obj) {
				if (obj.hasOwnProperty(k)) {
					keys.push(k);
				}
			}
		}
		return keys;
	}
} 

// 扩展对象函数
function assign(result) {
	var args = Array.prototype.slice.call(arguments, 1);
	args.forEach(function(a) {
		Object.keys(a || {}).forEach(function(key) {
			result[key] = a[key];
		});
	});
	return result;
}


// 导出模块
module.exports = function(content){
	var _this = this;
	var options = loaderUtils.getOptions(this) || {};
	var addDependency = function(file){
		if (dependencies.indexOf(file) === -1) {
			// global.console.log('HHHHHHHHHHHHHHHHHHHHH');
			// global.console.log(dependencies);
			// 添加依赖
			_this.addDependency(file);
			// 添加到缓存数组
			dependencies.push(file);
		}
	};
	// 使用 swig-loader 的钩子函数
	swigLoader.resourceQueryCustomizer(function(resQuery, resPath){
		// 每个页面模块下的变量文件
		var localsFilename = options.localsFilename || LocalsFilename;
		var localsPath = path.resolve(resPath, path.join('../', localsFilename));
		var locals = {};
		
		// 如果存在则 require，且 assign
		if (fs.existsSync(localsPath)) {
			// 添加文件依赖
			addDependency(localsPath);
			// 删除缓存
			delete require.cache[require.resolve(localsPath)];
			// 重新 require
			locals = require(localsPath);
			assign(resQuery, locals);
		}
	});

	// 因为我们这个 loader 是 swig-loader 的包装体
	// 实际上还是调用了 swig-loader
	// 所以还要将 loader 内部的上下文 this，绑定到 swig-loader 的上下文中
	return swigLoader.call(this, content);
};