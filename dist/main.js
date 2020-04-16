/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/global.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/global.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);\"]);\n// Module\nexports.push([module.i, \"main {\\n  width: 90%;\\n  display: flex;\\n  justify-content: center;\\n  margin: 2% auto;\\n}\\nmain aside {\\n  width: 17%;\\n  margin-right: 10px;\\n}\\nmain aside .index {\\n  font-size: 14px;\\n  padding: 0 5%;\\n}\\nmain aside .index div {\\n  display: flex;\\n  font-weight: bold;\\n  padding: 10px;\\n  color: #172b4d;\\n}\\nmain aside .index div:hover {\\n  cursor: pointer;\\n  background-color: rgba(228, 228, 228, 0.822);\\n  border-radius: 4px;\\n}\\nmain aside .teams {\\n  padding: 10%;\\n}\\nmain aside .teams h2 {\\n  font-size: 13px;\\n  color: gray;\\n  margin-bottom: 10px;\\n}\\nmain aside .teams button {\\n  border: none;\\n  display: flex;\\n  width: 100%;\\n  padding: 6px 0;\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #172b4d;\\n}\\nmain aside .teams button:hover {\\n  cursor: pointer;\\n  background-color: rgba(228, 228, 228, 0.822);\\n  border-radius: 4px;\\n}\\nmain aside #aside-active {\\n  background-color: #E4F0F6;\\n  color: #3394cb;\\n  border-radius: 4px;\\n}\\nmain aside #aside-active img {\\n  filter: invert(73%) sepia(89%) saturate(3952%) hue-rotate(173deg) brightness(87%) contrast(80%);\\n}\\nmain img {\\n  width: 13px;\\n  height: 13px;\\n  filter: invert(10%) sepia(58%) saturate(1889%) hue-rotate(198deg) brightness(94%) contrast(88%);\\n  margin-right: 10px;\\n}\\nmain .boards {\\n  width: 60%;\\n  display: flex;\\n  flex-direction: column;\\n}\\nmain .boards #personal-board {\\n  font-size: 16px;\\n  display: flex;\\n  margin-bottom: 10px;\\n}\\nmain .boards #personal-board img {\\n  width: 20px;\\n  height: 20px;\\n}\\nmain .boards .my-boards {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\nmain .boards .my-boards div, main .boards .my-boards a {\\n  background-color: #40a35b;\\n  width: 22%;\\n  height: 5em;\\n  margin: 8px;\\n  border-radius: 4px;\\n  color: white;\\n  padding: 7px;\\n  font-weight: bold;\\n}\\nmain .boards .my-boards div:hover, main .boards .my-boards a:hover {\\n  background-color: #338148;\\n  cursor: pointer;\\n}\\nmain .boards .my-boards .add-board {\\n  background-color: #f0f2f5;\\n  color: #969393;\\n}\\nmain .boards .my-boards .add-board:hover {\\n  background-color: #e7e9ed;\\n}\\n\\n/*   NEW PROJECT FORM   */\\n#new-project {\\n  color: #53617b;\\n  background-color: #40a35b;\\n  display: flex;\\n  justify-content: space-between;\\n  position: absolute;\\n  top: 35%;\\n  left: 38%;\\n  padding: 0.6em;\\n  width: 30%;\\n  animation: slide 2s ease;\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translate(0, 20px);\\n  }\\n  100% {\\n    transform: translate(0, 0);\\n  }\\n}\\n#new-project input {\\n  border: none;\\n  width: 100%;\\n  padding: 10px;\\n  background-color: #f4f5f77a;\\n  color: white;\\n  font-size: 20px;\\n}\\n#new-project input::placeholder {\\n  color: white;\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\nnav {\\n  --navColor: #026AA7;\\n  background-color: var(--navColor);\\n  display: flex;\\n  justify-content: space-between;\\n  height: 6%;\\n}\\nnav div {\\n  display: flex;\\n  align-items: center;\\n}\\nnav div div {\\n  background-color: rgba(218, 218, 218, 0.377);\\n  padding: 5px;\\n  margin: 2px;\\n  border-radius: 5px;\\n}\\nnav div div:hover {\\n  cursor: pointer;\\n  background-color: rgba(218, 218, 218, 0.493);\\n}\\nnav div div p, nav div div h1 {\\n  margin-left: 5px;\\n  font-size: 13px;\\n  color: white;\\n}\\nnav div div h1 {\\n  font-family: \\\"Dancing Script\\\", cursive;\\n  font-size: 19px;\\n  color: rgba(218, 218, 218, 0.377);\\n}\\nnav div div h1:hover {\\n  color: rgba(255, 255, 255, 0.555);\\n}\\nnav div div input {\\n  background-color: rgba(255, 255, 255, 0);\\n  border: none;\\n}\\nnav div img {\\n  height: 18px;\\n  width: 18px;\\n  filter: invert(1);\\n}\\nnav div #logo {\\n  background-color: rgba(0, 0, 0, 0);\\n  position: relative;\\n  left: -60%;\\n}\\nnav div #logo img {\\n  filter: invert(86%) sepia(8%) saturate(7%) hue-rotate(46deg) brightness(100%) contrast(96%);\\n}\\n\\n.green-nav {\\n  --navColor: #40a35b;\\n}\\n\\n.to-dos {\\n  height: 100%;\\n  background-color: #4bbf6b;\\n  /* LISTS */\\n}\\n.to-dos img {\\n  height: 18px;\\n  width: 18px;\\n  filter: invert(1);\\n}\\n.to-dos #sub-nav {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  color: white;\\n}\\n.to-dos #sub-nav div {\\n  display: flex;\\n  margin: 0 10px;\\n}\\n.to-dos #sub-nav div div {\\n  background-color: rgba(218, 218, 218, 0.377);\\n  padding: 5px;\\n  border-radius: 5px;\\n}\\n.to-dos #sub-nav div div p {\\n  margin-left: 10px;\\n}\\n.to-dos #sub-nav div div:hover {\\n  cursor: pointer;\\n  background-color: rgba(218, 218, 218, 0.493);\\n}\\n.to-dos #sub-nav div #title, .to-dos #sub-nav div #user {\\n  background-color: rgba(255, 255, 255, 0);\\n  font-weight: bold;\\n  font-size: 18px;\\n}\\n.to-dos #list-container {\\n  align-items: flex-start;\\n  height: 89%;\\n  display: flex;\\n  overflow: auto;\\n  white-space: nowrap;\\n}\\n.to-dos #list-container #add-list {\\n  padding: 7px;\\n  border-radius: 5px;\\n  margin: 5px 7px;\\n  display: flex;\\n  align-items: center;\\n  background-color: rgba(255, 255, 255, 0.445);\\n  border: none;\\n}\\n.to-dos #list-container #add-list p {\\n  padding: 7px;\\n  width: 12em;\\n  color: white;\\n}\\n.to-dos #list-container #add-list:hover {\\n  cursor: pointer;\\n  background-color: rgba(255, 255, 255, 0.664);\\n}\\n.to-dos #list-container .list {\\n  margin: 4px;\\n  background-color: #ebecf0;\\n  border-radius: 5px;\\n  max-height: 95%;\\n  width: auto;\\n}\\n.to-dos #list-container .list h1 {\\n  margin: 10px;\\n  font-size: 13px;\\n}\\n.to-dos #list-container .list .items-container {\\n  overflow-x: auto;\\n  max-height: 25em;\\n}\\n.to-dos #list-container .list .items-container::-webkit-scrollbar {\\n  width: 9px;\\n}\\n.to-dos #list-container .list .items-container::-webkit-scrollbar-track {\\n  background-color: #d1d1d1;\\n  margin: 0 1em;\\n  border-radius: 10px;\\n}\\n.to-dos #list-container .list .items-container::-webkit-scrollbar-thumb {\\n  background-color: #adadad;\\n  border-radius: 10px;\\n}\\n.to-dos #list-container .list .items-container .items {\\n  width: 95%;\\n  margin: 5px 7px;\\n  padding: 7px;\\n  background-color: white;\\n  border-radius: 5px;\\n  border-bottom: 1px solid #646262;\\n  font-size: 13px;\\n}\\n.to-dos #list-container .list .items-container .items:hover {\\n  cursor: pointer;\\n}\\n.to-dos #list-container .list .add-item {\\n  border: none;\\n  background-color: #ebecf0;\\n  width: 15em;\\n  display: flex;\\n  margin: 13px;\\n  align-items: center;\\n  font-size: 15px;\\n  color: #747272;\\n  padding: 5px;\\n  border-radius: 5px;\\n  font-size: 13px;\\n}\\n.to-dos #list-container .list .add-item:hover {\\n  background-color: #d2d2d8;\\n  cursor: pointer;\\n}\\n.to-dos #list-container .list .add-item img {\\n  margin-right: 10px;\\n  filter: invert(47%) sepia(0%) saturate(549%) hue-rotate(296deg) brightness(94%) contrast(91%);\\n  height: 15px;\\n  width: 15px;\\n}\\n.to-dos #list-container::-webkit-scrollbar {\\n  height: 9px;\\n}\\n.to-dos #list-container::-webkit-scrollbar-track {\\n  background-color: rgba(0, 0, 0, 0.212);\\n  margin: 0 1em;\\n  border-radius: 10px;\\n}\\n.to-dos #list-container::-webkit-scrollbar-thumb {\\n  background-color: rgba(255, 255, 255, 0.589);\\n  border-radius: 10px;\\n}\\n\\n/*    LIST OPTIONS DIV   */\\n.dark-background {\\n  position: absolute;\\n  top: 0;\\n  height: 100%;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.644);\\n  z-index: 2;\\n  transition: background 180ms ease-in;\\n}\\n.dark-background img {\\n  height: 15px;\\n  width: 15px;\\n  filter: invert(37%) sepia(28%) saturate(462%) hue-rotate(180deg) brightness(92%) contrast(87%);\\n  margin-right: 3px;\\n}\\n.dark-background #item-options {\\n  color: #53617b;\\n  background-color: #f4f5f7;\\n  display: flex;\\n  justify-content: space-between;\\n  position: absolute;\\n  top: 35%;\\n  left: 38%;\\n  padding: 0.6em;\\n  width: 30%;\\n  animation: slide 2s ease;\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translate(0, 20px);\\n  }\\n  100% {\\n    transform: translate(0, 0);\\n  }\\n}\\n.dark-background #item-options #left-options {\\n  width: 60%;\\n}\\n.dark-background #item-options #left-options #item-title {\\n  display: flex;\\n  font-size: 15px;\\n  flex-direction: column;\\n  margin-bottom: 10px;\\n}\\n.dark-background #item-options #left-options #item-title h1 {\\n  display: flex;\\n  align-items: center;\\n  font-size: 18px;\\n}\\n.dark-background #item-options #left-options #item-title p {\\n  font-size: 12px;\\n  margin: 2px 0 0 19px;\\n}\\n.dark-background #item-options #left-options h2 {\\n  font-size: 15px;\\n}\\n.dark-background #item-options #left-options h2 img {\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 7px;\\n}\\n.dark-background #item-options #left-options form #description {\\n  margin-left: 17px;\\n  border: 0;\\n  background-color: #00000012;\\n  width: 90%;\\n  height: 3em;\\n  margin-top: 0.5em;\\n  padding-left: 5px;\\n}\\n.dark-background #item-options #left-options form label {\\n  margin-left: 17px;\\n  font-size: 13px;\\n}\\n.dark-background #item-options #right-options {\\n  display: flex;\\n  flex-direction: column;\\n  width: 35%;\\n}\\n.dark-background #item-options #right-options #close-icon {\\n  margin: 5px 0 40px 0;\\n  display: flex;\\n  align-self: flex-end;\\n}\\n.dark-background #item-options #right-options #close-icon:hover {\\n  background-color: #00000033;\\n  border-radius: 50%;\\n  cursor: pointer;\\n}\\n.dark-background #item-options #right-options button {\\n  display: flex;\\n  border: 0;\\n  padding: 10px;\\n  margin-bottom: 10px;\\n  border-radius: 2px;\\n  background-color: #00000012;\\n}\\n.dark-background #item-options #right-options button img {\\n  margin-right: 5px;\\n}\\n.dark-background #item-options #right-options button:hover {\\n  background-color: #00000033;\\n  cursor: pointer;\\n}\\n.dark-background #item-options #right-options button:focus {\\n  outline: none;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  height: 100%;\\n  background-color: #FAFBFC;\\n}\\n\\nbody {\\n  height: 94%;\\n  overflow-y: hidden;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.root {\\n  height: 100%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/styles/global.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* \n(The MIT License)\nCopyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/assets/styles/global.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/global.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./global.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/global.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/assets/styles/global.scss?");

