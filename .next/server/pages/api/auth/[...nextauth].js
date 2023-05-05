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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    tel: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBWSxJQUFJRCx3REFBZSxDQUNqQztJQUNJRyxNQUFLO1FBQ0RDLE1BQUtDO1FBQVFDLFVBQVMsSUFBSTtJQUM5QjtJQUNBQyxLQUFJO1FBQ0FILE1BQUtDO1FBQU9DLFVBQVUsSUFBSTtRQUFDRSxRQUFPLElBQUk7SUFDMUM7SUFDQUMsVUFBUztRQUNMTCxNQUFLQztRQUFRQyxVQUFTLElBQUk7SUFDOUI7SUFDQUksU0FBUTtRQUNKTixNQUFLTztRQUFRTCxVQUFTLElBQUk7UUFBQ00sU0FBUSxLQUFLO0lBQzVDO0FBQ0osR0FBRTtJQUNFQyxZQUFXLElBQUk7QUFDbkI7QUFHSixNQUFNQyxPQUFNZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFPQztBQUMxRCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoeF9hbWF6b25hLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWE9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAge1xuICAgICAgICBuYW1lOntcbiAgICAgICAgICAgIHR5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRlbDp7XG4gICAgICAgICAgICB0eXBlOlN0cmluZyxyZXF1aXJlZDogdHJ1ZSx1bmlxdWU6dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDp7XG4gICAgICAgICAgICB0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpc0FkbWluOntcbiAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixyZXF1aXJlZDp0cnVlLGRlZmF1bHQ6ZmFsc2VcbiAgICAgICAgfSxcbiAgICB9LHtcbiAgICAgICAgdGltZXN0YW1wczp0cnVlLFxuICAgIH1cbik7XG5cbmNvbnN0IFVzZXIgPW1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyx1c2VyU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0ZWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user?._id) token._id = user._id;\n            if (user?.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token?._id) session.user._id = token._id;\n            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    //提供\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n                // 根据数据库查找用户\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    tel: credentials.tel\n                });\n                //然后断开连接，保持代码，下一步检查用户和密码一起，如果用户存在\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        tel: user.tel,\n                        image: \"f\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"电话号码或密码错误\");\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNFO0FBQ0s7QUFDUjtBQUNpQztBQUVqRSxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDcEJLLFNBQVE7UUFDSkMsVUFBUztJQUNiO0lBQ0FDLFdBQVU7UUFDTixNQUFNQyxLQUFJLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFDLEVBQUM7WUFDbkIsSUFBSUEsTUFBTUMsS0FBS0YsTUFBTUUsR0FBRyxHQUFDRCxLQUFLQyxHQUFHO1lBQ2pDLElBQUlELE1BQU1FLFNBQVNILE1BQU1HLE9BQU8sR0FBQ0YsS0FBS0UsT0FBTztZQUM3QyxPQUFPSDtRQUNYO1FBQ0EsTUFBTUosU0FBUSxFQUFDQSxRQUFPLEVBQUNJLE1BQUssRUFBQyxFQUFDO1lBQzFCLElBQUlBLE9BQU9FLEtBQUtOLFFBQVFLLElBQUksQ0FBQ0MsR0FBRyxHQUFDRixNQUFNRSxHQUFHO1lBQzFDLElBQUlGLE9BQU9HLFNBQVNQLFFBQVFLLElBQUksQ0FBQ0UsT0FBTyxHQUFFSCxNQUFNRyxPQUFPO1lBQ3ZELE9BQU9QO1FBQ1g7SUFDSjtJQUNBLElBQUk7SUFDSlEsV0FBVTtRQUNOVCxzRUFBbUJBLENBQUM7WUFDaEIsTUFBTVUsV0FBVUMsV0FBVyxFQUFDO2dCQUN4QixNQUFNZCx5REFBVTtnQkFDaEIsWUFBWTtnQkFDWixNQUFNUyxPQUFLLE1BQU1SLDREQUFZLENBQUM7b0JBQzNCZ0IsS0FBS0gsWUFBWUcsR0FBRztnQkFDdkI7Z0JBQ0EsaUNBQWlDO2dCQUNqQyxNQUFNakIsNERBQWE7Z0JBQ25CLElBQUlTLFFBQVFQLDJEQUFvQixDQUFDWSxZQUFZTSxRQUFRLEVBQUNYLEtBQUtXLFFBQVEsR0FBRTtvQkFDakUsT0FBTTt3QkFDRlYsS0FBSUQsS0FBS0MsR0FBRzt3QkFDWlcsTUFBS1osS0FBS1ksSUFBSTt3QkFDZEosS0FBSVIsS0FBS1EsR0FBRzt3QkFDWkssT0FBTTt3QkFDTlgsU0FBUUYsS0FBS0UsT0FBTztvQkFDeEI7Z0JBQ0osQ0FBQztnQkFDRCxNQUFNLElBQUlZLE1BQU0sYUFBWTtZQUNoQztRQUNKO0tBQ0g7QUFDTCxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHhfYW1hem9uYS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgc2Vzc2lvbjp7XG4gICAgICAgIHN0cmF0ZWd5Oidqd3QnLFxuICAgIH0sXG4gICAgY2FsbGJhY2tzOntcbiAgICAgICAgYXN5bmMgand0KHt0b2tlbix1c2VyfSl7XG4gICAgICAgICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQ9dXNlci5faWQ7XG4gICAgICAgICAgICBpZiAodXNlcj8uaXNBZG1pbikgdG9rZW4uaXNBZG1pbj11c2VyLmlzQWRtaW47XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sdG9rZW59KXtcbiAgICAgICAgICAgIGlmICh0b2tlbj8uX2lkKSBzZXNzaW9uLnVzZXIuX2lkPXRva2VuLl9pZDtcbiAgICAgICAgICAgIGlmICh0b2tlbj8uaXNBZG1pbikgc2Vzc2lvbi51c2VyLmlzQWRtaW4gPXRva2VuLmlzQWRtaW47XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aPkOS+m1xuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYi5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8g5qC55o2u5pWw5o2u5bqT5p+l5om+55So5oi3XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcj1hd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgIHRlbDogY3JlZGVudGlhbHMudGVsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8v54S25ZCO5pat5byA6L+e5o6l77yM5L+d5oyB5Luj56CB77yM5LiL5LiA5q2l5qOA5p+l55So5oi35ZKM5a+G56CB5LiA6LW377yM5aaC5p6c55So5oi35a2Y5ZyoXG4gICAgICAgICAgICAgICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIGJjcnlwdGpzLmNvbXBhcmVTeW5jKGNyZWRlbnRpYWxzLnBhc3N3b3JkLHVzZXIucGFzc3dvcmQpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOnVzZXIuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTp1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWw6dXNlci50ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTonZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluOnVzZXIuaXNBZG1pbixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+eUteivneWPt+eggeaIluWvhueggemUmeivrycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXVxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiZGIiLCJVc2VyIiwiYmNyeXB0anMiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiX2lkIiwiaXNBZG1pbiIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY29ubmVjdCIsImZpbmRPbmUiLCJ0ZWwiLCJkaXNjb25uZWN0IiwiY29tcGFyZVN5bmMiLCJwYXNzd29yZCIsIm5hbWUiLCJpbWFnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n//空对象：我们要保持以前使用find连接到的mongodb\nconst connection = {};\nasync function connect() {\n    //首先检查是否连接，如果已经连接，我们就不用再次连接\n    if (connection.isConnected) {\n        console.log(\"已经连接\");\n        return;\n    }\n    //准备状态\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        // =1，radiusState= 1，回到以前的连接，没必要连接数据库\n        if (connection.isConnected === 1) {\n            console.log(\"使用 previous 连接\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    //定义数据库对象等于 作为字段连接的对象\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"新连接\");\n    connection.isConnected = db.connections[0].readyState;\n}\n//断开连接功能\nasync function disconnect() {\n    //检查连接\n    if (connection.isConnected) {\n        //如果处于生成模式，断开连接\n        if (false) {} else {\n            //没有断开连接，所以只断开连接\n            console.log(\"断开连接\");\n        }\n    }\n}\nconst db = {\n    connect,\n    disconnect\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsOEJBQThCO0FBQzlCLE1BQU1DLGFBQVcsQ0FBQztBQUVsQixlQUFlQyxVQUFTO0lBQ3BCLDJCQUEyQjtJQUMzQixJQUFJRCxXQUFXRSxXQUFXLEVBQUM7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0osQ0FBQztJQUNELE1BQU07SUFDTixJQUFJTCxvRUFBMkIsR0FBRSxHQUFHO1FBQ2hDQyxXQUFXRSxXQUFXLEdBQUdILDJFQUFrQztRQUMzRCxxQ0FBcUM7UUFDckMsSUFBSUMsV0FBV0UsV0FBVyxLQUFLLEdBQUU7WUFDN0JDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0osQ0FBQztRQUNELE1BQU1MLDBEQUFtQjtJQUM3QixDQUFDO0lBQ0QscUJBQXFCO0lBQ3JCLE1BQU1VLEtBQUcsTUFBTVYsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN2RFQsUUFBUUMsR0FBRyxDQUFDO0lBQ1pKLFdBQVdFLFdBQVcsR0FBQ08sR0FBR0osV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsVUFBVTtBQUN2RDtBQUVBLFFBQVE7QUFDUixlQUFlQyxhQUFZO0lBQ3ZCLE1BQU07SUFDTixJQUFJUixXQUFXRSxXQUFXLEVBQUM7UUFDdkIsZUFBZTtRQUNmLElBQUlRLEtBQXVCLEVBQWEsRUFHdkMsTUFBSztZQUNGLGdCQUFnQjtZQUNoQlAsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0FBQ0w7QUFFQSxNQUFNSyxLQUFHO0lBQUNSO0lBQVFPO0FBQVU7QUFDNUIsaUVBQWVDLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHhfYW1hem9uYS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG4vL+epuuWvueixoe+8muaIkeS7rOimgeS/neaMgeS7peWJjeS9v+eUqGZpbmTov57mjqXliLDnmoRtb25nb2RiXG5jb25zdCBjb25uZWN0aW9uPXt9O1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCl7XG4gICAgLy/pppblhYjmo4Dmn6XmmK/lkKbov57mjqXvvIzlpoLmnpzlt7Lnu4/ov57mjqXvvIzmiJHku6zlsLHkuI3nlKjlho3mrKHov57mjqVcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/ov57mjqUnKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v5YeG5aSH54q25oCBXG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+MCApe1xuICAgICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICAgICAgLy8gPTHvvIxyYWRpdXNTdGF0ZT0gMe+8jOWbnuWIsOS7peWJjeeahOi/nuaOpe+8jOayoeW/heimgei/nuaOpeaVsOaNruW6k1xuICAgICAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5L2/55SoIHByZXZpb3VzIOi/nuaOpScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KClcbiAgICB9XG4gICAgLy/lrprkuYnmlbDmja7lupPlr7nosaHnrYnkuo4g5L2c5Li65a2X5q616L+e5o6l55qE5a+56LGhXG4gICAgY29uc3QgZGI9YXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XG4gICAgY29uc29sZS5sb2coJ+aWsOi/nuaOpScpO1xuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQ9ZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbn1cblxuLy/mlq3lvIDov57mjqXlip/og71cbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKXtcbiAgICAvL+ajgOafpei/nuaOpVxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcbiAgICAgICAgLy/lpoLmnpzlpITkuo7nlJ/miJDmqKHlvI/vvIzmlq3lvIDov57mjqVcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtcbiAgICAgICAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy/msqHmnInmlq3lvIDov57mjqXvvIzmiYDku6Xlj6rmlq3lvIDov57mjqVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlq3lvIDov57mjqUnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBkYj17Y29ubmVjdCxkaXNjb25uZWN0fVxuZXhwb3J0IGRlZmF1bHQgZGIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwibGVuZ3RoIiwicmVhZHlTdGF0ZSIsImRpc2Nvbm5lY3QiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

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