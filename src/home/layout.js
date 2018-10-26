const Layout = require('./layout.ejs');
const Header = require('../common/header.ejs');

module.exports = {
  init (data) {
    // 初始化
    
    return this;
  },
  render (opt) {
    const renderData = {
      Header: Header(),
    };
    return Layout(renderData);
  },
};