/***/ }),

/***/ "./src/controller/projectsController.js":
/*!**********************************************!*\
  !*** ./src/controller/projectsController.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/global.scss */ \"./src/assets/styles/global.scss\");\n/* harmony import */ var _assets_styles_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_global_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_routesConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/routesConfig */ \"./src/routes/routesConfig.js\");\n/* harmony import */ var _views_projectsViews_navView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/projectsViews/navView */ \"./src/views/projectsViews/navView.js\");\n/* harmony import */ var _views_projectsViews_mainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/projectsViews/mainView */ \"./src/views/projectsViews/mainView.js\");\n/* harmony import */ var _views_projectsViews_projectFormView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/projectsViews/projectFormView */ \"./src/views/projectsViews/projectFormView.js\");\n/* harmony import */ var _model_ProjectModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ProjectModel */ \"./src/model/ProjectModel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Selectors\r\nconst root = document.querySelector('.root')\r\nroot.insertAdjacentHTML('beforebegin', _views_projectsViews_navView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\n_routes_routesConfig__WEBPACK_IMPORTED_MODULE_1__[\"insertPage\"](_views_projectsViews_mainView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n\r\n\r\n// Step 1: Pop form when addBoardBtn is clicked \r\n\r\nconst addBoardBtn = document.querySelector('.add-board')\r\n\r\naddBoardBtn.addEventListener('click', () => {\r\n    root.insertAdjacentHTML('afterbegin', _views_projectsViews_projectFormView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n})\r\n\r\n// Step 2: Create new project with step 1 form when enter is pressed\r\n\r\nconst newCard = (name) => {\r\n    `<div class=\"tests\">${name}</div>`\r\n}\r\nconst addCard = (title) => {\r\n    const boardsContainer = document.querySelector('.my-boards')\r\n    boardsContainer.insertAdjacentHTML('afterbegin',newCard(title))\r\n}\r\nconst createProjectForm = document.querySelector('form')\r\n\r\ncreateProjectForm.addEventListener('keydown', (e)=> {\r\n    if (e == enter) {\r\n        // put the picked name into the object from the model\r\n        // create new card\r\n        // redirect to Todospage currnt project (for the moment dir to default)\r\n    }\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/controller/projectsController.js?");

