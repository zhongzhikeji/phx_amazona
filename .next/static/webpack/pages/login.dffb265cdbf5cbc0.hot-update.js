"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LoginScreen() {\n    _s();\n    //使用 use-form-hook\n    const { handleSubmit , register , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    const submitHandler = (param)=>{\n        let { tel , password  } = param;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mx-auto max-w-screen-md\",\n            onSubmit: handleSubmit(submitHandler),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-xl\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"tel\",\n                            children: \"电话号码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"tel\",\n                            ...register(\"tel\", {\n                                required: \"请输入手机号码\",\n                                pattern: {\n                                    value: /^1[3456789]\\d{9}$/,\n                                    message: \"请输入正确的手机号码\"\n                                }\n                            }),\n                            className: \"w-full\",\n                            id: \"usrtel\",\n                            autoFocus: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        errors.tel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-500\",\n                            children: errors.tel.message\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 25,\n                            columnNumber: 36\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"密码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            ...register(\"password\", {\n                                required: \"请输入密码\",\n                                minLength: {\n                                    value: 8,\n                                    message: \"请输入八位密码\"\n                                }\n                            }),\n                            className: \"w-full\",\n                            id: \"password\",\n                            autoFocus: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"primary-button\",\n                        children: \"登录\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"还没有账号？\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"register\",\n                            children: \"注册\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/GitHub/phx_amazona/pages/login.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginScreen, \"tt9OHL0te/6913xHr6hgQYQDq2k=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = LoginScreen;\nvar _c;\n$RefreshReg$(_c, \"LoginScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUNXO0FBRXpCLFNBQVNHLGNBQWE7O0lBQ2pDLGtCQUFrQjtJQUNsQixNQUFNLEVBQUNDLGFBQVksRUFDZkMsU0FBUSxFQUNSQyxXQUFVLEVBQUNDLE9BQU0sRUFBQyxHQUNyQixHQUFDTCx3REFBT0E7SUFDVCxNQUFNTSxnQkFBYyxTQUFrQjtZQUFqQixFQUFDQyxJQUFHLEVBQUNDLFNBQVEsRUFBQztJQUFJO0lBQ3ZDLHFCQUNJLDhEQUFDViwwREFBTUE7UUFBQ1csT0FBTTtrQkFDViw0RUFBQ0M7WUFBS0MsV0FBVTtZQUEwQkMsVUFBVVYsYUFBYUk7OzhCQUM3RCw4REFBQ087b0JBQUdGLFdBQVU7OEJBQWU7Ozs7Ozs4QkFDN0IsOERBQUNHO29CQUFJSCxXQUFVOztzQ0FDWCw4REFBQ0k7NEJBQU1DLFNBQVE7c0NBQU07Ozs7OztzQ0FDckIsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUNKLEdBQUdmLFNBQVMsT0FBTTtnQ0FBQ2dCLFVBQVM7Z0NBQ3pCQyxTQUFRO29DQUNSQyxPQUFNO29DQUFxQkMsU0FBUTtnQ0FDbkM7NEJBQ0osRUFBRTs0QkFDRlgsV0FBVTs0QkFBU1ksSUFBRzs0QkFBU0MsU0FBUzs7Ozs7O3dCQUM5Q25CLE9BQU9FLEdBQUcsa0JBQUksOERBQUNPOzRCQUFJSCxXQUFVO3NDQUFnQk4sT0FBT0UsR0FBRyxDQUFDZSxPQUFPOzs7Ozs7Ozs7Ozs7OEJBRXBFLDhEQUFDUjtvQkFBSUgsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFNQyxTQUFRO3NDQUFXOzs7Ozs7c0NBQzFCLDhEQUFDQzs0QkFBTUMsTUFBSzs0QkFDSixHQUFHZixTQUFTLFlBQVc7Z0NBQ3BCZ0IsVUFBUztnQ0FDVE0sV0FBVTtvQ0FDVkosT0FBTTtvQ0FBRUMsU0FBUTtnQ0FDaEI7NEJBQ0osRUFBRTs0QkFDRlgsV0FBVTs0QkFBU1ksSUFBRzs0QkFBV0MsU0FBUzs7Ozs7Ozs7Ozs7OzhCQUVyRCw4REFBQ1Y7b0JBQUlILFdBQVU7OEJBQ1gsNEVBQUNlO3dCQUFPZixXQUFVO2tDQUFpQjs7Ozs7Ozs7Ozs7OEJBRXZDLDhEQUFDRztvQkFBSUgsV0FBVTs7c0NBQ1gsOERBQUNnQjtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDNUIsa0RBQUlBOzRCQUFDNkIsTUFBSztzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUMsQ0FBQztHQTVDdUIzQjs7UUFLbEJELG9EQUFPQTs7O0tBTFdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luU2NyZWVuKCl7XG4gICAgLy/kvb/nlKggdXNlLWZvcm0taG9va1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsXG4gICAgICAgIHJlZ2lzdGVyLFxuICAgICAgICBmb3JtU3RhdGU6e2Vycm9yc30sXG4gICAgfT11c2VGb3JtKClcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyPSh7dGVsLHBhc3N3b3JkfSk9Pnt9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkxvZ2luXCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1tZFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0SGFuZGxlcil9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQteGxcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVsXCI+55S16K+d5Y+356CBPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCd0ZWwnLHtyZXF1aXJlZDon6K+36L6T5YWl5omL5py65Y+356CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTovXjFbMzQ1Njc4OV1cXGR7OX0kLywgbWVzc2FnZTpcIuivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCIgaWQ9XCJ1c3J0ZWxcIiBhdXRvRm9jdXM+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy50ZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3JzLnRlbC5tZXNzYWdlfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPuWvhueggTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOifor7fovpPlhaXlr4bnoIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6OCxtZXNzYWdlOifor7fovpPlhaXlhavkvY3lr4bnoIEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBpZD1cInBhc3N3b3JkXCIgYXV0b0ZvY3VzPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIj7nmbvlvZU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+6L+Y5rKh5pyJ6LSm5Y+377yfPC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwicmVnaXN0ZXJcIj7ms6jlhow8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcblxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwidXNlRm9ybSIsIkxvZ2luU2NyZWVuIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJzdWJtaXRIYW5kbGVyIiwidGVsIiwicGFzc3dvcmQiLCJ0aXRsZSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImgxIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwiaWQiLCJhdXRvRm9jdXMiLCJtaW5MZW5ndGgiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});