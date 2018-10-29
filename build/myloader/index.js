var swigLoader = require('swig-loader');
var qs = require('query-string');
var path = require('path');
var fs = require('fs');

var jsonLoader = function(source){
	var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value)
    .replace(/\u2028/g, '')
		.replace(/\u2029/g, '');
	return JSON.parse(value);	
}

function assign(result) {
	var args = Array.prototype.slice.call(arguments, 1);
	args.forEach(function(a) {
		Object.keys(a || {}).forEach(function(key) {
			result[key] = a[key];
		});
	});
	return result;
}

module.exports = function(content){
	swigLoader.resourceQueryCustomizer(function(resQuery, resPath){
		var localsPath = path.resolve(resPath, '../locals.js');
		var locals = {};
		
		if (fs.existsSync(localsPath)) {
			locals = require(localsPath);
		} else {
		}
		assign(resQuery, locals);
	});
	return swigLoader.call(this, content);
};