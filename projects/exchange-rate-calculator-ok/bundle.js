/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("var fromCurrency = document.querySelector('.from-currency');\nvar toCurrency = document.querySelector('.to-currency');\nvar fromCount = document.querySelector('.from-count');\nvar direction = document.querySelector('.direction');\nvar toCount = document.querySelector('.to-count');\nvar rate = document.querySelector('.rate');\n\nvar calculate = async (el) => {\n  var currency = el === 'from' ? fromCurrency.value : toCurrency.value;\n  var url = `https://v6.exchangerate-api.com/v6/${\"81fe4de51f0a0aa71279abfa\"}/latest/${currency}`;\n  var data = await fetch(url);\n  var parsedData = await data.json();\n  var currencies = parsedData.conversion_rates;\n\n  if (el === 'from') {\n    toCount.value = (currencies[toCurrency.value] * fromCount.value).toFixed(3);\n    rate.innerHTML = `1 ${fromCurrency.value} = ${toCurrency.value} ${toCount.value}`;\n  } else {\n    fromCount.value = (currencies[fromCurrency.value] * toCount.value).toFixed(\n      3\n    );\n    rate.innerHTML = `1 ${toCurrency.value} = ${fromCurrency.value} ${fromCount.value}`;\n  }\n};\n\nfromCount.addEventListener('change', () => {\n  if (fromCount.value >= 0) {\n    calculate('from');\n    direction.className = 'direction right';\n  } else {\n    fromCount.value = 0;\n  }\n});\n\ntoCount.addEventListener('change', () => {\n  if (toCount.value >= 0) {\n    calculate('to');\n    direction.className = 'direction left';\n  } else {\n    toCount.value = 0;\n  }\n});\n\nfromCurrency.addEventListener('input', () => {\n  calculate('from');\n  direction.className = 'direction right';\n});\n\ntoCurrency.addEventListener('input', () => {\n  calculate('to');\n  direction.className = 'direction left';\n});\n\ncalculate();\n\n\n//# sourceURL=webpack://exchange-rate-calculator-ok/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;