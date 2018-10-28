var qs = require('query-string');
var tpl = require('!!swig-loader!./index.swig?'+qs.stringify({ name: ['ironman', 'hulk'] }, {arrayFormat: 'bracket'}));
// var tpl = require('./index.swig');

module.exports = tpl;