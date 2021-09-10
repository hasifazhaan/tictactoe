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
/******/ 	return __webpack_require__(__webpack_require__.s = "./second.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./com.js":
/*!****************!*\
  !*** ./com.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar box\r\n\r\nmodule.exports = (player,arr)=>{\r\n\r\n\tvar x = Math.floor(Math.random() * arr.length);\r\n\tvar a = arr[x]\r\n\tconst index = arr.indexOf(a);\r\n\tif (index > -1) {\r\n  \t\tarr.splice(index, 1);\r\n  \t}\r\n\r\nif(a===0){\r\n\t$('div[id=one]').text(player)\r\n\tbox=$('div[id=one]')\r\n\r\n}\r\nif(a===1){\r\n\t$('div[id=two]').text(player)\r\n\tbox=$('div[id=two]')\r\n}\r\nif(a===2){\r\n\t$('div[id=three]').text(player)\r\n\tbox=$('div[id=three]')\r\n}\r\nif(a===3){\r\n\t$('div[id=four]').text(player)\r\n\tbox=$('div[id=four]')\r\n}\r\nif(a===4){\r\n\t$('div[id=five]').text(player)\r\n\tbox=$('div[id=five]')\r\n}\r\nif(a===5){\r\n\t$('div[id=six]').text(player)\r\n\tbox=$('div[id=six]')\r\n}\r\nif(a===6){\r\n\t$('div[id=seven]').text(player)\r\n\tbox=$('div[id=seven]')\r\n}\r\nif(a===7){\r\n\t$('div[id=eight]').text(player)\r\n\tbox=$('div[id=eight]')\r\n}\r\nif(a===8){\r\n\t$('div[id=nine]').text(player)\r\n\tbox=$('div[id=nine]')\r\n}\r\n\r\nvar check_if_gameover = __webpack_require__(/*! ./index.js */ \"./index.js\")\r\n\t\tif(check_if_gameover() != ' ')\r\n\t\t\tif(alert(check_if_gameover())) {}\r\n\t\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t\t}\r\n\r\nvar check_winner = __webpack_require__(/*! ./winner.js */ \"./winner.js\")\r\n\t\tvar ans = check_winner(box)\r\n\t\tif(isNaN(ans)){\r\n\t\t\tif(alert(ans)){}\r\n\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t}\r\n\t\t\t\t\r\n\t\t}\r\nreturn ''\r\n\r\n}\n\n//# sourceURL=webpack:///./com.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var moves = 1\r\n\r\nmodule.exports=()=>{\r\n\tif(moves>=9){\r\n\t\treturn'Game Over/its a draw'\r\n\t}\r\n\telse{\r\n\t\tmoves+=1;\r\n\t\treturn \" \"\r\n\t}\r\n}\r\n\r\n\r\n \r\n \r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./second.js":
/*!*******************!*\
  !*** ./second.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arr = [0,1,2,3,4,5,6,7,8]\r\nvar player='X'\r\nvar storage_player = 0;\r\nif (typeof(Storage) === \"undefined\") {\r\n  if(alert(\"Please use another browser or upgrade it!!\")){}\r\n  \telse{\r\n  \t\twindow.location.href =\"www.selectPlayer.html\"\r\n  \t}\r\n\r\n} else {\r\n  storage_player = 1;\r\n  if(localStorage.getItem(\"p\")===\"two\"){\r\n  \tstorage_player = 2\r\n  }\r\n}\r\n\r\nif(storage_player === 2 ){\r\n\t$(document).ready(function(){\r\n\t$(\"span\").text(\"Two Player\");\r\n\t$(\"div[id]\").on(\"click\",function(){\r\n\t\t$(this).text(player)\r\n\t\tnext_player();\r\n\t\t$(\"aside\").text(player+\" Turn\")\r\n\t\tvar check_if_gameover = __webpack_require__(/*! ./index.js */ \"./index.js\")\r\n\t\tif(check_if_gameover() != ' ')\r\n\t\t\tif(alert(check_if_gameover())){}\r\n\t\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t\t}\r\n\t\telse{\r\n\t\t\tvar check_winner = __webpack_require__(/*! ./winner.js */ \"./winner.js\")\r\n\t\t\tvar a=(check_winner($(this)))\r\n\t\t\tif(isNaN(a)){\r\n\t\t\t\tif(alert(a)){}\r\n\t\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n})\r\n\r\n});\r\n\r\n}\r\nif(storage_player === 1) {\r\n\r\n\t$(document).ready(function(){\r\n\t\tvar level=\"Easy\"\r\n\t\t$(\"span\").text(\"One Player\");\r\n\t\t$(\"span\").append(`<br>Level:${level}<br>`);\r\n\t\t$(\"div[id]\").on(\"click\",function(){\r\n\t\t$(this).text(player)\r\n\t\tnext_player();\r\n\t\tvar winner_c = __webpack_require__(/*! ./winner.js */ \"./winner.js\")\r\n\t\tvar ans = winner_c($(this))\r\n\t\tif(isNaN(ans)){\r\n\t\t\tif(alert(ans)){}\r\n\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t}\r\n\t\t\t\t\r\n\t\t}\r\n\t\telse{\r\n\t\t\tconst index = arr.indexOf(ans);\r\n\t\t\tconsole.log(index)\r\n\tif (index > -1) {\r\n  \t\tarr.splice(index, 1);\r\n  \t}\r\n\t\t}\r\n\t\tvar check_if_gameover = __webpack_require__(/*! ./index.js */ \"./index.js\")\r\n\t\tif(check_if_gameover() != ' ')\r\n\t\t\tif(alert(check_if_gameover())) {}\r\n\t\t\t\telse{\r\n\t\t\t\t\twindow.location.href = \"index.html\";\r\n\t\t\t\t}\r\n\t\t\r\n\t\tvar com_turn = __webpack_require__(/*! ./com.js */ \"./com.js\")\r\n\t\tcom_turn(player,arr)\r\n\t\tnext_player();\r\n\t\t\r\n\t\t});\r\n\t});\r\n}\r\n\r\nfunction next_player(){\r\n\tif (player=='X')\r\n\t\t\tplayer='O';\r\n\telse\r\n\t\tplayer=\"X\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./second.js?");

