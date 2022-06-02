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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/task-3.js":
/*!**************************!*\
  !*** ./src/js/task-3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Завдання 3
* Список відділень ПриватБанку
* */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BranchesList = /*#__PURE__*/function () {
  function BranchesList() {
    _classCallCheck(this, BranchesList);

    this.branchesList = document.querySelector('#branches-list');
    this.output = document.querySelector('.output');
  }

  _createClass(BranchesList, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      this.branchesList.addEventListener('change', function () {
        var request = new XMLHttpRequest();
        _this.output.innerHTML = '';
        request.addEventListener('readystatechange', function () {
          if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            data.forEach(function (item) {
              if (item.country === 'Украина') {
                if (item.state === _this.branchesList.value) {
                  _this.output.insertAdjacentHTML('beforeend', "\n                                    <div class=\"block\">\n                                        <img src=\"./src/img/logo.png\" alt=\"\">\n                                        <p><span>\u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435:</span> ".concat(item.name, "</p>  \n                                        <p><span>\u0410\u0434\u0440\u0435\u0441:</span> ").concat(item.address, "</p>  \n                                        <p><span>\u0413\u043E\u0440\u043E\u0434:</span> ").concat(item.city, "</p>  \n                                        <p><span>\u0422\u0435\u043B.:</span> ").concat(item.phone, "</p>  \n                                        <p><span>Email:</span> ").concat(item.email, "</p>  \n                                        <p><span>\u0418\u043D\u0434\u0435\u043A\u0441:</span> ").concat(item.index, "</p>  \n                                    </div>\n                                "));
                }
              }
            });
          }
        });
        request.open('GET', './privat.json');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.getData();
    }
  }]);

  return BranchesList;
}();

var branchesList = new BranchesList();
branchesList.init();

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** multi ./src/js/task-3.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanknys/Documents/academy-homework/Yurii/homework-api-privatbank/src/js/task-3.js */"./src/js/task-3.js");


/***/ })

/******/ });