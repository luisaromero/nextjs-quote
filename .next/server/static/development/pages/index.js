module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import \"isomorphic-fetch\";\n\nconst Home = ({\n  quotes\n}) => __jsx(\"div\", {\n  id: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 1\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, \"Random Quotes From breaking Bad\"), __jsx(\"img\", {\n  src: \"/breaking-bad.jpg\",\n  alt: \"imagen de breaking bad con walter white y jesse pinkman\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}), quotes.map(e => __jsx(\"div\", {\n  className: \"quotes\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 1\n  }\n}, \"Quote : \", e.quote), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 1\n  }\n}, \"Author : \", e.author))), __jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 1\n  }\n}, \"  \", `p {\n    font-size:22px;\n    color:white;\n    text-transform: uppercase;\n    padding:3%;\n    }\n    h1{\n        padding-top:2%;\n        padding-bottom:2%;\n        color:white;\n    }\n  .quotes{\n      width:700px;\n      heigth:100%;\n      position:absolute;\n      opacity:0.7;\n      background:rgba(255,255,255,.2);\n      top:70vh;\n      left:50vh;\n      text-align:justify;\n      \n  }\n  \n  *{\n      background:black;\n      width:100%;\n      margin:0\n  }\n  #container{\n      display:flex;\n      text-align:center;\n      flex-direction:column;\n      postion:relative;\n     \n    \n  }\n  img{\n      width:100%;\n      height:600px;\n      \n      \n  }`));\n\nHome.getInitialProps = async () => {\n  const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n  const quotes = await response.json();\n  return {\n    quotes\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwicXVvdGUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUksQ0FBQztBQUFDQztBQUFELENBQUQsS0FFZDtBQUFLLElBQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURKLEVBRUk7QUFBSyxLQUFHLEVBQUMsbUJBQVQ7QUFBNkIsS0FBRyxFQUFDLHlEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHQ0EsTUFBTSxDQUFDQyxHQUFQLENBQVdDLENBQUMsSUFDWDtBQUFLLFdBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVlBLENBQUMsQ0FBQ0MsS0FBZCxDQURFLEVBRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBYUQsQ0FBQyxDQUFDRSxNQUFmLENBRkUsQ0FERCxDQUhELEVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQURELENBVEEsQ0FGQTs7QUE0REFMLElBQUksQ0FBQ00sZUFBTCxHQUF1QixZQUFZO0FBQy9CLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMscURBQUQsQ0FBNUI7QUFDQSxRQUFNUCxNQUFNLEdBQUcsTUFBTU0sUUFBUSxDQUFDRSxJQUFULEVBQXJCO0FBRUEsU0FBTTtBQUFDUjtBQUFELEdBQU47QUFFSCxDQU5EOztBQVVlRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcblxuY29uc3QgSG9tZSAgPSAoe3F1b3Rlc30pID0+IChcbiAgIFxuPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5SYW5kb20gUXVvdGVzIEZyb20gYnJlYWtpbmcgQmFkPC9oMT5cbiAgICA8aW1nIHNyYz0nL2JyZWFraW5nLWJhZC5qcGcnIGFsdD1cImltYWdlbiBkZSBicmVha2luZyBiYWQgY29uIHdhbHRlciB3aGl0ZSB5IGplc3NlIHBpbmttYW5cIi8+XG57cXVvdGVzLm1hcChlID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZXNcIj4gIFxuPHA+UXVvdGUgOiB7ZS5xdW90ZX08L3A+XG48cD5BdXRob3IgOiB7ZS5hdXRob3J9PC9wPlxuPC9kaXY+XG4pKX1cbjxzdHlsZT4gIHtcbmBwIHtcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6MyU7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBwYWRkaW5nLXRvcDoyJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgLnF1b3Rlc3tcbiAgICAgIHdpZHRoOjcwMHB4O1xuICAgICAgaGVpZ3RoOjEwMCU7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIG9wYWNpdHk6MC43O1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4yKTtcbiAgICAgIHRvcDo3MHZoO1xuICAgICAgbGVmdDo1MHZoO1xuICAgICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xuICAgICAgXG4gIH1cbiAgXG4gICp7XG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIG1hcmdpbjowXG4gIH1cbiAgI2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgcG9zdGlvbjpyZWxhdGl2ZTtcbiAgICAgXG4gICAgXG4gIH1cbiAgaW1ne1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDo2MDBweDtcbiAgICAgIFxuICAgICAgXG4gIH1gXG4gXG59IFxuICAgXG48L3N0eWxlPlxuPC9kaXY+XG4pO1xuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9icmVha2luZy1iYWQtcXVvdGVzLmhlcm9rdWFwcC5jb20vdjEvcXVvdGVzJyk7XG4gICAgY29uc3QgcXVvdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldHVybntxdW90ZXN9O1xuICAgIFxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marce/Documentos/next-movies/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });