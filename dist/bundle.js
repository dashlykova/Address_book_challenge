<<<<<<< HEAD
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";console.log("Hello from Camilla & Dash! <3"),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=window.localStorage,o=e.elements,r=o.name,u=o.email,a=o.phone,l=o.company,i=o.notes,c=o.twitter,f={id:Date.now(),name:r.value,email:u.value,phone:a.value,company:l.value,notes:i.value,twitter:c.value};console.log("Saving the following contact: "+JSON.stringify(f)),n.setItem("contacts",JSON.stringify([f]))})})}]);
=======
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Plugin/Preset files are not allowed to export objects, only functions. In /home/kirkegaard/kod/Address_book_challenge/node_modules/babel-preset-es2015/lib/index.js\\n    at createDescriptor (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:178:11)\\n    at /home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:109:50\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\\n    at /home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:58:96\\n    at cachedFunction (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/caching.js:33:19)\\n    at presets (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-descriptors.js:29:84)\\n    at mergeChainOpts (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-chain.js:320:26)\\n    at /home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-chain.js:283:7\\n    at buildRootChain (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/config-chain.js:68:29)\\n    at loadPrivatePartialConfig (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/partial.js:85:55)\\n    at Object.loadPartialConfig (/home/kirkegaard/kod/Address_book_challenge/node_modules/@babel/core/lib/config/partial.js:110:18)\\n    at Object.<anonymous> (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:144:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:5:194)\\n    at /home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object._loader (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:224:18)\\n    at Object.loader (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:60:18)\\n    at Object.<anonymous> (/home/kirkegaard/kod/Address_book_challenge/node_modules/babel-loader/lib/index.js:55:12)\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });
>>>>>>> 1493364fef010a61ab748c885325b24b63de10ec
