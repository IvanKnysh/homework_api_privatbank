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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/task-1.scss":
/*!*****************************!*\
  !*** ./src/css/task-1.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/task-1.js":
/*!**************************!*\
  !*** ./src/js/task-1.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Завдання 2
* Список завдань
* */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo() {
    _classCallCheck(this, Todo);

    this.before = document.querySelector('.before');
    this.after = document.querySelector('.after');
    this.todosAPI = 'https://jsonplaceholder.typicode.com/todos';
  }

  _createClass(Todo, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      var request = new XMLHttpRequest();
      request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
          var data = JSON.parse(request.responseText);
          data.forEach(function (item) {
            if (item.userId === 1) {
              _this.showTasks(item);
            }
          });
        }
      });
      request.open('GET', this.todosAPI);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send();
    }
  }, {
    key: "showTasks",
    value: function showTasks(item) {
      if (item.completed) {
        this.after.insertAdjacentHTML('beforeend', "\n                <div class=\"task\">\n                    <div class=\"check checked\"></div>\n                    <input type=\"text\" placeholder=\"\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\" value=\"".concat(item.title, "\" disabled>\n                        <button></button>\n                </div>\n            "));
      } else {
        this.before.insertAdjacentHTML('beforeend', "\n                <div class=\"task\">\n                    <div class=\"check\"></div>\n                    <input type=\"text\" placeholder=\"\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\" value=\"".concat(item.title, "\" disabled>\n                        <button></button>\n                </div>\n            "));
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.getData();
    }
  }]);

  return Todo;
}();

var todo = new Todo();
todo.init();

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/task-1.js ./src/css/task-1.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ivanknys/Documents/academy-homework/Yurii/homework-api-privatbank/src/js/task-1.js */"./src/js/task-1.js");
module.exports = __webpack_require__(/*! /Users/ivanknys/Documents/academy-homework/Yurii/homework-api-privatbank/src/css/task-1.scss */"./src/css/task-1.scss");


/***/ })

/******/ });