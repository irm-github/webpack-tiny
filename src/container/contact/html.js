var qs = require('query-string');
var query = qs.stringify({ name: ['ironman', 'hulk'] }, {arrayFormat: 'bracket'});

var tpl = require('./index.swig?name=ironman');
// function importAll(r) {
//   r.keys().forEach(key => {
//     if (key === './index.swig') {
//       tpl = r(key);
//     }
//   });
// }
// importAll(require.context('./', false, /\.swig$/));

module.exports = tpl;