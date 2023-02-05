/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functs.js":
/*!***********************!*\
  !*** ./src/functs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function capitalize(string) {
    let firstChar = string.charCodeAt(0);
    if (firstChar < 97 || firstChar > 122) {
        let errorMsg = 'invalid first char';
        console.log(errorMsg);
        return errorMsg;
    }
    firstChar = string.slice(0, 1).toUpperCase();
    return firstChar + string.slice(1);
}

function reverse(string) {
    let stringArray = [...string];
    let reversedString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    return reversedString;
}

const calc = function (operation, a, b) {
    let validInput = true;
    let validOperations = ['add', '+', 'subtract', '-', 'divide', '/', 'multiply', '*'];
    if (!validOperations.includes(operation)) {
        validInput = false;
        let errorMsg = 'invalid operation string';
        return errorMsg;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        validInput = false;
        let errorMsg = 'invalid input type';
        return errorMsg;
    }

    let result;
    switch(true) {
        case (operation === 'add' || operation ===  '+'):
            result = add(a, b);
            break;
        case (operation === 'subtract' || operation === '-'):
            result = sub(a, b);
            break;
        case (operation === 'divide' || operation === '/'):
            result = div(a, b);
            break;
        case (operation === 'multiply' || operation === '*'):
            result = mul(a, b);
    }
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }

    return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functs.js */ "./src/functs.js");


(0,_functs_js__WEBPACK_IMPORTED_MODULE_0__["default"])('hello world');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUMxRG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDLHNEQUFVLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamVzdHRlc3QvLi9zcmMvZnVuY3RzLmpzIiwid2VicGFjazovL2plc3R0ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2plc3R0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZXN0dGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2plc3R0ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamVzdHRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICBsZXQgZmlyc3RDaGFyID0gc3RyaW5nLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0Q2hhciA8IDk3IHx8IGZpcnN0Q2hhciA+IDEyMikge1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSAnaW52YWxpZCBmaXJzdCBjaGFyJztcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNc2cpO1xuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XG4gICAgfVxuICAgIGZpcnN0Q2hhciA9IHN0cmluZy5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBmaXJzdENoYXIgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2Uoc3RyaW5nKSB7XG4gICAgbGV0IHN0cmluZ0FycmF5ID0gWy4uLnN0cmluZ107XG4gICAgbGV0IHJldmVyc2VkU3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IHN0cmluZ0FycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHJldmVyc2VkU3RyaW5nICs9IHN0cmluZ0FycmF5W2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmV2ZXJzZWRTdHJpbmc7XG59XG5cbmNvbnN0IGNhbGMgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBhLCBiKSB7XG4gICAgbGV0IHZhbGlkSW5wdXQgPSB0cnVlO1xuICAgIGxldCB2YWxpZE9wZXJhdGlvbnMgPSBbJ2FkZCcsICcrJywgJ3N1YnRyYWN0JywgJy0nLCAnZGl2aWRlJywgJy8nLCAnbXVsdGlwbHknLCAnKiddO1xuICAgIGlmICghdmFsaWRPcGVyYXRpb25zLmluY2x1ZGVzKG9wZXJhdGlvbikpIHtcbiAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSAnaW52YWxpZCBvcGVyYXRpb24gc3RyaW5nJztcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBiICE9PSAnbnVtYmVyJykge1xuICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgIGxldCBlcnJvck1zZyA9ICdpbnZhbGlkIGlucHV0IHR5cGUnO1xuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBzd2l0Y2godHJ1ZSkge1xuICAgICAgICBjYXNlIChvcGVyYXRpb24gPT09ICdhZGQnIHx8IG9wZXJhdGlvbiA9PT0gICcrJyk6XG4gICAgICAgICAgICByZXN1bHQgPSBhZGQoYSwgYik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAob3BlcmF0aW9uID09PSAnc3VidHJhY3QnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKTpcbiAgICAgICAgICAgIHJlc3VsdCA9IHN1YihhLCBiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChvcGVyYXRpb24gPT09ICdkaXZpZGUnIHx8IG9wZXJhdGlvbiA9PT0gJy8nKTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGRpdihhLCBiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChvcGVyYXRpb24gPT09ICdtdWx0aXBseScgfHwgb3BlcmF0aW9uID09PSAnKicpOlxuICAgICAgICAgICAgcmVzdWx0ID0gbXVsKGEsIGIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGQoeCwgeSkge1xuICAgICAgICByZXR1cm4geCArIHk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1Yih4LCB5KSB7XG4gICAgICAgIHJldHVybiB4IC0geTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxjOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi9mdW5jdHMuanMnO1xuXG5jYXBpdGFsaXplKCdoZWxsbyB3b3JsZCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==