/***/ }),

/***/ "./src/controller/toDosController.js":
/*!*******************************************!*\
  !*** ./src/controller/toDosController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("alert(\"HEYY woking\")\n\n//# sourceURL=webpack:///./src/controller/toDosController.js?");

/***/ }),

/***/ "./src/model/ProjectModel.js":
/*!***********************************!*\
  !*** ./src/model/ProjectModel.js ***!
  \***********************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst projects = []\r\n\r\nconst createProject = (title) => {\r\n    const values = {\r\n        \"id\" : uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),\r\n        \"title\" : title\r\n    }\r\n    projects.push(values)\r\n}\n\n//# sourceURL=webpack:///./src/model/ProjectModel.js?");

/***/ }),

/***/ "./src/routes/routesConfig.js":
/*!************************************!*\
  !*** ./src/routes/routesConfig.js ***!
  \************************************/
/*! exports provided: insertPage, redirecTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertPage\", function() { return insertPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"redirecTo\", function() { return redirecTo; });\nconst root = document.querySelector('.root')\r\n     \r\nconst clear = () => {\r\n    root.innerHTML = ''\r\n}\r\nconst insertPage = (page) => {\r\n    clear()\r\n    root.insertAdjacentHTML('afterbegin',page)\r\n} \r\nconst redirecTo = (btn, page) => {\r\n    btn.addEventListener('click', () => {\r\n        insertPage(page)\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/routes/routesConfig.js?");

/***/ }),

