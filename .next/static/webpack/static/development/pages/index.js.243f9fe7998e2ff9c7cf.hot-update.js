webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import \"isomorphic-fetch\";\n\nvar Home = function Home(_ref) {\n  var quotes = _ref.quotes;\n  return __jsx(\"div\", {\n    id: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    className: \"hi\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 25\n    }\n  }, \"Random Quotes From breaking Bad\")), quotes.map(function (e) {\n    return __jsx(\"div\", {\n      id: \"quotes\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 3\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 1\n      }\n    }, \"Quote :\", e.quote), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 1\n      }\n    }, \"Author : \", e.author));\n  }), __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 1\n    }\n  }, \" \", \"p{\\n    color:white;\\n    }\\n  #quotes{\\n      background:green;\\n      width:100%;\\n      height:100%;\\n  }  \\n  h1{\\n      color:white\\n  }\\n  .hi{\\n      background:yellow\\n  }\\n  *{\\n      background:black;\\n      width:100%\\n  }\"));\n};\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var response, quotes;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n\n        case 2:\n          response = _context.sent;\n          _context.next = 5;\n          return response.json();\n\n        case 5:\n          quotes = _context.sent;\n          console.log(quotes);\n          return _context.abrupt(\"return\", {\n            quotes: quotes\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwicXVvdGUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUksU0FBUkEsSUFBUTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBRWQ7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQXBCLENBREosRUFHQ0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLFdBQ1g7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV0EsQ0FBQyxDQUFDQyxLQUFiLENBREUsRUFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFhRCxDQUFDLENBQUNFLE1BQWYsQ0FGRSxDQURXO0FBQUEsR0FBWixDQUhELEVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzUEFUQSxDQUZjO0FBQUEsQ0FBZDs7S0FBTUwsSTtBQW9DTkEsSUFBSSxDQUFDTSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNJQyxLQUFLLENBQUMscURBQUQsQ0FEVDs7QUFBQTtBQUNiQyxrQkFEYTtBQUFBO0FBQUEsaUJBRUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZGOztBQUFBO0FBRWJSLGdCQUZhO0FBR25CUyxpQkFBTyxDQUFDQyxHQUFSLENBQVlWLE1BQVo7QUFIbUIsMkNBSWI7QUFBQ0Esa0JBQU0sRUFBTkE7QUFBRCxXQUphOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBVWVELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuXG5jb25zdCBIb21lICA9ICh7cXVvdGVzfSkgPT4gKFxuICAgXG48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaVwiPjxoMT5SYW5kb20gUXVvdGVzIEZyb20gYnJlYWtpbmcgQmFkPC9oMT48L2Rpdj5cbiAgXG57cXVvdGVzLm1hcChlID0+IChcbiAgPGRpdiBpZD1cInF1b3Rlc1wiPiAgXG48cD5RdW90ZSA6e2UucXVvdGV9PC9wPlxuPHA+QXV0aG9yIDoge2UuYXV0aG9yfTwvcD5cbjwvZGl2PlxuKSl9XG48c3R5bGU+IHtcbmBwe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgI3F1b3Rlc3tcbiAgICAgIGJhY2tncm91bmQ6Z3JlZW47XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gIH0gIFxuICBoMXtcbiAgICAgIGNvbG9yOndoaXRlXG4gIH1cbiAgLmhpe1xuICAgICAgYmFja2dyb3VuZDp5ZWxsb3dcbiAgfVxuICAqe1xuICAgICAgYmFja2dyb3VuZDpibGFjaztcbiAgICAgIHdpZHRoOjEwMCVcbiAgfWBcbiBcbn0gXG4gICBcbjwvc3R5bGU+XG48L2Rpdj5cbik7XG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2JyZWFraW5nLWJhZC1xdW90ZXMuaGVyb2t1YXBwLmNvbS92MS9xdW90ZXMnKTtcbiAgICBjb25zdCBxdW90ZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocXVvdGVzKTtcbiAgICByZXR1cm57cXVvdGVzfTtcbiAgICBcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})