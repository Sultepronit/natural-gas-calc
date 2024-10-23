function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n62 = 0, F = function F() {}; return { s: F, n: function n() { return _n62 >= r.length ? { done: !0 } : { done: !1, value: r[_n62++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2022 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */
!function webpackUniversalModuleDefinition(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], e) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = e() : t["pdfjs-dist/build/pdf"] = t.pdfjsLib = e();
}(this, function () {
  return function () {
    "use strict";

    var __webpack_modules__ = [, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.UNSUPPORTED_FEATURES = e.TextRenderingMode = e.StreamType = e.RenderingIntentFlag = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FontType = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.AnnotationType = e.AnnotationStateModelType = e.AnnotationReviewState = e.AnnotationReplyType = e.AnnotationMode = e.AnnotationMarkedState = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0;
        e.arrayByteLength = arrayByteLength;
        e.arraysToBytes = function arraysToBytes(t) {
          var e = t.length;
          if (1 === e && t[0] instanceof Uint8Array) return t[0];
          var s = 0;
          for (var _n = 0; _n < e; _n++) s += arrayByteLength(t[_n]);
          var n = 0;
          var r = new Uint8Array(s);
          for (var _s = 0; _s < e; _s++) {
            var _e = t[_s];
            _e instanceof Uint8Array || (_e = "string" == typeof _e ? stringToBytes(_e) : new Uint8Array(_e));
            var _a = _e.byteLength;
            r.set(_e, n);
            n += _a;
          }
          return r;
        };
        e.assert = function assert(t, e) {
          t || unreachable(e);
        };
        e.bytesToString = function bytesToString(t) {
          "object" == typeof t && null !== t && void 0 !== t.length || unreachable("Invalid argument for bytesToString");
          var e = t.length,
            s = 8192;
          if (e < s) return String.fromCharCode.apply(null, t);
          var n = [];
          for (var _r = 0; _r < e; _r += s) {
            var _a2 = Math.min(_r + s, e),
              _i = t.subarray(_r, _a2);
            n.push(String.fromCharCode.apply(null, _i));
          }
          return n.join("");
        };
        e.createPromiseCapability = function createPromiseCapability() {
          var t = Object.create(null);
          var e = !1;
          Object.defineProperty(t, "settled", {
            get: function get() {
              return e;
            }
          });
          t.promise = new Promise(function (s, n) {
            t.resolve = function (t) {
              e = !0;
              s(t);
            };
            t.reject = function (t) {
              e = !0;
              n(t);
            };
          });
          return t;
        };
        e.createValidAbsoluteUrl = function createValidAbsoluteUrl(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          if (!t) return null;
          try {
            if (s && "string" == typeof t) {
              if (s.addDefaultProtocol && t.startsWith("www.")) {
                var _e2 = t.match(/\./g);
                _e2 && _e2.length >= 2 && (t = "http://".concat(t));
              }
              if (s.tryConvertEncoding) try {
                t = stringToUTF8String(t);
              } catch (t) {}
            }
            var _n2 = e ? new URL(t, e) : new URL(t);
            if (function _isValidProtocol(t) {
              if (!t) return !1;
              switch (t.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "mailto:":
                case "tel:":
                  return !0;
                default:
                  return !1;
              }
            }(_n2)) return _n2;
          } catch (t) {}
          return null;
        };
        e.escapeString = function escapeString(t) {
          return t.replace(/([()\\\n\r])/g, function (t) {
            return "\n" === t ? "\\n" : "\r" === t ? "\\r" : "\\".concat(t);
          });
        };
        e.getModificationDate = function getModificationDate() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
          return [t.getUTCFullYear().toString(), (t.getUTCMonth() + 1).toString().padStart(2, "0"), t.getUTCDate().toString().padStart(2, "0"), t.getUTCHours().toString().padStart(2, "0"), t.getUTCMinutes().toString().padStart(2, "0"), t.getUTCSeconds().toString().padStart(2, "0")].join("");
        };
        e.getVerbosityLevel = function getVerbosityLevel() {
          return r;
        };
        e.info = function info(t) {
          r >= n.INFOS && console.log("Info: ".concat(t));
        };
        e.isArrayBuffer = function isArrayBuffer(t) {
          return "object" == typeof t && null !== t && void 0 !== t.byteLength;
        };
        e.isArrayEqual = function isArrayEqual(t, e) {
          if (t.length !== e.length) return !1;
          for (var _s2 = 0, _n3 = t.length; _s2 < _n3; _s2++) if (t[_s2] !== e[_s2]) return !1;
          return !0;
        };
        e.isAscii = function isAscii(t) {
          return /^[\x00-\x7F]*$/.test(t);
        };
        e.objectFromMap = function objectFromMap(t) {
          var e = Object.create(null);
          var _iterator = _createForOfIteratorHelper(t),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                _s3 = _step$value[0],
                _n4 = _step$value[1];
              e[_s3] = _n4;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return e;
        };
        e.objectSize = function objectSize(t) {
          return Object.keys(t).length;
        };
        e.setVerbosityLevel = function setVerbosityLevel(t) {
          Number.isInteger(t) && (r = t);
        };
        e.shadow = shadow;
        e.string32 = function string32(t) {
          return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t);
        };
        e.stringToBytes = stringToBytes;
        e.stringToPDFString = function stringToPDFString(t) {
          if (t[0] >= "ï") {
            var _e3;
            "þ" === t[0] && "ÿ" === t[1] ? _e3 = "utf-16be" : "ÿ" === t[0] && "þ" === t[1] ? _e3 = "utf-16le" : "ï" === t[0] && "»" === t[1] && "¿" === t[2] && (_e3 = "utf-8");
            if (_e3) try {
              var _s4 = new TextDecoder(_e3, {
                  fatal: !0
                }),
                _n5 = stringToBytes(t);
              return _s4.decode(_n5);
            } catch (t) {
              warn("stringToPDFString: \"".concat(t, "\"."));
            }
          }
          var e = [];
          for (var _s5 = 0, _n6 = t.length; _s5 < _n6; _s5++) {
            var _n7 = o[t.charCodeAt(_s5)];
            e.push(_n7 ? String.fromCharCode(_n7) : t.charAt(_s5));
          }
          return e.join("");
        };
        e.stringToUTF16BEString = function stringToUTF16BEString(t) {
          var e = ["þÿ"];
          for (var _s6 = 0, _n8 = t.length; _s6 < _n8; _s6++) {
            var _n9 = t.charCodeAt(_s6);
            e.push(String.fromCharCode(_n9 >> 8 & 255), String.fromCharCode(255 & _n9));
          }
          return e.join("");
        };
        e.stringToUTF8String = stringToUTF8String;
        e.unreachable = unreachable;
        e.utf8StringToString = function utf8StringToString(t) {
          return unescape(encodeURIComponent(t));
        };
        e.warn = warn;
        s(2);
        e.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
        e.FONT_IDENTITY_MATRIX = [.001, 0, 0, .001, 0, 0];
        e.RenderingIntentFlag = {
          ANY: 1,
          DISPLAY: 2,
          PRINT: 4,
          ANNOTATIONS_FORMS: 16,
          ANNOTATIONS_STORAGE: 32,
          ANNOTATIONS_DISABLE: 64,
          OPLIST: 256
        };
        e.AnnotationMode = {
          DISABLE: 0,
          ENABLE: 1,
          ENABLE_FORMS: 2,
          ENABLE_STORAGE: 3
        };
        e.PermissionFlag = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        };
        e.TextRenderingMode = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        };
        e.ImageKind = {
          GRAYSCALE_1BPP: 1,
          RGB_24BPP: 2,
          RGBA_32BPP: 3
        };
        e.AnnotationType = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        };
        e.AnnotationStateModelType = {
          MARKED: "Marked",
          REVIEW: "Review"
        };
        e.AnnotationMarkedState = {
          MARKED: "Marked",
          UNMARKED: "Unmarked"
        };
        e.AnnotationReviewState = {
          ACCEPTED: "Accepted",
          REJECTED: "Rejected",
          CANCELLED: "Cancelled",
          COMPLETED: "Completed",
          NONE: "None"
        };
        e.AnnotationReplyType = {
          GROUP: "Group",
          REPLY: "R"
        };
        e.AnnotationFlag = {
          INVISIBLE: 1,
          HIDDEN: 2,
          PRINT: 4,
          NOZOOM: 8,
          NOROTATE: 16,
          NOVIEW: 32,
          READONLY: 64,
          LOCKED: 128,
          TOGGLENOVIEW: 256,
          LOCKEDCONTENTS: 512
        };
        e.AnnotationFieldFlag = {
          READONLY: 1,
          REQUIRED: 2,
          NOEXPORT: 4,
          MULTILINE: 4096,
          PASSWORD: 8192,
          NOTOGGLETOOFF: 16384,
          RADIO: 32768,
          PUSHBUTTON: 65536,
          COMBO: 131072,
          EDIT: 262144,
          SORT: 524288,
          FILESELECT: 1048576,
          MULTISELECT: 2097152,
          DONOTSPELLCHECK: 4194304,
          DONOTSCROLL: 8388608,
          COMB: 16777216,
          RICHTEXT: 33554432,
          RADIOSINUNISON: 33554432,
          COMMITONSELCHANGE: 67108864
        };
        e.AnnotationBorderStyleType = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5
        };
        e.AnnotationActionEventType = {
          E: "Mouse Enter",
          X: "Mouse Exit",
          D: "Mouse Down",
          U: "Mouse Up",
          Fo: "Focus",
          Bl: "Blur",
          PO: "PageOpen",
          PC: "PageClose",
          PV: "PageVisible",
          PI: "PageInvisible",
          K: "Keystroke",
          F: "Format",
          V: "Validate",
          C: "Calculate"
        };
        e.DocumentActionEventType = {
          WC: "WillClose",
          WS: "WillSave",
          DS: "DidSave",
          WP: "WillPrint",
          DP: "DidPrint"
        };
        e.PageActionEventType = {
          O: "PageOpen",
          C: "PageClose"
        };
        e.StreamType = {
          UNKNOWN: "UNKNOWN",
          FLATE: "FLATE",
          LZW: "LZW",
          DCT: "DCT",
          JPX: "JPX",
          JBIG: "JBIG",
          A85: "A85",
          AHX: "AHX",
          CCF: "CCF",
          RLX: "RLX"
        };
        e.FontType = {
          UNKNOWN: "UNKNOWN",
          TYPE1: "TYPE1",
          TYPE1STANDARD: "TYPE1STANDARD",
          TYPE1C: "TYPE1C",
          CIDFONTTYPE0: "CIDFONTTYPE0",
          CIDFONTTYPE0C: "CIDFONTTYPE0C",
          TRUETYPE: "TRUETYPE",
          CIDFONTTYPE2: "CIDFONTTYPE2",
          TYPE3: "TYPE3",
          OPENTYPE: "OPENTYPE",
          TYPE0: "TYPE0",
          MMTYPE1: "MMTYPE1"
        };
        var n = {
          ERRORS: 0,
          WARNINGS: 1,
          INFOS: 5
        };
        e.VerbosityLevel = n;
        e.CMapCompressionType = {
          NONE: 0,
          BINARY: 1,
          STREAM: 2
        };
        e.OPS = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotations: 78,
          endAnnotations: 79,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintJpegXObject: 82,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        };
        e.UNSUPPORTED_FEATURES = {
          unknown: "unknown",
          forms: "forms",
          javaScript: "javaScript",
          signatures: "signatures",
          smask: "smask",
          shadingPattern: "shadingPattern",
          font: "font",
          errorTilingPattern: "errorTilingPattern",
          errorExtGState: "errorExtGState",
          errorXObject: "errorXObject",
          errorFontLoadType3: "errorFontLoadType3",
          errorFontState: "errorFontState",
          errorFontMissing: "errorFontMissing",
          errorFontTranslate: "errorFontTranslate",
          errorColorSpace: "errorColorSpace",
          errorOperatorList: "errorOperatorList",
          errorFontToUnicode: "errorFontToUnicode",
          errorFontLoadNative: "errorFontLoadNative",
          errorFontBuildPath: "errorFontBuildPath",
          errorFontGetPath: "errorFontGetPath",
          errorMarkedContent: "errorMarkedContent",
          errorContentSubStream: "errorContentSubStream"
        };
        e.PasswordResponses = {
          NEED_PASSWORD: 1,
          INCORRECT_PASSWORD: 2
        };
        var r = n.WARNINGS;
        function warn(t) {
          r >= n.WARNINGS && console.log("Warning: ".concat(t));
        }
        function unreachable(t) {
          throw new Error(t);
        }
        function shadow(t, e, s) {
          Object.defineProperty(t, e, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !1
          });
          return s;
        }
        var a = function BaseExceptionClosure() {
          function BaseException(t, e) {
            this.constructor === BaseException && unreachable("Cannot initialize BaseException.");
            this.message = t;
            this.name = e;
          }
          BaseException.prototype = new Error();
          BaseException.constructor = BaseException;
          return BaseException;
        }();
        e.BaseException = a;
        e.PasswordException = /*#__PURE__*/function (_a3) {
          function PasswordException(t, e) {
            var _this;
            _classCallCheck(this, PasswordException);
            _this = _callSuper(this, PasswordException, [t, "PasswordException"]);
            _this.code = e;
            return _this;
          }
          _inherits(PasswordException, _a3);
          return _createClass(PasswordException);
        }(a);
        e.UnknownErrorException = /*#__PURE__*/function (_a4) {
          function UnknownErrorException(t, e) {
            var _this2;
            _classCallCheck(this, UnknownErrorException);
            _this2 = _callSuper(this, UnknownErrorException, [t, "UnknownErrorException"]);
            _this2.details = e;
            return _this2;
          }
          _inherits(UnknownErrorException, _a4);
          return _createClass(UnknownErrorException);
        }(a);
        e.InvalidPDFException = /*#__PURE__*/function (_a5) {
          function InvalidPDFException(t) {
            _classCallCheck(this, InvalidPDFException);
            return _callSuper(this, InvalidPDFException, [t, "InvalidPDFException"]);
          }
          _inherits(InvalidPDFException, _a5);
          return _createClass(InvalidPDFException);
        }(a);
        e.MissingPDFException = /*#__PURE__*/function (_a6) {
          function MissingPDFException(t) {
            _classCallCheck(this, MissingPDFException);
            return _callSuper(this, MissingPDFException, [t, "MissingPDFException"]);
          }
          _inherits(MissingPDFException, _a6);
          return _createClass(MissingPDFException);
        }(a);
        e.UnexpectedResponseException = /*#__PURE__*/function (_a7) {
          function UnexpectedResponseException(t, e) {
            var _this3;
            _classCallCheck(this, UnexpectedResponseException);
            _this3 = _callSuper(this, UnexpectedResponseException, [t, "UnexpectedResponseException"]);
            _this3.status = e;
            return _this3;
          }
          _inherits(UnexpectedResponseException, _a7);
          return _createClass(UnexpectedResponseException);
        }(a);
        e.FormatError = /*#__PURE__*/function (_a8) {
          function FormatError(t) {
            _classCallCheck(this, FormatError);
            return _callSuper(this, FormatError, [t, "FormatError"]);
          }
          _inherits(FormatError, _a8);
          return _createClass(FormatError);
        }(a);
        e.AbortException = /*#__PURE__*/function (_a9) {
          function AbortException(t) {
            _classCallCheck(this, AbortException);
            return _callSuper(this, AbortException, [t, "AbortException"]);
          }
          _inherits(AbortException, _a9);
          return _createClass(AbortException);
        }(a);
        function stringToBytes(t) {
          "string" != typeof t && unreachable("Invalid argument for stringToBytes");
          var e = t.length,
            s = new Uint8Array(e);
          for (var _n10 = 0; _n10 < e; ++_n10) s[_n10] = 255 & t.charCodeAt(_n10);
          return s;
        }
        function arrayByteLength(t) {
          if (void 0 !== t.length) return t.length;
          if (void 0 !== t.byteLength) return t.byteLength;
          unreachable("Invalid argument for arrayByteLength");
        }
        e.FeatureTest = /*#__PURE__*/function () {
          function FeatureTest() {
            _classCallCheck(this, FeatureTest);
          }
          return _createClass(FeatureTest, null, [{
            key: "isLittleEndian",
            get: function get() {
              return shadow(this, "isLittleEndian", function isLittleEndian() {
                var t = new Uint8Array(4);
                t[0] = 1;
                return 1 === new Uint32Array(t.buffer, 0, 1)[0];
              }());
            }
          }, {
            key: "isEvalSupported",
            get: function get() {
              return shadow(this, "isEvalSupported", function isEvalSupported() {
                try {
                  new Function("");
                  return !0;
                } catch (t) {
                  return !1;
                }
              }());
            }
          }, {
            key: "isOffscreenCanvasSupported",
            get: function get() {
              return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
            }
          }]);
        }();
        var i = _toConsumableArray(Array(256).keys()).map(function (t) {
          return t.toString(16).padStart(2, "0");
        });
        var Util = /*#__PURE__*/function () {
          function Util() {
            _classCallCheck(this, Util);
          }
          return _createClass(Util, null, [{
            key: "makeHexColor",
            value: function makeHexColor(t, e, s) {
              return "#".concat(i[t]).concat(i[e]).concat(i[s]);
            }
          }, {
            key: "scaleMinMax",
            value: function scaleMinMax(t, e) {
              var s;
              if (t[0]) {
                if (t[0] < 0) {
                  s = e[0];
                  e[0] = e[1];
                  e[1] = s;
                }
                e[0] *= t[0];
                e[1] *= t[0];
                if (t[3] < 0) {
                  s = e[2];
                  e[2] = e[3];
                  e[3] = s;
                }
                e[2] *= t[3];
                e[3] *= t[3];
              } else {
                s = e[0];
                e[0] = e[2];
                e[2] = s;
                s = e[1];
                e[1] = e[3];
                e[3] = s;
                if (t[1] < 0) {
                  s = e[2];
                  e[2] = e[3];
                  e[3] = s;
                }
                e[2] *= t[1];
                e[3] *= t[1];
                if (t[2] < 0) {
                  s = e[0];
                  e[0] = e[1];
                  e[1] = s;
                }
                e[0] *= t[2];
                e[1] *= t[2];
              }
              e[0] += t[4];
              e[1] += t[4];
              e[2] += t[5];
              e[3] += t[5];
            }
          }, {
            key: "transform",
            value: function transform(t, e) {
              return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
            }
          }, {
            key: "applyTransform",
            value: function applyTransform(t, e) {
              return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]];
            }
          }, {
            key: "applyInverseTransform",
            value: function applyInverseTransform(t, e) {
              var s = e[0] * e[3] - e[1] * e[2];
              return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s];
            }
          }, {
            key: "getAxialAlignedBoundingBox",
            value: function getAxialAlignedBoundingBox(t, e) {
              var s = Util.applyTransform(t, e),
                n = Util.applyTransform(t.slice(2, 4), e),
                r = Util.applyTransform([t[0], t[3]], e),
                a = Util.applyTransform([t[2], t[1]], e);
              return [Math.min(s[0], n[0], r[0], a[0]), Math.min(s[1], n[1], r[1], a[1]), Math.max(s[0], n[0], r[0], a[0]), Math.max(s[1], n[1], r[1], a[1])];
            }
          }, {
            key: "inverseTransform",
            value: function inverseTransform(t) {
              var e = t[0] * t[3] - t[1] * t[2];
              return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
            }
          }, {
            key: "apply3dTransform",
            value: function apply3dTransform(t, e) {
              return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2], t[3] * e[0] + t[4] * e[1] + t[5] * e[2], t[6] * e[0] + t[7] * e[1] + t[8] * e[2]];
            }
          }, {
            key: "singularValueDecompose2dScale",
            value: function singularValueDecompose2dScale(t) {
              var e = [t[0], t[2], t[1], t[3]],
                s = t[0] * e[0] + t[1] * e[2],
                n = t[0] * e[1] + t[1] * e[3],
                r = t[2] * e[0] + t[3] * e[2],
                a = t[2] * e[1] + t[3] * e[3],
                i = (s + a) / 2,
                o = Math.sqrt(Math.pow(s + a, 2) - 4 * (s * a - r * n)) / 2,
                l = i + o || 1,
                c = i - o || 1;
              return [Math.sqrt(l), Math.sqrt(c)];
            }
          }, {
            key: "normalizeRect",
            value: function normalizeRect(t) {
              var e = t.slice(0);
              if (t[0] > t[2]) {
                e[0] = t[2];
                e[2] = t[0];
              }
              if (t[1] > t[3]) {
                e[1] = t[3];
                e[3] = t[1];
              }
              return e;
            }
          }, {
            key: "intersect",
            value: function intersect(t, e) {
              var s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                n = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
              if (s > n) return null;
              var r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
              return r > a ? null : [s, r, n, a];
            }
          }, {
            key: "bezierBoundingBox",
            value: function bezierBoundingBox(t, e, s, n, r, a, i, o) {
              var l = [],
                c = [[], []];
              var h, d, u, p, f, g, m, _;
              for (var _c = 0; _c < 2; ++_c) {
                if (0 === _c) {
                  d = 6 * t - 12 * s + 6 * r;
                  h = -3 * t + 9 * s - 9 * r + 3 * i;
                  u = 3 * s - 3 * t;
                } else {
                  d = 6 * e - 12 * n + 6 * a;
                  h = -3 * e + 9 * n - 9 * a + 3 * o;
                  u = 3 * n - 3 * e;
                }
                if (Math.abs(h) < 1e-12) {
                  if (Math.abs(d) < 1e-12) continue;
                  p = -u / d;
                  0 < p && p < 1 && l.push(p);
                } else {
                  m = d * d - 4 * u * h;
                  _ = Math.sqrt(m);
                  if (!(m < 0)) {
                    f = (-d + _) / (2 * h);
                    0 < f && f < 1 && l.push(f);
                    g = (-d - _) / (2 * h);
                    0 < g && g < 1 && l.push(g);
                  }
                }
              }
              var A,
                b = l.length;
              var y = b;
              for (; b--;) {
                p = l[b];
                A = 1 - p;
                c[0][b] = A * A * A * t + 3 * A * A * p * s + 3 * A * p * p * r + p * p * p * i;
                c[1][b] = A * A * A * e + 3 * A * A * p * n + 3 * A * p * p * a + p * p * p * o;
              }
              c[0][y] = t;
              c[1][y] = e;
              c[0][y + 1] = i;
              c[1][y + 1] = o;
              c[0].length = c[1].length = y + 2;
              return [Math.min.apply(Math, _toConsumableArray(c[0])), Math.min.apply(Math, _toConsumableArray(c[1])), Math.max.apply(Math, _toConsumableArray(c[0])), Math.max.apply(Math, _toConsumableArray(c[1]))];
            }
          }]);
        }();
        e.Util = Util;
        var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
        function stringToUTF8String(t) {
          return decodeURIComponent(escape(t));
        }
      }, function (t, e, s) {
        s(3);
      }, function (t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.isNodeJS = void 0;
        var s = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type);
        e.isNodeJS = s;
      }, function (__unused_webpack_module, exports, __w_pdfjs_require__) {
        Object.defineProperty(exports, "__esModule", {
          value: !0
        });
        exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
        exports.getDocument = getDocument;
        exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
        exports.version = void 0;
        var _util = __w_pdfjs_require__(1),
          _display_utils = __w_pdfjs_require__(5),
          _font_loader = __w_pdfjs_require__(7),
          _annotation_storage = __w_pdfjs_require__(8),
          _canvas = __w_pdfjs_require__(10),
          _worker_options = __w_pdfjs_require__(13),
          _is_node = __w_pdfjs_require__(3),
          _message_handler = __w_pdfjs_require__(14),
          _metadata = __w_pdfjs_require__(15),
          _optional_content_config = __w_pdfjs_require__(16),
          _transport_stream = __w_pdfjs_require__(17),
          _xfa_text = __w_pdfjs_require__(18);
        var DEFAULT_RANGE_CHUNK_SIZE = 65536,
          RENDERING_CANCELLED_TIMEOUT = 100;
        var DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
        exports.DefaultCanvasFactory = DefaultCanvasFactory;
        var DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
        var DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory,
          createPDFNetworkStream;
        exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
        if (_is_node.isNodeJS) {
          var _w_pdfjs_require__ = __w_pdfjs_require__(19),
            t = _w_pdfjs_require__.NodeCanvasFactory,
            e = _w_pdfjs_require__.NodeCMapReaderFactory,
            s = _w_pdfjs_require__.NodeStandardFontDataFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory = t;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = e;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = s;
        }
        function setPDFNetworkStreamFactory(t) {
          createPDFNetworkStream = t;
        }
        function getDocument(t) {
          var e = new PDFDocumentLoadingTask();
          var s;
          if ("string" == typeof t || t instanceof URL) s = {
            url: t
          };else if ((0, _util.isArrayBuffer)(t)) s = {
            data: t
          };else if (t instanceof PDFDataRangeTransport) s = {
            range: t
          };else {
            if ("object" != typeof t) throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
            if (!t.url && !t.data && !t.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
            s = t;
          }
          var n = Object.create(null);
          var r = null,
            a = null;
          for (var _t in s) {
            var _e4 = s[_t];
            switch (_t) {
              case "url":
                if ("undefined" != typeof window) try {
                  n[_t] = new URL(_e4, window.location).href;
                  continue;
                } catch (t) {
                  (0, _util.warn)("Cannot create valid URL: \"".concat(t, "\"."));
                } else if ("string" == typeof _e4 || _e4 instanceof URL) {
                  n[_t] = _e4.toString();
                  continue;
                }
                throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
              case "range":
                r = _e4;
                continue;
              case "worker":
                a = _e4;
                continue;
              case "data":
                if (_is_node.isNodeJS && "undefined" != typeof Buffer && _e4 instanceof Buffer) n[_t] = new Uint8Array(_e4);else {
                  if (_e4 instanceof Uint8Array) break;
                  if ("string" == typeof _e4) n[_t] = (0, _util.stringToBytes)(_e4);else if ("object" != typeof _e4 || null === _e4 || isNaN(_e4.length)) {
                    if (!(0, _util.isArrayBuffer)(_e4)) throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                    n[_t] = new Uint8Array(_e4);
                  } else n[_t] = new Uint8Array(_e4);
                }
                continue;
            }
            n[_t] = _e4;
          }
          n.CMapReaderFactory = n.CMapReaderFactory || DefaultCMapReaderFactory;
          n.StandardFontDataFactory = n.StandardFontDataFactory || DefaultStandardFontDataFactory;
          n.ignoreErrors = !0 !== n.stopAtErrors;
          n.fontExtraProperties = !0 === n.fontExtraProperties;
          n.pdfBug = !0 === n.pdfBug;
          n.enableXfa = !0 === n.enableXfa;
          (!Number.isInteger(n.rangeChunkSize) || n.rangeChunkSize < 1) && (n.rangeChunkSize = DEFAULT_RANGE_CHUNK_SIZE);
          ("string" != typeof n.docBaseUrl || (0, _display_utils.isDataScheme)(n.docBaseUrl)) && (n.docBaseUrl = null);
          (!Number.isInteger(n.maxImageSize) || n.maxImageSize < -1) && (n.maxImageSize = -1);
          "string" != typeof n.cMapUrl && (n.cMapUrl = null);
          "string" != typeof n.standardFontDataUrl && (n.standardFontDataUrl = null);
          "boolean" != typeof n.useWorkerFetch && (n.useWorkerFetch = n.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && n.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory);
          "boolean" != typeof n.isEvalSupported && (n.isEvalSupported = !0);
          "boolean" != typeof n.disableFontFace && (n.disableFontFace = _is_node.isNodeJS);
          "boolean" != typeof n.useSystemFonts && (n.useSystemFonts = !_is_node.isNodeJS && !n.disableFontFace);
          "object" == typeof n.ownerDocument && null !== n.ownerDocument || (n.ownerDocument = globalThis.document);
          "boolean" != typeof n.disableRange && (n.disableRange = !1);
          "boolean" != typeof n.disableStream && (n.disableStream = !1);
          "boolean" != typeof n.disableAutoFetch && (n.disableAutoFetch = !1);
          (0, _util.setVerbosityLevel)(n.verbosity);
          if (!a) {
            var _t2 = {
              verbosity: n.verbosity,
              port: _worker_options.GlobalWorkerOptions.workerPort
            };
            a = _t2.port ? PDFWorker.fromPort(_t2) : new PDFWorker(_t2);
            e._worker = a;
          }
          var i = e.docId;
          a.promise.then(function () {
            if (e.destroyed) throw new Error("Loading aborted");
            var t = _fetchDocument(a, n, r, i),
              s = new Promise(function (t) {
                var e;
                r ? e = new _transport_stream.PDFDataTransportStream({
                  length: n.length,
                  initialData: n.initialData,
                  progressiveDone: n.progressiveDone,
                  contentDispositionFilename: n.contentDispositionFilename,
                  disableRange: n.disableRange,
                  disableStream: n.disableStream
                }, r) : n.data || (e = createPDFNetworkStream({
                  url: n.url,
                  length: n.length,
                  httpHeaders: n.httpHeaders,
                  withCredentials: n.withCredentials,
                  rangeChunkSize: n.rangeChunkSize,
                  disableRange: n.disableRange,
                  disableStream: n.disableStream
                }));
                t(e);
              });
            return Promise.all([t, s]).then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                t = _ref2[0],
                s = _ref2[1];
              if (e.destroyed) throw new Error("Loading aborted");
              var r = new _message_handler.MessageHandler(i, t, a.port),
                o = new WorkerTransport(r, e, s, n);
              e._transport = o;
              r.send("Ready", null);
            });
          }).catch(e._capability.reject);
          return e;
        }
        function _fetchDocument(_x, _x2, _x3, _x4) {
          return _fetchDocument2.apply(this, arguments);
        }
        function _fetchDocument2() {
          _fetchDocument2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(t, e, s, n) {
            var r;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (!t.destroyed) {
                    _context7.next = 2;
                    break;
                  }
                  throw new Error("Worker was destroyed");
                case 2:
                  if (s) {
                    e.length = s.length;
                    e.initialData = s.initialData;
                    e.progressiveDone = s.progressiveDone;
                    e.contentDispositionFilename = s.contentDispositionFilename;
                  }
                  _context7.next = 5;
                  return t.messageHandler.sendWithPromise("GetDocRequest", {
                    docId: n,
                    apiVersion: "2.14.305",
                    source: {
                      data: e.data,
                      url: e.url,
                      password: e.password,
                      disableAutoFetch: e.disableAutoFetch,
                      rangeChunkSize: e.rangeChunkSize,
                      length: e.length
                    },
                    maxImageSize: e.maxImageSize,
                    disableFontFace: e.disableFontFace,
                    docBaseUrl: e.docBaseUrl,
                    ignoreErrors: e.ignoreErrors,
                    isEvalSupported: e.isEvalSupported,
                    fontExtraProperties: e.fontExtraProperties,
                    enableXfa: e.enableXfa,
                    useSystemFonts: e.useSystemFonts,
                    cMapUrl: e.useWorkerFetch ? e.cMapUrl : null,
                    standardFontDataUrl: e.useWorkerFetch ? e.standardFontDataUrl : null
                  });
                case 5:
                  r = _context7.sent;
                  if (!t.destroyed) {
                    _context7.next = 8;
                    break;
                  }
                  throw new Error("Worker was destroyed");
                case 8:
                  return _context7.abrupt("return", r);
                case 9:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          return _fetchDocument2.apply(this, arguments);
        }
        var PDFDocumentLoadingTask = /*#__PURE__*/function () {
          function PDFDocumentLoadingTask() {
            var _PDFDocumentLoadingTa, _PDFDocumentLoadingTa2;
            _classCallCheck(this, PDFDocumentLoadingTask);
            this._capability = (0, _util.createPromiseCapability)();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + (_t3._ = (_PDFDocumentLoadingTa = _t3._, _PDFDocumentLoadingTa2 = _PDFDocumentLoadingTa++, _PDFDocumentLoadingTa), _PDFDocumentLoadingTa2);
            this.destroyed = !1;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }
          return _createClass(PDFDocumentLoadingTask, [{
            key: "promise",
            get: function get() {
              return this._capability.promise;
            }
          }, {
            key: "destroy",
            value: function () {
              var _destroy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this$_transport;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      this.destroyed = !0;
                      _context.next = 3;
                      return (_this$_transport = this._transport) === null || _this$_transport === void 0 ? void 0 : _this$_transport.destroy();
                    case 3:
                      this._transport = null;
                      if (this._worker) {
                        this._worker.destroy();
                        this._worker = null;
                      }
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
              function destroy() {
                return _destroy.apply(this, arguments);
              }
              return destroy;
            }()
          }]);
        }();
        var _t3 = {
          _: 0
        };
        exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
        var PDFDataRangeTransport = /*#__PURE__*/function () {
          function PDFDataRangeTransport(t, e) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            _classCallCheck(this, PDFDataRangeTransport);
            this.length = t;
            this.initialData = e;
            this.progressiveDone = s;
            this.contentDispositionFilename = n;
            this._rangeListeners = [];
            this._progressListeners = [];
            this._progressiveReadListeners = [];
            this._progressiveDoneListeners = [];
            this._readyCapability = (0, _util.createPromiseCapability)();
          }
          return _createClass(PDFDataRangeTransport, [{
            key: "addRangeListener",
            value: function addRangeListener(t) {
              this._rangeListeners.push(t);
            }
          }, {
            key: "addProgressListener",
            value: function addProgressListener(t) {
              this._progressListeners.push(t);
            }
          }, {
            key: "addProgressiveReadListener",
            value: function addProgressiveReadListener(t) {
              this._progressiveReadListeners.push(t);
            }
          }, {
            key: "addProgressiveDoneListener",
            value: function addProgressiveDoneListener(t) {
              this._progressiveDoneListeners.push(t);
            }
          }, {
            key: "onDataRange",
            value: function onDataRange(t, e) {
              var _iterator2 = _createForOfIteratorHelper(this._rangeListeners),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _s7 = _step2.value;
                  _s7(t, e);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }, {
            key: "onDataProgress",
            value: function onDataProgress(t, e) {
              var _this4 = this;
              this._readyCapability.promise.then(function () {
                var _iterator3 = _createForOfIteratorHelper(_this4._progressListeners),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _s8 = _step3.value;
                    _s8(t, e);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              });
            }
          }, {
            key: "onDataProgressiveRead",
            value: function onDataProgressiveRead(t) {
              var _this5 = this;
              this._readyCapability.promise.then(function () {
                var _iterator4 = _createForOfIteratorHelper(_this5._progressiveReadListeners),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _e5 = _step4.value;
                    _e5(t);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              });
            }
          }, {
            key: "onDataProgressiveDone",
            value: function onDataProgressiveDone() {
              var _this6 = this;
              this._readyCapability.promise.then(function () {
                var _iterator5 = _createForOfIteratorHelper(_this6._progressiveDoneListeners),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _t4 = _step5.value;
                    _t4();
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              });
            }
          }, {
            key: "transportReady",
            value: function transportReady() {
              this._readyCapability.resolve();
            }
          }, {
            key: "requestDataRange",
            value: function requestDataRange(t, e) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
          }, {
            key: "abort",
            value: function abort() {}
          }]);
        }();
        exports.PDFDataRangeTransport = PDFDataRangeTransport;
        var PDFDocumentProxy = /*#__PURE__*/function () {
          function PDFDocumentProxy(t, e) {
            var _this7 = this;
            _classCallCheck(this, PDFDocumentProxy);
            this._pdfInfo = t;
            this._transport = e;
            Object.defineProperty(this, "fingerprint", {
              get: function get() {
                (0, _display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead.");
                return this.fingerprints[0];
              }
            });
            Object.defineProperty(this, "getStats", {
              value: function () {
                var _value = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        (0, _display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead.");
                        return _context2.abrupt("return", _this7.stats || {
                          streamTypes: {},
                          fontTypes: {}
                        });
                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                function value() {
                  return _value.apply(this, arguments);
                }
                return value;
              }()
            });
          }
          return _createClass(PDFDocumentProxy, [{
            key: "annotationStorage",
            get: function get() {
              return this._transport.annotationStorage;
            }
          }, {
            key: "numPages",
            get: function get() {
              return this._pdfInfo.numPages;
            }
          }, {
            key: "fingerprints",
            get: function get() {
              return this._pdfInfo.fingerprints;
            }
          }, {
            key: "stats",
            get: function get() {
              return this._transport.stats;
            }
          }, {
            key: "isPureXfa",
            get: function get() {
              return !!this._transport._htmlForXfa;
            }
          }, {
            key: "allXfaHtml",
            get: function get() {
              return this._transport._htmlForXfa;
            }
          }, {
            key: "getPage",
            value: function getPage(t) {
              return this._transport.getPage(t);
            }
          }, {
            key: "getPageIndex",
            value: function getPageIndex(t) {
              return this._transport.getPageIndex(t);
            }
          }, {
            key: "getDestinations",
            value: function getDestinations() {
              return this._transport.getDestinations();
            }
          }, {
            key: "getDestination",
            value: function getDestination(t) {
              return this._transport.getDestination(t);
            }
          }, {
            key: "getPageLabels",
            value: function getPageLabels() {
              return this._transport.getPageLabels();
            }
          }, {
            key: "getPageLayout",
            value: function getPageLayout() {
              return this._transport.getPageLayout();
            }
          }, {
            key: "getPageMode",
            value: function getPageMode() {
              return this._transport.getPageMode();
            }
          }, {
            key: "getViewerPreferences",
            value: function getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
          }, {
            key: "getOpenAction",
            value: function getOpenAction() {
              return this._transport.getOpenAction();
            }
          }, {
            key: "getAttachments",
            value: function getAttachments() {
              return this._transport.getAttachments();
            }
          }, {
            key: "getJavaScript",
            value: function getJavaScript() {
              return this._transport.getJavaScript();
            }
          }, {
            key: "getJSActions",
            value: function getJSActions() {
              return this._transport.getDocJSActions();
            }
          }, {
            key: "getOutline",
            value: function getOutline() {
              return this._transport.getOutline();
            }
          }, {
            key: "getOptionalContentConfig",
            value: function getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
          }, {
            key: "getPermissions",
            value: function getPermissions() {
              return this._transport.getPermissions();
            }
          }, {
            key: "getMetadata",
            value: function getMetadata() {
              return this._transport.getMetadata();
            }
          }, {
            key: "getMarkInfo",
            value: function getMarkInfo() {
              return this._transport.getMarkInfo();
            }
          }, {
            key: "getData",
            value: function getData() {
              return this._transport.getData();
            }
          }, {
            key: "getDownloadInfo",
            value: function getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
          }, {
            key: "cleanup",
            value: function cleanup() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              return this._transport.startCleanup(t || this.isPureXfa);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              return this.loadingTask.destroy();
            }
          }, {
            key: "loadingParams",
            get: function get() {
              return this._transport.loadingParams;
            }
          }, {
            key: "loadingTask",
            get: function get() {
              return this._transport.loadingTask;
            }
          }, {
            key: "saveDocument",
            value: function saveDocument() {
              this._transport.annotationStorage.size <= 0 && (0, _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              return this._transport.saveDocument();
            }
          }, {
            key: "getFieldObjects",
            value: function getFieldObjects() {
              return this._transport.getFieldObjects();
            }
          }, {
            key: "hasJSActions",
            value: function hasJSActions() {
              return this._transport.hasJSActions();
            }
          }, {
            key: "getCalculationOrderIds",
            value: function getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }]);
        }();
        exports.PDFDocumentProxy = PDFDocumentProxy;
        var PDFPageProxy = /*#__PURE__*/function () {
          function PDFPageProxy(t, e, s, n) {
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            _classCallCheck(this, PDFPageProxy);
            this._pageIndex = t;
            this._pageInfo = e;
            this._ownerDocument = n;
            this._transport = s;
            this._stats = r ? new _display_utils.StatTimer() : null;
            this._pdfBug = r;
            this.commonObjs = s.commonObjs;
            this.objs = new PDFObjects();
            this._bitmaps = new Set();
            this.cleanupAfterRender = !1;
            this.pendingCleanup = !1;
            this._intentStates = new Map();
            this._annotationPromises = new Map();
            this.destroyed = !1;
          }
          return _createClass(PDFPageProxy, [{
            key: "pageNumber",
            get: function get() {
              return this._pageIndex + 1;
            }
          }, {
            key: "rotate",
            get: function get() {
              return this._pageInfo.rotate;
            }
          }, {
            key: "ref",
            get: function get() {
              return this._pageInfo.ref;
            }
          }, {
            key: "userUnit",
            get: function get() {
              return this._pageInfo.userUnit;
            }
          }, {
            key: "view",
            get: function get() {
              return this._pageInfo.view;
            }
          }, {
            key: "getViewport",
            value: function getViewport() {
              var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                t = _ref3.scale,
                _ref3$rotation = _ref3.rotation,
                e = _ref3$rotation === void 0 ? this.rotate : _ref3$rotation,
                _ref3$offsetX = _ref3.offsetX,
                s = _ref3$offsetX === void 0 ? 0 : _ref3$offsetX,
                _ref3$offsetY = _ref3.offsetY,
                n = _ref3$offsetY === void 0 ? 0 : _ref3$offsetY,
                _ref3$dontFlip = _ref3.dontFlip,
                r = _ref3$dontFlip === void 0 ? !1 : _ref3$dontFlip;
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: t,
                rotation: e,
                offsetX: s,
                offsetY: n,
                dontFlip: r
              });
            }
          }, {
            key: "getAnnotations",
            value: function getAnnotations() {
              var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref4$intent = _ref4.intent,
                t = _ref4$intent === void 0 ? "display" : _ref4$intent;
              var e = this._transport.getRenderingIntent(t);
              var s = this._annotationPromises.get(e.cacheKey);
              if (!s) {
                s = this._transport.getAnnotations(this._pageIndex, e.renderingIntent);
                this._annotationPromises.set(e.cacheKey, s);
                s = s.then(function (t) {
                  var _iterator6 = _createForOfIteratorHelper(t),
                    _step6;
                  try {
                    var _loop = function _loop() {
                      var e = _step6.value;
                      void 0 !== e.titleObj && Object.defineProperty(e, "title", {
                        get: function get() {
                          (0, _display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead.");
                          return e.titleObj.str;
                        }
                      });
                      void 0 !== e.contentsObj && Object.defineProperty(e, "contents", {
                        get: function get() {
                          (0, _display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead.");
                          return e.contentsObj.str;
                        }
                      });
                    };
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }
                  return t;
                });
              }
              return s;
            }
          }, {
            key: "getJSActions",
            value: function getJSActions() {
              return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
            }
          }, {
            key: "getXfa",
            value: function () {
              var _getXfa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _this$_transport$_htm;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", ((_this$_transport$_htm = this._transport._htmlForXfa) === null || _this$_transport$_htm === void 0 ? void 0 : _this$_transport$_htm.children[this._pageIndex]) || null);
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
              function getXfa() {
                return _getXfa.apply(this, arguments);
              }
              return getXfa;
            }()
          }, {
            key: "render",
            value: function render(_ref5) {
              var _arguments$,
                _arguments$2,
                _this8 = this,
                _u;
              var t = _ref5.canvasContext,
                e = _ref5.viewport,
                _ref5$intent = _ref5.intent,
                s = _ref5$intent === void 0 ? "display" : _ref5$intent,
                _ref5$annotationMode = _ref5.annotationMode,
                n = _ref5$annotationMode === void 0 ? _util.AnnotationMode.ENABLE : _ref5$annotationMode,
                _ref5$transform = _ref5.transform,
                r = _ref5$transform === void 0 ? null : _ref5$transform,
                _ref5$imageLayer = _ref5.imageLayer,
                a = _ref5$imageLayer === void 0 ? null : _ref5$imageLayer,
                _ref5$canvasFactory = _ref5.canvasFactory,
                i = _ref5$canvasFactory === void 0 ? null : _ref5$canvasFactory,
                _ref5$background = _ref5.background,
                o = _ref5$background === void 0 ? null : _ref5$background,
                _ref5$optionalContent = _ref5.optionalContentConfigPromise,
                l = _ref5$optionalContent === void 0 ? null : _ref5$optionalContent,
                _ref5$annotationCanva = _ref5.annotationCanvasMap,
                c = _ref5$annotationCanva === void 0 ? null : _ref5$annotationCanva,
                _ref5$pageColors = _ref5.pageColors,
                h = _ref5$pageColors === void 0 ? null : _ref5$pageColors;
              if (void 0 !== ((_arguments$ = arguments[0]) === null || _arguments$ === void 0 ? void 0 : _arguments$.renderInteractiveForms)) {
                (0, _display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead.");
                !0 === arguments[0].renderInteractiveForms && n === _util.AnnotationMode.ENABLE && (n = _util.AnnotationMode.ENABLE_FORMS);
              }
              if (void 0 !== ((_arguments$2 = arguments[0]) === null || _arguments$2 === void 0 ? void 0 : _arguments$2.includeAnnotationStorage)) {
                (0, _display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead.");
                !0 === arguments[0].includeAnnotationStorage && n === _util.AnnotationMode.ENABLE && (n = _util.AnnotationMode.ENABLE_STORAGE);
              }
              this._stats && this._stats.time("Overall");
              var d = this._transport.getRenderingIntent(s, n);
              this.pendingCleanup = !1;
              l || (l = this._transport.getOptionalContentConfig());
              var u = this._intentStates.get(d.cacheKey);
              if (!u) {
                u = Object.create(null);
                this._intentStates.set(d.cacheKey, u);
              }
              if (u.streamReaderCancelTimeout) {
                clearTimeout(u.streamReaderCancelTimeout);
                u.streamReaderCancelTimeout = null;
              }
              var p = i || new DefaultCanvasFactory({
                  ownerDocument: this._ownerDocument
                }),
                f = !!(d.renderingIntent & _util.RenderingIntentFlag.PRINT);
              if (!u.displayReadyCapability) {
                u.displayReadyCapability = (0, _util.createPromiseCapability)();
                u.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1
                };
                this._stats && this._stats.time("Page Request");
                this._pumpOperatorList(d);
              }
              var complete = function complete(t) {
                  u.renderTasks.delete(g);
                  (_this8.cleanupAfterRender || f) && (_this8.pendingCleanup = !0);
                  _this8._tryCleanup();
                  if (t) {
                    g.capability.reject(t);
                    _this8._abortOperatorList({
                      intentState: u,
                      reason: t instanceof Error ? t : new Error(t)
                    });
                  } else g.capability.resolve();
                  if (_this8._stats) {
                    _this8._stats.timeEnd("Rendering");
                    _this8._stats.timeEnd("Overall");
                  }
                },
                g = new InternalRenderTask({
                  callback: complete,
                  params: {
                    canvasContext: t,
                    viewport: e,
                    transform: r,
                    imageLayer: a,
                    background: o
                  },
                  objs: this.objs,
                  commonObjs: this.commonObjs,
                  annotationCanvasMap: c,
                  operatorList: u.operatorList,
                  pageIndex: this._pageIndex,
                  canvasFactory: p,
                  useRequestAnimationFrame: !f,
                  pdfBug: this._pdfBug,
                  pageColors: h
                });
              ((_u = u).renderTasks || (_u.renderTasks = new Set())).add(g);
              var m = g.task;
              Promise.all([u.displayReadyCapability.promise, l]).then(function (_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2),
                  t = _ref7[0],
                  e = _ref7[1];
                if (_this8.pendingCleanup) complete();else {
                  _this8._stats && _this8._stats.time("Rendering");
                  g.initializeGraphics({
                    transparency: t,
                    optionalContentConfig: e
                  });
                  g.operatorListChanged();
                }
              }).catch(complete);
              return m;
            }
          }, {
            key: "getOperatorList",
            value: function getOperatorList() {
              var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref8$intent = _ref8.intent,
                t = _ref8$intent === void 0 ? "display" : _ref8$intent,
                _ref8$annotationMode = _ref8.annotationMode,
                e = _ref8$annotationMode === void 0 ? _util.AnnotationMode.ENABLE : _ref8$annotationMode;
              var s = this._transport.getRenderingIntent(t, e, !0);
              var n,
                r = this._intentStates.get(s.cacheKey);
              if (!r) {
                r = Object.create(null);
                this._intentStates.set(s.cacheKey, r);
              }
              if (!r.opListReadCapability) {
                var _r2;
                n = Object.create(null);
                n.operatorListChanged = function operatorListChanged() {
                  if (r.operatorList.lastChunk) {
                    r.opListReadCapability.resolve(r.operatorList);
                    r.renderTasks.delete(n);
                  }
                };
                r.opListReadCapability = (0, _util.createPromiseCapability)();
                ((_r2 = r).renderTasks || (_r2.renderTasks = new Set())).add(n);
                r.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1
                };
                this._stats && this._stats.time("Page Request");
                this._pumpOperatorList(s);
              }
              return r.opListReadCapability.promise;
            }
          }, {
            key: "streamTextContent",
            value: function streamTextContent() {
              var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref9$disableCombineT = _ref9.disableCombineTextItems,
                t = _ref9$disableCombineT === void 0 ? !1 : _ref9$disableCombineT,
                _ref9$includeMarkedCo = _ref9.includeMarkedContent,
                e = _ref9$includeMarkedCo === void 0 ? !1 : _ref9$includeMarkedCo;
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                combineTextItems: !0 !== t,
                includeMarkedContent: !0 === e
              }, {
                highWaterMark: 100,
                size: function size(t) {
                  return t.items.length;
                }
              });
            }
          }, {
            key: "getTextContent",
            value: function getTextContent() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              if (this._transport._htmlForXfa) return this.getXfa().then(function (t) {
                return _xfa_text.XfaText.textContent(t);
              });
              var e = this.streamTextContent(t);
              return new Promise(function (t, s) {
                var n = e.getReader(),
                  r = {
                    items: [],
                    styles: Object.create(null)
                  };
                !function pump() {
                  n.read().then(function (_ref10) {
                    var e = _ref10.value,
                      s = _ref10.done;
                    if (s) t(r);else {
                      var _r$items;
                      Object.assign(r.styles, e.styles);
                      (_r$items = r.items).push.apply(_r$items, _toConsumableArray(e.items));
                      pump();
                    }
                  }, s);
                }();
              });
            }
          }, {
            key: "getStructTree",
            value: function getStructTree() {
              return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
            }
          }, {
            key: "_destroy",
            value: function _destroy() {
              this.destroyed = !0;
              var t = [];
              var _iterator7 = _createForOfIteratorHelper(this._intentStates.values()),
                _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _e6 = _step7.value;
                  this._abortOperatorList({
                    intentState: _e6,
                    reason: new Error("Page was destroyed."),
                    force: !0
                  });
                  if (!_e6.opListReadCapability) {
                    var _iterator9 = _createForOfIteratorHelper(_e6.renderTasks),
                      _step9;
                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var _s9 = _step9.value;
                        t.push(_s9.completed);
                        _s9.cancel();
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              this.objs.clear();
              var _iterator8 = _createForOfIteratorHelper(this._bitmaps),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _t5 = _step8.value;
                  _t5.close();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              this._bitmaps.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              this.pendingCleanup = !1;
              return Promise.all(t);
            }
          }, {
            key: "cleanup",
            value: function cleanup() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              this.pendingCleanup = !0;
              return this._tryCleanup(t);
            }
          }, {
            key: "_tryCleanup",
            value: function _tryCleanup() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              if (!this.pendingCleanup) return !1;
              var _iterator10 = _createForOfIteratorHelper(this._intentStates.values()),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _step10$value = _step10.value,
                    _t6 = _step10$value.renderTasks,
                    _e7 = _step10$value.operatorList;
                  if (_t6.size > 0 || !_e7.lastChunk) return !1;
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              this._intentStates.clear();
              this.objs.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              t && this._stats && (this._stats = new _display_utils.StatTimer());
              var _iterator11 = _createForOfIteratorHelper(this._bitmaps),
                _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var _t7 = _step11.value;
                  _t7.close();
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              this._bitmaps.clear();
              this.pendingCleanup = !1;
              return !0;
            }
          }, {
            key: "_startRenderPage",
            value: function _startRenderPage(t, e) {
              var s = this._intentStates.get(e);
              if (s) {
                this._stats && this._stats.timeEnd("Page Request");
                s.displayReadyCapability && s.displayReadyCapability.resolve(t);
              }
            }
          }, {
            key: "_renderPageChunk",
            value: function _renderPageChunk(t, e) {
              for (var _s10 = 0, n = t.length; _s10 < n; _s10++) {
                e.operatorList.fnArray.push(t.fnArray[_s10]);
                e.operatorList.argsArray.push(t.argsArray[_s10]);
              }
              e.operatorList.lastChunk = t.lastChunk;
              var _iterator12 = _createForOfIteratorHelper(e.renderTasks),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _t8 = _step12.value;
                  _t8.operatorListChanged();
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
              t.lastChunk && this._tryCleanup();
            }
          }, {
            key: "_pumpOperatorList",
            value: function _pumpOperatorList(_ref11) {
              var _this9 = this;
              var t = _ref11.renderingIntent,
                e = _ref11.cacheKey;
              var s = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                  pageIndex: this._pageIndex,
                  intent: t,
                  cacheKey: e,
                  annotationStorage: t & _util.RenderingIntentFlag.ANNOTATIONS_STORAGE ? this._transport.annotationStorage.serializable : null
                }).getReader(),
                n = this._intentStates.get(e);
              n.streamReader = s;
              var _pump = function pump() {
                s.read().then(function (_ref12) {
                  var t = _ref12.value,
                    e = _ref12.done;
                  if (e) n.streamReader = null;else if (!_this9._transport.destroyed) {
                    _this9._renderPageChunk(t, n);
                    _pump();
                  }
                }, function (t) {
                  n.streamReader = null;
                  if (!_this9._transport.destroyed) {
                    if (n.operatorList) {
                      n.operatorList.lastChunk = !0;
                      var _iterator13 = _createForOfIteratorHelper(n.renderTasks),
                        _step13;
                      try {
                        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                          var _t9 = _step13.value;
                          _t9.operatorListChanged();
                        }
                      } catch (err) {
                        _iterator13.e(err);
                      } finally {
                        _iterator13.f();
                      }
                      _this9._tryCleanup();
                    }
                    if (n.displayReadyCapability) n.displayReadyCapability.reject(t);else {
                      if (!n.opListReadCapability) throw t;
                      n.opListReadCapability.reject(t);
                    }
                  }
                });
              };
              _pump();
            }
          }, {
            key: "_abortOperatorList",
            value: function _abortOperatorList(_ref13) {
              var _this10 = this;
              var t = _ref13.intentState,
                e = _ref13.reason,
                _ref13$force = _ref13.force,
                s = _ref13$force === void 0 ? !1 : _ref13$force;
              if (t.streamReader) {
                if (!s) {
                  if (t.renderTasks.size > 0) return;
                  if (e instanceof _display_utils.RenderingCancelledException) {
                    t.streamReaderCancelTimeout = setTimeout(function () {
                      _this10._abortOperatorList({
                        intentState: t,
                        reason: e,
                        force: !0
                      });
                      t.streamReaderCancelTimeout = null;
                    }, RENDERING_CANCELLED_TIMEOUT);
                    return;
                  }
                }
                t.streamReader.cancel(new _util.AbortException(e.message)).catch(function () {});
                t.streamReader = null;
                if (!this._transport.destroyed) {
                  var _iterator14 = _createForOfIteratorHelper(this._intentStates),
                    _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _step14$value = _slicedToArray(_step14.value, 2),
                        _e8 = _step14$value[0],
                        _s11 = _step14$value[1];
                      if (_s11 === t) {
                        this._intentStates.delete(_e8);
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  this.cleanup();
                }
              }
            }
          }, {
            key: "stats",
            get: function get() {
              return this._stats;
            }
          }]);
        }();
        exports.PDFPageProxy = PDFPageProxy;
        var LoopbackPort = /*#__PURE__*/function () {
          function LoopbackPort() {
            _classCallCheck(this, LoopbackPort);
            this._listeners = [];
            this._deferred = Promise.resolve();
          }
          return _createClass(LoopbackPort, [{
            key: "postMessage",
            value: function postMessage(t, e) {
              var _this11 = this;
              var s = {
                data: structuredClone(t, e)
              };
              this._deferred.then(function () {
                var _iterator15 = _createForOfIteratorHelper(_this11._listeners),
                  _step15;
                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _t10 = _step15.value;
                    _t10.call(_this11, s);
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              });
            }
          }, {
            key: "addEventListener",
            value: function addEventListener(t, e) {
              this._listeners.push(e);
            }
          }, {
            key: "removeEventListener",
            value: function removeEventListener(t, e) {
              var s = this._listeners.indexOf(e);
              this._listeners.splice(s, 1);
            }
          }, {
            key: "terminate",
            value: function terminate() {
              this._listeners.length = 0;
            }
          }]);
        }();
        exports.LoopbackPort = LoopbackPort;
        var PDFWorkerUtil = {
          isWorkerDisabled: !1,
          fallbackWorkerSrc: null,
          fakeWorkerId: 0
        };
        exports.PDFWorkerUtil = PDFWorkerUtil;
        if (_is_node.isNodeJS && "function" == typeof require) {
          PDFWorkerUtil.isWorkerDisabled = !0;
          PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
        } else if ("object" == typeof document) {
          var _document;
          var _t11 = (_document = document) === null || _document === void 0 || (_document = _document.currentScript) === null || _document === void 0 ? void 0 : _document.src;
          _t11 && (PDFWorkerUtil.fallbackWorkerSrc = _t11.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
        }
        PDFWorkerUtil.isSameOrigin = function (t, e) {
          var s;
          try {
            s = new URL(t);
            if (!s.origin || "null" === s.origin) return !1;
          } catch (t) {
            return !1;
          }
          var n = new URL(e, s);
          return s.origin === n.origin;
        };
        PDFWorkerUtil.createCDNWrapper = function (t) {
          var e = "importScripts(\"".concat(t, "\");");
          return URL.createObjectURL(new Blob([e]));
        };
        var PDFWorker = /*#__PURE__*/function () {
          function PDFWorker() {
            var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref14$name = _ref14.name,
              t = _ref14$name === void 0 ? null : _ref14$name,
              _ref14$port = _ref14.port,
              e = _ref14$port === void 0 ? null : _ref14$port,
              _ref14$verbosity = _ref14.verbosity,
              s = _ref14$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref14$verbosity;
            _classCallCheck(this, PDFWorker);
            if (e && _e9._.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
            this.name = t;
            this.destroyed = !1;
            this.verbosity = s;
            this._readyCapability = (0, _util.createPromiseCapability)();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (e) {
              _e9._.set(e, this);
              this._initializeFromPort(e);
            } else this._initialize();
          }
          return _createClass(PDFWorker, [{
            key: "promise",
            get: function get() {
              return this._readyCapability.promise;
            }
          }, {
            key: "port",
            get: function get() {
              return this._port;
            }
          }, {
            key: "messageHandler",
            get: function get() {
              return this._messageHandler;
            }
          }, {
            key: "_initializeFromPort",
            value: function _initializeFromPort(t) {
              this._port = t;
              this._messageHandler = new _message_handler.MessageHandler("main", "worker", t);
              this._messageHandler.on("ready", function () {});
              this._readyCapability.resolve();
            }
          }, {
            key: "_initialize",
            value: function _initialize() {
              var _this12 = this;
              if ("undefined" != typeof Worker && !PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
                var _t12 = PDFWorker.workerSrc;
                try {
                  PDFWorkerUtil.isSameOrigin(window.location.href, _t12) || (_t12 = PDFWorkerUtil.createCDNWrapper(new URL(_t12, window.location).href));
                  var _e10 = new Worker(_t12),
                    _s12 = new _message_handler.MessageHandler("main", "worker", _e10),
                    terminateEarly = function terminateEarly() {
                      _e10.removeEventListener("error", onWorkerError);
                      _s12.destroy();
                      _e10.terminate();
                      _this12.destroyed ? _this12._readyCapability.reject(new Error("Worker was destroyed")) : _this12._setupFakeWorker();
                    },
                    onWorkerError = function onWorkerError() {
                      _this12._webWorker || terminateEarly();
                    };
                  _e10.addEventListener("error", onWorkerError);
                  _s12.on("test", function (t) {
                    _e10.removeEventListener("error", onWorkerError);
                    if (_this12.destroyed) terminateEarly();else if (t) {
                      _this12._messageHandler = _s12;
                      _this12._port = _e10;
                      _this12._webWorker = _e10;
                      _this12._readyCapability.resolve();
                      _s12.send("configure", {
                        verbosity: _this12.verbosity
                      });
                    } else {
                      _this12._setupFakeWorker();
                      _s12.destroy();
                      _e10.terminate();
                    }
                  });
                  _s12.on("ready", function (t) {
                    _e10.removeEventListener("error", onWorkerError);
                    if (_this12.destroyed) terminateEarly();else try {
                      sendTest();
                    } catch (t) {
                      _this12._setupFakeWorker();
                    }
                  });
                  var sendTest = function sendTest() {
                    var t = new Uint8Array();
                    _s12.send("test", t, [t.buffer]);
                  };
                  sendTest();
                  return;
                } catch (t) {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
          }, {
            key: "_setupFakeWorker",
            value: function _setupFakeWorker() {
              var _this13 = this;
              if (!PDFWorkerUtil.isWorkerDisabled) {
                (0, _util.warn)("Setting up fake worker.");
                PDFWorkerUtil.isWorkerDisabled = !0;
              }
              PDFWorker._setupFakeWorkerGlobal.then(function (t) {
                if (_this13.destroyed) {
                  _this13._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                var e = new LoopbackPort();
                _this13._port = e;
                var s = "fake" + PDFWorkerUtil.fakeWorkerId++,
                  n = new _message_handler.MessageHandler(s + "_worker", s, e);
                t.setup(n, e);
                var r = new _message_handler.MessageHandler(s, s + "_worker", e);
                _this13._messageHandler = r;
                _this13._readyCapability.resolve();
                r.send("configure", {
                  verbosity: _this13.verbosity
                });
              }).catch(function (t) {
                _this13._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(t.message, "\".")));
              });
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.destroyed = !0;
              if (this._webWorker) {
                this._webWorker.terminate();
                this._webWorker = null;
              }
              _e9._.delete(this._port);
              this._port = null;
              if (this._messageHandler) {
                this._messageHandler.destroy();
                this._messageHandler = null;
              }
            }
          }], [{
            key: "fromPort",
            value: function fromPort(t) {
              if (!(t !== null && t !== void 0 && t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
              return _assertClassBrand(PDFWorker, this, _e9)._.has(t.port) ? _assertClassBrand(PDFWorker, this, _e9)._.get(t.port) : new PDFWorker(t);
            }
          }, {
            key: "workerSrc",
            get: function get() {
              if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
              if (null !== PDFWorkerUtil.fallbackWorkerSrc) {
                _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                return PDFWorkerUtil.fallbackWorkerSrc;
              }
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
          }, {
            key: "_mainThreadWorkerMessageHandler",
            get: function get() {
              try {
                var _globalThis$pdfjsWork;
                return ((_globalThis$pdfjsWork = globalThis.pdfjsWorker) === null || _globalThis$pdfjsWork === void 0 ? void 0 : _globalThis$pdfjsWork.WorkerMessageHandler) || null;
              } catch (t) {
                return null;
              }
            }
          }, {
            key: "_setupFakeWorkerGlobal",
            get: function get() {
              var _this14 = this;
              var loader = /*#__PURE__*/function () {
                var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var mainWorkerMessageHandler, worker;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        mainWorkerMessageHandler = _this14._mainThreadWorkerMessageHandler;
                        if (!mainWorkerMessageHandler) {
                          _context4.next = 3;
                          break;
                        }
                        return _context4.abrupt("return", mainWorkerMessageHandler);
                      case 3:
                        if (!(_is_node.isNodeJS && "function" == typeof require)) {
                          _context4.next = 6;
                          break;
                        }
                        worker = eval("require")(_this14.workerSrc);
                        return _context4.abrupt("return", worker.WorkerMessageHandler);
                      case 6:
                        _context4.next = 8;
                        return (0, _display_utils.loadScript)(_this14.workerSrc);
                      case 8:
                        return _context4.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);
                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function loader() {
                  return _ref15.apply(this, arguments);
                };
              }();
              return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
            }
          }]);
        }();
        var _e9 = {
          _: new WeakMap()
        };
        exports.PDFWorker = PDFWorker;
        PDFWorker.getWorkerSrc = function () {
          (0, _display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead.");
          return this.workerSrc;
        };
        var _s13 = /*#__PURE__*/new WeakMap();
        var _n11 = /*#__PURE__*/new WeakMap();
        var _r3 = /*#__PURE__*/new WeakMap();
        var _a10 = /*#__PURE__*/new WeakMap();
        var WorkerTransport = /*#__PURE__*/function () {
          function WorkerTransport(t, e, s, n) {
            _classCallCheck(this, WorkerTransport);
            _classPrivateFieldInitSpec(this, _s13, null);
            _classPrivateFieldInitSpec(this, _n11, new Map());
            _classPrivateFieldInitSpec(this, _r3, new Map());
            _classPrivateFieldInitSpec(this, _a10, null);
            this.messageHandler = t;
            this.loadingTask = e;
            this.commonObjs = new PDFObjects();
            this.fontLoader = new _font_loader.FontLoader({
              docId: e.docId,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              ownerDocument: n.ownerDocument,
              styleElement: n.styleElement
            });
            this._params = n;
            if (!n.useWorkerFetch) {
              this.CMapReaderFactory = new n.CMapReaderFactory({
                baseUrl: n.cMapUrl,
                isCompressed: n.cMapPacked
              });
              this.StandardFontDataFactory = new n.StandardFontDataFactory({
                baseUrl: n.standardFontDataUrl
              });
            }
            this.destroyed = !1;
            this.destroyCapability = null;
            this._passwordCapability = null;
            this._networkStream = s;
            this._fullReader = null;
            this._lastProgress = null;
            this.downloadInfoCapability = (0, _util.createPromiseCapability)();
            this.setupMessageHandler();
          }
          return _createClass(WorkerTransport, [{
            key: "annotationStorage",
            get: function get() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
          }, {
            key: "stats",
            get: function get() {
              return _classPrivateFieldGet(_s13, this);
            }
          }, {
            key: "getRenderingIntent",
            value: function getRenderingIntent(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.AnnotationMode.ENABLE;
              var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              var n = _util.RenderingIntentFlag.DISPLAY,
                r = "";
              switch (t) {
                case "any":
                  n = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  n = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)("getRenderingIntent - invalid intent: ".concat(t));
              }
              switch (e) {
                case _util.AnnotationMode.DISABLE:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                  r = this.annotationStorage.hash;
                  break;
                default:
                  (0, _util.warn)("getRenderingIntent - invalid annotationMode: ".concat(e));
              }
              s && (n += _util.RenderingIntentFlag.OPLIST);
              return {
                renderingIntent: n,
                cacheKey: "".concat(n, "_").concat(r)
              };
            }
          }, {
            key: "destroy",
            value: function destroy() {
              var _this15 = this;
              if (this.destroyCapability) return this.destroyCapability.promise;
              this.destroyed = !0;
              this.destroyCapability = (0, _util.createPromiseCapability)();
              this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
              var t = [];
              var _iterator16 = _createForOfIteratorHelper(_classPrivateFieldGet(_n11, this).values()),
                _step16;
              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _e11 = _step16.value;
                  t.push(_e11._destroy());
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
              _classPrivateFieldGet(_n11, this).clear();
              _classPrivateFieldGet(_r3, this).clear();
              this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              var e = this.messageHandler.sendWithPromise("Terminate", null);
              t.push(e);
              Promise.all(t).then(function () {
                _this15.commonObjs.clear();
                _this15.fontLoader.clear();
                _classPrivateFieldSet(_a10, _this15, null);
                _this15._getFieldObjectsPromise = null;
                _this15._hasJSActionsPromise = null;
                _this15._networkStream && _this15._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                if (_this15.messageHandler) {
                  _this15.messageHandler.destroy();
                  _this15.messageHandler = null;
                }
                _this15.destroyCapability.resolve();
              }, this.destroyCapability.reject);
              return this.destroyCapability.promise;
            }
          }, {
            key: "setupMessageHandler",
            value: function setupMessageHandler() {
              var _this16 = this;
              var t = this.messageHandler,
                e = this.loadingTask;
              t.on("GetReader", function (t, e) {
                (0, _util.assert)(_this16._networkStream, "GetReader - no `IPDFStream` instance available.");
                _this16._fullReader = _this16._networkStream.getFullReader();
                _this16._fullReader.onProgress = function (t) {
                  _this16._lastProgress = {
                    loaded: t.loaded,
                    total: t.total
                  };
                };
                e.onPull = function () {
                  _this16._fullReader.read().then(function (_ref16) {
                    var t = _ref16.value,
                      s = _ref16.done;
                    if (s) e.close();else {
                      (0, _util.assert)((0, _util.isArrayBuffer)(t), "GetReader - expected an ArrayBuffer.");
                      e.enqueue(new Uint8Array(t), 1, [t]);
                    }
                  }).catch(function (t) {
                    e.error(t);
                  });
                };
                e.onCancel = function (t) {
                  _this16._fullReader.cancel(t);
                  e.ready.catch(function (t) {
                    if (!_this16.destroyed) throw t;
                  });
                };
              });
              t.on("ReaderHeadersReady", function (t) {
                var s = (0, _util.createPromiseCapability)(),
                  n = _this16._fullReader;
                n.headersReady.then(function () {
                  if (!n.isStreamingSupported || !n.isRangeSupported) {
                    var _e$onProgress;
                    _this16._lastProgress && ((_e$onProgress = e.onProgress) === null || _e$onProgress === void 0 ? void 0 : _e$onProgress.call(e, _this16._lastProgress));
                    n.onProgress = function (t) {
                      var _e$onProgress2;
                      (_e$onProgress2 = e.onProgress) === null || _e$onProgress2 === void 0 || _e$onProgress2.call(e, {
                        loaded: t.loaded,
                        total: t.total
                      });
                    };
                  }
                  s.resolve({
                    isStreamingSupported: n.isStreamingSupported,
                    isRangeSupported: n.isRangeSupported,
                    contentLength: n.contentLength
                  });
                }, s.reject);
                return s.promise;
              });
              t.on("GetRangeReader", function (t, e) {
                (0, _util.assert)(_this16._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                var s = _this16._networkStream.getRangeReader(t.begin, t.end);
                if (s) {
                  e.onPull = function () {
                    s.read().then(function (_ref17) {
                      var t = _ref17.value,
                        s = _ref17.done;
                      if (s) e.close();else {
                        (0, _util.assert)((0, _util.isArrayBuffer)(t), "GetRangeReader - expected an ArrayBuffer.");
                        e.enqueue(new Uint8Array(t), 1, [t]);
                      }
                    }).catch(function (t) {
                      e.error(t);
                    });
                  };
                  e.onCancel = function (t) {
                    s.cancel(t);
                    e.ready.catch(function (t) {
                      if (!_this16.destroyed) throw t;
                    });
                  };
                } else e.close();
              });
              t.on("GetDoc", function (_ref18) {
                var t = _ref18.pdfInfo;
                _this16._numPages = t.numPages;
                _this16._htmlForXfa = t.htmlForXfa;
                delete t.htmlForXfa;
                e._capability.resolve(new PDFDocumentProxy(t, _this16));
              });
              t.on("DocException", function (t) {
                var s;
                switch (t.name) {
                  case "PasswordException":
                    s = new _util.PasswordException(t.message, t.code);
                    break;
                  case "InvalidPDFException":
                    s = new _util.InvalidPDFException(t.message);
                    break;
                  case "MissingPDFException":
                    s = new _util.MissingPDFException(t.message);
                    break;
                  case "UnexpectedResponseException":
                    s = new _util.UnexpectedResponseException(t.message, t.status);
                    break;
                  case "UnknownErrorException":
                    s = new _util.UnknownErrorException(t.message, t.details);
                    break;
                  default:
                    (0, _util.unreachable)("DocException - expected a valid Error.");
                }
                e._capability.reject(s);
              });
              t.on("PasswordRequest", function (t) {
                _this16._passwordCapability = (0, _util.createPromiseCapability)();
                if (e.onPassword) {
                  var updatePassword = function updatePassword(t) {
                    t instanceof Error ? _this16._passwordCapability.reject(t) : _this16._passwordCapability.resolve({
                      password: t
                    });
                  };
                  try {
                    e.onPassword(updatePassword, t.code);
                  } catch (t) {
                    _this16._passwordCapability.reject(t);
                  }
                } else _this16._passwordCapability.reject(new _util.PasswordException(t.message, t.code));
                return _this16._passwordCapability.promise;
              });
              t.on("DataLoaded", function (t) {
                var _e$onProgress3;
                (_e$onProgress3 = e.onProgress) === null || _e$onProgress3 === void 0 || _e$onProgress3.call(e, {
                  loaded: t.length,
                  total: t.length
                });
                _this16.downloadInfoCapability.resolve(t);
              });
              t.on("StartRenderPage", function (t) {
                if (_this16.destroyed) return;
                _classPrivateFieldGet(_n11, _this16).get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
              });
              t.on("commonobj", function (_ref19) {
                var _globalThis$FontInspe;
                var _ref20 = _slicedToArray(_ref19, 3),
                  e = _ref20[0],
                  s = _ref20[1],
                  n = _ref20[2];
                if (!_this16.destroyed && !_this16.commonObjs.has(e)) switch (s) {
                  case "Font":
                    var r = _this16._params;
                    if ("error" in n) {
                      var _t13 = n.error;
                      (0, _util.warn)("Error during font loading: ".concat(_t13));
                      _this16.commonObjs.resolve(e, _t13);
                      break;
                    }
                    var a = null;
                    r.pdfBug && ((_globalThis$FontInspe = globalThis.FontInspector) === null || _globalThis$FontInspe === void 0 ? void 0 : _globalThis$FontInspe.enabled) && (a = {
                      registerFont: function registerFont(t, e) {
                        globalThis.FontInspector.fontAdded(t, e);
                      }
                    });
                    var i = new _font_loader.FontFaceObject(n, {
                      isEvalSupported: r.isEvalSupported,
                      disableFontFace: r.disableFontFace,
                      ignoreErrors: r.ignoreErrors,
                      onUnsupportedFeature: _this16._onUnsupportedFeature.bind(_this16),
                      fontRegistry: a
                    });
                    _this16.fontLoader.bind(i).catch(function (s) {
                      return t.sendWithPromise("FontFallback", {
                        id: e
                      });
                    }).finally(function () {
                      !r.fontExtraProperties && i.data && (i.data = null);
                      _this16.commonObjs.resolve(e, i);
                    });
                    break;
                  case "FontPath":
                  case "Image":
                    _this16.commonObjs.resolve(e, n);
                    break;
                  default:
                    throw new Error("Got unknown common object type ".concat(s));
                }
              });
              t.on("obj", function (_ref21) {
                var _ref22 = _slicedToArray(_ref21, 4),
                  t = _ref22[0],
                  e = _ref22[1],
                  s = _ref22[2],
                  n = _ref22[3];
                if (_this16.destroyed) return;
                var r = _classPrivateFieldGet(_n11, _this16).get(e);
                if (!r.objs.has(t)) switch (s) {
                  case "Image":
                    r.objs.resolve(t, n);
                    var _e12 = 8e6;
                    if (n) {
                      var _n$data;
                      var _t14;
                      if (n.bitmap) {
                        var _e13 = n.bitmap,
                          _s14 = n.width,
                          a = n.height;
                        _t14 = _s14 * a * 4;
                        r._bitmaps.add(_e13);
                      } else _t14 = ((_n$data = n.data) === null || _n$data === void 0 ? void 0 : _n$data.length) || 0;
                      _t14 > _e12 && (r.cleanupAfterRender = !0);
                    }
                    break;
                  case "Pattern":
                    r.objs.resolve(t, n);
                    break;
                  default:
                    throw new Error("Got unknown object type ".concat(s));
                }
              });
              t.on("DocProgress", function (t) {
                var _e$onProgress4;
                _this16.destroyed || ((_e$onProgress4 = e.onProgress) === null || _e$onProgress4 === void 0 ? void 0 : _e$onProgress4.call(e, {
                  loaded: t.loaded,
                  total: t.total
                }));
              });
              t.on("DocStats", function (t) {
                _this16.destroyed || _classPrivateFieldSet(_s13, _this16, Object.freeze({
                  streamTypes: Object.freeze(t.streamTypes),
                  fontTypes: Object.freeze(t.fontTypes)
                }));
              });
              t.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
              t.on("FetchBuiltInCMap", function (t) {
                return _this16.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : _this16.CMapReaderFactory ? _this16.CMapReaderFactory.fetch(t) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
              });
              t.on("FetchStandardFontData", function (t) {
                return _this16.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : _this16.StandardFontDataFactory ? _this16.StandardFontDataFactory.fetch(t) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
              });
            }
          }, {
            key: "_onUnsupportedFeature",
            value: function _onUnsupportedFeature(_ref23) {
              var _this$loadingTask$onU, _this$loadingTask;
              var t = _ref23.featureId;
              this.destroyed || ((_this$loadingTask$onU = (_this$loadingTask = this.loadingTask).onUnsupportedFeature) === null || _this$loadingTask$onU === void 0 ? void 0 : _this$loadingTask$onU.call(_this$loadingTask, t));
            }
          }, {
            key: "getData",
            value: function getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
          }, {
            key: "getPage",
            value: function getPage(t) {
              var _this17 = this;
              if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
              var e = t - 1,
                s = _classPrivateFieldGet(_r3, this).get(e);
              if (s) return s;
              var n = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: e
              }).then(function (t) {
                if (_this17.destroyed) throw new Error("Transport destroyed");
                var s = new PDFPageProxy(e, t, _this17, _this17._params.ownerDocument, _this17._params.pdfBug);
                _classPrivateFieldGet(_n11, _this17).set(e, s);
                return s;
              });
              _classPrivateFieldGet(_r3, this).set(e, n);
              return n;
            }
          }, {
            key: "getPageIndex",
            value: function getPageIndex(t) {
              return "object" != typeof t || null === t || !Number.isInteger(t.num) || t.num < 0 || !Number.isInteger(t.gen) || t.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: t.num,
                gen: t.gen
              });
            }
          }, {
            key: "getAnnotations",
            value: function getAnnotations(t, e) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: t,
                intent: e
              });
            }
          }, {
            key: "saveDocument",
            value: function saveDocument() {
              var _this$_fullReader$fil,
                _this$_fullReader,
                _this18 = this;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: this.annotationStorage.serializable,
                filename: (_this$_fullReader$fil = (_this$_fullReader = this._fullReader) === null || _this$_fullReader === void 0 ? void 0 : _this$_fullReader.filename) !== null && _this$_fullReader$fil !== void 0 ? _this$_fullReader$fil : null
              }).finally(function () {
                _this18.annotationStorage.resetModified();
              });
            }
          }, {
            key: "getFieldObjects",
            value: function getFieldObjects() {
              return this._getFieldObjectsPromise || (this._getFieldObjectsPromise = this.messageHandler.sendWithPromise("GetFieldObjects", null));
            }
          }, {
            key: "hasJSActions",
            value: function hasJSActions() {
              return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
            }
          }, {
            key: "getCalculationOrderIds",
            value: function getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
          }, {
            key: "getDestinations",
            value: function getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
          }, {
            key: "getDestination",
            value: function getDestination(t) {
              return "string" != typeof t ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: t
              });
            }
          }, {
            key: "getPageLabels",
            value: function getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
          }, {
            key: "getPageLayout",
            value: function getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
          }, {
            key: "getPageMode",
            value: function getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
          }, {
            key: "getViewerPreferences",
            value: function getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
          }, {
            key: "getOpenAction",
            value: function getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
          }, {
            key: "getAttachments",
            value: function getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
          }, {
            key: "getJavaScript",
            value: function getJavaScript() {
              return this.messageHandler.sendWithPromise("GetJavaScript", null);
            }
          }, {
            key: "getDocJSActions",
            value: function getDocJSActions() {
              return this.messageHandler.sendWithPromise("GetDocJSActions", null);
            }
          }, {
            key: "getPageJSActions",
            value: function getPageJSActions(t) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: t
              });
            }
          }, {
            key: "getStructTree",
            value: function getStructTree(t) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: t
              });
            }
          }, {
            key: "getOutline",
            value: function getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
          }, {
            key: "getOptionalContentConfig",
            value: function getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(function (t) {
                return new _optional_content_config.OptionalContentConfig(t);
              });
            }
          }, {
            key: "getPermissions",
            value: function getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
          }, {
            key: "getMetadata",
            value: function getMetadata() {
              var _this19 = this;
              return _classPrivateFieldGet(_a10, this) || _classPrivateFieldSet(_a10, this, this.messageHandler.sendWithPromise("GetMetadata", null).then(function (t) {
                var _this19$_fullReader$f, _this19$_fullReader, _this19$_fullReader$c, _this19$_fullReader2;
                return {
                  info: t[0],
                  metadata: t[1] ? new _metadata.Metadata(t[1]) : null,
                  contentDispositionFilename: (_this19$_fullReader$f = (_this19$_fullReader = _this19._fullReader) === null || _this19$_fullReader === void 0 ? void 0 : _this19$_fullReader.filename) !== null && _this19$_fullReader$f !== void 0 ? _this19$_fullReader$f : null,
                  contentLength: (_this19$_fullReader$c = (_this19$_fullReader2 = _this19._fullReader) === null || _this19$_fullReader2 === void 0 ? void 0 : _this19$_fullReader2.contentLength) !== null && _this19$_fullReader$c !== void 0 ? _this19$_fullReader$c : null
                };
              }));
            }
          }, {
            key: "getMarkInfo",
            value: function getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
          }, {
            key: "startCleanup",
            value: function () {
              var _startCleanup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var t,
                  _iterator17,
                  _step17,
                  _t15,
                  _args5 = arguments;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      t = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : !1;
                      _context5.next = 3;
                      return this.messageHandler.sendWithPromise("Cleanup", null);
                    case 3:
                      if (this.destroyed) {
                        _context5.next = 26;
                        break;
                      }
                      _iterator17 = _createForOfIteratorHelper(_classPrivateFieldGet(_n11, this).values());
                      _context5.prev = 5;
                      _iterator17.s();
                    case 7:
                      if ((_step17 = _iterator17.n()).done) {
                        _context5.next = 13;
                        break;
                      }
                      _t15 = _step17.value;
                      if (_t15.cleanup()) {
                        _context5.next = 11;
                        break;
                      }
                      throw new Error("startCleanup: Page ".concat(_t15.pageNumber, " is currently rendering."));
                    case 11:
                      _context5.next = 7;
                      break;
                    case 13:
                      _context5.next = 18;
                      break;
                    case 15:
                      _context5.prev = 15;
                      _context5.t0 = _context5["catch"](5);
                      _iterator17.e(_context5.t0);
                    case 18:
                      _context5.prev = 18;
                      _iterator17.f();
                      return _context5.finish(18);
                    case 21:
                      this.commonObjs.clear();
                      t || this.fontLoader.clear();
                      _classPrivateFieldSet(_a10, this, null);
                      this._getFieldObjectsPromise = null;
                      this._hasJSActionsPromise = null;
                    case 26:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this, [[5, 15, 18, 21]]);
              }));
              function startCleanup() {
                return _startCleanup.apply(this, arguments);
              }
              return startCleanup;
            }()
          }, {
            key: "loadingParams",
            get: function get() {
              var t = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: t.disableAutoFetch,
                enableXfa: t.enableXfa
              });
            }
          }]);
        }();
        var _i2 = /*#__PURE__*/new WeakMap();
        var _PDFObjects_brand = /*#__PURE__*/new WeakSet();
        var PDFObjects = /*#__PURE__*/function () {
          function PDFObjects() {
            _classCallCheck(this, PDFObjects);
            _classPrivateMethodInitSpec(this, _PDFObjects_brand);
            _classPrivateFieldInitSpec(this, _i2, Object.create(null));
          }
          return _createClass(PDFObjects, [{
            key: "get",
            value: function get(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              if (e) {
                var _s15 = _assertClassBrand(_PDFObjects_brand, this, _o).call(this, t);
                _s15.capability.promise.then(function () {
                  return e(_s15.data);
                });
                return null;
              }
              var s = _classPrivateFieldGet(_i2, this)[t];
              if (!(s !== null && s !== void 0 && s.capability.settled)) throw new Error("Requesting object that isn't resolved yet ".concat(t, "."));
              return s.data;
            }
          }, {
            key: "has",
            value: function has(t) {
              var _classPrivateFieldGet2;
              return ((_classPrivateFieldGet2 = _classPrivateFieldGet(_i2, this)[t]) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.capability.settled) || !1;
            }
          }, {
            key: "resolve",
            value: function resolve(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var s = _assertClassBrand(_PDFObjects_brand, this, _o).call(this, t);
              s.data = e;
              s.capability.resolve();
            }
          }, {
            key: "clear",
            value: function clear() {
              _classPrivateFieldSet(_i2, this, Object.create(null));
            }
          }]);
        }();
        function _o(t) {
          var e = _classPrivateFieldGet(_i2, this)[t];
          return e || (_classPrivateFieldGet(_i2, this)[t] = {
            capability: (0, _util.createPromiseCapability)(),
            data: null
          });
        }
        var RenderTask = /*#__PURE__*/function () {
          function RenderTask(t) {
            _classCallCheck(this, RenderTask);
            this._internalRenderTask = t;
            this.onContinue = null;
          }
          return _createClass(RenderTask, [{
            key: "promise",
            get: function get() {
              return this._internalRenderTask.capability.promise;
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this._internalRenderTask.cancel();
            }
          }]);
        }();
        exports.RenderTask = RenderTask;
        var InternalRenderTask = /*#__PURE__*/function () {
          function InternalRenderTask(_ref24) {
            var t = _ref24.callback,
              e = _ref24.params,
              s = _ref24.objs,
              n = _ref24.commonObjs,
              r = _ref24.annotationCanvasMap,
              a = _ref24.operatorList,
              i = _ref24.pageIndex,
              o = _ref24.canvasFactory,
              _ref24$useRequestAnim = _ref24.useRequestAnimationFrame,
              l = _ref24$useRequestAnim === void 0 ? !1 : _ref24$useRequestAnim,
              _ref24$pdfBug = _ref24.pdfBug,
              c = _ref24$pdfBug === void 0 ? !1 : _ref24$pdfBug,
              _ref24$pageColors = _ref24.pageColors,
              h = _ref24$pageColors === void 0 ? null : _ref24$pageColors;
            _classCallCheck(this, InternalRenderTask);
            this.callback = t;
            this.params = e;
            this.objs = s;
            this.commonObjs = n;
            this.annotationCanvasMap = r;
            this.operatorListIdx = null;
            this.operatorList = a;
            this._pageIndex = i;
            this.canvasFactory = o;
            this._pdfBug = c;
            this.pageColors = h;
            this.running = !1;
            this.graphicsReadyCallback = null;
            this.graphicsReady = !1;
            this._useRequestAnimationFrame = !0 === l && "undefined" != typeof window;
            this.cancelled = !1;
            this.capability = (0, _util.createPromiseCapability)();
            this.task = new RenderTask(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = e.canvasContext.canvas;
          }
          return _createClass(InternalRenderTask, [{
            key: "completed",
            get: function get() {
              return this.capability.promise.catch(function () {});
            }
          }, {
            key: "initializeGraphics",
            value: function initializeGraphics(_ref25) {
              var _globalThis$StepperMa;
              var _ref25$transparency = _ref25.transparency,
                t = _ref25$transparency === void 0 ? !1 : _ref25$transparency,
                e = _ref25.optionalContentConfig;
              if (this.cancelled) return;
              if (this._canvas) {
                if (_l._.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                _l._.add(this._canvas);
              }
              if (this._pdfBug && (_globalThis$StepperMa = globalThis.StepperManager) !== null && _globalThis$StepperMa !== void 0 && _globalThis$StepperMa.enabled) {
                this.stepper = globalThis.StepperManager.create(this._pageIndex);
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              var _this$params = this.params,
                s = _this$params.canvasContext,
                n = _this$params.viewport,
                r = _this$params.transform,
                a = _this$params.imageLayer,
                i = _this$params.background;
              this.gfx = new _canvas.CanvasGraphics(s, this.commonObjs, this.objs, this.canvasFactory, a, e, this.annotationCanvasMap, this.pageColors);
              this.gfx.beginDrawing({
                transform: r,
                viewport: n,
                transparency: t,
                background: i
              });
              this.operatorListIdx = 0;
              this.graphicsReady = !0;
              this.graphicsReadyCallback && this.graphicsReadyCallback();
            }
          }, {
            key: "cancel",
            value: function cancel() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              this.running = !1;
              this.cancelled = !0;
              this.gfx && this.gfx.endDrawing();
              this._canvas && _l._.delete(this._canvas);
              this.callback(t || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas"));
            }
          }, {
            key: "operatorListChanged",
            value: function operatorListChanged() {
              if (this.graphicsReady) {
                this.stepper && this.stepper.updateOperatorList(this.operatorList);
                this.running || this._continue();
              } else this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
            }
          }, {
            key: "_continue",
            value: function _continue() {
              this.running = !0;
              this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
            }
          }, {
            key: "_scheduleNext",
            value: function _scheduleNext() {
              var _this20 = this;
              this._useRequestAnimationFrame ? window.requestAnimationFrame(function () {
                _this20._nextBound().catch(_this20._cancelBound);
              }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
          }, {
            key: "_next",
            value: function () {
              var _next2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!this.cancelled) {
                        this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                        if (this.operatorListIdx === this.operatorList.argsArray.length) {
                          this.running = !1;
                          if (this.operatorList.lastChunk) {
                            this.gfx.endDrawing();
                            this._canvas && _l._.delete(this._canvas);
                            this.callback();
                          }
                        }
                      }
                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
              function _next() {
                return _next2.apply(this, arguments);
              }
              return _next;
            }()
          }]);
        }();
        var _l = {
          _: new WeakSet()
        };
        var version = "2.14.305";
        exports.version = version;
        var build = "eaaa8b4ad";
        exports.build = build;
      }, function (t, e, s) {
        var _PixelsPerInch;
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = void 0;
        e.deprecated = function deprecated(t) {
          console.log("Deprecated API usage: " + t);
        };
        e.getFilenameFromUrl = function getFilenameFromUrl(t) {
          var e = t.indexOf("#"),
            s = t.indexOf("?"),
            n = Math.min(e > 0 ? e : t.length, s > 0 ? s : t.length);
          return t.substring(t.lastIndexOf("/", n) + 1, n);
        };
        e.getPdfFilenameFromUrl = function getPdfFilenameFromUrl(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";
          if ("string" != typeof t) return e;
          if (isDataScheme(t)) {
            (0, r.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
            return e;
          }
          var s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
            n = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
          var a = s.exec(n[1]) || s.exec(n[2]) || s.exec(n[3]);
          if (a) {
            a = a[0];
            if (a.includes("%")) try {
              a = s.exec(decodeURIComponent(a))[0];
            } catch (t) {}
          }
          return a || e;
        };
        e.getXfaPageViewport = function getXfaPageViewport(t, _ref26) {
          var _ref26$scale = _ref26.scale,
            e = _ref26$scale === void 0 ? 1 : _ref26$scale,
            _ref26$rotation = _ref26.rotation,
            s = _ref26$rotation === void 0 ? 0 : _ref26$rotation;
          var _t$attributes$style = t.attributes.style,
            n = _t$attributes$style.width,
            r = _t$attributes$style.height,
            a = [0, 0, parseInt(n), parseInt(r)];
          return new PageViewport({
            viewBox: a,
            scale: e,
            rotation: s
          });
        };
        e.isDataScheme = isDataScheme;
        e.isPdfFile = function isPdfFile(t) {
          return "string" == typeof t && /\.pdf$/i.test(t);
        };
        e.isValidFetchUrl = isValidFetchUrl;
        e.loadScript = function loadScript(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          return new Promise(function (s, n) {
            var r = document.createElement("script");
            r.src = t;
            r.onload = function (t) {
              e && r.remove();
              s(t);
            };
            r.onerror = function () {
              n(new Error("Cannot load script at: ".concat(r.src)));
            };
            (document.head || document.documentElement).appendChild(r);
          });
        };
        var n = s(6),
          r = s(1);
        var PixelsPerInch = /*#__PURE__*/_createClass(function PixelsPerInch() {
          _classCallCheck(this, PixelsPerInch);
        });
        _PixelsPerInch = PixelsPerInch;
        _defineProperty(PixelsPerInch, "CSS", 96);
        _defineProperty(PixelsPerInch, "PDF", 72);
        _defineProperty(PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
        e.PixelsPerInch = PixelsPerInch;
        var DOMCanvasFactory = /*#__PURE__*/function (_n$BaseCanvasFactory) {
          function DOMCanvasFactory() {
            var _this21;
            var _ref27 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref27$ownerDocument = _ref27.ownerDocument,
              t = _ref27$ownerDocument === void 0 ? globalThis.document : _ref27$ownerDocument;
            _classCallCheck(this, DOMCanvasFactory);
            _this21 = _callSuper(this, DOMCanvasFactory);
            _this21._document = t;
            return _this21;
          }
          _inherits(DOMCanvasFactory, _n$BaseCanvasFactory);
          return _createClass(DOMCanvasFactory, [{
            key: "_createCanvas",
            value: function _createCanvas(t, e) {
              var s = this._document.createElement("canvas");
              s.width = t;
              s.height = e;
              return s;
            }
          }]);
        }(n.BaseCanvasFactory);
        e.DOMCanvasFactory = DOMCanvasFactory;
        function fetchData(_x5) {
          return _fetchData.apply(this, arguments);
        }
        function _fetchData() {
          _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(t) {
            var e,
              _s19,
              _args8 = arguments;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  e = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : !1;
                  if (!isValidFetchUrl(t, document.baseURI)) {
                    _context8.next = 21;
                    break;
                  }
                  _context8.next = 4;
                  return fetch(t);
                case 4:
                  _s19 = _context8.sent;
                  if (_s19.ok) {
                    _context8.next = 7;
                    break;
                  }
                  throw new Error(_s19.statusText);
                case 7:
                  if (!e) {
                    _context8.next = 15;
                    break;
                  }
                  _context8.t1 = Uint8Array;
                  _context8.next = 11;
                  return _s19.arrayBuffer();
                case 11:
                  _context8.t2 = _context8.sent;
                  _context8.t0 = new _context8.t1(_context8.t2);
                  _context8.next = 20;
                  break;
                case 15:
                  _context8.t3 = (0, r.stringToBytes);
                  _context8.next = 18;
                  return _s19.text();
                case 18:
                  _context8.t4 = _context8.sent;
                  _context8.t0 = (0, _context8.t3)(_context8.t4);
                case 20:
                  return _context8.abrupt("return", _context8.t0);
                case 21:
                  return _context8.abrupt("return", new Promise(function (s, n) {
                    var a = new XMLHttpRequest();
                    a.open("GET", t, !0);
                    e && (a.responseType = "arraybuffer");
                    a.onreadystatechange = function () {
                      if (a.readyState === XMLHttpRequest.DONE) {
                        if (200 === a.status || 0 === a.status) {
                          var _t17;
                          e && a.response ? _t17 = new Uint8Array(a.response) : !e && a.responseText && (_t17 = (0, r.stringToBytes)(a.responseText));
                          if (_t17) {
                            s(_t17);
                            return;
                          }
                        }
                        n(new Error(a.statusText));
                      }
                    };
                    a.send(null);
                  }));
                case 22:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          return _fetchData.apply(this, arguments);
        }
        var DOMCMapReaderFactory = /*#__PURE__*/function (_n$BaseCMapReaderFact) {
          function DOMCMapReaderFactory() {
            _classCallCheck(this, DOMCMapReaderFactory);
            return _callSuper(this, DOMCMapReaderFactory, arguments);
          }
          _inherits(DOMCMapReaderFactory, _n$BaseCMapReaderFact);
          return _createClass(DOMCMapReaderFactory, [{
            key: "_fetchData",
            value: function _fetchData(t, e) {
              return fetchData(t, this.isCompressed).then(function (t) {
                return {
                  cMapData: t,
                  compressionType: e
                };
              });
            }
          }]);
        }(n.BaseCMapReaderFactory);
        e.DOMCMapReaderFactory = DOMCMapReaderFactory;
        var DOMStandardFontDataFactory = /*#__PURE__*/function (_n$BaseStandardFontDa) {
          function DOMStandardFontDataFactory() {
            _classCallCheck(this, DOMStandardFontDataFactory);
            return _callSuper(this, DOMStandardFontDataFactory, arguments);
          }
          _inherits(DOMStandardFontDataFactory, _n$BaseStandardFontDa);
          return _createClass(DOMStandardFontDataFactory, [{
            key: "_fetchData",
            value: function _fetchData(t) {
              return fetchData(t, !0);
            }
          }]);
        }(n.BaseStandardFontDataFactory);
        e.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
        var DOMSVGFactory = /*#__PURE__*/function (_n$BaseSVGFactory) {
          function DOMSVGFactory() {
            _classCallCheck(this, DOMSVGFactory);
            return _callSuper(this, DOMSVGFactory, arguments);
          }
          _inherits(DOMSVGFactory, _n$BaseSVGFactory);
          return _createClass(DOMSVGFactory, [{
            key: "_createSVG",
            value: function _createSVG(t) {
              return document.createElementNS("http://www.w3.org/2000/svg", t);
            }
          }]);
        }(n.BaseSVGFactory);
        e.DOMSVGFactory = DOMSVGFactory;
        var PageViewport = /*#__PURE__*/function () {
          function PageViewport(_ref28) {
            var t = _ref28.viewBox,
              e = _ref28.scale,
              s = _ref28.rotation,
              _ref28$offsetX = _ref28.offsetX,
              n = _ref28$offsetX === void 0 ? 0 : _ref28$offsetX,
              _ref28$offsetY = _ref28.offsetY,
              r = _ref28$offsetY === void 0 ? 0 : _ref28$offsetY,
              _ref28$dontFlip = _ref28.dontFlip,
              a = _ref28$dontFlip === void 0 ? !1 : _ref28$dontFlip;
            _classCallCheck(this, PageViewport);
            this.viewBox = t;
            this.scale = e;
            this.rotation = s;
            this.offsetX = n;
            this.offsetY = r;
            var i = (t[2] + t[0]) / 2,
              o = (t[3] + t[1]) / 2;
            var l, c, h, d, u, p, f, g;
            (s %= 360) < 0 && (s += 360);
            switch (s) {
              case 180:
                l = -1;
                c = 0;
                h = 0;
                d = 1;
                break;
              case 90:
                l = 0;
                c = 1;
                h = 1;
                d = 0;
                break;
              case 270:
                l = 0;
                c = -1;
                h = -1;
                d = 0;
                break;
              case 0:
                l = 1;
                c = 0;
                h = 0;
                d = -1;
                break;
              default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            if (a) {
              h = -h;
              d = -d;
            }
            if (0 === l) {
              u = Math.abs(o - t[1]) * e + n;
              p = Math.abs(i - t[0]) * e + r;
              f = Math.abs(t[3] - t[1]) * e;
              g = Math.abs(t[2] - t[0]) * e;
            } else {
              u = Math.abs(i - t[0]) * e + n;
              p = Math.abs(o - t[1]) * e + r;
              f = Math.abs(t[2] - t[0]) * e;
              g = Math.abs(t[3] - t[1]) * e;
            }
            this.transform = [l * e, c * e, h * e, d * e, u - l * e * i - h * e * o, p - c * e * i - d * e * o];
            this.width = f;
            this.height = g;
          }
          return _createClass(PageViewport, [{
            key: "clone",
            value: function clone() {
              var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref29$scale = _ref29.scale,
                t = _ref29$scale === void 0 ? this.scale : _ref29$scale,
                _ref29$rotation = _ref29.rotation,
                e = _ref29$rotation === void 0 ? this.rotation : _ref29$rotation,
                _ref29$offsetX = _ref29.offsetX,
                s = _ref29$offsetX === void 0 ? this.offsetX : _ref29$offsetX,
                _ref29$offsetY = _ref29.offsetY,
                n = _ref29$offsetY === void 0 ? this.offsetY : _ref29$offsetY,
                _ref29$dontFlip = _ref29.dontFlip,
                r = _ref29$dontFlip === void 0 ? !1 : _ref29$dontFlip;
              return new PageViewport({
                viewBox: this.viewBox.slice(),
                scale: t,
                rotation: e,
                offsetX: s,
                offsetY: n,
                dontFlip: r
              });
            }
          }, {
            key: "convertToViewportPoint",
            value: function convertToViewportPoint(t, e) {
              return r.Util.applyTransform([t, e], this.transform);
            }
          }, {
            key: "convertToViewportRectangle",
            value: function convertToViewportRectangle(t) {
              var e = r.Util.applyTransform([t[0], t[1]], this.transform),
                s = r.Util.applyTransform([t[2], t[3]], this.transform);
              return [e[0], e[1], s[0], s[1]];
            }
          }, {
            key: "convertToPdfPoint",
            value: function convertToPdfPoint(t, e) {
              return r.Util.applyInverseTransform([t, e], this.transform);
            }
          }]);
        }();
        e.PageViewport = PageViewport;
        var RenderingCancelledException = /*#__PURE__*/function (_r$BaseException) {
          function RenderingCancelledException(t, e) {
            var _this22;
            _classCallCheck(this, RenderingCancelledException);
            _this22 = _callSuper(this, RenderingCancelledException, [t, "RenderingCancelledException"]);
            _this22.type = e;
            return _this22;
          }
          _inherits(RenderingCancelledException, _r$BaseException);
          return _createClass(RenderingCancelledException);
        }(r.BaseException);
        e.RenderingCancelledException = RenderingCancelledException;
        function isDataScheme(t) {
          var e = t.length;
          var s = 0;
          for (; s < e && "" === t[s].trim();) s++;
          return "data:" === t.substring(s, s + 5).toLowerCase();
        }
        e.StatTimer = /*#__PURE__*/function () {
          function StatTimer() {
            _classCallCheck(this, StatTimer);
            this.started = Object.create(null);
            this.times = [];
          }
          return _createClass(StatTimer, [{
            key: "time",
            value: function time(t) {
              t in this.started && (0, r.warn)("Timer is already running for ".concat(t));
              this.started[t] = Date.now();
            }
          }, {
            key: "timeEnd",
            value: function timeEnd(t) {
              t in this.started || (0, r.warn)("Timer has not been started for ".concat(t));
              this.times.push({
                name: t,
                start: this.started[t],
                end: Date.now()
              });
              delete this.started[t];
            }
          }, {
            key: "toString",
            value: function toString() {
              var t = [];
              var e = 0;
              var _iterator18 = _createForOfIteratorHelper(this.times),
                _step18;
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var _t16 = _step18.value;
                  var _s16 = _t16.name;
                  _s16.length > e && (e = _s16.length);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
              var _iterator19 = _createForOfIteratorHelper(this.times),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _s17 = _step19.value;
                  var _n12 = _s17.end - _s17.start;
                  t.push("".concat(_s17.name.padEnd(e), " ").concat(_n12, "ms\n"));
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
              return t.join("");
            }
          }]);
        }();
        function isValidFetchUrl(t, e) {
          try {
            var _ref30 = e ? new URL(t, e) : new URL(t),
              _s18 = _ref30.protocol;
            return "http:" === _s18 || "https:" === _s18;
          } catch (t) {
            return !1;
          }
        }
        var a;
        e.PDFDateString = /*#__PURE__*/function () {
          function PDFDateString() {
            _classCallCheck(this, PDFDateString);
          }
          return _createClass(PDFDateString, null, [{
            key: "toDateObject",
            value: function toDateObject(t) {
              if (!t || "string" != typeof t) return null;
              a || (a = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
              var e = a.exec(t);
              if (!e) return null;
              var s = parseInt(e[1], 10);
              var n = parseInt(e[2], 10);
              n = n >= 1 && n <= 12 ? n - 1 : 0;
              var r = parseInt(e[3], 10);
              r = r >= 1 && r <= 31 ? r : 1;
              var i = parseInt(e[4], 10);
              i = i >= 0 && i <= 23 ? i : 0;
              var o = parseInt(e[5], 10);
              o = o >= 0 && o <= 59 ? o : 0;
              var l = parseInt(e[6], 10);
              l = l >= 0 && l <= 59 ? l : 0;
              var c = e[7] || "Z";
              var h = parseInt(e[8], 10);
              h = h >= 0 && h <= 23 ? h : 0;
              var d = parseInt(e[9], 10) || 0;
              d = d >= 0 && d <= 59 ? d : 0;
              if ("-" === c) {
                i += h;
                o += d;
              } else if ("+" === c) {
                i -= h;
                o -= d;
              }
              return new Date(Date.UTC(s, n, r, i, o, l));
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
        var n = s(1);
        var BaseCanvasFactory = /*#__PURE__*/function () {
          function BaseCanvasFactory() {
            _classCallCheck(this, BaseCanvasFactory);
            this.constructor === BaseCanvasFactory && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
          }
          return _createClass(BaseCanvasFactory, [{
            key: "create",
            value: function create(t, e) {
              if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
              var s = this._createCanvas(t, e);
              return {
                canvas: s,
                context: s.getContext("2d")
              };
            }
          }, {
            key: "reset",
            value: function reset(t, e, s) {
              if (!t.canvas) throw new Error("Canvas is not specified");
              if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
              t.canvas.width = e;
              t.canvas.height = s;
            }
          }, {
            key: "destroy",
            value: function destroy(t) {
              if (!t.canvas) throw new Error("Canvas is not specified");
              t.canvas.width = 0;
              t.canvas.height = 0;
              t.canvas = null;
              t.context = null;
            }
          }, {
            key: "_createCanvas",
            value: function _createCanvas(t, e) {
              (0, n.unreachable)("Abstract method `_createCanvas` called.");
            }
          }]);
        }();
        e.BaseCanvasFactory = BaseCanvasFactory;
        var BaseCMapReaderFactory = /*#__PURE__*/function () {
          function BaseCMapReaderFactory(_ref31) {
            var _ref31$baseUrl = _ref31.baseUrl,
              t = _ref31$baseUrl === void 0 ? null : _ref31$baseUrl,
              _ref31$isCompressed = _ref31.isCompressed,
              e = _ref31$isCompressed === void 0 ? !1 : _ref31$isCompressed;
            _classCallCheck(this, BaseCMapReaderFactory);
            this.constructor === BaseCMapReaderFactory && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory.");
            this.baseUrl = t;
            this.isCompressed = e;
          }
          return _createClass(BaseCMapReaderFactory, [{
            key: "fetch",
            value: function () {
              var _fetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref32) {
                var _this23 = this;
                var t, e, s;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      t = _ref32.name;
                      if (this.baseUrl) {
                        _context9.next = 3;
                        break;
                      }
                      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                    case 3:
                      if (t) {
                        _context9.next = 5;
                        break;
                      }
                      throw new Error("CMap name must be specified.");
                    case 5:
                      e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), s = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
                      return _context9.abrupt("return", this._fetchData(e, s).catch(function (t) {
                        throw new Error("Unable to load ".concat(_this23.isCompressed ? "binary " : "", "CMap at: ").concat(e));
                      }));
                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, this);
              }));
              function fetch(_x6) {
                return _fetch.apply(this, arguments);
              }
              return fetch;
            }()
          }, {
            key: "_fetchData",
            value: function _fetchData(t, e) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }]);
        }();
        e.BaseCMapReaderFactory = BaseCMapReaderFactory;
        var BaseStandardFontDataFactory = /*#__PURE__*/function () {
          function BaseStandardFontDataFactory(_ref33) {
            var _ref33$baseUrl = _ref33.baseUrl,
              t = _ref33$baseUrl === void 0 ? null : _ref33$baseUrl;
            _classCallCheck(this, BaseStandardFontDataFactory);
            this.constructor === BaseStandardFontDataFactory && (0, n.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
            this.baseUrl = t;
          }
          return _createClass(BaseStandardFontDataFactory, [{
            key: "fetch",
            value: function () {
              var _fetch2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref34) {
                var t, e;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      t = _ref34.filename;
                      if (this.baseUrl) {
                        _context10.next = 3;
                        break;
                      }
                      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                    case 3:
                      if (t) {
                        _context10.next = 5;
                        break;
                      }
                      throw new Error("Font filename must be specified.");
                    case 5:
                      e = "".concat(this.baseUrl).concat(t);
                      return _context10.abrupt("return", this._fetchData(e).catch(function (t) {
                        throw new Error("Unable to load font data at: ".concat(e));
                      }));
                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, this);
              }));
              function fetch(_x7) {
                return _fetch2.apply(this, arguments);
              }
              return fetch;
            }()
          }, {
            key: "_fetchData",
            value: function _fetchData(t) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }]);
        }();
        e.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
        var BaseSVGFactory = /*#__PURE__*/function () {
          function BaseSVGFactory() {
            _classCallCheck(this, BaseSVGFactory);
            this.constructor === BaseSVGFactory && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
          }
          return _createClass(BaseSVGFactory, [{
            key: "create",
            value: function create(t, e) {
              if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
              var s = this._createSVG("svg:svg");
              s.setAttribute("version", "1.1");
              s.setAttribute("width", "".concat(t, "px"));
              s.setAttribute("height", "".concat(e, "px"));
              s.setAttribute("preserveAspectRatio", "none");
              s.setAttribute("viewBox", "0 0 ".concat(t, " ").concat(e));
              return s;
            }
          }, {
            key: "createElement",
            value: function createElement(t) {
              if ("string" != typeof t) throw new Error("Invalid SVG element type");
              return this._createSVG(t);
            }
          }, {
            key: "_createSVG",
            value: function _createSVG(t) {
              (0, n.unreachable)("Abstract method `_createSVG` called.");
            }
          }]);
        }();
        e.BaseSVGFactory = BaseSVGFactory;
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.FontLoader = e.FontFaceObject = void 0;
        var n = s(1);
        var BaseFontLoader = /*#__PURE__*/function () {
          function BaseFontLoader(_ref35) {
            var t = _ref35.docId,
              e = _ref35.onUnsupportedFeature,
              _ref35$ownerDocument = _ref35.ownerDocument,
              s = _ref35$ownerDocument === void 0 ? globalThis.document : _ref35$ownerDocument,
              _ref35$styleElement = _ref35.styleElement,
              r = _ref35$styleElement === void 0 ? null : _ref35$styleElement;
            _classCallCheck(this, BaseFontLoader);
            this.constructor === BaseFontLoader && (0, n.unreachable)("Cannot initialize BaseFontLoader.");
            this.docId = t;
            this._onUnsupportedFeature = e;
            this._document = s;
            this.nativeFontFaces = [];
            this.styleElement = null;
          }
          return _createClass(BaseFontLoader, [{
            key: "addNativeFontFace",
            value: function addNativeFontFace(t) {
              this.nativeFontFaces.push(t);
              this._document.fonts.add(t);
            }
          }, {
            key: "insertRule",
            value: function insertRule(t) {
              var e = this.styleElement;
              if (!e) {
                e = this.styleElement = this._document.createElement("style");
                e.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
                this._document.documentElement.getElementsByTagName("head")[0].appendChild(e);
              }
              var s = e.sheet;
              s.insertRule(t, s.cssRules.length);
            }
          }, {
            key: "clear",
            value: function clear() {
              var _iterator20 = _createForOfIteratorHelper(this.nativeFontFaces),
                _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _t18 = _step20.value;
                  this._document.fonts.delete(_t18);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
              this.nativeFontFaces.length = 0;
              if (this.styleElement) {
                this.styleElement.remove();
                this.styleElement = null;
              }
            }
          }, {
            key: "bind",
            value: function () {
              var _bind = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(t) {
                var _this24 = this;
                var _e14, e;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(t.attached || t.missingFile)) {
                        _context11.next = 2;
                        break;
                      }
                      return _context11.abrupt("return");
                    case 2:
                      t.attached = !0;
                      if (!this.isFontLoadingAPISupported) {
                        _context11.next = 19;
                        break;
                      }
                      _e14 = t.createNativeFontFace();
                      if (!_e14) {
                        _context11.next = 18;
                        break;
                      }
                      this.addNativeFontFace(_e14);
                      _context11.prev = 7;
                      _context11.next = 10;
                      return _e14.loaded;
                    case 10:
                      _context11.next = 18;
                      break;
                    case 12:
                      _context11.prev = 12;
                      _context11.t0 = _context11["catch"](7);
                      this._onUnsupportedFeature({
                        featureId: n.UNSUPPORTED_FEATURES.errorFontLoadNative
                      });
                      (0, n.warn)("Failed to load font '".concat(_e14.family, "': '").concat(_context11.t0, "'."));
                      t.disableFontFace = !0;
                      throw _context11.t0;
                    case 18:
                      return _context11.abrupt("return");
                    case 19:
                      e = t.createFontFaceRule();
                      if (!e) {
                        _context11.next = 26;
                        break;
                      }
                      this.insertRule(e);
                      if (!this.isSyncFontLoadingSupported) {
                        _context11.next = 24;
                        break;
                      }
                      return _context11.abrupt("return");
                    case 24:
                      _context11.next = 26;
                      return new Promise(function (s) {
                        var n = _this24._queueLoadingCallback(s);
                        _this24._prepareFontLoadEvent([e], [t], n);
                      });
                    case 26:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, this, [[7, 12]]);
              }));
              function bind(_x8) {
                return _bind.apply(this, arguments);
              }
              return bind;
            }()
          }, {
            key: "_queueLoadingCallback",
            value: function _queueLoadingCallback(t) {
              (0, n.unreachable)("Abstract method `_queueLoadingCallback`.");
            }
          }, {
            key: "isFontLoadingAPISupported",
            get: function get() {
              var _this$_document;
              var t = !!((_this$_document = this._document) !== null && _this$_document !== void 0 && _this$_document.fonts);
              return (0, n.shadow)(this, "isFontLoadingAPISupported", t);
            }
          }, {
            key: "isSyncFontLoadingSupported",
            get: function get() {
              (0, n.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
            }
          }, {
            key: "_loadTestFont",
            get: function get() {
              (0, n.unreachable)("Abstract method `_loadTestFont`.");
            }
          }, {
            key: "_prepareFontLoadEvent",
            value: function _prepareFontLoadEvent(t, e, s) {
              (0, n.unreachable)("Abstract method `_prepareFontLoadEvent`.");
            }
          }]);
        }();
        var r;
        e.FontLoader = r;
        e.FontLoader = r = /*#__PURE__*/function (_BaseFontLoader) {
          function GenericFontLoader(t) {
            var _this25;
            _classCallCheck(this, GenericFontLoader);
            _this25 = _callSuper(this, GenericFontLoader, [t]);
            _this25.loadingContext = {
              requests: [],
              nextRequestId: 0
            };
            _this25.loadTestFontId = 0;
            return _this25;
          }
          _inherits(GenericFontLoader, _BaseFontLoader);
          return _createClass(GenericFontLoader, [{
            key: "isSyncFontLoadingSupported",
            get: function get() {
              var t = !1;
              if ("undefined" == typeof navigator) t = !0;else {
                var _exec;
                ((_exec = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)) === null || _exec === void 0 ? void 0 : _exec[1]) >= 14 && (t = !0);
              }
              return (0, n.shadow)(this, "isSyncFontLoadingSupported", t);
            }
          }, {
            key: "_queueLoadingCallback",
            value: function _queueLoadingCallback(t) {
              var e = this.loadingContext,
                s = {
                  id: "pdfjs-font-loading-" + e.nextRequestId++,
                  done: !1,
                  complete: function completeRequest() {
                    (0, n.assert)(!s.done, "completeRequest() cannot be called twice.");
                    s.done = !0;
                    for (; e.requests.length > 0 && e.requests[0].done;) {
                      var _t19 = e.requests.shift();
                      setTimeout(_t19.callback, 0);
                    }
                  },
                  callback: t
                };
              e.requests.push(s);
              return s;
            }
          }, {
            key: "_loadTestFont",
            get: function get() {
              return (0, n.shadow)(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
            }
          }, {
            key: "_prepareFontLoadEvent",
            value: function _prepareFontLoadEvent(t, e, s) {
              function int32(t, e) {
                return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3);
              }
              function spliceString(t, e, s, n) {
                return t.substring(0, e) + n + t.substring(e + s);
              }
              var r, a;
              var i = this._document.createElement("canvas");
              i.width = 1;
              i.height = 1;
              var o = i.getContext("2d");
              var l = 0;
              var c = "lt".concat(Date.now()).concat(this.loadTestFontId++);
              var h = this._loadTestFont;
              h = spliceString(h, 976, c.length, c);
              var d = 1482184792;
              var u = int32(h, 16);
              for (r = 0, a = c.length - 3; r < a; r += 4) u = u - d + int32(c, r) | 0;
              r < c.length && (u = u - d + int32(c + "XXX", r) | 0);
              h = spliceString(h, 16, 4, (0, n.string32)(u));
              var p = "@font-face {font-family:\"".concat(c, "\";src:", "url(data:font/opentype;base64,".concat(btoa(h), ");"), "}");
              this.insertRule(p);
              var f = [];
              var _iterator21 = _createForOfIteratorHelper(e),
                _step21;
              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _t21 = _step21.value;
                  f.push(_t21.loadedName);
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
              f.push(c);
              var g = this._document.createElement("div");
              g.style.visibility = "hidden";
              g.style.width = g.style.height = "10px";
              g.style.position = "absolute";
              g.style.top = g.style.left = "0px";
              for (var _i3 = 0, _f = f; _i3 < _f.length; _i3++) {
                var _t20 = _f[_i3];
                var _e15 = this._document.createElement("span");
                _e15.textContent = "Hi";
                _e15.style.fontFamily = _t20;
                g.appendChild(_e15);
              }
              this._document.body.appendChild(g);
              !function isFontReady(t, e) {
                l++;
                if (l > 30) {
                  (0, n.warn)("Load test font never loaded.");
                  e();
                  return;
                }
                o.font = "30px " + t;
                o.fillText(".", 0, 20);
                o.getImageData(0, 0, 1, 1).data[3] > 0 ? e() : setTimeout(isFontReady.bind(null, t, e));
              }(c, function () {
                g.remove();
                s.complete();
              });
            }
          }]);
        }(BaseFontLoader);
        e.FontFaceObject = /*#__PURE__*/function () {
          function FontFaceObject(t, _ref36) {
            var _ref36$isEvalSupporte = _ref36.isEvalSupported,
              e = _ref36$isEvalSupporte === void 0 ? !0 : _ref36$isEvalSupporte,
              _ref36$disableFontFac = _ref36.disableFontFace,
              s = _ref36$disableFontFac === void 0 ? !1 : _ref36$disableFontFac,
              _ref36$ignoreErrors = _ref36.ignoreErrors,
              n = _ref36$ignoreErrors === void 0 ? !1 : _ref36$ignoreErrors,
              r = _ref36.onUnsupportedFeature,
              _ref36$fontRegistry = _ref36.fontRegistry,
              a = _ref36$fontRegistry === void 0 ? null : _ref36$fontRegistry;
            _classCallCheck(this, FontFaceObject);
            this.compiledGlyphs = Object.create(null);
            for (var _e16 in t) this[_e16] = t[_e16];
            this.isEvalSupported = !1 !== e;
            this.disableFontFace = !0 === s;
            this.ignoreErrors = !0 === n;
            this._onUnsupportedFeature = r;
            this.fontRegistry = a;
          }
          return _createClass(FontFaceObject, [{
            key: "createNativeFontFace",
            value: function createNativeFontFace() {
              if (!this.data || this.disableFontFace) return null;
              var t;
              if (this.cssFontInfo) {
                var _e17 = {
                  weight: this.cssFontInfo.fontWeight
                };
                this.cssFontInfo.italicAngle && (_e17.style = "oblique ".concat(this.cssFontInfo.italicAngle, "deg"));
                t = new FontFace(this.cssFontInfo.fontFamily, this.data, _e17);
              } else t = new FontFace(this.loadedName, this.data, {});
              this.fontRegistry && this.fontRegistry.registerFont(this);
              return t;
            }
          }, {
            key: "createFontFaceRule",
            value: function createFontFaceRule() {
              if (!this.data || this.disableFontFace) return null;
              var t = (0, n.bytesToString)(this.data),
                e = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(t), ");");
              var s;
              if (this.cssFontInfo) {
                var _t22 = "font-weight: ".concat(this.cssFontInfo.fontWeight, ";");
                this.cssFontInfo.italicAngle && (_t22 += "font-style: oblique ".concat(this.cssFontInfo.italicAngle, "deg;"));
                s = "@font-face {font-family:\"".concat(this.cssFontInfo.fontFamily, "\";").concat(_t22, "src:").concat(e, "}");
              } else s = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(e, "}");
              this.fontRegistry && this.fontRegistry.registerFont(this, e);
              return s;
            }
          }, {
            key: "getPathGenerator",
            value: function getPathGenerator(t, e) {
              if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
              var s;
              try {
                s = t.get(this.loadedName + "_path_" + e);
              } catch (t) {
                if (!this.ignoreErrors) throw t;
                this._onUnsupportedFeature({
                  featureId: n.UNSUPPORTED_FEATURES.errorFontGetPath
                });
                (0, n.warn)("getPathGenerator - ignoring character: \"".concat(t, "\"."));
                return this.compiledGlyphs[e] = function (t, e) {};
              }
              if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                var _t23 = [];
                var _iterator22 = _createForOfIteratorHelper(s),
                  _step22;
                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _e18 = _step22.value;
                    var _s20 = void 0 !== _e18.args ? _e18.args.join(",") : "";
                    _t23.push("c.", _e18.cmd, "(", _s20, ");\n");
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
                return this.compiledGlyphs[e] = new Function("c", "size", _t23.join(""));
              }
              return this.compiledGlyphs[e] = function (t, e) {
                var _iterator23 = _createForOfIteratorHelper(s),
                  _step23;
                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var _n13 = _step23.value;
                    "scale" === _n13.cmd && (_n13.args = [e, -e]);
                    t[_n13.cmd].apply(t, _n13.args);
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }
              };
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.AnnotationStorage = void 0;
        var n = s(9),
          r = s(1);
        e.AnnotationStorage = /*#__PURE__*/function () {
          function AnnotationStorage() {
            _classCallCheck(this, AnnotationStorage);
            this._storage = new Map();
            this._modified = !1;
            this.onSetModified = null;
            this.onResetModified = null;
          }
          return _createClass(AnnotationStorage, [{
            key: "getValue",
            value: function getValue(t, e) {
              var s = this._storage.get(t);
              return void 0 === s ? e : Object.assign(e, s);
            }
          }, {
            key: "getRawValue",
            value: function getRawValue(t) {
              return this._storage.get(t);
            }
          }, {
            key: "setValue",
            value: function setValue(t, e) {
              var s = this._storage.get(t);
              var n = !1;
              if (void 0 !== s) {
                for (var _i4 = 0, _Object$entries = Object.entries(e); _i4 < _Object$entries.length; _i4++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
                    _t24 = _Object$entries$_i[0],
                    _r4 = _Object$entries$_i[1];
                  if (s[_t24] !== _r4) {
                    n = !0;
                    s[_t24] = _r4;
                  }
                }
              } else {
                n = !0;
                this._storage.set(t, e);
              }
              n && this._setModified();
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return this._storage.size > 0 ? (0, r.objectFromMap)(this._storage) : null;
            }
          }, {
            key: "size",
            get: function get() {
              return this._storage.size;
            }
          }, {
            key: "_setModified",
            value: function _setModified() {
              if (!this._modified) {
                this._modified = !0;
                "function" == typeof this.onSetModified && this.onSetModified();
              }
            }
          }, {
            key: "resetModified",
            value: function resetModified() {
              if (this._modified) {
                this._modified = !1;
                "function" == typeof this.onResetModified && this.onResetModified();
              }
            }
          }, {
            key: "serializable",
            get: function get() {
              return this._storage.size > 0 ? this._storage : null;
            }
          }, {
            key: "hash",
            get: function get() {
              var t = new n.MurmurHash3_64();
              var _iterator24 = _createForOfIteratorHelper(this._storage),
                _step24;
              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _step24$value = _slicedToArray(_step24.value, 2),
                    _e19 = _step24$value[0],
                    _s21 = _step24$value[1];
                  t.update("".concat(_e19, ":").concat(JSON.stringify(_s21)));
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
              return t.hexdigest();
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.MurmurHash3_64 = void 0;
        var n = s(1);
        var r = 3285377520,
          a = 4294901760,
          i = 65535;
        e.MurmurHash3_64 = /*#__PURE__*/function () {
          function MurmurHash3_64(t) {
            _classCallCheck(this, MurmurHash3_64);
            this.h1 = t ? 4294967295 & t : r;
            this.h2 = t ? 4294967295 & t : r;
          }
          return _createClass(MurmurHash3_64, [{
            key: "update",
            value: function update(t) {
              var e, s;
              if ("string" == typeof t) {
                e = new Uint8Array(2 * t.length);
                s = 0;
                for (var _n14 = 0, _r5 = t.length; _n14 < _r5; _n14++) {
                  var _r6 = t.charCodeAt(_n14);
                  if (_r6 <= 255) e[s++] = _r6;else {
                    e[s++] = _r6 >>> 8;
                    e[s++] = 255 & _r6;
                  }
                }
              } else {
                if (!(0, n.isArrayBuffer)(t)) throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
                e = t.slice();
                s = e.byteLength;
              }
              var r = s >> 2,
                o = s - 4 * r,
                l = new Uint32Array(e.buffer, 0, r);
              var c = 0,
                h = 0,
                d = this.h1,
                u = this.h2;
              var p = 3432918353,
                f = 461845907,
                g = 11601,
                m = 13715;
              for (var _t25 = 0; _t25 < r; _t25++) if (1 & _t25) {
                c = l[_t25];
                c = c * p & a | c * g & i;
                c = c << 15 | c >>> 17;
                c = c * f & a | c * m & i;
                d ^= c;
                d = d << 13 | d >>> 19;
                d = 5 * d + 3864292196;
              } else {
                h = l[_t25];
                h = h * p & a | h * g & i;
                h = h << 15 | h >>> 17;
                h = h * f & a | h * m & i;
                u ^= h;
                u = u << 13 | u >>> 19;
                u = 5 * u + 3864292196;
              }
              c = 0;
              switch (o) {
                case 3:
                  c ^= e[4 * r + 2] << 16;
                case 2:
                  c ^= e[4 * r + 1] << 8;
                case 1:
                  c ^= e[4 * r];
                  c = c * p & a | c * g & i;
                  c = c << 15 | c >>> 17;
                  c = c * f & a | c * m & i;
                  1 & r ? d ^= c : u ^= c;
              }
              this.h1 = d;
              this.h2 = u;
            }
          }, {
            key: "hexdigest",
            value: function hexdigest() {
              var t = this.h1,
                e = this.h2;
              t ^= e >>> 1;
              t = 3981806797 * t & a | 36045 * t & i;
              e = 4283543511 * e & a | (2950163797 * (e << 16 | t >>> 16) & a) >>> 16;
              t ^= e >>> 1;
              t = 444984403 * t & a | 60499 * t & i;
              e = 3301882366 * e & a | (3120437893 * (e << 16 | t >>> 16) & a) >>> 16;
              t ^= e >>> 1;
              var s = (t >>> 0).toString(16),
                n = (e >>> 0).toString(16);
              return s.padStart(8, "0") + n.padStart(8, "0");
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.CanvasGraphics = void 0;
        var n = s(1),
          r = s(11),
          a = s(12),
          i = s(3),
          o = s(5);
        var l = 4096,
          c = 16;
        function addContextCurrentTransform(t) {
          t._transformStack && (t._transformStack = []);
          if (!t.mozCurrentTransform) {
            t._originalSave = t.save;
            t._originalRestore = t.restore;
            t._originalRotate = t.rotate;
            t._originalScale = t.scale;
            t._originalTranslate = t.translate;
            t._originalTransform = t.transform;
            t._originalSetTransform = t.setTransform;
            t._originalResetTransform = t.resetTransform;
            t._transformMatrix = t._transformMatrix || [1, 0, 0, 1, 0, 0];
            t._transformStack = [];
            try {
              var _e20 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "lineWidth");
              t._setLineWidth = _e20.set;
              t._getLineWidth = _e20.get;
              Object.defineProperty(t, "lineWidth", {
                set: function setLineWidth(t) {
                  this._setLineWidth(1.000001 * t);
                },
                get: function getLineWidth() {
                  return this._getLineWidth();
                }
              });
            } catch (t) {}
            Object.defineProperty(t, "mozCurrentTransform", {
              get: function getCurrentTransform() {
                return this._transformMatrix;
              }
            });
            Object.defineProperty(t, "mozCurrentTransformInverse", {
              get: function getCurrentTransformInverse() {
                var _this$_transformMatri = _slicedToArray(this._transformMatrix, 6),
                  t = _this$_transformMatri[0],
                  e = _this$_transformMatri[1],
                  s = _this$_transformMatri[2],
                  n = _this$_transformMatri[3],
                  r = _this$_transformMatri[4],
                  a = _this$_transformMatri[5],
                  i = t * n - e * s,
                  o = e * s - t * n;
                return [n / i, e / o, s / o, t / i, (n * r - s * a) / o, (e * r - t * a) / i];
              }
            });
            t.save = function ctxSave() {
              var t = this._transformMatrix;
              this._transformStack.push(t);
              this._transformMatrix = t.slice(0, 6);
              this._originalSave();
            };
            t.restore = function ctxRestore() {
              0 === this._transformStack.length && (0, n.warn)("Tried to restore a ctx when the stack was already empty.");
              var t = this._transformStack.pop();
              if (t) {
                this._transformMatrix = t;
                this._originalRestore();
              }
            };
            t.translate = function ctxTranslate(t, e) {
              var s = this._transformMatrix;
              s[4] = s[0] * t + s[2] * e + s[4];
              s[5] = s[1] * t + s[3] * e + s[5];
              this._originalTranslate(t, e);
            };
            t.scale = function ctxScale(t, e) {
              var s = this._transformMatrix;
              s[0] *= t;
              s[1] *= t;
              s[2] *= e;
              s[3] *= e;
              this._originalScale(t, e);
            };
            t.transform = function ctxTransform(e, s, n, r, a, i) {
              var o = this._transformMatrix;
              this._transformMatrix = [o[0] * e + o[2] * s, o[1] * e + o[3] * s, o[0] * n + o[2] * r, o[1] * n + o[3] * r, o[0] * a + o[2] * i + o[4], o[1] * a + o[3] * i + o[5]];
              t._originalTransform(e, s, n, r, a, i);
            };
            t.setTransform = function ctxSetTransform(e, s, n, r, a, i) {
              this._transformMatrix = [e, s, n, r, a, i];
              t._originalSetTransform(e, s, n, r, a, i);
            };
            t.resetTransform = function ctxResetTransform() {
              this._transformMatrix = [1, 0, 0, 1, 0, 0];
              t._originalResetTransform();
            };
            t.rotate = function ctxRotate(t) {
              var e = Math.cos(t),
                s = Math.sin(t),
                n = this._transformMatrix;
              this._transformMatrix = [n[0] * e + n[2] * s, n[1] * e + n[3] * s, n[0] * -s + n[2] * e, n[1] * -s + n[3] * e, n[4], n[5]];
              this._originalRotate(t);
            };
          }
        }
        var CachedCanvases = /*#__PURE__*/function () {
          function CachedCanvases(t) {
            _classCallCheck(this, CachedCanvases);
            this.canvasFactory = t;
            this.cache = Object.create(null);
          }
          return _createClass(CachedCanvases, [{
            key: "getCanvas",
            value: function getCanvas(t, e, s, n) {
              var r;
              if (void 0 !== this.cache[t]) {
                r = this.cache[t];
                this.canvasFactory.reset(r, e, s);
                r.context.setTransform(1, 0, 0, 1, 0, 0);
              } else {
                r = this.canvasFactory.create(e, s);
                this.cache[t] = r;
              }
              n && addContextCurrentTransform(r.context);
              return r;
            }
          }, {
            key: "delete",
            value: function _delete(t) {
              delete this.cache[t];
            }
          }, {
            key: "clear",
            value: function clear() {
              for (var _t26 in this.cache) {
                var _e21 = this.cache[_t26];
                this.canvasFactory.destroy(_e21);
                delete this.cache[_t26];
              }
            }
          }]);
        }();
        function drawImageAtIntegerCoords(t, e, s, n, r, a, i, o, l, c) {
          var _t$mozCurrentTransfor = _slicedToArray(t.mozCurrentTransform, 6),
            h = _t$mozCurrentTransfor[0],
            d = _t$mozCurrentTransfor[1],
            u = _t$mozCurrentTransfor[2],
            p = _t$mozCurrentTransfor[3],
            f = _t$mozCurrentTransfor[4],
            g = _t$mozCurrentTransfor[5];
          if (0 === d && 0 === u) {
            var m = i * h + f,
              _ = Math.round(m),
              A = o * p + g,
              b = Math.round(A),
              y = (i + l) * h + f,
              S = Math.abs(Math.round(y) - _) || 1,
              x = (o + c) * p + g,
              v = Math.abs(Math.round(x) - b) || 1;
            t.setTransform(Math.sign(h), 0, 0, Math.sign(p), _, b);
            t.drawImage(e, s, n, r, a, 0, 0, S, v);
            t.setTransform(h, d, u, p, f, g);
            return [S, v];
          }
          if (0 === h && 0 === p) {
            var _m = o * u + f,
              _2 = Math.round(_m),
              _A = i * d + g,
              _b = Math.round(_A),
              _y = (o + c) * u + f,
              _S = Math.abs(Math.round(_y) - _2) || 1,
              _x9 = (i + l) * d + g,
              _v = Math.abs(Math.round(_x9) - _b) || 1;
            t.setTransform(0, Math.sign(d), Math.sign(u), 0, _2, _b);
            t.drawImage(e, s, n, r, a, 0, 0, _v, _S);
            t.setTransform(h, d, u, p, f, g);
            return [_v, _S];
          }
          t.drawImage(e, s, n, r, a, i, o, l, c);
          return [Math.hypot(h, d) * l, Math.hypot(u, p) * c];
        }
        var CanvasExtraState = /*#__PURE__*/function () {
          function CanvasExtraState(t, e) {
            _classCallCheck(this, CanvasExtraState);
            this.alphaIsShape = !1;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = n.IDENTITY_MATRIX;
            this.textMatrixScale = 1;
            this.fontMatrix = n.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = n.TextRenderingMode.FILL;
            this.textRise = 0;
            this.fillColor = "#000000";
            this.strokeColor = "#000000";
            this.patternFill = !1;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.transferMaps = null;
            this.startNewPathAndClipBox([0, 0, t, e]);
          }
          return _createClass(CanvasExtraState, [{
            key: "clone",
            value: function clone() {
              var t = Object.create(this);
              t.clipBox = this.clipBox.slice();
              return t;
            }
          }, {
            key: "setCurrentPoint",
            value: function setCurrentPoint(t, e) {
              this.x = t;
              this.y = e;
            }
          }, {
            key: "updatePathMinMax",
            value: function updatePathMinMax(t, e, s) {
              var _n$Util$applyTransfor = n.Util.applyTransform([e, s], t);
              var _n$Util$applyTransfor2 = _slicedToArray(_n$Util$applyTransfor, 2);
              e = _n$Util$applyTransfor2[0];
              s = _n$Util$applyTransfor2[1];
              this.minX = Math.min(this.minX, e);
              this.minY = Math.min(this.minY, s);
              this.maxX = Math.max(this.maxX, e);
              this.maxY = Math.max(this.maxY, s);
            }
          }, {
            key: "updateRectMinMax",
            value: function updateRectMinMax(t, e) {
              var s = n.Util.applyTransform(e, t),
                r = n.Util.applyTransform(e.slice(2), t);
              this.minX = Math.min(this.minX, s[0], r[0]);
              this.minY = Math.min(this.minY, s[1], r[1]);
              this.maxX = Math.max(this.maxX, s[0], r[0]);
              this.maxY = Math.max(this.maxY, s[1], r[1]);
            }
          }, {
            key: "updateScalingPathMinMax",
            value: function updateScalingPathMinMax(t, e) {
              n.Util.scaleMinMax(t, e);
              this.minX = Math.min(this.minX, e[0]);
              this.maxX = Math.max(this.maxX, e[1]);
              this.minY = Math.min(this.minY, e[2]);
              this.maxY = Math.max(this.maxY, e[3]);
            }
          }, {
            key: "updateCurvePathMinMax",
            value: function updateCurvePathMinMax(t, e, s, r, a, i, o, l, c, h) {
              var d = n.Util.bezierBoundingBox(e, s, r, a, i, o, l, c);
              if (h) {
                h[0] = Math.min(h[0], d[0], d[2]);
                h[1] = Math.max(h[1], d[0], d[2]);
                h[2] = Math.min(h[2], d[1], d[3]);
                h[3] = Math.max(h[3], d[1], d[3]);
              } else this.updateRectMinMax(t, d);
            }
          }, {
            key: "getPathBoundingBox",
            value: function getPathBoundingBox() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.PathType.FILL;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var s = [this.minX, this.minY, this.maxX, this.maxY];
              if (t === r.PathType.STROKE) {
                e || (0, n.unreachable)("Stroke bounding box must include transform.");
                var _t27 = n.Util.singularValueDecompose2dScale(e),
                  _r7 = _t27[0] * this.lineWidth / 2,
                  _a11 = _t27[1] * this.lineWidth / 2;
                s[0] -= _r7;
                s[1] -= _a11;
                s[2] += _r7;
                s[3] += _a11;
              }
              return s;
            }
          }, {
            key: "updateClipFromPath",
            value: function updateClipFromPath() {
              var t = n.Util.intersect(this.clipBox, this.getPathBoundingBox());
              this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
            }
          }, {
            key: "isEmptyClip",
            value: function isEmptyClip() {
              return this.minX === 1 / 0;
            }
          }, {
            key: "startNewPathAndClipBox",
            value: function startNewPathAndClipBox(t) {
              this.clipBox = t;
              this.minX = 1 / 0;
              this.minY = 1 / 0;
              this.maxX = 0;
              this.maxY = 0;
            }
          }, {
            key: "getClippedPathBoundingBox",
            value: function getClippedPathBoundingBox() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.PathType.FILL;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              return n.Util.intersect(this.clipBox, this.getPathBoundingBox(t, e));
            }
          }]);
        }();
        function putBinaryImageData(t, e) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          if ("undefined" != typeof ImageData && e instanceof ImageData) {
            t.putImageData(e, 0, 0);
            return;
          }
          var r = e.height,
            a = e.width,
            i = r % c,
            o = (r - i) / c,
            l = 0 === i ? o : o + 1,
            h = t.createImageData(a, c);
          var d,
            u = 0;
          var p = e.data,
            f = h.data;
          var g, m, _, A, b, y, S, x;
          if (s) switch (s.length) {
            case 1:
              b = s[0];
              y = s[0];
              S = s[0];
              x = s[0];
              break;
            case 4:
              b = s[0];
              y = s[1];
              S = s[2];
              x = s[3];
          }
          if (e.kind === n.ImageKind.GRAYSCALE_1BPP) {
            var _ref37;
            var _e22 = p.byteLength,
              _s22 = new Uint32Array(f.buffer, 0, f.byteLength >> 2),
              _r8 = _s22.length,
              _A2 = a + 7 >> 3;
            var _b2 = 4294967295,
              _y2 = n.FeatureTest.isLittleEndian ? 4278190080 : 255;
            x && 255 === x[0] && 0 === x[255] && (_ref37 = [_y2, _b2], _b2 = _ref37[0], _y2 = _ref37[1], _ref37);
            for (g = 0; g < l; g++) {
              _ = g < o ? c : i;
              d = 0;
              for (m = 0; m < _; m++) {
                var _t28 = _e22 - u;
                var _n15 = 0;
                var _r9 = _t28 > _A2 ? a : 8 * _t28 - 7,
                  _i5 = -8 & _r9;
                var _o2 = 0,
                  _l2 = 0;
                for (; _n15 < _i5; _n15 += 8) {
                  _l2 = p[u++];
                  _s22[d++] = 128 & _l2 ? _b2 : _y2;
                  _s22[d++] = 64 & _l2 ? _b2 : _y2;
                  _s22[d++] = 32 & _l2 ? _b2 : _y2;
                  _s22[d++] = 16 & _l2 ? _b2 : _y2;
                  _s22[d++] = 8 & _l2 ? _b2 : _y2;
                  _s22[d++] = 4 & _l2 ? _b2 : _y2;
                  _s22[d++] = 2 & _l2 ? _b2 : _y2;
                  _s22[d++] = 1 & _l2 ? _b2 : _y2;
                }
                for (; _n15 < _r9; _n15++) {
                  if (0 === _o2) {
                    _l2 = p[u++];
                    _o2 = 128;
                  }
                  _s22[d++] = _l2 & _o2 ? _b2 : _y2;
                  _o2 >>= 1;
                }
              }
              for (; d < _r8;) _s22[d++] = 0;
              t.putImageData(h, 0, g * c);
            }
          } else if (e.kind === n.ImageKind.RGBA_32BPP) {
            var _e23 = !!(b || y || S);
            m = 0;
            A = a * c * 4;
            for (g = 0; g < o; g++) {
              f.set(p.subarray(u, u + A));
              u += A;
              if (_e23) for (var _t29 = 0; _t29 < A; _t29 += 4) {
                b && (f[_t29 + 0] = b[f[_t29 + 0]]);
                y && (f[_t29 + 1] = y[f[_t29 + 1]]);
                S && (f[_t29 + 2] = S[f[_t29 + 2]]);
              }
              t.putImageData(h, 0, m);
              m += c;
            }
            if (g < l) {
              A = a * i * 4;
              f.set(p.subarray(u, u + A));
              if (_e23) for (var _t30 = 0; _t30 < A; _t30 += 4) {
                b && (f[_t30 + 0] = b[f[_t30 + 0]]);
                y && (f[_t30 + 1] = y[f[_t30 + 1]]);
                S && (f[_t30 + 2] = S[f[_t30 + 2]]);
              }
              t.putImageData(h, 0, m);
            }
          } else {
            if (e.kind !== n.ImageKind.RGB_24BPP) throw new Error("bad image kind: ".concat(e.kind));
            {
              var _e24 = !!(b || y || S);
              _ = c;
              A = a * _;
              for (g = 0; g < l; g++) {
                if (g >= o) {
                  _ = i;
                  A = a * _;
                }
                d = 0;
                for (m = A; m--;) {
                  f[d++] = p[u++];
                  f[d++] = p[u++];
                  f[d++] = p[u++];
                  f[d++] = 255;
                }
                if (_e24) for (var _t31 = 0; _t31 < d; _t31 += 4) {
                  b && (f[_t31 + 0] = b[f[_t31 + 0]]);
                  y && (f[_t31 + 1] = y[f[_t31 + 1]]);
                  S && (f[_t31 + 2] = S[f[_t31 + 2]]);
                }
                t.putImageData(h, 0, g * c);
              }
            }
          }
        }
        function putBinaryImageMask(t, e) {
          if (e.bitmap) {
            t.drawImage(e.bitmap, 0, 0);
            return;
          }
          var s = e.height,
            n = e.width,
            r = s % c,
            i = (s - r) / c,
            o = 0 === r ? i : i + 1,
            l = t.createImageData(n, c);
          var h = 0;
          var d = e.data,
            u = l.data;
          for (var _e25 = 0; _e25 < o; _e25++) {
            var _s23 = _e25 < i ? c : r;
            var _ref38 = (0, a.applyMaskImageData)({
              src: d,
              srcPos: h,
              dest: u,
              width: n,
              height: _s23
            });
            h = _ref38.srcPos;
            t.putImageData(l, 0, _e25 * c);
          }
        }
        function copyCtxState(t, e) {
          var s = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
          for (var _n16 = 0, _r10 = s.length; _n16 < _r10; _n16++) {
            var _r11 = s[_n16];
            void 0 !== t[_r11] && (e[_r11] = t[_r11]);
          }
          if (void 0 !== t.setLineDash) {
            e.setLineDash(t.getLineDash());
            e.lineDashOffset = t.lineDashOffset;
          }
        }
        function resetCtxToDefault(t, e) {
          t.strokeStyle = t.fillStyle = e || "#000000";
          t.fillRule = "nonzero";
          t.globalAlpha = 1;
          t.lineWidth = 1;
          t.lineCap = "butt";
          t.lineJoin = "miter";
          t.miterLimit = 10;
          t.globalCompositeOperation = "source-over";
          t.font = "10px sans-serif";
          if (void 0 !== t.setLineDash) {
            t.setLineDash([]);
            t.lineDashOffset = 0;
          }
        }
        function composeSMaskBackdrop(t, e, s, n) {
          var r = t.length;
          for (var _a12 = 3; _a12 < r; _a12 += 4) {
            var _r12 = t[_a12];
            if (0 === _r12) {
              t[_a12 - 3] = e;
              t[_a12 - 2] = s;
              t[_a12 - 1] = n;
            } else if (_r12 < 255) {
              var _i6 = 255 - _r12;
              t[_a12 - 3] = t[_a12 - 3] * _r12 + e * _i6 >> 8;
              t[_a12 - 2] = t[_a12 - 2] * _r12 + s * _i6 >> 8;
              t[_a12 - 1] = t[_a12 - 1] * _r12 + n * _i6 >> 8;
            }
          }
        }
        function composeSMaskAlpha(t, e, s) {
          var n = t.length;
          for (var _r13 = 3; _r13 < n; _r13 += 4) {
            var _n17 = s ? s[t[_r13]] : t[_r13];
            e[_r13] = e[_r13] * _n17 * .00392156862745098 | 0;
          }
        }
        function composeSMaskLuminosity(t, e, s) {
          var n = t.length;
          for (var _r14 = 3; _r14 < n; _r14 += 4) {
            var _n18 = 77 * t[_r14 - 3] + 152 * t[_r14 - 2] + 28 * t[_r14 - 1];
            e[_r14] = s ? e[_r14] * s[_n18 >> 8] >> 8 : e[_r14] * _n18 >> 16;
          }
        }
        function composeSMask(t, e, s, n) {
          var r = n[0],
            a = n[1],
            i = n[2] - r,
            o = n[3] - a;
          if (0 !== i && 0 !== o) {
            !function genericComposeSMask(t, e, s, n, r, a, i, o, l, c, h) {
              var d = !!a,
                u = d ? a[0] : 0,
                p = d ? a[1] : 0,
                f = d ? a[2] : 0;
              var g;
              g = "Luminosity" === r ? composeSMaskLuminosity : composeSMaskAlpha;
              var m = Math.min(n, Math.ceil(1048576 / s));
              for (var _r15 = 0; _r15 < n; _r15 += m) {
                var _a13 = Math.min(m, n - _r15),
                  _ = t.getImageData(o - c, _r15 + (l - h), s, _a13),
                  A = e.getImageData(o, _r15 + l, s, _a13);
                d && composeSMaskBackdrop(_.data, u, p, f);
                g(_.data, A.data, i);
                e.putImageData(A, o, _r15 + l);
              }
            }(e.context, s, i, o, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY);
            t.save();
            t.globalAlpha = 1;
            t.globalCompositeOperation = "source-over";
            t.setTransform(1, 0, 0, 1, 0, 0);
            t.drawImage(s.canvas, 0, 0);
            t.restore();
          }
        }
        function getImageSmoothingEnabled(t, e) {
          var s = n.Util.singularValueDecompose2dScale(t);
          s[0] = Math.fround(s[0]);
          s[1] = Math.fround(s[1]);
          var r = Math.fround((globalThis.devicePixelRatio || 1) * o.PixelsPerInch.PDF_TO_CSS_UNITS);
          return void 0 !== e ? e : s[0] <= r || s[1] <= r;
        }
        var h = ["butt", "round", "square"],
          d = ["miter", "round", "bevel"],
          u = {},
          p = {};
        var CanvasGraphics = /*#__PURE__*/function () {
          function CanvasGraphics(t, e, s, n, r, a, i, o) {
            _classCallCheck(this, CanvasGraphics);
            this.ctx = t;
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = !1;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = e;
            this.objs = s;
            this.canvasFactory = n;
            this.imageLayer = r;
            this.groupStack = [];
            this.processingType3 = null;
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.suspendedCtx = null;
            this.contentVisible = !0;
            this.markedContentStack = [];
            this.optionalContentConfig = a;
            this.cachedCanvases = new CachedCanvases(this.canvasFactory);
            this.cachedPatterns = new Map();
            this.annotationCanvasMap = i;
            this.viewportScale = 1;
            this.outputScaleX = 1;
            this.outputScaleY = 1;
            this.backgroundColor = (o === null || o === void 0 ? void 0 : o.background) || null;
            this.foregroundColor = (o === null || o === void 0 ? void 0 : o.foreground) || null;
            t && addContextCurrentTransform(t);
            this._cachedScaleForStroking = null;
            this._cachedGetSinglePixelWidth = null;
            this._cachedBitmapsMap = new Map();
          }
          return _createClass(CanvasGraphics, [{
            key: "getObject",
            value: function getObject(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              return "string" == typeof t ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
            }
          }, {
            key: "beginDrawing",
            value: function beginDrawing(_ref39) {
              var t = _ref39.transform,
                e = _ref39.viewport,
                _ref39$transparency = _ref39.transparency,
                s = _ref39$transparency === void 0 ? !1 : _ref39$transparency,
                _ref39$background = _ref39.background,
                n = _ref39$background === void 0 ? null : _ref39$background;
              var r = this.ctx.canvas.width,
                a = this.ctx.canvas.height,
                i = n || "#ffffff";
              this.ctx.save();
              if (this.foregroundColor && this.backgroundColor) {
                this.ctx.fillStyle = this.foregroundColor;
                var _t32 = this.foregroundColor = this.ctx.fillStyle;
                this.ctx.fillStyle = this.backgroundColor;
                var _e26 = this.backgroundColor = this.ctx.fillStyle;
                var _s24 = !0,
                  _n19 = i;
                this.ctx.fillStyle = i;
                _n19 = this.ctx.fillStyle;
                _s24 = "string" == typeof _n19 && /^#[0-9A-Fa-f]{6}$/.test(_n19);
                if ("#000000" === _t32 && "#ffffff" === _e26 || _t32 === _e26 || !_s24) this.foregroundColor = this.backgroundColor = null;else {
                  var _s25 = parseInt(_n19.slice(1), 16),
                    _r16 = (_s25 && 16711680) >> 16,
                    _a14 = (_s25 && 65280) >> 8,
                    _i7 = _s25 && 255,
                    newComp = function newComp(t) {
                      return (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
                    },
                    _o3 = Math.round(.2126 * newComp(_r16) + .7152 * newComp(_a14) + .0722 * newComp(_i7));
                  this.selectColor = function (s, n, r) {
                    var a = .2126 * newComp(s) + .7152 * newComp(n) + .0722 * newComp(r);
                    return Math.round(a) === _o3 ? _e26 : _t32;
                  };
                }
              }
              this.ctx.fillStyle = this.backgroundColor || i;
              this.ctx.fillRect(0, 0, r, a);
              this.ctx.restore();
              if (s) {
                var _t33 = this.cachedCanvases.getCanvas("transparent", r, a, !0);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = _t33.canvas;
                this.ctx = _t33.context;
                this.ctx.save();
                this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx, this.foregroundColor);
              if (t) {
                this.ctx.transform.apply(this.ctx, t);
                this.outputScaleX = t[0];
                this.outputScaleY = t[0];
              }
              this.ctx.transform.apply(this.ctx, e.transform);
              this.viewportScale = e.scale;
              this.baseTransform = this.ctx.mozCurrentTransform.slice();
              this.imageLayer && this.imageLayer.beginLayout();
            }
          }, {
            key: "executeOperatorList",
            value: function executeOperatorList(t, e, s, r) {
              var a = t.argsArray,
                i = t.fnArray;
              var o = e || 0;
              var l = a.length;
              if (l === o) return o;
              var c = l - o > 10 && "function" == typeof s,
                h = c ? Date.now() + 15 : 0;
              var d = 0;
              var u = this.commonObjs,
                p = this.objs;
              var f;
              for (;;) {
                if (void 0 !== r && o === r.nextBreakPoint) {
                  r.breakIt(o, s);
                  return o;
                }
                f = i[o];
                if (f !== n.OPS.dependency) this[f].apply(this, a[o]);else {
                  var _iterator25 = _createForOfIteratorHelper(a[o]),
                    _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                      var _t34 = _step25.value;
                      var _e27 = _t34.startsWith("g_") ? u : p;
                      if (!_e27.has(_t34)) {
                        _e27.get(_t34, s);
                        return o;
                      }
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                }
                o++;
                if (o === l) return o;
                if (c && ++d > 10) {
                  if (Date.now() > h) {
                    s();
                    return o;
                  }
                  d = 0;
                }
              }
            }
          }, {
            key: "endDrawing",
            value: function endDrawing() {
              for (; this.stateStack.length || this.inSMaskMode;) this.restore();
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
              this.cachedCanvases.clear();
              this.cachedPatterns.clear();
              var _iterator26 = _createForOfIteratorHelper(this._cachedBitmapsMap.values()),
                _step26;
              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var _t35 = _step26.value;
                  var _iterator27 = _createForOfIteratorHelper(_t35.values()),
                    _step27;
                  try {
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                      var _e28 = _step27.value;
                      "undefined" != typeof HTMLCanvasElement && _e28 instanceof HTMLCanvasElement && (_e28.width = _e28.height = 0);
                    }
                  } catch (err) {
                    _iterator27.e(err);
                  } finally {
                    _iterator27.f();
                  }
                  _t35.clear();
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
              this._cachedBitmapsMap.clear();
              this.imageLayer && this.imageLayer.endLayout();
            }
          }, {
            key: "_scaleImage",
            value: function _scaleImage(t, e) {
              var s = t.width,
                n = t.height;
              var r,
                a,
                i = Math.max(Math.hypot(e[0], e[1]), 1),
                o = Math.max(Math.hypot(e[2], e[3]), 1),
                l = s,
                c = n,
                h = "prescale1";
              for (; i > 2 && l > 1 || o > 2 && c > 1;) {
                var _e29 = l,
                  _s26 = c;
                if (i > 2 && l > 1) {
                  _e29 = Math.ceil(l / 2);
                  i /= l / _e29;
                }
                if (o > 2 && c > 1) {
                  _s26 = Math.ceil(c / 2);
                  o /= c / _s26;
                }
                r = this.cachedCanvases.getCanvas(h, _e29, _s26, !1);
                a = r.context;
                a.clearRect(0, 0, _e29, _s26);
                a.drawImage(t, 0, 0, l, c, 0, 0, _e29, _s26);
                t = r.canvas;
                l = _e29;
                c = _s26;
                h = "prescale1" === h ? "prescale2" : "prescale1";
              }
              return {
                img: t,
                paintWidth: l,
                paintHeight: c
              };
            }
          }, {
            key: "_createMaskCanvas",
            value: function _createMaskCanvas(t) {
              var e = this.ctx,
                s = t.width,
                a = t.height,
                i = this.current.fillColor,
                o = this.current.patternFill,
                l = e.mozCurrentTransform;
              var c, h, d, u;
              if ((t.bitmap || t.data) && t.count > 1) {
                var _e30 = t.bitmap || t.data.buffer,
                  _s27 = l.slice(0, 4);
                h = JSON.stringify(o ? _s27 : [_s27, i]);
                c = this._cachedBitmapsMap.get(_e30);
                if (!c) {
                  c = new Map();
                  this._cachedBitmapsMap.set(_e30, c);
                }
                var _n20 = c.get(h);
                if (_n20 && !o) {
                  return {
                    canvas: _n20,
                    offsetX: Math.round(Math.min(l[0], l[2]) + l[4]),
                    offsetY: Math.round(Math.min(l[1], l[3]) + l[5])
                  };
                }
                d = _n20;
              }
              if (!d) {
                u = this.cachedCanvases.getCanvas("maskCanvas", s, a, !1);
                putBinaryImageMask(u.context, t);
              }
              var p = n.Util.transform(l, [1 / s, 0, 0, -1 / a, 0, 0]);
              p = n.Util.transform(p, [1, 0, 0, 1, 0, -a]);
              var f = n.Util.applyTransform([0, 0], p),
                g = n.Util.applyTransform([s, a], p),
                m = n.Util.normalizeRect([f[0], f[1], g[0], g[1]]),
                _ = Math.round(m[2] - m[0]) || 1,
                A = Math.round(m[3] - m[1]) || 1,
                b = this.cachedCanvases.getCanvas("fillCanvas", _, A, !0),
                y = b.context,
                S = Math.min(f[0], g[0]),
                x = Math.min(f[1], g[1]);
              y.translate(-S, -x);
              y.transform.apply(y, p);
              if (!d) {
                d = this._scaleImage(u.canvas, y.mozCurrentTransformInverse);
                d = d.img;
                c && o && c.set(h, d);
              }
              y.imageSmoothingEnabled = getImageSmoothingEnabled(y.mozCurrentTransform, t.interpolate);
              drawImageAtIntegerCoords(y, d, 0, 0, d.width, d.height, 0, 0, s, a);
              y.globalCompositeOperation = "source-in";
              var v = n.Util.transform(y.mozCurrentTransformInverse, [1, 0, 0, 1, -S, -x]);
              y.fillStyle = o ? i.getPattern(e, this, v, r.PathType.FILL) : i;
              y.fillRect(0, 0, s, a);
              if (c && !o) {
                this.cachedCanvases.delete("fillCanvas");
                c.set(h, b.canvas);
              }
              return {
                canvas: b.canvas,
                offsetX: Math.round(S),
                offsetY: Math.round(x)
              };
            }
          }, {
            key: "setLineWidth",
            value: function setLineWidth(t) {
              t !== this.current.lineWidth && (this._cachedScaleForStroking = null);
              this.current.lineWidth = t;
              this.ctx.lineWidth = t;
            }
          }, {
            key: "setLineCap",
            value: function setLineCap(t) {
              this.ctx.lineCap = h[t];
            }
          }, {
            key: "setLineJoin",
            value: function setLineJoin(t) {
              this.ctx.lineJoin = d[t];
            }
          }, {
            key: "setMiterLimit",
            value: function setMiterLimit(t) {
              this.ctx.miterLimit = t;
            }
          }, {
            key: "setDash",
            value: function setDash(t, e) {
              var s = this.ctx;
              if (void 0 !== s.setLineDash) {
                s.setLineDash(t);
                s.lineDashOffset = e;
              }
            }
          }, {
            key: "setRenderingIntent",
            value: function setRenderingIntent(t) {}
          }, {
            key: "setFlatness",
            value: function setFlatness(t) {}
          }, {
            key: "setGState",
            value: function setGState(t) {
              for (var _e31 = 0, _s28 = t.length; _e31 < _s28; _e31++) {
                var _s29 = t[_e31],
                  _n21 = _s29[0],
                  _r17 = _s29[1];
                switch (_n21) {
                  case "LW":
                    this.setLineWidth(_r17);
                    break;
                  case "LC":
                    this.setLineCap(_r17);
                    break;
                  case "LJ":
                    this.setLineJoin(_r17);
                    break;
                  case "ML":
                    this.setMiterLimit(_r17);
                    break;
                  case "D":
                    this.setDash(_r17[0], _r17[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(_r17);
                    break;
                  case "FL":
                    this.setFlatness(_r17);
                    break;
                  case "Font":
                    this.setFont(_r17[0], _r17[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = _s29[1];
                    break;
                  case "ca":
                    this.current.fillAlpha = _s29[1];
                    this.ctx.globalAlpha = _s29[1];
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = _r17;
                    break;
                  case "SMask":
                    this.current.activeSMask = _r17 ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;
                  case "TR":
                    this.current.transferMaps = _r17;
                }
              }
            }
          }, {
            key: "inSMaskMode",
            get: function get() {
              return !!this.suspendedCtx;
            }
          }, {
            key: "checkSMaskState",
            value: function checkSMaskState() {
              var t = this.inSMaskMode;
              this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
            }
          }, {
            key: "beginSMaskMode",
            value: function beginSMaskMode() {
              if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
              var t = this.ctx.canvas.width,
                e = this.ctx.canvas.height,
                s = "smaskGroupAt" + this.groupLevel,
                n = this.cachedCanvases.getCanvas(s, t, e, !0);
              this.suspendedCtx = this.ctx;
              this.ctx = n.context;
              var r = this.ctx;
              r.setTransform.apply(r, this.suspendedCtx.mozCurrentTransform);
              copyCtxState(this.suspendedCtx, r);
              !function mirrorContextOperations(t, e) {
                if (t._removeMirroring) throw new Error("Context is already forwarding operations.");
                t.__originalSave = t.save;
                t.__originalRestore = t.restore;
                t.__originalRotate = t.rotate;
                t.__originalScale = t.scale;
                t.__originalTranslate = t.translate;
                t.__originalTransform = t.transform;
                t.__originalSetTransform = t.setTransform;
                t.__originalResetTransform = t.resetTransform;
                t.__originalClip = t.clip;
                t.__originalMoveTo = t.moveTo;
                t.__originalLineTo = t.lineTo;
                t.__originalBezierCurveTo = t.bezierCurveTo;
                t.__originalRect = t.rect;
                t.__originalClosePath = t.closePath;
                t.__originalBeginPath = t.beginPath;
                t._removeMirroring = function () {
                  t.save = t.__originalSave;
                  t.restore = t.__originalRestore;
                  t.rotate = t.__originalRotate;
                  t.scale = t.__originalScale;
                  t.translate = t.__originalTranslate;
                  t.transform = t.__originalTransform;
                  t.setTransform = t.__originalSetTransform;
                  t.resetTransform = t.__originalResetTransform;
                  t.clip = t.__originalClip;
                  t.moveTo = t.__originalMoveTo;
                  t.lineTo = t.__originalLineTo;
                  t.bezierCurveTo = t.__originalBezierCurveTo;
                  t.rect = t.__originalRect;
                  t.closePath = t.__originalClosePath;
                  t.beginPath = t.__originalBeginPath;
                  delete t._removeMirroring;
                };
                t.save = function ctxSave() {
                  e.save();
                  this.__originalSave();
                };
                t.restore = function ctxRestore() {
                  e.restore();
                  this.__originalRestore();
                };
                t.translate = function ctxTranslate(t, s) {
                  e.translate(t, s);
                  this.__originalTranslate(t, s);
                };
                t.scale = function ctxScale(t, s) {
                  e.scale(t, s);
                  this.__originalScale(t, s);
                };
                t.transform = function ctxTransform(t, s, n, r, a, i) {
                  e.transform(t, s, n, r, a, i);
                  this.__originalTransform(t, s, n, r, a, i);
                };
                t.setTransform = function ctxSetTransform(t, s, n, r, a, i) {
                  e.setTransform(t, s, n, r, a, i);
                  this.__originalSetTransform(t, s, n, r, a, i);
                };
                t.resetTransform = function ctxResetTransform() {
                  e.resetTransform();
                  this.__originalResetTransform();
                };
                t.rotate = function ctxRotate(t) {
                  e.rotate(t);
                  this.__originalRotate(t);
                };
                t.clip = function ctxRotate(t) {
                  e.clip(t);
                  this.__originalClip(t);
                };
                t.moveTo = function (t, s) {
                  e.moveTo(t, s);
                  this.__originalMoveTo(t, s);
                };
                t.lineTo = function (t, s) {
                  e.lineTo(t, s);
                  this.__originalLineTo(t, s);
                };
                t.bezierCurveTo = function (t, s, n, r, a, i) {
                  e.bezierCurveTo(t, s, n, r, a, i);
                  this.__originalBezierCurveTo(t, s, n, r, a, i);
                };
                t.rect = function (t, s, n, r) {
                  e.rect(t, s, n, r);
                  this.__originalRect(t, s, n, r);
                };
                t.closePath = function () {
                  e.closePath();
                  this.__originalClosePath();
                };
                t.beginPath = function () {
                  e.beginPath();
                  this.__originalBeginPath();
                };
              }(r, this.suspendedCtx);
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            }
          }, {
            key: "endSMaskMode",
            value: function endSMaskMode() {
              if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
              this.ctx._removeMirroring();
              copyCtxState(this.ctx, this.suspendedCtx);
              this.ctx = this.suspendedCtx;
              this.suspendedCtx = null;
            }
          }, {
            key: "compose",
            value: function compose(t) {
              if (!this.current.activeSMask) return;
              if (t) {
                t[0] = Math.floor(t[0]);
                t[1] = Math.floor(t[1]);
                t[2] = Math.ceil(t[2]);
                t[3] = Math.ceil(t[3]);
              } else t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              var e = this.current.activeSMask;
              composeSMask(this.suspendedCtx, e, this.ctx, t);
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
              this.ctx.restore();
            }
          }, {
            key: "save",
            value: function save() {
              if (this.inSMaskMode) {
                copyCtxState(this.ctx, this.suspendedCtx);
                this.suspendedCtx.save();
              } else this.ctx.save();
              var t = this.current;
              this.stateStack.push(t);
              this.current = t.clone();
            }
          }, {
            key: "restore",
            value: function restore() {
              0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode();
              if (0 !== this.stateStack.length) {
                this.current = this.stateStack.pop();
                if (this.inSMaskMode) {
                  this.suspendedCtx.restore();
                  copyCtxState(this.suspendedCtx, this.ctx);
                } else this.ctx.restore();
                this.checkSMaskState();
                this.pendingClip = null;
                this._cachedScaleForStroking = null;
                this._cachedGetSinglePixelWidth = null;
              }
            }
          }, {
            key: "transform",
            value: function transform(t, e, s, n, r, a) {
              this.ctx.transform(t, e, s, n, r, a);
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
            }
          }, {
            key: "constructPath",
            value: function constructPath(t, e, s) {
              var r = this.ctx,
                a = this.current;
              var i,
                o,
                l = a.x,
                c = a.y;
              var h = r.mozCurrentTransform,
                d = 0 === h[0] && 0 === h[3] || 0 === h[1] && 0 === h[2],
                u = d ? s.slice(0) : null;
              for (var _s30 = 0, _p = 0, f = t.length; _s30 < f; _s30++) switch (0 | t[s]) {
                case n.OPS.rectangle:
                  l = e[_p++];
                  c = e[_p++];
                  var _t36 = e[_p++],
                    _s31 = e[_p++],
                    _f2 = l + _t36,
                    g = c + _s31;
                  r.moveTo(l, c);
                  if (0 === _t36 || 0 === _s31) r.lineTo(_f2, g);else {
                    r.lineTo(_f2, c);
                    r.lineTo(_f2, g);
                    r.lineTo(l, g);
                  }
                  d || a.updateRectMinMax(h, [l, c, _f2, g]);
                  r.closePath();
                  break;
                case n.OPS.moveTo:
                  l = e[_p++];
                  c = e[_p++];
                  r.moveTo(l, c);
                  d || a.updatePathMinMax(h, l, c);
                  break;
                case n.OPS.lineTo:
                  l = e[_p++];
                  c = e[_p++];
                  r.lineTo(l, c);
                  d || a.updatePathMinMax(h, l, c);
                  break;
                case n.OPS.curveTo:
                  i = l;
                  o = c;
                  l = e[_p + 4];
                  c = e[_p + 5];
                  r.bezierCurveTo(e[_p], e[_p + 1], e[_p + 2], e[_p + 3], l, c);
                  a.updateCurvePathMinMax(h, i, o, e[_p], e[_p + 1], e[_p + 2], e[_p + 3], l, c, u);
                  _p += 6;
                  break;
                case n.OPS.curveTo2:
                  i = l;
                  o = c;
                  r.bezierCurveTo(l, c, e[_p], e[_p + 1], e[_p + 2], e[_p + 3]);
                  a.updateCurvePathMinMax(h, i, o, l, c, e[_p], e[_p + 1], e[_p + 2], e[_p + 3], u);
                  l = e[_p + 2];
                  c = e[_p + 3];
                  _p += 4;
                  break;
                case n.OPS.curveTo3:
                  i = l;
                  o = c;
                  l = e[_p + 2];
                  c = e[_p + 3];
                  r.bezierCurveTo(e[_p], e[_p + 1], l, c, l, c);
                  a.updateCurvePathMinMax(h, i, o, e[_p], e[_p + 1], l, c, l, c, u);
                  _p += 4;
                  break;
                case n.OPS.closePath:
                  r.closePath();
              }
              d && a.updateScalingPathMinMax(h, u);
              a.setCurrentPoint(l, c);
            }
          }, {
            key: "closePath",
            value: function closePath() {
              this.ctx.closePath();
            }
          }, {
            key: "stroke",
            value: function stroke(t) {
              t = void 0 === t || t;
              var e = this.ctx,
                s = this.current.strokeColor;
              e.globalAlpha = this.current.strokeAlpha;
              if (this.contentVisible) if ("object" == typeof s && s !== null && s !== void 0 && s.getPattern) {
                e.save();
                e.strokeStyle = s.getPattern(e, this, e.mozCurrentTransformInverse, r.PathType.STROKE);
                this.rescaleAndStroke(!1);
                e.restore();
              } else this.rescaleAndStroke(!0);
              t && this.consumePath(this.current.getClippedPathBoundingBox());
              e.globalAlpha = this.current.fillAlpha;
            }
          }, {
            key: "closeStroke",
            value: function closeStroke() {
              this.closePath();
              this.stroke();
            }
          }, {
            key: "fill",
            value: function fill(t) {
              t = void 0 === t || t;
              var e = this.ctx,
                s = this.current.fillColor;
              var n = !1;
              if (this.current.patternFill) {
                e.save();
                e.fillStyle = s.getPattern(e, this, e.mozCurrentTransformInverse, r.PathType.FILL);
                n = !0;
              }
              var a = this.current.getClippedPathBoundingBox();
              if (this.contentVisible && null !== a) if (this.pendingEOFill) {
                e.fill("evenodd");
                this.pendingEOFill = !1;
              } else e.fill();
              n && e.restore();
              t && this.consumePath(a);
            }
          }, {
            key: "eoFill",
            value: function eoFill() {
              this.pendingEOFill = !0;
              this.fill();
            }
          }, {
            key: "fillStroke",
            value: function fillStroke() {
              this.fill(!1);
              this.stroke(!1);
              this.consumePath();
            }
          }, {
            key: "eoFillStroke",
            value: function eoFillStroke() {
              this.pendingEOFill = !0;
              this.fillStroke();
            }
          }, {
            key: "closeFillStroke",
            value: function closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
          }, {
            key: "closeEOFillStroke",
            value: function closeEOFillStroke() {
              this.pendingEOFill = !0;
              this.closePath();
              this.fillStroke();
            }
          }, {
            key: "endPath",
            value: function endPath() {
              this.consumePath();
            }
          }, {
            key: "clip",
            value: function clip() {
              this.pendingClip = u;
            }
          }, {
            key: "eoClip",
            value: function eoClip() {
              this.pendingClip = p;
            }
          }, {
            key: "beginText",
            value: function beginText() {
              this.current.textMatrix = n.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
          }, {
            key: "endText",
            value: function endText() {
              var t = this.pendingTextPaths,
                e = this.ctx;
              if (void 0 !== t) {
                e.save();
                e.beginPath();
                for (var _s32 = 0; _s32 < t.length; _s32++) {
                  var _n22 = t[_s32];
                  e.setTransform.apply(e, _n22.transform);
                  e.translate(_n22.x, _n22.y);
                  _n22.addToPath(e, _n22.fontSize);
                }
                e.restore();
                e.clip();
                e.beginPath();
                delete this.pendingTextPaths;
              } else e.beginPath();
            }
          }, {
            key: "setCharSpacing",
            value: function setCharSpacing(t) {
              this.current.charSpacing = t;
            }
          }, {
            key: "setWordSpacing",
            value: function setWordSpacing(t) {
              this.current.wordSpacing = t;
            }
          }, {
            key: "setHScale",
            value: function setHScale(t) {
              this.current.textHScale = t / 100;
            }
          }, {
            key: "setLeading",
            value: function setLeading(t) {
              this.current.leading = -t;
            }
          }, {
            key: "setFont",
            value: function setFont(t, e) {
              var s = this.commonObjs.get(t),
                r = this.current;
              if (!s) throw new Error("Can't find font for ".concat(t));
              r.fontMatrix = s.fontMatrix || n.FONT_IDENTITY_MATRIX;
              0 !== r.fontMatrix[0] && 0 !== r.fontMatrix[3] || (0, n.warn)("Invalid font matrix for font " + t);
              if (e < 0) {
                e = -e;
                r.fontDirection = -1;
              } else r.fontDirection = 1;
              this.current.font = s;
              this.current.fontSize = e;
              if (s.isType3Font) return;
              var a = s.loadedName || "sans-serif";
              var i = "normal";
              s.black ? i = "900" : s.bold && (i = "bold");
              var o = s.italic ? "italic" : "normal",
                l = "\"".concat(a, "\", ").concat(s.fallbackName);
              var c = e;
              e < 16 ? c = 16 : e > 100 && (c = 100);
              this.current.fontSizeScale = e / c;
              this.ctx.font = "".concat(o, " ").concat(i, " ").concat(c, "px ").concat(l);
            }
          }, {
            key: "setTextRenderingMode",
            value: function setTextRenderingMode(t) {
              this.current.textRenderingMode = t;
            }
          }, {
            key: "setTextRise",
            value: function setTextRise(t) {
              this.current.textRise = t;
            }
          }, {
            key: "moveText",
            value: function moveText(t, e) {
              this.current.x = this.current.lineX += t;
              this.current.y = this.current.lineY += e;
            }
          }, {
            key: "setLeadingMoveText",
            value: function setLeadingMoveText(t, e) {
              this.setLeading(-e);
              this.moveText(t, e);
            }
          }, {
            key: "setTextMatrix",
            value: function setTextMatrix(t, e, s, n, r, a) {
              this.current.textMatrix = [t, e, s, n, r, a];
              this.current.textMatrixScale = Math.hypot(t, e);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
          }, {
            key: "nextLine",
            value: function nextLine() {
              this.moveText(0, this.current.leading);
            }
          }, {
            key: "paintChar",
            value: function paintChar(t, e, s, r) {
              var a = this.ctx,
                i = this.current,
                o = i.font,
                l = i.textRenderingMode,
                c = i.fontSize / i.fontSizeScale,
                h = l & n.TextRenderingMode.FILL_STROKE_MASK,
                d = !!(l & n.TextRenderingMode.ADD_TO_PATH_FLAG),
                u = i.patternFill && !o.missingFile;
              var p;
              (o.disableFontFace || d || u) && (p = o.getPathGenerator(this.commonObjs, t));
              if (o.disableFontFace || u) {
                a.save();
                a.translate(e, s);
                a.beginPath();
                p(a, c);
                r && a.setTransform.apply(a, r);
                h !== n.TextRenderingMode.FILL && h !== n.TextRenderingMode.FILL_STROKE || a.fill();
                h !== n.TextRenderingMode.STROKE && h !== n.TextRenderingMode.FILL_STROKE || a.stroke();
                a.restore();
              } else {
                h !== n.TextRenderingMode.FILL && h !== n.TextRenderingMode.FILL_STROKE || a.fillText(t, e, s);
                h !== n.TextRenderingMode.STROKE && h !== n.TextRenderingMode.FILL_STROKE || a.strokeText(t, e, s);
              }
              if (d) {
                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                  transform: a.mozCurrentTransform,
                  x: e,
                  y: s,
                  fontSize: c,
                  addToPath: p
                });
              }
            }
          }, {
            key: "isFontSubpixelAAEnabled",
            get: function get() {
              var _this$cachedCanvases$ = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10, !1),
                t = _this$cachedCanvases$.context;
              t.scale(1.5, 1);
              t.fillText("I", 0, 10);
              var e = t.getImageData(0, 0, 10, 10).data;
              var s = !1;
              for (var _t37 = 3; _t37 < e.length; _t37 += 4) if (e[_t37] > 0 && e[_t37] < 255) {
                s = !0;
                break;
              }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", s);
            }
          }, {
            key: "showText",
            value: function showText(t) {
              var e = this.current,
                s = e.font;
              if (s.isType3Font) return this.showType3Text(t);
              var a = e.fontSize;
              if (0 === a) return;
              var i = this.ctx,
                o = e.fontSizeScale,
                l = e.charSpacing,
                c = e.wordSpacing,
                h = e.fontDirection,
                d = e.textHScale * h,
                u = t.length,
                p = s.vertical,
                f = p ? 1 : -1,
                g = s.defaultVMetrics,
                m = a * e.fontMatrix[0],
                _ = e.textRenderingMode === n.TextRenderingMode.FILL && !s.disableFontFace && !e.patternFill;
              i.save();
              i.transform.apply(i, e.textMatrix);
              i.translate(e.x, e.y + e.textRise);
              h > 0 ? i.scale(d, -1) : i.scale(d, 1);
              var A;
              if (e.patternFill) {
                i.save();
                var _t38 = e.fillColor.getPattern(i, this, i.mozCurrentTransformInverse, r.PathType.FILL);
                A = i.mozCurrentTransform;
                i.restore();
                i.fillStyle = _t38;
              }
              var b = e.lineWidth;
              var y = e.textMatrixScale;
              if (0 === y || 0 === b) {
                var _t39 = e.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                _t39 !== n.TextRenderingMode.STROKE && _t39 !== n.TextRenderingMode.FILL_STROKE || (b = this.getSinglePixelWidth());
              } else b /= y;
              if (1 !== o) {
                i.scale(o, o);
                b /= o;
              }
              i.lineWidth = b;
              var S,
                x = 0;
              for (S = 0; S < u; ++S) {
                var _e32 = t[S];
                if ("number" == typeof _e32) {
                  x += f * _e32 * a / 1e3;
                  continue;
                }
                var _n23 = !1;
                var _r18 = (_e32.isSpace ? c : 0) + l,
                  _d = _e32.fontChar,
                  _u2 = _e32.accent;
                var _b3 = void 0,
                  _y3 = void 0,
                  v = void 0,
                  C = _e32.width;
                if (p) {
                  var _t40 = _e32.vmetric || g,
                    _s33 = -(_e32.vmetric ? _t40[1] : .5 * C) * m,
                    _n24 = _t40[2] * m;
                  C = _t40 ? -_t40[0] : C;
                  _b3 = _s33 / o;
                  _y3 = (x + _n24) / o;
                } else {
                  _b3 = x / o;
                  _y3 = 0;
                }
                if (s.remeasure && C > 0) {
                  var _t41 = 1e3 * i.measureText(_d).width / a * o;
                  if (C < _t41 && this.isFontSubpixelAAEnabled) {
                    var _e33 = C / _t41;
                    _n23 = !0;
                    i.save();
                    i.scale(_e33, 1);
                    _b3 /= _e33;
                  } else C !== _t41 && (_b3 += (C - _t41) / 2e3 * a / o);
                }
                if (this.contentVisible && (_e32.isInFont || s.missingFile)) if (_ && !_u2) i.fillText(_d, _b3, _y3);else {
                  this.paintChar(_d, _b3, _y3, A);
                  if (_u2) {
                    var _t42 = _b3 + a * _u2.offset.x / o,
                      _e34 = _y3 - a * _u2.offset.y / o;
                    this.paintChar(_u2.fontChar, _t42, _e34, A);
                  }
                }
                v = p ? C * m - _r18 * h : C * m + _r18 * h;
                x += v;
                _n23 && i.restore();
              }
              p ? e.y -= x : e.x += x * d;
              i.restore();
              this.compose();
            }
          }, {
            key: "showType3Text",
            value: function showType3Text(t) {
              var e = this.ctx,
                s = this.current,
                r = s.font,
                a = s.fontSize,
                i = s.fontDirection,
                o = r.vertical ? 1 : -1,
                l = s.charSpacing,
                c = s.wordSpacing,
                h = s.textHScale * i,
                d = s.fontMatrix || n.FONT_IDENTITY_MATRIX,
                u = t.length;
              var p, f, g, m;
              if (!(s.textRenderingMode === n.TextRenderingMode.INVISIBLE) && 0 !== a) {
                this._cachedScaleForStroking = null;
                this._cachedGetSinglePixelWidth = null;
                e.save();
                e.transform.apply(e, s.textMatrix);
                e.translate(s.x, s.y);
                e.scale(h, i);
                for (p = 0; p < u; ++p) {
                  f = t[p];
                  if ("number" == typeof f) {
                    m = o * f * a / 1e3;
                    this.ctx.translate(m, 0);
                    s.x += m * h;
                    continue;
                  }
                  var _i8 = (f.isSpace ? c : 0) + l,
                    _u3 = r.charProcOperatorList[f.operatorListId];
                  if (!_u3) {
                    (0, n.warn)("Type3 character \"".concat(f.operatorListId, "\" is not available."));
                    continue;
                  }
                  if (this.contentVisible) {
                    this.processingType3 = f;
                    this.save();
                    e.scale(a, a);
                    e.transform.apply(e, d);
                    this.executeOperatorList(_u3);
                    this.restore();
                  }
                  g = n.Util.applyTransform([f.width, 0], d)[0] * a + _i8;
                  e.translate(g, 0);
                  s.x += g * h;
                }
                e.restore();
                this.processingType3 = null;
              }
            }
          }, {
            key: "setCharWidth",
            value: function setCharWidth(t, e) {}
          }, {
            key: "setCharWidthAndBounds",
            value: function setCharWidthAndBounds(t, e, s, n, r, a) {
              this.ctx.rect(s, n, r - s, a - n);
              this.ctx.clip();
              this.endPath();
            }
          }, {
            key: "getColorN_Pattern",
            value: function getColorN_Pattern(t) {
              var _this26 = this;
              var e;
              if ("TilingPattern" === t[0]) {
                var _s34 = t[1],
                  _n25 = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                  _a15 = {
                    createCanvasGraphics: function createCanvasGraphics(t) {
                      return new CanvasGraphics(t, _this26.commonObjs, _this26.objs, _this26.canvasFactory);
                    }
                  };
                e = new r.TilingPattern(t, _s34, this.ctx, _a15, _n25);
              } else e = this._getPattern(t[1], t[2]);
              return e;
            }
          }, {
            key: "setStrokeColorN",
            value: function setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
          }, {
            key: "setFillColorN",
            value: function setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = !0;
            }
          }, {
            key: "setStrokeRGBColor",
            value: function setStrokeRGBColor(t, e, s) {
              var _this$selectColor;
              var r = ((_this$selectColor = this.selectColor) === null || _this$selectColor === void 0 ? void 0 : _this$selectColor.call(this, t, e, s)) || n.Util.makeHexColor(t, e, s);
              this.ctx.strokeStyle = r;
              this.current.strokeColor = r;
            }
          }, {
            key: "setFillRGBColor",
            value: function setFillRGBColor(t, e, s) {
              var _this$selectColor2;
              var r = ((_this$selectColor2 = this.selectColor) === null || _this$selectColor2 === void 0 ? void 0 : _this$selectColor2.call(this, t, e, s)) || n.Util.makeHexColor(t, e, s);
              this.ctx.fillStyle = r;
              this.current.fillColor = r;
              this.current.patternFill = !1;
            }
          }, {
            key: "_getPattern",
            value: function _getPattern(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var s;
              if (this.cachedPatterns.has(t)) s = this.cachedPatterns.get(t);else {
                s = (0, r.getShadingPattern)(this.objs.get(t));
                this.cachedPatterns.set(t, s);
              }
              e && (s.matrix = e);
              return s;
            }
          }, {
            key: "shadingFill",
            value: function shadingFill(t) {
              if (!this.contentVisible) return;
              var e = this.ctx;
              this.save();
              var s = this._getPattern(t);
              e.fillStyle = s.getPattern(e, this, e.mozCurrentTransformInverse, r.PathType.SHADING);
              var a = e.mozCurrentTransformInverse;
              if (a) {
                var _t43 = e.canvas,
                  _s35 = _t43.width,
                  _r19 = _t43.height,
                  _i9 = n.Util.applyTransform([0, 0], a),
                  _o4 = n.Util.applyTransform([0, _r19], a),
                  _l3 = n.Util.applyTransform([_s35, 0], a),
                  _c2 = n.Util.applyTransform([_s35, _r19], a),
                  _h = Math.min(_i9[0], _o4[0], _l3[0], _c2[0]),
                  _d2 = Math.min(_i9[1], _o4[1], _l3[1], _c2[1]),
                  _u4 = Math.max(_i9[0], _o4[0], _l3[0], _c2[0]),
                  _p2 = Math.max(_i9[1], _o4[1], _l3[1], _c2[1]);
                this.ctx.fillRect(_h, _d2, _u4 - _h, _p2 - _d2);
              } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.compose(this.current.getClippedPathBoundingBox());
              this.restore();
            }
          }, {
            key: "beginInlineImage",
            value: function beginInlineImage() {
              (0, n.unreachable)("Should not call beginInlineImage");
            }
          }, {
            key: "beginImageData",
            value: function beginImageData() {
              (0, n.unreachable)("Should not call beginImageData");
            }
          }, {
            key: "paintFormXObjectBegin",
            value: function paintFormXObjectBegin(t, e) {
              if (this.contentVisible) {
                this.save();
                this.baseTransformStack.push(this.baseTransform);
                Array.isArray(t) && 6 === t.length && this.transform.apply(this, t);
                this.baseTransform = this.ctx.mozCurrentTransform;
                if (e) {
                  var _t44 = e[2] - e[0],
                    _s36 = e[3] - e[1];
                  this.ctx.rect(e[0], e[1], _t44, _s36);
                  this.current.updateRectMinMax(this.ctx.mozCurrentTransform, e);
                  this.clip();
                  this.endPath();
                }
              }
            }
          }, {
            key: "paintFormXObjectEnd",
            value: function paintFormXObjectEnd() {
              if (this.contentVisible) {
                this.restore();
                this.baseTransform = this.baseTransformStack.pop();
              }
            }
          }, {
            key: "beginGroup",
            value: function beginGroup(t) {
              if (!this.contentVisible) return;
              this.save();
              if (this.inSMaskMode) {
                this.endSMaskMode();
                this.current.activeSMask = null;
              }
              var e = this.ctx;
              t.isolated || (0, n.info)("TODO: Support non-isolated groups.");
              t.knockout && (0, n.warn)("Knockout groups not supported.");
              var s = e.mozCurrentTransform;
              t.matrix && e.transform.apply(e, t.matrix);
              if (!t.bbox) throw new Error("Bounding box is required.");
              var r = n.Util.getAxialAlignedBoundingBox(t.bbox, e.mozCurrentTransform);
              var a = [0, 0, e.canvas.width, e.canvas.height];
              r = n.Util.intersect(r, a) || [0, 0, 0, 0];
              var i = Math.floor(r[0]),
                o = Math.floor(r[1]);
              var c = Math.max(Math.ceil(r[2]) - i, 1),
                h = Math.max(Math.ceil(r[3]) - o, 1),
                d = 1,
                u = 1;
              if (c > l) {
                d = c / l;
                c = l;
              }
              if (h > l) {
                u = h / l;
                h = l;
              }
              this.current.startNewPathAndClipBox([0, 0, c, h]);
              var p = "groupAt" + this.groupLevel;
              t.smask && (p += "_smask_" + this.smaskCounter++ % 2);
              var f = this.cachedCanvases.getCanvas(p, c, h, !0),
                g = f.context;
              g.scale(1 / d, 1 / u);
              g.translate(-i, -o);
              g.transform.apply(g, s);
              if (t.smask) this.smaskStack.push({
                canvas: f.canvas,
                context: g,
                offsetX: i,
                offsetY: o,
                scaleX: d,
                scaleY: u,
                subtype: t.smask.subtype,
                backdrop: t.smask.backdrop,
                transferMap: t.smask.transferMap || null,
                startTransformInverse: null
              });else {
                e.setTransform(1, 0, 0, 1, 0, 0);
                e.translate(i, o);
                e.scale(d, u);
                e.save();
              }
              copyCtxState(e, g);
              this.ctx = g;
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
              this.groupStack.push(e);
              this.groupLevel++;
            }
          }, {
            key: "endGroup",
            value: function endGroup(t) {
              if (!this.contentVisible) return;
              this.groupLevel--;
              var e = this.ctx,
                s = this.groupStack.pop();
              this.ctx = s;
              this.ctx.imageSmoothingEnabled = !1;
              if (t.smask) {
                this.tempSMask = this.smaskStack.pop();
                this.restore();
              } else {
                this.ctx.restore();
                var _t45 = this.ctx.mozCurrentTransform;
                this.restore();
                this.ctx.save();
                this.ctx.setTransform.apply(this.ctx, _t45);
                var _s37 = n.Util.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], _t45);
                this.ctx.drawImage(e.canvas, 0, 0);
                this.ctx.restore();
                this.compose(_s37);
              }
            }
          }, {
            key: "beginAnnotations",
            value: function beginAnnotations() {
              this.save();
              this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            }
          }, {
            key: "endAnnotations",
            value: function endAnnotations() {
              this.restore();
            }
          }, {
            key: "beginAnnotation",
            value: function beginAnnotation(t, e, s, r, a) {
              this.save();
              if (Array.isArray(e) && 4 === e.length) {
                var _r20 = e[2] - e[0],
                  _i10 = e[3] - e[1];
                if (a && this.annotationCanvasMap) {
                  (s = s.slice())[4] -= e[0];
                  s[5] -= e[1];
                  (e = e.slice())[0] = e[1] = 0;
                  e[2] = _r20;
                  e[3] = _i10;
                  var _n$Util$singularValue = n.Util.singularValueDecompose2dScale(this.ctx.mozCurrentTransform),
                    _n$Util$singularValue2 = _slicedToArray(_n$Util$singularValue, 2),
                    _a16 = _n$Util$singularValue2[0],
                    _l4 = _n$Util$singularValue2[1],
                    _c3 = this.viewportScale,
                    _h2 = Math.ceil(_r20 * this.outputScaleX * _c3),
                    _d3 = Math.ceil(_i10 * this.outputScaleY * _c3);
                  this.annotationCanvas = this.canvasFactory.create(_h2, _d3);
                  var _this$annotationCanva = this.annotationCanvas,
                    _u5 = _this$annotationCanva.canvas,
                    _p3 = _this$annotationCanva.context,
                    f = "var(--zoom-factor) * ".concat(o.PixelsPerInch.PDF_TO_CSS_UNITS);
                  _u5.style.width = "calc(".concat(_r20, "px * ").concat(f, ")");
                  _u5.style.height = "calc(".concat(_i10, "px * ").concat(f, ")");
                  this.annotationCanvasMap.set(t, _u5);
                  this.annotationCanvas.savedCtx = this.ctx;
                  this.ctx = _p3;
                  this.ctx.setTransform(_a16, 0, 0, -_l4, 0, _i10 * _l4);
                  addContextCurrentTransform(this.ctx);
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                } else {
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                  this.ctx.rect(e[0], e[1], _r20, _i10);
                  this.ctx.clip();
                  this.endPath();
                }
              }
              this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
              this.transform.apply(this, s);
              this.transform.apply(this, r);
            }
          }, {
            key: "endAnnotation",
            value: function endAnnotation() {
              if (this.annotationCanvas) {
                this.ctx = this.annotationCanvas.savedCtx;
                delete this.annotationCanvas.savedCtx;
                delete this.annotationCanvas;
              }
              this.restore();
            }
          }, {
            key: "paintImageMaskXObject",
            value: function paintImageMaskXObject(t) {
              if (!this.contentVisible) return;
              var e = t.count;
              (t = this.getObject(t.data, t)).count = e;
              var s = this.ctx,
                n = this.processingType3;
              if (n) {
                void 0 === n.compiled && (n.compiled = function compileType3Glyph(t) {
                  var e = t.width,
                    s = t.height;
                  if (e > 1e3 || s > 1e3) return null;
                  var n = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                    r = e + 1;
                  var a,
                    o,
                    l,
                    c = new Uint8Array(r * (s + 1));
                  var h = e + 7 & -8;
                  var d = new Uint8Array(h * s),
                    u = 0;
                  var _iterator28 = _createForOfIteratorHelper(t.data),
                    _step28;
                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                      var _e37 = _step28.value;
                      var _t48 = 128;
                      for (; _t48 > 0;) {
                        d[u++] = _e37 & _t48 ? 0 : 255;
                        _t48 >>= 1;
                      }
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }
                  var p = 0;
                  u = 0;
                  if (0 !== d[u]) {
                    c[0] = 1;
                    ++p;
                  }
                  for (o = 1; o < e; o++) {
                    if (d[u] !== d[u + 1]) {
                      c[o] = d[u] ? 2 : 1;
                      ++p;
                    }
                    u++;
                  }
                  if (0 !== d[u]) {
                    c[o] = 2;
                    ++p;
                  }
                  for (a = 1; a < s; a++) {
                    u = a * h;
                    l = a * r;
                    if (d[u - h] !== d[u]) {
                      c[l] = d[u] ? 1 : 8;
                      ++p;
                    }
                    var _t46 = (d[u] ? 4 : 0) + (d[u - h] ? 8 : 0);
                    for (o = 1; o < e; o++) {
                      _t46 = (_t46 >> 2) + (d[u + 1] ? 4 : 0) + (d[u - h + 1] ? 8 : 0);
                      if (n[_t46]) {
                        c[l + o] = n[_t46];
                        ++p;
                      }
                      u++;
                    }
                    if (d[u - h] !== d[u]) {
                      c[l + o] = d[u] ? 2 : 4;
                      ++p;
                    }
                    if (p > 1e3) return null;
                  }
                  u = h * (s - 1);
                  l = a * r;
                  if (0 !== d[u]) {
                    c[l] = 8;
                    ++p;
                  }
                  for (o = 1; o < e; o++) {
                    if (d[u] !== d[u + 1]) {
                      c[l + o] = d[u] ? 4 : 8;
                      ++p;
                    }
                    u++;
                  }
                  if (0 !== d[u]) {
                    c[l + o] = 4;
                    ++p;
                  }
                  if (p > 1e3) return null;
                  var f = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]);
                  var g, m, _;
                  i.isNodeJS ? m = [] : g = new Path2D();
                  for (a = 0; p && a <= s; a++) {
                    var _t47 = a * r;
                    var _s38 = _t47 + e;
                    for (; _t47 < _s38 && !c[_t47];) _t47++;
                    if (_t47 === _s38) continue;
                    g ? g.moveTo(_t47 % r, a) : _ = [_t47 % r, a];
                    var _n26 = _t47;
                    var _i11 = c[_t47];
                    do {
                      var _e35 = f[_i11];
                      do {
                        _t47 += _e35;
                      } while (!c[_t47]);
                      var _s39 = c[_t47];
                      if (5 !== _s39 && 10 !== _s39) {
                        _i11 = _s39;
                        c[_t47] = 0;
                      } else {
                        _i11 = _s39 & 51 * _i11 >> 4;
                        c[_t47] &= _i11 >> 2 | _i11 << 2;
                      }
                      g ? g.lineTo(_t47 % r, _t47 / r | 0) : _.push(_t47 % r, _t47 / r | 0);
                      c[_t47] || --p;
                    } while (_n26 !== _t47);
                    g || m.push(_);
                    --a;
                  }
                  d = null;
                  c = null;
                  return function (t) {
                    t.save();
                    t.scale(1 / e, -1 / s);
                    t.translate(0, -s);
                    if (g) t.fill(g);else {
                      t.beginPath();
                      var _iterator29 = _createForOfIteratorHelper(m),
                        _step29;
                      try {
                        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                          var _e36 = _step29.value;
                          t.moveTo(_e36[0], _e36[1]);
                          for (var _s40 = 2, _n27 = _e36.length; _s40 < _n27; _s40 += 2) t.lineTo(_e36[_s40], _e36[_s40 + 1]);
                        }
                      } catch (err) {
                        _iterator29.e(err);
                      } finally {
                        _iterator29.f();
                      }
                      t.fill();
                    }
                    t.beginPath();
                    t.restore();
                  };
                }(t));
                if (n.compiled) {
                  n.compiled(s);
                  return;
                }
              }
              var r = this._createMaskCanvas(t),
                a = r.canvas;
              s.save();
              s.setTransform(1, 0, 0, 1, 0, 0);
              s.drawImage(a, r.offsetX, r.offsetY);
              s.restore();
              this.compose();
            }
          }, {
            key: "paintImageMaskXObjectRepeat",
            value: function paintImageMaskXObjectRepeat(t, e) {
              var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
              var a = arguments.length > 4 ? arguments[4] : undefined;
              var i = arguments.length > 5 ? arguments[5] : undefined;
              if (!this.contentVisible) return;
              t = this.getObject(t.data, t);
              var o = this.ctx;
              o.save();
              var l = o.mozCurrentTransform;
              o.transform(e, s, r, a, 0, 0);
              var c = this._createMaskCanvas(t);
              o.setTransform(1, 0, 0, 1, 0, 0);
              for (var _t49 = 0, _h3 = i.length; _t49 < _h3; _t49 += 2) {
                var _h4 = n.Util.transform(l, [e, s, r, a, i[_t49], i[_t49 + 1]]),
                  _n$Util$applyTransfor3 = n.Util.applyTransform([0, 0], _h4),
                  _n$Util$applyTransfor4 = _slicedToArray(_n$Util$applyTransfor3, 2),
                  _d4 = _n$Util$applyTransfor4[0],
                  _u6 = _n$Util$applyTransfor4[1];
                o.drawImage(c.canvas, _d4, _u6);
              }
              o.restore();
              this.compose();
            }
          }, {
            key: "paintImageMaskXObjectGroup",
            value: function paintImageMaskXObjectGroup(t) {
              if (!this.contentVisible) return;
              var e = this.ctx,
                s = this.current.fillColor,
                n = this.current.patternFill;
              for (var _a17 = 0, _i12 = t.length; _a17 < _i12; _a17++) {
                var _i13 = t[_a17],
                  _o5 = _i13.width,
                  _l5 = _i13.height,
                  _c4 = this.cachedCanvases.getCanvas("maskCanvas", _o5, _l5, !1),
                  _h5 = _c4.context;
                _h5.save();
                putBinaryImageMask(_h5, _i13);
                _h5.globalCompositeOperation = "source-in";
                _h5.fillStyle = n ? s.getPattern(_h5, this, e.mozCurrentTransformInverse, r.PathType.FILL) : s;
                _h5.fillRect(0, 0, _o5, _l5);
                _h5.restore();
                e.save();
                e.transform.apply(e, _i13.transform);
                e.scale(1, -1);
                drawImageAtIntegerCoords(e, _c4.canvas, 0, 0, _o5, _l5, 0, -1, 1, 1);
                e.restore();
              }
              this.compose();
            }
          }, {
            key: "paintImageXObject",
            value: function paintImageXObject(t) {
              if (!this.contentVisible) return;
              var e = this.getObject(t);
              e ? this.paintInlineImageXObject(e) : (0, n.warn)("Dependent image isn't ready yet");
            }
          }, {
            key: "paintImageXObjectRepeat",
            value: function paintImageXObjectRepeat(t, e, s, r) {
              if (!this.contentVisible) return;
              var a = this.getObject(t);
              if (!a) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              var i = a.width,
                o = a.height,
                l = [];
              for (var _t50 = 0, _n28 = r.length; _t50 < _n28; _t50 += 2) l.push({
                transform: [e, 0, 0, s, r[_t50], r[_t50 + 1]],
                x: 0,
                y: 0,
                w: i,
                h: o
              });
              this.paintInlineImageXObjectGroup(a, l);
            }
          }, {
            key: "paintInlineImageXObject",
            value: function paintInlineImageXObject(t) {
              if (!this.contentVisible) return;
              var e = t.width,
                s = t.height,
                n = this.ctx;
              this.save();
              n.scale(1 / e, -1 / s);
              var r;
              if ("function" == typeof HTMLElement && t instanceof HTMLElement || !t.data) r = t;else {
                var _n29 = this.cachedCanvases.getCanvas("inlineImage", e, s, !1);
                putBinaryImageData(_n29.context, t, this.current.transferMaps);
                r = _n29.canvas;
              }
              var a = this._scaleImage(r, n.mozCurrentTransformInverse);
              n.imageSmoothingEnabled = getImageSmoothingEnabled(n.mozCurrentTransform, t.interpolate);
              var _drawImageAtIntegerCo = drawImageAtIntegerCoords(n, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s),
                _drawImageAtIntegerCo2 = _slicedToArray(_drawImageAtIntegerCo, 2),
                i = _drawImageAtIntegerCo2[0],
                o = _drawImageAtIntegerCo2[1];
              if (this.imageLayer) {
                var _e38 = this.getCanvasPosition(0, -s);
                this.imageLayer.appendImage({
                  imgData: t,
                  left: _e38[0],
                  top: _e38[1],
                  width: i,
                  height: o
                });
              }
              this.compose();
              this.restore();
            }
          }, {
            key: "paintInlineImageXObjectGroup",
            value: function paintInlineImageXObjectGroup(t, e) {
              if (!this.contentVisible) return;
              var s = this.ctx,
                n = t.width,
                r = t.height,
                a = this.cachedCanvases.getCanvas("inlineImage", n, r, !1);
              putBinaryImageData(a.context, t, this.current.transferMaps);
              for (var _i14 = 0, _o6 = e.length; _i14 < _o6; _i14++) {
                var _o7 = e[_i14];
                s.save();
                s.transform.apply(s, _o7.transform);
                s.scale(1, -1);
                drawImageAtIntegerCoords(s, a.canvas, _o7.x, _o7.y, _o7.w, _o7.h, 0, -1, 1, 1);
                if (this.imageLayer) {
                  var _e39 = this.getCanvasPosition(_o7.x, _o7.y);
                  this.imageLayer.appendImage({
                    imgData: t,
                    left: _e39[0],
                    top: _e39[1],
                    width: n,
                    height: r
                  });
                }
                s.restore();
              }
              this.compose();
            }
          }, {
            key: "paintSolidColorImageMask",
            value: function paintSolidColorImageMask() {
              if (this.contentVisible) {
                this.ctx.fillRect(0, 0, 1, 1);
                this.compose();
              }
            }
          }, {
            key: "markPoint",
            value: function markPoint(t) {}
          }, {
            key: "markPointProps",
            value: function markPointProps(t, e) {}
          }, {
            key: "beginMarkedContent",
            value: function beginMarkedContent(t) {
              this.markedContentStack.push({
                visible: !0
              });
            }
          }, {
            key: "beginMarkedContentProps",
            value: function beginMarkedContentProps(t, e) {
              "OC" === t ? this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(e)
              }) : this.markedContentStack.push({
                visible: !0
              });
              this.contentVisible = this.isContentVisible();
            }
          }, {
            key: "endMarkedContent",
            value: function endMarkedContent() {
              this.markedContentStack.pop();
              this.contentVisible = this.isContentVisible();
            }
          }, {
            key: "beginCompat",
            value: function beginCompat() {}
          }, {
            key: "endCompat",
            value: function endCompat() {}
          }, {
            key: "consumePath",
            value: function consumePath(t) {
              var e = this.current.isEmptyClip();
              this.pendingClip && this.current.updateClipFromPath();
              this.pendingClip || this.compose(t);
              var s = this.ctx;
              if (this.pendingClip) {
                e || (this.pendingClip === p ? s.clip("evenodd") : s.clip());
                this.pendingClip = null;
              }
              this.current.startNewPathAndClipBox(this.current.clipBox);
              s.beginPath();
            }
          }, {
            key: "getSinglePixelWidth",
            value: function getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                var _t51 = this.ctx.mozCurrentTransform;
                if (0 === _t51[1] && 0 === _t51[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(_t51[0]), Math.abs(_t51[3]));else {
                  var _e40 = Math.abs(_t51[0] * _t51[3] - _t51[2] * _t51[1]),
                    _s41 = Math.hypot(_t51[0], _t51[2]),
                    _n30 = Math.hypot(_t51[1], _t51[3]);
                  this._cachedGetSinglePixelWidth = Math.max(_s41, _n30) / _e40;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
          }, {
            key: "getScaleForStroking",
            value: function getScaleForStroking() {
              if (!this._cachedScaleForStroking) {
                var _t52 = this.current.lineWidth,
                  _e41 = this.ctx.mozCurrentTransform;
                var _s42, _n31;
                if (0 === _e41[1] && 0 === _e41[2]) {
                  var _r21 = Math.abs(_e41[0]),
                    _a18 = Math.abs(_e41[3]);
                  if (0 === _t52) {
                    _s42 = 1 / _r21;
                    _n31 = 1 / _a18;
                  } else {
                    var _e42 = _r21 * _t52,
                      _i15 = _a18 * _t52;
                    _s42 = _e42 < 1 ? 1 / _e42 : 1;
                    _n31 = _i15 < 1 ? 1 / _i15 : 1;
                  }
                } else {
                  var _r22 = Math.abs(_e41[0] * _e41[3] - _e41[2] * _e41[1]),
                    _a19 = Math.hypot(_e41[0], _e41[1]),
                    _i16 = Math.hypot(_e41[2], _e41[3]);
                  if (0 === _t52) {
                    _s42 = _i16 / _r22;
                    _n31 = _a19 / _r22;
                  } else {
                    var _e43 = _t52 * _r22;
                    _s42 = _i16 > _e43 ? _i16 / _e43 : 1;
                    _n31 = _a19 > _e43 ? _a19 / _e43 : 1;
                  }
                }
                this._cachedScaleForStroking = [_s42, _n31];
              }
              return this._cachedScaleForStroking;
            }
          }, {
            key: "rescaleAndStroke",
            value: function rescaleAndStroke(t) {
              var e = this.ctx,
                s = this.current.lineWidth,
                _this$getScaleForStro = this.getScaleForStroking(),
                _this$getScaleForStro2 = _slicedToArray(_this$getScaleForStro, 2),
                n = _this$getScaleForStro2[0],
                r = _this$getScaleForStro2[1];
              e.lineWidth = s || 1;
              if (1 === n && 1 === r) {
                e.stroke();
                return;
              }
              var a, i, o;
              if (t) {
                a = e.mozCurrentTransform.slice();
                i = e.getLineDash().slice();
                o = e.lineDashOffset;
              }
              e.scale(n, r);
              var l = Math.max(n, r);
              e.setLineDash(e.getLineDash().map(function (t) {
                return t / l;
              }));
              e.lineDashOffset /= l;
              e.stroke();
              if (t) {
                e.setTransform.apply(e, _toConsumableArray(a));
                e.setLineDash(i);
                e.lineDashOffset = o;
              }
            }
          }, {
            key: "getCanvasPosition",
            value: function getCanvasPosition(t, e) {
              var s = this.ctx.mozCurrentTransform;
              return [s[0] * t + s[2] * e + s[4], s[1] * t + s[3] * e + s[5]];
            }
          }, {
            key: "isContentVisible",
            value: function isContentVisible() {
              for (var _t53 = this.markedContentStack.length - 1; _t53 >= 0; _t53--) if (!this.markedContentStack[_t53].visible) return !1;
              return !0;
            }
          }]);
        }();
        e.CanvasGraphics = CanvasGraphics;
        for (var _t54 in n.OPS) void 0 !== CanvasGraphics.prototype[_t54] && (CanvasGraphics.prototype[n.OPS[_t54]] = CanvasGraphics.prototype[_t54]);
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.TilingPattern = e.PathType = void 0;
        e.getShadingPattern = function getShadingPattern(t) {
          switch (t[0]) {
            case "RadialAxial":
              return new RadialAxialShadingPattern(t);
            case "Mesh":
              return new MeshShadingPattern(t);
            case "Dummy":
              return new DummyShadingPattern();
          }
          throw new Error("Unknown IR type: ".concat(t[0]));
        };
        var n = s(1),
          r = s(3);
        var a = {
          FILL: "Fill",
          STROKE: "Stroke",
          SHADING: "Shading"
        };
        e.PathType = a;
        function applyBoundingBox(t, e) {
          if (!e || r.isNodeJS) return;
          var s = e[2] - e[0],
            n = e[3] - e[1],
            a = new Path2D();
          a.rect(e[0], e[1], s, n);
          t.clip(a);
        }
        var BaseShadingPattern = /*#__PURE__*/function () {
          function BaseShadingPattern() {
            _classCallCheck(this, BaseShadingPattern);
            this.constructor === BaseShadingPattern && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
          }
          return _createClass(BaseShadingPattern, [{
            key: "getPattern",
            value: function getPattern() {
              (0, n.unreachable)("Abstract method `getPattern` called.");
            }
          }]);
        }();
        var RadialAxialShadingPattern = /*#__PURE__*/function (_BaseShadingPattern) {
          function RadialAxialShadingPattern(t) {
            var _this27;
            _classCallCheck(this, RadialAxialShadingPattern);
            _this27 = _callSuper(this, RadialAxialShadingPattern);
            _this27._type = t[1];
            _this27._bbox = t[2];
            _this27._colorStops = t[3];
            _this27._p0 = t[4];
            _this27._p1 = t[5];
            _this27._r0 = t[6];
            _this27._r1 = t[7];
            _this27.matrix = null;
            return _this27;
          }
          _inherits(RadialAxialShadingPattern, _BaseShadingPattern);
          return _createClass(RadialAxialShadingPattern, [{
            key: "_createGradient",
            value: function _createGradient(t) {
              var e;
              "axial" === this._type ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
              var _iterator30 = _createForOfIteratorHelper(this._colorStops),
                _step30;
              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var _t55 = _step30.value;
                  e.addColorStop(_t55[0], _t55[1]);
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }
              return e;
            }
          }, {
            key: "getPattern",
            value: function getPattern(t, e, s, r) {
              var i;
              if (r === a.STROKE || r === a.FILL) {
                var _a20 = e.current.getClippedPathBoundingBox(r, t.mozCurrentTransform) || [0, 0, 0, 0],
                  _o8 = Math.ceil(_a20[2] - _a20[0]) || 1,
                  l = Math.ceil(_a20[3] - _a20[1]) || 1,
                  c = e.cachedCanvases.getCanvas("pattern", _o8, l, !0),
                  h = c.context;
                h.clearRect(0, 0, h.canvas.width, h.canvas.height);
                h.beginPath();
                h.rect(0, 0, h.canvas.width, h.canvas.height);
                h.translate(-_a20[0], -_a20[1]);
                s = n.Util.transform(s, [1, 0, 0, 1, _a20[0], _a20[1]]);
                h.transform.apply(h, e.baseTransform);
                this.matrix && h.transform.apply(h, this.matrix);
                applyBoundingBox(h, this._bbox);
                h.fillStyle = this._createGradient(h);
                h.fill();
                i = t.createPattern(c.canvas, "no-repeat");
                var d = new DOMMatrix(s);
                try {
                  i.setTransform(d);
                } catch (t) {
                  (0, n.warn)("RadialAxialShadingPattern.getPattern: \"".concat(t === null || t === void 0 ? void 0 : t.message, "\"."));
                }
              } else {
                applyBoundingBox(t, this._bbox);
                i = this._createGradient(t);
              }
              return i;
            }
          }]);
        }(BaseShadingPattern);
        function drawTriangle(t, e, s, n, r, a, i, o) {
          var l = e.coords,
            c = e.colors,
            h = t.data,
            d = 4 * t.width;
          var u;
          if (l[s + 1] > l[n + 1]) {
            u = s;
            s = n;
            n = u;
            u = a;
            a = i;
            i = u;
          }
          if (l[n + 1] > l[r + 1]) {
            u = n;
            n = r;
            r = u;
            u = i;
            i = o;
            o = u;
          }
          if (l[s + 1] > l[n + 1]) {
            u = s;
            s = n;
            n = u;
            u = a;
            a = i;
            i = u;
          }
          var p = (l[s] + e.offsetX) * e.scaleX,
            f = (l[s + 1] + e.offsetY) * e.scaleY,
            g = (l[n] + e.offsetX) * e.scaleX,
            m = (l[n + 1] + e.offsetY) * e.scaleY,
            _ = (l[r] + e.offsetX) * e.scaleX,
            A = (l[r + 1] + e.offsetY) * e.scaleY;
          if (f >= A) return;
          var b = c[a],
            y = c[a + 1],
            S = c[a + 2],
            x = c[i],
            v = c[i + 1],
            C = c[i + 2],
            P = c[o],
            w = c[o + 1],
            k = c[o + 2],
            T = Math.round(f),
            F = Math.round(A);
          var R, E, M, D, O, I, L, N;
          for (var _t56 = T; _t56 <= F; _t56++) {
            if (_t56 < m) {
              var _e44 = void 0;
              _e44 = _t56 < f ? 0 : (f - _t56) / (f - m);
              R = p - (p - g) * _e44;
              E = b - (b - x) * _e44;
              M = y - (y - v) * _e44;
              D = S - (S - C) * _e44;
            } else {
              var _e45 = void 0;
              _e45 = _t56 > A ? 1 : m === A ? 0 : (m - _t56) / (m - A);
              R = g - (g - _) * _e45;
              E = x - (x - P) * _e45;
              M = v - (v - w) * _e45;
              D = C - (C - k) * _e45;
            }
            var _e46 = void 0;
            _e46 = _t56 < f ? 0 : _t56 > A ? 1 : (f - _t56) / (f - A);
            O = p - (p - _) * _e46;
            I = b - (b - P) * _e46;
            L = y - (y - w) * _e46;
            N = S - (S - k) * _e46;
            var _s43 = Math.round(Math.min(R, O)),
              _n32 = Math.round(Math.max(R, O));
            var _r23 = d * _t56 + 4 * _s43;
            for (var _t57 = _s43; _t57 <= _n32; _t57++) {
              _e46 = (R - _t57) / (R - O);
              _e46 < 0 ? _e46 = 0 : _e46 > 1 && (_e46 = 1);
              h[_r23++] = E - (E - I) * _e46 | 0;
              h[_r23++] = M - (M - L) * _e46 | 0;
              h[_r23++] = D - (D - N) * _e46 | 0;
              h[_r23++] = 255;
            }
          }
        }
        function drawFigure(t, e, s) {
          var n = e.coords,
            r = e.colors;
          var a, i;
          switch (e.type) {
            case "lattice":
              var _o9 = e.verticesPerRow,
                l = Math.floor(n.length / _o9) - 1,
                c = _o9 - 1;
              for (a = 0; a < l; a++) {
                var _e47 = a * _o9;
                for (var _a21 = 0; _a21 < c; _a21++, _e47++) {
                  drawTriangle(t, s, n[_e47], n[_e47 + 1], n[_e47 + _o9], r[_e47], r[_e47 + 1], r[_e47 + _o9]);
                  drawTriangle(t, s, n[_e47 + _o9 + 1], n[_e47 + 1], n[_e47 + _o9], r[_e47 + _o9 + 1], r[_e47 + 1], r[_e47 + _o9]);
                }
              }
              break;
            case "triangles":
              for (a = 0, i = n.length; a < i; a += 3) drawTriangle(t, s, n[a], n[a + 1], n[a + 2], r[a], r[a + 1], r[a + 2]);
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        var MeshShadingPattern = /*#__PURE__*/function (_BaseShadingPattern2) {
          function MeshShadingPattern(t) {
            var _this28;
            _classCallCheck(this, MeshShadingPattern);
            _this28 = _callSuper(this, MeshShadingPattern);
            _this28._coords = t[2];
            _this28._colors = t[3];
            _this28._figures = t[4];
            _this28._bounds = t[5];
            _this28._bbox = t[7];
            _this28._background = t[8];
            _this28.matrix = null;
            return _this28;
          }
          _inherits(MeshShadingPattern, _BaseShadingPattern2);
          return _createClass(MeshShadingPattern, [{
            key: "_createMeshCanvas",
            value: function _createMeshCanvas(t, e, s) {
              var n = Math.floor(this._bounds[0]),
                r = Math.floor(this._bounds[1]),
                a = Math.ceil(this._bounds[2]) - n,
                i = Math.ceil(this._bounds[3]) - r,
                o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(i * t[1] * 1.1)), 3e3),
                c = a / o,
                h = i / l,
                d = {
                  coords: this._coords,
                  colors: this._colors,
                  offsetX: -n,
                  offsetY: -r,
                  scaleX: 1 / c,
                  scaleY: 1 / h
                },
                u = o + 4,
                p = l + 4,
                f = s.getCanvas("mesh", u, p, !1),
                g = f.context,
                m = g.createImageData(o, l);
              if (e) {
                var _t58 = m.data;
                for (var _s44 = 0, _n33 = _t58.length; _s44 < _n33; _s44 += 4) {
                  _t58[_s44] = e[0];
                  _t58[_s44 + 1] = e[1];
                  _t58[_s44 + 2] = e[2];
                  _t58[_s44 + 3] = 255;
                }
              }
              var _iterator31 = _createForOfIteratorHelper(this._figures),
                _step31;
              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _t59 = _step31.value;
                  drawFigure(m, _t59, d);
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
              g.putImageData(m, 2, 2);
              return {
                canvas: f.canvas,
                offsetX: n - 2 * c,
                offsetY: r - 2 * h,
                scaleX: c,
                scaleY: h
              };
            }
          }, {
            key: "getPattern",
            value: function getPattern(t, e, s, r) {
              applyBoundingBox(t, this._bbox);
              var i;
              if (r === a.SHADING) i = n.Util.singularValueDecompose2dScale(t.mozCurrentTransform);else {
                i = n.Util.singularValueDecompose2dScale(e.baseTransform);
                if (this.matrix) {
                  var _t60 = n.Util.singularValueDecompose2dScale(this.matrix);
                  i = [i[0] * _t60[0], i[1] * _t60[1]];
                }
              }
              var o = this._createMeshCanvas(i, r === a.SHADING ? null : this._background, e.cachedCanvases);
              if (r !== a.SHADING) {
                t.setTransform.apply(t, e.baseTransform);
                this.matrix && t.transform.apply(t, this.matrix);
              }
              t.translate(o.offsetX, o.offsetY);
              t.scale(o.scaleX, o.scaleY);
              return t.createPattern(o.canvas, "no-repeat");
            }
          }]);
        }(BaseShadingPattern);
        var DummyShadingPattern = /*#__PURE__*/function (_BaseShadingPattern3) {
          function DummyShadingPattern() {
            _classCallCheck(this, DummyShadingPattern);
            return _callSuper(this, DummyShadingPattern, arguments);
          }
          _inherits(DummyShadingPattern, _BaseShadingPattern3);
          return _createClass(DummyShadingPattern, [{
            key: "getPattern",
            value: function getPattern() {
              return "hotpink";
            }
          }]);
        }(BaseShadingPattern);
        var i = 1,
          o = 2;
        var TilingPattern = /*#__PURE__*/function () {
          function TilingPattern(t, e, s, n, r) {
            _classCallCheck(this, TilingPattern);
            this.operatorList = t[2];
            this.matrix = t[3] || [1, 0, 0, 1, 0, 0];
            this.bbox = t[4];
            this.xstep = t[5];
            this.ystep = t[6];
            this.paintType = t[7];
            this.tilingType = t[8];
            this.color = e;
            this.ctx = s;
            this.canvasGraphicsFactory = n;
            this.baseTransform = r;
          }
          return _createClass(TilingPattern, [{
            key: "createPatternCanvas",
            value: function createPatternCanvas(t) {
              var e = this.operatorList,
                s = this.bbox,
                r = this.xstep,
                a = this.ystep,
                i = this.paintType,
                o = this.tilingType,
                l = this.color,
                c = this.canvasGraphicsFactory;
              (0, n.info)("TilingType: " + o);
              var h = s[0],
                d = s[1],
                u = s[2],
                p = s[3],
                f = n.Util.singularValueDecompose2dScale(this.matrix),
                g = n.Util.singularValueDecompose2dScale(this.baseTransform),
                m = [f[0] * g[0], f[1] * g[1]],
                _ = this.getSizeAndScale(r, this.ctx.canvas.width, m[0]),
                A = this.getSizeAndScale(a, this.ctx.canvas.height, m[1]),
                b = t.cachedCanvases.getCanvas("pattern", _.size, A.size, !0),
                y = b.context,
                S = c.createCanvasGraphics(y);
              S.groupLevel = t.groupLevel;
              this.setFillAndStrokeStyleToContext(S, i, l);
              var x = h,
                v = d,
                C = u,
                P = p;
              if (h < 0) {
                x = 0;
                C += Math.abs(h);
              }
              if (d < 0) {
                v = 0;
                P += Math.abs(d);
              }
              y.translate(-_.scale * x, -A.scale * v);
              S.transform(_.scale, 0, 0, A.scale, 0, 0);
              y.save();
              this.clipBbox(S, x, v, C, P);
              S.baseTransform = S.ctx.mozCurrentTransform.slice();
              S.executeOperatorList(e);
              S.endDrawing();
              return {
                canvas: b.canvas,
                scaleX: _.scale,
                scaleY: A.scale,
                offsetX: x,
                offsetY: v
              };
            }
          }, {
            key: "getSizeAndScale",
            value: function getSizeAndScale(t, e, s) {
              t = Math.abs(t);
              var n = Math.max(TilingPattern.MAX_PATTERN_SIZE, e);
              var r = Math.ceil(t * s);
              r >= n ? r = n : s = r / t;
              return {
                scale: s,
                size: r
              };
            }
          }, {
            key: "clipBbox",
            value: function clipBbox(t, e, s, n, r) {
              var a = n - e,
                i = r - s;
              t.ctx.rect(e, s, a, i);
              t.current.updateRectMinMax(t.ctx.mozCurrentTransform, [e, s, n, r]);
              t.clip();
              t.endPath();
            }
          }, {
            key: "setFillAndStrokeStyleToContext",
            value: function setFillAndStrokeStyleToContext(t, e, s) {
              var r = t.ctx,
                a = t.current;
              switch (e) {
                case i:
                  var _t61 = this.ctx;
                  r.fillStyle = _t61.fillStyle;
                  r.strokeStyle = _t61.strokeStyle;
                  a.fillColor = _t61.fillStyle;
                  a.strokeColor = _t61.strokeStyle;
                  break;
                case o:
                  var l = n.Util.makeHexColor(s[0], s[1], s[2]);
                  r.fillStyle = l;
                  r.strokeStyle = l;
                  a.fillColor = l;
                  a.strokeColor = l;
                  break;
                default:
                  throw new n.FormatError("Unsupported paint type: ".concat(e));
              }
            }
          }, {
            key: "getPattern",
            value: function getPattern(t, e, s, r) {
              var i = s;
              if (r !== a.SHADING) {
                i = n.Util.transform(i, e.baseTransform);
                this.matrix && (i = n.Util.transform(i, this.matrix));
              }
              var o = this.createPatternCanvas(e);
              var l = new DOMMatrix(i);
              l = l.translate(o.offsetX, o.offsetY);
              l = l.scale(1 / o.scaleX, 1 / o.scaleY);
              var c = t.createPattern(o.canvas, "repeat");
              try {
                c.setTransform(l);
              } catch (t) {
                (0, n.warn)("TilingPattern.getPattern: \"".concat(t === null || t === void 0 ? void 0 : t.message, "\"."));
              }
              return c;
            }
          }], [{
            key: "MAX_PATTERN_SIZE",
            get: function get() {
              return (0, n.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
            }
          }]);
        }();
        e.TilingPattern = TilingPattern;
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.applyMaskImageData = function applyMaskImageData(_ref40) {
          var t = _ref40.src,
            _ref40$srcPos = _ref40.srcPos,
            e = _ref40$srcPos === void 0 ? 0 : _ref40$srcPos,
            s = _ref40.dest,
            _ref40$destPos = _ref40.destPos,
            r = _ref40$destPos === void 0 ? 0 : _ref40$destPos,
            a = _ref40.width,
            i = _ref40.height,
            _ref40$inverseDecode = _ref40.inverseDecode,
            o = _ref40$inverseDecode === void 0 ? !1 : _ref40$inverseDecode;
          var l = n.FeatureTest.isLittleEndian ? 4278190080 : 255,
            _ref41 = o ? [0, l] : [l, 0],
            _ref42 = _slicedToArray(_ref41, 2),
            c = _ref42[0],
            h = _ref42[1],
            d = a >> 3,
            u = 7 & a,
            p = t.length;
          s = new Uint32Array(s.buffer);
          for (var _n34 = 0; _n34 < i; _n34++) {
            for (var _n35 = e + d; e < _n35; e++) {
              var _n36 = e < p ? t[e] : 255;
              s[r++] = 128 & _n36 ? h : c;
              s[r++] = 64 & _n36 ? h : c;
              s[r++] = 32 & _n36 ? h : c;
              s[r++] = 16 & _n36 ? h : c;
              s[r++] = 8 & _n36 ? h : c;
              s[r++] = 4 & _n36 ? h : c;
              s[r++] = 2 & _n36 ? h : c;
              s[r++] = 1 & _n36 ? h : c;
            }
            if (0 === u) continue;
            var _n37 = e < p ? t[e++] : 255;
            for (var _t62 = 0; _t62 < u; _t62++) s[r++] = _n37 & 1 << 7 - _t62 ? h : c;
          }
          return {
            srcPos: e,
            destPos: r
          };
        };
        var n = s(1);
      }, function (t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.GlobalWorkerOptions = void 0;
        var s = Object.create(null);
        e.GlobalWorkerOptions = s;
        s.workerPort = void 0 === s.workerPort ? null : s.workerPort;
        s.workerSrc = void 0 === s.workerSrc ? "" : s.workerSrc;
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.MessageHandler = void 0;
        var n = s(1);
        var r = 1,
          a = 2,
          i = 1,
          o = 2,
          l = 3,
          c = 4,
          h = 5,
          d = 6,
          u = 7,
          p = 8;
        function wrapReason(t) {
          t instanceof Error || "object" == typeof t && null !== t || (0, n.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
          switch (t.name) {
            case "AbortException":
              return new n.AbortException(t.message);
            case "MissingPDFException":
              return new n.MissingPDFException(t.message);
            case "PasswordException":
              return new n.PasswordException(t.message, t.code);
            case "UnexpectedResponseException":
              return new n.UnexpectedResponseException(t.message, t.status);
            case "UnknownErrorException":
              return new n.UnknownErrorException(t.message, t.details);
            default:
              return new n.UnknownErrorException(t.message, t.toString());
          }
        }
        e.MessageHandler = /*#__PURE__*/function () {
          function MessageHandler(t, e, s) {
            var _this29 = this;
            _classCallCheck(this, MessageHandler);
            this.sourceName = t;
            this.targetName = e;
            this.comObj = s;
            this.callbackId = 1;
            this.streamId = 1;
            this.streamSinks = Object.create(null);
            this.streamControllers = Object.create(null);
            this.callbackCapabilities = Object.create(null);
            this.actionHandler = Object.create(null);
            this._onComObjOnMessage = function (t) {
              var e = t.data;
              if (e.targetName !== _this29.sourceName) return;
              if (e.stream) {
                _this29._processStreamMessage(e);
                return;
              }
              if (e.callback) {
                var _t63 = e.callbackId,
                  _s45 = _this29.callbackCapabilities[_t63];
                if (!_s45) throw new Error("Cannot resolve callback ".concat(_t63));
                delete _this29.callbackCapabilities[_t63];
                if (e.callback === r) _s45.resolve(e.data);else {
                  if (e.callback !== a) throw new Error("Unexpected callback case");
                  _s45.reject(wrapReason(e.reason));
                }
                return;
              }
              var n = _this29.actionHandler[e.action];
              if (!n) throw new Error("Unknown action from worker: ".concat(e.action));
              if (e.callbackId) {
                var _t64 = _this29.sourceName,
                  _i17 = e.sourceName;
                new Promise(function (t) {
                  t(n(e.data));
                }).then(function (n) {
                  s.postMessage({
                    sourceName: _t64,
                    targetName: _i17,
                    callback: r,
                    callbackId: e.callbackId,
                    data: n
                  });
                }, function (n) {
                  s.postMessage({
                    sourceName: _t64,
                    targetName: _i17,
                    callback: a,
                    callbackId: e.callbackId,
                    reason: wrapReason(n)
                  });
                });
              } else e.streamId ? _this29._createStreamSink(e) : n(e.data);
            };
            s.addEventListener("message", this._onComObjOnMessage);
          }
          return _createClass(MessageHandler, [{
            key: "on",
            value: function on(t, e) {
              var s = this.actionHandler;
              if (s[t]) throw new Error("There is already an actionName called \"".concat(t, "\""));
              s[t] = e;
            }
          }, {
            key: "send",
            value: function send(t, e, s) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: t,
                data: e
              }, s);
            }
          }, {
            key: "sendWithPromise",
            value: function sendWithPromise(t, e, s) {
              var r = this.callbackId++,
                a = (0, n.createPromiseCapability)();
              this.callbackCapabilities[r] = a;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: t,
                  callbackId: r,
                  data: e
                }, s);
              } catch (t) {
                a.reject(t);
              }
              return a.promise;
            }
          }, {
            key: "sendWithStream",
            value: function sendWithStream(t, e, s, r) {
              var _this30 = this;
              var a = this.streamId++,
                o = this.sourceName,
                l = this.targetName,
                c = this.comObj;
              return new ReadableStream({
                start: function start(s) {
                  var i = (0, n.createPromiseCapability)();
                  _this30.streamControllers[a] = {
                    controller: s,
                    startCall: i,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                  };
                  c.postMessage({
                    sourceName: o,
                    targetName: l,
                    action: t,
                    streamId: a,
                    data: e,
                    desiredSize: s.desiredSize
                  }, r);
                  return i.promise;
                },
                pull: function pull(t) {
                  var e = (0, n.createPromiseCapability)();
                  _this30.streamControllers[a].pullCall = e;
                  c.postMessage({
                    sourceName: o,
                    targetName: l,
                    stream: d,
                    streamId: a,
                    desiredSize: t.desiredSize
                  });
                  return e.promise;
                },
                cancel: function cancel(t) {
                  (0, n.assert)(t instanceof Error, "cancel must have a valid reason");
                  var e = (0, n.createPromiseCapability)();
                  _this30.streamControllers[a].cancelCall = e;
                  _this30.streamControllers[a].isClosed = !0;
                  c.postMessage({
                    sourceName: o,
                    targetName: l,
                    stream: i,
                    streamId: a,
                    reason: wrapReason(t)
                  });
                  return e.promise;
                }
              }, s);
            }
          }, {
            key: "_createStreamSink",
            value: function _createStreamSink(t) {
              var e = t.streamId,
                s = this.sourceName,
                r = t.sourceName,
                a = this.comObj,
                i = this,
                o = this.actionHandler[t.action],
                d = {
                  enqueue: function enqueue(t) {
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                    var o = arguments.length > 2 ? arguments[2] : undefined;
                    if (this.isCancelled) return;
                    var l = this.desiredSize;
                    this.desiredSize -= i;
                    if (l > 0 && this.desiredSize <= 0) {
                      this.sinkCapability = (0, n.createPromiseCapability)();
                      this.ready = this.sinkCapability.promise;
                    }
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: c,
                      streamId: e,
                      chunk: t
                    }, o);
                  },
                  close: function close() {
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: s,
                        targetName: r,
                        stream: l,
                        streamId: e
                      });
                      delete i.streamSinks[e];
                    }
                  },
                  error: function error(t) {
                    (0, n.assert)(t instanceof Error, "error must have a valid reason");
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: s,
                        targetName: r,
                        stream: h,
                        streamId: e,
                        reason: wrapReason(t)
                      });
                    }
                  },
                  sinkCapability: (0, n.createPromiseCapability)(),
                  onPull: null,
                  onCancel: null,
                  isCancelled: !1,
                  desiredSize: t.desiredSize,
                  ready: null
                };
              d.sinkCapability.resolve();
              d.ready = d.sinkCapability.promise;
              this.streamSinks[e] = d;
              new Promise(function (e) {
                e(o(t.data, d));
              }).then(function () {
                a.postMessage({
                  sourceName: s,
                  targetName: r,
                  stream: p,
                  streamId: e,
                  success: !0
                });
              }, function (t) {
                a.postMessage({
                  sourceName: s,
                  targetName: r,
                  stream: p,
                  streamId: e,
                  reason: wrapReason(t)
                });
              });
            }
          }, {
            key: "_processStreamMessage",
            value: function _processStreamMessage(t) {
              var e = t.streamId,
                s = this.sourceName,
                r = t.sourceName,
                a = this.comObj,
                f = this.streamControllers[e],
                g = this.streamSinks[e];
              switch (t.stream) {
                case p:
                  t.success ? f.startCall.resolve() : f.startCall.reject(wrapReason(t.reason));
                  break;
                case u:
                  t.success ? f.pullCall.resolve() : f.pullCall.reject(wrapReason(t.reason));
                  break;
                case d:
                  if (!g) {
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: u,
                      streamId: e,
                      success: !0
                    });
                    break;
                  }
                  g.desiredSize <= 0 && t.desiredSize > 0 && g.sinkCapability.resolve();
                  g.desiredSize = t.desiredSize;
                  new Promise(function (t) {
                    t(g.onPull && g.onPull());
                  }).then(function () {
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: u,
                      streamId: e,
                      success: !0
                    });
                  }, function (t) {
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: u,
                      streamId: e,
                      reason: wrapReason(t)
                    });
                  });
                  break;
                case c:
                  (0, n.assert)(f, "enqueue should have stream controller");
                  if (f.isClosed) break;
                  f.controller.enqueue(t.chunk);
                  break;
                case l:
                  (0, n.assert)(f, "close should have stream controller");
                  if (f.isClosed) break;
                  f.isClosed = !0;
                  f.controller.close();
                  this._deleteStreamController(f, e);
                  break;
                case h:
                  (0, n.assert)(f, "error should have stream controller");
                  f.controller.error(wrapReason(t.reason));
                  this._deleteStreamController(f, e);
                  break;
                case o:
                  t.success ? f.cancelCall.resolve() : f.cancelCall.reject(wrapReason(t.reason));
                  this._deleteStreamController(f, e);
                  break;
                case i:
                  if (!g) break;
                  new Promise(function (e) {
                    e(g.onCancel && g.onCancel(wrapReason(t.reason)));
                  }).then(function () {
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: o,
                      streamId: e,
                      success: !0
                    });
                  }, function (t) {
                    a.postMessage({
                      sourceName: s,
                      targetName: r,
                      stream: o,
                      streamId: e,
                      reason: wrapReason(t)
                    });
                  });
                  g.sinkCapability.reject(wrapReason(t.reason));
                  g.isCancelled = !0;
                  delete this.streamSinks[e];
                  break;
                default:
                  throw new Error("Unexpected stream case");
              }
            }
          }, {
            key: "_deleteStreamController",
            value: function () {
              var _deleteStreamController2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(t, e) {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return Promise.allSettled([t.startCall && t.startCall.promise, t.pullCall && t.pullCall.promise, t.cancelCall && t.cancelCall.promise]);
                    case 2:
                      delete this.streamControllers[e];
                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, this);
              }));
              function _deleteStreamController(_x10, _x11) {
                return _deleteStreamController2.apply(this, arguments);
              }
              return _deleteStreamController;
            }()
          }, {
            key: "destroy",
            value: function destroy() {
              this.comObj.removeEventListener("message", this._onComObjOnMessage);
            }
          }]);
        }();
      }, function (t, e, s) {
        var _c5, _h6;
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.Metadata = void 0;
        var n = s(1);
        e.Metadata = (_c5 = /*#__PURE__*/new WeakMap(), _h6 = /*#__PURE__*/new WeakMap(), /*#__PURE__*/function () {
          function Metadata(_ref43) {
            var t = _ref43.parsedData,
              e = _ref43.rawData;
            _classCallCheck(this, Metadata);
            _classPrivateFieldInitSpec(this, _c5, void 0);
            _classPrivateFieldInitSpec(this, _h6, void 0);
            _classPrivateFieldSet(_c5, this, t);
            _classPrivateFieldSet(_h6, this, e);
          }
          return _createClass(Metadata, [{
            key: "getRaw",
            value: function getRaw() {
              return _classPrivateFieldGet(_h6, this);
            }
          }, {
            key: "get",
            value: function get(t) {
              var _classPrivateFieldGet3;
              return (_classPrivateFieldGet3 = _classPrivateFieldGet(_c5, this).get(t)) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : null;
            }
          }, {
            key: "getAll",
            value: function getAll() {
              return (0, n.objectFromMap)(_classPrivateFieldGet(_c5, this));
            }
          }, {
            key: "has",
            value: function has(t) {
              return _classPrivateFieldGet(_c5, this).has(t);
            }
          }]);
        }());
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.OptionalContentConfig = void 0;
        var n = s(1);
        var OptionalContentGroup = /*#__PURE__*/_createClass(function OptionalContentGroup(t, e) {
          _classCallCheck(this, OptionalContentGroup);
          this.visible = !0;
          this.name = t;
          this.intent = e;
        });
        e.OptionalContentConfig = /*#__PURE__*/function () {
          function OptionalContentConfig(t) {
            _classCallCheck(this, OptionalContentConfig);
            this.name = null;
            this.creator = null;
            this._order = null;
            this._groups = new Map();
            if (null !== t) {
              this.name = t.name;
              this.creator = t.creator;
              this._order = t.order;
              var _iterator32 = _createForOfIteratorHelper(t.groups),
                _step32;
              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _e48 = _step32.value;
                  this._groups.set(_e48.id, new OptionalContentGroup(_e48.name, _e48.intent));
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }
              if ("OFF" === t.baseState) {
                var _iterator33 = _createForOfIteratorHelper(this._groups),
                  _step33;
                try {
                  for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var _t65 = _step33.value;
                    _t65.visible = !1;
                  }
                } catch (err) {
                  _iterator33.e(err);
                } finally {
                  _iterator33.f();
                }
              }
              var _iterator34 = _createForOfIteratorHelper(t.on),
                _step34;
              try {
                for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                  var _e49 = _step34.value;
                  this._groups.get(_e49).visible = !0;
                }
              } catch (err) {
                _iterator34.e(err);
              } finally {
                _iterator34.f();
              }
              var _iterator35 = _createForOfIteratorHelper(t.off),
                _step35;
              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var _e50 = _step35.value;
                  this._groups.get(_e50).visible = !1;
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            }
          }
          return _createClass(OptionalContentConfig, [{
            key: "_evaluateVisibilityExpression",
            value: function _evaluateVisibilityExpression(t) {
              var e = t.length;
              if (e < 2) return !0;
              var s = t[0];
              for (var r = 1; r < e; r++) {
                var _e51 = t[r];
                var a = void 0;
                if (Array.isArray(_e51)) a = this._evaluateVisibilityExpression(_e51);else {
                  if (!this._groups.has(_e51)) {
                    (0, n.warn)("Optional content group not found: ".concat(_e51));
                    return !0;
                  }
                  a = this._groups.get(_e51).visible;
                }
                switch (s) {
                  case "And":
                    if (!a) return !1;
                    break;
                  case "Or":
                    if (a) return !0;
                    break;
                  case "Not":
                    return !a;
                  default:
                    return !0;
                }
              }
              return "And" === s;
            }
          }, {
            key: "isVisible",
            value: function isVisible(t) {
              if (0 === this._groups.size) return !0;
              if (!t) {
                (0, n.warn)("Optional content group not defined.");
                return !0;
              }
              if ("OCG" === t.type) {
                if (!this._groups.has(t.id)) {
                  (0, n.warn)("Optional content group not found: ".concat(t.id));
                  return !0;
                }
                return this._groups.get(t.id).visible;
              }
              if ("OCMD" === t.type) {
                if (t.expression) return this._evaluateVisibilityExpression(t.expression);
                if (!t.policy || "AnyOn" === t.policy) {
                  var _iterator36 = _createForOfIteratorHelper(t.ids),
                    _step36;
                  try {
                    for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                      var _e52 = _step36.value;
                      if (!this._groups.has(_e52)) {
                        (0, n.warn)("Optional content group not found: ".concat(_e52));
                        return !0;
                      }
                      if (this._groups.get(_e52).visible) return !0;
                    }
                  } catch (err) {
                    _iterator36.e(err);
                  } finally {
                    _iterator36.f();
                  }
                  return !1;
                }
                if ("AllOn" === t.policy) {
                  var _iterator37 = _createForOfIteratorHelper(t.ids),
                    _step37;
                  try {
                    for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                      var _e53 = _step37.value;
                      if (!this._groups.has(_e53)) {
                        (0, n.warn)("Optional content group not found: ".concat(_e53));
                        return !0;
                      }
                      if (!this._groups.get(_e53).visible) return !1;
                    }
                  } catch (err) {
                    _iterator37.e(err);
                  } finally {
                    _iterator37.f();
                  }
                  return !0;
                }
                if ("AnyOff" === t.policy) {
                  var _iterator38 = _createForOfIteratorHelper(t.ids),
                    _step38;
                  try {
                    for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                      var _e54 = _step38.value;
                      if (!this._groups.has(_e54)) {
                        (0, n.warn)("Optional content group not found: ".concat(_e54));
                        return !0;
                      }
                      if (!this._groups.get(_e54).visible) return !0;
                    }
                  } catch (err) {
                    _iterator38.e(err);
                  } finally {
                    _iterator38.f();
                  }
                  return !1;
                }
                if ("AllOff" === t.policy) {
                  var _iterator39 = _createForOfIteratorHelper(t.ids),
                    _step39;
                  try {
                    for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                      var _e55 = _step39.value;
                      if (!this._groups.has(_e55)) {
                        (0, n.warn)("Optional content group not found: ".concat(_e55));
                        return !0;
                      }
                      if (this._groups.get(_e55).visible) return !1;
                    }
                  } catch (err) {
                    _iterator39.e(err);
                  } finally {
                    _iterator39.f();
                  }
                  return !0;
                }
                (0, n.warn)("Unknown optional content policy ".concat(t.policy, "."));
                return !0;
              }
              (0, n.warn)("Unknown group type ".concat(t.type, "."));
              return !0;
            }
          }, {
            key: "setVisibility",
            value: function setVisibility(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              this._groups.has(t) ? this._groups.get(t).visible = !!e : (0, n.warn)("Optional content group not found: ".concat(t));
            }
          }, {
            key: "getOrder",
            value: function getOrder() {
              return this._groups.size ? this._order ? this._order.slice() : Array.from(this._groups.keys()) : null;
            }
          }, {
            key: "getGroups",
            value: function getGroups() {
              return this._groups.size > 0 ? (0, n.objectFromMap)(this._groups) : null;
            }
          }, {
            key: "getGroup",
            value: function getGroup(t) {
              return this._groups.get(t) || null;
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.PDFDataTransportStream = void 0;
        var n = s(1),
          r = s(5);
        e.PDFDataTransportStream = /*#__PURE__*/function () {
          function PDFDataTransportStream(t, e) {
            var _this31 = this;
            _classCallCheck(this, PDFDataTransportStream);
            (0, n.assert)(e, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
            this._queuedChunks = [];
            this._progressiveDone = t.progressiveDone || !1;
            this._contentDispositionFilename = t.contentDispositionFilename || null;
            var s = t.initialData;
            if ((s === null || s === void 0 ? void 0 : s.length) > 0) {
              var _t66 = new Uint8Array(s).buffer;
              this._queuedChunks.push(_t66);
            }
            this._pdfDataRangeTransport = e;
            this._isStreamingSupported = !t.disableStream;
            this._isRangeSupported = !t.disableRange;
            this._contentLength = t.length;
            this._fullRequestReader = null;
            this._rangeReaders = [];
            this._pdfDataRangeTransport.addRangeListener(function (t, e) {
              _this31._onReceiveData({
                begin: t,
                chunk: e
              });
            });
            this._pdfDataRangeTransport.addProgressListener(function (t, e) {
              _this31._onProgress({
                loaded: t,
                total: e
              });
            });
            this._pdfDataRangeTransport.addProgressiveReadListener(function (t) {
              _this31._onReceiveData({
                chunk: t
              });
            });
            this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
              _this31._onProgressiveDone();
            });
            this._pdfDataRangeTransport.transportReady();
          }
          return _createClass(PDFDataTransportStream, [{
            key: "_onReceiveData",
            value: function _onReceiveData(t) {
              var e = new Uint8Array(t.chunk).buffer;
              if (void 0 === t.begin) this._fullRequestReader ? this._fullRequestReader._enqueue(e) : this._queuedChunks.push(e);else {
                var _s46 = this._rangeReaders.some(function (s) {
                  if (s._begin !== t.begin) return !1;
                  s._enqueue(e);
                  return !0;
                });
                (0, n.assert)(_s46, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
          }, {
            key: "_progressiveDataLength",
            get: function get() {
              var _this$_fullRequestRea, _this$_fullRequestRea2;
              return (_this$_fullRequestRea = (_this$_fullRequestRea2 = this._fullRequestReader) === null || _this$_fullRequestRea2 === void 0 ? void 0 : _this$_fullRequestRea2._loaded) !== null && _this$_fullRequestRea !== void 0 ? _this$_fullRequestRea : 0;
            }
          }, {
            key: "_onProgress",
            value: function _onProgress(t) {
              if (void 0 === t.total) {
                var _e56 = this._rangeReaders[0];
                (_e56 === null || _e56 === void 0 ? void 0 : _e56.onProgress) && _e56.onProgress({
                  loaded: t.loaded
                });
              } else {
                var _e57 = this._fullRequestReader;
                (_e57 === null || _e57 === void 0 ? void 0 : _e57.onProgress) && _e57.onProgress({
                  loaded: t.loaded,
                  total: t.total
                });
              }
            }
          }, {
            key: "_onProgressiveDone",
            value: function _onProgressiveDone() {
              this._fullRequestReader && this._fullRequestReader.progressiveDone();
              this._progressiveDone = !0;
            }
          }, {
            key: "_removeRangeReader",
            value: function _removeRangeReader(t) {
              var e = this._rangeReaders.indexOf(t);
              e >= 0 && this._rangeReaders.splice(e, 1);
            }
          }, {
            key: "getFullReader",
            value: function getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
              var t = this._queuedChunks;
              this._queuedChunks = null;
              return new PDFDataTransportStreamReader(this, t, this._progressiveDone, this._contentDispositionFilename);
            }
          }, {
            key: "getRangeReader",
            value: function getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              var s = new PDFDataTransportStreamRangeReader(this, t, e);
              this._pdfDataRangeTransport.requestDataRange(t, e);
              this._rangeReaders.push(s);
              return s;
            }
          }, {
            key: "cancelAllRequests",
            value: function cancelAllRequests(t) {
              this._fullRequestReader && this._fullRequestReader.cancel(t);
              var _iterator40 = _createForOfIteratorHelper(this._rangeReaders.slice(0)),
                _step40;
              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var _e58 = _step40.value;
                  _e58.cancel(t);
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
              this._pdfDataRangeTransport.abort();
            }
          }]);
        }();
        var PDFDataTransportStreamReader = /*#__PURE__*/function () {
          function PDFDataTransportStreamReader(t, e) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            _classCallCheck(this, PDFDataTransportStreamReader);
            this._stream = t;
            this._done = s || !1;
            this._filename = (0, r.isPdfFile)(n) ? n : null;
            this._queuedChunks = e || [];
            this._loaded = 0;
            var _iterator41 = _createForOfIteratorHelper(this._queuedChunks),
              _step41;
            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var _t67 = _step41.value;
                this._loaded += _t67.byteLength;
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
            this._requests = [];
            this._headersReady = Promise.resolve();
            t._fullRequestReader = this;
            this.onProgress = null;
          }
          return _createClass(PDFDataTransportStreamReader, [{
            key: "_enqueue",
            value: function _enqueue(t) {
              if (!this._done) {
                if (this._requests.length > 0) {
                  this._requests.shift().resolve({
                    value: t,
                    done: !1
                  });
                } else this._queuedChunks.push(t);
                this._loaded += t.byteLength;
              }
            }
          }, {
            key: "headersReady",
            get: function get() {
              return this._headersReady;
            }
          }, {
            key: "filename",
            get: function get() {
              return this._filename;
            }
          }, {
            key: "isRangeSupported",
            get: function get() {
              return this._stream._isRangeSupported;
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return this._stream._isStreamingSupported;
            }
          }, {
            key: "contentLength",
            get: function get() {
              return this._stream._contentLength;
            }
          }, {
            key: "read",
            value: function () {
              var _read = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                var t;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!(this._queuedChunks.length > 0)) {
                        _context13.next = 2;
                        break;
                      }
                      return _context13.abrupt("return", {
                        value: this._queuedChunks.shift(),
                        done: !1
                      });
                    case 2:
                      if (!this._done) {
                        _context13.next = 4;
                        break;
                      }
                      return _context13.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 4:
                      t = (0, n.createPromiseCapability)();
                      this._requests.push(t);
                      return _context13.abrupt("return", t.promise);
                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, this);
              }));
              function read() {
                return _read.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._done = !0;
              var _iterator42 = _createForOfIteratorHelper(this._requests),
                _step42;
              try {
                for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                  var _t68 = _step42.value;
                  _t68.resolve({
                    value: void 0,
                    done: !0
                  });
                }
              } catch (err) {
                _iterator42.e(err);
              } finally {
                _iterator42.f();
              }
              this._requests.length = 0;
            }
          }, {
            key: "progressiveDone",
            value: function progressiveDone() {
              this._done || (this._done = !0);
            }
          }]);
        }();
        var PDFDataTransportStreamRangeReader = /*#__PURE__*/function () {
          function PDFDataTransportStreamRangeReader(t, e, s) {
            _classCallCheck(this, PDFDataTransportStreamRangeReader);
            this._stream = t;
            this._begin = e;
            this._end = s;
            this._queuedChunk = null;
            this._requests = [];
            this._done = !1;
            this.onProgress = null;
          }
          return _createClass(PDFDataTransportStreamRangeReader, [{
            key: "_enqueue",
            value: function _enqueue(t) {
              if (!this._done) {
                if (0 === this._requests.length) this._queuedChunk = t;else {
                  this._requests.shift().resolve({
                    value: t,
                    done: !1
                  });
                  var _iterator43 = _createForOfIteratorHelper(this._requests),
                    _step43;
                  try {
                    for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                      var _t69 = _step43.value;
                      _t69.resolve({
                        value: void 0,
                        done: !0
                      });
                    }
                  } catch (err) {
                    _iterator43.e(err);
                  } finally {
                    _iterator43.f();
                  }
                  this._requests.length = 0;
                }
                this._done = !0;
                this._stream._removeRangeReader(this);
              }
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return !1;
            }
          }, {
            key: "read",
            value: function () {
              var _read2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                var _t70, t;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!this._queuedChunk) {
                        _context14.next = 4;
                        break;
                      }
                      _t70 = this._queuedChunk;
                      this._queuedChunk = null;
                      return _context14.abrupt("return", {
                        value: _t70,
                        done: !1
                      });
                    case 4:
                      if (!this._done) {
                        _context14.next = 6;
                        break;
                      }
                      return _context14.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 6:
                      t = (0, n.createPromiseCapability)();
                      this._requests.push(t);
                      return _context14.abrupt("return", t.promise);
                    case 9:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14, this);
              }));
              function read() {
                return _read2.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._done = !0;
              var _iterator44 = _createForOfIteratorHelper(this._requests),
                _step44;
              try {
                for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                  var _t71 = _step44.value;
                  _t71.resolve({
                    value: void 0,
                    done: !0
                  });
                }
              } catch (err) {
                _iterator44.e(err);
              } finally {
                _iterator44.f();
              }
              this._requests.length = 0;
              this._stream._removeRangeReader(this);
            }
          }]);
        }();
      }, function (t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.XfaText = void 0;
        var XfaText = /*#__PURE__*/function () {
          function XfaText() {
            _classCallCheck(this, XfaText);
          }
          return _createClass(XfaText, null, [{
            key: "textContent",
            value: function textContent(t) {
              var e = [],
                s = {
                  items: e,
                  styles: Object.create(null)
                };
              !function walk(t) {
                if (!t) return;
                var s = null;
                var n = t.name;
                if ("#text" === n) s = t.value;else {
                  var _t$attributes;
                  if (!XfaText.shouldBuildText(n)) return;
                  t !== null && t !== void 0 && (_t$attributes = t.attributes) !== null && _t$attributes !== void 0 && _t$attributes.textContent ? s = t.attributes.textContent : t.value && (s = t.value);
                }
                null !== s && e.push({
                  str: s
                });
                if (t.children) {
                  var _iterator45 = _createForOfIteratorHelper(t.children),
                    _step45;
                  try {
                    for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                      var _e59 = _step45.value;
                      walk(_e59);
                    }
                  } catch (err) {
                    _iterator45.e(err);
                  } finally {
                    _iterator45.f();
                  }
                }
              }(t);
              return s;
            }
          }, {
            key: "shouldBuildText",
            value: function shouldBuildText(t) {
              return !("textarea" === t || "input" === t || "option" === t || "select" === t);
            }
          }]);
        }();
        e.XfaText = XfaText;
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.NodeStandardFontDataFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
        var n = s(6);
        var fetchData = function fetchData(t) {
          return new Promise(function (e, s) {
            require("fs").readFile(t, function (t, n) {
              !t && n ? e(new Uint8Array(n)) : s(new Error(t));
            });
          });
        };
        var NodeCanvasFactory = /*#__PURE__*/function (_n$BaseCanvasFactory2) {
          function NodeCanvasFactory() {
            _classCallCheck(this, NodeCanvasFactory);
            return _callSuper(this, NodeCanvasFactory, arguments);
          }
          _inherits(NodeCanvasFactory, _n$BaseCanvasFactory2);
          return _createClass(NodeCanvasFactory, [{
            key: "_createCanvas",
            value: function _createCanvas(t, e) {
              return require("canvas").createCanvas(t, e);
            }
          }]);
        }(n.BaseCanvasFactory);
        e.NodeCanvasFactory = NodeCanvasFactory;
        var NodeCMapReaderFactory = /*#__PURE__*/function (_n$BaseCMapReaderFact2) {
          function NodeCMapReaderFactory() {
            _classCallCheck(this, NodeCMapReaderFactory);
            return _callSuper(this, NodeCMapReaderFactory, arguments);
          }
          _inherits(NodeCMapReaderFactory, _n$BaseCMapReaderFact2);
          return _createClass(NodeCMapReaderFactory, [{
            key: "_fetchData",
            value: function _fetchData(t, e) {
              return fetchData(t).then(function (t) {
                return {
                  cMapData: t,
                  compressionType: e
                };
              });
            }
          }]);
        }(n.BaseCMapReaderFactory);
        e.NodeCMapReaderFactory = NodeCMapReaderFactory;
        var NodeStandardFontDataFactory = /*#__PURE__*/function (_n$BaseStandardFontDa2) {
          function NodeStandardFontDataFactory() {
            _classCallCheck(this, NodeStandardFontDataFactory);
            return _callSuper(this, NodeStandardFontDataFactory, arguments);
          }
          _inherits(NodeStandardFontDataFactory, _n$BaseStandardFontDa2);
          return _createClass(NodeStandardFontDataFactory, [{
            key: "_fetchData",
            value: function _fetchData(t) {
              return fetchData(t);
            }
          }]);
        }(n.BaseStandardFontDataFactory);
        e.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
      }, function (t, e, s) {
        var _AnnotationLayer;
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.AnnotationLayer = void 0;
        var n = s(1),
          r = s(5),
          a = s(8),
          i = s(21),
          o = s(22);
        var l = 1e3,
          c = new WeakSet();
        function getRectDims(t) {
          return {
            width: t[2] - t[0],
            height: t[3] - t[1]
          };
        }
        var AnnotationElementFactory = /*#__PURE__*/function () {
          function AnnotationElementFactory() {
            _classCallCheck(this, AnnotationElementFactory);
          }
          return _createClass(AnnotationElementFactory, null, [{
            key: "create",
            value: function create(t) {
              switch (t.data.annotationType) {
                case n.AnnotationType.LINK:
                  return new LinkAnnotationElement(t);
                case n.AnnotationType.TEXT:
                  return new TextAnnotationElement(t);
                case n.AnnotationType.WIDGET:
                  switch (t.data.fieldType) {
                    case "Tx":
                      return new TextWidgetAnnotationElement(t);
                    case "Btn":
                      return t.data.radioButton ? new RadioButtonWidgetAnnotationElement(t) : t.data.checkBox ? new CheckboxWidgetAnnotationElement(t) : new PushButtonWidgetAnnotationElement(t);
                    case "Ch":
                      return new ChoiceWidgetAnnotationElement(t);
                  }
                  return new WidgetAnnotationElement(t);
                case n.AnnotationType.POPUP:
                  return new PopupAnnotationElement(t);
                case n.AnnotationType.FREETEXT:
                  return new FreeTextAnnotationElement(t);
                case n.AnnotationType.LINE:
                  return new LineAnnotationElement(t);
                case n.AnnotationType.SQUARE:
                  return new SquareAnnotationElement(t);
                case n.AnnotationType.CIRCLE:
                  return new CircleAnnotationElement(t);
                case n.AnnotationType.POLYLINE:
                  return new PolylineAnnotationElement(t);
                case n.AnnotationType.CARET:
                  return new CaretAnnotationElement(t);
                case n.AnnotationType.INK:
                  return new InkAnnotationElement(t);
                case n.AnnotationType.POLYGON:
                  return new PolygonAnnotationElement(t);
                case n.AnnotationType.HIGHLIGHT:
                  return new HighlightAnnotationElement(t);
                case n.AnnotationType.UNDERLINE:
                  return new UnderlineAnnotationElement(t);
                case n.AnnotationType.SQUIGGLY:
                  return new SquigglyAnnotationElement(t);
                case n.AnnotationType.STRIKEOUT:
                  return new StrikeOutAnnotationElement(t);
                case n.AnnotationType.STAMP:
                  return new StampAnnotationElement(t);
                case n.AnnotationType.FILEATTACHMENT:
                  return new FileAttachmentAnnotationElement(t);
                default:
                  return new AnnotationElement(t);
              }
            }
          }]);
        }();
        var AnnotationElement = /*#__PURE__*/function () {
          function AnnotationElement(t) {
            var _ref44 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref44$isRenderable = _ref44.isRenderable,
              e = _ref44$isRenderable === void 0 ? !1 : _ref44$isRenderable,
              _ref44$ignoreBorder = _ref44.ignoreBorder,
              s = _ref44$ignoreBorder === void 0 ? !1 : _ref44$ignoreBorder,
              _ref44$createQuadrila = _ref44.createQuadrilaterals,
              n = _ref44$createQuadrila === void 0 ? !1 : _ref44$createQuadrila;
            _classCallCheck(this, AnnotationElement);
            this.isRenderable = e;
            this.data = t.data;
            this.layer = t.layer;
            this.page = t.page;
            this.viewport = t.viewport;
            this.linkService = t.linkService;
            this.downloadManager = t.downloadManager;
            this.imageResourcesPath = t.imageResourcesPath;
            this.renderForms = t.renderForms;
            this.svgFactory = t.svgFactory;
            this.annotationStorage = t.annotationStorage;
            this.enableScripting = t.enableScripting;
            this.hasJSActions = t.hasJSActions;
            this._fieldObjects = t.fieldObjects;
            this._mouseState = t.mouseState;
            e && (this.container = this._createContainer(s));
            n && (this.quadrilaterals = this._createQuadrilaterals(s));
          }
          return _createClass(AnnotationElement, [{
            key: "_createContainer",
            value: function _createContainer() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              var e = this.data,
                s = this.page,
                r = this.viewport,
                a = document.createElement("section");
              var _getRectDims = getRectDims(e.rect),
                i = _getRectDims.width,
                o = _getRectDims.height;
              a.setAttribute("data-annotation-id", e.id);
              var l = n.Util.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]);
              if (e.hasOwnCanvas) {
                var _t72 = r.transform.slice(),
                  _n$Util$singularValue3 = n.Util.singularValueDecompose2dScale(_t72),
                  _n$Util$singularValue4 = _slicedToArray(_n$Util$singularValue3, 2),
                  _e60 = _n$Util$singularValue4[0],
                  _s47 = _n$Util$singularValue4[1];
                i = Math.ceil(i * _e60);
                o = Math.ceil(o * _s47);
                l[0] *= _e60;
                l[1] *= _s47;
                for (var _e61 = 0; _e61 < 4; _e61++) _t72[_e61] = Math.sign(_t72[_e61]);
                a.style.transform = "matrix(".concat(_t72.join(","), ")");
              } else a.style.transform = "matrix(".concat(r.transform.join(","), ")");
              a.style.transformOrigin = "".concat(-l[0], "px ").concat(-l[1], "px");
              if (!t && e.borderStyle.width > 0) {
                a.style.borderWidth = "".concat(e.borderStyle.width, "px");
                if (e.borderStyle.style !== n.AnnotationBorderStyleType.UNDERLINE) {
                  i -= 2 * e.borderStyle.width;
                  o -= 2 * e.borderStyle.width;
                }
                var _t73 = e.borderStyle.horizontalCornerRadius,
                  _s48 = e.borderStyle.verticalCornerRadius;
                if (_t73 > 0 || _s48 > 0) {
                  var _e62 = "".concat(_t73, "px / ").concat(_s48, "px");
                  a.style.borderRadius = _e62;
                }
                switch (e.borderStyle.style) {
                  case n.AnnotationBorderStyleType.SOLID:
                    a.style.borderStyle = "solid";
                    break;
                  case n.AnnotationBorderStyleType.DASHED:
                    a.style.borderStyle = "dashed";
                    break;
                  case n.AnnotationBorderStyleType.BEVELED:
                    (0, n.warn)("Unimplemented border style: beveled");
                    break;
                  case n.AnnotationBorderStyleType.INSET:
                    (0, n.warn)("Unimplemented border style: inset");
                    break;
                  case n.AnnotationBorderStyleType.UNDERLINE:
                    a.style.borderBottomStyle = "solid";
                }
                e.borderColor || e.color || null ? a.style.borderColor = n.Util.makeHexColor(0 | e.color[0], 0 | e.color[1], 0 | e.color[2]) : a.style.borderWidth = 0;
              }
              a.style.left = "".concat(l[0], "px");
              a.style.top = "".concat(l[1], "px");
              if (e.hasOwnCanvas) a.style.width = a.style.height = "auto";else {
                a.style.width = "".concat(i, "px");
                a.style.height = "".concat(o, "px");
              }
              return a;
            }
          }, {
            key: "_commonActions",
            get: function get() {
              var _this32 = this;
              var setColor = function setColor(t, e, s) {
                var n = s.detail[t];
                s.target.style[e] = i.ColorConverters["".concat(n[0], "_HTML")](n.slice(1));
              };
              return (0, n.shadow)(this, "_commonActions", {
                display: function display(t) {
                  var e = t.detail.display % 2 == 1;
                  t.target.style.visibility = e ? "hidden" : "visible";
                  _this32.annotationStorage.setValue(_this32.data.id, {
                    hidden: e,
                    print: 0 === t.detail.display || 3 === t.detail.display
                  });
                },
                print: function print(t) {
                  _this32.annotationStorage.setValue(_this32.data.id, {
                    print: t.detail.print
                  });
                },
                hidden: function hidden(t) {
                  t.target.style.visibility = t.detail.hidden ? "hidden" : "visible";
                  _this32.annotationStorage.setValue(_this32.data.id, {
                    hidden: t.detail.hidden
                  });
                },
                focus: function focus(t) {
                  setTimeout(function () {
                    return t.target.focus({
                      preventScroll: !1
                    });
                  }, 0);
                },
                userName: function userName(t) {
                  t.target.title = t.detail.userName;
                },
                readonly: function readonly(t) {
                  t.detail.readonly ? t.target.setAttribute("readonly", "") : t.target.removeAttribute("readonly");
                },
                required: function required(t) {
                  t.detail.required ? t.target.setAttribute("required", "") : t.target.removeAttribute("required");
                },
                bgColor: function bgColor(t) {
                  setColor("bgColor", "backgroundColor", t);
                },
                fillColor: function fillColor(t) {
                  setColor("fillColor", "backgroundColor", t);
                },
                fgColor: function fgColor(t) {
                  setColor("fgColor", "color", t);
                },
                textColor: function textColor(t) {
                  setColor("textColor", "color", t);
                },
                borderColor: function borderColor(t) {
                  setColor("borderColor", "borderColor", t);
                },
                strokeColor: function strokeColor(t) {
                  setColor("strokeColor", "borderColor", t);
                }
              });
            }
          }, {
            key: "_dispatchEventFromSandbox",
            value: function _dispatchEventFromSandbox(t, e) {
              var s = this._commonActions;
              for (var _i18 = 0, _Object$keys = Object.keys(e.detail); _i18 < _Object$keys.length; _i18++) {
                var _n38 = _Object$keys[_i18];
                var _r24 = t[_n38] || s[_n38];
                _r24 && _r24(e);
              }
            }
          }, {
            key: "_setDefaultPropertiesFromJS",
            value: function _setDefaultPropertiesFromJS(t) {
              if (!this.enableScripting) return;
              var e = this.annotationStorage.getRawValue(this.data.id);
              if (!e) return;
              var s = this._commonActions;
              for (var _i19 = 0, _Object$entries2 = Object.entries(e); _i19 < _Object$entries2.length; _i19++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i19], 2),
                  _n39 = _Object$entries2$_i[0],
                  _r25 = _Object$entries2$_i[1];
                var _a22 = s[_n39];
                if (_a22) {
                  _a22({
                    detail: _r25,
                    target: t
                  });
                  delete e[_n39];
                }
              }
            }
          }, {
            key: "_createQuadrilaterals",
            value: function _createQuadrilaterals() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              if (!this.data.quadPoints) return null;
              var e = [],
                s = this.data.rect;
              var _iterator46 = _createForOfIteratorHelper(this.data.quadPoints),
                _step46;
              try {
                for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                  var _s49 = _step46.value;
                  this.data.rect = [_s49[2].x, _s49[2].y, _s49[1].x, _s49[1].y];
                  e.push(this._createContainer(t));
                }
              } catch (err) {
                _iterator46.e(err);
              } finally {
                _iterator46.f();
              }
              this.data.rect = s;
              return e;
            }
          }, {
            key: "_createPopup",
            value: function _createPopup(t, e) {
              var s = this.container;
              if (this.quadrilaterals) {
                t = t || this.quadrilaterals;
                s = this.quadrilaterals[0];
              }
              if (!t) {
                (t = document.createElement("div")).style.height = s.style.height;
                t.style.width = s.style.width;
                s.appendChild(t);
              }
              var n = new PopupElement({
                container: s,
                trigger: t,
                color: e.color,
                titleObj: e.titleObj,
                modificationDate: e.modificationDate,
                contentsObj: e.contentsObj,
                richText: e.richText,
                hideWrapper: !0
              }).render();
              n.style.left = s.style.width;
              s.appendChild(n);
            }
          }, {
            key: "_renderQuadrilaterals",
            value: function _renderQuadrilaterals(t) {
              var _iterator47 = _createForOfIteratorHelper(this.quadrilaterals),
                _step47;
              try {
                for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                  var _e63 = _step47.value;
                  _e63.className = t;
                }
              } catch (err) {
                _iterator47.e(err);
              } finally {
                _iterator47.f();
              }
              return this.quadrilaterals;
            }
          }, {
            key: "render",
            value: function render() {
              (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
            }
          }, {
            key: "_getElementsByName",
            value: function _getElementsByName(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var s = [];
              if (this._fieldObjects) {
                var _r26 = this._fieldObjects[t];
                if (_r26) {
                  var _iterator48 = _createForOfIteratorHelper(_r26),
                    _step48;
                  try {
                    for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                      var _step48$value = _step48.value,
                        _t74 = _step48$value.page,
                        _a23 = _step48$value.id,
                        _i20 = _step48$value.exportValues;
                      if (-1 === _t74) continue;
                      if (_a23 === e) continue;
                      var _r27 = "string" == typeof _i20 ? _i20 : null,
                        _o10 = document.getElementById(_a23);
                      !_o10 || c.has(_o10) ? s.push({
                        id: _a23,
                        exportValue: _r27,
                        domElement: _o10
                      }) : (0, n.warn)("_getElementsByName - element not allowed: ".concat(_a23));
                    }
                  } catch (err) {
                    _iterator48.e(err);
                  } finally {
                    _iterator48.f();
                  }
                }
                return s;
              }
              var _iterator49 = _createForOfIteratorHelper(document.getElementsByName(t)),
                _step49;
              try {
                for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                  var _n40 = _step49.value;
                  var _t75 = _n40.id,
                    _r28 = _n40.exportValue;
                  _t75 !== e && c.has(_n40) && s.push({
                    id: _t75,
                    exportValue: _r28,
                    domElement: _n40
                  });
                }
              } catch (err) {
                _iterator49.e(err);
              } finally {
                _iterator49.f();
              }
              return s;
            }
          }], [{
            key: "platform",
            get: function get() {
              var t = "undefined" != typeof navigator ? navigator.platform : "";
              return (0, n.shadow)(this, "platform", {
                isWin: t.includes("Win"),
                isMac: t.includes("Mac")
              });
            }
          }]);
        }();
        var LinkAnnotationElement = /*#__PURE__*/function (_AnnotationElement) {
          function LinkAnnotationElement(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            _classCallCheck(this, LinkAnnotationElement);
            return _callSuper(this, LinkAnnotationElement, [t, {
              isRenderable: !!(t.data.url || t.data.dest || t.data.action || t.data.isTooltipOnly || t.data.resetForm || t.data.actions && (t.data.actions.Action || t.data.actions["Mouse Up"] || t.data.actions["Mouse Down"])),
              ignoreBorder: !!(e !== null && e !== void 0 && e.ignoreBorder),
              createQuadrilaterals: !0
            }]);
          }
          _inherits(LinkAnnotationElement, _AnnotationElement);
          return _createClass(LinkAnnotationElement, [{
            key: "render",
            value: function render() {
              var t = this.data,
                e = this.linkService,
                s = document.createElement("a");
              if (t.url) e.addLinkAttributes(s, t.url, t.newWindow);else if (t.action) this._bindNamedAction(s, t.action);else if (t.dest) this._bindLink(s, t.dest);else {
                var _e64 = !1;
                if (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                  _e64 = !0;
                  this._bindJSAction(s, t);
                }
                t.resetForm ? this._bindResetFormAction(s, t.resetForm) : _e64 || this._bindLink(s, "");
              }
              if (this.quadrilaterals) return this._renderQuadrilaterals("linkAnnotation").map(function (t, e) {
                var n = 0 === e ? s : s.cloneNode();
                t.appendChild(n);
                return t;
              });
              this.container.className = "linkAnnotation";
              this.container.appendChild(s);
              return this.container;
            }
          }, {
            key: "_bindLink",
            value: function _bindLink(t, e) {
              var _this33 = this;
              t.href = this.linkService.getDestinationHash(e);
              t.onclick = function () {
                e && _this33.linkService.goToDestination(e);
                return !1;
              };
              (e || "" === e) && (t.className = "internalLink");
            }
          }, {
            key: "_bindNamedAction",
            value: function _bindNamedAction(t, e) {
              var _this34 = this;
              t.href = this.linkService.getAnchorUrl("");
              t.onclick = function () {
                _this34.linkService.executeNamedAction(e);
                return !1;
              };
              t.className = "internalLink";
            }
          }, {
            key: "_bindJSAction",
            value: function _bindJSAction(t, e) {
              var _this35 = this;
              t.href = this.linkService.getAnchorUrl("");
              var s = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              var _loop2 = function _loop2() {
                var n = _Object$keys2[_i21];
                var r = s.get(n);
                r && (t[r] = function () {
                  var _this35$linkService$e;
                  (_this35$linkService$e = _this35.linkService.eventBus) === null || _this35$linkService$e === void 0 || _this35$linkService$e.dispatch("dispatcheventinsandbox", {
                    source: _this35,
                    detail: {
                      id: e.id,
                      name: n
                    }
                  });
                  return !1;
                });
              };
              for (var _i21 = 0, _Object$keys2 = Object.keys(e.actions); _i21 < _Object$keys2.length; _i21++) {
                _loop2();
              }
              t.onclick || (t.onclick = function () {
                return !1;
              });
              t.className = "internalLink";
            }
          }, {
            key: "_bindResetFormAction",
            value: function _bindResetFormAction(t, e) {
              var _this36 = this;
              var s = t.onclick;
              s || (t.href = this.linkService.getAnchorUrl(""));
              t.className = "internalLink";
              if (this._fieldObjects) t.onclick = function () {
                var _this36$linkService$e;
                s && s();
                var t = e.fields,
                  n = e.refs,
                  r = e.include,
                  a = [];
                if (0 !== t.length || 0 !== n.length) {
                  var _e65 = new Set(n);
                  var _iterator50 = _createForOfIteratorHelper(t),
                    _step50;
                  try {
                    for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                      var _s51 = _step50.value;
                      var _t77 = _this36._fieldObjects[_s51] || [];
                      var _iterator52 = _createForOfIteratorHelper(_t77),
                        _step52;
                      try {
                        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                          var _s52 = _step52.value.id;
                          _e65.add(_s52);
                        }
                      } catch (err) {
                        _iterator52.e(err);
                      } finally {
                        _iterator52.f();
                      }
                    }
                  } catch (err) {
                    _iterator50.e(err);
                  } finally {
                    _iterator50.f();
                  }
                  for (var _i22 = 0, _Object$values = Object.values(_this36._fieldObjects); _i22 < _Object$values.length; _i22++) {
                    var _t76 = _Object$values[_i22];
                    var _iterator51 = _createForOfIteratorHelper(_t76),
                      _step51;
                    try {
                      for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                        var _s50 = _step51.value;
                        _e65.has(_s50.id) === r && a.push(_s50);
                      }
                    } catch (err) {
                      _iterator51.e(err);
                    } finally {
                      _iterator51.f();
                    }
                  }
                } else for (var _i23 = 0, _Object$values2 = Object.values(_this36._fieldObjects); _i23 < _Object$values2.length; _i23++) {
                  var _t78 = _Object$values2[_i23];
                  a.push.apply(a, _toConsumableArray(_t78));
                }
                var i = _this36.annotationStorage,
                  o = [];
                for (var _i24 = 0, _a24 = a; _i24 < _a24.length; _i24++) {
                  var _t79 = _a24[_i24];
                  var _e66 = _t79.id;
                  o.push(_e66);
                  switch (_t79.type) {
                    case "text":
                      {
                        var _s53 = _t79.defaultValue || "";
                        i.setValue(_e66, {
                          value: _s53
                        });
                        break;
                      }
                    case "checkbox":
                    case "radiobutton":
                      {
                        var _s54 = _t79.defaultValue === _t79.exportValues;
                        i.setValue(_e66, {
                          value: _s54
                        });
                        break;
                      }
                    case "combobox":
                    case "listbox":
                      {
                        var _s55 = _t79.defaultValue || "";
                        i.setValue(_e66, {
                          value: _s55
                        });
                        break;
                      }
                    default:
                      continue;
                  }
                  var _s56 = document.getElementById(_e66);
                  _s56 && c.has(_s56) && _s56.dispatchEvent(new Event("resetform"));
                }
                _this36.enableScripting && ((_this36$linkService$e = _this36.linkService.eventBus) === null || _this36$linkService$e === void 0 ? void 0 : _this36$linkService$e.dispatch("dispatcheventinsandbox", {
                  source: _this36,
                  detail: {
                    id: "app",
                    ids: o,
                    name: "ResetForm"
                  }
                }));
                return !1;
              };else {
                (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
                s || (t.onclick = function () {
                  return !1;
                });
              }
            }
          }]);
        }(AnnotationElement);
        var TextAnnotationElement = /*#__PURE__*/function (_AnnotationElement2) {
          function TextAnnotationElement(t) {
            var _t$data$titleObj, _t$data$contentsObj, _t$data$richText;
            _classCallCheck(this, TextAnnotationElement);
            return _callSuper(this, TextAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj = t.data.titleObj) !== null && _t$data$titleObj !== void 0 && _t$data$titleObj.str || (_t$data$contentsObj = t.data.contentsObj) !== null && _t$data$contentsObj !== void 0 && _t$data$contentsObj.str || (_t$data$richText = t.data.richText) !== null && _t$data$richText !== void 0 && _t$data$richText.str)
            }]);
          }
          _inherits(TextAnnotationElement, _AnnotationElement2);
          return _createClass(TextAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "textAnnotation";
              var t = document.createElement("img");
              t.style.height = this.container.style.height;
              t.style.width = this.container.style.width;
              t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
              t.alt = "[{{type}} Annotation]";
              t.dataset.l10nId = "text_annotation_type";
              t.dataset.l10nArgs = JSON.stringify({
                type: this.data.name
              });
              this.data.hasPopup || this._createPopup(t, this.data);
              this.container.appendChild(t);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var WidgetAnnotationElement = /*#__PURE__*/function (_AnnotationElement3) {
          function WidgetAnnotationElement() {
            _classCallCheck(this, WidgetAnnotationElement);
            return _callSuper(this, WidgetAnnotationElement, arguments);
          }
          _inherits(WidgetAnnotationElement, _AnnotationElement3);
          return _createClass(WidgetAnnotationElement, [{
            key: "render",
            value: function render() {
              this.data.alternativeText && (this.container.title = this.data.alternativeText);
              return this.container;
            }
          }, {
            key: "_getKeyModifier",
            value: function _getKeyModifier(t) {
              var _AnnotationElement$pl = AnnotationElement.platform,
                e = _AnnotationElement$pl.isWin,
                s = _AnnotationElement$pl.isMac;
              return e && t.ctrlKey || s && t.metaKey;
            }
          }, {
            key: "_setEventListener",
            value: function _setEventListener(t, e, s, n) {
              var _this37 = this;
              e.includes("mouse") ? t.addEventListener(e, function (t) {
                var _this37$linkService$e;
                (_this37$linkService$e = _this37.linkService.eventBus) === null || _this37$linkService$e === void 0 || _this37$linkService$e.dispatch("dispatcheventinsandbox", {
                  source: _this37,
                  detail: {
                    id: _this37.data.id,
                    name: s,
                    value: n(t),
                    shift: t.shiftKey,
                    modifier: _this37._getKeyModifier(t)
                  }
                });
              }) : t.addEventListener(e, function (t) {
                var _this37$linkService$e2;
                (_this37$linkService$e2 = _this37.linkService.eventBus) === null || _this37$linkService$e2 === void 0 || _this37$linkService$e2.dispatch("dispatcheventinsandbox", {
                  source: _this37,
                  detail: {
                    id: _this37.data.id,
                    name: s,
                    value: n(t)
                  }
                });
              });
            }
          }, {
            key: "_setEventListeners",
            value: function _setEventListeners(t, e, s) {
              var _iterator53 = _createForOfIteratorHelper(e),
                _step53;
              try {
                for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                  var _this$data$actions;
                  var _step53$value = _slicedToArray(_step53.value, 2),
                    _n41 = _step53$value[0],
                    _r29 = _step53$value[1];
                  ("Action" === _r29 || ((_this$data$actions = this.data.actions) === null || _this$data$actions === void 0 ? void 0 : _this$data$actions[_r29])) && this._setEventListener(t, _n41, _r29, s);
                }
              } catch (err) {
                _iterator53.e(err);
              } finally {
                _iterator53.f();
              }
            }
          }, {
            key: "_setBackgroundColor",
            value: function _setBackgroundColor(t) {
              var e = this.data.backgroundColor || null;
              t.style.backgroundColor = null === e ? "transparent" : n.Util.makeHexColor(e[0], e[1], e[2]);
            }
          }]);
        }(AnnotationElement);
        var TextWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem) {
          function TextWidgetAnnotationElement(t) {
            _classCallCheck(this, TextWidgetAnnotationElement);
            return _callSuper(this, TextWidgetAnnotationElement, [t, {
              isRenderable: t.renderForms || !t.data.hasAppearance && !!t.data.fieldValue
            }]);
          }
          _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);
          return _createClass(TextWidgetAnnotationElement, [{
            key: "setPropertyOnSiblings",
            value: function setPropertyOnSiblings(t, e, s, n) {
              var r = this.annotationStorage;
              var _iterator54 = _createForOfIteratorHelper(this._getElementsByName(t.name, t.id)),
                _step54;
              try {
                for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                  var _a25 = _step54.value;
                  _a25.domElement && (_a25.domElement[e] = s);
                  r.setValue(_a25.id, _defineProperty({}, n, s));
                }
              } catch (err) {
                _iterator54.e(err);
              } finally {
                _iterator54.f();
              }
            }
          }, {
            key: "render",
            value: function render() {
              var _this38 = this;
              var t = this.annotationStorage,
                e = this.data.id;
              this.container.className = "textWidgetAnnotation";
              var s = null;
              if (this.renderForms) {
                var _n42 = t.getValue(e, {
                    value: this.data.fieldValue
                  }),
                  _r30 = _n42.formattedValue || _n42.value || "",
                  _a26 = {
                    userValue: null,
                    formattedValue: null,
                    valueOnFocus: ""
                  };
                if (this.data.multiLine) {
                  s = document.createElement("textarea");
                  s.textContent = _r30;
                } else {
                  s = document.createElement("input");
                  s.type = "text";
                  s.setAttribute("value", _r30);
                }
                c.add(s);
                s.disabled = this.data.readOnly;
                s.name = this.data.fieldName;
                s.tabIndex = l;
                _a26.userValue = _r30;
                s.setAttribute("id", e);
                s.addEventListener("input", function (n) {
                  t.setValue(e, {
                    value: n.target.value
                  });
                  _this38.setPropertyOnSiblings(s, "value", n.target.value, "value");
                });
                s.addEventListener("resetform", function (t) {
                  var _this38$data$defaultF;
                  var e = (_this38$data$defaultF = _this38.data.defaultFieldValue) !== null && _this38$data$defaultF !== void 0 ? _this38$data$defaultF : "";
                  s.value = _a26.userValue = e;
                  _a26.formattedValue = null;
                });
                var blurListener = function blurListener(t) {
                  var e = _a26.formattedValue;
                  null != e && (t.target.value = e);
                  t.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  var _this$data$actions2;
                  s.addEventListener("focus", function (t) {
                    _a26.userValue && (t.target.value = _a26.userValue);
                    _a26.valueOnFocus = t.target.value;
                  });
                  s.addEventListener("updatefromsandbox", function (s) {
                    var n = {
                      value: function value(s) {
                        var _s$detail$value;
                        _a26.userValue = (_s$detail$value = s.detail.value) !== null && _s$detail$value !== void 0 ? _s$detail$value : "";
                        t.setValue(e, {
                          value: _a26.userValue.toString()
                        });
                        s.target.value = _a26.userValue;
                      },
                      formattedValue: function formattedValue(s) {
                        var n = s.detail.formattedValue;
                        _a26.formattedValue = n;
                        null != n && s.target !== document.activeElement && (s.target.value = n);
                        t.setValue(e, {
                          formattedValue: n
                        });
                      },
                      selRange: function selRange(t) {
                        var _t$target;
                        (_t$target = t.target).setSelectionRange.apply(_t$target, _toConsumableArray(t.detail.selRange));
                      }
                    };
                    _this38._dispatchEventFromSandbox(n, s);
                  });
                  s.addEventListener("keydown", function (t) {
                    var s = -1;
                    "Escape" === t.key ? s = 0 : "Enter" === t.key ? s = 2 : "Tab" === t.key && (s = 3);
                    if (-1 === s) return;
                    var n = t.target.value;
                    if (_a26.valueOnFocus !== n) {
                      var _this38$linkService$e;
                      _a26.userValue = n;
                      (_this38$linkService$e = _this38.linkService.eventBus) === null || _this38$linkService$e === void 0 || _this38$linkService$e.dispatch("dispatcheventinsandbox", {
                        source: _this38,
                        detail: {
                          id: e,
                          name: "Keystroke",
                          value: n,
                          willCommit: !0,
                          commitKey: s,
                          selStart: t.target.selectionStart,
                          selEnd: t.target.selectionEnd
                        }
                      });
                    }
                  });
                  var _n43 = blurListener;
                  blurListener = null;
                  s.addEventListener("blur", function (t) {
                    var _this38$linkService$e2;
                    var s = t.target.value;
                    _a26.userValue = s;
                    _this38._mouseState.isDown && _a26.valueOnFocus !== s && ((_this38$linkService$e2 = _this38.linkService.eventBus) === null || _this38$linkService$e2 === void 0 ? void 0 : _this38$linkService$e2.dispatch("dispatcheventinsandbox", {
                      source: _this38,
                      detail: {
                        id: e,
                        name: "Keystroke",
                        value: s,
                        willCommit: !0,
                        commitKey: 1,
                        selStart: t.target.selectionStart,
                        selEnd: t.target.selectionEnd
                      }
                    }));
                    _n43(t);
                  });
                  ((_this$data$actions2 = this.data.actions) === null || _this$data$actions2 === void 0 ? void 0 : _this$data$actions2.Keystroke) && s.addEventListener("beforeinput", function (t) {
                    var _this38$linkService$e3;
                    var s = t.data,
                      n = t.target,
                      r = n.value,
                      a = n.selectionStart,
                      i = n.selectionEnd;
                    var o = a,
                      l = i;
                    switch (t.inputType) {
                      case "deleteWordBackward":
                        {
                          var _t80 = r.substring(0, a).match(/\w*[^\w]*$/);
                          _t80 && (o -= _t80[0].length);
                          break;
                        }
                      case "deleteWordForward":
                        {
                          var _t81 = r.substring(a).match(/^[^\w]*\w*/);
                          _t81 && (l += _t81[0].length);
                          break;
                        }
                      case "deleteContentBackward":
                        a === i && (o -= 1);
                        break;
                      case "deleteContentForward":
                        a === i && (l += 1);
                    }
                    t.preventDefault();
                    (_this38$linkService$e3 = _this38.linkService.eventBus) === null || _this38$linkService$e3 === void 0 || _this38$linkService$e3.dispatch("dispatcheventinsandbox", {
                      source: _this38,
                      detail: {
                        id: e,
                        name: "Keystroke",
                        value: r,
                        change: s || "",
                        willCommit: !1,
                        selStart: o,
                        selEnd: l
                      }
                    });
                  });
                  this._setEventListeners(s, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (t) {
                    return t.target.value;
                  });
                }
                blurListener && s.addEventListener("blur", blurListener);
                null !== this.data.maxLen && (s.maxLength = this.data.maxLen);
                if (this.data.comb) {
                  var _t82 = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                  s.classList.add("comb");
                  s.style.letterSpacing = "calc(".concat(_t82, "px - 1ch)");
                }
              } else {
                s = document.createElement("div");
                s.textContent = this.data.fieldValue;
                s.style.verticalAlign = "middle";
                s.style.display = "table-cell";
              }
              this._setTextStyle(s);
              this._setBackgroundColor(s);
              this._setDefaultPropertiesFromJS(s);
              this.container.appendChild(s);
              return this.container;
            }
          }, {
            key: "_setTextStyle",
            value: function _setTextStyle(t) {
              var e = ["left", "center", "right"],
                _this$data$defaultApp = this.data.defaultAppearanceData,
                s = _this$data$defaultApp.fontSize,
                r = _this$data$defaultApp.fontColor,
                a = t.style;
              s && (a.fontSize = "".concat(s, "px"));
              a.color = n.Util.makeHexColor(r[0], r[1], r[2]);
              null !== this.data.textAlignment && (a.textAlign = e[this.data.textAlignment]);
            }
          }]);
        }(WidgetAnnotationElement);
        var CheckboxWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem2) {
          function CheckboxWidgetAnnotationElement(t) {
            _classCallCheck(this, CheckboxWidgetAnnotationElement);
            return _callSuper(this, CheckboxWidgetAnnotationElement, [t, {
              isRenderable: t.renderForms
            }]);
          }
          _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);
          return _createClass(CheckboxWidgetAnnotationElement, [{
            key: "render",
            value: function render() {
              var _this39 = this;
              var t = this.annotationStorage,
                e = this.data,
                s = e.id;
              var n = t.getValue(s, {
                value: e.exportValue === e.fieldValue
              }).value;
              if ("string" == typeof n) {
                n = "Off" !== n;
                t.setValue(s, {
                  value: n
                });
              }
              this.container.className = "buttonWidgetAnnotation checkBox";
              var r = document.createElement("input");
              c.add(r);
              r.disabled = e.readOnly;
              r.type = "checkbox";
              r.name = e.fieldName;
              n && r.setAttribute("checked", !0);
              r.setAttribute("id", s);
              r.setAttribute("exportValue", e.exportValue);
              r.tabIndex = l;
              r.addEventListener("change", function (n) {
                var _n$target = n.target,
                  r = _n$target.name,
                  a = _n$target.checked;
                var _iterator55 = _createForOfIteratorHelper(_this39._getElementsByName(r, s)),
                  _step55;
                try {
                  for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                    var _n44 = _step55.value;
                    var _s57 = a && _n44.exportValue === e.exportValue;
                    _n44.domElement && (_n44.domElement.checked = _s57);
                    t.setValue(_n44.id, {
                      value: _s57
                    });
                  }
                } catch (err) {
                  _iterator55.e(err);
                } finally {
                  _iterator55.f();
                }
                t.setValue(s, {
                  value: a
                });
              });
              r.addEventListener("resetform", function (t) {
                var s = e.defaultFieldValue || "Off";
                t.target.checked = s === e.exportValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                r.addEventListener("updatefromsandbox", function (e) {
                  var n = {
                    value: function value(e) {
                      e.target.checked = "Off" !== e.detail.value;
                      t.setValue(s, {
                        value: e.target.checked
                      });
                    }
                  };
                  _this39._dispatchEventFromSandbox(n, e);
                });
                this._setEventListeners(r, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (t) {
                  return t.target.checked;
                });
              }
              this._setBackgroundColor(r);
              this._setDefaultPropertiesFromJS(r);
              this.container.appendChild(r);
              return this.container;
            }
          }]);
        }(WidgetAnnotationElement);
        var RadioButtonWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem3) {
          function RadioButtonWidgetAnnotationElement(t) {
            _classCallCheck(this, RadioButtonWidgetAnnotationElement);
            return _callSuper(this, RadioButtonWidgetAnnotationElement, [t, {
              isRenderable: t.renderForms
            }]);
          }
          _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);
          return _createClass(RadioButtonWidgetAnnotationElement, [{
            key: "render",
            value: function render() {
              var _this40 = this;
              this.container.className = "buttonWidgetAnnotation radioButton";
              var t = this.annotationStorage,
                e = this.data,
                s = e.id;
              var n = t.getValue(s, {
                value: e.fieldValue === e.buttonValue
              }).value;
              if ("string" == typeof n) {
                n = n !== e.buttonValue;
                t.setValue(s, {
                  value: n
                });
              }
              var r = document.createElement("input");
              c.add(r);
              r.disabled = e.readOnly;
              r.type = "radio";
              r.name = e.fieldName;
              n && r.setAttribute("checked", !0);
              r.setAttribute("id", s);
              r.tabIndex = l;
              r.addEventListener("change", function (e) {
                var _e$target = e.target,
                  n = _e$target.name,
                  r = _e$target.checked;
                var _iterator56 = _createForOfIteratorHelper(_this40._getElementsByName(n, s)),
                  _step56;
                try {
                  for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                    var _e67 = _step56.value;
                    t.setValue(_e67.id, {
                      value: !1
                    });
                  }
                } catch (err) {
                  _iterator56.e(err);
                } finally {
                  _iterator56.f();
                }
                t.setValue(s, {
                  value: r
                });
              });
              r.addEventListener("resetform", function (t) {
                var s = e.defaultFieldValue;
                t.target.checked = null != s && s === e.buttonValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                var _n45 = e.buttonValue;
                r.addEventListener("updatefromsandbox", function (e) {
                  var r = {
                    value: function value(e) {
                      var r = _n45 === e.detail.value;
                      var _iterator57 = _createForOfIteratorHelper(_this40._getElementsByName(e.target.name)),
                        _step57;
                      try {
                        for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                          var _n46 = _step57.value;
                          var _e68 = r && _n46.id === s;
                          _n46.domElement && (_n46.domElement.checked = _e68);
                          t.setValue(_n46.id, {
                            value: _e68
                          });
                        }
                      } catch (err) {
                        _iterator57.e(err);
                      } finally {
                        _iterator57.f();
                      }
                    }
                  };
                  _this40._dispatchEventFromSandbox(r, e);
                });
                this._setEventListeners(r, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (t) {
                  return t.target.checked;
                });
              }
              this._setBackgroundColor(r);
              this._setDefaultPropertiesFromJS(r);
              this.container.appendChild(r);
              return this.container;
            }
          }]);
        }(WidgetAnnotationElement);
        var PushButtonWidgetAnnotationElement = /*#__PURE__*/function (_LinkAnnotationElemen) {
          function PushButtonWidgetAnnotationElement(t) {
            _classCallCheck(this, PushButtonWidgetAnnotationElement);
            return _callSuper(this, PushButtonWidgetAnnotationElement, [t, {
              ignoreBorder: t.data.hasAppearance
            }]);
          }
          _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);
          return _createClass(PushButtonWidgetAnnotationElement, [{
            key: "render",
            value: function render() {
              var t = _superPropGet(PushButtonWidgetAnnotationElement, "render", this, 3)([]);
              t.className = "buttonWidgetAnnotation pushButton";
              this.data.alternativeText && (t.title = this.data.alternativeText);
              this._setDefaultPropertiesFromJS(t);
              return t;
            }
          }]);
        }(LinkAnnotationElement);
        var ChoiceWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem4) {
          function ChoiceWidgetAnnotationElement(t) {
            _classCallCheck(this, ChoiceWidgetAnnotationElement);
            return _callSuper(this, ChoiceWidgetAnnotationElement, [t, {
              isRenderable: t.renderForms
            }]);
          }
          _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);
          return _createClass(ChoiceWidgetAnnotationElement, [{
            key: "render",
            value: function render() {
              var _this41 = this;
              this.container.className = "choiceWidgetAnnotation";
              var t = this.annotationStorage,
                e = this.data.id,
                s = t.getValue(e, {
                  value: this.data.fieldValue
                });
              var n = this.data.defaultAppearanceData.fontSize;
              n || (n = 9);
              var r = "calc(".concat(n, "px * var(--zoom-factor))"),
                a = document.createElement("select");
              c.add(a);
              a.disabled = this.data.readOnly;
              a.name = this.data.fieldName;
              a.setAttribute("id", e);
              a.tabIndex = l;
              a.style.fontSize = "".concat(n, "px");
              if (!this.data.combo) {
                a.size = this.data.options.length;
                this.data.multiSelect && (a.multiple = !0);
              }
              a.addEventListener("resetform", function (t) {
                var e = _this41.data.defaultFieldValue;
                var _iterator58 = _createForOfIteratorHelper(a.options),
                  _step58;
                try {
                  for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                    var _t83 = _step58.value;
                    _t83.selected = _t83.value === e;
                  }
                } catch (err) {
                  _iterator58.e(err);
                } finally {
                  _iterator58.f();
                }
              });
              var _iterator59 = _createForOfIteratorHelper(this.data.options),
                _step59;
              try {
                for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                  var _t87 = _step59.value;
                  var _e70 = document.createElement("option");
                  _e70.textContent = _t87.displayValue;
                  _e70.value = _t87.exportValue;
                  this.data.combo && (_e70.style.fontSize = r);
                  s.value.includes(_t87.exportValue) && _e70.setAttribute("selected", !0);
                  a.appendChild(_e70);
                }
              } catch (err) {
                _iterator59.e(err);
              } finally {
                _iterator59.f();
              }
              var getValue = function getValue(t, e) {
                  var s = e ? "value" : "textContent",
                    n = t.target.options;
                  return t.target.multiple ? Array.prototype.filter.call(n, function (t) {
                    return t.selected;
                  }).map(function (t) {
                    return t[s];
                  }) : -1 === n.selectedIndex ? null : n[n.selectedIndex][s];
                },
                getItems = function getItems(t) {
                  var e = t.target.options;
                  return Array.prototype.map.call(e, function (t) {
                    return {
                      displayValue: t.textContent,
                      exportValue: t.value
                    };
                  });
                };
              if (this.enableScripting && this.hasJSActions) {
                a.addEventListener("updatefromsandbox", function (s) {
                  var n = {
                    value: function value(s) {
                      var n = s.detail.value,
                        r = new Set(Array.isArray(n) ? n : [n]);
                      var _iterator60 = _createForOfIteratorHelper(a.options),
                        _step60;
                      try {
                        for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                          var _t84 = _step60.value;
                          _t84.selected = r.has(_t84.value);
                        }
                      } catch (err) {
                        _iterator60.e(err);
                      } finally {
                        _iterator60.f();
                      }
                      t.setValue(e, {
                        value: getValue(s, !0)
                      });
                    },
                    multipleSelection: function multipleSelection(t) {
                      a.multiple = !0;
                    },
                    remove: function remove(s) {
                      var n = a.options,
                        r = s.detail.remove;
                      n[r].selected = !1;
                      a.remove(r);
                      if (n.length > 0) {
                        -1 === Array.prototype.findIndex.call(n, function (t) {
                          return t.selected;
                        }) && (n[0].selected = !0);
                      }
                      t.setValue(e, {
                        value: getValue(s, !0),
                        items: getItems(s)
                      });
                    },
                    clear: function clear(s) {
                      for (; 0 !== a.length;) a.remove(0);
                      t.setValue(e, {
                        value: null,
                        items: []
                      });
                    },
                    insert: function insert(s) {
                      var _s$detail$insert = s.detail.insert,
                        n = _s$detail$insert.index,
                        r = _s$detail$insert.displayValue,
                        i = _s$detail$insert.exportValue,
                        o = document.createElement("option");
                      o.textContent = r;
                      o.value = i;
                      a.insertBefore(o, a.children[n]);
                      t.setValue(e, {
                        value: getValue(s, !0),
                        items: getItems(s)
                      });
                    },
                    items: function items(s) {
                      var n = s.detail.items;
                      for (; 0 !== a.length;) a.remove(0);
                      var _iterator61 = _createForOfIteratorHelper(n),
                        _step61;
                      try {
                        for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                          var _t85 = _step61.value;
                          var _e69 = _t85.displayValue,
                            _s58 = _t85.exportValue,
                            _n47 = document.createElement("option");
                          _n47.textContent = _e69;
                          _n47.value = _s58;
                          a.appendChild(_n47);
                        }
                      } catch (err) {
                        _iterator61.e(err);
                      } finally {
                        _iterator61.f();
                      }
                      a.options.length > 0 && (a.options[0].selected = !0);
                      t.setValue(e, {
                        value: getValue(s, !0),
                        items: getItems(s)
                      });
                    },
                    indices: function indices(s) {
                      var n = new Set(s.detail.indices);
                      var _iterator62 = _createForOfIteratorHelper(s.target.options),
                        _step62;
                      try {
                        for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                          var _t86 = _step62.value;
                          _t86.selected = n.has(_t86.index);
                        }
                      } catch (err) {
                        _iterator62.e(err);
                      } finally {
                        _iterator62.f();
                      }
                      t.setValue(e, {
                        value: getValue(s, !0)
                      });
                    },
                    editable: function editable(t) {
                      t.target.disabled = !t.detail.editable;
                    }
                  };
                  _this41._dispatchEventFromSandbox(n, s);
                });
                a.addEventListener("input", function (s) {
                  var _this41$linkService$e;
                  var n = getValue(s, !0),
                    r = getValue(s, !1);
                  t.setValue(e, {
                    value: n
                  });
                  (_this41$linkService$e = _this41.linkService.eventBus) === null || _this41$linkService$e === void 0 || _this41$linkService$e.dispatch("dispatcheventinsandbox", {
                    source: _this41,
                    detail: {
                      id: e,
                      name: "Keystroke",
                      value: r,
                      changeEx: n,
                      willCommit: !0,
                      commitKey: 1,
                      keyDown: !1
                    }
                  });
                });
                this._setEventListeners(a, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], function (t) {
                  return t.target.checked;
                });
              } else a.addEventListener("input", function (s) {
                t.setValue(e, {
                  value: getValue(s, !0)
                });
              });
              this._setBackgroundColor(a);
              this._setDefaultPropertiesFromJS(a);
              this.container.appendChild(a);
              return this.container;
            }
          }]);
        }(WidgetAnnotationElement);
        var PopupAnnotationElement = /*#__PURE__*/function (_AnnotationElement4) {
          function PopupAnnotationElement(t) {
            var _t$data$titleObj2, _t$data$contentsObj2, _t$data$richText2;
            _classCallCheck(this, PopupAnnotationElement);
            return _callSuper(this, PopupAnnotationElement, [t, {
              isRenderable: !!((_t$data$titleObj2 = t.data.titleObj) !== null && _t$data$titleObj2 !== void 0 && _t$data$titleObj2.str || (_t$data$contentsObj2 = t.data.contentsObj) !== null && _t$data$contentsObj2 !== void 0 && _t$data$contentsObj2.str || (_t$data$richText2 = t.data.richText) !== null && _t$data$richText2 !== void 0 && _t$data$richText2.str)
            }]);
          }
          _inherits(PopupAnnotationElement, _AnnotationElement4);
          return _createClass(PopupAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "popupAnnotation";
              if (["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"].includes(this.data.parentType)) return this.container;
              var t = "[data-annotation-id=\"".concat(this.data.parentId, "\"]"),
                e = this.layer.querySelectorAll(t);
              if (0 === e.length) return this.container;
              var s = new PopupElement({
                  container: this.container,
                  trigger: Array.from(e),
                  color: this.data.color,
                  titleObj: this.data.titleObj,
                  modificationDate: this.data.modificationDate,
                  contentsObj: this.data.contentsObj,
                  richText: this.data.richText
                }),
                r = this.page,
                a = n.Util.normalizeRect([this.data.parentRect[0], r.view[3] - this.data.parentRect[1] + r.view[1], this.data.parentRect[2], r.view[3] - this.data.parentRect[3] + r.view[1]]),
                i = a[0] + this.data.parentRect[2] - this.data.parentRect[0],
                o = a[1];
              this.container.style.transformOrigin = "".concat(-i, "px ").concat(-o, "px");
              this.container.style.left = "".concat(i, "px");
              this.container.style.top = "".concat(o, "px");
              this.container.appendChild(s.render());
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var PopupElement = /*#__PURE__*/function () {
          function PopupElement(t) {
            _classCallCheck(this, PopupElement);
            this.container = t.container;
            this.trigger = t.trigger;
            this.color = t.color;
            this.titleObj = t.titleObj;
            this.modificationDate = t.modificationDate;
            this.contentsObj = t.contentsObj;
            this.richText = t.richText;
            this.hideWrapper = t.hideWrapper || !1;
            this.pinned = !1;
          }
          return _createClass(PopupElement, [{
            key: "render",
            value: function render() {
              var _this$richText, _this$contentsObj;
              var t = document.createElement("div");
              t.className = "popupWrapper";
              this.hideElement = this.hideWrapper ? t : this.container;
              this.hideElement.hidden = !0;
              var e = document.createElement("div");
              e.className = "popup";
              var s = this.color;
              if (s) {
                var _t88 = .7 * (255 - s[0]) + s[0],
                  _r31 = .7 * (255 - s[1]) + s[1],
                  _a27 = .7 * (255 - s[2]) + s[2];
                e.style.backgroundColor = n.Util.makeHexColor(0 | _t88, 0 | _r31, 0 | _a27);
              }
              var a = document.createElement("h1");
              a.dir = this.titleObj.dir;
              a.textContent = this.titleObj.str;
              e.appendChild(a);
              var i = r.PDFDateString.toDateObject(this.modificationDate);
              if (i) {
                var _t89 = document.createElement("span");
                _t89.className = "popupDate";
                _t89.textContent = "{{date}}, {{time}}";
                _t89.dataset.l10nId = "annotation_date_string";
                _t89.dataset.l10nArgs = JSON.stringify({
                  date: i.toLocaleDateString(),
                  time: i.toLocaleTimeString()
                });
                e.appendChild(_t89);
              }
              if (!((_this$richText = this.richText) !== null && _this$richText !== void 0 && _this$richText.str) || (_this$contentsObj = this.contentsObj) !== null && _this$contentsObj !== void 0 && _this$contentsObj.str && this.contentsObj.str !== this.richText.str) {
                var _t90 = this._formatContents(this.contentsObj);
                e.appendChild(_t90);
              } else {
                o.XfaLayer.render({
                  xfaHtml: this.richText.html,
                  intent: "richText",
                  div: e
                });
                e.lastChild.className = "richText popupContent";
              }
              Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
              var _iterator63 = _createForOfIteratorHelper(this.trigger),
                _step63;
              try {
                for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                  var _t91 = _step63.value;
                  _t91.addEventListener("click", this._toggle.bind(this));
                  _t91.addEventListener("mouseover", this._show.bind(this, !1));
                  _t91.addEventListener("mouseout", this._hide.bind(this, !1));
                }
              } catch (err) {
                _iterator63.e(err);
              } finally {
                _iterator63.f();
              }
              e.addEventListener("click", this._hide.bind(this, !0));
              t.appendChild(e);
              return t;
            }
          }, {
            key: "_formatContents",
            value: function _formatContents(_ref45) {
              var t = _ref45.str,
                e = _ref45.dir;
              var s = document.createElement("p");
              s.className = "popupContent";
              s.dir = e;
              var n = t.split(/(?:\r\n?|\n)/);
              for (var _t92 = 0, _e71 = n.length; _t92 < _e71; ++_t92) {
                var _r32 = n[_t92];
                s.appendChild(document.createTextNode(_r32));
                _t92 < _e71 - 1 && s.appendChild(document.createElement("br"));
              }
              return s;
            }
          }, {
            key: "_toggle",
            value: function _toggle() {
              this.pinned ? this._hide(!0) : this._show(!0);
            }
          }, {
            key: "_show",
            value: function _show() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              t && (this.pinned = !0);
              if (this.hideElement.hidden) {
                this.hideElement.hidden = !1;
                this.container.style.zIndex += 1;
              }
            }
          }, {
            key: "_hide",
            value: function _hide() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
              t && (this.pinned = !1);
              if (!this.hideElement.hidden && !this.pinned) {
                this.hideElement.hidden = !0;
                this.container.style.zIndex -= 1;
              }
            }
          }]);
        }();
        var FreeTextAnnotationElement = /*#__PURE__*/function (_AnnotationElement5) {
          function FreeTextAnnotationElement(t) {
            var _t$data$titleObj3, _t$data$contentsObj3, _t$data$richText3;
            _classCallCheck(this, FreeTextAnnotationElement);
            return _callSuper(this, FreeTextAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj3 = t.data.titleObj) !== null && _t$data$titleObj3 !== void 0 && _t$data$titleObj3.str || (_t$data$contentsObj3 = t.data.contentsObj) !== null && _t$data$contentsObj3 !== void 0 && _t$data$contentsObj3.str || (_t$data$richText3 = t.data.richText) !== null && _t$data$richText3 !== void 0 && _t$data$richText3.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(FreeTextAnnotationElement, _AnnotationElement5);
          return _createClass(FreeTextAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "freeTextAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var LineAnnotationElement = /*#__PURE__*/function (_AnnotationElement6) {
          function LineAnnotationElement(t) {
            var _t$data$titleObj4, _t$data$contentsObj4, _t$data$richText4;
            _classCallCheck(this, LineAnnotationElement);
            return _callSuper(this, LineAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj4 = t.data.titleObj) !== null && _t$data$titleObj4 !== void 0 && _t$data$titleObj4.str || (_t$data$contentsObj4 = t.data.contentsObj) !== null && _t$data$contentsObj4 !== void 0 && _t$data$contentsObj4.str || (_t$data$richText4 = t.data.richText) !== null && _t$data$richText4 !== void 0 && _t$data$richText4.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(LineAnnotationElement, _AnnotationElement6);
          return _createClass(LineAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "lineAnnotation";
              var t = this.data,
                _getRectDims2 = getRectDims(t.rect),
                e = _getRectDims2.width,
                s = _getRectDims2.height,
                n = this.svgFactory.create(e, s),
                r = this.svgFactory.createElement("svg:line");
              r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]);
              r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]);
              r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]);
              r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]);
              r.setAttribute("stroke-width", t.borderStyle.width || 1);
              r.setAttribute("stroke", "transparent");
              r.setAttribute("fill", "transparent");
              n.appendChild(r);
              this.container.append(n);
              this._createPopup(r, t);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var SquareAnnotationElement = /*#__PURE__*/function (_AnnotationElement7) {
          function SquareAnnotationElement(t) {
            var _t$data$titleObj5, _t$data$contentsObj5, _t$data$richText5;
            _classCallCheck(this, SquareAnnotationElement);
            return _callSuper(this, SquareAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj5 = t.data.titleObj) !== null && _t$data$titleObj5 !== void 0 && _t$data$titleObj5.str || (_t$data$contentsObj5 = t.data.contentsObj) !== null && _t$data$contentsObj5 !== void 0 && _t$data$contentsObj5.str || (_t$data$richText5 = t.data.richText) !== null && _t$data$richText5 !== void 0 && _t$data$richText5.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(SquareAnnotationElement, _AnnotationElement7);
          return _createClass(SquareAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "squareAnnotation";
              var t = this.data,
                _getRectDims3 = getRectDims(t.rect),
                e = _getRectDims3.width,
                s = _getRectDims3.height,
                n = this.svgFactory.create(e, s),
                r = t.borderStyle.width,
                a = this.svgFactory.createElement("svg:rect");
              a.setAttribute("x", r / 2);
              a.setAttribute("y", r / 2);
              a.setAttribute("width", e - r);
              a.setAttribute("height", s - r);
              a.setAttribute("stroke-width", r || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              n.appendChild(a);
              this.container.append(n);
              this._createPopup(a, t);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var CircleAnnotationElement = /*#__PURE__*/function (_AnnotationElement8) {
          function CircleAnnotationElement(t) {
            var _t$data$titleObj6, _t$data$contentsObj6, _t$data$richText6;
            _classCallCheck(this, CircleAnnotationElement);
            return _callSuper(this, CircleAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj6 = t.data.titleObj) !== null && _t$data$titleObj6 !== void 0 && _t$data$titleObj6.str || (_t$data$contentsObj6 = t.data.contentsObj) !== null && _t$data$contentsObj6 !== void 0 && _t$data$contentsObj6.str || (_t$data$richText6 = t.data.richText) !== null && _t$data$richText6 !== void 0 && _t$data$richText6.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(CircleAnnotationElement, _AnnotationElement8);
          return _createClass(CircleAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "circleAnnotation";
              var t = this.data,
                _getRectDims4 = getRectDims(t.rect),
                e = _getRectDims4.width,
                s = _getRectDims4.height,
                n = this.svgFactory.create(e, s),
                r = t.borderStyle.width,
                a = this.svgFactory.createElement("svg:ellipse");
              a.setAttribute("cx", e / 2);
              a.setAttribute("cy", s / 2);
              a.setAttribute("rx", e / 2 - r / 2);
              a.setAttribute("ry", s / 2 - r / 2);
              a.setAttribute("stroke-width", r || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              n.appendChild(a);
              this.container.append(n);
              this._createPopup(a, t);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var PolylineAnnotationElement = /*#__PURE__*/function (_AnnotationElement9) {
          function PolylineAnnotationElement(t) {
            var _t$data$titleObj7, _t$data$contentsObj7, _t$data$richText7;
            var _this42;
            _classCallCheck(this, PolylineAnnotationElement);
            _this42 = _callSuper(this, PolylineAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj7 = t.data.titleObj) !== null && _t$data$titleObj7 !== void 0 && _t$data$titleObj7.str || (_t$data$contentsObj7 = t.data.contentsObj) !== null && _t$data$contentsObj7 !== void 0 && _t$data$contentsObj7.str || (_t$data$richText7 = t.data.richText) !== null && _t$data$richText7 !== void 0 && _t$data$richText7.str),
              ignoreBorder: !0
            }]);
            _this42.containerClassName = "polylineAnnotation";
            _this42.svgElementName = "svg:polyline";
            return _this42;
          }
          _inherits(PolylineAnnotationElement, _AnnotationElement9);
          return _createClass(PolylineAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = this.containerClassName;
              var t = this.data,
                _getRectDims5 = getRectDims(t.rect),
                e = _getRectDims5.width,
                s = _getRectDims5.height,
                n = this.svgFactory.create(e, s);
              var r = [];
              var _iterator64 = _createForOfIteratorHelper(t.vertices),
                _step64;
              try {
                for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                  var _e72 = _step64.value;
                  var _s59 = _e72.x - t.rect[0],
                    _n48 = t.rect[3] - _e72.y;
                  r.push(_s59 + "," + _n48);
                }
              } catch (err) {
                _iterator64.e(err);
              } finally {
                _iterator64.f();
              }
              r = r.join(" ");
              var a = this.svgFactory.createElement(this.svgElementName);
              a.setAttribute("points", r);
              a.setAttribute("stroke-width", t.borderStyle.width || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              n.appendChild(a);
              this.container.append(n);
              this._createPopup(a, t);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var PolygonAnnotationElement = /*#__PURE__*/function (_PolylineAnnotationEl) {
          function PolygonAnnotationElement(t) {
            var _this43;
            _classCallCheck(this, PolygonAnnotationElement);
            _this43 = _callSuper(this, PolygonAnnotationElement, [t]);
            _this43.containerClassName = "polygonAnnotation";
            _this43.svgElementName = "svg:polygon";
            return _this43;
          }
          _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);
          return _createClass(PolygonAnnotationElement);
        }(PolylineAnnotationElement);
        var CaretAnnotationElement = /*#__PURE__*/function (_AnnotationElement10) {
          function CaretAnnotationElement(t) {
            var _t$data$titleObj8, _t$data$contentsObj8, _t$data$richText8;
            _classCallCheck(this, CaretAnnotationElement);
            return _callSuper(this, CaretAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj8 = t.data.titleObj) !== null && _t$data$titleObj8 !== void 0 && _t$data$titleObj8.str || (_t$data$contentsObj8 = t.data.contentsObj) !== null && _t$data$contentsObj8 !== void 0 && _t$data$contentsObj8.str || (_t$data$richText8 = t.data.richText) !== null && _t$data$richText8 !== void 0 && _t$data$richText8.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(CaretAnnotationElement, _AnnotationElement10);
          return _createClass(CaretAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "caretAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var InkAnnotationElement = /*#__PURE__*/function (_AnnotationElement11) {
          function InkAnnotationElement(t) {
            var _t$data$titleObj9, _t$data$contentsObj9, _t$data$richText9;
            var _this44;
            _classCallCheck(this, InkAnnotationElement);
            _this44 = _callSuper(this, InkAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj9 = t.data.titleObj) !== null && _t$data$titleObj9 !== void 0 && _t$data$titleObj9.str || (_t$data$contentsObj9 = t.data.contentsObj) !== null && _t$data$contentsObj9 !== void 0 && _t$data$contentsObj9.str || (_t$data$richText9 = t.data.richText) !== null && _t$data$richText9 !== void 0 && _t$data$richText9.str),
              ignoreBorder: !0
            }]);
            _this44.containerClassName = "inkAnnotation";
            _this44.svgElementName = "svg:polyline";
            return _this44;
          }
          _inherits(InkAnnotationElement, _AnnotationElement11);
          return _createClass(InkAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = this.containerClassName;
              var t = this.data,
                _getRectDims6 = getRectDims(t.rect),
                e = _getRectDims6.width,
                s = _getRectDims6.height,
                n = this.svgFactory.create(e, s);
              var _iterator65 = _createForOfIteratorHelper(t.inkLists),
                _step65;
              try {
                for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                  var _e73 = _step65.value;
                  var _s60 = [];
                  var _iterator66 = _createForOfIteratorHelper(_e73),
                    _step66;
                  try {
                    for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                      var _n49 = _step66.value;
                      var _e74 = _n49.x - t.rect[0],
                        _r34 = t.rect[3] - _n49.y;
                      _s60.push("".concat(_e74, ",").concat(_r34));
                    }
                  } catch (err) {
                    _iterator66.e(err);
                  } finally {
                    _iterator66.f();
                  }
                  _s60 = _s60.join(" ");
                  var _r33 = this.svgFactory.createElement(this.svgElementName);
                  _r33.setAttribute("points", _s60);
                  _r33.setAttribute("stroke-width", t.borderStyle.width || 1);
                  _r33.setAttribute("stroke", "transparent");
                  _r33.setAttribute("fill", "transparent");
                  this._createPopup(_r33, t);
                  n.appendChild(_r33);
                }
              } catch (err) {
                _iterator65.e(err);
              } finally {
                _iterator65.f();
              }
              this.container.append(n);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var HighlightAnnotationElement = /*#__PURE__*/function (_AnnotationElement12) {
          function HighlightAnnotationElement(t) {
            var _t$data$titleObj10, _t$data$contentsObj10, _t$data$richText10;
            _classCallCheck(this, HighlightAnnotationElement);
            return _callSuper(this, HighlightAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj10 = t.data.titleObj) !== null && _t$data$titleObj10 !== void 0 && _t$data$titleObj10.str || (_t$data$contentsObj10 = t.data.contentsObj) !== null && _t$data$contentsObj10 !== void 0 && _t$data$contentsObj10.str || (_t$data$richText10 = t.data.richText) !== null && _t$data$richText10 !== void 0 && _t$data$richText10.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            }]);
          }
          _inherits(HighlightAnnotationElement, _AnnotationElement12);
          return _createClass(HighlightAnnotationElement, [{
            key: "render",
            value: function render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals) return this._renderQuadrilaterals("highlightAnnotation");
              this.container.className = "highlightAnnotation";
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var UnderlineAnnotationElement = /*#__PURE__*/function (_AnnotationElement13) {
          function UnderlineAnnotationElement(t) {
            var _t$data$titleObj11, _t$data$contentsObj11, _t$data$richText11;
            _classCallCheck(this, UnderlineAnnotationElement);
            return _callSuper(this, UnderlineAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj11 = t.data.titleObj) !== null && _t$data$titleObj11 !== void 0 && _t$data$titleObj11.str || (_t$data$contentsObj11 = t.data.contentsObj) !== null && _t$data$contentsObj11 !== void 0 && _t$data$contentsObj11.str || (_t$data$richText11 = t.data.richText) !== null && _t$data$richText11 !== void 0 && _t$data$richText11.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            }]);
          }
          _inherits(UnderlineAnnotationElement, _AnnotationElement13);
          return _createClass(UnderlineAnnotationElement, [{
            key: "render",
            value: function render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals) return this._renderQuadrilaterals("underlineAnnotation");
              this.container.className = "underlineAnnotation";
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var SquigglyAnnotationElement = /*#__PURE__*/function (_AnnotationElement14) {
          function SquigglyAnnotationElement(t) {
            var _t$data$titleObj12, _t$data$contentsObj12, _t$data$richText12;
            _classCallCheck(this, SquigglyAnnotationElement);
            return _callSuper(this, SquigglyAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj12 = t.data.titleObj) !== null && _t$data$titleObj12 !== void 0 && _t$data$titleObj12.str || (_t$data$contentsObj12 = t.data.contentsObj) !== null && _t$data$contentsObj12 !== void 0 && _t$data$contentsObj12.str || (_t$data$richText12 = t.data.richText) !== null && _t$data$richText12 !== void 0 && _t$data$richText12.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            }]);
          }
          _inherits(SquigglyAnnotationElement, _AnnotationElement14);
          return _createClass(SquigglyAnnotationElement, [{
            key: "render",
            value: function render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals) return this._renderQuadrilaterals("squigglyAnnotation");
              this.container.className = "squigglyAnnotation";
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var StrikeOutAnnotationElement = /*#__PURE__*/function (_AnnotationElement15) {
          function StrikeOutAnnotationElement(t) {
            var _t$data$titleObj13, _t$data$contentsObj13, _t$data$richText13;
            _classCallCheck(this, StrikeOutAnnotationElement);
            return _callSuper(this, StrikeOutAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj13 = t.data.titleObj) !== null && _t$data$titleObj13 !== void 0 && _t$data$titleObj13.str || (_t$data$contentsObj13 = t.data.contentsObj) !== null && _t$data$contentsObj13 !== void 0 && _t$data$contentsObj13.str || (_t$data$richText13 = t.data.richText) !== null && _t$data$richText13 !== void 0 && _t$data$richText13.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            }]);
          }
          _inherits(StrikeOutAnnotationElement, _AnnotationElement15);
          return _createClass(StrikeOutAnnotationElement, [{
            key: "render",
            value: function render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals) return this._renderQuadrilaterals("strikeoutAnnotation");
              this.container.className = "strikeoutAnnotation";
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var StampAnnotationElement = /*#__PURE__*/function (_AnnotationElement16) {
          function StampAnnotationElement(t) {
            var _t$data$titleObj14, _t$data$contentsObj14, _t$data$richText14;
            _classCallCheck(this, StampAnnotationElement);
            return _callSuper(this, StampAnnotationElement, [t, {
              isRenderable: !!(t.data.hasPopup || (_t$data$titleObj14 = t.data.titleObj) !== null && _t$data$titleObj14 !== void 0 && _t$data$titleObj14.str || (_t$data$contentsObj14 = t.data.contentsObj) !== null && _t$data$contentsObj14 !== void 0 && _t$data$contentsObj14.str || (_t$data$richText14 = t.data.richText) !== null && _t$data$richText14 !== void 0 && _t$data$richText14.str),
              ignoreBorder: !0
            }]);
          }
          _inherits(StampAnnotationElement, _AnnotationElement16);
          return _createClass(StampAnnotationElement, [{
            key: "render",
            value: function render() {
              this.container.className = "stampAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }]);
        }(AnnotationElement);
        var FileAttachmentAnnotationElement = /*#__PURE__*/function (_AnnotationElement17) {
          function FileAttachmentAnnotationElement(t) {
            var _this45$linkService$e;
            var _this45;
            _classCallCheck(this, FileAttachmentAnnotationElement);
            _this45 = _callSuper(this, FileAttachmentAnnotationElement, [t, {
              isRenderable: !0
            }]);
            var _this45$data$file = _this45.data.file,
              e = _this45$data$file.filename,
              s = _this45$data$file.content;
            _this45.filename = (0, r.getFilenameFromUrl)(e);
            _this45.content = s;
            (_this45$linkService$e = _this45.linkService.eventBus) === null || _this45$linkService$e === void 0 || _this45$linkService$e.dispatch("fileattachmentannotation", {
              source: _this45,
              filename: e,
              content: s
            });
            return _this45;
          }
          _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);
          return _createClass(FileAttachmentAnnotationElement, [{
            key: "render",
            value: function render() {
              var _this$data$titleObj, _this$data$contentsOb;
              this.container.className = "fileAttachmentAnnotation";
              var t = document.createElement("div");
              t.style.height = this.container.style.height;
              t.style.width = this.container.style.width;
              t.addEventListener("dblclick", this._download.bind(this));
              !this.data.hasPopup && (((_this$data$titleObj = this.data.titleObj) === null || _this$data$titleObj === void 0 ? void 0 : _this$data$titleObj.str) || ((_this$data$contentsOb = this.data.contentsObj) === null || _this$data$contentsOb === void 0 ? void 0 : _this$data$contentsOb.str) || this.data.richText) && this._createPopup(t, this.data);
              this.container.appendChild(t);
              return this.container;
            }
          }, {
            key: "_download",
            value: function _download() {
              var _this$downloadManager;
              (_this$downloadManager = this.downloadManager) === null || _this$downloadManager === void 0 || _this$downloadManager.openOrDownloadData(this.container, this.content, this.filename);
            }
          }]);
        }(AnnotationElement);
        e.AnnotationLayer = _AnnotationLayer = /*#__PURE__*/function () {
          function AnnotationLayer() {
            _classCallCheck(this, AnnotationLayer);
          }
          return _createClass(AnnotationLayer, null, [{
            key: "render",
            value: function render(t) {
              var e = [],
                s = [];
              var _iterator67 = _createForOfIteratorHelper(t.annotations),
                _step67;
              try {
                for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                  var _r35 = _step67.value;
                  if (!_r35) continue;
                  var _getRectDims7 = getRectDims(_r35.rect),
                    _t94 = _getRectDims7.width,
                    _a28 = _getRectDims7.height;
                  _t94 <= 0 || _a28 <= 0 || (_r35.annotationType !== n.AnnotationType.POPUP ? e.push(_r35) : s.push(_r35));
                }
              } catch (err) {
                _iterator67.e(err);
              } finally {
                _iterator67.f();
              }
              s.length && e.push.apply(e, s);
              var i = t.div;
              for (var _i25 = 0, _e75 = e; _i25 < _e75.length; _i25++) {
                var _s61 = _e75[_i25];
                var _e76 = AnnotationElementFactory.create({
                  data: _s61,
                  layer: i,
                  page: t.page,
                  viewport: t.viewport,
                  linkService: t.linkService,
                  downloadManager: t.downloadManager,
                  imageResourcesPath: t.imageResourcesPath || "",
                  renderForms: !1 !== t.renderForms,
                  svgFactory: new r.DOMSVGFactory(),
                  annotationStorage: t.annotationStorage || new a.AnnotationStorage(),
                  enableScripting: t.enableScripting,
                  hasJSActions: t.hasJSActions,
                  fieldObjects: t.fieldObjects,
                  mouseState: t.mouseState || {
                    isDown: !1
                  }
                });
                if (_e76.isRenderable) {
                  var _t93 = _e76.render();
                  _s61.hidden && (_t93.style.visibility = "hidden");
                  if (Array.isArray(_t93)) {
                    var _iterator68 = _createForOfIteratorHelper(_t93),
                      _step68;
                    try {
                      for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                        var _e77 = _step68.value;
                        i.appendChild(_e77);
                      }
                    } catch (err) {
                      _iterator68.e(err);
                    } finally {
                      _iterator68.f();
                    }
                  } else _e76 instanceof PopupAnnotationElement ? i.prepend(_t93) : i.appendChild(_t93);
                }
              }
              _assertClassBrand(_AnnotationLayer, this, _d5).call(this, i, t.annotationCanvasMap);
            }
          }, {
            key: "update",
            value: function update(t) {
              var e = t.page,
                s = t.viewport,
                r = t.annotations,
                a = t.annotationCanvasMap,
                i = t.div,
                o = s.transform,
                l = "matrix(".concat(o.join(","), ")");
              var c, h;
              var _iterator69 = _createForOfIteratorHelper(r),
                _step69;
              try {
                for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                  var _t95 = _step69.value;
                  var _s62 = i.querySelectorAll("[data-annotation-id=\"".concat(_t95.id, "\"]"));
                  if (_s62) {
                    var _iterator70 = _createForOfIteratorHelper(_s62),
                      _step70;
                    try {
                      for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                        var _r36 = _step70.value;
                        if (_t95.hasOwnCanvas) {
                          var _s63 = n.Util.normalizeRect([_t95.rect[0], e.view[3] - _t95.rect[1] + e.view[1], _t95.rect[2], e.view[3] - _t95.rect[3] + e.view[1]]);
                          if (!h) {
                            c = Math.abs(o[0] || o[1]);
                            var _t96 = o.slice();
                            for (var _e78 = 0; _e78 < 4; _e78++) _t96[_e78] = Math.sign(_t96[_e78]);
                            h = "matrix(".concat(_t96.join(","), ")");
                          }
                          var _a29 = _s63[0] * c,
                            _i26 = _s63[1] * c;
                          _r36.style.left = "".concat(_a29, "px");
                          _r36.style.top = "".concat(_i26, "px");
                          _r36.style.transformOrigin = "".concat(-_a29, "px ").concat(-_i26, "px");
                          _r36.style.transform = h;
                        } else _r36.style.transform = l;
                      }
                    } catch (err) {
                      _iterator70.e(err);
                    } finally {
                      _iterator70.f();
                    }
                  }
                }
              } catch (err) {
                _iterator69.e(err);
              } finally {
                _iterator69.f();
              }
              _assertClassBrand(_AnnotationLayer, this, _d5).call(this, i, a);
              i.hidden = !1;
            }
          }]);
        }();
        function _d5(t, e) {
          if (e) {
            var _iterator71 = _createForOfIteratorHelper(e),
              _step71;
            try {
              for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                var _step71$value = _slicedToArray(_step71.value, 2),
                  _s64 = _step71$value[0],
                  _n50 = _step71$value[1];
                var _e79 = t.querySelector("[data-annotation-id=\"".concat(_s64, "\"]"));
                if (!_e79) continue;
                var _r37 = _e79.firstChild;
                "CANVAS" === _r37.nodeName ? _e79.replaceChild(_n50, _r37) : _e79.insertBefore(_n50, _r37);
              }
            } catch (err) {
              _iterator71.e(err);
            } finally {
              _iterator71.f();
            }
            e.clear();
          }
        }
      }, function (t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.ColorConverters = void 0;
        function makeColorComp(t) {
          return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0");
        }
        e.ColorConverters = /*#__PURE__*/function () {
          function ColorConverters() {
            _classCallCheck(this, ColorConverters);
          }
          return _createClass(ColorConverters, null, [{
            key: "CMYK_G",
            value: function CMYK_G(_ref46) {
              var _ref47 = _slicedToArray(_ref46, 4),
                t = _ref47[0],
                e = _ref47[1],
                s = _ref47[2],
                n = _ref47[3];
              return ["G", 1 - Math.min(1, .3 * t + .59 * s + .11 * e + n)];
            }
          }, {
            key: "G_CMYK",
            value: function G_CMYK(_ref48) {
              var _ref49 = _slicedToArray(_ref48, 1),
                t = _ref49[0];
              return ["CMYK", 0, 0, 0, 1 - t];
            }
          }, {
            key: "G_RGB",
            value: function G_RGB(_ref50) {
              var _ref51 = _slicedToArray(_ref50, 1),
                t = _ref51[0];
              return ["RGB", t, t, t];
            }
          }, {
            key: "G_HTML",
            value: function G_HTML(_ref52) {
              var _ref53 = _slicedToArray(_ref52, 1),
                t = _ref53[0];
              var e = makeColorComp(t);
              return "#".concat(e).concat(e).concat(e);
            }
          }, {
            key: "RGB_G",
            value: function RGB_G(_ref54) {
              var _ref55 = _slicedToArray(_ref54, 3),
                t = _ref55[0],
                e = _ref55[1],
                s = _ref55[2];
              return ["G", .3 * t + .59 * e + .11 * s];
            }
          }, {
            key: "RGB_HTML",
            value: function RGB_HTML(_ref56) {
              var _ref57 = _slicedToArray(_ref56, 3),
                t = _ref57[0],
                e = _ref57[1],
                s = _ref57[2];
              return "#".concat(makeColorComp(t)).concat(makeColorComp(e)).concat(makeColorComp(s));
            }
          }, {
            key: "T_HTML",
            value: function T_HTML() {
              return "#00000000";
            }
          }, {
            key: "CMYK_RGB",
            value: function CMYK_RGB(_ref58) {
              var _ref59 = _slicedToArray(_ref58, 4),
                t = _ref59[0],
                e = _ref59[1],
                s = _ref59[2],
                n = _ref59[3];
              return ["RGB", 1 - Math.min(1, t + n), 1 - Math.min(1, s + n), 1 - Math.min(1, e + n)];
            }
          }, {
            key: "CMYK_HTML",
            value: function CMYK_HTML(t) {
              return this.RGB_HTML(this.CMYK_RGB(t));
            }
          }, {
            key: "RGB_CMYK",
            value: function RGB_CMYK(_ref60) {
              var _ref61 = _slicedToArray(_ref60, 3),
                t = _ref61[0],
                e = _ref61[1],
                s = _ref61[2];
              var n = 1 - t,
                r = 1 - e,
                a = 1 - s;
              return ["CMYK", n, r, a, Math.min(n, r, a)];
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.XfaLayer = void 0;
        var n = s(18);
        e.XfaLayer = /*#__PURE__*/function () {
          function XfaLayer() {
            _classCallCheck(this, XfaLayer);
          }
          return _createClass(XfaLayer, null, [{
            key: "setupStorage",
            value: function setupStorage(t, e, s, n, r) {
              var a = n.getValue(e, {
                value: null
              });
              switch (s.name) {
                case "textarea":
                  null !== a.value && (t.textContent = a.value);
                  if ("print" === r) break;
                  t.addEventListener("input", function (t) {
                    n.setValue(e, {
                      value: t.target.value
                    });
                  });
                  break;
                case "input":
                  if ("radio" === s.attributes.type || "checkbox" === s.attributes.type) {
                    a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked");
                    if ("print" === r) break;
                    t.addEventListener("change", function (t) {
                      n.setValue(e, {
                        value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    null !== a.value && t.setAttribute("value", a.value);
                    if ("print" === r) break;
                    t.addEventListener("input", function (t) {
                      n.setValue(e, {
                        value: t.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (null !== a.value) {
                    var _iterator72 = _createForOfIteratorHelper(s.children),
                      _step72;
                    try {
                      for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
                        var _t97 = _step72.value;
                        _t97.attributes.value === a.value && (_t97.attributes.selected = !0);
                      }
                    } catch (err) {
                      _iterator72.e(err);
                    } finally {
                      _iterator72.f();
                    }
                  }
                  t.addEventListener("input", function (t) {
                    var s = t.target.options,
                      r = -1 === s.selectedIndex ? "" : s[s.selectedIndex].value;
                    n.setValue(e, {
                      value: r
                    });
                  });
              }
            }
          }, {
            key: "setAttributes",
            value: function setAttributes(_ref62) {
              var t = _ref62.html,
                e = _ref62.element,
                _ref62$storage = _ref62.storage,
                s = _ref62$storage === void 0 ? null : _ref62$storage,
                n = _ref62.intent,
                r = _ref62.linkService;
              var a = e.attributes,
                i = t instanceof HTMLAnchorElement;
              "radio" === a.type && (a.name = "".concat(a.name, "-").concat(n));
              for (var _i27 = 0, _Object$entries3 = Object.entries(a); _i27 < _Object$entries3.length; _i27++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i27], 2),
                  _e80 = _Object$entries3$_i[0],
                  _s65 = _Object$entries3$_i[1];
                if (null != _s65 && "dataId" !== _e80) if ("style" !== _e80) {
                  if ("textContent" === _e80) t.textContent = _s65;else if ("class" === _e80) _s65.length && t.setAttribute(_e80, _s65.join(" "));else {
                    if (i && ("href" === _e80 || "newWindow" === _e80)) continue;
                    t.setAttribute(_e80, _s65);
                  }
                } else Object.assign(t.style, _s65);
              }
              i && r.addLinkAttributes(t, a.href, a.newWindow);
              s && a.dataId && this.setupStorage(t, a.dataId, e, s);
            }
          }, {
            key: "render",
            value: function render(t) {
              var e = t.annotationStorage,
                s = t.linkService,
                r = t.xfaHtml,
                a = t.intent || "display",
                i = document.createElement(r.name);
              r.attributes && this.setAttributes({
                html: i,
                element: r,
                intent: a,
                linkService: s
              });
              var o = [[r, -1, i]],
                l = t.div;
              l.appendChild(i);
              if (t.viewport) {
                var _e81 = "matrix(".concat(t.viewport.transform.join(","), ")");
                l.style.transform = _e81;
              }
              "richText" !== a && l.setAttribute("class", "xfaLayer xfaFont");
              var c = [];
              for (; o.length > 0;) {
                var _l6$attributes;
                var _o11 = _slicedToArray(o[o.length - 1], 3),
                  _t98 = _o11[0],
                  _r38 = _o11[1],
                  _i28 = _o11[2];
                if (_r38 + 1 === _t98.children.length) {
                  o.pop();
                  continue;
                }
                var _l6 = _t98.children[++o[o.length - 1][1]];
                if (null === _l6) continue;
                var h = _l6.name;
                if ("#text" === h) {
                  var _t99 = document.createTextNode(_l6.value);
                  c.push(_t99);
                  _i28.appendChild(_t99);
                  continue;
                }
                var d = void 0;
                d = _l6 !== null && _l6 !== void 0 && (_l6$attributes = _l6.attributes) !== null && _l6$attributes !== void 0 && _l6$attributes.xmlns ? document.createElementNS(_l6.attributes.xmlns, h) : document.createElement(h);
                _i28.appendChild(d);
                _l6.attributes && this.setAttributes({
                  html: d,
                  element: _l6,
                  storage: e,
                  intent: a,
                  linkService: s
                });
                if (_l6.children && _l6.children.length > 0) o.push([_l6, -1, d]);else if (_l6.value) {
                  var _t100 = document.createTextNode(_l6.value);
                  n.XfaText.shouldBuildText(h) && c.push(_t100);
                  d.appendChild(_t100);
                }
              }
              var _iterator73 = _createForOfIteratorHelper(l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")),
                _step73;
              try {
                for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
                  var _t101 = _step73.value;
                  _t101.setAttribute("readOnly", !0);
                }
              } catch (err) {
                _iterator73.e(err);
              } finally {
                _iterator73.f();
              }
              return {
                textDivs: c
              };
            }
          }, {
            key: "update",
            value: function update(t) {
              var e = "matrix(".concat(t.viewport.transform.join(","), ")");
              t.div.style.transform = e;
              t.div.hidden = !1;
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.renderTextLayer = function renderTextLayer(t) {
          var e = new TextLayerRenderTask({
            textContent: t.textContent,
            textContentStream: t.textContentStream,
            container: t.container,
            viewport: t.viewport,
            textDivs: t.textDivs,
            textContentItemsStr: t.textContentItemsStr,
            enhanceTextSelection: t.enhanceTextSelection
          });
          e._render(t.timeout);
          return e;
        };
        var n = s(1);
        var r = 30,
          a = new Map(),
          i = /^\s+$/g;
        function appendText(t, e, s, o) {
          var l = document.createElement("span"),
            c = t._enhanceTextSelection ? {
              angle: 0,
              canvasWidth: 0,
              hasText: "" !== e.str,
              hasEOL: e.hasEOL,
              originalTransform: null,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              scale: 1
            } : {
              angle: 0,
              canvasWidth: 0,
              hasText: "" !== e.str,
              hasEOL: e.hasEOL
            };
          t._textDivs.push(l);
          var h = n.Util.transform(t._viewport.transform, e.transform);
          var d = Math.atan2(h[1], h[0]);
          var u = s[e.fontName];
          u.vertical && (d += Math.PI / 2);
          var p = Math.hypot(h[2], h[3]),
            f = p * function getAscent(t, e) {
              var s = a.get(t);
              if (s) return s;
              e.save();
              e.font = "30px ".concat(t);
              var n = e.measureText("");
              var i = n.fontBoundingBoxAscent,
                o = Math.abs(n.fontBoundingBoxDescent);
              if (i) {
                e.restore();
                var _s66 = i / (i + o);
                a.set(t, _s66);
                return _s66;
              }
              e.strokeStyle = "red";
              e.clearRect(0, 0, r, r);
              e.strokeText("g", 0, 0);
              var l = e.getImageData(0, 0, r, r).data;
              o = 0;
              for (var _t102 = l.length - 1 - 3; _t102 >= 0; _t102 -= 4) if (l[_t102] > 0) {
                o = Math.ceil(_t102 / 4 / r);
                break;
              }
              e.clearRect(0, 0, r, r);
              e.strokeText("A", 0, r);
              l = e.getImageData(0, 0, r, r).data;
              i = 0;
              for (var _t103 = 0, _e82 = l.length; _t103 < _e82; _t103 += 4) if (l[_t103] > 0) {
                i = r - Math.floor(_t103 / 4 / r);
                break;
              }
              e.restore();
              if (i) {
                var _e83 = i / (i + o);
                a.set(t, _e83);
                return _e83;
              }
              a.set(t, .8);
              return .8;
            }(u.fontFamily, o);
          var g, m;
          if (0 === d) {
            g = h[4];
            m = h[5] - f;
          } else {
            g = h[4] + f * Math.sin(d);
            m = h[5] - f * Math.cos(d);
          }
          l.style.left = "".concat(g, "px");
          l.style.top = "".concat(m, "px");
          l.style.fontSize = "".concat(p, "px");
          l.style.fontFamily = u.fontFamily;
          l.setAttribute("role", "presentation");
          l.textContent = e.str;
          l.dir = e.dir;
          t._fontInspectorEnabled && (l.dataset.fontName = e.fontName);
          0 !== d && (c.angle = d * (180 / Math.PI));
          var _ = !1;
          if (e.str.length > 1 || t._enhanceTextSelection && i.test(e.str)) _ = !0;else if (" " !== e.str && e.transform[0] !== e.transform[3]) {
            var _t104 = Math.abs(e.transform[0]),
              _s67 = Math.abs(e.transform[3]);
            _t104 !== _s67 && Math.max(_t104, _s67) / Math.min(_t104, _s67) > 1.5 && (_ = !0);
          }
          _ && (u.vertical ? c.canvasWidth = e.height * t._viewport.scale : c.canvasWidth = e.width * t._viewport.scale);
          t._textDivProperties.set(l, c);
          t._textContentStream && t._layoutText(l);
          if (t._enhanceTextSelection && c.hasText) {
            var _s68 = 1,
              _r39 = 0;
            if (0 !== d) {
              _s68 = Math.cos(d);
              _r39 = Math.sin(d);
            }
            var _a30 = (u.vertical ? e.height : e.width) * t._viewport.scale,
              _i29 = p;
            var _o12, _c6;
            if (0 !== d) {
              _o12 = [_s68, _r39, -_r39, _s68, g, m];
              _c6 = n.Util.getAxialAlignedBoundingBox([0, 0, _a30, _i29], _o12);
            } else _c6 = [g, m, g + _a30, m + _i29];
            t._bounds.push({
              left: _c6[0],
              top: _c6[1],
              right: _c6[2],
              bottom: _c6[3],
              div: l,
              size: [_a30, _i29],
              m: _o12
            });
          }
        }
        function render(t) {
          if (t._canceled) return;
          var e = t._textDivs,
            s = t._capability,
            n = e.length;
          if (n > 1e5) {
            t._renderingDone = !0;
            s.resolve();
          } else {
            if (!t._textContentStream) for (var _s69 = 0; _s69 < n; _s69++) t._layoutText(e[_s69]);
            t._renderingDone = !0;
            s.resolve();
          }
        }
        function findPositiveMin(t, e, s) {
          var n = 0;
          for (var _r40 = 0; _r40 < s; _r40++) {
            var _s70 = t[e++];
            _s70 > 0 && (n = n ? Math.min(_s70, n) : _s70);
          }
          return n;
        }
        function expand(t) {
          var e = t._bounds,
            s = t._viewport,
            r = function expandBounds(t, e, s) {
              var n = s.map(function (t, e) {
                return {
                  x1: t.left,
                  y1: t.top,
                  x2: t.right,
                  y2: t.bottom,
                  index: e,
                  x1New: void 0,
                  x2New: void 0
                };
              });
              expandBoundsLTR(t, n);
              var r = new Array(s.length);
              var _iterator74 = _createForOfIteratorHelper(n),
                _step74;
              try {
                for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
                  var _t105 = _step74.value;
                  var _e84 = _t105.index;
                  r[_e84] = {
                    left: _t105.x1New,
                    top: 0,
                    right: _t105.x2New,
                    bottom: 0
                  };
                }
              } catch (err) {
                _iterator74.e(err);
              } finally {
                _iterator74.f();
              }
              s.map(function (e, s) {
                var a = r[s],
                  i = n[s];
                i.x1 = e.top;
                i.y1 = t - a.right;
                i.x2 = e.bottom;
                i.y2 = t - a.left;
                i.index = s;
                i.x1New = void 0;
                i.x2New = void 0;
              });
              expandBoundsLTR(e, n);
              var _iterator75 = _createForOfIteratorHelper(n),
                _step75;
              try {
                for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
                  var _t106 = _step75.value;
                  var _e85 = _t106.index;
                  r[_e85].top = _t106.x1New;
                  r[_e85].bottom = _t106.x2New;
                }
              } catch (err) {
                _iterator75.e(err);
              } finally {
                _iterator75.f();
              }
              return r;
            }(s.width, s.height, e);
          for (var _s71 = 0; _s71 < r.length; _s71++) {
            var _a31 = e[_s71].div,
              _i30 = t._textDivProperties.get(_a31);
            if (0 === _i30.angle) {
              _i30.paddingLeft = e[_s71].left - r[_s71].left;
              _i30.paddingTop = e[_s71].top - r[_s71].top;
              _i30.paddingRight = r[_s71].right - e[_s71].right;
              _i30.paddingBottom = r[_s71].bottom - e[_s71].bottom;
              t._textDivProperties.set(_a31, _i30);
              continue;
            }
            var o = r[_s71],
              l = e[_s71],
              c = l.m,
              h = c[0],
              d = c[1],
              u = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size],
              p = new Float64Array(64);
            for (var _t107 = 0, _e86 = u.length; _t107 < _e86; _t107++) {
              var _e87 = n.Util.applyTransform(u[_t107], c);
              p[_t107 + 0] = h && (o.left - _e87[0]) / h;
              p[_t107 + 4] = d && (o.top - _e87[1]) / d;
              p[_t107 + 8] = h && (o.right - _e87[0]) / h;
              p[_t107 + 12] = d && (o.bottom - _e87[1]) / d;
              p[_t107 + 16] = d && (o.left - _e87[0]) / -d;
              p[_t107 + 20] = h && (o.top - _e87[1]) / h;
              p[_t107 + 24] = d && (o.right - _e87[0]) / -d;
              p[_t107 + 28] = h && (o.bottom - _e87[1]) / h;
              p[_t107 + 32] = h && (o.left - _e87[0]) / -h;
              p[_t107 + 36] = d && (o.top - _e87[1]) / -d;
              p[_t107 + 40] = h && (o.right - _e87[0]) / -h;
              p[_t107 + 44] = d && (o.bottom - _e87[1]) / -d;
              p[_t107 + 48] = d && (o.left - _e87[0]) / d;
              p[_t107 + 52] = h && (o.top - _e87[1]) / -h;
              p[_t107 + 56] = d && (o.right - _e87[0]) / d;
              p[_t107 + 60] = h && (o.bottom - _e87[1]) / -h;
            }
            var f = 1 + Math.min(Math.abs(h), Math.abs(d));
            _i30.paddingLeft = findPositiveMin(p, 32, 16) / f;
            _i30.paddingTop = findPositiveMin(p, 48, 16) / f;
            _i30.paddingRight = findPositiveMin(p, 0, 16) / f;
            _i30.paddingBottom = findPositiveMin(p, 16, 16) / f;
            t._textDivProperties.set(_a31, _i30);
          }
        }
        function expandBoundsLTR(t, e) {
          e.sort(function (t, e) {
            return t.x1 - e.x1 || t.index - e.index;
          });
          var s = [{
            start: -1 / 0,
            end: 1 / 0,
            boundary: {
              x1: -1 / 0,
              y1: -1 / 0,
              x2: 0,
              y2: 1 / 0,
              index: -1,
              x1New: 0,
              x2New: 0
            }
          }];
          var _iterator76 = _createForOfIteratorHelper(e),
            _step76;
          try {
            for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
              var _t108 = _step76.value;
              var _e89 = 0;
              for (; _e89 < s.length && s[_e89].end <= _t108.y1;) _e89++;
              var _n51 = void 0,
                _r41 = void 0,
                _a32 = s.length - 1;
              for (; _a32 >= 0 && s[_a32].start >= _t108.y2;) _a32--;
              var _i32 = void 0,
                o = void 0,
                l = -1 / 0;
              for (_i32 = _e89; _i32 <= _a32; _i32++) {
                _n51 = s[_i32];
                _r41 = _n51.boundary;
                var _e90 = void 0;
                _e90 = _r41.x2 > _t108.x1 ? _r41.index > _t108.index ? _r41.x1New : _t108.x1 : void 0 === _r41.x2New ? (_r41.x2 + _t108.x1) / 2 : _r41.x2New;
                _e90 > l && (l = _e90);
              }
              _t108.x1New = l;
              for (_i32 = _e89; _i32 <= _a32; _i32++) {
                _n51 = s[_i32];
                _r41 = _n51.boundary;
                void 0 === _r41.x2New ? _r41.x2 > _t108.x1 ? _r41.index > _t108.index && (_r41.x2New = _r41.x2) : _r41.x2New = l : _r41.x2New > l && (_r41.x2New = Math.max(l, _r41.x2));
              }
              var c = [];
              var h = null;
              for (_i32 = _e89; _i32 <= _a32; _i32++) {
                _n51 = s[_i32];
                _r41 = _n51.boundary;
                var _e91 = _r41.x2 > _t108.x2 ? _r41 : _t108;
                if (h === _e91) c[c.length - 1].end = _n51.end;else {
                  c.push({
                    start: _n51.start,
                    end: _n51.end,
                    boundary: _e91
                  });
                  h = _e91;
                }
              }
              if (s[_e89].start < _t108.y1) {
                c[0].start = _t108.y1;
                c.unshift({
                  start: s[_e89].start,
                  end: _t108.y1,
                  boundary: s[_e89].boundary
                });
              }
              if (_t108.y2 < s[_a32].end) {
                c[c.length - 1].end = _t108.y2;
                c.push({
                  start: _t108.y2,
                  end: s[_a32].end,
                  boundary: s[_a32].boundary
                });
              }
              for (_i32 = _e89; _i32 <= _a32; _i32++) {
                _n51 = s[_i32];
                _r41 = _n51.boundary;
                if (void 0 !== _r41.x2New) continue;
                var _t109 = !1;
                for (o = _e89 - 1; !_t109 && o >= 0 && s[o].start >= _r41.y1; o--) _t109 = s[o].boundary === _r41;
                for (o = _a32 + 1; !_t109 && o < s.length && s[o].end <= _r41.y2; o++) _t109 = s[o].boundary === _r41;
                for (o = 0; !_t109 && o < c.length; o++) _t109 = c[o].boundary === _r41;
                _t109 || (_r41.x2New = l);
              }
              Array.prototype.splice.apply(s, [_e89, _a32 - _e89 + 1].concat(c));
            }
          } catch (err) {
            _iterator76.e(err);
          } finally {
            _iterator76.f();
          }
          for (var _i31 = 0, _s72 = s; _i31 < _s72.length; _i31++) {
            var _e88 = _s72[_i31];
            var _s73 = _e88.boundary;
            void 0 === _s73.x2New && (_s73.x2New = Math.max(t, _s73.x2));
          }
        }
        var TextLayerRenderTask = /*#__PURE__*/function () {
          function TextLayerRenderTask(_ref63) {
            var _globalThis$FontInspe2,
              _this46 = this;
            var t = _ref63.textContent,
              e = _ref63.textContentStream,
              s = _ref63.container,
              r = _ref63.viewport,
              a = _ref63.textDivs,
              i = _ref63.textContentItemsStr,
              o = _ref63.enhanceTextSelection;
            _classCallCheck(this, TextLayerRenderTask);
            this._textContent = t;
            this._textContentStream = e;
            this._container = s;
            this._document = s.ownerDocument;
            this._viewport = r;
            this._textDivs = a || [];
            this._textContentItemsStr = i || [];
            this._enhanceTextSelection = !!o;
            this._fontInspectorEnabled = !!((_globalThis$FontInspe2 = globalThis.FontInspector) !== null && _globalThis$FontInspe2 !== void 0 && _globalThis$FontInspe2.enabled);
            this._reader = null;
            this._layoutTextLastFontSize = null;
            this._layoutTextLastFontFamily = null;
            this._layoutTextCtx = null;
            this._textDivProperties = new WeakMap();
            this._renderingDone = !1;
            this._canceled = !1;
            this._capability = (0, n.createPromiseCapability)();
            this._renderTimer = null;
            this._bounds = [];
            this._capability.promise.finally(function () {
              _this46._enhanceTextSelection || (_this46._textDivProperties = null);
              if (_this46._layoutTextCtx) {
                _this46._layoutTextCtx.canvas.width = 0;
                _this46._layoutTextCtx.canvas.height = 0;
                _this46._layoutTextCtx = null;
              }
            }).catch(function () {});
          }
          return _createClass(TextLayerRenderTask, [{
            key: "promise",
            get: function get() {
              return this._capability.promise;
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this._canceled = !0;
              if (this._reader) {
                this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch(function () {});
                this._reader = null;
              }
              if (null !== this._renderTimer) {
                clearTimeout(this._renderTimer);
                this._renderTimer = null;
              }
              this._capability.reject(new Error("TextLayer task cancelled."));
            }
          }, {
            key: "_processItems",
            value: function _processItems(t, e) {
              for (var _s74 = 0, _n52 = t.length; _s74 < _n52; _s74++) if (void 0 !== t[_s74].str) {
                this._textContentItemsStr.push(t[_s74].str);
                appendText(this, t[_s74], e, this._layoutTextCtx);
              } else if ("beginMarkedContentProps" === t[_s74].type || "beginMarkedContent" === t[_s74].type) {
                var _e92 = this._container;
                this._container = document.createElement("span");
                this._container.classList.add("markedContent");
                null !== t[_s74].id && this._container.setAttribute("id", "".concat(t[_s74].id));
                _e92.appendChild(this._container);
              } else "endMarkedContent" === t[_s74].type && (this._container = this._container.parentNode);
            }
          }, {
            key: "_layoutText",
            value: function _layoutText(t) {
              var e = this._textDivProperties.get(t);
              var s = "";
              if (0 !== e.canvasWidth && e.hasText) {
                var _t$style = t.style,
                  _n53 = _t$style.fontSize,
                  _r42 = _t$style.fontFamily;
                if (_n53 !== this._layoutTextLastFontSize || _r42 !== this._layoutTextLastFontFamily) {
                  this._layoutTextCtx.font = "".concat(_n53, " ").concat(_r42);
                  this._layoutTextLastFontSize = _n53;
                  this._layoutTextLastFontFamily = _r42;
                }
                var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(t.textContent),
                  _a33 = _this$_layoutTextCtx$.width;
                if (_a33 > 0) {
                  var _t110 = e.canvasWidth / _a33;
                  this._enhanceTextSelection && (e.scale = _t110);
                  s = "scaleX(".concat(_t110, ")");
                }
              }
              0 !== e.angle && (s = "rotate(".concat(e.angle, "deg) ").concat(s));
              if (s.length > 0) {
                this._enhanceTextSelection && (e.originalTransform = s);
                t.style.transform = s;
              }
              e.hasText && this._container.appendChild(t);
              if (e.hasEOL) {
                var _t111 = document.createElement("br");
                _t111.setAttribute("role", "presentation");
                this._container.appendChild(_t111);
              }
            }
          }, {
            key: "_render",
            value: function _render() {
              var _this47 = this;
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var e = (0, n.createPromiseCapability)();
              var s = Object.create(null);
              var a = this._document.createElement("canvas");
              a.height = a.width = r;
              this._layoutTextCtx = a.getContext("2d", {
                alpha: !1
              });
              if (this._textContent) {
                var _t112 = this._textContent.items,
                  _s75 = this._textContent.styles;
                this._processItems(_t112, _s75);
                e.resolve();
              } else {
                if (!this._textContentStream) throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                {
                  var _pump2 = function pump() {
                    _this47._reader.read().then(function (_ref64) {
                      var t = _ref64.value,
                        n = _ref64.done;
                      if (n) e.resolve();else {
                        Object.assign(s, t.styles);
                        _this47._processItems(t.items, s);
                        _pump2();
                      }
                    }, e.reject);
                  };
                  this._reader = this._textContentStream.getReader();
                  _pump2();
                }
              }
              e.promise.then(function () {
                s = null;
                t ? _this47._renderTimer = setTimeout(function () {
                  render(_this47);
                  _this47._renderTimer = null;
                }, t) : render(_this47);
              }, this._capability.reject);
            }
          }, {
            key: "expandTextDivs",
            value: function expandTextDivs() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              if (!this._enhanceTextSelection || !this._renderingDone) return;
              if (null !== this._bounds) {
                expand(this);
                this._bounds = null;
              }
              var e = [],
                s = [];
              for (var _n54 = 0, _r43 = this._textDivs.length; _n54 < _r43; _n54++) {
                var _r44 = this._textDivs[_n54],
                  _a34 = this._textDivProperties.get(_r44);
                if (_a34.hasText) if (t) {
                  e.length = 0;
                  s.length = 0;
                  _a34.originalTransform && e.push(_a34.originalTransform);
                  if (_a34.paddingTop > 0) {
                    s.push("".concat(_a34.paddingTop, "px"));
                    e.push("translateY(".concat(-_a34.paddingTop, "px)"));
                  } else s.push(0);
                  _a34.paddingRight > 0 ? s.push(_a34.paddingRight / _a34.scale + "px") : s.push(0);
                  _a34.paddingBottom > 0 ? s.push("".concat(_a34.paddingBottom, "px")) : s.push(0);
                  if (_a34.paddingLeft > 0) {
                    s.push(_a34.paddingLeft / _a34.scale + "px");
                    e.push("translateX(".concat(-_a34.paddingLeft / _a34.scale, "px)"));
                  } else s.push(0);
                  _r44.style.padding = s.join(" ");
                  e.length && (_r44.style.transform = e.join(" "));
                } else {
                  _r44.style.padding = null;
                  _r44.style.transform = _a34.originalTransform;
                }
              }
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.SVGGraphics = void 0;
        var n = s(1),
          r = s(5),
          a = s(3);
        var i = /*#__PURE__*/_createClass(function i() {
          _classCallCheck(this, i);
          (0, n.unreachable)("Not implemented: SVGGraphics");
        });
        e.SVGGraphics = i;
        {
          var opListToTree = function opListToTree(t) {
            var e = [];
            var s = [];
            var _iterator77 = _createForOfIteratorHelper(t),
              _step77;
            try {
              for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
                var _n55 = _step77.value;
                if ("save" !== _n55.fn) "restore" === _n55.fn ? e = s.pop() : e.push(_n55);else {
                  e.push({
                    fnId: 92,
                    fn: "group",
                    items: []
                  });
                  s.push(e);
                  e = e[e.length - 1].items;
                }
              }
            } catch (err) {
              _iterator77.e(err);
            } finally {
              _iterator77.f();
            }
            return e;
          };
          var pf = function pf(t) {
            if (Number.isInteger(t)) return t.toString();
            var e = t.toFixed(10);
            var s = e.length - 1;
            if ("0" !== e[s]) return e;
            do {
              s--;
            } while ("0" === e[s]);
            return e.substring(0, "." === e[s] ? s : s + 1);
          };
          var pm = function pm(t) {
            if (0 === t[4] && 0 === t[5]) {
              if (0 === t[1] && 0 === t[2]) return 1 === t[0] && 1 === t[3] ? "" : "scale(".concat(pf(t[0]), " ").concat(pf(t[3]), ")");
              if (t[0] === t[3] && t[1] === -t[2]) {
                return "rotate(".concat(pf(180 * Math.acos(t[0]) / Math.PI), ")");
              }
            } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3]) return "translate(".concat(pf(t[4]), " ").concat(pf(t[5]), ")");
            return "matrix(".concat(pf(t[0]), " ").concat(pf(t[1]), " ").concat(pf(t[2]), " ").concat(pf(t[3]), " ").concat(pf(t[4]), " ").concat(pf(t[5]), ")");
          };
          var o = {
              fontStyle: "normal",
              fontWeight: "normal",
              fillColor: "#000000"
            },
            l = "http://www.w3.org/XML/1998/namespace",
            c = "http://www.w3.org/1999/xlink",
            h = ["butt", "round", "square"],
            d = ["miter", "round", "bevel"],
            createObjectURL = function createObjectURL(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
              var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              if (URL.createObjectURL && "undefined" != typeof Blob && !s) return URL.createObjectURL(new Blob([t], {
                type: e
              }));
              var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              var r = "data:".concat(e, ";base64,");
              for (var _e93 = 0, _s76 = t.length; _e93 < _s76; _e93 += 3) {
                var _a35 = 255 & t[_e93],
                  _i33 = 255 & t[_e93 + 1],
                  _o13 = 255 & t[_e93 + 2];
                r += n[_a35 >> 2] + n[(3 & _a35) << 4 | _i33 >> 4] + n[_e93 + 1 < _s76 ? (15 & _i33) << 2 | _o13 >> 6 : 64] + n[_e93 + 2 < _s76 ? 63 & _o13 : 64];
              }
              return r;
            },
            u = function () {
              var t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                e = new Int32Array(256);
              for (var _t113 = 0; _t113 < 256; _t113++) {
                var _s77 = _t113;
                for (var _t114 = 0; _t114 < 8; _t114++) _s77 = 1 & _s77 ? 3988292384 ^ _s77 >> 1 & 2147483647 : _s77 >> 1 & 2147483647;
                e[_t113] = _s77;
              }
              function writePngChunk(t, s, n, r) {
                var a = r;
                var i = s.length;
                n[a] = i >> 24 & 255;
                n[a + 1] = i >> 16 & 255;
                n[a + 2] = i >> 8 & 255;
                n[a + 3] = 255 & i;
                a += 4;
                n[a] = 255 & t.charCodeAt(0);
                n[a + 1] = 255 & t.charCodeAt(1);
                n[a + 2] = 255 & t.charCodeAt(2);
                n[a + 3] = 255 & t.charCodeAt(3);
                a += 4;
                n.set(s, a);
                a += s.length;
                var o = function crc32(t, s, n) {
                  var r = -1;
                  for (var _a36 = s; _a36 < n; _a36++) {
                    var _s78 = 255 & (r ^ t[_a36]);
                    r = r >>> 8 ^ e[_s78];
                  }
                  return -1 ^ r;
                }(n, r + 4, a);
                n[a] = o >> 24 & 255;
                n[a + 1] = o >> 16 & 255;
                n[a + 2] = o >> 8 & 255;
                n[a + 3] = 255 & o;
              }
              function deflateSyncUncompressed(t) {
                var e = t.length;
                var s = 65535,
                  n = Math.ceil(e / s),
                  r = new Uint8Array(2 + e + 5 * n + 4);
                var a = 0;
                r[a++] = 120;
                r[a++] = 156;
                var i = 0;
                for (; e > s;) {
                  r[a++] = 0;
                  r[a++] = 255;
                  r[a++] = 255;
                  r[a++] = 0;
                  r[a++] = 0;
                  r.set(t.subarray(i, i + s), a);
                  a += s;
                  i += s;
                  e -= s;
                }
                r[a++] = 1;
                r[a++] = 255 & e;
                r[a++] = e >> 8 & 255;
                r[a++] = 255 & ~e;
                r[a++] = (65535 & ~e) >> 8 & 255;
                r.set(t.subarray(i), a);
                a += t.length - i;
                var o = function adler32(t, e, s) {
                  var n = 1,
                    r = 0;
                  for (var _a37 = e; _a37 < s; ++_a37) {
                    n = (n + (255 & t[_a37])) % 65521;
                    r = (r + n) % 65521;
                  }
                  return r << 16 | n;
                }(t, 0, t.length);
                r[a++] = o >> 24 & 255;
                r[a++] = o >> 16 & 255;
                r[a++] = o >> 8 & 255;
                r[a++] = 255 & o;
                return r;
              }
              function encode(e, s, r, i) {
                var o = e.width,
                  l = e.height;
                var c, h, d;
                var u = e.data;
                switch (s) {
                  case n.ImageKind.GRAYSCALE_1BPP:
                    h = 0;
                    c = 1;
                    d = o + 7 >> 3;
                    break;
                  case n.ImageKind.RGB_24BPP:
                    h = 2;
                    c = 8;
                    d = 3 * o;
                    break;
                  case n.ImageKind.RGBA_32BPP:
                    h = 6;
                    c = 8;
                    d = 4 * o;
                    break;
                  default:
                    throw new Error("invalid format");
                }
                var p = new Uint8Array((1 + d) * l);
                var f = 0,
                  g = 0;
                for (var _t115 = 0; _t115 < l; ++_t115) {
                  p[f++] = 0;
                  p.set(u.subarray(g, g + d), f);
                  g += d;
                  f += d;
                }
                if (s === n.ImageKind.GRAYSCALE_1BPP && i) {
                  f = 0;
                  for (var _t116 = 0; _t116 < l; _t116++) {
                    f++;
                    for (var _t117 = 0; _t117 < d; _t117++) p[f++] ^= 255;
                  }
                }
                var m = new Uint8Array([o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l, c, h, 0, 0, 0]),
                  _ = function deflateSync(t) {
                    if (!a.isNodeJS) return deflateSyncUncompressed(t);
                    try {
                      var _e94;
                      _e94 = parseInt(process.versions.node) >= 8 ? t : Buffer.from(t);
                      var _s79 = require("zlib").deflateSync(_e94, {
                        level: 9
                      });
                      return _s79 instanceof Uint8Array ? _s79 : new Uint8Array(_s79);
                    } catch (t) {
                      (0, n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + t);
                    }
                    return deflateSyncUncompressed(t);
                  }(p),
                  A = t.length + 36 + m.length + _.length,
                  b = new Uint8Array(A);
                var y = 0;
                b.set(t, y);
                y += t.length;
                writePngChunk("IHDR", m, b, y);
                y += 12 + m.length;
                writePngChunk("IDATA", _, b, y);
                y += 12 + _.length;
                writePngChunk("IEND", new Uint8Array(0), b, y);
                return createObjectURL(b, "image/png", r);
              }
              return function convertImgDataToPng(t, e, s) {
                return encode(t, void 0 === t.kind ? n.ImageKind.GRAYSCALE_1BPP : t.kind, e, s);
              };
            }();
          var SVGExtraState = /*#__PURE__*/function () {
            function SVGExtraState() {
              _classCallCheck(this, SVGExtraState);
              this.fontSizeScale = 1;
              this.fontWeight = o.fontWeight;
              this.fontSize = 0;
              this.textMatrix = n.IDENTITY_MATRIX;
              this.fontMatrix = n.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.textRenderingMode = n.TextRenderingMode.FILL;
              this.textMatrixScale = 1;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRise = 0;
              this.fillColor = o.fillColor;
              this.strokeColor = "#000000";
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.lineJoin = "";
              this.lineCap = "";
              this.miterLimit = 0;
              this.dashArray = [];
              this.dashPhase = 0;
              this.dependencies = [];
              this.activeClipUrl = null;
              this.clipGroup = null;
              this.maskId = "";
            }
            return _createClass(SVGExtraState, [{
              key: "clone",
              value: function clone() {
                return Object.create(this);
              }
            }, {
              key: "setCurrentPoint",
              value: function setCurrentPoint(t, e) {
                this.x = t;
                this.y = e;
              }
            }]);
          }();
          var p = 0,
            f = 0,
            g = 0;
          e.SVGGraphics = i = /*#__PURE__*/function () {
            function i(t, e) {
              var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              _classCallCheck(this, i);
              this.svgFactory = new r.DOMSVGFactory();
              this.current = new SVGExtraState();
              this.transformMatrix = n.IDENTITY_MATRIX;
              this.transformStack = [];
              this.extraStack = [];
              this.commonObjs = t;
              this.objs = e;
              this.pendingClip = null;
              this.pendingEOFill = !1;
              this.embedFonts = !1;
              this.embeddedFonts = Object.create(null);
              this.cssStyle = null;
              this.forceDataSchema = !!s;
              this._operatorIdMapping = [];
              for (var _t118 in n.OPS) this._operatorIdMapping[n.OPS[_t118]] = _t118;
            }
            return _createClass(i, [{
              key: "save",
              value: function save() {
                this.transformStack.push(this.transformMatrix);
                var t = this.current;
                this.extraStack.push(t);
                this.current = t.clone();
              }
            }, {
              key: "restore",
              value: function restore() {
                this.transformMatrix = this.transformStack.pop();
                this.current = this.extraStack.pop();
                this.pendingClip = null;
                this.tgrp = null;
              }
            }, {
              key: "group",
              value: function group(t) {
                this.save();
                this.executeOpTree(t);
                this.restore();
              }
            }, {
              key: "loadDependencies",
              value: function loadDependencies(t) {
                var _this48 = this;
                var e = t.fnArray,
                  s = t.argsArray;
                for (var _t119 = 0, _r45 = e.length; _t119 < _r45; _t119++) if (e[_t119] === n.OPS.dependency) {
                  var _iterator78 = _createForOfIteratorHelper(s[_t119]),
                    _step78;
                  try {
                    var _loop3 = function _loop3() {
                      var e = _step78.value;
                      var t = e.startsWith("g_") ? _this48.commonObjs : _this48.objs,
                        s = new Promise(function (s) {
                          t.get(e, s);
                        });
                      _this48.current.dependencies.push(s);
                    };
                    for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
                      _loop3();
                    }
                  } catch (err) {
                    _iterator78.e(err);
                  } finally {
                    _iterator78.f();
                  }
                }
                return Promise.all(this.current.dependencies);
              }
            }, {
              key: "transform",
              value: function transform(t, e, s, r, a, _i34) {
                var o = [t, e, s, r, a, _i34];
                this.transformMatrix = n.Util.transform(this.transformMatrix, o);
                this.tgrp = null;
              }
            }, {
              key: "getSVG",
              value: function getSVG(t, e) {
                var _this49 = this;
                this.viewport = e;
                var s = this._initialize(e);
                return this.loadDependencies(t).then(function () {
                  _this49.transformMatrix = n.IDENTITY_MATRIX;
                  _this49.executeOpTree(_this49.convertOpList(t));
                  return s;
                });
              }
            }, {
              key: "convertOpList",
              value: function convertOpList(t) {
                var e = this._operatorIdMapping,
                  s = t.argsArray,
                  n = t.fnArray,
                  r = [];
                for (var _t120 = 0, _a38 = n.length; _t120 < _a38; _t120++) {
                  var _a39 = n[_t120];
                  r.push({
                    fnId: _a39,
                    fn: e[_a39],
                    args: s[_t120]
                  });
                }
                return opListToTree(r);
              }
            }, {
              key: "executeOpTree",
              value: function executeOpTree(t) {
                var _iterator79 = _createForOfIteratorHelper(t),
                  _step79;
                try {
                  for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
                    var _e95 = _step79.value;
                    var _t121 = _e95.fn,
                      _s80 = _e95.fnId,
                      _r46 = _e95.args;
                    switch (0 | _s80) {
                      case n.OPS.beginText:
                        this.beginText();
                        break;
                      case n.OPS.dependency:
                        break;
                      case n.OPS.setLeading:
                        this.setLeading(_r46);
                        break;
                      case n.OPS.setLeadingMoveText:
                        this.setLeadingMoveText(_r46[0], _r46[1]);
                        break;
                      case n.OPS.setFont:
                        this.setFont(_r46);
                        break;
                      case n.OPS.showText:
                      case n.OPS.showSpacedText:
                        this.showText(_r46[0]);
                        break;
                      case n.OPS.endText:
                        this.endText();
                        break;
                      case n.OPS.moveText:
                        this.moveText(_r46[0], _r46[1]);
                        break;
                      case n.OPS.setCharSpacing:
                        this.setCharSpacing(_r46[0]);
                        break;
                      case n.OPS.setWordSpacing:
                        this.setWordSpacing(_r46[0]);
                        break;
                      case n.OPS.setHScale:
                        this.setHScale(_r46[0]);
                        break;
                      case n.OPS.setTextMatrix:
                        this.setTextMatrix(_r46[0], _r46[1], _r46[2], _r46[3], _r46[4], _r46[5]);
                        break;
                      case n.OPS.setTextRise:
                        this.setTextRise(_r46[0]);
                        break;
                      case n.OPS.setTextRenderingMode:
                        this.setTextRenderingMode(_r46[0]);
                        break;
                      case n.OPS.setLineWidth:
                        this.setLineWidth(_r46[0]);
                        break;
                      case n.OPS.setLineJoin:
                        this.setLineJoin(_r46[0]);
                        break;
                      case n.OPS.setLineCap:
                        this.setLineCap(_r46[0]);
                        break;
                      case n.OPS.setMiterLimit:
                        this.setMiterLimit(_r46[0]);
                        break;
                      case n.OPS.setFillRGBColor:
                        this.setFillRGBColor(_r46[0], _r46[1], _r46[2]);
                        break;
                      case n.OPS.setStrokeRGBColor:
                        this.setStrokeRGBColor(_r46[0], _r46[1], _r46[2]);
                        break;
                      case n.OPS.setStrokeColorN:
                        this.setStrokeColorN(_r46);
                        break;
                      case n.OPS.setFillColorN:
                        this.setFillColorN(_r46);
                        break;
                      case n.OPS.shadingFill:
                        this.shadingFill(_r46[0]);
                        break;
                      case n.OPS.setDash:
                        this.setDash(_r46[0], _r46[1]);
                        break;
                      case n.OPS.setRenderingIntent:
                        this.setRenderingIntent(_r46[0]);
                        break;
                      case n.OPS.setFlatness:
                        this.setFlatness(_r46[0]);
                        break;
                      case n.OPS.setGState:
                        this.setGState(_r46[0]);
                        break;
                      case n.OPS.fill:
                        this.fill();
                        break;
                      case n.OPS.eoFill:
                        this.eoFill();
                        break;
                      case n.OPS.stroke:
                        this.stroke();
                        break;
                      case n.OPS.fillStroke:
                        this.fillStroke();
                        break;
                      case n.OPS.eoFillStroke:
                        this.eoFillStroke();
                        break;
                      case n.OPS.clip:
                        this.clip("nonzero");
                        break;
                      case n.OPS.eoClip:
                        this.clip("evenodd");
                        break;
                      case n.OPS.paintSolidColorImageMask:
                        this.paintSolidColorImageMask();
                        break;
                      case n.OPS.paintImageXObject:
                        this.paintImageXObject(_r46[0]);
                        break;
                      case n.OPS.paintInlineImageXObject:
                        this.paintInlineImageXObject(_r46[0]);
                        break;
                      case n.OPS.paintImageMaskXObject:
                        this.paintImageMaskXObject(_r46[0]);
                        break;
                      case n.OPS.paintFormXObjectBegin:
                        this.paintFormXObjectBegin(_r46[0], _r46[1]);
                        break;
                      case n.OPS.paintFormXObjectEnd:
                        this.paintFormXObjectEnd();
                        break;
                      case n.OPS.closePath:
                        this.closePath();
                        break;
                      case n.OPS.closeStroke:
                        this.closeStroke();
                        break;
                      case n.OPS.closeFillStroke:
                        this.closeFillStroke();
                        break;
                      case n.OPS.closeEOFillStroke:
                        this.closeEOFillStroke();
                        break;
                      case n.OPS.nextLine:
                        this.nextLine();
                        break;
                      case n.OPS.transform:
                        this.transform(_r46[0], _r46[1], _r46[2], _r46[3], _r46[4], _r46[5]);
                        break;
                      case n.OPS.constructPath:
                        this.constructPath(_r46[0], _r46[1]);
                        break;
                      case n.OPS.endPath:
                        this.endPath();
                        break;
                      case 92:
                        this.group(_e95.items);
                        break;
                      default:
                        (0, n.warn)("Unimplemented operator ".concat(_t121));
                    }
                  }
                } catch (err) {
                  _iterator79.e(err);
                } finally {
                  _iterator79.f();
                }
              }
            }, {
              key: "setWordSpacing",
              value: function setWordSpacing(t) {
                this.current.wordSpacing = t;
              }
            }, {
              key: "setCharSpacing",
              value: function setCharSpacing(t) {
                this.current.charSpacing = t;
              }
            }, {
              key: "nextLine",
              value: function nextLine() {
                this.moveText(0, this.current.leading);
              }
            }, {
              key: "setTextMatrix",
              value: function setTextMatrix(t, e, s, n, r, a) {
                var _i35 = this.current;
                _i35.textMatrix = _i35.lineMatrix = [t, e, s, n, r, a];
                _i35.textMatrixScale = Math.hypot(t, e);
                _i35.x = _i35.lineX = 0;
                _i35.y = _i35.lineY = 0;
                _i35.xcoords = [];
                _i35.ycoords = [];
                _i35.tspan = this.svgFactory.createElement("svg:tspan");
                _i35.tspan.setAttributeNS(null, "font-family", _i35.fontFamily);
                _i35.tspan.setAttributeNS(null, "font-size", "".concat(pf(_i35.fontSize), "px"));
                _i35.tspan.setAttributeNS(null, "y", pf(-_i35.y));
                _i35.txtElement = this.svgFactory.createElement("svg:text");
                _i35.txtElement.appendChild(_i35.tspan);
              }
            }, {
              key: "beginText",
              value: function beginText() {
                var t = this.current;
                t.x = t.lineX = 0;
                t.y = t.lineY = 0;
                t.textMatrix = n.IDENTITY_MATRIX;
                t.lineMatrix = n.IDENTITY_MATRIX;
                t.textMatrixScale = 1;
                t.tspan = this.svgFactory.createElement("svg:tspan");
                t.txtElement = this.svgFactory.createElement("svg:text");
                t.txtgrp = this.svgFactory.createElement("svg:g");
                t.xcoords = [];
                t.ycoords = [];
              }
            }, {
              key: "moveText",
              value: function moveText(t, e) {
                var s = this.current;
                s.x = s.lineX += t;
                s.y = s.lineY += e;
                s.xcoords = [];
                s.ycoords = [];
                s.tspan = this.svgFactory.createElement("svg:tspan");
                s.tspan.setAttributeNS(null, "font-family", s.fontFamily);
                s.tspan.setAttributeNS(null, "font-size", "".concat(pf(s.fontSize), "px"));
                s.tspan.setAttributeNS(null, "y", pf(-s.y));
              }
            }, {
              key: "showText",
              value: function showText(t) {
                var e = this.current,
                  s = e.font,
                  r = e.fontSize;
                if (0 === r) return;
                var a = e.fontSizeScale,
                  _i36 = e.charSpacing,
                  c = e.wordSpacing,
                  h = e.fontDirection,
                  d = e.textHScale * h,
                  u = s.vertical,
                  p = u ? 1 : -1,
                  f = s.defaultVMetrics,
                  g = r * e.fontMatrix[0];
                var m = 0;
                var _iterator80 = _createForOfIteratorHelper(t),
                  _step80;
                try {
                  for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
                    var _n56 = _step80.value;
                    if (null === _n56) {
                      m += h * c;
                      continue;
                    }
                    if ("number" == typeof _n56) {
                      m += p * _n56 * r / 1e3;
                      continue;
                    }
                    var _t123 = (_n56.isSpace ? c : 0) + _i36,
                      _o14 = _n56.fontChar;
                    var _l7 = void 0,
                      _d7 = void 0,
                      _3 = void 0,
                      _A3 = _n56.width;
                    if (u) {
                      var _t124 = void 0;
                      var _e96 = _n56.vmetric || f;
                      _t124 = _n56.vmetric ? _e96[1] : .5 * _A3;
                      _t124 = -_t124 * g;
                      var _s81 = _e96[2] * g;
                      _A3 = _e96 ? -_e96[0] : _A3;
                      _l7 = _t124 / a;
                      _d7 = (m + _s81) / a;
                    } else {
                      _l7 = m / a;
                      _d7 = 0;
                    }
                    if (_n56.isInFont || s.missingFile) {
                      e.xcoords.push(e.x + _l7);
                      u && e.ycoords.push(-e.y + _d7);
                      e.tspan.textContent += _o14;
                    }
                    _3 = u ? _A3 * g - _t123 * h : _A3 * g + _t123 * h;
                    m += _3;
                  }
                } catch (err) {
                  _iterator80.e(err);
                } finally {
                  _iterator80.f();
                }
                e.tspan.setAttributeNS(null, "x", e.xcoords.map(pf).join(" "));
                u ? e.tspan.setAttributeNS(null, "y", e.ycoords.map(pf).join(" ")) : e.tspan.setAttributeNS(null, "y", pf(-e.y));
                u ? e.y -= m : e.x += m * d;
                e.tspan.setAttributeNS(null, "font-family", e.fontFamily);
                e.tspan.setAttributeNS(null, "font-size", "".concat(pf(e.fontSize), "px"));
                e.fontStyle !== o.fontStyle && e.tspan.setAttributeNS(null, "font-style", e.fontStyle);
                e.fontWeight !== o.fontWeight && e.tspan.setAttributeNS(null, "font-weight", e.fontWeight);
                var _ = e.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                if (_ === n.TextRenderingMode.FILL || _ === n.TextRenderingMode.FILL_STROKE) {
                  e.fillColor !== o.fillColor && e.tspan.setAttributeNS(null, "fill", e.fillColor);
                  e.fillAlpha < 1 && e.tspan.setAttributeNS(null, "fill-opacity", e.fillAlpha);
                } else e.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH ? e.tspan.setAttributeNS(null, "fill", "transparent") : e.tspan.setAttributeNS(null, "fill", "none");
                if (_ === n.TextRenderingMode.STROKE || _ === n.TextRenderingMode.FILL_STROKE) {
                  var _t122 = 1 / (e.textMatrixScale || 1);
                  this._setStrokeAttributes(e.tspan, _t122);
                }
                var A = e.textMatrix;
                if (0 !== e.textRise) {
                  A = A.slice();
                  A[5] += e.textRise;
                }
                e.txtElement.setAttributeNS(null, "transform", "".concat(pm(A), " scale(").concat(pf(d), ", -1)"));
                e.txtElement.setAttributeNS(l, "xml:space", "preserve");
                e.txtElement.appendChild(e.tspan);
                e.txtgrp.appendChild(e.txtElement);
                this._ensureTransformGroup().appendChild(e.txtElement);
              }
            }, {
              key: "setLeadingMoveText",
              value: function setLeadingMoveText(t, e) {
                this.setLeading(-e);
                this.moveText(t, e);
              }
            }, {
              key: "addFontStyle",
              value: function addFontStyle(t) {
                if (!t.data) throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                if (!this.cssStyle) {
                  this.cssStyle = this.svgFactory.createElement("svg:style");
                  this.cssStyle.setAttributeNS(null, "type", "text/css");
                  this.defs.appendChild(this.cssStyle);
                }
                var e = createObjectURL(t.data, t.mimetype, this.forceDataSchema);
                this.cssStyle.textContent += "@font-face { font-family: \"".concat(t.loadedName, "\"; src: url(").concat(e, "); }\n");
              }
            }, {
              key: "setFont",
              value: function setFont(t) {
                var e = this.current,
                  s = this.commonObjs.get(t[0]);
                var r = t[1];
                e.font = s;
                if (this.embedFonts && !s.missingFile && !this.embeddedFonts[s.loadedName]) {
                  this.addFontStyle(s);
                  this.embeddedFonts[s.loadedName] = s;
                }
                e.fontMatrix = s.fontMatrix || n.FONT_IDENTITY_MATRIX;
                var a = "normal";
                s.black ? a = "900" : s.bold && (a = "bold");
                var _i37 = s.italic ? "italic" : "normal";
                if (r < 0) {
                  r = -r;
                  e.fontDirection = -1;
                } else e.fontDirection = 1;
                e.fontSize = r;
                e.fontFamily = s.loadedName;
                e.fontWeight = a;
                e.fontStyle = _i37;
                e.tspan = this.svgFactory.createElement("svg:tspan");
                e.tspan.setAttributeNS(null, "y", pf(-e.y));
                e.xcoords = [];
                e.ycoords = [];
              }
            }, {
              key: "endText",
              value: function endText() {
                var _t$txtElement;
                var t = this.current;
                if (t.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG && (_t$txtElement = t.txtElement) !== null && _t$txtElement !== void 0 && _t$txtElement.hasChildNodes()) {
                  t.element = t.txtElement;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
            }, {
              key: "setLineWidth",
              value: function setLineWidth(t) {
                t > 0 && (this.current.lineWidth = t);
              }
            }, {
              key: "setLineCap",
              value: function setLineCap(t) {
                this.current.lineCap = h[t];
              }
            }, {
              key: "setLineJoin",
              value: function setLineJoin(t) {
                this.current.lineJoin = d[t];
              }
            }, {
              key: "setMiterLimit",
              value: function setMiterLimit(t) {
                this.current.miterLimit = t;
              }
            }, {
              key: "setStrokeAlpha",
              value: function setStrokeAlpha(t) {
                this.current.strokeAlpha = t;
              }
            }, {
              key: "setStrokeRGBColor",
              value: function setStrokeRGBColor(t, e, s) {
                this.current.strokeColor = n.Util.makeHexColor(t, e, s);
              }
            }, {
              key: "setFillAlpha",
              value: function setFillAlpha(t) {
                this.current.fillAlpha = t;
              }
            }, {
              key: "setFillRGBColor",
              value: function setFillRGBColor(t, e, s) {
                this.current.fillColor = n.Util.makeHexColor(t, e, s);
                this.current.tspan = this.svgFactory.createElement("svg:tspan");
                this.current.xcoords = [];
                this.current.ycoords = [];
              }
            }, {
              key: "setStrokeColorN",
              value: function setStrokeColorN(t) {
                this.current.strokeColor = this._makeColorN_Pattern(t);
              }
            }, {
              key: "setFillColorN",
              value: function setFillColorN(t) {
                this.current.fillColor = this._makeColorN_Pattern(t);
              }
            }, {
              key: "shadingFill",
              value: function shadingFill(t) {
                var e = this.viewport.width,
                  s = this.viewport.height,
                  r = n.Util.inverseTransform(this.transformMatrix),
                  a = n.Util.applyTransform([0, 0], r),
                  _i38 = n.Util.applyTransform([0, s], r),
                  o = n.Util.applyTransform([e, 0], r),
                  l = n.Util.applyTransform([e, s], r),
                  c = Math.min(a[0], _i38[0], o[0], l[0]),
                  h = Math.min(a[1], _i38[1], o[1], l[1]),
                  d = Math.max(a[0], _i38[0], o[0], l[0]),
                  u = Math.max(a[1], _i38[1], o[1], l[1]),
                  p = this.svgFactory.createElement("svg:rect");
                p.setAttributeNS(null, "x", c);
                p.setAttributeNS(null, "y", h);
                p.setAttributeNS(null, "width", d - c);
                p.setAttributeNS(null, "height", u - h);
                p.setAttributeNS(null, "fill", this._makeShadingPattern(t));
                this.current.fillAlpha < 1 && p.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                this._ensureTransformGroup().appendChild(p);
              }
            }, {
              key: "_makeColorN_Pattern",
              value: function _makeColorN_Pattern(t) {
                return "TilingPattern" === t[0] ? this._makeTilingPattern(t) : this._makeShadingPattern(t);
              }
            }, {
              key: "_makeTilingPattern",
              value: function _makeTilingPattern(t) {
                var e = t[1],
                  s = t[2],
                  r = t[3] || n.IDENTITY_MATRIX,
                  _t$ = _slicedToArray(t[4], 4),
                  a = _t$[0],
                  _i39 = _t$[1],
                  o = _t$[2],
                  l = _t$[3],
                  c = t[5],
                  h = t[6],
                  d = t[7],
                  u = "shading" + g++,
                  _n$Util$normalizeRect = n.Util.normalizeRect([].concat(_toConsumableArray(n.Util.applyTransform([a, _i39], r)), _toConsumableArray(n.Util.applyTransform([o, l], r)))),
                  _n$Util$normalizeRect2 = _slicedToArray(_n$Util$normalizeRect, 4),
                  p = _n$Util$normalizeRect2[0],
                  f = _n$Util$normalizeRect2[1],
                  m = _n$Util$normalizeRect2[2],
                  _ = _n$Util$normalizeRect2[3],
                  _n$Util$singularValue5 = n.Util.singularValueDecompose2dScale(r),
                  _n$Util$singularValue6 = _slicedToArray(_n$Util$singularValue5, 2),
                  A = _n$Util$singularValue6[0],
                  b = _n$Util$singularValue6[1],
                  y = c * A,
                  S = h * b,
                  x = this.svgFactory.createElement("svg:pattern");
                x.setAttributeNS(null, "id", u);
                x.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                x.setAttributeNS(null, "width", y);
                x.setAttributeNS(null, "height", S);
                x.setAttributeNS(null, "x", "".concat(p));
                x.setAttributeNS(null, "y", "".concat(f));
                var v = this.svg,
                  C = this.transformMatrix,
                  P = this.current.fillColor,
                  w = this.current.strokeColor,
                  k = this.svgFactory.create(m - p, _ - f);
                this.svg = k;
                this.transformMatrix = r;
                if (2 === d) {
                  var _n$Util;
                  var _t125 = (_n$Util = n.Util).makeHexColor.apply(_n$Util, _toConsumableArray(e));
                  this.current.fillColor = _t125;
                  this.current.strokeColor = _t125;
                }
                this.executeOpTree(this.convertOpList(s));
                this.svg = v;
                this.transformMatrix = C;
                this.current.fillColor = P;
                this.current.strokeColor = w;
                x.appendChild(k.childNodes[0]);
                this.defs.appendChild(x);
                return "url(#".concat(u, ")");
              }
            }, {
              key: "_makeShadingPattern",
              value: function _makeShadingPattern(t) {
                "string" == typeof t && (t = this.objs.get(t));
                switch (t[0]) {
                  case "RadialAxial":
                    var _e97 = "shading" + g++,
                      _s82 = t[3];
                    var _r47;
                    switch (t[1]) {
                      case "axial":
                        var _s83 = t[4],
                          _n57 = t[5];
                        _r47 = this.svgFactory.createElement("svg:linearGradient");
                        _r47.setAttributeNS(null, "id", _e97);
                        _r47.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                        _r47.setAttributeNS(null, "x1", _s83[0]);
                        _r47.setAttributeNS(null, "y1", _s83[1]);
                        _r47.setAttributeNS(null, "x2", _n57[0]);
                        _r47.setAttributeNS(null, "y2", _n57[1]);
                        break;
                      case "radial":
                        var _a40 = t[4],
                          _i40 = t[5],
                          _o15 = t[6],
                          _l8 = t[7];
                        _r47 = this.svgFactory.createElement("svg:radialGradient");
                        _r47.setAttributeNS(null, "id", _e97);
                        _r47.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                        _r47.setAttributeNS(null, "cx", _i40[0]);
                        _r47.setAttributeNS(null, "cy", _i40[1]);
                        _r47.setAttributeNS(null, "r", _l8);
                        _r47.setAttributeNS(null, "fx", _a40[0]);
                        _r47.setAttributeNS(null, "fy", _a40[1]);
                        _r47.setAttributeNS(null, "fr", _o15);
                        break;
                      default:
                        throw new Error("Unknown RadialAxial type: ".concat(t[1]));
                    }
                    var _iterator81 = _createForOfIteratorHelper(_s82),
                      _step81;
                    try {
                      for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
                        var _t126 = _step81.value;
                        var _e98 = this.svgFactory.createElement("svg:stop");
                        _e98.setAttributeNS(null, "offset", _t126[0]);
                        _e98.setAttributeNS(null, "stop-color", _t126[1]);
                        _r47.appendChild(_e98);
                      }
                    } catch (err) {
                      _iterator81.e(err);
                    } finally {
                      _iterator81.f();
                    }
                    this.defs.appendChild(_r47);
                    return "url(#".concat(_e97, ")");
                  case "Mesh":
                    (0, n.warn)("Unimplemented pattern Mesh");
                    return null;
                  case "Dummy":
                    return "hotpink";
                  default:
                    throw new Error("Unknown IR type: ".concat(t[0]));
                }
              }
            }, {
              key: "setDash",
              value: function setDash(t, e) {
                this.current.dashArray = t;
                this.current.dashPhase = e;
              }
            }, {
              key: "constructPath",
              value: function constructPath(t, e) {
                var s = this.current;
                var r = s.x,
                  a = s.y,
                  _i41 = [],
                  o = 0;
                var _iterator82 = _createForOfIteratorHelper(t),
                  _step82;
                try {
                  for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
                    var _s84 = _step82.value;
                    switch (0 | s) {
                      case n.OPS.rectangle:
                        r = e[o++];
                        a = e[o++];
                        var _t127 = r + e[o++],
                          _s85 = a + e[o++];
                        _i41.push("M", pf(r), pf(a), "L", pf(_t127), pf(a), "L", pf(_t127), pf(_s85), "L", pf(r), pf(_s85), "Z");
                        break;
                      case n.OPS.moveTo:
                        r = e[o++];
                        a = e[o++];
                        _i41.push("M", pf(r), pf(a));
                        break;
                      case n.OPS.lineTo:
                        r = e[o++];
                        a = e[o++];
                        _i41.push("L", pf(r), pf(a));
                        break;
                      case n.OPS.curveTo:
                        r = e[o + 4];
                        a = e[o + 5];
                        _i41.push("C", pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]), pf(r), pf(a));
                        o += 6;
                        break;
                      case n.OPS.curveTo2:
                        _i41.push("C", pf(r), pf(a), pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]));
                        r = e[o + 2];
                        a = e[o + 3];
                        o += 4;
                        break;
                      case n.OPS.curveTo3:
                        r = e[o + 2];
                        a = e[o + 3];
                        _i41.push("C", pf(e[o]), pf(e[o + 1]), pf(r), pf(a), pf(r), pf(a));
                        o += 4;
                        break;
                      case n.OPS.closePath:
                        _i41.push("Z");
                    }
                  }
                } catch (err) {
                  _iterator82.e(err);
                } finally {
                  _iterator82.f();
                }
                _i41 = _i41.join(" ");
                if (s.path && t.length > 0 && t[0] !== n.OPS.rectangle && t[0] !== n.OPS.moveTo) _i41 = s.path.getAttributeNS(null, "d") + _i41;else {
                  s.path = this.svgFactory.createElement("svg:path");
                  this._ensureTransformGroup().appendChild(s.path);
                }
                s.path.setAttributeNS(null, "d", _i41);
                s.path.setAttributeNS(null, "fill", "none");
                s.element = s.path;
                s.setCurrentPoint(r, a);
              }
            }, {
              key: "endPath",
              value: function endPath() {
                var t = this.current;
                t.path = null;
                if (!this.pendingClip) return;
                if (!t.element) {
                  this.pendingClip = null;
                  return;
                }
                var e = "clippath" + p++,
                  s = this.svgFactory.createElement("svg:clipPath");
                s.setAttributeNS(null, "id", e);
                s.setAttributeNS(null, "transform", pm(this.transformMatrix));
                var n = t.element.cloneNode(!0);
                "evenodd" === this.pendingClip ? n.setAttributeNS(null, "clip-rule", "evenodd") : n.setAttributeNS(null, "clip-rule", "nonzero");
                this.pendingClip = null;
                s.appendChild(n);
                this.defs.appendChild(s);
                if (t.activeClipUrl) {
                  t.clipGroup = null;
                  var _iterator83 = _createForOfIteratorHelper(this.extraStack),
                    _step83;
                  try {
                    for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
                      var _t128 = _step83.value;
                      _t128.clipGroup = null;
                    }
                  } catch (err) {
                    _iterator83.e(err);
                  } finally {
                    _iterator83.f();
                  }
                  s.setAttributeNS(null, "clip-path", t.activeClipUrl);
                }
                t.activeClipUrl = "url(#".concat(e, ")");
                this.tgrp = null;
              }
            }, {
              key: "clip",
              value: function clip(t) {
                this.pendingClip = t;
              }
            }, {
              key: "closePath",
              value: function closePath() {
                var t = this.current;
                if (t.path) {
                  var _e99 = "".concat(t.path.getAttributeNS(null, "d"), "Z");
                  t.path.setAttributeNS(null, "d", _e99);
                }
              }
            }, {
              key: "setLeading",
              value: function setLeading(t) {
                this.current.leading = -t;
              }
            }, {
              key: "setTextRise",
              value: function setTextRise(t) {
                this.current.textRise = t;
              }
            }, {
              key: "setTextRenderingMode",
              value: function setTextRenderingMode(t) {
                this.current.textRenderingMode = t;
              }
            }, {
              key: "setHScale",
              value: function setHScale(t) {
                this.current.textHScale = t / 100;
              }
            }, {
              key: "setRenderingIntent",
              value: function setRenderingIntent(t) {}
            }, {
              key: "setFlatness",
              value: function setFlatness(t) {}
            }, {
              key: "setGState",
              value: function setGState(t) {
                var _iterator84 = _createForOfIteratorHelper(t),
                  _step84;
                try {
                  for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
                    var _step84$value = _slicedToArray(_step84.value, 2),
                      _e100 = _step84$value[0],
                      _s86 = _step84$value[1];
                    switch (_e100) {
                      case "LW":
                        this.setLineWidth(_s86);
                        break;
                      case "LC":
                        this.setLineCap(_s86);
                        break;
                      case "LJ":
                        this.setLineJoin(_s86);
                        break;
                      case "ML":
                        this.setMiterLimit(_s86);
                        break;
                      case "D":
                        this.setDash(_s86[0], _s86[1]);
                        break;
                      case "RI":
                        this.setRenderingIntent(_s86);
                        break;
                      case "FL":
                        this.setFlatness(_s86);
                        break;
                      case "Font":
                        this.setFont(_s86);
                        break;
                      case "CA":
                        this.setStrokeAlpha(_s86);
                        break;
                      case "ca":
                        this.setFillAlpha(_s86);
                        break;
                      default:
                        (0, n.warn)("Unimplemented graphic state operator ".concat(_e100));
                    }
                  }
                } catch (err) {
                  _iterator84.e(err);
                } finally {
                  _iterator84.f();
                }
              }
            }, {
              key: "fill",
              value: function fill() {
                var t = this.current;
                if (t.element) {
                  t.element.setAttributeNS(null, "fill", t.fillColor);
                  t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha);
                  this.endPath();
                }
              }
            }, {
              key: "stroke",
              value: function stroke() {
                var t = this.current;
                if (t.element) {
                  this._setStrokeAttributes(t.element);
                  t.element.setAttributeNS(null, "fill", "none");
                  this.endPath();
                }
              }
            }, {
              key: "_setStrokeAttributes",
              value: function _setStrokeAttributes(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var s = this.current;
                var n = s.dashArray;
                1 !== e && n.length > 0 && (n = n.map(function (t) {
                  return e * t;
                }));
                t.setAttributeNS(null, "stroke", s.strokeColor);
                t.setAttributeNS(null, "stroke-opacity", s.strokeAlpha);
                t.setAttributeNS(null, "stroke-miterlimit", pf(s.miterLimit));
                t.setAttributeNS(null, "stroke-linecap", s.lineCap);
                t.setAttributeNS(null, "stroke-linejoin", s.lineJoin);
                t.setAttributeNS(null, "stroke-width", pf(e * s.lineWidth) + "px");
                t.setAttributeNS(null, "stroke-dasharray", n.map(pf).join(" "));
                t.setAttributeNS(null, "stroke-dashoffset", pf(e * s.dashPhase) + "px");
              }
            }, {
              key: "eoFill",
              value: function eoFill() {
                this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                this.fill();
              }
            }, {
              key: "fillStroke",
              value: function fillStroke() {
                this.stroke();
                this.fill();
              }
            }, {
              key: "eoFillStroke",
              value: function eoFillStroke() {
                this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                this.fillStroke();
              }
            }, {
              key: "closeStroke",
              value: function closeStroke() {
                this.closePath();
                this.stroke();
              }
            }, {
              key: "closeFillStroke",
              value: function closeFillStroke() {
                this.closePath();
                this.fillStroke();
              }
            }, {
              key: "closeEOFillStroke",
              value: function closeEOFillStroke() {
                this.closePath();
                this.eoFillStroke();
              }
            }, {
              key: "paintSolidColorImageMask",
              value: function paintSolidColorImageMask() {
                var t = this.svgFactory.createElement("svg:rect");
                t.setAttributeNS(null, "x", "0");
                t.setAttributeNS(null, "y", "0");
                t.setAttributeNS(null, "width", "1px");
                t.setAttributeNS(null, "height", "1px");
                t.setAttributeNS(null, "fill", this.current.fillColor);
                this._ensureTransformGroup().appendChild(t);
              }
            }, {
              key: "paintImageXObject",
              value: function paintImageXObject(t) {
                var e = t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t);
                e ? this.paintInlineImageXObject(e) : (0, n.warn)("Dependent image with object ID ".concat(t, " is not ready yet"));
              }
            }, {
              key: "paintInlineImageXObject",
              value: function paintInlineImageXObject(t, e) {
                var s = t.width,
                  n = t.height,
                  r = u(t, this.forceDataSchema, !!e),
                  a = this.svgFactory.createElement("svg:rect");
                a.setAttributeNS(null, "x", "0");
                a.setAttributeNS(null, "y", "0");
                a.setAttributeNS(null, "width", pf(s));
                a.setAttributeNS(null, "height", pf(n));
                this.current.element = a;
                this.clip("nonzero");
                var _i42 = this.svgFactory.createElement("svg:image");
                _i42.setAttributeNS(c, "xlink:href", r);
                _i42.setAttributeNS(null, "x", "0");
                _i42.setAttributeNS(null, "y", pf(-n));
                _i42.setAttributeNS(null, "width", pf(s) + "px");
                _i42.setAttributeNS(null, "height", pf(n) + "px");
                _i42.setAttributeNS(null, "transform", "scale(".concat(pf(1 / s), " ").concat(pf(-1 / n), ")"));
                e ? e.appendChild(_i42) : this._ensureTransformGroup().appendChild(_i42);
              }
            }, {
              key: "paintImageMaskXObject",
              value: function paintImageMaskXObject(t) {
                var e = this.current,
                  s = t.width,
                  n = t.height,
                  r = e.fillColor;
                e.maskId = "mask" + f++;
                var a = this.svgFactory.createElement("svg:mask");
                a.setAttributeNS(null, "id", e.maskId);
                var _i43 = this.svgFactory.createElement("svg:rect");
                _i43.setAttributeNS(null, "x", "0");
                _i43.setAttributeNS(null, "y", "0");
                _i43.setAttributeNS(null, "width", pf(s));
                _i43.setAttributeNS(null, "height", pf(n));
                _i43.setAttributeNS(null, "fill", r);
                _i43.setAttributeNS(null, "mask", "url(#".concat(e.maskId, ")"));
                this.defs.appendChild(a);
                this._ensureTransformGroup().appendChild(_i43);
                this.paintInlineImageXObject(t, a);
              }
            }, {
              key: "paintFormXObjectBegin",
              value: function paintFormXObjectBegin(t, e) {
                Array.isArray(t) && 6 === t.length && this.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                if (e) {
                  var _t129 = e[2] - e[0],
                    _s87 = e[3] - e[1],
                    _n58 = this.svgFactory.createElement("svg:rect");
                  _n58.setAttributeNS(null, "x", e[0]);
                  _n58.setAttributeNS(null, "y", e[1]);
                  _n58.setAttributeNS(null, "width", pf(_t129));
                  _n58.setAttributeNS(null, "height", pf(_s87));
                  this.current.element = _n58;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
            }, {
              key: "paintFormXObjectEnd",
              value: function paintFormXObjectEnd() {}
            }, {
              key: "_initialize",
              value: function _initialize(t) {
                var e = this.svgFactory.create(t.width, t.height),
                  s = this.svgFactory.createElement("svg:defs");
                e.appendChild(s);
                this.defs = s;
                var n = this.svgFactory.createElement("svg:g");
                n.setAttributeNS(null, "transform", pm(t.transform));
                e.appendChild(n);
                this.svg = n;
                return e;
              }
            }, {
              key: "_ensureClipGroup",
              value: function _ensureClipGroup() {
                if (!this.current.clipGroup) {
                  var _t130 = this.svgFactory.createElement("svg:g");
                  _t130.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                  this.svg.appendChild(_t130);
                  this.current.clipGroup = _t130;
                }
                return this.current.clipGroup;
              }
            }, {
              key: "_ensureTransformGroup",
              value: function _ensureTransformGroup() {
                if (!this.tgrp) {
                  this.tgrp = this.svgFactory.createElement("svg:g");
                  this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                  this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp);
                }
                return this.tgrp;
              }
            }]);
          }();
        }
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.PDFNodeStream = void 0;
        var n = s(1),
          r = s(26);
        var a = require("fs"),
          i = require("http"),
          o = require("https"),
          l = require("url"),
          c = /^file:\/\/\/[a-zA-Z]:\//;
        e.PDFNodeStream = /*#__PURE__*/function () {
          function PDFNodeStream(t) {
            _classCallCheck(this, PDFNodeStream);
            this.source = t;
            this.url = function parseUrl(t) {
              var e = l.parse(t);
              if ("file:" === e.protocol || e.host) return e;
              if (/^[a-z]:[/\\]/i.test(t)) return l.parse("file:///".concat(t));
              e.host || (e.protocol = "file:");
              return e;
            }(t.url);
            this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol;
            this.isFsUrl = "file:" === this.url.protocol;
            this.httpHeaders = this.isHttp && t.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          return _createClass(PDFNodeStream, [{
            key: "_progressiveDataLength",
            get: function get() {
              var _this$_fullRequestRea3, _this$_fullRequestRea4;
              return (_this$_fullRequestRea3 = (_this$_fullRequestRea4 = this._fullRequestReader) === null || _this$_fullRequestRea4 === void 0 ? void 0 : _this$_fullRequestRea4._loaded) !== null && _this$_fullRequestRea3 !== void 0 ? _this$_fullRequestRea3 : 0;
            }
          }, {
            key: "getFullReader",
            value: function getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
              this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
              return this._fullRequestReader;
            }
          }, {
            key: "getRangeReader",
            value: function getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              var s = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, t, e) : new PDFNodeStreamRangeReader(this, t, e);
              this._rangeRequestReaders.push(s);
              return s;
            }
          }, {
            key: "cancelAllRequests",
            value: function cancelAllRequests(t) {
              this._fullRequestReader && this._fullRequestReader.cancel(t);
              var _iterator85 = _createForOfIteratorHelper(this._rangeRequestReaders.slice(0)),
                _step85;
              try {
                for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
                  var _e101 = _step85.value;
                  _e101.cancel(t);
                }
              } catch (err) {
                _iterator85.e(err);
              } finally {
                _iterator85.f();
              }
            }
          }]);
        }();
        var BaseFullReader = /*#__PURE__*/function () {
          function BaseFullReader(t) {
            _classCallCheck(this, BaseFullReader);
            this._url = t.url;
            this._done = !1;
            this._storedError = null;
            this.onProgress = null;
            var e = t.source;
            this._contentLength = e.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = e.disableRange || !1;
            this._rangeChunkSize = e.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            this._isStreamingSupported = !e.disableStream;
            this._isRangeSupported = !e.disableRange;
            this._readableStream = null;
            this._readCapability = (0, n.createPromiseCapability)();
            this._headersCapability = (0, n.createPromiseCapability)();
          }
          return _createClass(BaseFullReader, [{
            key: "headersReady",
            get: function get() {
              return this._headersCapability.promise;
            }
          }, {
            key: "filename",
            get: function get() {
              return this._filename;
            }
          }, {
            key: "contentLength",
            get: function get() {
              return this._contentLength;
            }
          }, {
            key: "isRangeSupported",
            get: function get() {
              return this._isRangeSupported;
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return this._isStreamingSupported;
            }
          }, {
            key: "read",
            value: function () {
              var _read3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var t;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this._readCapability.promise;
                    case 2:
                      if (!this._done) {
                        _context15.next = 4;
                        break;
                      }
                      return _context15.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 4:
                      if (!this._storedError) {
                        _context15.next = 6;
                        break;
                      }
                      throw this._storedError;
                    case 6:
                      t = this._readableStream.read();
                      if (!(null === t)) {
                        _context15.next = 10;
                        break;
                      }
                      this._readCapability = (0, n.createPromiseCapability)();
                      return _context15.abrupt("return", this.read());
                    case 10:
                      this._loaded += t.length;
                      this.onProgress && this.onProgress({
                        loaded: this._loaded,
                        total: this._contentLength
                      });
                      return _context15.abrupt("return", {
                        value: new Uint8Array(t).buffer,
                        done: !1
                      });
                    case 13:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));
              function read() {
                return _read3.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._readableStream ? this._readableStream.destroy(t) : this._error(t);
            }
          }, {
            key: "_error",
            value: function _error(t) {
              this._storedError = t;
              this._readCapability.resolve();
            }
          }, {
            key: "_setReadableStream",
            value: function _setReadableStream(t) {
              var _this50 = this;
              this._readableStream = t;
              t.on("readable", function () {
                _this50._readCapability.resolve();
              });
              t.on("end", function () {
                t.destroy();
                _this50._done = !0;
                _this50._readCapability.resolve();
              });
              t.on("error", function (t) {
                _this50._error(t);
              });
              !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled"));
              this._storedError && this._readableStream.destroy(this._storedError);
            }
          }]);
        }();
        var BaseRangeReader = /*#__PURE__*/function () {
          function BaseRangeReader(t) {
            _classCallCheck(this, BaseRangeReader);
            this._url = t.url;
            this._done = !1;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = (0, n.createPromiseCapability)();
            var e = t.source;
            this._isStreamingSupported = !e.disableStream;
          }
          return _createClass(BaseRangeReader, [{
            key: "isStreamingSupported",
            get: function get() {
              return this._isStreamingSupported;
            }
          }, {
            key: "read",
            value: function () {
              var _read4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                var t;
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this._readCapability.promise;
                    case 2:
                      if (!this._done) {
                        _context16.next = 4;
                        break;
                      }
                      return _context16.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 4:
                      if (!this._storedError) {
                        _context16.next = 6;
                        break;
                      }
                      throw this._storedError;
                    case 6:
                      t = this._readableStream.read();
                      if (!(null === t)) {
                        _context16.next = 10;
                        break;
                      }
                      this._readCapability = (0, n.createPromiseCapability)();
                      return _context16.abrupt("return", this.read());
                    case 10:
                      this._loaded += t.length;
                      this.onProgress && this.onProgress({
                        loaded: this._loaded
                      });
                      return _context16.abrupt("return", {
                        value: new Uint8Array(t).buffer,
                        done: !1
                      });
                    case 13:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16, this);
              }));
              function read() {
                return _read4.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._readableStream ? this._readableStream.destroy(t) : this._error(t);
            }
          }, {
            key: "_error",
            value: function _error(t) {
              this._storedError = t;
              this._readCapability.resolve();
            }
          }, {
            key: "_setReadableStream",
            value: function _setReadableStream(t) {
              var _this51 = this;
              this._readableStream = t;
              t.on("readable", function () {
                _this51._readCapability.resolve();
              });
              t.on("end", function () {
                t.destroy();
                _this51._done = !0;
                _this51._readCapability.resolve();
              });
              t.on("error", function (t) {
                _this51._error(t);
              });
              this._storedError && this._readableStream.destroy(this._storedError);
            }
          }]);
        }();
        function createRequestOptions(t, e) {
          return {
            protocol: t.protocol,
            auth: t.auth,
            host: t.hostname,
            port: t.port,
            path: t.path,
            method: "GET",
            headers: e
          };
        }
        var PDFNodeStreamFullReader = /*#__PURE__*/function (_BaseFullReader) {
          function PDFNodeStreamFullReader(t) {
            var _this52;
            _classCallCheck(this, PDFNodeStreamFullReader);
            _this52 = _callSuper(this, PDFNodeStreamFullReader, [t]);
            var handleResponse = function handleResponse(e) {
              if (404 === e.statusCode) {
                var _t131 = new n.MissingPDFException("Missing PDF \"".concat(_this52._url, "\"."));
                _this52._storedError = _t131;
                _this52._headersCapability.reject(_t131);
                return;
              }
              _this52._headersCapability.resolve();
              _this52._setReadableStream(e);
              var getResponseHeader = function getResponseHeader(t) {
                  return _this52._readableStream.headers[t.toLowerCase()];
                },
                _ref65 = (0, r.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: t.isHttp,
                  rangeChunkSize: _this52._rangeChunkSize,
                  disableRange: _this52._disableRange
                }),
                s = _ref65.allowRangeRequests,
                a = _ref65.suggestedLength;
              _this52._isRangeSupported = s;
              _this52._contentLength = a || _this52._contentLength;
              _this52._filename = (0, r.extractFilenameFromHeader)(getResponseHeader);
            };
            _this52._request = null;
            "http:" === _this52._url.protocol ? _this52._request = i.request(createRequestOptions(_this52._url, t.httpHeaders), handleResponse) : _this52._request = o.request(createRequestOptions(_this52._url, t.httpHeaders), handleResponse);
            _this52._request.on("error", function (t) {
              _this52._storedError = t;
              _this52._headersCapability.reject(t);
            });
            _this52._request.end();
            return _this52;
          }
          _inherits(PDFNodeStreamFullReader, _BaseFullReader);
          return _createClass(PDFNodeStreamFullReader);
        }(BaseFullReader);
        var PDFNodeStreamRangeReader = /*#__PURE__*/function (_BaseRangeReader) {
          function PDFNodeStreamRangeReader(t, e, s) {
            var _this53;
            _classCallCheck(this, PDFNodeStreamRangeReader);
            _this53 = _callSuper(this, PDFNodeStreamRangeReader, [t]);
            _this53._httpHeaders = {};
            for (var _e102 in t.httpHeaders) {
              var _s88 = t.httpHeaders[_e102];
              void 0 !== _s88 && (_this53._httpHeaders[_e102] = _s88);
            }
            _this53._httpHeaders.Range = "bytes=".concat(e, "-").concat(s - 1);
            var handleResponse = function handleResponse(t) {
              if (404 !== t.statusCode) _this53._setReadableStream(t);else {
                var _t132 = new n.MissingPDFException("Missing PDF \"".concat(_this53._url, "\"."));
                _this53._storedError = _t132;
              }
            };
            _this53._request = null;
            "http:" === _this53._url.protocol ? _this53._request = i.request(createRequestOptions(_this53._url, _this53._httpHeaders), handleResponse) : _this53._request = o.request(createRequestOptions(_this53._url, _this53._httpHeaders), handleResponse);
            _this53._request.on("error", function (t) {
              _this53._storedError = t;
            });
            _this53._request.end();
            return _this53;
          }
          _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);
          return _createClass(PDFNodeStreamRangeReader);
        }(BaseRangeReader);
        var PDFNodeStreamFsFullReader = /*#__PURE__*/function (_BaseFullReader2) {
          function PDFNodeStreamFsFullReader(t) {
            var _this54;
            _classCallCheck(this, PDFNodeStreamFsFullReader);
            _this54 = _callSuper(this, PDFNodeStreamFsFullReader, [t]);
            var e = decodeURIComponent(_this54._url.path);
            c.test(_this54._url.href) && (e = e.replace(/^\//, ""));
            a.lstat(e, function (t, s) {
              if (t) {
                "ENOENT" === t.code && (t = new n.MissingPDFException("Missing PDF \"".concat(e, "\".")));
                _this54._storedError = t;
                _this54._headersCapability.reject(t);
              } else {
                _this54._contentLength = s.size;
                _this54._setReadableStream(a.createReadStream(e));
                _this54._headersCapability.resolve();
              }
            });
            return _this54;
          }
          _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);
          return _createClass(PDFNodeStreamFsFullReader);
        }(BaseFullReader);
        var PDFNodeStreamFsRangeReader = /*#__PURE__*/function (_BaseRangeReader2) {
          function PDFNodeStreamFsRangeReader(t, e, s) {
            var _this55;
            _classCallCheck(this, PDFNodeStreamFsRangeReader);
            _this55 = _callSuper(this, PDFNodeStreamFsRangeReader, [t]);
            var n = decodeURIComponent(_this55._url.path);
            c.test(_this55._url.href) && (n = n.replace(/^\//, ""));
            _this55._setReadableStream(a.createReadStream(n, {
              start: e,
              end: s - 1
            }));
            return _this55;
          }
          _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);
          return _createClass(PDFNodeStreamFsRangeReader);
        }(BaseRangeReader);
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.createResponseStatusError = function createResponseStatusError(t, e) {
          if (404 === t || 0 === t && e.startsWith("file:")) return new n.MissingPDFException('Missing PDF "' + e + '".');
          return new n.UnexpectedResponseException("Unexpected server response (".concat(t, ") while retrieving PDF \"").concat(e, "\"."), t);
        };
        e.extractFilenameFromHeader = function extractFilenameFromHeader(t) {
          var e = t("Content-Disposition");
          if (e) {
            var _t133 = (0, r.getFilenameFromContentDispositionHeader)(e);
            if (_t133.includes("%")) try {
              _t133 = decodeURIComponent(_t133);
            } catch (t) {}
            if ((0, a.isPdfFile)(_t133)) return _t133;
          }
          return null;
        };
        e.validateRangeRequestCapabilities = function validateRangeRequestCapabilities(_ref66) {
          var t = _ref66.getResponseHeader,
            e = _ref66.isHttp,
            s = _ref66.rangeChunkSize,
            n = _ref66.disableRange;
          var r = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            },
            a = parseInt(t("Content-Length"), 10);
          if (!Number.isInteger(a)) return r;
          r.suggestedLength = a;
          if (a <= 2 * s) return r;
          if (n || !e) return r;
          if ("bytes" !== t("Accept-Ranges")) return r;
          if ("identity" !== (t("Content-Encoding") || "identity")) return r;
          r.allowRangeRequests = !0;
          return r;
        };
        e.validateResponseStatus = function validateResponseStatus(t) {
          return 200 === t || 206 === t;
        };
        var n = s(1),
          r = s(27),
          a = s(5);
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.getFilenameFromContentDispositionHeader = function getFilenameFromContentDispositionHeader(t) {
          var e = !0,
            s = toParamRegExp("filename\\*", "i").exec(t);
          if (s) {
            s = s[1];
            var _t134 = rfc2616unquote(s);
            _t134 = unescape(_t134);
            _t134 = rfc5987decode(_t134);
            _t134 = rfc2047decode(_t134);
            return fixupEncoding(_t134);
          }
          s = function rfc2231getparam(t) {
            var e = [];
            var s;
            var n = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            for (; null !== (s = n.exec(t));) {
              var _s89 = s,
                _s90 = _slicedToArray(_s89, 4),
                _t135 = _s90[1],
                _n59 = _s90[2],
                _r48 = _s90[3];
              _t135 = parseInt(_t135, 10);
              if (_t135 in e) {
                if (0 === _t135) break;
              } else e[_t135] = [_n59, _r48];
            }
            var r = [];
            for (var _t136 = 0; _t136 < e.length && _t136 in e; ++_t136) {
              var _e$_t = _slicedToArray(e[_t136], 2),
                _s91 = _e$_t[0],
                _n60 = _e$_t[1];
              _n60 = rfc2616unquote(_n60);
              if (_s91) {
                _n60 = unescape(_n60);
                0 === _t136 && (_n60 = rfc5987decode(_n60));
              }
              r.push(_n60);
            }
            return r.join("");
          }(t);
          if (s) {
            return fixupEncoding(rfc2047decode(s));
          }
          s = toParamRegExp("filename", "i").exec(t);
          if (s) {
            s = s[1];
            var _t137 = rfc2616unquote(s);
            _t137 = rfc2047decode(_t137);
            return fixupEncoding(_t137);
          }
          function toParamRegExp(t, e) {
            return new RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e);
          }
          function textdecode(t, s) {
            if (t) {
              if (!/^[\x00-\xFF]+$/.test(s)) return s;
              try {
                var r = new TextDecoder(t, {
                    fatal: !0
                  }),
                  a = (0, n.stringToBytes)(s);
                s = r.decode(a);
                e = !1;
              } catch (t) {}
            }
            return s;
          }
          function fixupEncoding(t) {
            if (e && /[\x80-\xff]/.test(t)) {
              t = textdecode("utf-8", t);
              e && (t = textdecode("iso-8859-1", t));
            }
            return t;
          }
          function rfc2616unquote(t) {
            if (t.startsWith('"')) {
              var _e103 = t.slice(1).split('\\"');
              for (var _t138 = 0; _t138 < _e103.length; ++_t138) {
                var _s92 = _e103[_t138].indexOf('"');
                if (-1 !== _s92) {
                  _e103[_t138] = _e103[_t138].slice(0, _s92);
                  _e103.length = _t138 + 1;
                }
                _e103[_t138] = _e103[_t138].replace(/\\(.)/g, "$1");
              }
              t = _e103.join('"');
            }
            return t;
          }
          function rfc5987decode(t) {
            var e = t.indexOf("'");
            if (-1 === e) return t;
            return textdecode(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
          }
          function rfc2047decode(t) {
            return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t) ? t : t.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, s, n) {
              if ("q" === s || "Q" === s) return textdecode(e, n = (n = n.replace(/_/g, " ")).replace(/=([0-9a-fA-F]{2})/g, function (t, e) {
                return String.fromCharCode(parseInt(e, 16));
              }));
              try {
                n = atob(n);
              } catch (t) {}
              return textdecode(e, n);
            });
          }
          return "";
        };
        var n = s(1);
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.PDFNetworkStream = void 0;
        var n = s(1),
          r = s(26);
        var NetworkManager = /*#__PURE__*/function () {
          function NetworkManager(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, NetworkManager);
            this.url = t;
            this.isHttp = /^https?:/i.test(t);
            this.httpHeaders = this.isHttp && e.httpHeaders || Object.create(null);
            this.withCredentials = e.withCredentials || !1;
            this.getXhr = e.getXhr || function NetworkManager_getXhr() {
              return new XMLHttpRequest();
            };
            this.currXhrId = 0;
            this.pendingRequests = Object.create(null);
          }
          return _createClass(NetworkManager, [{
            key: "requestRange",
            value: function requestRange(t, e, s) {
              var n = {
                begin: t,
                end: e
              };
              for (var _t139 in s) n[_t139] = s[_t139];
              return this.request(n);
            }
          }, {
            key: "requestFull",
            value: function requestFull(t) {
              return this.request(t);
            }
          }, {
            key: "request",
            value: function request(t) {
              var e = this.getXhr(),
                s = this.currXhrId++,
                n = this.pendingRequests[s] = {
                  xhr: e
                };
              e.open("GET", this.url);
              e.withCredentials = this.withCredentials;
              for (var _t140 in this.httpHeaders) {
                var _s93 = this.httpHeaders[_t140];
                void 0 !== _s93 && e.setRequestHeader(_t140, _s93);
              }
              if (this.isHttp && "begin" in t && "end" in t) {
                e.setRequestHeader("Range", "bytes=".concat(t.begin, "-").concat(t.end - 1));
                n.expectedStatus = 206;
              } else n.expectedStatus = 200;
              e.responseType = "arraybuffer";
              t.onError && (e.onerror = function (s) {
                t.onError(e.status);
              });
              e.onreadystatechange = this.onStateChange.bind(this, s);
              e.onprogress = this.onProgress.bind(this, s);
              n.onHeadersReceived = t.onHeadersReceived;
              n.onDone = t.onDone;
              n.onError = t.onError;
              n.onProgress = t.onProgress;
              e.send(null);
              return s;
            }
          }, {
            key: "onProgress",
            value: function onProgress(t, e) {
              var _s$onProgress;
              var s = this.pendingRequests[t];
              s && ((_s$onProgress = s.onProgress) === null || _s$onProgress === void 0 ? void 0 : _s$onProgress.call(s, e));
            }
          }, {
            key: "onStateChange",
            value: function onStateChange(t, e) {
              var _s$onError3;
              var s = this.pendingRequests[t];
              if (!s) return;
              var r = s.xhr;
              if (r.readyState >= 2 && s.onHeadersReceived) {
                s.onHeadersReceived();
                delete s.onHeadersReceived;
              }
              if (4 !== r.readyState) return;
              if (!(t in this.pendingRequests)) return;
              delete this.pendingRequests[t];
              if (0 === r.status && this.isHttp) {
                var _s$onError;
                (_s$onError = s.onError) === null || _s$onError === void 0 || _s$onError.call(s, r.status);
                return;
              }
              var a = r.status || 200;
              if (!(200 === a && 206 === s.expectedStatus) && a !== s.expectedStatus) {
                var _s$onError2;
                (_s$onError2 = s.onError) === null || _s$onError2 === void 0 || _s$onError2.call(s, r.status);
                return;
              }
              var i = function getArrayBuffer(t) {
                var e = t.response;
                return "string" != typeof e ? e : (0, n.stringToBytes)(e).buffer;
              }(r);
              if (206 === a) {
                var _t141 = r.getResponseHeader("Content-Range"),
                  _e104 = /bytes (\d+)-(\d+)\/(\d+)/.exec(_t141);
                s.onDone({
                  begin: parseInt(_e104[1], 10),
                  chunk: i
                });
              } else i ? s.onDone({
                begin: 0,
                chunk: i
              }) : (_s$onError3 = s.onError) === null || _s$onError3 === void 0 ? void 0 : _s$onError3.call(s, r.status);
            }
          }, {
            key: "getRequestXhr",
            value: function getRequestXhr(t) {
              return this.pendingRequests[t].xhr;
            }
          }, {
            key: "isPendingRequest",
            value: function isPendingRequest(t) {
              return t in this.pendingRequests;
            }
          }, {
            key: "abortRequest",
            value: function abortRequest(t) {
              var e = this.pendingRequests[t].xhr;
              delete this.pendingRequests[t];
              e.abort();
            }
          }]);
        }();
        e.PDFNetworkStream = /*#__PURE__*/function () {
          function PDFNetworkStream(t) {
            _classCallCheck(this, PDFNetworkStream);
            this._source = t;
            this._manager = new NetworkManager(t.url, {
              httpHeaders: t.httpHeaders,
              withCredentials: t.withCredentials
            });
            this._rangeChunkSize = t.rangeChunkSize;
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          return _createClass(PDFNetworkStream, [{
            key: "_onRangeRequestReaderClosed",
            value: function _onRangeRequestReaderClosed(t) {
              var e = this._rangeRequestReaders.indexOf(t);
              e >= 0 && this._rangeRequestReaders.splice(e, 1);
            }
          }, {
            key: "getFullReader",
            value: function getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
              this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
              return this._fullRequestReader;
            }
          }, {
            key: "getRangeReader",
            value: function getRangeReader(t, e) {
              var s = new PDFNetworkStreamRangeRequestReader(this._manager, t, e);
              s.onClosed = this._onRangeRequestReaderClosed.bind(this);
              this._rangeRequestReaders.push(s);
              return s;
            }
          }, {
            key: "cancelAllRequests",
            value: function cancelAllRequests(t) {
              var _this$_fullRequestRea5;
              (_this$_fullRequestRea5 = this._fullRequestReader) === null || _this$_fullRequestRea5 === void 0 || _this$_fullRequestRea5.cancel(t);
              var _iterator86 = _createForOfIteratorHelper(this._rangeRequestReaders.slice(0)),
                _step86;
              try {
                for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
                  var _e105 = _step86.value;
                  _e105.cancel(t);
                }
              } catch (err) {
                _iterator86.e(err);
              } finally {
                _iterator86.f();
              }
            }
          }]);
        }();
        var PDFNetworkStreamFullRequestReader = /*#__PURE__*/function () {
          function PDFNetworkStreamFullRequestReader(t, e) {
            _classCallCheck(this, PDFNetworkStreamFullRequestReader);
            this._manager = t;
            var s = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = e.url;
            this._fullRequestId = t.requestFull(s);
            this._headersReceivedCapability = (0, n.createPromiseCapability)();
            this._disableRange = e.disableRange || !1;
            this._contentLength = e.length;
            this._rangeChunkSize = e.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            this._isStreamingSupported = !1;
            this._isRangeSupported = !1;
            this._cachedChunks = [];
            this._requests = [];
            this._done = !1;
            this._storedError = void 0;
            this._filename = null;
            this.onProgress = null;
          }
          return _createClass(PDFNetworkStreamFullRequestReader, [{
            key: "_onHeadersReceived",
            value: function _onHeadersReceived() {
              var t = this._fullRequestId,
                e = this._manager.getRequestXhr(t),
                getResponseHeader = function getResponseHeader(t) {
                  return e.getResponseHeader(t);
                },
                _ref67 = (0, r.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: this._manager.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                }),
                s = _ref67.allowRangeRequests,
                n = _ref67.suggestedLength;
              s && (this._isRangeSupported = !0);
              this._contentLength = n || this._contentLength;
              this._filename = (0, r.extractFilenameFromHeader)(getResponseHeader);
              this._isRangeSupported && this._manager.abortRequest(t);
              this._headersReceivedCapability.resolve();
            }
          }, {
            key: "_onDone",
            value: function _onDone(t) {
              if (t) if (this._requests.length > 0) {
                this._requests.shift().resolve({
                  value: t.chunk,
                  done: !1
                });
              } else this._cachedChunks.push(t.chunk);
              this._done = !0;
              if (!(this._cachedChunks.length > 0)) {
                var _iterator87 = _createForOfIteratorHelper(this._requests),
                  _step87;
                try {
                  for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
                    var _t142 = _step87.value;
                    _t142.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (err) {
                  _iterator87.e(err);
                } finally {
                  _iterator87.f();
                }
                this._requests.length = 0;
              }
            }
          }, {
            key: "_onError",
            value: function _onError(t) {
              this._storedError = (0, r.createResponseStatusError)(t, this._url);
              this._headersReceivedCapability.reject(this._storedError);
              var _iterator88 = _createForOfIteratorHelper(this._requests),
                _step88;
              try {
                for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
                  var _t143 = _step88.value;
                  _t143.reject(this._storedError);
                }
              } catch (err) {
                _iterator88.e(err);
              } finally {
                _iterator88.f();
              }
              this._requests.length = 0;
              this._cachedChunks.length = 0;
            }
          }, {
            key: "_onProgress",
            value: function _onProgress(t) {
              var _this$onProgress;
              (_this$onProgress = this.onProgress) === null || _this$onProgress === void 0 || _this$onProgress.call(this, {
                loaded: t.loaded,
                total: t.lengthComputable ? t.total : this._contentLength
              });
            }
          }, {
            key: "filename",
            get: function get() {
              return this._filename;
            }
          }, {
            key: "isRangeSupported",
            get: function get() {
              return this._isRangeSupported;
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return this._isStreamingSupported;
            }
          }, {
            key: "contentLength",
            get: function get() {
              return this._contentLength;
            }
          }, {
            key: "headersReady",
            get: function get() {
              return this._headersReceivedCapability.promise;
            }
          }, {
            key: "read",
            value: function () {
              var _read5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                var t;
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!this._storedError) {
                        _context17.next = 2;
                        break;
                      }
                      throw this._storedError;
                    case 2:
                      if (!(this._cachedChunks.length > 0)) {
                        _context17.next = 4;
                        break;
                      }
                      return _context17.abrupt("return", {
                        value: this._cachedChunks.shift(),
                        done: !1
                      });
                    case 4:
                      if (!this._done) {
                        _context17.next = 6;
                        break;
                      }
                      return _context17.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 6:
                      t = (0, n.createPromiseCapability)();
                      this._requests.push(t);
                      return _context17.abrupt("return", t.promise);
                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17, this);
              }));
              function read() {
                return _read5.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._done = !0;
              this._headersReceivedCapability.reject(t);
              var _iterator89 = _createForOfIteratorHelper(this._requests),
                _step89;
              try {
                for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
                  var _t144 = _step89.value;
                  _t144.resolve({
                    value: void 0,
                    done: !0
                  });
                }
              } catch (err) {
                _iterator89.e(err);
              } finally {
                _iterator89.f();
              }
              this._requests.length = 0;
              this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
              this._fullRequestReader = null;
            }
          }]);
        }();
        var PDFNetworkStreamRangeRequestReader = /*#__PURE__*/function () {
          function PDFNetworkStreamRangeRequestReader(t, e, s) {
            _classCallCheck(this, PDFNetworkStreamRangeRequestReader);
            this._manager = t;
            var n = {
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = t.url;
            this._requestId = t.requestRange(e, s, n);
            this._requests = [];
            this._queuedChunk = null;
            this._done = !1;
            this._storedError = void 0;
            this.onProgress = null;
            this.onClosed = null;
          }
          return _createClass(PDFNetworkStreamRangeRequestReader, [{
            key: "_close",
            value: function _close() {
              var _this$onClosed;
              (_this$onClosed = this.onClosed) === null || _this$onClosed === void 0 || _this$onClosed.call(this, this);
            }
          }, {
            key: "_onDone",
            value: function _onDone(t) {
              var e = t.chunk;
              if (this._requests.length > 0) {
                this._requests.shift().resolve({
                  value: e,
                  done: !1
                });
              } else this._queuedChunk = e;
              this._done = !0;
              var _iterator90 = _createForOfIteratorHelper(this._requests),
                _step90;
              try {
                for (_iterator90.s(); !(_step90 = _iterator90.n()).done;) {
                  var _t145 = _step90.value;
                  _t145.resolve({
                    value: void 0,
                    done: !0
                  });
                }
              } catch (err) {
                _iterator90.e(err);
              } finally {
                _iterator90.f();
              }
              this._requests.length = 0;
              this._close();
            }
          }, {
            key: "_onError",
            value: function _onError(t) {
              this._storedError = (0, r.createResponseStatusError)(t, this._url);
              var _iterator91 = _createForOfIteratorHelper(this._requests),
                _step91;
              try {
                for (_iterator91.s(); !(_step91 = _iterator91.n()).done;) {
                  var _t146 = _step91.value;
                  _t146.reject(this._storedError);
                }
              } catch (err) {
                _iterator91.e(err);
              } finally {
                _iterator91.f();
              }
              this._requests.length = 0;
              this._queuedChunk = null;
            }
          }, {
            key: "_onProgress",
            value: function _onProgress(t) {
              var _this$onProgress2;
              this.isStreamingSupported || ((_this$onProgress2 = this.onProgress) === null || _this$onProgress2 === void 0 ? void 0 : _this$onProgress2.call(this, {
                loaded: t.loaded
              }));
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return !1;
            }
          }, {
            key: "read",
            value: function () {
              var _read6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                var _t147, t;
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!this._storedError) {
                        _context18.next = 2;
                        break;
                      }
                      throw this._storedError;
                    case 2:
                      if (!(null !== this._queuedChunk)) {
                        _context18.next = 6;
                        break;
                      }
                      _t147 = this._queuedChunk;
                      this._queuedChunk = null;
                      return _context18.abrupt("return", {
                        value: _t147,
                        done: !1
                      });
                    case 6:
                      if (!this._done) {
                        _context18.next = 8;
                        break;
                      }
                      return _context18.abrupt("return", {
                        value: void 0,
                        done: !0
                      });
                    case 8:
                      t = (0, n.createPromiseCapability)();
                      this._requests.push(t);
                      return _context18.abrupt("return", t.promise);
                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18, this);
              }));
              function read() {
                return _read6.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._done = !0;
              var _iterator92 = _createForOfIteratorHelper(this._requests),
                _step92;
              try {
                for (_iterator92.s(); !(_step92 = _iterator92.n()).done;) {
                  var _t148 = _step92.value;
                  _t148.resolve({
                    value: void 0,
                    done: !0
                  });
                }
              } catch (err) {
                _iterator92.e(err);
              } finally {
                _iterator92.f();
              }
              this._requests.length = 0;
              this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
              this._close();
            }
          }]);
        }();
      }, function (t, e, s) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.PDFFetchStream = void 0;
        var n = s(1),
          r = s(26);
        function createFetchOptions(t, e, s) {
          return {
            method: "GET",
            headers: t,
            signal: s === null || s === void 0 ? void 0 : s.signal,
            mode: "cors",
            credentials: e ? "include" : "same-origin",
            redirect: "follow"
          };
        }
        function createHeaders(t) {
          var e = new Headers();
          for (var _s94 in t) {
            var _n61 = t[_s94];
            void 0 !== _n61 && e.append(_s94, _n61);
          }
          return e;
        }
        e.PDFFetchStream = /*#__PURE__*/function () {
          function PDFFetchStream(t) {
            _classCallCheck(this, PDFFetchStream);
            this.source = t;
            this.isHttp = /^https?:/i.test(t.url);
            this.httpHeaders = this.isHttp && t.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          return _createClass(PDFFetchStream, [{
            key: "_progressiveDataLength",
            get: function get() {
              var _this$_fullRequestRea6, _this$_fullRequestRea7;
              return (_this$_fullRequestRea6 = (_this$_fullRequestRea7 = this._fullRequestReader) === null || _this$_fullRequestRea7 === void 0 ? void 0 : _this$_fullRequestRea7._loaded) !== null && _this$_fullRequestRea6 !== void 0 ? _this$_fullRequestRea6 : 0;
            }
          }, {
            key: "getFullReader",
            value: function getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
              this._fullRequestReader = new PDFFetchStreamReader(this);
              return this._fullRequestReader;
            }
          }, {
            key: "getRangeReader",
            value: function getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              var s = new PDFFetchStreamRangeReader(this, t, e);
              this._rangeRequestReaders.push(s);
              return s;
            }
          }, {
            key: "cancelAllRequests",
            value: function cancelAllRequests(t) {
              this._fullRequestReader && this._fullRequestReader.cancel(t);
              var _iterator93 = _createForOfIteratorHelper(this._rangeRequestReaders.slice(0)),
                _step93;
              try {
                for (_iterator93.s(); !(_step93 = _iterator93.n()).done;) {
                  var _e106 = _step93.value;
                  _e106.cancel(t);
                }
              } catch (err) {
                _iterator93.e(err);
              } finally {
                _iterator93.f();
              }
            }
          }]);
        }();
        var PDFFetchStreamReader = /*#__PURE__*/function () {
          function PDFFetchStreamReader(t) {
            var _this56 = this;
            _classCallCheck(this, PDFFetchStreamReader);
            this._stream = t;
            this._reader = null;
            this._loaded = 0;
            this._filename = null;
            var e = t.source;
            this._withCredentials = e.withCredentials || !1;
            this._contentLength = e.length;
            this._headersCapability = (0, n.createPromiseCapability)();
            this._disableRange = e.disableRange || !1;
            this._rangeChunkSize = e.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            "undefined" != typeof AbortController && (this._abortController = new AbortController());
            this._isStreamingSupported = !e.disableStream;
            this._isRangeSupported = !e.disableRange;
            this._headers = createHeaders(this._stream.httpHeaders);
            var s = e.url;
            fetch(s, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (t) {
              if (!(0, r.validateResponseStatus)(t.status)) throw (0, r.createResponseStatusError)(t.status, s);
              _this56._reader = t.body.getReader();
              _this56._headersCapability.resolve();
              var getResponseHeader = function getResponseHeader(e) {
                  return t.headers.get(e);
                },
                _ref68 = (0, r.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: _this56._stream.isHttp,
                  rangeChunkSize: _this56._rangeChunkSize,
                  disableRange: _this56._disableRange
                }),
                e = _ref68.allowRangeRequests,
                a = _ref68.suggestedLength;
              _this56._isRangeSupported = e;
              _this56._contentLength = a || _this56._contentLength;
              _this56._filename = (0, r.extractFilenameFromHeader)(getResponseHeader);
              !_this56._isStreamingSupported && _this56._isRangeSupported && _this56.cancel(new n.AbortException("Streaming is disabled."));
            }).catch(this._headersCapability.reject);
            this.onProgress = null;
          }
          return _createClass(PDFFetchStreamReader, [{
            key: "headersReady",
            get: function get() {
              return this._headersCapability.promise;
            }
          }, {
            key: "filename",
            get: function get() {
              return this._filename;
            }
          }, {
            key: "contentLength",
            get: function get() {
              return this._contentLength;
            }
          }, {
            key: "isRangeSupported",
            get: function get() {
              return this._isRangeSupported;
            }
          }, {
            key: "isStreamingSupported",
            get: function get() {
              return this._isStreamingSupported;
            }
          }, {
            key: "read",
            value: function () {
              var _read7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                var _yield$this$_reader$r, t, e;
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this._headersCapability.promise;
                    case 2:
                      _context19.next = 4;
                      return this._reader.read();
                    case 4:
                      _yield$this$_reader$r = _context19.sent;
                      t = _yield$this$_reader$r.value;
                      e = _yield$this$_reader$r.done;
                      if (!e) {
                        _context19.next = 9;
                        break;
                      }
                      return _context19.abrupt("return", {
                        value: t,
                        done: e
                      });
                    case 9:
                      this._loaded += t.byteLength;
                      this.onProgress && this.onProgress({
                        loaded: this._loaded,
                        total: this._contentLength
                      });
                      return _context19.abrupt("return", {
                        value: new Uint8Array(t).buffer,
                        done: !1
                      });
                    case 12:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19, this);
              }));
              function read() {
                return _read7.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._reader && this._reader.cancel(t);
              this._abortController && this._abortController.abort();
            }
          }]);
        }();
        var PDFFetchStreamRangeReader = /*#__PURE__*/function () {
          function PDFFetchStreamRangeReader(t, e, s) {
            var _this57 = this;
            _classCallCheck(this, PDFFetchStreamRangeReader);
            this._stream = t;
            this._reader = null;
            this._loaded = 0;
            var a = t.source;
            this._withCredentials = a.withCredentials || !1;
            this._readCapability = (0, n.createPromiseCapability)();
            this._isStreamingSupported = !a.disableStream;
            "undefined" != typeof AbortController && (this._abortController = new AbortController());
            this._headers = createHeaders(this._stream.httpHeaders);
            this._headers.append("Range", "bytes=".concat(e, "-").concat(s - 1));
            var i = a.url;
            fetch(i, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (t) {
              if (!(0, r.validateResponseStatus)(t.status)) throw (0, r.createResponseStatusError)(t.status, i);
              _this57._readCapability.resolve();
              _this57._reader = t.body.getReader();
            }).catch(this._readCapability.reject);
            this.onProgress = null;
          }
          return _createClass(PDFFetchStreamRangeReader, [{
            key: "isStreamingSupported",
            get: function get() {
              return this._isStreamingSupported;
            }
          }, {
            key: "read",
            value: function () {
              var _read8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                var _yield$this$_reader$r2, t, e;
                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                  while (1) switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this._readCapability.promise;
                    case 2:
                      _context20.next = 4;
                      return this._reader.read();
                    case 4:
                      _yield$this$_reader$r2 = _context20.sent;
                      t = _yield$this$_reader$r2.value;
                      e = _yield$this$_reader$r2.done;
                      if (!e) {
                        _context20.next = 9;
                        break;
                      }
                      return _context20.abrupt("return", {
                        value: t,
                        done: e
                      });
                    case 9:
                      this._loaded += t.byteLength;
                      this.onProgress && this.onProgress({
                        loaded: this._loaded
                      });
                      return _context20.abrupt("return", {
                        value: new Uint8Array(t).buffer,
                        done: !1
                      });
                    case 12:
                    case "end":
                      return _context20.stop();
                  }
                }, _callee20, this);
              }));
              function read() {
                return _read8.apply(this, arguments);
              }
              return read;
            }()
          }, {
            key: "cancel",
            value: function cancel(t) {
              this._reader && this._reader.cancel(t);
              this._abortController && this._abortController.abort();
            }
          }]);
        }();
      }],
      __webpack_module_cache__ = {};
    function __w_pdfjs_require__(t) {
      var e = __webpack_module_cache__[t];
      if (void 0 !== e) return e.exports;
      var s = __webpack_module_cache__[t] = {
        exports: {}
      };
      __webpack_modules__[t](s, s.exports, __w_pdfjs_require__);
      return s.exports;
    }
    var __webpack_exports__ = {};
    (function () {
      var t = __webpack_exports__;
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      Object.defineProperty(t, "AnnotationLayer", {
        enumerable: !0,
        get: function get() {
          return r.AnnotationLayer;
        }
      });
      Object.defineProperty(t, "AnnotationMode", {
        enumerable: !0,
        get: function get() {
          return e.AnnotationMode;
        }
      });
      Object.defineProperty(t, "CMapCompressionType", {
        enumerable: !0,
        get: function get() {
          return e.CMapCompressionType;
        }
      });
      Object.defineProperty(t, "GlobalWorkerOptions", {
        enumerable: !0,
        get: function get() {
          return a.GlobalWorkerOptions;
        }
      });
      Object.defineProperty(t, "InvalidPDFException", {
        enumerable: !0,
        get: function get() {
          return e.InvalidPDFException;
        }
      });
      Object.defineProperty(t, "LoopbackPort", {
        enumerable: !0,
        get: function get() {
          return s.LoopbackPort;
        }
      });
      Object.defineProperty(t, "MissingPDFException", {
        enumerable: !0,
        get: function get() {
          return e.MissingPDFException;
        }
      });
      Object.defineProperty(t, "OPS", {
        enumerable: !0,
        get: function get() {
          return e.OPS;
        }
      });
      Object.defineProperty(t, "PDFDataRangeTransport", {
        enumerable: !0,
        get: function get() {
          return s.PDFDataRangeTransport;
        }
      });
      Object.defineProperty(t, "PDFDateString", {
        enumerable: !0,
        get: function get() {
          return n.PDFDateString;
        }
      });
      Object.defineProperty(t, "PDFWorker", {
        enumerable: !0,
        get: function get() {
          return s.PDFWorker;
        }
      });
      Object.defineProperty(t, "PasswordResponses", {
        enumerable: !0,
        get: function get() {
          return e.PasswordResponses;
        }
      });
      Object.defineProperty(t, "PermissionFlag", {
        enumerable: !0,
        get: function get() {
          return e.PermissionFlag;
        }
      });
      Object.defineProperty(t, "PixelsPerInch", {
        enumerable: !0,
        get: function get() {
          return n.PixelsPerInch;
        }
      });
      Object.defineProperty(t, "RenderingCancelledException", {
        enumerable: !0,
        get: function get() {
          return n.RenderingCancelledException;
        }
      });
      Object.defineProperty(t, "SVGGraphics", {
        enumerable: !0,
        get: function get() {
          return l.SVGGraphics;
        }
      });
      Object.defineProperty(t, "UNSUPPORTED_FEATURES", {
        enumerable: !0,
        get: function get() {
          return e.UNSUPPORTED_FEATURES;
        }
      });
      Object.defineProperty(t, "UnexpectedResponseException", {
        enumerable: !0,
        get: function get() {
          return e.UnexpectedResponseException;
        }
      });
      Object.defineProperty(t, "Util", {
        enumerable: !0,
        get: function get() {
          return e.Util;
        }
      });
      Object.defineProperty(t, "VerbosityLevel", {
        enumerable: !0,
        get: function get() {
          return e.VerbosityLevel;
        }
      });
      Object.defineProperty(t, "XfaLayer", {
        enumerable: !0,
        get: function get() {
          return c.XfaLayer;
        }
      });
      Object.defineProperty(t, "build", {
        enumerable: !0,
        get: function get() {
          return s.build;
        }
      });
      Object.defineProperty(t, "createPromiseCapability", {
        enumerable: !0,
        get: function get() {
          return e.createPromiseCapability;
        }
      });
      Object.defineProperty(t, "createValidAbsoluteUrl", {
        enumerable: !0,
        get: function get() {
          return e.createValidAbsoluteUrl;
        }
      });
      Object.defineProperty(t, "getDocument", {
        enumerable: !0,
        get: function get() {
          return s.getDocument;
        }
      });
      Object.defineProperty(t, "getFilenameFromUrl", {
        enumerable: !0,
        get: function get() {
          return n.getFilenameFromUrl;
        }
      });
      Object.defineProperty(t, "getPdfFilenameFromUrl", {
        enumerable: !0,
        get: function get() {
          return n.getPdfFilenameFromUrl;
        }
      });
      Object.defineProperty(t, "getXfaPageViewport", {
        enumerable: !0,
        get: function get() {
          return n.getXfaPageViewport;
        }
      });
      Object.defineProperty(t, "isPdfFile", {
        enumerable: !0,
        get: function get() {
          return n.isPdfFile;
        }
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: !0,
        get: function get() {
          return n.loadScript;
        }
      });
      Object.defineProperty(t, "renderTextLayer", {
        enumerable: !0,
        get: function get() {
          return o.renderTextLayer;
        }
      });
      Object.defineProperty(t, "shadow", {
        enumerable: !0,
        get: function get() {
          return e.shadow;
        }
      });
      Object.defineProperty(t, "version", {
        enumerable: !0,
        get: function get() {
          return s.version;
        }
      });
      var e = __w_pdfjs_require__(1),
        s = __w_pdfjs_require__(4),
        n = __w_pdfjs_require__(5),
        r = __w_pdfjs_require__(20),
        a = __w_pdfjs_require__(13),
        i = __w_pdfjs_require__(3),
        o = __w_pdfjs_require__(23),
        l = __w_pdfjs_require__(24),
        c = __w_pdfjs_require__(22);
      if (i.isNodeJS) {
        var _w_pdfjs_require__2 = __w_pdfjs_require__(25),
          _t149 = _w_pdfjs_require__2.PDFNodeStream;
        (0, s.setPDFNetworkStreamFactory)(function (e) {
          return new _t149(e);
        });
      } else {
        var _w_pdfjs_require__3 = __w_pdfjs_require__(28),
          _t150 = _w_pdfjs_require__3.PDFNetworkStream,
          _w_pdfjs_require__4 = __w_pdfjs_require__(29),
          _e107 = _w_pdfjs_require__4.PDFFetchStream;
        (0, s.setPDFNetworkStreamFactory)(function (s) {
          return (0, n.isValidFetchUrl)(s.url) ? new _e107(s) : new _t150(s);
        });
      }
    })();
    return __webpack_exports__;
  }();
});