/***/ "./src/views/projectsViews/mainView.js":
/*!*********************************************!*\
  !*** ./src/views/projectsViews/mainView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (` <main>\r\n<aside>\r\n    <div class=\"index\">\r\n        <div id=\"aside-active\"><img src=\"../src/assets/images/to-do-list.svg\" alt=\"list icon\">Boards</div>\r\n        <div><img src=\"../src/assets/images/to-do-list.svg\" alt=\"list icon\">plantillas</div>\r\n        <div><img src=\"../src/assets/images/to-do-list.svg\" alt=\"list icon\">inicio</div>\r\n    </div>\r\n    <div class=\"teams\">\r\n        <h2>TEAMS</h2>\r\n        <button><img src=\"../src/assets/images/plus.svg\" alt=\"list icon\">Create a Team</button>\r\n    </div>\r\n</aside>\r\n<div class=\"boards\">\r\n    <h1 id=\"personal-board\"><img src=\"../src/assets/images/user.svg\" alt=\"user icon\">Personal Boards</h1>\r\n\r\n    <div class=\"my-boards\">\r\n        <div class=\"tests\">Learn maths with python</div>\r\n        <a class=\"add-board\">Create a new board</a>\r\n    </div>\r\n</div>\r\n</main>`);\n\n//# sourceURL=webpack:///./src/views/projectsViews/mainView.js?");

/***/ }),

