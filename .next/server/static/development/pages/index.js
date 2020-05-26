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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import \"isomorphic-fetch\";\n\nconst Home = ({\n  quotes\n}) => __jsx(\"div\", {\n  id: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 1\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, \"Random Quotes From breaking Bad\"), __jsx(\"img\", {\n  src: \"/breaking-bad.jpg\",\n  alt: \"imagen de breaking bad con walter white y jesse pinkman\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}), quotes.map(e => __jsx(\"div\", {\n  id: \"quotes\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 1\n  }\n}, \"Quote :\", e.quote), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 1\n  }\n}, \"Author : \", e.author))), __jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 1\n  }\n}, \"  \", `p , h1{\n    color:white;\n    }\n    \n  #quotes{\n      width:100%;\n      height:100%;\n  }  \n  \n  *{\n      background:black;\n      width:100%;\n      margin:0\n  }\n  #container{\n      display:flex;\n      text-align:center;\n      flex-direction:column;\n  }\n  img{\n      width:100%;\n      height:600px;\n  }`));\n\nHome.getInitialProps = async () => {\n  const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n  const quotes = await response.json();\n  return {\n    quotes\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwicXVvdGUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUksQ0FBQztBQUFDQztBQUFELENBQUQsS0FFZDtBQUFLLElBQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURKLEVBRUk7QUFBSyxLQUFHLEVBQUMsbUJBQVQ7QUFBNkIsS0FBRyxFQUFDLHlEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHQ0EsTUFBTSxDQUFDQyxHQUFQLENBQVdDLENBQUMsSUFDWDtBQUFLLElBQUUsRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVdBLENBQUMsQ0FBQ0MsS0FBYixDQURFLEVBRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBYUQsQ0FBQyxDQUFDRSxNQUFmLENBRkUsQ0FERCxDQUhELEVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREQsQ0FUQSxDQUZBOztBQXlDQUwsSUFBSSxDQUFDTSxlQUFMLEdBQXVCLFlBQVk7QUFDL0IsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxxREFBRCxDQUE1QjtBQUNBLFFBQU1QLE1BQU0sR0FBRyxNQUFNTSxRQUFRLENBQUNFLElBQVQsRUFBckI7QUFFQSxTQUFNO0FBQUNSO0FBQUQsR0FBTjtBQUVILENBTkQ7O0FBVWVELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuXG5jb25zdCBIb21lICA9ICh7cXVvdGVzfSkgPT4gKFxuICAgXG48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlJhbmRvbSBRdW90ZXMgRnJvbSBicmVha2luZyBCYWQ8L2gxPlxuICAgIDxpbWcgc3JjPScvYnJlYWtpbmctYmFkLmpwZycgYWx0PVwiaW1hZ2VuIGRlIGJyZWFraW5nIGJhZCBjb24gd2FsdGVyIHdoaXRlIHkgamVzc2UgcGlua21hblwiLz5cbntxdW90ZXMubWFwKGUgPT4gKFxuICA8ZGl2IGlkPVwicXVvdGVzXCI+ICBcbjxwPlF1b3RlIDp7ZS5xdW90ZX08L3A+XG48cD5BdXRob3IgOiB7ZS5hdXRob3J9PC9wPlxuPC9kaXY+XG4pKX1cbjxzdHlsZT4gIHtcbmBwICwgaDF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIFxuICAjcXVvdGVze1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDoxMDAlO1xuICB9ICBcbiAgXG4gICp7XG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIG1hcmdpbjowXG4gIH1cbiAgI2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICB9XG4gIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6NjAwcHg7XG4gIH1gXG4gXG59IFxuICAgXG48L3N0eWxlPlxuPC9kaXY+XG4pO1xuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9icmVha2luZy1iYWQtcXVvdGVzLmhlcm9rdWFwcC5jb20vdjEvcXVvdGVzJyk7XG4gICAgY29uc3QgcXVvdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldHVybntxdW90ZXN9O1xuICAgIFxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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