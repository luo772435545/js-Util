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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dom__ = __webpack_require__(1);
/**
 * Created by gan on 2018/1/16.
 */


console.log(window.util);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);


class dom {
    constructor(){}
    /**
     * 检查是否有class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    hasClass (ele, cls) {
         return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    /**
     * 添加class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    addClass (ele, cls) {
         if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }
    /**
     * 移除class
     * @param {object} dom对象
     * @param {string} 添加的class名
     * */
    removeClass (ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    toggleClass (ele, cls) {
        if(ele.length>1){
            for( var i=0 ;i<ele.length;i++){
                this.hasClass(ele[i],cls)? this.removeClass(ele[i], cls): this.addClass(ele[i], cls)
            }
        }else {
            this.hasClass(ele,cls)? this.removeClass(ele, cls): this.addClass(ele, cls)
        }
    }
}
var utilDom=new dom();
window.util=utilDom;
/* unused harmony default export */ var _unused_webpack_default_export = (utilDom);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * gan
 *
 * 2018-1-16
 * */


class util{
    constructor(){}

}


/* unused harmony default export */ var _unused_webpack_default_export = (util);

/***/ })
/******/ ]);