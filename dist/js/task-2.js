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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/task-2.js":
/*!**************************!*\
  !*** ./src/js/task-2.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Завдання 2
* Калькулятор валют
* */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CurrencyConverter = /*#__PURE__*/function () {
  function CurrencyConverter() {
    _classCallCheck(this, CurrencyConverter);

    this.change = document.querySelector('[name=change]');
    this.receive = document.querySelector('[name=receive]');
    this.changeSelect = document.querySelector('#changing-select');
    this.receiveSelect = document.querySelector('#receive-select');
    this.content = document.querySelector('.content');
    this.getCurrencyAPI = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  }

  _createClass(CurrencyConverter, [{
    key: "basic",
    value: function basic() {
      this.changeSelect.insertAdjacentHTML('beforeend', "<option value=\"1\">UAH</option>");
      this.receiveSelect.insertAdjacentHTML('beforeend', "<option value=\"1\">UAH</option>");
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      var request = new XMLHttpRequest();
      request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
          var data = JSON.parse(request.responseText);
          data.forEach(function (item) {
            if (item.ccy !== 'BTC') {
              _this.changeSelect.insertAdjacentHTML('beforeend', "<option value=\"".concat(item.buy, "\">").concat(item.ccy, "</option>"));

              _this.receiveSelect.insertAdjacentHTML('beforeend', "<option value=\"".concat(item.sale, "\">").concat(item.ccy, "</option>"));
            }
          });
        }
      });
      request.open('GET', this.getCurrencyAPI);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      request.send();
    }
  }, {
    key: "changeCurrencyValue",
    value: function changeCurrencyValue() {
      var _this2 = this;

      this.content.addEventListener('click', function (e) {
        var target = e.target;
        var changeSelectValue = _this2.changeSelect.value;
        var receiveSelectValue = _this2.receiveSelect.value;

        if (target.id === 'equals') {
          _this2.receive.value = (changeSelectValue / receiveSelectValue * _this2.change.value).toFixed(2);
        }
      });
    }
  }, {
    key: "switchCurrencies",
    value: function switchCurrencies() {
      var _this3 = this;

      this.content.addEventListener('click', function (e) {
        var target = e.target;
        var change = _this3.change.value;
        var receive = _this3.receive.value;
        var changeSelectIndex = _this3.changeSelect.options.selectedIndex;
        var receiveSelectIndex = _this3.receiveSelect.options.selectedIndex;

        if (target.id === 'switch') {
          if (_this3.change.value !== '' && _this3.receive.value !== '') {
            _this3.change.value = receive;
            _this3.receive.value = change;
            _this3.changeSelect.selectedIndex = receiveSelectIndex;
            _this3.receiveSelect.selectedIndex = changeSelectIndex;
            document.querySelector('#equals').click();
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.basic();
      this.getData();
      this.changeCurrencyValue();
      this.switchCurrencies();
    }
  }]);

  return CurrencyConverter;
}();

var currencyConverter = new CurrencyConverter();
currencyConverter.init();

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** multi ./src/js/task-2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanknys/Documents/academy-homework/Yurii/homework-api-privatbank/src/js/task-2.js */"./src/js/task-2.js");


/***/ })

/******/ });