/***/ }),

/***/ "./winner.js":
/*!*******************!*\
  !*** ./winner.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var arr = [1,2,3,4,5,6,7,8,9]\r\n\r\nmodule.exports = (box)=>{\r\n\r\n\tvar attr = box.attr(\"id\");\r\n\tswitch(attr)\r\n\t{\r\n\t\tcase 'one': arr[0]=box.text();\r\n\t\tvar a = test(0);\r\n\t\t\treturn a;\r\n\r\n\t\tcase 'two': arr[1]=box.text();\r\n\t\tvar a = test(1);\r\n\t\t\treturn a;\r\n\t\tcase 'three': arr[2]=box.text();\r\n\t\tvar a = test(2);\r\n\t\t\treturn a;\r\n\t\tcase 'four': arr[3]=box.text();\r\n\t\tvar a = test(3);\r\n\t\t\treturn a;\r\n\t\tcase 'five': arr[4]=box.text();\r\n\t\tvar a = test(4);\r\n\t\t\treturn a;\r\n\t\tcase 'six': arr[5]=box.text();\r\n\t\tvar a = test(5);\r\n\t\t\treturn a;\r\n\t\tcase 'seven': arr[6]=box.text();\r\n\t\tvar a = test(6);\r\n\t\t\treturn a;\r\n\t\tcase 'eight': arr[7]=box.text();\r\n\t\tvar a = test(7);\r\n\t\t\treturn a;\r\n\t\tcase 'nine': arr[8]=box.text();\r\n\t\tvar a = test(8);\r\n\t\t\treturn a;\r\n\r\n\t}\r\n\t\r\n}\r\n\r\nfunction test(Number) {\r\n\tif((arr[0]===arr[1])&&(arr[1]===arr[2])){\r\n\t\t\r\n\t\treturn arr[0]+\" Won\";\r\n\t}\r\n\telse if((arr[0]===arr[3])&&(arr[3]===arr[6])){\r\n\t\t\r\n\t\treturn arr[0]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[0]===arr[4])&&(arr[4]===arr[8])){\r\n\t\t\r\n\t\treturn arr[0]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[6]===arr[7])&&(arr[7]===arr[8])){\r\n\t\t\r\n\t\treturn arr[6]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[2]===arr[5])&&(arr[5]===arr[8])){\r\n\t\t\r\n\t\treturn arr[2]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[2]===arr[4])&&(arr[4]===arr[6])){\r\n\t\t\r\n\t\treturn arr[2]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[1]===arr[4])&&(arr[4]===arr[7])){\r\n\t\t\r\n\t\treturn arr[1]+\" Won\";\r\n\t}\r\n\r\n\telse if((arr[3]===arr[4])&&(arr[4]===arr[5])){\r\n\t\treturn arr[3]+\" Won\";\r\n\t}\r\n\t\telse\r\n\t\t\treturn Number;\r\n\t\r\n}\n\n//# sourceURL=webpack:///./winner.js?");

/***/ })

/******/ });