/***/ "./src/views/projectsViews/navView.js":
/*!********************************************!*\
  !*** ./src/views/projectsViews/navView.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (`\r\n<nav>\r\n        <div>\r\n            <div><img src=\"../src/assets/images/grid.svg\" alt=\"menu icon\" class=\"nav-icon\"></div>\r\n            <div><img src=\"../src/assets/images/home-run.svg\" alt=\"home icon\"></div>\r\n            <div><img src=\"../src/assets/images/to-do-list.svg\" alt=\"list icon\"><p>Boards</p></div>\r\n            <div><input type=\"text\"><img src=\"../src/assets/images/search.svg\" alt=\"search icon\"></div>\r\n        </div>\r\n        <div>\r\n            <div id=\"logo\"><img src=\"../src/assets/images/to-do-list.svg\" alt=\"list icon\"><h1>SuperToDo</h1></div>\r\n        </div>\r\n        <div>\r\n            <div><img src=\"../src/assets/images/plus.svg\" alt=\"plus icon\"></div>\r\n            <div><img src=\"../src/assets/images/information.svg\" alt=\"information icon\"></div>\r\n            <div><img src=\"../src/assets/images/bell.svg\" alt=\"bell icon\"></div>\r\n            <div><img src=\"../src/assets/images/user.svg\" alt=\"user icon\"></div>\r\n        </div>\r\n    </nav>\r\n`);\n\n//# sourceURL=webpack:///./src/views/projectsViews/navView.js?");

/***/ }),

/***/ "./src/views/projectsViews/projectFormView.js":
/*!****************************************************!*\
  !*** ./src/views/projectsViews/projectFormView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (`\r\n    <div class=\"dark-background\">\r\n        <form id=\"new-project\">\r\n            <input type=\"text\" id=\"description\" name=\"description\" placeholder=\"Add project name\"><br><br>\r\n        </form>\r\n    </div>\r\n`);\n\n//# sourceURL=webpack:///./src/views/projectsViews/projectFormView.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./src/controller/projectsController.js ./src/controller/toDosController.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/controller/projectsController.js */\"./src/controller/projectsController.js\");\nmodule.exports = __webpack_require__(/*! ./src/controller/toDosController.js */\"./src/controller/toDosController.js\");\n\n\n//# sourceURL=webpack:///multi_./src/controller/projectsController.js_./src/controller/toDosController.js?");

/***/ })

/******/ });