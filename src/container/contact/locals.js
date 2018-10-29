var commonLocals = require('../common/locals.js');
var ret = Object.assign({}, commonLocals, {
  name: "thor",
});
ret.breadcrumbs.push('contact');
ret.breadcrumbs.push('index');
module.exports = ret;