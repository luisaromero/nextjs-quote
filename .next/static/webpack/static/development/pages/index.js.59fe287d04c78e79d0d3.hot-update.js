webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import \"isomorphic-fetch\";\n\nvar Home = function Home(_ref) {\n  var quotes = _ref.quotes;\n  return __jsx(\"div\", {\n    id: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Random Quotes From breaking Bad\"), __jsx(\"img\", {\n    src: \"/breaking-bad.jpg\",\n    alt: \"imagen de breaking bad con walter white y jesse pinkman\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), quotes.map(function (e) {\n    return __jsx(\"div\", {\n      id: \"quotes\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 3\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 1\n      }\n    }, \"Quote :\", e.quote), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 1\n      }\n    }, \"Author : \", e.author));\n  }), __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 1\n    }\n  }, \"  \", \"p , h1{\\n    color:white;\\n    }\\n    h1{\\n        padding-top:2%;\\n        padding-bottom:2%;\\n    }\\n  #quotes{\\n      width:100%;\\n      height:100%;\\n  }  \\n  \\n  *{\\n      background:black;\\n      width:100%;\\n      margin:0\\n  }\\n  #container{\\n      display:flex;\\n      text-align:center;\\n      flex-direction:column;\\n  }\\n  img{\\n      width:100%;\\n      height:600px;\\n  }\"));\n};\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var response, quotes;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n\n        case 2:\n          response = _context.sent;\n          _context.next = 5;\n          return response.json();\n\n        case 5:\n          quotes = _context.sent;\n          return _context.abrupt(\"return\", {\n            quotes: quotes\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwicXVvdGUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLElBQU1BLElBQUksR0FBSSxTQUFSQSxJQUFRO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FFZDtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURKLEVBRUk7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLHlEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHQ0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLFdBQ1g7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV0EsQ0FBQyxDQUFDQyxLQUFiLENBREUsRUFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFhRCxDQUFDLENBQUNFLE1BQWYsQ0FGRSxDQURXO0FBQUEsR0FBWixDQUhELEVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4WUFUQSxDQUZjO0FBQUEsQ0FBZDs7S0FBTUwsSTtBQTRDTkEsSUFBSSxDQUFDTSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNJQyxLQUFLLENBQUMscURBQUQsQ0FEVDs7QUFBQTtBQUNiQyxrQkFEYTtBQUFBO0FBQUEsaUJBRUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZGOztBQUFBO0FBRWJSLGdCQUZhO0FBQUEsMkNBSWI7QUFBQ0Esa0JBQU0sRUFBTkE7QUFBRCxXQUphOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBVWVELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuXG5jb25zdCBIb21lICA9ICh7cXVvdGVzfSkgPT4gKFxuICAgXG48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlJhbmRvbSBRdW90ZXMgRnJvbSBicmVha2luZyBCYWQ8L2gxPlxuICAgIDxpbWcgc3JjPScvYnJlYWtpbmctYmFkLmpwZycgYWx0PVwiaW1hZ2VuIGRlIGJyZWFraW5nIGJhZCBjb24gd2FsdGVyIHdoaXRlIHkgamVzc2UgcGlua21hblwiLz5cbntxdW90ZXMubWFwKGUgPT4gKFxuICA8ZGl2IGlkPVwicXVvdGVzXCI+ICBcbjxwPlF1b3RlIDp7ZS5xdW90ZX08L3A+XG48cD5BdXRob3IgOiB7ZS5hdXRob3J9PC9wPlxuPC9kaXY+XG4pKX1cbjxzdHlsZT4gIHtcbmBwICwgaDF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBwYWRkaW5nLXRvcDoyJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgfVxuICAjcXVvdGVze1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDoxMDAlO1xuICB9ICBcbiAgXG4gICp7XG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIG1hcmdpbjowXG4gIH1cbiAgI2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICB9XG4gIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6NjAwcHg7XG4gIH1gXG4gXG59IFxuICAgXG48L3N0eWxlPlxuPC9kaXY+XG4pO1xuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9icmVha2luZy1iYWQtcXVvdGVzLmhlcm9rdWFwcC5jb20vdjEvcXVvdGVzJyk7XG4gICAgY29uc3QgcXVvdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldHVybntxdW90ZXN9O1xuICAgIFxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})