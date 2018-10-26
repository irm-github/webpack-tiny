const ejs = require('ejs');
const fs = require('fs');
const content = '123';

fs.writeFileSync('test.txt', __dirname);


module.exports = ejs.render(content);