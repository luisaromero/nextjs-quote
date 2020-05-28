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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Home = ({\n  quotes\n}) => __jsx(\"main\", {\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 1\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}, __jsx(\"title\", {\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, \"Breaking bad random quote\"), __jsx(\"meta\", {\n  name: \"description\",\n  content: \"principal page\",\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }\n})), __jsx(\"h1\", {\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}, \"Random Quote From Breaking Bad\"), __jsx(\"img\", {\n  src: \"/breaking-bad.jpg\",\n  alt: \"breaking bad image with walter white and jesse pinkman\",\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }\n}), quotes.map(e => __jsx(\"div\", {\n  key: e.author,\n  className: \"jsx-3866782912\" + \" \" + \"quotes\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }\n}, __jsx(\"p\", {\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 1\n  }\n}, \"Quote : \", e.quote), __jsx(\"p\", {\n  className: \"jsx-3866782912\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 1\n  }\n}, \"Author : \", e.author))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"3866782912\",\n  __self: undefined\n}, \"p{font-size:20px;color:white;text-transform:uppercase;padding:3%;}h1{padding:1%;color:white;}.quotes{width:60%;heigth:70%;position:absolute;background:rgba(255,255,255,.2);opacity:0.8;text-align:justify;color:white;}body{width:100%;margin:0 auto;padding:0 auto;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;postion:relative;background:black;width:100%;heigth:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img{width:100%;height:100vh;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNlL0RvY3VtZW50b3MvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBLEFBRW1CLEFBTUEsQUFJSixBQVdFLEFBS0UsQUFhRixVQTVCQSxDQUpHLEFBZUMsQUFrQkYsSUF2Q0gsTUFXUSxFQUpuQixDQWlDRixDQWxCa0IsRUFyQlMsWUFXUSxDQVduQyxZQXJCWSxXQUNWLFFBVWEsR0FhTSxTQVpDLFNBYUcsVUFaVixZQUVmLHdEQVdvQixpQkFDQSxpQkFDTixXQUNDLFlBQ1csbUdBQ0osNkZBR3RCIiwiZmlsZSI6Ii9ob21lL21hcmNlL0RvY3VtZW50b3MvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgSG9tZSAgPSAoe3F1b3Rlc30pID0+IChcbiAgIFxuPG1haW4+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmVha2luZyBiYWQgcmFuZG9tIHF1b3RlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInByaW5jaXBhbCBwYWdlXCIvPlxuICAgIDwvSGVhZD5cbiAgICA8aDE+UmFuZG9tIFF1b3RlIEZyb20gQnJlYWtpbmcgQmFkPC9oMT5cbiAgICA8aW1nIHNyYz0nL2JyZWFraW5nLWJhZC5qcGcnIGFsdD1cImJyZWFraW5nIGJhZCBpbWFnZSB3aXRoIHdhbHRlciB3aGl0ZSBhbmQgamVzc2UgcGlua21hblwiLz5cbntxdW90ZXMubWFwKGUgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInF1b3Rlc1wiIGtleT17ZS5hdXRob3J9PiAgXG4gIFxuPHAgPlF1b3RlIDoge2UucXVvdGV9PC9wPlxuPHAgPkF1dGhvciA6IHtlLmF1dGhvcn08L3A+XG48L2Rpdj5cbikpfVxuPHN0eWxlIGdsb2JhbCBqc3g+ICB7XG5gcCB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOjMlO1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgcGFkZGluZzoxJTtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAucXVvdGVze1xuICAgICB3aWR0aDo2MCU7XG4gICAgICBoZWlndGg6NzAlO1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjIpO1xuICAgICAgb3BhY2l0eTowLjg7XG4gICAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIFxuICB9XG4gIFxuICBib2R5e1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzowIGF1dG87XG4gIH1cbiAgbWFpbntcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgcG9zdGlvbjpyZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6YmxhY2s7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgaGVpZ3RoOjEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICBcbiAgICBcbiAgfVxuICBpbWd7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgaGVpZ2h0OjEwMHZoOyAgICBcbiAgfVxuICBcbiAgYFxuIFxufSBcbiAgIFxuPC9zdHlsZT5cbjwvbWFpbj5cbik7XG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2JyZWFraW5nLWJhZC1xdW90ZXMuaGVyb2t1YXBwLmNvbS92MS9xdW90ZXMnKTtcbiAgICBjb25zdCBxdW90ZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgcmV0dXJue3F1b3Rlc307XG4gICAgXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\\n/*@ sourceURL=/home/marce/Documentos/next-movies/pages/index.js */\"));\n\nHome.getInitialProps = async () => {\n  const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n  const quotes = await response.json();\n  return {\n    quotes\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwiYXV0aG9yIiwicXVvdGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBSSxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixFQUVJO0FBQU0sTUFBSSxFQUFDLGFBQVg7QUFBeUIsU0FBTyxFQUFDLGdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUxKLEVBTUk7QUFBSyxLQUFHLEVBQUMsbUJBQVQ7QUFBNkIsS0FBRyxFQUFDLHdEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFOSixFQU9DQSxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsQ0FBQyxJQUNYO0FBQXdCLEtBQUcsRUFBRUEsQ0FBQyxDQUFDQyxNQUEvQjtBQUFBLHNDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFhRCxDQUFDLENBQUNFLEtBQWYsQ0FGRSxFQUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBY0YsQ0FBQyxDQUFDQyxNQUFoQixDQUhFLENBREQsQ0FQRDtBQUFBO0FBQUE7QUFBQSx3NkdBRkE7O0FBb0VBSixJQUFJLENBQUNNLGVBQUwsR0FBdUIsWUFBWTtBQUMvQixRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFEQUFELENBQTVCO0FBQ0EsUUFBTVAsTUFBTSxHQUFHLE1BQU1NLFFBQVEsQ0FBQ0UsSUFBVCxFQUFyQjtBQUVBLFNBQU07QUFBQ1I7QUFBRCxHQUFOO0FBRUgsQ0FORDs7QUFVZUQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBIb21lICA9ICh7cXVvdGVzfSkgPT4gKFxuICAgXG48bWFpbj5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJyZWFraW5nIGJhZCByYW5kb20gcXVvdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJpbmNpcGFsIHBhZ2VcIi8+XG4gICAgPC9IZWFkPlxuICAgIDxoMT5SYW5kb20gUXVvdGUgRnJvbSBCcmVha2luZyBCYWQ8L2gxPlxuICAgIDxpbWcgc3JjPScvYnJlYWtpbmctYmFkLmpwZycgYWx0PVwiYnJlYWtpbmcgYmFkIGltYWdlIHdpdGggd2FsdGVyIHdoaXRlIGFuZCBqZXNzZSBwaW5rbWFuXCIvPlxue3F1b3Rlcy5tYXAoZSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzXCIga2V5PXtlLmF1dGhvcn0+ICBcbiAgXG48cCA+UXVvdGUgOiB7ZS5xdW90ZX08L3A+XG48cCA+QXV0aG9yIDoge2UuYXV0aG9yfTwvcD5cbjwvZGl2PlxuKSl9XG48c3R5bGUgZ2xvYmFsIGpzeD4gIHtcbmBwIHtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6MyU7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBwYWRkaW5nOjElO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gIC5xdW90ZXN7XG4gICAgIHdpZHRoOjYwJTtcbiAgICAgIGhlaWd0aDo3MCU7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gICAgICBvcGFjaXR5OjAuODtcbiAgICAgIHRleHQtYWxpZ246anVzdGlmeTtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgXG4gIH1cbiAgXG4gIGJvZHl7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOjAgYXV0bztcbiAgfVxuICBtYWlue1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICBwb3N0aW9uOnJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDpibGFjaztcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlndGg6MTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgIFxuICAgIFxuICB9XG4gIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6MTAwdmg7ICAgIFxuICB9XG4gIFxuICBgXG4gXG59IFxuICAgXG48L3N0eWxlPlxuPC9tYWluPlxuKTtcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYnJlYWtpbmctYmFkLXF1b3Rlcy5oZXJva3VhcHAuY29tL3YxL3F1b3RlcycpO1xuICAgIGNvbnN0IHF1b3RlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICByZXR1cm57cXVvdGVzfTtcbiAgICBcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marce/Documentos/next-movies/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });