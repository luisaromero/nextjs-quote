webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/marce/Documentos/next-movies/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import \"isomorphic-fetch\";\n\nvar Home = function Home(_ref) {\n  var quotes = _ref.quotes;\n  return __jsx(\"div\", {\n    id: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Random Quotes From breaking Bad\"), __jsx(\"img\", {\n    src: \".././breaking-bad.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), quotes.map(function (e) {\n    return __jsx(\"div\", {\n      id: \"quotes\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 3\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 1\n      }\n    }, \"Quote :\", e.quote), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 1\n      }\n    }, \"Author : \", e.author));\n  }), __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 1\n    }\n  }, \"  \", \"p , h1{\\n    color:white;\\n    }\\n  #quotes{\\n      width:100%;\\n      height:100%;\\n  }  \\n  \\n  *{\\n      background:black;\\n      width:100%\\n  }\\n  #container{\\n      display:flex;\\n      text-align:center;\\n      flex-direction:column;\\n  }\"));\n};\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var response, quotes;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');\n\n        case 2:\n          response = _context.sent;\n          _context.next = 5;\n          return response.json();\n\n        case 5:\n          quotes = _context.sent;\n          console.log(quotes);\n          return _context.abrupt(\"return\", {\n            quotes: quotes\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJxdW90ZXMiLCJtYXAiLCJlIiwicXVvdGUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUksU0FBUkEsSUFBUTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBRWQ7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FESixFQUVJO0FBQUssT0FBRyxFQUFDLHVCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdDQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsV0FDWDtBQUFLLFFBQUUsRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFXQSxDQUFDLENBQUNDLEtBQWIsQ0FERSxFQUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWFELENBQUMsQ0FBQ0UsTUFBZixDQUZFLENBRFc7QUFBQSxHQUFaLENBSEQsRUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1RQVRBLENBRmM7QUFBQSxDQUFkOztLQUFNTCxJO0FBbUNOQSxJQUFJLENBQUNNLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0lDLEtBQUssQ0FBQyxxREFBRCxDQURUOztBQUFBO0FBQ2JDLGtCQURhO0FBQUE7QUFBQSxpQkFFRUEsUUFBUSxDQUFDQyxJQUFULEVBRkY7O0FBQUE7QUFFYlIsZ0JBRmE7QUFHbkJTLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBWjtBQUhtQiwyQ0FJYjtBQUFDQSxrQkFBTSxFQUFOQTtBQUFELFdBSmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFVZUQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5cbmNvbnN0IEhvbWUgID0gKHtxdW90ZXN9KSA9PiAoXG4gICBcbjxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICA8aDE+UmFuZG9tIFF1b3RlcyBGcm9tIGJyZWFraW5nIEJhZDwvaDE+XG4gICAgPGltZyBzcmM9XCIuLi8uL2JyZWFraW5nLWJhZC5qcGdcIi8+XG57cXVvdGVzLm1hcChlID0+IChcbiAgPGRpdiBpZD1cInF1b3Rlc1wiPiAgXG48cD5RdW90ZSA6e2UucXVvdGV9PC9wPlxuPHA+QXV0aG9yIDoge2UuYXV0aG9yfTwvcD5cbjwvZGl2PlxuKSl9XG48c3R5bGU+ICB7XG5gcCAsIGgxe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgI3F1b3Rlc3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgfSAgXG4gIFxuICAqe1xuICAgICAgYmFja2dyb3VuZDpibGFjaztcbiAgICAgIHdpZHRoOjEwMCVcbiAgfVxuICAjY29udGFpbmVye1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIH1gXG4gXG59IFxuICAgXG48L3N0eWxlPlxuPC9kaXY+XG4pO1xuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9icmVha2luZy1iYWQtcXVvdGVzLmhlcm9rdWFwcC5jb20vdjEvcXVvdGVzJyk7XG4gICAgY29uc3QgcXVvdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHF1b3Rlcyk7XG4gICAgcmV0dXJue3F1b3Rlc307XG4gICAgXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})