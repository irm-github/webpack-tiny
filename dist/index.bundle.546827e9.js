/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  console.log('Hello World \\r\\n');\n\n  switch (DEV) {\n    case 'dev':\n      console.log('开发环境');\n      break;\n    case 'stg':\n      console.log('测试环境');\n      break;\n    case 'prd':\n      console.log('生成环境');\n      break;\n    default:\n      console.log('未知');\n      break;\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiRU5WIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQUk7QUFDSEEsVUFBUUMsR0FBUixDQUFZLGtCQUFaOztBQUVBLFVBQVFDLEdBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRUYsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNGLFNBQUssS0FBTDtBQUNFRCxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0YsU0FBSyxLQUFMO0FBQ0VELGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRjtBQUNFRCxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBO0FBWko7QUFjRCxDQWpCRCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKT0+e1xuICBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgXFxyXFxuJyk7XG5cbiAgc3dpdGNoIChFTlYpIHtcbiAgICBjYXNlICdkZXYnOlxuICAgICAgY29uc29sZS5sb2coJ+W8gOWPkeeOr+WigycpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3RnJzpcbiAgICAgIGNvbnNvbGUubG9nKCfmtYvor5Xnjq/looMnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZCc6XG4gICAgICBjb25zb2xlLmxvZygn55Sf5oiQ546v5aKDJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coJ+acquefpScpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });