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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _components_DropdownLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/DropdownLink */ \"./components/DropdownLink.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title , children  } = param;\n    _s();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.Store);\n    const { cart  } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \"-Amazona\" : \"Amazona\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 p-4 justify-between shadow-md items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold \",\n                                    children: \"amazona\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2\",\n                                            children: [\n                                                \"购物车\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 21\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-amber-200\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 33\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"个人信息\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 41\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 37\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/history\",\n                                                                children: \"购买记录\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                                lineNumber: 66,\n                                                                columnNumber: 41\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 37\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            className: \"dropdown-link\",\n                                                            href: \"/\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"dropdown-link\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"登出\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                                lineNumber: 71,\n                                                                columnNumber: 41\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 37\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/login\",\n                                            children: \"登录\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: \"footer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a11/Documents/GitHub/phx_amazona/components/Layout.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"O0AH6ju0CdoT8/gR/fA0BLkio5g=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztHQXRGdUI3Qjs7UUFDUUgsdURBQVVBOzs7S0FEbEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQC91dGlscy9TdG9yZSc7XG5pbXBvcnQge1RvYXN0Q29udGFpbmVyfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7c2lnbk91dCwgdXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCBEcm9wZG93bkxpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wZG93bkxpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHt0aXRsZSxjaGlsZHJlbn0pIHtcbiAgICBjb25zdCB7c3RhdHVzLGRhdGE6c2Vzc2lvbn09dXNlU2Vzc2lvbigpXG5cbiAgICBjb25zdCB7c3RhdGUsZGlzcGF0Y2h9PXVzZUNvbnRleHQoU3RvcmUpO1xuICAgIGNvbnN0IHtjYXJ0fT1zdGF0ZTtcbiAgICBjb25zdCBbY2FydEl0ZW1zQ291bnQsc2V0Q2FydEl0ZW1zQ291bnRdPXVzZVN0YXRlKDApXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldENhcnRJdGVtc0NvdW50KGNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSxjKT0+YStjLnF1YW50aXR5LDApKTtcbiAgICB9LFtjYXJ0LmNhcnRJdGVtc10pXG4gICAgY29uc3QgbG9nb3V0Q2xpY2tIYW5kbGVyID0oKSA9PntcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2NhcnQnKTtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0NBUlRfUkVTRVQnfSk7XG4gICAgICAgIHNpZ25PdXQoe2NhbGxiYWNrVXJsOicvbG9naW4nfSlcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7LyogcmVhY3QgY29tcG9uZW50IGlzIGh0bWwgZWxlbWVudCAqL31cbiAgICA8SGVhZD5cbiAgICAgICAgey8qIOS9v+eUqOWkp+aLrOWPt+ajgOafpeagh+mimO+8jOWmguaenOehruWunuWtmOWcqOS9v+eUqOWug++8jOWQpuWImXJlbmRlcijmuLLmn5Mp77yM5Yqg5LiKLWFtYXpvbmHmnaXmmL7npLogKi99XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSArICctQW1hem9uYSc6J0FtYXpvbmEnfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFY29tbWVyY2UgV2Vic2l0ZVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgIDwvSGVhZD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiIGxpbWl0PXsxfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiAnPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggaC0xMiBwLTQganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICBhbWF6b25hXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIOi0reeJqei9plxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50PjAgJiYoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC0xIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPT09J2xvYWRpbmcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2FkaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKSA6c2Vzc2lvbj8udXNlcj8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYW1iZXItMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy01NiBvcmlnaW4tdG9wLXJpZ2h0IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIiBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Liq5Lq65L+h5oGvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBjbGFzc05hbWU9XCJkcm9wZG93bi1saW5rXCIgaHJlZj1cIi9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0reS5sOiusOW9lVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIiBvbkNsaWNrPXtsb2dvdXRDbGlja0hhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnmbvlh7pcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeZu+W9lVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNCc+XG4gICAgICAgICAgICB7LyogcmVuZGVyIOa4suafk+mhtemdoue7hOS7tiAqL31cbiAgICAgICAgICAgIHtjaGlsZHJlbn0gXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggaC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyJz5cbiAgICAgICAgICAgIGZvb3RlclxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgICA8Lz4gXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMaW5rIiwiQ29va2llcyIsIlN0b3JlIiwiVG9hc3RDb250YWluZXIiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIk1lbnUiLCJEcm9wZG93bkxpbmsiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImNhcnRJdGVtc0NvdW50Iiwic2V0Q2FydEl0ZW1zQ291bnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2UiLCJhIiwiYyIsInF1YW50aXR5IiwibG9nb3V0Q2xpY2tIYW5kbGVyIiwicmVtb3ZlIiwidHlwZSIsImNhbGxiYWNrVXJsIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJwb3NpdGlvbiIsImxpbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibmF2Iiwic3BhbiIsInVzZXIiLCJhcyIsIkJ1dHRvbiIsIkl0ZW1zIiwiSXRlbSIsIm9uQ2xpY2siLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});