(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/baseemogi.js":
/*!***************************!*\
  !*** ../pkg/baseemogi.js ***!
  \***************************/
/*! exports provided: greet, encode, decode, __wbg_alert_d9ef4fc4d1db5eae */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseemogi_bg.wasm */ \"../pkg/baseemogi_bg.wasm\");\n/* harmony import */ var _baseemogi_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseemogi_bg.js */ \"../pkg/baseemogi_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _baseemogi_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"encode\", function() { return _baseemogi_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"encode\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"decode\", function() { return _baseemogi_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"decode\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_d9ef4fc4d1db5eae\", function() { return _baseemogi_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_d9ef4fc4d1db5eae\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/baseemogi.js?");

/***/ }),

/***/ "../pkg/baseemogi_bg.js":
/*!******************************!*\
  !*** ../pkg/baseemogi_bg.js ***!
  \******************************/
/*! exports provided: greet, encode, decode, __wbg_alert_d9ef4fc4d1db5eae */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encode\", function() { return encode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decode\", function() { return decode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_d9ef4fc4d1db5eae\", function() { return __wbg_alert_d9ef4fc4d1db5eae; });\n/* harmony import */ var _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseemogi_bg.wasm */ \"../pkg/baseemogi_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n* @param {string} input\n* @returns {string}\n*/\nfunction encode(input) {\n    try {\n        const retptr = _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        var ptr0 = passStringToWasm0(input, _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"encode\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\n/**\n* @param {string} input\n* @returns {string}\n*/\nfunction decode(input) {\n    try {\n        const retptr = _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        var ptr0 = passStringToWasm0(input, _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"decode\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _baseemogi_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\nconst __wbg_alert_d9ef4fc4d1db5eae = function(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/baseemogi_bg.js?");

/***/ }),

/***/ "../pkg/baseemogi_bg.wasm":
/*!********************************!*\
  !*** ../pkg/baseemogi_bg.wasm ***!
  \********************************/
/*! exports provided: memory, greet, encode, decode, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./baseemogi_bg.js */ \"../pkg/baseemogi_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/baseemogi_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var baseemogi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseemogi */ \"../pkg/baseemogi.js\");\n\r\n\r\n// wasm.greet();\r\n\r\nconsole.log(\"demo\")\r\n\r\nconsole.log(baseemogi__WEBPACK_IMPORTED_MODULE_0__[\"encode\"](\"Base Emoji\"))\r\n\r\nconst add_fun = document.getElementById('add_fun')\r\nconst remove_fun = document.getElementById('remove_fun')\r\n\r\nconst boringtext = document.getElementById('boringtext')\r\nconst funtext = document.getElementById('funtext')\r\n\r\nconst copy_button = document.getElementById('copy-button')\r\n\r\nconst boringtext_handler = function(e) {\r\n    console.log(\"add_fun\")\r\n    funtext.value = baseemogi__WEBPACK_IMPORTED_MODULE_0__[\"encode\"](boringtext.value)\r\n}\r\n\r\nconst funtext_handler = function(e) {\r\n    console.log(\"remove_fun\")\r\n    boringtext.value = baseemogi__WEBPACK_IMPORTED_MODULE_0__[\"decode\"](funtext.value)\r\n}\r\n\r\nconst copy_handler = function(e) {\r\n    let text = funtext.value\r\n    navigator.clipboard.writeText(text).then(function() {\r\n        console.log('Async: Copying to clipboard was successful!');\r\n    }, function(err) {\r\n        console.error('Async: Could not copy text: ', err);\r\n    });\r\n}\r\n\r\nadd_fun.addEventListener('click', boringtext_handler)\r\nremove_fun.addEventListener('click', funtext_handler)\r\ncopy_button.addEventListener('click', copy_handler)\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);