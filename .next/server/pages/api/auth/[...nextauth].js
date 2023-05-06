"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBWSxJQUFJRCx3REFBZSxDQUNqQztJQUNJRyxNQUFLO1FBQ0RDLE1BQUtDO1FBQVFDLFVBQVMsSUFBSTtJQUM5QjtJQUNBQyxPQUFNO1FBQ0ZILE1BQUtDO1FBQU9DLFVBQVUsSUFBSTtRQUFDRSxRQUFPLElBQUk7SUFDMUM7SUFDQUMsVUFBUztRQUNMTCxNQUFLQztRQUFRQyxVQUFTLElBQUk7SUFDOUI7SUFDQUksU0FBUTtRQUNKTixNQUFLTztRQUFRTCxVQUFTLElBQUk7UUFBQ00sU0FBUSxLQUFLO0lBQzVDO0FBQ0osR0FBRTtJQUNFQyxZQUFXLElBQUk7QUFDbkI7QUFHSixNQUFNQyxPQUFNZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFPQztBQUMxRCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoeF9hbWF6b25hLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWE9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAge1xuICAgICAgICBuYW1lOntcbiAgICAgICAgICAgIHR5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOntcbiAgICAgICAgICAgIHR5cGU6U3RyaW5nLHJlcXVpcmVkOiB0cnVlLHVuaXF1ZTp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOntcbiAgICAgICAgICAgIHR5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGlzQWRtaW46e1xuICAgICAgICAgICAgdHlwZTpCb29sZWFuLHJlcXVpcmVkOnRydWUsZGVmYXVsdDpmYWxzZVxuICAgICAgICB9LFxuICAgIH0se1xuICAgICAgICB0aW1lc3RhbXBzOnRydWUsXG4gICAgfVxuKTtcblxuY29uc3QgVXNlciA9bW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLHVzZXJTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user?._id) token._id = user._id;\n            if (user?.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token?._id) session.user._id = token._id;\n            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    //提供\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n                // 根据数据库查找用户\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                //然后断开连接，保存代码，下一步检查用户和密码一起，如果用户存在\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: \"f\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"邮箱或密码错误\");\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNFO0FBQ0s7QUFDUjtBQUNpQztBQUVqRSxpRUFBZ0JBLGdEQUFRQSxDQUFDO0lBQ3JCSyxTQUFTO1FBQ0xDLFVBQVM7SUFDYjtJQUNBQyxXQUFXO1FBQ1AsTUFBTUMsS0FBSSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQyxFQUFDO1lBQ25CLElBQUlBLE1BQU1DLEtBQUtGLE1BQU1FLEdBQUcsR0FBQ0QsS0FBS0MsR0FBRztZQUNqQyxJQUFJRCxNQUFNRSxTQUFTSCxNQUFNRyxPQUFPLEdBQUNGLEtBQUtFLE9BQU87WUFDN0MsT0FBT0g7UUFDWDtRQUNBLE1BQU1KLFNBQVEsRUFBQ0EsUUFBTyxFQUFDSSxNQUFLLEVBQUMsRUFBQztZQUMxQixJQUFJQSxPQUFPRSxLQUFLTixRQUFRSyxJQUFJLENBQUNDLEdBQUcsR0FBQ0YsTUFBTUUsR0FBRztZQUMxQyxJQUFJRixPQUFPRyxTQUFTUCxRQUFRSyxJQUFJLENBQUNFLE9BQU8sR0FBRUgsTUFBTUcsT0FBTztZQUN2RCxPQUFPUDtRQUNYO0lBQ0o7SUFDQSxJQUFJO0lBQ0pRLFdBQVU7UUFDTlQsc0VBQW1CQSxDQUFDO1lBQ2hCLE1BQU1VLFdBQVVDLFdBQVcsRUFBQztnQkFDeEIsTUFBTWQseURBQVU7Z0JBQ2hCLFlBQVk7Z0JBQ1osTUFBTVMsT0FBSyxNQUFNUiw0REFBWSxDQUFDO29CQUMzQmdCLE9BQU9ILFlBQVlHLEtBQUs7Z0JBQzNCO2dCQUNBLGlDQUFpQztnQkFDakMsTUFBTWpCLDREQUFhO2dCQUNuQixJQUFJUyxRQUFRUCwyREFBb0IsQ0FBQ1ksWUFBWU0sUUFBUSxFQUFFWCxLQUFLVyxRQUFRLEdBQUU7b0JBQ2xFLE9BQU07d0JBQ0ZWLEtBQUlELEtBQUtDLEdBQUc7d0JBQ1pXLE1BQUtaLEtBQUtZLElBQUk7d0JBQ2RKLE9BQU1SLEtBQUtRLEtBQUs7d0JBQ2hCSyxPQUFNO3dCQUNOWCxTQUFRRixLQUFLRSxPQUFPO29CQUN4QjtnQkFDSixDQUFDO2dCQUNELE1BQU0sSUFBSVksTUFBTSxXQUFVO1lBQzlCO1FBQ0o7S0FDSDtBQUNMLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoeF9hbWF6b25hLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RiXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG5cbmV4cG9ydCBkZWZhdWx0ICBOZXh0QXV0aCh7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBzdHJhdGVneTonand0JyxcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBqd3Qoe3Rva2VuLHVzZXJ9KXtcbiAgICAgICAgICAgIGlmICh1c2VyPy5faWQpIHRva2VuLl9pZD11c2VyLl9pZDtcbiAgICAgICAgICAgIGlmICh1c2VyPy5pc0FkbWluKSB0b2tlbi5pc0FkbWluPXVzZXIuaXNBZG1pbjtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbix0b2tlbn0pe1xuICAgICAgICAgICAgaWYgKHRva2VuPy5faWQpIHNlc3Npb24udXNlci5faWQ9dG9rZW4uX2lkO1xuICAgICAgICAgICAgaWYgKHRva2VuPy5pc0FkbWluKSBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9dG9rZW4uaXNBZG1pbjtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5o+Q5L6bXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpe1xuICAgICAgICAgICAgICAgIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyDmoLnmja7mlbDmja7lupPmn6Xmib7nlKjmiLdcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8v54S25ZCO5pat5byA6L+e5o6l77yM5L+d5a2Y5Luj56CB77yM5LiL5LiA5q2l5qOA5p+l55So5oi35ZKM5a+G56CB5LiA6LW377yM5aaC5p6c55So5oi35a2Y5ZyoXG4gICAgICAgICAgICAgICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIGJjcnlwdGpzLmNvbXBhcmVTeW5jKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZDp1c2VyLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6dXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6dXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOidmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW46dXNlci5pc0FkbWluLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign6YKu566x5oiW5a+G56CB6ZSZ6K+vJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJkYiIsIlVzZXIiLCJiY3J5cHRqcyIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJfaWQiLCJpc0FkbWluIiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjb25uZWN0IiwiZmluZE9uZSIsImVtYWlsIiwiZGlzY29ubmVjdCIsImNvbXBhcmVTeW5jIiwicGFzc3dvcmQiLCJuYW1lIiwiaW1hZ2UiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n//空对象：我们要保持以前使用find连接到的mongodb\nconst connection = {};\nasync function connect() {\n    //首先检查是否连接，如果已经连接，我们就不用再次连接\n    if (connection.isConnected) {\n        console.log(\"已经连接\");\n        return;\n    }\n    //准备状态\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        // =1，radiusState= 1，回到以前的连接，没必要连接数据库\n        if (connection.isConnected === 1) {\n            console.log(\"使用以前的连接\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    //定义数据库对象等于 作为字段连接的对象\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"新连接\");\n    connection.isConnected = db.connections[0].readyState;\n}\n//断开连接功能\nasync function disconnect() {\n    //检查连接\n    if (connection.isConnected) {\n        //如果处于生成模式，断开连接\n        if (false) {} else {\n            //没有断开连接，所以只断开连接\n            console.log(\"断开连接\");\n        }\n    }\n}\nconst db = {\n    connect,\n    disconnect\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsOEJBQThCO0FBQzlCLE1BQU1DLGFBQVcsQ0FBQztBQUVsQixlQUFlQyxVQUFTO0lBQ3BCLDJCQUEyQjtJQUMzQixJQUFJRCxXQUFXRSxXQUFXLEVBQUM7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0osQ0FBQztJQUNELE1BQU07SUFDTixJQUFJTCxvRUFBMkIsR0FBRSxHQUFHO1FBQ2hDQyxXQUFXRSxXQUFXLEdBQUdILDJFQUFrQztRQUMzRCxxQ0FBcUM7UUFDckMsSUFBSUMsV0FBV0UsV0FBVyxLQUFLLEdBQUU7WUFDN0JDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0osQ0FBQztRQUNELE1BQU1MLDBEQUFtQjtJQUM3QixDQUFDO0lBQ0QscUJBQXFCO0lBQ3JCLE1BQU1VLEtBQUcsTUFBTVYsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN2RFQsUUFBUUMsR0FBRyxDQUFDO0lBQ1pKLFdBQVdFLFdBQVcsR0FBQ08sR0FBR0osV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsVUFBVTtBQUN2RDtBQUVBLFFBQVE7QUFDUixlQUFlQyxhQUFZO0lBQ3ZCLE1BQU07SUFDTixJQUFJUixXQUFXRSxXQUFXLEVBQUM7UUFDdkIsZUFBZTtRQUNmLElBQUlRLEtBQXdCLEVBQWEsRUFHeEMsTUFBSztZQUNGLGdCQUFnQjtZQUNoQlAsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0FBQ0w7QUFFQSxNQUFNSyxLQUFHO0lBQUNSO0lBQVFPO0FBQVU7QUFDNUIsaUVBQWVDLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHhfYW1hem9uYS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG4vL+epuuWvueixoe+8muaIkeS7rOimgeS/neaMgeS7peWJjeS9v+eUqGZpbmTov57mjqXliLDnmoRtb25nb2RiXG5jb25zdCBjb25uZWN0aW9uPXt9O1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCl7XG4gICAgLy/pppblhYjmo4Dmn6XmmK/lkKbov57mjqXvvIzlpoLmnpzlt7Lnu4/ov57mjqXvvIzmiJHku6zlsLHkuI3nlKjlho3mrKHov57mjqVcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/ov57mjqUnKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v5YeG5aSH54q25oCBXG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+MCApe1xuICAgICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICAgICAgLy8gPTHvvIxyYWRpdXNTdGF0ZT0gMe+8jOWbnuWIsOS7peWJjeeahOi/nuaOpe+8jOayoeW/heimgei/nuaOpeaVsOaNruW6k1xuICAgICAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5L2/55So5Lul5YmN55qE6L+e5o6lJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgICAvL+WumuS5ieaVsOaNruW6k+WvueixoeetieS6jiDkvZzkuLrlrZfmrrXov57mjqXnmoTlr7nosaFcbiAgICBjb25zdCBkYj1hd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbiAgICBjb25zb2xlLmxvZygn5paw6L+e5o6lJyk7XG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZD1kYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG4vL+aWreW8gOi/nuaOpeWKn+iDvVxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpe1xuICAgIC8v5qOA5p+l6L+e5o6lXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICAvL+WmguaenOWkhOS6jueUn+aIkOaooeW8j++8jOaWreW8gOi/nuaOpVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09J3Byb2R1Y3Rpb24nKXtcbiAgICAgICAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy/msqHmnInmlq3lvIDov57mjqXvvIzmiYDku6Xlj6rmlq3lvIDov57mjqVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlq3lvIDov57mjqUnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBkYj17Y29ubmVjdCxkaXNjb25uZWN0fVxuZXhwb3J0IGRlZmF1bHQgZGIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwibGVuZ3RoIiwicmVhZHlTdGF0ZSIsImRpc2Nvbm5lY3QiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();