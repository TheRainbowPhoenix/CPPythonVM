/// <reference types="emscripten" />

var Module = {
  vram: null,
  width: 320,
  height: 528,
  // print: function (text) {
  //   alert("stdout: " + text);
  // },
  // printErr: function (text) {
  //   alert("stderr: " + text);
  // },
  Debug_printf: function (x, y, message) {
    console.log(`[x: ${x}, y: ${y}] "${message}"`);
  },
  calcInit: function () {
    console.log("calcInit");
  },
  preInit: function () {
    console.debug("-- EMS: preInit");
    // Initialize vram, width, and height
    Module.vram = new Uint16Array(Module.width * Module.height);
  },
  postInit: function () {
    // Additional post-init code if needed
  },
  onRuntimeInitialized: function () {
    // Additional initialization code after runtime is initialized
  },
  getVRAM: function () {
    return Module.vram;
  },
};

/// <reference types="emscripten" />

var Module = {
  vram: null,
  width: 320,
  height: 528,
  // print: function (text) {
  //   alert("stdout: " + text);
  // },
  // printErr: function (text) {
  //   alert("stderr: " + text);
  // },
  Debug_printf: function (x, y, message) {
    console.log(`[x: ${x}, y: ${y}] "${message}"`);
  },
  calcInit: function () {
    console.log("calcInit");
  },
  preInit: function () {
    console.debug("-- EMS: preInit");
    // Initialize vram, width, and height
    Module.vram = new Uint16Array(Module.width * Module.height);
  },
  postInit: function () {
    // Additional post-init code if needed
  },
  onRuntimeInitialized: function () {
    // Additional initialization code after runtime is initialized
  },
  getVRAM: function () {
    return Module.vram;
  },
};

var Module = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(moduleArg = {}) {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise((resolve, reject) => {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
/// <reference types="emscripten" />

var Module = {
  vram: null,
  width: 320,
  height: 528,
  // print: function (text) {
  //   alert("stdout: " + text);
  // },
  // printErr: function (text) {
  //   alert("stderr: " + text);
  // },
  Debug_printf: function (x, y, message) {
    console.log(`[x: ${x}, y: ${y}] "${message}"`);
  },
  calcInit: function () {
    console.log("calcInit");
  },
  preInit: function () {
    console.debug("-- EMS: preInit");
    // Initialize vram, width, and height
    Module.vram = new Uint16Array(Module.width * Module.height);
  },
  postInit: function () {
    // Additional post-init code if needed
  },
  onRuntimeInitialized: function () {
    // Additional initialization code after runtime is initialized
  },
  getVRAM: function () {
    return Module.vram;
  },
};
/// <reference types="emscripten" />

var Module = {
  vram: null,
  width: 320,
  height: 528,
  // print: function (text) {
  //   alert("stdout: " + text);
  // },
  // printErr: function (text) {
  //   alert("stderr: " + text);
  // },
  Debug_printf: function (x, y, message) {
    console.log(`[x: ${x}, y: ${y}] "${message}"`);
  },
  calcInit: function () {
    console.log("calcInit");
  },
  preInit: function () {
    console.debug("-- EMS: preInit");
    // Initialize vram, width, and height
    Module.vram = new Uint16Array(Module.width * Module.height);
  },
  postInit: function () {
    // Additional post-init code if needed
  },
  onRuntimeInitialized: function () {
    // Additional initialization code after runtime is initialized
  },
  getVRAM: function () {
    return Module.vram;
  },
};


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary;

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message

// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];

// include: wasm2js.js
// wasm2js.js - enough of a polyfill for the WebAssembly object so that we can load
// wasm2js code that way.

// Emit "var WebAssembly" if definitely using wasm2js. Otherwise, in MAYBE_WASM2JS
// mode, we can't use a "var" since it would prevent normal wasm from working.
/** @suppress{duplicate, const} */
var
WebAssembly = {
  // Note that we do not use closure quoting (this['buffer'], etc.) on these
  // functions, as they are just meant for internal use. In other words, this is
  // not a fully general polyfill.
  /** @constructor */
  Memory: function(opts) {
    this.buffer = new ArrayBuffer(opts['initial'] * 65536);
  },

  Module: function(binary) {
    // TODO: use the binary and info somehow - right now the wasm2js output is embedded in
    // the main JS
  },

  /** @constructor */
  Instance: function(module, info) {
    // TODO: use the module somehow - right now the wasm2js output is embedded in
    // the main JS
    // This will be replaced by the actual wasm2js code.
    this.exports = (
function instantiate(info) {
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 65536, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweAB0ZXN0AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABmbG9hdAB1aW50NjRfdAAlcwB1bnNpZ25lZCBjaGFyAHN0ZDo6ZXhjZXB0aW9uAHRlcm1pbmF0ZV9oYW5kbGVyIHVuZXhwZWN0ZWRseSB0aHJldyBhbiBleGNlcHRpb24AbmFuAGJvb2wAZW1zY3JpcHRlbjo6dmFsAHVuc2lnbmVkIGxvbmcAc3RkOjp3c3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGluZgBpbnN0YW50aWF0ZQBkb3VibGUATG9hZGluZyBQeSBCeXRlY29kZQB2b2lkAHRlcm1pbmF0ZV9oYW5kbGVyIHVuZXhwZWN0ZWRseSByZXR1cm5lZABFbXB0eSBmaWxlIDogJWQAc3RkOjpiYWRfYWxsb2MAJTAyWABOQU4AUmVhZCAlZCBieXRlcyBvZiBjbGFzcyAtIE9LAElORgBDbGFzcyBzdGF0IGlzIG51bGwgPwBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDY0X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDY0X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgA6Oi4uIERFU1RSMFkgLi46OgBrMwBrMgBrMQBbTWFwOjpyZW1vdmVdIEtleSBub3QgZm91bmQgaW4gdGhlIG1hcC4AKG51bGwpAGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJjYWxjSW5pdCIsIHsgZGV0YWlsOiAidGVzdCBlbXNjcmlwdGVuX3J1bl9zY3JpcHQiIH0pKQBjb25zb2xlLmxvZygiY2FsY0luaXQgY2FsbGVkIC0gZW1zY3JpcHRlbl9ydW5fc2NyaXB0IikAY29uc29sZS5sb2coImNhbGNFbmQgY2FsbGVkIikATnVtYmVyOiAlZCAAW1NUVUIgLSBjYWxjSW5pdF0KAFtTVFVCIC0gY2FsY0VuZF0KAAAAAAAAAAAAAAAAAAAZAAoAGRkZAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABkAEQoZGRkDCgcAAQAJCxgAAAkGCwAACwAGGQAAABkZGQAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAZAAoNGRkZAA0AAAIACQ4AAAAJAA4AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAEwAAAAATAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAEDwAAAAAJEAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAARAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAAABoaGgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABcAAAAAFwAAAAAJFAAAAAAAFAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAAAAVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUZwaWlpaQBpaWlpcABpAGkAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAOAMAQCBBwEATlN0M19fMjEyYmFzaWNfc3RyaW5nSWhOU18xMWNoYXJfdHJhaXRzSWhFRU5TXzlhbGxvY2F0b3JJaEVFRUUAAOAMAQDIBwEATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAOAMAQAQCAEATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAADgDAEAWAgBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEaU5TXzExY2hhcl90cmFpdHNJRGlFRU5TXzlhbGxvY2F0b3JJRGlFRUVFAAAA4AwBAKQIAQBOMTBlbXNjcmlwdGVuM3ZhbEUAAOAMAQDwCAEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAADgDAEADAkBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWFFRQAA4AwBADQJAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUAAOAMAQBcCQEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAADgDAEAhAkBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXRFRQAA4AwBAKwJAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUAAOAMAQDUCQEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJakVFAADgDAEA/AkBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWxFRQAA4AwBACQKAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUAAOAMAQBMCgEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJeEVFAADgDAEAdAoBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXlFRQAA4AwBAJwKAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAOAMAQDECgEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAADgDAEA7AoBAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAAAgNAQAUCwEAyA0BAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAAAgNAQBECwEAOAsBAE4xMF9fY3h4YWJpdjExN19fcGJhc2VfdHlwZV9pbmZvRQAAAAgNAQB0CwEAOAsBAE4xMF9fY3h4YWJpdjExOV9fcG9pbnRlcl90eXBlX2luZm9FAAgNAQCkCwEAmAsBAAAAAAAYDAEADQAAAA4AAAAPAAAAEAAAABEAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UACA0BAPALAQA4CwEAdgAAANwLAQAkDAEAYgAAANwLAQAwDAEAYwAAANwLAQA8DAEAaAAAANwLAQBIDAEAYQAAANwLAQBUDAEAcwAAANwLAQBgDAEAdAAAANwLAQBsDAEAaQAAANwLAQB4DAEAagAAANwLAQCEDAEAbAAAANwLAQCQDAEAbQAAANwLAQCcDAEAeAAAANwLAQCoDAEAeQAAANwLAQC0DAEAZgAAANwLAQDADAEAZAAAANwLAQDMDAEAAAAAAGgLAQANAAAAEgAAAA8AAAAQAAAAEwAAABQAAAAVAAAAFgAAAAAAAABQDQEADQAAABcAAAAPAAAAEAAAABMAAAAYAAAAGQAAABoAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACA0BACgNAQBoCwEAAAAAAKwNAQAIAAAAGwAAABwAAAAAAAAAlA0BAAgAAAAdAAAAHgAAAFN0OWV4Y2VwdGlvbgAAAADgDAEAhA0BAFN0OWJhZF9hbGxvYwAAAAAIDQEAnA0BAJQNAQBTdDl0eXBlX2luZm8AAAAA4AwBALgNAQA=");
  base64DecodeToExistingUint8Array(bufferView, 69072, "BQAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAYAAADIFwEAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP////8KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B8BAAsAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 69224, "eyBNb2R1bGUuY3Vyc29yID0gTW9kdWxlLmN1cnNvciB8fCB7fTsgc2V0VmFsdWUoJDAsIE1vZHVsZS5jdXJzb3IueCB8fCAwKTsgc2V0VmFsdWUoJDEsIE1vZHVsZS5jdXJzb3IueSB8fCAwKTsgfQB7IHZhciBtc2cgPSBNb2R1bGUuVVRGOFRvU3RyaW5nKCQwKTsgdmFyIHggPSAkMTsgdmFyIHkgPSAkMjsgdmFyIGludmVydCA9ICQzOyB2YXIgemVybyA9IDB4MDAwMDsgTW9kdWxlLmRlYnVnLmRyYXdUZXh0KG1zZywgeCwgeSwgaW52ZXJ0LCAxKTsgY29uc29sZS5sb2cobXNnKTsgfQB7IGNvbnNvbGUubG9nKCJEZWJ1Z19QcmludGYgLSBFTV9BU00iLCAkMCwgJDEsICQyLCAkMywgTW9kdWxlLlVURjhUb1N0cmluZygkNCkpOyBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgib25DYWxsIiwgeyBkZXRhaWw6IHsgZnVuY3Rpb246ICJEZWJ1Z19QcmludGYiLCBhcmdzOiB7IHg6ICQwLCB5OiAkMSwgaW52ZXJ0OiAkMiwgemVybzogJDMsIG91dHB1dDogTW9kdWxlLlVURjhUb1N0cmluZygkNCkgfSB9IH0pKTsgfQB7IE1vZHVsZS5jdXJzb3IgPSBNb2R1bGUuY3Vyc29yIHx8IHt9OyBjb25zdCBtc2cgPSBNb2R1bGUuVVRGOFRvU3RyaW5nKCQwKTsgY29uc3QgaW52ZXJ0ID0gJDE7IGNvbnN0IHggPSBNb2R1bGUuY3Vyc29yLnggfHwgMDsgY29uc3QgeSA9IE1vZHVsZS5jdXJzb3IueSB8fCAwOyBjb25zdCBzY2FsZSA9IDI7IE1vZHVsZS5kZWJ1Zy5kcmF3VGV4dChtc2csIHgsIHksIGludmVydCwgc2NhbGUpOyBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgib25DYWxsIiwgeyBkZXRhaWw6IHsgZnVuY3Rpb246ICJEZWJ1Z19QcmludFN0cmluZyIsIGFyZ3M6IHsgc3RyaW5nOiBNb2R1bGUuVVRGOFRvU3RyaW5nKCQwKSwgaW52ZXJ0OiAkMSB9IH0gfSkpOyB9AHsgTW9kdWxlLmN1cnNvciA9IE1vZHVsZS5jdXJzb3IgfHwge307IE1vZHVsZS5jdXJzb3IueCA9ICQwOyBNb2R1bGUuY3Vyc29yLnkgPSAkMTsgY29uc29sZS5sb2coTW9kdWxlLmN1cnNvcik7IH0AeyBjb25zdCBzaXplID0gTW9kdWxlLndpZHRoICogTW9kdWxlLmhlaWdodDsgdmFyIHZyYW1BcnJheSA9IG5ldyBVaW50MTZBcnJheShNb2R1bGUudnJhbS5idWZmZXIsIDAsIHNpemUpOyB2cmFtQXJyYXkuZmlsbCgkMCk7IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJvbkNhbGwiLCB7IGRldGFpbDogeyBmdW5jdGlvbjogImZpbGxTY3JlZW4iLCBhcmdzOiB7IGNvbG9yOiAkMCB9IH0gfSkpOyB9AHsgdmFyIHggPSAkMDsgdmFyIHkgPSAkMTsgdmFyIGNvbG9yID0gJDI7IHZhciB3aWR0aCA9IE1vZHVsZS53aWR0aDsgdmFyIGhlaWdodCA9IE1vZHVsZS5oZWlnaHQ7IGlmICh4ID49IDAgJiYgeCA8IHdpZHRoICYmIHkgPj0gMCAmJiB5IDwgaGVpZ2h0KSB7IHZhciBpbmRleCA9IHkgKiB3aWR0aCArIHg7IE1vZHVsZS52cmFtW2luZGV4XSA9IGNvbG9yOyB9IH0AeyBjb25zb2xlLmxvZygiY2FsY0luaXQgLSBFTV9BU00iLCAkMCk7IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJjYWxjSW5pdCIsIHsgZGV0YWlsOiBgdGVzdCBFTV9BU00gJHskMH1gIH0pKTsgfQB7IGNvbnNvbGUubG9nKCJjYWxjRW5kIC0gRU1fQVNNIik7IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJjYWxjRW5kIiwgeyBkZXRhaWw6IGB0ZXN0IEVNX0FTTWAgfSkpOyB9AHsgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoIm9uQ2FsbCIsIHsgZGV0YWlsOiB7IGZ1bmN0aW9uOiAiTENEX1JlZnJlc2giLCBhcmdzOiB7fSB9IH0pKTsgfQB7IHZhciBrZXkxUHRyID0gJDA7IHZhciBrZXkyUHRyID0gJDE7IHNldFZhbHVlKGtleTFQdHIsIDEsICdpMzInKTsgc2V0VmFsdWUoa2V5MlB0ciwgMSwgJ2kzMicpOyB9AHsgTW9kdWxlLmZpbGVFeGlzdHMgPSBmdW5jdGlvbihwYXRoKSB7IHJldHVybiBGUy5hbmFseXplUGF0aChwYXRoKS5leGlzdHM7IH07IH0AeyByZXR1cm4gTW9kdWxlLmZpbGVFeGlzdHMoUG9pbnRlcl9zdHJpbmdpZnkoJDApKTsgfQB7IHZhciBmbGFncyA9ICgkMCYxPyJyIjoiIikrKCQwJjI/InciOiIiKSsoJDAzJjQ/IisiOiIiKTsgdmFyIGZpbGUgPSBGUy5vcGVuKFBvaW50ZXJfc3RyaW5naWZ5KCQwKSwgZmxhZ3MpOyByZXR1cm4gZmlsZS5mZDsgfQA=");
  base64DecodeToExistingUint8Array(bufferView, 71408, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var env = imports.env;
 var memory = env.memory;
 var buffer = memory.buffer;
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var __syscall_fstat64 = env.__syscall_fstat64;
 var __syscall_stat64 = env.__syscall_stat64;
 var __syscall_newfstatat = env.__syscall_newfstatat;
 var __syscall_lstat64 = env.__syscall_lstat64;
 var wasi_snapshot_preview1 = imports.wasi_snapshot_preview1;
 var __wasi_fd_read = wasi_snapshot_preview1.fd_read;
 var __wasi_fd_close = wasi_snapshot_preview1.fd_close;
 var emscripten_asm_const_int = env.emscripten_asm_const_int;
 var emscripten_memcpy_js = env.emscripten_memcpy_js;
 var emscripten_run_script = env.emscripten_run_script;
 var __wasi_fd_write = wasi_snapshot_preview1.fd_write;
 var _embind_register_void = env._embind_register_void;
 var _embind_register_bool = env._embind_register_bool;
 var _embind_register_integer = env._embind_register_integer;
 var _embind_register_float = env._embind_register_float;
 var _embind_register_std_string = env._embind_register_std_string;
 var _embind_register_std_wstring = env._embind_register_std_wstring;
 var _embind_register_emval = env._embind_register_emval;
 var _embind_register_memory_view = env._embind_register_memory_view;
 var emscripten_resize_heap = env.emscripten_resize_heap;
 var __cxa_throw = env.__cxa_throw;
 var invoke_ii = env.invoke_ii;
 var __cxa_find_matching_catch_3 = env.__cxa_find_matching_catch_3;
 var __cxa_begin_catch = env.__cxa_begin_catch;
 var invoke_v = env.invoke_v;
 var invoke_vi = env.invoke_vi;
 var abort = env.abort;
 var invoke_vii = env.invoke_vii;
 var legalimport$_embind_register_bigint = env._embind_register_bigint;
 var __stack_pointer = 65536;
 var tempRet0 = 0;
 var global$2 = 69224;
 var global$3 = 71401;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 // EMSCRIPTEN_START_FUNCS
;
 function __wasm_call_ctors() {
  init_pthread_self();
  _GLOBAL__sub_I_bind_cpp();
 }
 
 function __errno_location() {
  return 71408 | 0;
 }
 
 function __syscall_ret($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0 >>> 0 < -4095 >>> 0) {
    break label$1
   }
   HEAP32[(__errno_location() | 0) >> 2] = 0 - $0 | 0;
   $0 = -1;
  }
  return $0 | 0;
 }
 
 function __fstatat($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (($0 | 0) < (0 | 0)) {
       break label$4
      }
      if (($3 | 0) != (4096 | 0)) {
       break label$4
      }
      if (HEAPU8[$1 >> 0] | 0) {
       break label$3
      }
      $0 = __syscall_fstat64($0 | 0, $2 | 0) | 0;
      break label$1;
     }
     label$5 : {
      label$6 : {
       if (($0 | 0) == (-100 | 0)) {
        break label$6
       }
       $4 = HEAPU8[$1 >> 0] | 0;
       label$7 : {
        if ($3) {
         break label$7
        }
        if (($4 & 255 | 0 | 0) == (47 | 0)) {
         break label$5
        }
       }
       if (($3 | 0) != (256 | 0)) {
        break label$3
       }
       if (($4 & 255 | 0 | 0) != (47 | 0)) {
        break label$3
       }
       break label$2;
      }
      if (($3 | 0) == (256 | 0)) {
       break label$2
      }
      if ($3) {
       break label$3
      }
     }
     $0 = __syscall_stat64($1 | 0, $2 | 0) | 0;
     break label$1;
    }
    $0 = __syscall_newfstatat($0 | 0, $1 | 0, $2 | 0, $3 | 0) | 0;
    break label$1;
   }
   $0 = __syscall_lstat64($1 | 0, $2 | 0) | 0;
  }
  return __syscall_ret($0 | 0) | 0 | 0;
 }
 
 function __fstat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (($0 | 0) > (-1 | 0)) {
    break label$1
   }
   return __syscall_ret(-8 | 0) | 0 | 0;
  }
  return __fstatat($0 | 0, 66946 | 0, $1 | 0, 4096 | 0) | 0 | 0;
 }
 
 function __wasi_syscall_ret($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   return 0 | 0;
  }
  HEAP32[(__errno_location() | 0) >> 2] = $0;
  return -1 | 0;
 }
 
 function read($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  HEAP32[($3 + 12 | 0) >> 2] = $2;
  HEAP32[($3 + 8 | 0) >> 2] = $1;
  $2 = __wasi_syscall_ret(__wasi_fd_read($0 | 0, $3 + 8 | 0 | 0, 1 | 0, $3 + 4 | 0 | 0) | 0 | 0) | 0;
  $1 = HEAP32[($3 + 4 | 0) >> 2] | 0;
  __stack_pointer = $3 + 16 | 0;
  return ($2 ? -1 : $1) | 0;
 }
 
 function dummy($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function close($0) {
  $0 = $0 | 0;
  $0 = __wasi_fd_close(dummy($0 | 0) | 0 | 0) | 0;
  return __wasi_syscall_ret((($0 | 0) == (27 | 0) ? 0 : $0) | 0) | 0 | 0;
 }
 
 function runMain() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0;
  $0 = __stack_pointer - 48 | 0;
  __stack_pointer = $0;
  calcInit();
  LCD_Refresh();
  fillScreen(65535 | 0);
  Debug_Printf(0 | 0, 0 | 0, 0 | 0, 0 | 0, 65812 | 0, 0 | 0);
  LCD_Refresh();
  __fstat(0 | 0, $0 + 28 | 0 | 0) | 0;
  label$1 : {
   label$2 : {
    $1 = HEAP32[($0 + 32 | 0) >> 2] | 0;
    $2 = dlmalloc($1 | 0) | 0;
    if ($2) {
     break label$2
    }
    Debug_Printf(0 | 0, 1 | 0, 1 | 0, 0 | 0, 65949 | 0, 0 | 0);
    break label$1;
   }
   label$3 : {
    $3 = read(0 | 0, $2 | 0, $1 | 0) | 0;
    if (($3 | 0) > (-1 | 0)) {
     break label$3
    }
    HEAP32[$0 >> 2] = $3;
    Debug_Printf(0 | 0, 1 | 0, 1 | 0, 0 | 0, 65877 | 0, $0 | 0);
    break label$1;
   }
   HEAP32[($0 + 16 | 0) >> 2] = $3;
   Debug_Printf(0 | 0, 1 | 0, 0 | 0, 0 | 0, 65917 | 0, $0 + 16 | 0 | 0);
   StartPVM_28unsigned_20char__2c_20unsigned_20int_29($2 | 0, $1 | 0) | 0;
  }
  close(0 | 0) | 0;
  LCD_Refresh();
  LCD_Refresh();
  calcEnd();
  __stack_pointer = $0 + 48 | 0;
 }
 
 function CPPAlertUser_28char_20const__29($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  HEAP32[$1 >> 2] = $0;
  Debug_Printf(0 | 0, 40 | 0, 0 | 0, 0 | 0, 65613 | 0, $1 | 0);
  LCD_Refresh();
  __stack_pointer = $1 + 16 | 0;
 }
 
 function CPPrintNumber_28int_29($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  HEAP32[$1 >> 2] = $0;
  Debug_Printf(0 | 0, 41 | 0, 0 | 0, 0 | 0, 66898 | 0, $1 | 0);
  __stack_pointer = $1 + 16 | 0;
 }
 
 function IntegerPClass__IntegerPClass_28_29($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function IntegerPClass__get_instance_28_29() {
  var $0 = 0;
  label$1 : {
   $0 = HEAP32[(0 + 71412 | 0) >> 2] | 0;
   if ($0) {
    break label$1
   }
   $0 = operator_20new_28unsigned_20long_29(4 | 0) | 0;
   IntegerPClass__IntegerPClass_28_29($0 | 0) | 0;
   HEAP32[(0 + 71412 | 0) >> 2] = $0;
  }
  return $0 | 0;
 }
 
 function PInteger__PInteger_28int_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = IntegerPClass__get_instance_28_29() | 0;
  return $0 | 0;
 }
 
 function __memset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$0 = 0, $4 = 0, i64toi32_i32$1 = 0, $6 = 0, $5 = 0, $6$hi = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   HEAP8[$0 >> 0] = $1;
   $3 = $0 + $2 | 0;
   HEAP8[($3 + -1 | 0) >> 0] = $1;
   if ($2 >>> 0 < 3 >>> 0) {
    break label$1
   }
   HEAP8[($0 + 2 | 0) >> 0] = $1;
   HEAP8[($0 + 1 | 0) >> 0] = $1;
   HEAP8[($3 + -3 | 0) >> 0] = $1;
   HEAP8[($3 + -2 | 0) >> 0] = $1;
   if ($2 >>> 0 < 7 >>> 0) {
    break label$1
   }
   HEAP8[($0 + 3 | 0) >> 0] = $1;
   HEAP8[($3 + -4 | 0) >> 0] = $1;
   if ($2 >>> 0 < 9 >>> 0) {
    break label$1
   }
   $4 = (0 - $0 | 0) & 3 | 0;
   $3 = $0 + $4 | 0;
   $1 = Math_imul($1 & 255 | 0, 16843009);
   HEAP32[$3 >> 2] = $1;
   $4 = ($2 - $4 | 0) & -4 | 0;
   $2 = $3 + $4 | 0;
   HEAP32[($2 + -4 | 0) >> 2] = $1;
   if ($4 >>> 0 < 9 >>> 0) {
    break label$1
   }
   HEAP32[($3 + 8 | 0) >> 2] = $1;
   HEAP32[($3 + 4 | 0) >> 2] = $1;
   HEAP32[($2 + -8 | 0) >> 2] = $1;
   HEAP32[($2 + -12 | 0) >> 2] = $1;
   if ($4 >>> 0 < 25 >>> 0) {
    break label$1
   }
   HEAP32[($3 + 24 | 0) >> 2] = $1;
   HEAP32[($3 + 20 | 0) >> 2] = $1;
   HEAP32[($3 + 16 | 0) >> 2] = $1;
   HEAP32[($3 + 12 | 0) >> 2] = $1;
   HEAP32[($2 + -16 | 0) >> 2] = $1;
   HEAP32[($2 + -20 | 0) >> 2] = $1;
   HEAP32[($2 + -24 | 0) >> 2] = $1;
   HEAP32[($2 + -28 | 0) >> 2] = $1;
   $5 = $3 & 4 | 0 | 24 | 0;
   $2 = $4 - $5 | 0;
   if ($2 >>> 0 < 32 >>> 0) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 1;
   i64toi32_i32$1 = __wasm_i64_mul($1 | 0, i64toi32_i32$0 | 0, 1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $6 = i64toi32_i32$1;
   $6$hi = i64toi32_i32$0;
   $1 = $3 + $5 | 0;
   label$2 : while (1) {
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $1;
    HEAP32[($1 + 24 | 0) >> 2] = $6;
    HEAP32[($1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1;
    HEAP32[($1 + 16 | 0) >> 2] = $6;
    HEAP32[($1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1;
    HEAP32[($1 + 8 | 0) >> 2] = $6;
    HEAP32[($1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1;
    HEAP32[$1 >> 2] = $6;
    HEAP32[($1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1 = $1 + 32 | 0;
    $2 = $2 + -32 | 0;
    if ($2 >>> 0 > 31 >>> 0) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0 | 0;
 }
 
 function Reality__instantiate_28_29() {
  var $0 = 0;
  HEAP32[(0 + 71420 | 0) >> 2] = PInteger__PInteger_28int_29(operator_20new_28unsigned_20long_29(8 | 0) | 0 | 0, 0 | 0) | 0;
  HEAP32[(0 + 71416 | 0) >> 2] = PInteger__PInteger_28int_29(operator_20new_28unsigned_20long_29(8 | 0) | 0 | 0, 1 | 0) | 0;
  $0 = operator_20new_28unsigned_20long_29(4 | 0) | 0;
  HEAP32[$0 >> 2] = 0;
  HEAP32[(0 + 71424 | 0) >> 2] = $0;
  Map_char_20const__2c_20PObject____insert_28char_20const__2c_20PObject__29(Map_char_20const__2c_20PObject____Map_28int_29(operator_20new_28unsigned_20long_29(12 | 0) | 0 | 0, 255 | 0) | 0 | 0, 65565 | 0, HEAP32[(0 + 71424 | 0) >> 2] | 0 | 0);
  CPPAlertUser_28char_20const__29(65793 | 0);
 }
 
 function Map_char_20const__2c_20PObject____Map_28int_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  $2 = $1 << 3 | 0;
  $1 = operator_20new_5b_5d_28unsigned_20long_29(($1 >>> 0 > 536870911 >>> 0 ? -1 : $2) | 0) | 0;
  HEAP32[$0 >> 2] = $1;
  __memset($1 | 0, 0 | 0, $2 | 0) | 0;
  return $0 | 0;
 }
 
 function Map_char_20const__2c_20PObject____insert_28char_20const__2c_20PObject__29($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  HEAP32[($3 + 12 | 0) >> 2] = $1;
  $1 = Map_char_20const__2c_20PObject____hash_28char_20const__20const__29_20const($0 | 0, $3 + 12 | 0 | 0) | 0;
  $1 = (HEAP32[$0 >> 2] | 0) + ($1 << 3 | 0) | 0;
  $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     $5 = HEAP32[$1 >> 2] | 0;
     if (!$5) {
      break label$2
     }
     label$4 : {
      if (($5 | 0) != ($4 | 0)) {
       break label$4
      }
      HEAP32[($1 + 4 | 0) >> 2] = $2;
      break label$1;
     }
     $1 = $1 + 8 | 0;
     continue label$3;
    };
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2;
   HEAP32[$1 >> 2] = $4;
   HEAP32[($0 + 8 | 0) >> 2] = (HEAP32[($0 + 8 | 0) >> 2] | 0) + 1 | 0;
  }
  __stack_pointer = $3 + 16 | 0;
 }
 
 function Map_char_20const__2c_20PObject____hash_28char_20const__20const__29_20const($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = 0;
  $3 = 0;
  label$1 : while (1) {
   label$2 : {
    if (($3 | 0) != (4 | 0)) {
     break label$2
    }
    return ($2 | 0) % (HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
   }
   $2 = Math_imul($2, 33) + (HEAP8[($1 + $3 | 0) >> 0] | 0) | 0;
   $3 = $3 + 1 | 0;
   continue label$1;
  };
 }
 
 function Reality__destroy_28_29() {
  CPPAlertUser_28char_20const__29(66645 | 0);
 }
 
 function StartPVM_28unsigned_20char__2c_20unsigned_20int_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $3 = 0, $5 = 0, $6 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = 0;
  Reality__instantiate_28_29();
  $3 = HEAP32[((PInteger__PInteger_28int_29(operator_20new_28unsigned_20long_29(8 | 0) | 0 | 0, 42 | 0) | 0) + 4 | 0) >> 2] | 0;
  $4 = Map_char_20const__2c_20int___Map_28int_29(operator_20new_28unsigned_20long_29(12 | 0) | 0 | 0, 255 | 0) | 0;
  Map_char_20const__2c_20int___insert_28char_20const__2c_20int_29($4 | 0, 66669 | 0, 10 | 0);
  Map_char_20const__2c_20int___insert_28char_20const__2c_20int_29($4 | 0, 66666 | 0, 20 | 0);
  Map_char_20const__2c_20int___insert_28char_20const__2c_20int_29($4 | 0, 66663 | 0, 30 | 0);
  $5 = HEAP32[($4 + 8 | 0) >> 2] | 0;
  HEAP32[($2 + 4 | 0) >> 2] = 66666;
  $6 = Map_char_20const__2c_20int___has_key_28char_20const__20const__29_20const($4 | 0, $2 + 4 | 0 | 0) | 0;
  HEAP32[($2 + 4 | 0) >> 2] = 66669;
  Map_char_20const__2c_20int___remove_28char_20const__20const__29($4 | 0, $2 + 4 | 0 | 0);
  HEAP32[($2 + 4 | 0) >> 2] = 66669;
  CPPrintNumber_28int_29((((($5 | 0) == (3 | 0) ? 1e3 : 0) + (($3 | 0) == (42 | 0) ? 1e4 : 0) | 0) + ($6 ? 100 : 0) | 0) + (Map_char_20const__2c_20int___has_key_28char_20const__20const__29_20const($4 | 0, $2 + 4 | 0 | 0) | 0 ? 0 : 10) | 0 | 0);
  operator_20delete_28void__29(Map_char_20const__2c_20int____Map_28_29($4 | 0) | 0 | 0);
  HEAP32[($2 + 8 | 0) >> 2] = $1;
  HEAP32[($2 + 4 | 0) >> 2] = $0;
  BytecodeParser__parse_28_29($2 + 4 | 0 | 0) | 0;
  Reality__destroy_28_29();
  $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  __stack_pointer = $2 + 16 | 0;
  return $4 | 0;
 }
 
 function Map_char_20const__2c_20int___Map_28int_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  $2 = $1 << 3 | 0;
  $1 = operator_20new_5b_5d_28unsigned_20long_29(($1 >>> 0 > 536870911 >>> 0 ? -1 : $2) | 0) | 0;
  HEAP32[$0 >> 2] = $1;
  __memset($1 | 0, 0 | 0, $2 | 0) | 0;
  return $0 | 0;
 }
 
 function Map_char_20const__2c_20int___insert_28char_20const__2c_20int_29($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  HEAP32[($3 + 12 | 0) >> 2] = $1;
  $1 = Map_char_20const__2c_20int___hash_28char_20const__20const__29_20const($0 | 0, $3 + 12 | 0 | 0) | 0;
  $1 = (HEAP32[$0 >> 2] | 0) + ($1 << 3 | 0) | 0;
  $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     $5 = HEAP32[$1 >> 2] | 0;
     if (!$5) {
      break label$2
     }
     label$4 : {
      if (($5 | 0) != ($4 | 0)) {
       break label$4
      }
      HEAP32[($1 + 4 | 0) >> 2] = $2;
      break label$1;
     }
     $1 = $1 + 8 | 0;
     continue label$3;
    };
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2;
   HEAP32[$1 >> 2] = $4;
   HEAP32[($0 + 8 | 0) >> 2] = (HEAP32[($0 + 8 | 0) >> 2] | 0) + 1 | 0;
  }
  __stack_pointer = $3 + 16 | 0;
 }
 
 function Map_char_20const__2c_20int___has_key_28char_20const__20const__29_20const($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = Map_char_20const__2c_20int___hash_28char_20const__20const__29_20const($0 | 0, $1 | 0) | 0;
  $0 = (HEAP32[$0 >> 2] | 0) + ($2 << 3 | 0) | 0;
  $2 = HEAP32[$1 >> 2] | 0;
  label$1 : {
   label$2 : while (1) {
    $1 = HEAP32[$0 >> 2] | 0;
    if (!$1) {
     break label$1
    }
    $0 = $0 + 8 | 0;
    if (($1 | 0) != ($2 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  return ($1 | 0) != (0 | 0) | 0;
 }
 
 function Map_char_20const__2c_20int___remove_28char_20const__20const__29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = Map_char_20const__2c_20int___hash_28char_20const__20const__29_20const($0 | 0, $1 | 0) | 0;
  $2 = (HEAP32[$0 >> 2] | 0) + ($2 << 3 | 0) | 0;
  $3 = HEAP32[$1 >> 2] | 0;
  label$1 : {
   label$2 : while (1) {
    $1 = HEAP32[$2 >> 2] | 0;
    if (!$1) {
     break label$1
    }
    label$3 : {
     if (($1 | 0) != ($3 | 0)) {
      break label$3
     }
     HEAP32[$2 >> 2] = 0;
     HEAP32[($0 + 8 | 0) >> 2] = (HEAP32[($0 + 8 | 0) >> 2] | 0) + -1 | 0;
     return;
    }
    $2 = $2 + 8 | 0;
    continue label$2;
   };
  }
  CPPAlertUser_28char_20const__29(66672 | 0);
 }
 
 function Map_char_20const__2c_20int____Map_28_29($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   $1 = HEAP32[$0 >> 2] | 0;
   if (!$1) {
    break label$1
   }
   operator_20delete_5b_5d_28void__29($1 | 0);
  }
  return $0 | 0;
 }
 
 function Map_char_20const__2c_20int___hash_28char_20const__20const__29_20const($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = 0;
  $3 = 0;
  label$1 : while (1) {
   label$2 : {
    if (($3 | 0) != (4 | 0)) {
     break label$2
    }
    return ($2 | 0) % (HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
   }
   $2 = Math_imul($2, 33) + (HEAP8[($1 + $3 | 0) >> 0] | 0) | 0;
   $3 = $3 + 1 | 0;
   continue label$1;
  };
 }
 
 function BytecodeParser__parse_28_29($0) {
  $0 = $0 | 0;
  var $3 = 0, $1 = 0, $2 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $2 = 3;
  $3 = 0;
  $4 = 0;
  label$1 : {
   label$2 : while (1) {
    if (($4 | 0) >= (HEAP32[($0 + 4 | 0) >> 2] | 0 | 0)) {
     break label$1
    }
    HEAP32[$1 >> 2] = HEAPU8[((HEAP32[$0 >> 2] | 0) + $4 | 0) >> 0] | 0;
    Debug_Printf($3 | 0, $2 | 0, 0 | 0, 0 | 0, 65908 | 0, $1 | 0);
    label$3 : {
     $3 = $3 + 2 | 0;
     if (($3 | 0) != (50 | 0)) {
      break label$3
     }
     $3 = 0;
     $2 = $2 + 1 | 0;
     if (($2 | 0) == (42 | 0)) {
      break label$1
     }
    }
    $4 = $4 + 1 | 0;
    continue label$2;
   };
  }
  __stack_pointer = $1 + 16 | 0;
  return 0 | 0;
 }
 
 function __lockfile($0) {
  $0 = $0 | 0;
  return 1 | 0;
 }
 
 function __unlockfile($0) {
  $0 = $0 | 0;
 }
 
 function __towrite($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[($0 + 72 | 0) >> 2] | 0;
  HEAP32[($0 + 72 | 0) >> 2] = $1 + -1 | 0 | $1 | 0;
  label$1 : {
   $1 = HEAP32[$0 >> 2] | 0;
   if (!($1 & 8 | 0)) {
    break label$1
   }
   HEAP32[$0 >> 2] = $1 | 32 | 0;
   return -1 | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  $1 = HEAP32[($0 + 44 | 0) >> 2] | 0;
  HEAP32[($0 + 28 | 0) >> 2] = $1;
  HEAP32[($0 + 20 | 0) >> 2] = $1;
  HEAP32[($0 + 16 | 0) >> 2] = $1 + (HEAP32[($0 + 48 | 0) >> 2] | 0) | 0;
  return 0 | 0;
 }
 
 function isdigit($0) {
  $0 = $0 | 0;
  return ($0 + -48 | 0) >>> 0 < 10 >>> 0 | 0;
 }
 
 function memchr($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  $3 = ($2 | 0) != (0 | 0);
  label$1 : {
   label$2 : {
    label$3 : {
     if (!($0 & 3 | 0)) {
      break label$3
     }
     if (!$2) {
      break label$3
     }
     $4 = $1 & 255 | 0;
     label$4 : while (1) {
      if ((HEAPU8[$0 >> 0] | 0 | 0) == ($4 | 0)) {
       break label$2
      }
      $2 = $2 + -1 | 0;
      $3 = ($2 | 0) != (0 | 0);
      $0 = $0 + 1 | 0;
      if (!($0 & 3 | 0)) {
       break label$3
      }
      if ($2) {
       continue label$4
      }
      break label$4;
     };
    }
    if (!$3) {
     break label$1
    }
    label$5 : {
     if ((HEAPU8[$0 >> 0] | 0 | 0) == ($1 & 255 | 0 | 0)) {
      break label$5
     }
     if ($2 >>> 0 < 4 >>> 0) {
      break label$5
     }
     $4 = Math_imul($1 & 255 | 0, 16843009);
     label$6 : while (1) {
      $3 = (HEAP32[$0 >> 2] | 0) ^ $4 | 0;
      if ((($3 ^ -1 | 0) & ($3 + -16843009 | 0) | 0) & -2139062144 | 0) {
       break label$2
      }
      $0 = $0 + 4 | 0;
      $2 = $2 + -4 | 0;
      if ($2 >>> 0 > 3 >>> 0) {
       continue label$6
      }
      break label$6;
     };
    }
    if (!$2) {
     break label$1
    }
   }
   $3 = $1 & 255 | 0;
   label$7 : while (1) {
    label$8 : {
     if ((HEAPU8[$0 >> 0] | 0 | 0) != ($3 | 0)) {
      break label$8
     }
     return $0 | 0;
    }
    $0 = $0 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$7
    }
    break label$7;
   };
  }
  return 0 | 0;
 }
 
 function strnlen($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = memchr($0 | 0, 0 | 0, $1 | 0) | 0;
  return ($2 ? $2 - $0 | 0 : $1) | 0;
 }
 
 function getpid() {
  return dummy_getpid() | 0 | 0;
 }
 
 function __get_tp() {
  return 71484 | 0;
 }
 
 function dummy_getpid() {
  return 42 | 0;
 }
 
 function init_pthread_self() {
  HEAP32[(0 + 71580 | 0) >> 2] = 71460;
  HEAP32[(0 + 71508 | 0) >> 2] = getpid() | 0;
 }
 
 function wcrtomb($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = 1;
  label$1 : {
   label$2 : {
    if (!$0) {
     break label$2
    }
    if ($1 >>> 0 <= 127 >>> 0) {
     break label$1
    }
    label$3 : {
     label$4 : {
      if (HEAP32[(HEAP32[((__get_tp() | 0) + 96 | 0) >> 2] | 0) >> 2] | 0) {
       break label$4
      }
      if (($1 & -128 | 0 | 0) == (57216 | 0)) {
       break label$1
      }
      HEAP32[(__errno_location() | 0) >> 2] = 25;
      break label$3;
     }
     label$5 : {
      if ($1 >>> 0 > 2047 >>> 0) {
       break label$5
      }
      HEAP8[($0 + 1 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
      HEAP8[$0 >> 0] = $1 >>> 6 | 0 | 192 | 0;
      return 2 | 0;
     }
     label$6 : {
      label$7 : {
       if ($1 >>> 0 < 55296 >>> 0) {
        break label$7
       }
       if (($1 & -8192 | 0 | 0) != (57344 | 0)) {
        break label$6
       }
      }
      HEAP8[($0 + 2 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
      HEAP8[$0 >> 0] = $1 >>> 12 | 0 | 224 | 0;
      HEAP8[($0 + 1 | 0) >> 0] = ($1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      return 3 | 0;
     }
     label$8 : {
      if (($1 + -65536 | 0) >>> 0 > 1048575 >>> 0) {
       break label$8
      }
      HEAP8[($0 + 3 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
      HEAP8[$0 >> 0] = $1 >>> 18 | 0 | 240 | 0;
      HEAP8[($0 + 2 | 0) >> 0] = ($1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($0 + 1 | 0) >> 0] = ($1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      return 4 | 0;
     }
     HEAP32[(__errno_location() | 0) >> 2] = 25;
    }
    $3 = -1;
   }
   return $3 | 0;
  }
  HEAP8[$0 >> 0] = $1;
  return 1 | 0;
 }
 
 function wctomb($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   return 0 | 0;
  }
  return wcrtomb($0 | 0, $1 | 0, 0 | 0) | 0 | 0;
 }
 
 function frexp($0, $1) {
  $0 = +$0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, $2 = 0, $10 = 0, $2$hi = 0;
  label$1 : {
   wasm2js_scratch_store_f64(+$0);
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $2 = wasm2js_scratch_load_i32(0 | 0) | 0;
   $2$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $2;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 52;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = 0;
    $10 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $10 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
   $3 = $10 & 2047 | 0;
   if (($3 | 0) == (2047 | 0)) {
    break label$1
   }
   label$2 : {
    if ($3) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ($0 != 0.0) {
       break label$4
      }
      $3 = 0;
      break label$3;
     }
     $0 = +frexp(+($0 * 18446744073709551615.0), $1 | 0);
     $3 = (HEAP32[$1 >> 2] | 0) + -64 | 0;
    }
    HEAP32[$1 >> 2] = $3;
    return +$0;
   }
   HEAP32[$1 >> 2] = $3 + -1022 | 0;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2;
   i64toi32_i32$2 = -2146435073;
   i64toi32_i32$3 = -1;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
   i64toi32_i32$0 = 1071644672;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
   wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
   wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
   $0 = +wasm2js_scratch_load_f64();
  }
  return +$0;
 }
 
 function __memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0, $5 = 0;
  label$1 : {
   if ($2 >>> 0 < 512 >>> 0) {
    break label$1
   }
   emscripten_memcpy_js($0 | 0, $1 | 0, $2 | 0);
   return $0 | 0;
  }
  $3 = $0 + $2 | 0;
  label$2 : {
   label$3 : {
    if (($1 ^ $0 | 0) & 3 | 0) {
     break label$3
    }
    label$4 : {
     label$5 : {
      if ($0 & 3 | 0) {
       break label$5
      }
      $2 = $0;
      break label$4;
     }
     label$6 : {
      if ($2) {
       break label$6
      }
      $2 = $0;
      break label$4;
     }
     $2 = $0;
     label$7 : while (1) {
      HEAP8[$2 >> 0] = HEAPU8[$1 >> 0] | 0;
      $1 = $1 + 1 | 0;
      $2 = $2 + 1 | 0;
      if (!($2 & 3 | 0)) {
       break label$4
      }
      if ($2 >>> 0 < $3 >>> 0) {
       continue label$7
      }
      break label$7;
     };
    }
    label$8 : {
     $4 = $3 & -4 | 0;
     if ($4 >>> 0 < 64 >>> 0) {
      break label$8
     }
     $5 = $4 + -64 | 0;
     if ($2 >>> 0 > $5 >>> 0) {
      break label$8
     }
     label$9 : while (1) {
      HEAP32[$2 >> 2] = HEAP32[$1 >> 2] | 0;
      HEAP32[($2 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
      HEAP32[($2 + 8 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
      HEAP32[($2 + 12 | 0) >> 2] = HEAP32[($1 + 12 | 0) >> 2] | 0;
      HEAP32[($2 + 16 | 0) >> 2] = HEAP32[($1 + 16 | 0) >> 2] | 0;
      HEAP32[($2 + 20 | 0) >> 2] = HEAP32[($1 + 20 | 0) >> 2] | 0;
      HEAP32[($2 + 24 | 0) >> 2] = HEAP32[($1 + 24 | 0) >> 2] | 0;
      HEAP32[($2 + 28 | 0) >> 2] = HEAP32[($1 + 28 | 0) >> 2] | 0;
      HEAP32[($2 + 32 | 0) >> 2] = HEAP32[($1 + 32 | 0) >> 2] | 0;
      HEAP32[($2 + 36 | 0) >> 2] = HEAP32[($1 + 36 | 0) >> 2] | 0;
      HEAP32[($2 + 40 | 0) >> 2] = HEAP32[($1 + 40 | 0) >> 2] | 0;
      HEAP32[($2 + 44 | 0) >> 2] = HEAP32[($1 + 44 | 0) >> 2] | 0;
      HEAP32[($2 + 48 | 0) >> 2] = HEAP32[($1 + 48 | 0) >> 2] | 0;
      HEAP32[($2 + 52 | 0) >> 2] = HEAP32[($1 + 52 | 0) >> 2] | 0;
      HEAP32[($2 + 56 | 0) >> 2] = HEAP32[($1 + 56 | 0) >> 2] | 0;
      HEAP32[($2 + 60 | 0) >> 2] = HEAP32[($1 + 60 | 0) >> 2] | 0;
      $1 = $1 + 64 | 0;
      $2 = $2 + 64 | 0;
      if ($2 >>> 0 <= $5 >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    if ($2 >>> 0 >= $4 >>> 0) {
     break label$2
    }
    label$10 : while (1) {
     HEAP32[$2 >> 2] = HEAP32[$1 >> 2] | 0;
     $1 = $1 + 4 | 0;
     $2 = $2 + 4 | 0;
     if ($2 >>> 0 < $4 >>> 0) {
      continue label$10
     }
     break label$2;
    };
   }
   label$11 : {
    if ($3 >>> 0 >= 4 >>> 0) {
     break label$11
    }
    $2 = $0;
    break label$2;
   }
   label$12 : {
    $4 = $3 + -4 | 0;
    if ($4 >>> 0 >= $0 >>> 0) {
     break label$12
    }
    $2 = $0;
    break label$2;
   }
   $2 = $0;
   label$13 : while (1) {
    HEAP8[$2 >> 0] = HEAPU8[$1 >> 0] | 0;
    HEAP8[($2 + 1 | 0) >> 0] = HEAPU8[($1 + 1 | 0) >> 0] | 0;
    HEAP8[($2 + 2 | 0) >> 0] = HEAPU8[($1 + 2 | 0) >> 0] | 0;
    HEAP8[($2 + 3 | 0) >> 0] = HEAPU8[($1 + 3 | 0) >> 0] | 0;
    $1 = $1 + 4 | 0;
    $2 = $2 + 4 | 0;
    if ($2 >>> 0 <= $4 >>> 0) {
     continue label$13
    }
    break label$13;
   };
  }
  label$14 : {
   if ($2 >>> 0 >= $3 >>> 0) {
    break label$14
   }
   label$15 : while (1) {
    HEAP8[$2 >> 0] = HEAPU8[$1 >> 0] | 0;
    $1 = $1 + 1 | 0;
    $2 = $2 + 1 | 0;
    if (($2 | 0) != ($3 | 0)) {
     continue label$15
    }
    break label$15;
   };
  }
  return $0 | 0;
 }
 
 function __fwritex($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($2 + 16 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = 0;
    if (__towrite($2 | 0) | 0) {
     break label$1
    }
    $3 = HEAP32[($2 + 16 | 0) >> 2] | 0;
   }
   label$3 : {
    $4 = HEAP32[($2 + 20 | 0) >> 2] | 0;
    if (($3 - $4 | 0) >>> 0 >= $1 >>> 0) {
     break label$3
    }
    return FUNCTION_TABLE[HEAP32[($2 + 36 | 0) >> 2] | 0 | 0]($2, $0, $1) | 0 | 0;
   }
   label$4 : {
    label$5 : {
     if ((HEAP32[($2 + 80 | 0) >> 2] | 0 | 0) < (0 | 0)) {
      break label$5
     }
     if (!$1) {
      break label$5
     }
     $3 = $1;
     label$6 : {
      label$7 : while (1) {
       $5 = $0 + $3 | 0;
       if ((HEAPU8[($5 + -1 | 0) >> 0] | 0 | 0) == (10 | 0)) {
        break label$6
       }
       $3 = $3 + -1 | 0;
       if (!$3) {
        break label$5
       }
       continue label$7;
      };
     }
     $4 = FUNCTION_TABLE[HEAP32[($2 + 36 | 0) >> 2] | 0 | 0]($2, $0, $3) | 0;
     if ($4 >>> 0 < $3 >>> 0) {
      break label$1
     }
     $1 = $1 - $3 | 0;
     $4 = HEAP32[($2 + 20 | 0) >> 2] | 0;
     break label$4;
    }
    $5 = $0;
    $3 = 0;
   }
   __memcpy($4 | 0, $5 | 0, $1 | 0) | 0;
   HEAP32[($2 + 20 | 0) >> 2] = (HEAP32[($2 + 20 | 0) >> 2] | 0) + $1 | 0;
   $4 = $3 + $1 | 0;
  }
  return $4 | 0;
 }
 
 function __vfprintf_internal($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0, i64toi32_i32$0 = 0, $8 = 0, $6 = 0, $7 = 0;
  $5 = __stack_pointer - 208 | 0;
  __stack_pointer = $5;
  HEAP32[($5 + 204 | 0) >> 2] = $2;
  __memset($5 + 160 | 0 | 0, 0 | 0, 40 | 0) | 0;
  HEAP32[($5 + 200 | 0) >> 2] = HEAP32[($5 + 204 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if ((printf_core(0 | 0, $1 | 0, $5 + 200 | 0 | 0, $5 + 80 | 0 | 0, $5 + 160 | 0 | 0, $3 | 0, $4 | 0) | 0 | 0) >= (0 | 0)) {
     break label$2
    }
    $4 = -1;
    break label$1;
   }
   label$3 : {
    label$4 : {
     if ((HEAP32[($0 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
      break label$4
     }
     $6 = 1;
     break label$3;
    }
    $6 = !(__lockfile($0 | 0) | 0);
   }
   $7 = HEAP32[$0 >> 2] | 0;
   HEAP32[$0 >> 2] = $7 & -33 | 0;
   label$5 : {
    label$6 : {
     label$7 : {
      label$8 : {
       if (HEAP32[($0 + 48 | 0) >> 2] | 0) {
        break label$8
       }
       HEAP32[($0 + 48 | 0) >> 2] = 80;
       HEAP32[($0 + 28 | 0) >> 2] = 0;
       i64toi32_i32$0 = 0;
       HEAP32[($0 + 16 | 0) >> 2] = 0;
       HEAP32[($0 + 20 | 0) >> 2] = i64toi32_i32$0;
       $8 = HEAP32[($0 + 44 | 0) >> 2] | 0;
       HEAP32[($0 + 44 | 0) >> 2] = $5;
       break label$7;
      }
      $8 = 0;
      if (HEAP32[($0 + 16 | 0) >> 2] | 0) {
       break label$6
      }
     }
     $2 = -1;
     if (__towrite($0 | 0) | 0) {
      break label$5
     }
    }
    $2 = printf_core($0 | 0, $1 | 0, $5 + 200 | 0 | 0, $5 + 80 | 0 | 0, $5 + 160 | 0 | 0, $3 | 0, $4 | 0) | 0;
   }
   $4 = $7 & 32 | 0;
   label$9 : {
    if (!$8) {
     break label$9
    }
    FUNCTION_TABLE[HEAP32[($0 + 36 | 0) >> 2] | 0 | 0]($0, 0, 0) | 0;
    HEAP32[($0 + 48 | 0) >> 2] = 0;
    HEAP32[($0 + 44 | 0) >> 2] = $8;
    HEAP32[($0 + 28 | 0) >> 2] = 0;
    $3 = HEAP32[($0 + 20 | 0) >> 2] | 0;
    i64toi32_i32$0 = 0;
    HEAP32[($0 + 16 | 0) >> 2] = 0;
    HEAP32[($0 + 20 | 0) >> 2] = i64toi32_i32$0;
    $2 = $3 ? $2 : -1;
   }
   $3 = HEAP32[$0 >> 2] | 0;
   HEAP32[$0 >> 2] = $3 | $4 | 0;
   $4 = $3 & 32 | 0 ? -1 : $2;
   if ($6) {
    break label$1
   }
   __unlockfile($0 | 0);
  }
  __stack_pointer = $5 + 208 | 0;
  return $4 | 0;
 }
 
 function printf_core($0, $1, $2, $3, $4, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var $14 = 0, $7 = 0, $17 = 0, $22 = 0, i64toi32_i32$1 = 0, $19 = 0, $16 = 0, $20 = 0, $15 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $18 = 0, $21 = 0, $13 = 0, $24 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, $11 = 0, $26 = 0, $12 = 0, $27 = 0, $28 = 0, $28$hi = 0, $23 = 0, $25 = 0, $8 = 0, $9 = 0, $36 = 0, $37 = 0, $38 = 0, $10 = 0, $277 = 0;
  $7 = __stack_pointer - 80 | 0;
  __stack_pointer = $7;
  HEAP32[($7 + 76 | 0) >> 2] = $1;
  $8 = $4 + -192 | 0;
  $9 = $3 + -384 | 0;
  $10 = $7 + 55 | 0;
  $11 = $7 + 56 | 0;
  $12 = 0;
  $13 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : while (1) {
      $14 = 0;
      label$5 : while (1) {
       $15 = $1;
       if (($14 | 0) > ($13 ^ 2147483647 | 0 | 0)) {
        break label$3
       }
       $13 = $14 + $13 | 0;
       $14 = $1;
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            $16 = HEAPU8[$14 >> 0] | 0;
            if (!$16) {
             break label$10
            }
            label$11 : while (1) {
             label$12 : {
              label$13 : {
               label$14 : {
                $16 = $16 & 255 | 0;
                if ($16) {
                 break label$14
                }
                $1 = $14;
                break label$13;
               }
               if (($16 | 0) != (37 | 0)) {
                break label$12
               }
               $16 = $14;
               label$15 : while (1) {
                label$16 : {
                 if ((HEAPU8[($16 + 1 | 0) >> 0] | 0 | 0) == (37 | 0)) {
                  break label$16
                 }
                 $1 = $16;
                 break label$13;
                }
                $14 = $14 + 1 | 0;
                $17 = HEAPU8[($16 + 2 | 0) >> 0] | 0;
                $1 = $16 + 2 | 0;
                $16 = $1;
                if (($17 | 0) == (37 | 0)) {
                 continue label$15
                }
                break label$15;
               };
              }
              $14 = $14 - $15 | 0;
              $16 = $13 ^ 2147483647 | 0;
              if (($14 | 0) > ($16 | 0)) {
               break label$3
              }
              label$17 : {
               if (!$0) {
                break label$17
               }
               out($0 | 0, $15 | 0, $14 | 0);
              }
              if ($14) {
               continue label$5
              }
              HEAP32[($7 + 76 | 0) >> 2] = $1;
              $14 = $1 + 1 | 0;
              $18 = -1;
              label$18 : {
               if (!(isdigit(HEAP8[($1 + 1 | 0) >> 0] | 0 | 0) | 0)) {
                break label$18
               }
               if ((HEAPU8[($1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                break label$18
               }
               $14 = $1 + 3 | 0;
               $18 = (HEAP8[($1 + 1 | 0) >> 0] | 0) + -48 | 0;
               $12 = 1;
              }
              HEAP32[($7 + 76 | 0) >> 2] = $14;
              $19 = 0;
              label$19 : {
               label$20 : {
                $20 = HEAP8[$14 >> 0] | 0;
                $1 = $20 + -32 | 0;
                if ($1 >>> 0 <= 31 >>> 0) {
                 break label$20
                }
                $17 = $14;
                break label$19;
               }
               $19 = 0;
               $17 = $14;
               $1 = 1 << $1 | 0;
               if (!($1 & 75913 | 0)) {
                break label$19
               }
               label$21 : while (1) {
                $17 = $14 + 1 | 0;
                HEAP32[($7 + 76 | 0) >> 2] = $17;
                $19 = $1 | $19 | 0;
                $20 = HEAP8[($14 + 1 | 0) >> 0] | 0;
                $1 = $20 + -32 | 0;
                if ($1 >>> 0 >= 32 >>> 0) {
                 break label$19
                }
                $14 = $17;
                $1 = 1 << $1 | 0;
                if ($1 & 75913 | 0) {
                 continue label$21
                }
                break label$21;
               };
              }
              label$22 : {
               label$23 : {
                if (($20 | 0) != (42 | 0)) {
                 break label$23
                }
                $20 = $17 + 1 | 0;
                label$24 : {
                 label$25 : {
                  if (!(isdigit(HEAP8[($17 + 1 | 0) >> 0] | 0 | 0) | 0)) {
                   break label$25
                  }
                  if ((HEAPU8[($17 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                   break label$25
                  }
                  $14 = HEAP8[$20 >> 0] | 0;
                  label$26 : {
                   label$27 : {
                    if ($0) {
                     break label$27
                    }
                    HEAP32[($8 + ($14 << 2 | 0) | 0) >> 2] = 10;
                    $21 = 0;
                    break label$26;
                   }
                   $21 = HEAP32[($9 + ($14 << 3 | 0) | 0) >> 2] | 0;
                  }
                  $20 = $17 + 3 | 0;
                  $12 = 1;
                  break label$24;
                 }
                 if ($12) {
                  break label$9
                 }
                 label$28 : {
                  if ($0) {
                   break label$28
                  }
                  HEAP32[($7 + 76 | 0) >> 2] = $20;
                  $12 = 0;
                  $21 = 0;
                  break label$22;
                 }
                 $14 = HEAP32[$2 >> 2] | 0;
                 HEAP32[$2 >> 2] = $14 + 4 | 0;
                 $21 = HEAP32[$14 >> 2] | 0;
                 $12 = 0;
                }
                HEAP32[($7 + 76 | 0) >> 2] = $20;
                if (($21 | 0) > (-1 | 0)) {
                 break label$22
                }
                $21 = 0 - $21 | 0;
                $19 = $19 | 8192 | 0;
                break label$22;
               }
               $21 = getint($7 + 76 | 0 | 0) | 0;
               if (($21 | 0) < (0 | 0)) {
                break label$3
               }
               $20 = HEAP32[($7 + 76 | 0) >> 2] | 0;
              }
              $14 = 0;
              $22 = -1;
              label$29 : {
               label$30 : {
                if ((HEAPU8[$20 >> 0] | 0 | 0) == (46 | 0)) {
                 break label$30
                }
                $1 = $20;
                $23 = 0;
                break label$29;
               }
               label$31 : {
                if ((HEAPU8[($20 + 1 | 0) >> 0] | 0 | 0) != (42 | 0)) {
                 break label$31
                }
                $1 = $20 + 2 | 0;
                label$32 : {
                 label$33 : {
                  if (!(isdigit(HEAP8[($20 + 2 | 0) >> 0] | 0 | 0) | 0)) {
                   break label$33
                  }
                  if ((HEAPU8[($20 + 3 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                   break label$33
                  }
                  $17 = HEAP8[$1 >> 0] | 0;
                  label$34 : {
                   label$35 : {
                    if ($0) {
                     break label$35
                    }
                    HEAP32[($8 + ($17 << 2 | 0) | 0) >> 2] = 10;
                    $22 = 0;
                    break label$34;
                   }
                   $22 = HEAP32[($9 + ($17 << 3 | 0) | 0) >> 2] | 0;
                  }
                  $1 = $20 + 4 | 0;
                  break label$32;
                 }
                 if ($12) {
                  break label$9
                 }
                 label$36 : {
                  if ($0) {
                   break label$36
                  }
                  $22 = 0;
                  break label$32;
                 }
                 $17 = HEAP32[$2 >> 2] | 0;
                 HEAP32[$2 >> 2] = $17 + 4 | 0;
                 $22 = HEAP32[$17 >> 2] | 0;
                }
                HEAP32[($7 + 76 | 0) >> 2] = $1;
                $23 = ($22 | 0) > (-1 | 0);
                break label$29;
               }
               HEAP32[($7 + 76 | 0) >> 2] = $20 + 1 | 0;
               $23 = 1;
               $22 = getint($7 + 76 | 0 | 0) | 0;
               $1 = HEAP32[($7 + 76 | 0) >> 2] | 0;
              }
              label$37 : while (1) {
               $17 = $14;
               $24 = 28;
               $20 = $1;
               $14 = HEAP8[$1 >> 0] | 0;
               if (($14 + -123 | 0) >>> 0 < -58 >>> 0) {
                break label$2
               }
               $1 = $1 + 1 | 0;
               $14 = HEAPU8[(($14 + Math_imul($17, 58) | 0) + 66895 | 0) >> 0] | 0;
               if (($14 + -1 | 0) >>> 0 < 8 >>> 0) {
                continue label$37
               }
               break label$37;
              };
              HEAP32[($7 + 76 | 0) >> 2] = $1;
              label$38 : {
               label$39 : {
                if (($14 | 0) == (27 | 0)) {
                 break label$39
                }
                if (!$14) {
                 break label$2
                }
                label$40 : {
                 if (($18 | 0) < (0 | 0)) {
                  break label$40
                 }
                 label$41 : {
                  if ($0) {
                   break label$41
                  }
                  HEAP32[($4 + ($18 << 2 | 0) | 0) >> 2] = $14;
                  continue label$4;
                 }
                 i64toi32_i32$2 = $3 + ($18 << 3 | 0) | 0;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $277 = i64toi32_i32$0;
                 i64toi32_i32$0 = $7;
                 HEAP32[($7 + 64 | 0) >> 2] = $277;
                 HEAP32[($7 + 68 | 0) >> 2] = i64toi32_i32$1;
                 break label$38;
                }
                if (!$0) {
                 break label$6
                }
                pop_arg($7 + 64 | 0 | 0, $14 | 0, $2 | 0, $6 | 0);
                break label$38;
               }
               if (($18 | 0) > (-1 | 0)) {
                break label$2
               }
               $14 = 0;
               if (!$0) {
                continue label$5
               }
              }
              $24 = -1;
              if ((HEAPU8[$0 >> 0] | 0) & 32 | 0) {
               break label$1
              }
              $25 = $19 & -65537 | 0;
              $19 = $19 & 8192 | 0 ? $25 : $19;
              $18 = 0;
              $26 = 65536;
              $27 = $11;
              label$42 : {
               label$43 : {
                label$44 : {
                 label$45 : {
                  label$46 : {
                   label$47 : {
                    label$48 : {
                     label$49 : {
                      label$50 : {
                       label$51 : {
                        label$52 : {
                         label$53 : {
                          label$54 : {
                           label$55 : {
                            label$56 : {
                             label$57 : {
                              $14 = HEAP8[$20 >> 0] | 0;
                              $14 = $17 ? (($14 & 15 | 0 | 0) == (3 | 0) ? $14 & -33 | 0 : $14) : $14;
                              switch ($14 + -88 | 0 | 0) {
                              case 11:
                               break label$42;
                              case 9:
                              case 13:
                              case 14:
                              case 15:
                               break label$43;
                              case 27:
                               break label$48;
                              case 12:
                              case 17:
                               break label$51;
                              case 23:
                               break label$52;
                              case 0:
                              case 32:
                               break label$53;
                              case 24:
                               break label$54;
                              case 22:
                               break label$55;
                              case 29:
                               break label$56;
                              case 1:
                              case 2:
                              case 3:
                              case 4:
                              case 5:
                              case 6:
                              case 7:
                              case 8:
                              case 10:
                              case 16:
                              case 18:
                              case 19:
                              case 20:
                              case 21:
                              case 25:
                              case 26:
                              case 28:
                              case 30:
                              case 31:
                               break label$7;
                              default:
                               break label$57;
                              };
                             }
                             $27 = $11;
                             label$58 : {
                              switch ($14 + -65 | 0 | 0) {
                              case 0:
                              case 4:
                              case 5:
                              case 6:
                               break label$43;
                              case 2:
                               break label$46;
                              case 1:
                              case 3:
                               break label$7;
                              default:
                               break label$58;
                              };
                             }
                             if (($14 | 0) == (83 | 0)) {
                              break label$47
                             }
                             break label$8;
                            }
                            $18 = 0;
                            $26 = 65536;
                            i64toi32_i32$2 = $7;
                            i64toi32_i32$1 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                            i64toi32_i32$0 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                            $28 = i64toi32_i32$1;
                            $28$hi = i64toi32_i32$0;
                            break label$50;
                           }
                           $14 = 0;
                           label$59 : {
                            switch ($17 & 255 | 0 | 0) {
                            case 0:
                             HEAP32[(HEAP32[($7 + 64 | 0) >> 2] | 0) >> 2] = $13;
                             continue label$5;
                            case 1:
                             HEAP32[(HEAP32[($7 + 64 | 0) >> 2] | 0) >> 2] = $13;
                             continue label$5;
                            case 2:
                             i64toi32_i32$1 = $13;
                             i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                             i64toi32_i32$1 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                             HEAP32[i64toi32_i32$1 >> 2] = $13;
                             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                             continue label$5;
                            case 3:
                             HEAP16[(HEAP32[($7 + 64 | 0) >> 2] | 0) >> 1] = $13;
                             continue label$5;
                            case 4:
                             HEAP8[(HEAP32[($7 + 64 | 0) >> 2] | 0) >> 0] = $13;
                             continue label$5;
                            case 6:
                             HEAP32[(HEAP32[($7 + 64 | 0) >> 2] | 0) >> 2] = $13;
                             continue label$5;
                            case 7:
                             break label$59;
                            default:
                             continue label$5;
                            };
                           }
                           i64toi32_i32$1 = $13;
                           i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                           i64toi32_i32$1 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                           HEAP32[i64toi32_i32$1 >> 2] = $13;
                           HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                           continue label$5;
                          }
                          $22 = $22 >>> 0 > 8 >>> 0 ? $22 : 8;
                          $19 = $19 | 8 | 0;
                          $14 = 120;
                         }
                         i64toi32_i32$2 = $7;
                         i64toi32_i32$0 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                         i64toi32_i32$1 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                         $15 = fmt_x(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, $11 | 0, $14 & 32 | 0 | 0) | 0;
                         $18 = 0;
                         $26 = 65536;
                         i64toi32_i32$2 = $7;
                         i64toi32_i32$1 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                         i64toi32_i32$0 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                         if (!(i64toi32_i32$1 | i64toi32_i32$0 | 0)) {
                          break label$49
                         }
                         if (!($19 & 8 | 0)) {
                          break label$49
                         }
                         $26 = ($14 >>> 4 | 0) + 65536 | 0;
                         $18 = 2;
                         break label$49;
                        }
                        $18 = 0;
                        $26 = 65536;
                        i64toi32_i32$2 = $7;
                        i64toi32_i32$0 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                        i64toi32_i32$1 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                        $15 = fmt_o(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, $11 | 0) | 0;
                        if (!($19 & 8 | 0)) {
                         break label$49
                        }
                        $14 = $11 - $15 | 0;
                        $22 = ($22 | 0) > ($14 | 0) ? $22 : $14 + 1 | 0;
                        break label$49;
                       }
                       label$66 : {
                        i64toi32_i32$2 = $7;
                        i64toi32_i32$1 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                        i64toi32_i32$0 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                        $28 = i64toi32_i32$1;
                        $28$hi = i64toi32_i32$0;
                        i64toi32_i32$2 = i64toi32_i32$1;
                        i64toi32_i32$1 = -1;
                        i64toi32_i32$3 = -1;
                        if ((i64toi32_i32$0 | 0) > (i64toi32_i32$1 | 0)) {
                         $36 = 1
                        } else {
                         if ((i64toi32_i32$0 | 0) >= (i64toi32_i32$1 | 0)) {
                          if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
                           $37 = 0
                          } else {
                           $37 = 1
                          }
                          $38 = $37;
                         } else {
                          $38 = 0
                         }
                         $36 = $38;
                        }
                        if ($36) {
                         break label$66
                        }
                        i64toi32_i32$2 = $28$hi;
                        i64toi32_i32$2 = 0;
                        i64toi32_i32$3 = 0;
                        i64toi32_i32$0 = $28$hi;
                        i64toi32_i32$1 = $28;
                        i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
                        i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
                        $28 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
                        $28$hi = i64toi32_i32$5;
                        i64toi32_i32$3 = $7;
                        HEAP32[($7 + 64 | 0) >> 2] = $28;
                        HEAP32[($7 + 68 | 0) >> 2] = i64toi32_i32$5;
                        $18 = 1;
                        $26 = 65536;
                        break label$50;
                       }
                       label$67 : {
                        if (!($19 & 2048 | 0)) {
                         break label$67
                        }
                        $18 = 1;
                        $26 = 65537;
                        break label$50;
                       }
                       $18 = $19 & 1 | 0;
                       $26 = $18 ? 65538 : 65536;
                      }
                      i64toi32_i32$5 = $28$hi;
                      $15 = fmt_u($28 | 0, i64toi32_i32$5 | 0, $11 | 0) | 0;
                     }
                     if ($23 & ($22 | 0) < (0 | 0) | 0) {
                      break label$3
                     }
                     $19 = $23 ? $19 & -65537 | 0 : $19;
                     label$68 : {
                      i64toi32_i32$2 = $7;
                      i64toi32_i32$5 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                      i64toi32_i32$3 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                      $28 = i64toi32_i32$5;
                      $28$hi = i64toi32_i32$3;
                      i64toi32_i32$2 = i64toi32_i32$5;
                      i64toi32_i32$5 = 0;
                      i64toi32_i32$1 = 0;
                      if ((i64toi32_i32$2 | 0) != (i64toi32_i32$1 | 0) | (i64toi32_i32$3 | 0) != (i64toi32_i32$5 | 0) | 0) {
                       break label$68
                      }
                      if ($22) {
                       break label$68
                      }
                      $15 = $11;
                      $27 = $15;
                      $22 = 0;
                      break label$7;
                     }
                     i64toi32_i32$2 = $28$hi;
                     $14 = ($11 - $15 | 0) + !($28 | i64toi32_i32$2 | 0) | 0;
                     $22 = ($22 | 0) > ($14 | 0) ? $22 : $14;
                     break label$8;
                    }
                    $14 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                    $15 = $14 ? $14 : 66712;
                    $14 = strnlen($15 | 0, ($22 >>> 0 < 2147483647 >>> 0 ? $22 : 2147483647) | 0) | 0;
                    $27 = $15 + $14 | 0;
                    label$69 : {
                     if (($22 | 0) <= (-1 | 0)) {
                      break label$69
                     }
                     $19 = $25;
                     $22 = $14;
                     break label$7;
                    }
                    $19 = $25;
                    $22 = $14;
                    if (HEAPU8[$27 >> 0] | 0) {
                     break label$3
                    }
                    break label$7;
                   }
                   label$70 : {
                    if (!$22) {
                     break label$70
                    }
                    $16 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                    break label$45;
                   }
                   $14 = 0;
                   pad($0 | 0, 32 | 0, $21 | 0, 0 | 0, $19 | 0);
                   break label$44;
                  }
                  HEAP32[($7 + 12 | 0) >> 2] = 0;
                  i64toi32_i32$1 = $7;
                  i64toi32_i32$2 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                  i64toi32_i32$3 = HEAP32[($7 + 68 | 0) >> 2] | 0;
                  HEAP32[($7 + 8 | 0) >> 2] = i64toi32_i32$2;
                  HEAP32[($7 + 64 | 0) >> 2] = $7 + 8 | 0;
                  $16 = $7 + 8 | 0;
                  $22 = -1;
                 }
                 $14 = 0;
                 label$71 : {
                  label$72 : while (1) {
                   $17 = HEAP32[$16 >> 2] | 0;
                   if (!$17) {
                    break label$71
                   }
                   label$73 : {
                    $17 = wctomb($7 + 4 | 0 | 0, $17 | 0) | 0;
                    $15 = ($17 | 0) < (0 | 0);
                    if ($15) {
                     break label$73
                    }
                    if ($17 >>> 0 > ($22 - $14 | 0) >>> 0) {
                     break label$73
                    }
                    $16 = $16 + 4 | 0;
                    $14 = $17 + $14 | 0;
                    if ($14 >>> 0 < $22 >>> 0) {
                     continue label$72
                    }
                    break label$71;
                   }
                   break label$72;
                  };
                  if ($15) {
                   break label$1
                  }
                 }
                 $24 = 61;
                 if (($14 | 0) < (0 | 0)) {
                  break label$2
                 }
                 pad($0 | 0, 32 | 0, $21 | 0, $14 | 0, $19 | 0);
                 label$74 : {
                  if ($14) {
                   break label$74
                  }
                  $14 = 0;
                  break label$44;
                 }
                 $17 = 0;
                 $16 = HEAP32[($7 + 64 | 0) >> 2] | 0;
                 label$75 : while (1) {
                  $15 = HEAP32[$16 >> 2] | 0;
                  if (!$15) {
                   break label$44
                  }
                  $15 = wctomb($7 + 4 | 0 | 0, $15 | 0) | 0;
                  $17 = $15 + $17 | 0;
                  if ($17 >>> 0 > $14 >>> 0) {
                   break label$44
                  }
                  out($0 | 0, $7 + 4 | 0 | 0, $15 | 0);
                  $16 = $16 + 4 | 0;
                  if ($17 >>> 0 < $14 >>> 0) {
                   continue label$75
                  }
                  break label$75;
                 };
                }
                pad($0 | 0, 32 | 0, $21 | 0, $14 | 0, $19 ^ 8192 | 0 | 0);
                $14 = ($21 | 0) > ($14 | 0) ? $21 : $14;
                continue label$5;
               }
               if ($23 & ($22 | 0) < (0 | 0) | 0) {
                break label$3
               }
               $24 = 61;
               $14 = FUNCTION_TABLE[$5 | 0]($0, +HEAPF64[($7 + 64 | 0) >> 3], $21, $22, $19, $14) | 0;
               if (($14 | 0) >= (0 | 0)) {
                continue label$5
               }
               break label$2;
              }
              i64toi32_i32$1 = $7;
              i64toi32_i32$3 = HEAP32[($7 + 64 | 0) >> 2] | 0;
              i64toi32_i32$2 = HEAP32[($7 + 68 | 0) >> 2] | 0;
              HEAP8[($7 + 55 | 0) >> 0] = i64toi32_i32$3;
              $22 = 1;
              $15 = $10;
              $27 = $11;
              $19 = $25;
              break label$7;
             }
             $16 = HEAPU8[($14 + 1 | 0) >> 0] | 0;
             $14 = $14 + 1 | 0;
             continue label$11;
            };
           }
           $24 = $13;
           if ($0) {
            break label$1
           }
           if (!$12) {
            break label$6
           }
           $14 = 1;
           label$76 : {
            label$77 : while (1) {
             $16 = HEAP32[($4 + ($14 << 2 | 0) | 0) >> 2] | 0;
             if (!$16) {
              break label$76
             }
             pop_arg($3 + ($14 << 3 | 0) | 0 | 0, $16 | 0, $2 | 0, $6 | 0);
             $24 = 1;
             $14 = $14 + 1 | 0;
             if (($14 | 0) != (10 | 0)) {
              continue label$77
             }
             break label$1;
            };
           }
           $24 = 1;
           if ($14 >>> 0 >= 10 >>> 0) {
            break label$1
           }
           label$78 : while (1) {
            if (HEAP32[($4 + ($14 << 2 | 0) | 0) >> 2] | 0) {
             break label$9
            }
            $24 = 1;
            $14 = $14 + 1 | 0;
            if (($14 | 0) == (10 | 0)) {
             break label$1
            }
            continue label$78;
           };
          }
          $24 = 28;
          break label$2;
         }
         $27 = $11;
        }
        $20 = $27 - $15 | 0;
        $22 = ($22 | 0) > ($20 | 0) ? $22 : $20;
        if (($22 | 0) > ($18 ^ 2147483647 | 0 | 0)) {
         break label$3
        }
        $24 = 61;
        $17 = $18 + $22 | 0;
        $14 = ($21 | 0) > ($17 | 0) ? $21 : $17;
        if (($14 | 0) > ($16 | 0)) {
         break label$2
        }
        pad($0 | 0, 32 | 0, $14 | 0, $17 | 0, $19 | 0);
        out($0 | 0, $26 | 0, $18 | 0);
        pad($0 | 0, 48 | 0, $14 | 0, $17 | 0, $19 ^ 65536 | 0 | 0);
        pad($0 | 0, 48 | 0, $22 | 0, $20 | 0, 0 | 0);
        out($0 | 0, $15 | 0, $20 | 0);
        pad($0 | 0, 32 | 0, $14 | 0, $17 | 0, $19 ^ 8192 | 0 | 0);
        continue label$5;
       }
       break label$5;
      };
      break label$4;
     };
     $24 = 0;
     break label$1;
    }
    $24 = 61;
   }
   HEAP32[(__errno_location() | 0) >> 2] = $24;
   $24 = -1;
  }
  __stack_pointer = $7 + 80 | 0;
  return $24 | 0;
 }
 
 function out($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ((HEAPU8[$0 >> 0] | 0) & 32 | 0) {
    break label$1
   }
   __fwritex($1 | 0, $2 | 0, $0 | 0) | 0;
  }
 }
 
 function getint($0) {
  $0 = $0 | 0;
  var $1 = 0, $3 = 0, $2 = 0;
  $1 = 0;
  label$1 : {
   if (isdigit(HEAP8[(HEAP32[$0 >> 2] | 0) >> 0] | 0 | 0) | 0) {
    break label$1
   }
   return 0 | 0;
  }
  label$2 : while (1) {
   $2 = HEAP32[$0 >> 2] | 0;
   $3 = -1;
   label$3 : {
    if ($1 >>> 0 > 214748364 >>> 0) {
     break label$3
    }
    $3 = (HEAP8[$2 >> 0] | 0) + -48 | 0;
    $1 = Math_imul($1, 10);
    $3 = ($3 | 0) > ($1 ^ 2147483647 | 0 | 0) ? -1 : $3 + $1 | 0;
   }
   HEAP32[$0 >> 2] = $2 + 1 | 0;
   $1 = $3;
   if (isdigit(HEAP8[($2 + 1 | 0) >> 0] | 0 | 0) | 0) {
    continue label$2
   }
   break label$2;
  };
  return $1 | 0;
 }
 
 function pop_arg($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $21 = 0, $29 = 0, $37 = 0, $45 = 0, $55 = 0, $63 = 0, $71 = 0, $79 = 0, $87 = 0, $97 = 0, $105 = 0, $115 = 0, $125 = 0, $133 = 0, $141 = 0;
  label$1 : {
   switch ($1 + -9 | 0 | 0) {
   case 0:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    return;
   case 1:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $21 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $21;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 2:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $29 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $29;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 4:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $37 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $37;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 5:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $45 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $45;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 3:
    $1 = ((HEAP32[$2 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2 >> 2] = $1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $55 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $55;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 6:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$1 = HEAP16[$1 >> 1] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $63 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $63;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 7:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAPU16[$1 >> 1] | 0;
    i64toi32_i32$1 = 0;
    $71 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $71;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 8:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$1 = HEAP8[$1 >> 0] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $79 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $79;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 9:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAPU8[$1 >> 0] | 0;
    i64toi32_i32$1 = 0;
    $87 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $87;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 10:
    $1 = ((HEAP32[$2 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2 >> 2] = $1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $97 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $97;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 11:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $105 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $105;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 12:
    $1 = ((HEAP32[$2 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2 >> 2] = $1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $115 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $115;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 13:
    $1 = ((HEAP32[$2 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2 >> 2] = $1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $125 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $125;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 14:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $133 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    HEAP32[i64toi32_i32$1 >> 2] = $133;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 15:
    $1 = HEAP32[$2 >> 2] | 0;
    HEAP32[$2 >> 2] = $1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $141 = i64toi32_i32$0;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $141;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 16:
    $1 = ((HEAP32[$2 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2 >> 2] = $1 + 8 | 0;
    HEAPF64[$0 >> 3] = +HEAPF64[$1 >> 3];
    return;
   case 17:
    FUNCTION_TABLE[$3 | 0]($0, $2);
    break;
   default:
    break label$1;
   };
  }
 }
 
 function fmt_x($0, $0$hi, $1, $2) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10 = 0, $3 = 0;
  label$1 : {
   i64toi32_i32$0 = $0$hi;
   if (!($0 | i64toi32_i32$0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $1 = $1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1 >> 0] = HEAPU8[(($0 & 15 | 0) + 67424 | 0) >> 0] | 0 | $2 | 0;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 15;
    $3 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 4;
    i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $10 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     $10 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0 = $10;
    $0$hi = i64toi32_i32$0;
    if ($3) {
     continue label$2
    }
    break label$2;
   };
  }
  return $1 | 0;
 }
 
 function fmt_o($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $9 = 0, $2 = 0;
  label$1 : {
   i64toi32_i32$0 = $0$hi;
   if (!($0 | i64toi32_i32$0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $1 = $1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1 >> 0] = $0 & 7 | 0 | 48 | 0;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 7;
    $2 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 3;
    i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $9 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     $9 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0 = $9;
    $0$hi = i64toi32_i32$0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  return $1 | 0;
 }
 
 function fmt_u($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $2 = 0, $2$hi = 0, $4 = 0, $16 = 0, $16$hi = 0, $5 = 0;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = 1;
    i64toi32_i32$3 = 0;
    if (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
     break label$2
    }
    i64toi32_i32$2 = i64toi32_i32$0;
    $2 = $0;
    $2$hi = i64toi32_i32$2;
    break label$1;
   }
   label$3 : while (1) {
    $1 = $1 + -1 | 0;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($0 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $2 = i64toi32_i32$0;
    $2$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($2 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $16 = i64toi32_i32$0;
    $16$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = $16$hi;
    i64toi32_i32$1 = $16;
    i64toi32_i32$5 = ($0 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    HEAP8[$1 >> 0] = $0 - i64toi32_i32$1 | 0 | 48 | 0;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$2 = $0;
    i64toi32_i32$3 = 9;
    i64toi32_i32$1 = -1;
    $3 = i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $2$hi;
    $0 = $2;
    $0$hi = i64toi32_i32$2;
    if ($3) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   i64toi32_i32$2 = $2$hi;
   $3 = $2;
   if (!$3) {
    break label$4
   }
   label$5 : while (1) {
    $1 = $1 + -1 | 0;
    $4 = ($3 >>> 0) / (10 >>> 0) | 0;
    HEAP8[$1 >> 0] = $3 - Math_imul($4, 10) | 0 | 48 | 0;
    $5 = $3 >>> 0 > 9 >>> 0;
    $3 = $4;
    if ($5) {
     continue label$5
    }
    break label$5;
   };
  }
  return $1 | 0;
 }
 
 function pad($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0;
  $5 = __stack_pointer - 256 | 0;
  __stack_pointer = $5;
  label$1 : {
   if (($2 | 0) <= ($3 | 0)) {
    break label$1
   }
   if ($4 & 73728 | 0) {
    break label$1
   }
   $3 = $2 - $3 | 0;
   $2 = $3 >>> 0 < 256 >>> 0;
   __memset($5 | 0, $1 & 255 | 0 | 0, ($2 ? $3 : 256) | 0) | 0;
   label$2 : {
    if ($2) {
     break label$2
    }
    label$3 : while (1) {
     out($0 | 0, $5 | 0, 256 | 0);
     $3 = $3 + -256 | 0;
     if ($3 >>> 0 > 255 >>> 0) {
      continue label$3
     }
     break label$3;
    };
   }
   out($0 | 0, $5 | 0, $3 | 0);
  }
  __stack_pointer = $5 + 256 | 0;
 }
 
 function vfprintf($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return __vfprintf_internal($0 | 0, $1 | 0, $2 | 0, 1 | 0, 2 | 0) | 0 | 0;
 }
 
 function fmt_fp($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = +$1;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $11 = 0, $12 = 0, $13 = 0, $19 = 0, $6 = 0, $23 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $16 = 0, i64toi32_i32$4 = 0, $24 = 0, $25 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, $21 = 0, $18 = 0, $9 = 0, $26 = 0.0, $8 = 0, $14 = 0, $8$hi = 0, $15 = 0, $17 = 0, $22 = 0, $10 = 0, $7 = 0, $45 = 0, $46 = 0, $47 = 0, $20$hi = 0, $48 = 0, $20 = 0, $167 = 0, $169$hi = 0, $171$hi = 0, $173 = 0, $173$hi = 0, $175$hi = 0, $179 = 0, $179$hi = 0, $389 = 0.0, $853 = 0;
  $6 = __stack_pointer - 560 | 0;
  __stack_pointer = $6;
  $7 = 0;
  HEAP32[($6 + 44 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = __DOUBLE_BITS(+$1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $8 = i64toi32_i32$0;
    $8$hi = i64toi32_i32$1;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$0 = -1;
    i64toi32_i32$3 = -1;
    if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
     $45 = 1
    } else {
     if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
      if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
       $46 = 0
      } else {
       $46 = 1
      }
      $47 = $46;
     } else {
      $47 = 0
     }
     $45 = $47;
    }
    if ($45) {
     break label$2
    }
    $9 = 1;
    $10 = 65546;
    $1 = -$1;
    i64toi32_i32$2 = __DOUBLE_BITS(+$1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $8 = i64toi32_i32$2;
    $8$hi = i64toi32_i32$1;
    break label$1;
   }
   label$3 : {
    if (!($4 & 2048 | 0)) {
     break label$3
    }
    $9 = 1;
    $10 = 65549;
    break label$1;
   }
   $9 = $4 & 1 | 0;
   $10 = $9 ? 65552 : 65547;
   $7 = !$9;
  }
  label$4 : {
   label$5 : {
    i64toi32_i32$1 = $8$hi;
    i64toi32_i32$3 = $8;
    i64toi32_i32$2 = 2146435072;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
    i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
    i64toi32_i32$3 = 2146435072;
    i64toi32_i32$0 = 0;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break label$5
    }
    $11 = $9 + 3 | 0;
    pad($0 | 0, 32 | 0, $2 | 0, $11 | 0, $4 & -65537 | 0 | 0);
    out($0 | 0, $10 | 0, $9 | 0);
    $12 = $5 & 32 | 0;
    out($0 | 0, ($1 != $1 ? ($12 ? 65695 : 65913) : $12 ? 65789 : 65945) | 0, 3 | 0);
    pad($0 | 0, 32 | 0, $2 | 0, $11 | 0, $4 ^ 8192 | 0 | 0);
    $13 = ($11 | 0) > ($2 | 0) ? $11 : $2;
    break label$4;
   }
   $14 = $6 + 16 | 0;
   label$6 : {
    label$7 : {
     label$8 : {
      label$9 : {
       $1 = +frexp(+$1, $6 + 44 | 0 | 0);
       $1 = $1 + $1;
       if ($1 == 0.0) {
        break label$9
       }
       $11 = HEAP32[($6 + 44 | 0) >> 2] | 0;
       HEAP32[($6 + 44 | 0) >> 2] = $11 + -1 | 0;
       $15 = $5 | 32 | 0;
       if (($15 | 0) != (97 | 0)) {
        break label$8
       }
       break label$6;
      }
      $15 = $5 | 32 | 0;
      if (($15 | 0) == (97 | 0)) {
       break label$6
      }
      $16 = ($3 | 0) < (0 | 0) ? 6 : $3;
      $17 = HEAP32[($6 + 44 | 0) >> 2] | 0;
      break label$7;
     }
     $17 = $11 + -29 | 0;
     HEAP32[($6 + 44 | 0) >> 2] = $17;
     $16 = ($3 | 0) < (0 | 0) ? 6 : $3;
     $1 = $1 * 268435456.0;
    }
    $18 = ($6 + 48 | 0) + (($17 | 0) < (0 | 0) ? 0 : 288) | 0;
    $12 = $18;
    label$10 : while (1) {
     label$11 : {
      label$12 : {
       if (!($1 < 4294967296.0 & $1 >= 0.0 | 0)) {
        break label$12
       }
       $11 = ~~$1 >>> 0;
       break label$11;
      }
      $11 = 0;
     }
     HEAP32[$12 >> 2] = $11;
     $12 = $12 + 4 | 0;
     $1 = ($1 - +($11 >>> 0)) * 1.0e9;
     if ($1 != 0.0) {
      continue label$10
     }
     break label$10;
    };
    label$13 : {
     label$14 : {
      if (($17 | 0) >= (1 | 0)) {
       break label$14
      }
      $3 = $17;
      $11 = $12;
      $19 = $18;
      break label$13;
     }
     $19 = $18;
     $3 = $17;
     label$15 : while (1) {
      $3 = ($3 | 0) < (29 | 0) ? $3 : 29;
      label$16 : {
       $11 = $12 + -4 | 0;
       if ($11 >>> 0 < $19 >>> 0) {
        break label$16
       }
       i64toi32_i32$1 = 0;
       $20 = $3;
       $20$hi = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       $8 = 0;
       $8$hi = i64toi32_i32$1;
       label$17 : while (1) {
        $167 = $11;
        i64toi32_i32$0 = $11;
        i64toi32_i32$1 = HEAP32[$11 >> 2] | 0;
        i64toi32_i32$2 = 0;
        $169$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $20$hi;
        i64toi32_i32$2 = $169$hi;
        i64toi32_i32$0 = i64toi32_i32$1;
        i64toi32_i32$1 = $20$hi;
        i64toi32_i32$3 = $20;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
         $48 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
         $48 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
        }
        $171$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $8$hi;
        i64toi32_i32$2 = $8;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = -1;
        i64toi32_i32$0 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
        $173 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
        $173$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $171$hi;
        i64toi32_i32$1 = $48;
        i64toi32_i32$2 = $173$hi;
        i64toi32_i32$3 = $173;
        i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
        i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
        if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
         i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
        }
        $8 = i64toi32_i32$4;
        $8$hi = i64toi32_i32$5;
        $175$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_udiv(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $8 = i64toi32_i32$1;
        $8$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_mul($8 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $179 = i64toi32_i32$1;
        $179$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $175$hi;
        i64toi32_i32$0 = i64toi32_i32$4;
        i64toi32_i32$1 = $179$hi;
        i64toi32_i32$3 = $179;
        i64toi32_i32$2 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
        i64toi32_i32$4 = (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        HEAP32[$167 >> 2] = i64toi32_i32$2;
        $11 = $11 + -4 | 0;
        if ($11 >>> 0 >= $19 >>> 0) {
         continue label$17
        }
        break label$17;
       };
       i64toi32_i32$4 = $8$hi;
       $11 = $8;
       if (!$11) {
        break label$16
       }
       $19 = $19 + -4 | 0;
       HEAP32[$19 >> 2] = $11;
      }
      label$18 : {
       label$19 : while (1) {
        $11 = $12;
        if ($11 >>> 0 <= $19 >>> 0) {
         break label$18
        }
        $12 = $11 + -4 | 0;
        if (!(HEAP32[$12 >> 2] | 0)) {
         continue label$19
        }
        break label$19;
       };
      }
      $3 = (HEAP32[($6 + 44 | 0) >> 2] | 0) - $3 | 0;
      HEAP32[($6 + 44 | 0) >> 2] = $3;
      $12 = $11;
      if (($3 | 0) > (0 | 0)) {
       continue label$15
      }
      break label$15;
     };
    }
    label$20 : {
     if (($3 | 0) > (-1 | 0)) {
      break label$20
     }
     $21 = ((($16 + 25 | 0) >>> 0) / (9 >>> 0) | 0) + 1 | 0;
     $22 = ($15 | 0) == (102 | 0);
     label$21 : while (1) {
      $12 = 0 - $3 | 0;
      $23 = ($12 | 0) < (9 | 0) ? $12 : 9;
      label$22 : {
       label$23 : {
        if ($19 >>> 0 < $11 >>> 0) {
         break label$23
        }
        $12 = HEAP32[$19 >> 2] | 0;
        break label$22;
       }
       $24 = 1e9 >>> $23 | 0;
       $25 = (-1 << $23 | 0) ^ -1 | 0;
       $3 = 0;
       $12 = $19;
       label$24 : while (1) {
        $13 = HEAP32[$12 >> 2] | 0;
        HEAP32[$12 >> 2] = ($13 >>> $23 | 0) + $3 | 0;
        $3 = Math_imul($13 & $25 | 0, $24);
        $12 = $12 + 4 | 0;
        if ($12 >>> 0 < $11 >>> 0) {
         continue label$24
        }
        break label$24;
       };
       $12 = HEAP32[$19 >> 2] | 0;
       if (!$3) {
        break label$22
       }
       HEAP32[$11 >> 2] = $3;
       $11 = $11 + 4 | 0;
      }
      $3 = (HEAP32[($6 + 44 | 0) >> 2] | 0) + $23 | 0;
      HEAP32[($6 + 44 | 0) >> 2] = $3;
      $19 = $19 + (!$12 << 2 | 0) | 0;
      $12 = $22 ? $18 : $19;
      $11 = (($11 - $12 | 0) >> 2 | 0 | 0) > ($21 | 0) ? $12 + ($21 << 2 | 0) | 0 : $11;
      if (($3 | 0) < (0 | 0)) {
       continue label$21
      }
      break label$21;
     };
    }
    $3 = 0;
    label$25 : {
     if ($19 >>> 0 >= $11 >>> 0) {
      break label$25
     }
     $3 = Math_imul(($18 - $19 | 0) >> 2 | 0, 9);
     $12 = 10;
     $13 = HEAP32[$19 >> 2] | 0;
     if ($13 >>> 0 < 10 >>> 0) {
      break label$25
     }
     label$26 : while (1) {
      $3 = $3 + 1 | 0;
      $12 = Math_imul($12, 10);
      if ($13 >>> 0 >= $12 >>> 0) {
       continue label$26
      }
      break label$26;
     };
    }
    label$27 : {
     $12 = ($16 - (($15 | 0) == (102 | 0) ? 0 : $3) | 0) - (($16 | 0) != (0 | 0) & ($15 | 0) == (103 | 0) | 0) | 0;
     if (($12 | 0) >= (Math_imul(($11 - $18 | 0) >> 2 | 0, 9) + -9 | 0 | 0)) {
      break label$27
     }
     $13 = $12 + 9216 | 0;
     $24 = ($13 | 0) / (9 | 0) | 0;
     $21 = (($6 + 48 | 0) + (($17 | 0) < (0 | 0) ? 4 : 292) | 0) + ($24 << 2 | 0) | 0;
     $23 = $21 + -4096 | 0;
     $12 = 10;
     label$28 : {
      $13 = $13 - Math_imul($24, 9) | 0;
      if (($13 | 0) > (7 | 0)) {
       break label$28
      }
      label$29 : while (1) {
       $12 = Math_imul($12, 10);
       $13 = $13 + 1 | 0;
       if (($13 | 0) != (8 | 0)) {
        continue label$29
       }
       break label$29;
      };
     }
     $25 = $21 + -4092 | 0;
     label$30 : {
      label$31 : {
       $13 = HEAP32[$23 >> 2] | 0;
       $22 = ($13 >>> 0) / ($12 >>> 0) | 0;
       $24 = $13 - Math_imul($22, $12) | 0;
       if ($24) {
        break label$31
       }
       if (($25 | 0) == ($11 | 0)) {
        break label$30
       }
      }
      label$32 : {
       label$33 : {
        if ($22 & 1 | 0) {
         break label$33
        }
        $1 = 9007199254740992.0;
        if (($12 | 0) != (1e9 | 0)) {
         break label$32
        }
        if ($23 >>> 0 <= $19 >>> 0) {
         break label$32
        }
        if (!((HEAPU8[($21 + -4100 | 0) >> 0] | 0) & 1 | 0)) {
         break label$32
        }
       }
       $1 = 9007199254740994.0;
      }
      $389 = ($25 | 0) == ($11 | 0) ? 1.0 : 1.5;
      $25 = $12 >>> 1 | 0;
      $26 = $24 >>> 0 < $25 >>> 0 ? .5 : ($24 | 0) == ($25 | 0) ? $389 : 1.5;
      label$34 : {
       if ($7) {
        break label$34
       }
       if ((HEAPU8[$10 >> 0] | 0 | 0) != (45 | 0)) {
        break label$34
       }
       $26 = -$26;
       $1 = -$1;
      }
      $13 = $13 - $24 | 0;
      HEAP32[$23 >> 2] = $13;
      if ($1 + $26 == $1) {
       break label$30
      }
      $12 = $13 + $12 | 0;
      HEAP32[$23 >> 2] = $12;
      label$35 : {
       if ($12 >>> 0 < 1e9 >>> 0) {
        break label$35
       }
       label$36 : while (1) {
        HEAP32[$23 >> 2] = 0;
        label$37 : {
         $23 = $23 + -4 | 0;
         if ($23 >>> 0 >= $19 >>> 0) {
          break label$37
         }
         $19 = $19 + -4 | 0;
         HEAP32[$19 >> 2] = 0;
        }
        $12 = (HEAP32[$23 >> 2] | 0) + 1 | 0;
        HEAP32[$23 >> 2] = $12;
        if ($12 >>> 0 > 999999999 >>> 0) {
         continue label$36
        }
        break label$36;
       };
      }
      $3 = Math_imul(($18 - $19 | 0) >> 2 | 0, 9);
      $12 = 10;
      $13 = HEAP32[$19 >> 2] | 0;
      if ($13 >>> 0 < 10 >>> 0) {
       break label$30
      }
      label$38 : while (1) {
       $3 = $3 + 1 | 0;
       $12 = Math_imul($12, 10);
       if ($13 >>> 0 >= $12 >>> 0) {
        continue label$38
       }
       break label$38;
      };
     }
     $12 = $23 + 4 | 0;
     $11 = $11 >>> 0 > $12 >>> 0 ? $12 : $11;
    }
    label$39 : {
     label$40 : while (1) {
      $12 = $11;
      $13 = $11 >>> 0 <= $19 >>> 0;
      if ($13) {
       break label$39
      }
      $11 = $11 + -4 | 0;
      if (!(HEAP32[$11 >> 2] | 0)) {
       continue label$40
      }
      break label$40;
     };
    }
    label$41 : {
     label$42 : {
      if (($15 | 0) == (103 | 0)) {
       break label$42
      }
      $23 = $4 & 8 | 0;
      break label$41;
     }
     $11 = $16 ? $16 : 1;
     $23 = ($11 | 0) > ($3 | 0) & ($3 | 0) > (-5 | 0) | 0;
     $16 = ($23 ? $3 ^ -1 | 0 : -1) + $11 | 0;
     $5 = ($23 ? -1 : -2) + $5 | 0;
     $23 = $4 & 8 | 0;
     if ($23) {
      break label$41
     }
     $11 = -9;
     label$43 : {
      if ($13) {
       break label$43
      }
      $23 = HEAP32[($12 + -4 | 0) >> 2] | 0;
      if (!$23) {
       break label$43
      }
      $13 = 10;
      $11 = 0;
      if (($23 >>> 0) % (10 >>> 0) | 0) {
       break label$43
      }
      label$44 : while (1) {
       $24 = $11;
       $11 = $11 + 1 | 0;
       $13 = Math_imul($13, 10);
       if (!(($23 >>> 0) % ($13 >>> 0) | 0)) {
        continue label$44
       }
       break label$44;
      };
      $11 = $24 ^ -1 | 0;
     }
     $13 = Math_imul(($12 - $18 | 0) >> 2 | 0, 9);
     label$45 : {
      if (($5 & -33 | 0 | 0) != (70 | 0)) {
       break label$45
      }
      $23 = 0;
      $11 = ($13 + $11 | 0) + -9 | 0;
      $11 = ($11 | 0) > (0 | 0) ? $11 : 0;
      $16 = ($16 | 0) < ($11 | 0) ? $16 : $11;
      break label$41;
     }
     $23 = 0;
     $11 = (($3 + $13 | 0) + $11 | 0) + -9 | 0;
     $11 = ($11 | 0) > (0 | 0) ? $11 : 0;
     $16 = ($16 | 0) < ($11 | 0) ? $16 : $11;
    }
    $13 = -1;
    $24 = $16 | $23 | 0;
    if (($16 | 0) > (($24 ? 2147483645 : 2147483646) | 0)) {
     break label$4
    }
    $25 = ($16 + (($24 | 0) != (0 | 0)) | 0) + 1 | 0;
    label$46 : {
     label$47 : {
      $22 = $5 & -33 | 0;
      if (($22 | 0) != (70 | 0)) {
       break label$47
      }
      if (($3 | 0) > ($25 ^ 2147483647 | 0 | 0)) {
       break label$4
      }
      $11 = ($3 | 0) > (0 | 0) ? $3 : 0;
      break label$46;
     }
     label$48 : {
      $11 = $3 >> 31 | 0;
      i64toi32_i32$4 = 0;
      $11 = fmt_u(($3 ^ $11 | 0) - $11 | 0 | 0, i64toi32_i32$4 | 0, $14 | 0) | 0;
      if (($14 - $11 | 0 | 0) > (1 | 0)) {
       break label$48
      }
      label$49 : while (1) {
       $11 = $11 + -1 | 0;
       HEAP8[$11 >> 0] = 48;
       if (($14 - $11 | 0 | 0) < (2 | 0)) {
        continue label$49
       }
       break label$49;
      };
     }
     $21 = $11 + -2 | 0;
     HEAP8[$21 >> 0] = $5;
     $13 = -1;
     HEAP8[($11 + -1 | 0) >> 0] = ($3 | 0) < (0 | 0) ? 45 : 43;
     $11 = $14 - $21 | 0;
     if (($11 | 0) > ($25 ^ 2147483647 | 0 | 0)) {
      break label$4
     }
    }
    $13 = -1;
    $11 = $11 + $25 | 0;
    if (($11 | 0) > ($9 ^ 2147483647 | 0 | 0)) {
     break label$4
    }
    $25 = $11 + $9 | 0;
    pad($0 | 0, 32 | 0, $2 | 0, $25 | 0, $4 | 0);
    out($0 | 0, $10 | 0, $9 | 0);
    pad($0 | 0, 48 | 0, $2 | 0, $25 | 0, $4 ^ 65536 | 0 | 0);
    label$50 : {
     label$51 : {
      label$52 : {
       label$53 : {
        if (($22 | 0) != (70 | 0)) {
         break label$53
        }
        $23 = $6 + 16 | 0 | 8 | 0;
        $3 = $6 + 16 | 0 | 9 | 0;
        $13 = $19 >>> 0 > $18 >>> 0 ? $18 : $19;
        $19 = $13;
        label$54 : while (1) {
         i64toi32_i32$5 = $19;
         i64toi32_i32$4 = HEAP32[$19 >> 2] | 0;
         i64toi32_i32$0 = 0;
         $11 = fmt_u(i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, $3 | 0) | 0;
         label$55 : {
          label$56 : {
           if (($19 | 0) == ($13 | 0)) {
            break label$56
           }
           if ($11 >>> 0 <= ($6 + 16 | 0) >>> 0) {
            break label$55
           }
           label$57 : while (1) {
            $11 = $11 + -1 | 0;
            HEAP8[$11 >> 0] = 48;
            if ($11 >>> 0 > ($6 + 16 | 0) >>> 0) {
             continue label$57
            }
            break label$55;
           };
          }
          if (($11 | 0) != ($3 | 0)) {
           break label$55
          }
          HEAP8[($6 + 24 | 0) >> 0] = 48;
          $11 = $23;
         }
         out($0 | 0, $11 | 0, $3 - $11 | 0 | 0);
         $19 = $19 + 4 | 0;
         if ($19 >>> 0 <= $18 >>> 0) {
          continue label$54
         }
         break label$54;
        };
        label$58 : {
         if (!$24) {
          break label$58
         }
         out($0 | 0, 66710 | 0, 1 | 0);
        }
        if ($19 >>> 0 >= $12 >>> 0) {
         break label$52
        }
        if (($16 | 0) < (1 | 0)) {
         break label$52
        }
        label$59 : while (1) {
         label$60 : {
          i64toi32_i32$5 = $19;
          i64toi32_i32$0 = HEAP32[$19 >> 2] | 0;
          i64toi32_i32$4 = 0;
          $11 = fmt_u(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, $3 | 0) | 0;
          if ($11 >>> 0 <= ($6 + 16 | 0) >>> 0) {
           break label$60
          }
          label$61 : while (1) {
           $11 = $11 + -1 | 0;
           HEAP8[$11 >> 0] = 48;
           if ($11 >>> 0 > ($6 + 16 | 0) >>> 0) {
            continue label$61
           }
           break label$61;
          };
         }
         out($0 | 0, $11 | 0, (($16 | 0) < (9 | 0) ? $16 : 9) | 0);
         $11 = $16 + -9 | 0;
         $19 = $19 + 4 | 0;
         if ($19 >>> 0 >= $12 >>> 0) {
          break label$51
         }
         $13 = ($16 | 0) > (9 | 0);
         $16 = $11;
         if ($13) {
          continue label$59
         }
         break label$51;
        };
       }
       label$62 : {
        if (($16 | 0) < (0 | 0)) {
         break label$62
        }
        $24 = $12 >>> 0 > $19 >>> 0 ? $12 : $19 + 4 | 0;
        $18 = $6 + 16 | 0 | 8 | 0;
        $3 = $6 + 16 | 0 | 9 | 0;
        $12 = $19;
        label$63 : while (1) {
         label$64 : {
          i64toi32_i32$5 = $12;
          i64toi32_i32$4 = HEAP32[$12 >> 2] | 0;
          i64toi32_i32$0 = 0;
          $11 = fmt_u(i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, $3 | 0) | 0;
          if (($11 | 0) != ($3 | 0)) {
           break label$64
          }
          HEAP8[($6 + 24 | 0) >> 0] = 48;
          $11 = $18;
         }
         label$65 : {
          label$66 : {
           if (($12 | 0) == ($19 | 0)) {
            break label$66
           }
           if ($11 >>> 0 <= ($6 + 16 | 0) >>> 0) {
            break label$65
           }
           label$67 : while (1) {
            $11 = $11 + -1 | 0;
            HEAP8[$11 >> 0] = 48;
            if ($11 >>> 0 > ($6 + 16 | 0) >>> 0) {
             continue label$67
            }
            break label$65;
           };
          }
          out($0 | 0, $11 | 0, 1 | 0);
          $11 = $11 + 1 | 0;
          if (!($16 | $23 | 0)) {
           break label$65
          }
          out($0 | 0, 66710 | 0, 1 | 0);
         }
         $13 = $3 - $11 | 0;
         out($0 | 0, $11 | 0, (($16 | 0) > ($13 | 0) ? $13 : $16) | 0);
         $16 = $16 - $13 | 0;
         $12 = $12 + 4 | 0;
         if ($12 >>> 0 >= $24 >>> 0) {
          break label$62
         }
         if (($16 | 0) > (-1 | 0)) {
          continue label$63
         }
         break label$63;
        };
       }
       pad($0 | 0, 48 | 0, $16 + 18 | 0 | 0, 18 | 0, 0 | 0);
       out($0 | 0, $21 | 0, $14 - $21 | 0 | 0);
       break label$50;
      }
      $11 = $16;
     }
     pad($0 | 0, 48 | 0, $11 + 9 | 0 | 0, 9 | 0, 0 | 0);
    }
    pad($0 | 0, 32 | 0, $2 | 0, $25 | 0, $4 ^ 8192 | 0 | 0);
    $13 = ($25 | 0) > ($2 | 0) ? $25 : $2;
    break label$4;
   }
   $25 = $10 + ((($5 << 26 | 0) >> 31 | 0) & 9 | 0) | 0;
   label$68 : {
    if ($3 >>> 0 > 11 >>> 0) {
     break label$68
    }
    $11 = 12 - $3 | 0;
    $26 = 16.0;
    label$69 : while (1) {
     $26 = $26 * 16.0;
     $11 = $11 + -1 | 0;
     if ($11) {
      continue label$69
     }
     break label$69;
    };
    label$70 : {
     if ((HEAPU8[$25 >> 0] | 0 | 0) != (45 | 0)) {
      break label$70
     }
     $1 = -($26 + (-$1 - $26));
     break label$68;
    }
    $1 = $1 + $26 - $26;
   }
   label$71 : {
    $11 = HEAP32[($6 + 44 | 0) >> 2] | 0;
    $853 = $11;
    $11 = $11 >> 31 | 0;
    i64toi32_i32$0 = 0;
    $11 = fmt_u(($853 ^ $11 | 0) - $11 | 0 | 0, i64toi32_i32$0 | 0, $14 | 0) | 0;
    if (($11 | 0) != ($14 | 0)) {
     break label$71
    }
    HEAP8[($6 + 15 | 0) >> 0] = 48;
    $11 = $6 + 15 | 0;
   }
   $23 = $9 | 2 | 0;
   $19 = $5 & 32 | 0;
   $12 = HEAP32[($6 + 44 | 0) >> 2] | 0;
   $24 = $11 + -2 | 0;
   HEAP8[$24 >> 0] = $5 + 15 | 0;
   HEAP8[($11 + -1 | 0) >> 0] = ($12 | 0) < (0 | 0) ? 45 : 43;
   $13 = $4 & 8 | 0;
   $12 = $6 + 16 | 0;
   label$72 : while (1) {
    $11 = $12;
    label$73 : {
     label$74 : {
      if (!(Math_abs($1) < 2147483648.0)) {
       break label$74
      }
      $12 = ~~$1;
      break label$73;
     }
     $12 = -2147483648;
    }
    HEAP8[$11 >> 0] = HEAPU8[($12 + 67424 | 0) >> 0] | 0 | $19 | 0;
    $1 = ($1 - +($12 | 0)) * 16.0;
    label$75 : {
     $12 = $11 + 1 | 0;
     if (($12 - ($6 + 16 | 0) | 0 | 0) != (1 | 0)) {
      break label$75
     }
     label$76 : {
      if ($13) {
       break label$76
      }
      if (($3 | 0) > (0 | 0)) {
       break label$76
      }
      if ($1 == 0.0) {
       break label$75
      }
     }
     HEAP8[($11 + 1 | 0) >> 0] = 46;
     $12 = $11 + 2 | 0;
    }
    if ($1 != 0.0) {
     continue label$72
    }
    break label$72;
   };
   $13 = -1;
   $19 = $14 - $24 | 0;
   $21 = $23 + $19 | 0;
   if ((2147483645 - $21 | 0 | 0) < ($3 | 0)) {
    break label$4
   }
   $11 = $12 - ($6 + 16 | 0) | 0;
   $3 = $3 ? (($11 + -2 | 0 | 0) < ($3 | 0) ? $3 + 2 | 0 : $11) : $11;
   $12 = $21 + $3 | 0;
   pad($0 | 0, 32 | 0, $2 | 0, $12 | 0, $4 | 0);
   out($0 | 0, $25 | 0, $23 | 0);
   pad($0 | 0, 48 | 0, $2 | 0, $12 | 0, $4 ^ 65536 | 0 | 0);
   out($0 | 0, $6 + 16 | 0 | 0, $11 | 0);
   pad($0 | 0, 48 | 0, $3 - $11 | 0 | 0, 0 | 0, 0 | 0);
   out($0 | 0, $24 | 0, $19 | 0);
   pad($0 | 0, 32 | 0, $2 | 0, $12 | 0, $4 ^ 8192 | 0 | 0);
   $13 = ($12 | 0) > ($2 | 0) ? $12 : $2;
  }
  __stack_pointer = $6 + 560 | 0;
  return $13 | 0;
 }
 
 function pop_arg_long_double($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, $12 = 0, $12$hi = 0, $15 = 0, $15$hi = 0;
  $2 = ((HEAP32[$1 >> 2] | 0) + 7 | 0) & -8 | 0;
  HEAP32[$1 >> 2] = $2 + 16 | 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $12 = i64toi32_i32$0;
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $15 = i64toi32_i32$1;
  $15$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$1 = $15$hi;
  HEAPF64[$0 >> 3] = +__trunctfdf2($12 | 0, i64toi32_i32$0 | 0, $15 | 0, i64toi32_i32$1 | 0);
 }
 
 function __DOUBLE_BITS($0) {
  $0 = +$0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  wasm2js_scratch_store_f64(+$0);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function vsnprintf($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0, $6 = 0;
  $4 = __stack_pointer - 160 | 0;
  __stack_pointer = $4;
  $5 = $1 ? $0 : $4 + 158 | 0;
  HEAP32[($4 + 148 | 0) >> 2] = $5;
  $0 = -1;
  $6 = $1 + -1 | 0;
  HEAP32[($4 + 152 | 0) >> 2] = $6 >>> 0 > $1 >>> 0 ? 0 : $6;
  $4 = __memset($4 | 0, 0 | 0, 144 | 0) | 0;
  HEAP32[($4 + 76 | 0) >> 2] = -1;
  HEAP32[($4 + 36 | 0) >> 2] = 3;
  HEAP32[($4 + 80 | 0) >> 2] = -1;
  HEAP32[($4 + 44 | 0) >> 2] = $4 + 159 | 0;
  HEAP32[($4 + 84 | 0) >> 2] = $4 + 148 | 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) > (-1 | 0)) {
     break label$2
    }
    HEAP32[(__errno_location() | 0) >> 2] = 61;
    break label$1;
   }
   HEAP8[$5 >> 0] = 0;
   $0 = vfprintf($4 | 0, $2 | 0, $3 | 0) | 0;
  }
  __stack_pointer = $4 + 160 | 0;
  return $0 | 0;
 }
 
 function sn_write($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $7 = 0, $6 = 0;
  $3 = HEAP32[($0 + 84 | 0) >> 2] | 0;
  $4 = HEAP32[$3 >> 2] | 0;
  label$1 : {
   $5 = HEAP32[($3 + 4 | 0) >> 2] | 0;
   $6 = HEAP32[($0 + 28 | 0) >> 2] | 0;
   $7 = (HEAP32[($0 + 20 | 0) >> 2] | 0) - $6 | 0;
   $7 = $5 >>> 0 < $7 >>> 0 ? $5 : $7;
   if (!$7) {
    break label$1
   }
   __memcpy($4 | 0, $6 | 0, $7 | 0) | 0;
   $4 = (HEAP32[$3 >> 2] | 0) + $7 | 0;
   HEAP32[$3 >> 2] = $4;
   $5 = (HEAP32[($3 + 4 | 0) >> 2] | 0) - $7 | 0;
   HEAP32[($3 + 4 | 0) >> 2] = $5;
  }
  label$2 : {
   $5 = $5 >>> 0 < $2 >>> 0 ? $5 : $2;
   if (!$5) {
    break label$2
   }
   __memcpy($4 | 0, $1 | 0, $5 | 0) | 0;
   $4 = (HEAP32[$3 >> 2] | 0) + $5 | 0;
   HEAP32[$3 >> 2] = $4;
   HEAP32[($3 + 4 | 0) >> 2] = (HEAP32[($3 + 4 | 0) >> 2] | 0) - $5 | 0;
  }
  HEAP8[$4 >> 0] = 0;
  $3 = HEAP32[($0 + 44 | 0) >> 2] | 0;
  HEAP32[($0 + 28 | 0) >> 2] = $3;
  HEAP32[($0 + 20 | 0) >> 2] = $3;
  return $2 | 0;
 }
 
 function __stdio_write($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0, $5 = 0, $8 = 0, $6 = 0, $7 = 0, $9 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  $4 = HEAP32[($0 + 28 | 0) >> 2] | 0;
  HEAP32[($3 + 16 | 0) >> 2] = $4;
  $5 = HEAP32[($0 + 20 | 0) >> 2] | 0;
  HEAP32[($3 + 28 | 0) >> 2] = $2;
  HEAP32[($3 + 24 | 0) >> 2] = $1;
  $1 = $5 - $4 | 0;
  HEAP32[($3 + 20 | 0) >> 2] = $1;
  $6 = $1 + $2 | 0;
  $4 = $3 + 16 | 0;
  $7 = 2;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (!(__wasi_syscall_ret(__wasi_fd_write(HEAP32[($0 + 60 | 0) >> 2] | 0 | 0, $3 + 16 | 0 | 0, 2 | 0, $3 + 12 | 0 | 0) | 0 | 0) | 0)) {
        break label$5
       }
       $5 = $4;
       break label$4;
      }
      label$6 : while (1) {
       $1 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (($6 | 0) == ($1 | 0)) {
        break label$3
       }
       label$7 : {
        if (($1 | 0) > (-1 | 0)) {
         break label$7
        }
        $5 = $4;
        break label$2;
       }
       $8 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $9 = $1 >>> 0 > $8 >>> 0;
       $5 = $4 + ($9 << 3 | 0) | 0;
       $8 = $1 - ($9 ? $8 : 0) | 0;
       HEAP32[$5 >> 2] = (HEAP32[$5 >> 2] | 0) + $8 | 0;
       $4 = $4 + ($9 ? 12 : 4) | 0;
       HEAP32[$4 >> 2] = (HEAP32[$4 >> 2] | 0) - $8 | 0;
       $6 = $6 - $1 | 0;
       $4 = $5;
       $7 = $7 - $9 | 0;
       if (!(__wasi_syscall_ret(__wasi_fd_write(HEAP32[($0 + 60 | 0) >> 2] | 0 | 0, $4 | 0, $7 | 0, $3 + 12 | 0 | 0) | 0 | 0) | 0)) {
        continue label$6
       }
       break label$6;
      };
     }
     if (($6 | 0) != (-1 | 0)) {
      break label$2
     }
    }
    $1 = HEAP32[($0 + 44 | 0) >> 2] | 0;
    HEAP32[($0 + 28 | 0) >> 2] = $1;
    HEAP32[($0 + 20 | 0) >> 2] = $1;
    HEAP32[($0 + 16 | 0) >> 2] = $1 + (HEAP32[($0 + 48 | 0) >> 2] | 0) | 0;
    $1 = $2;
    break label$1;
   }
   $1 = 0;
   HEAP32[($0 + 28 | 0) >> 2] = 0;
   HEAP32[($0 + 16 | 0) >> 2] = 0;
   HEAP32[($0 + 20 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 0 | 32 | 0;
   if (($7 | 0) == (2 | 0)) {
    break label$1
   }
   $1 = $2 - (HEAP32[($5 + 4 | 0) >> 2] | 0) | 0;
  }
  __stack_pointer = $3 + 32 | 0;
  return $1 | 0;
 }
 
 function __emscripten_stdout_close($0) {
  $0 = $0 | 0;
  return 0 | 0;
 }
 
 function __emscripten_stdout_seek($0, $1, $1$hi, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  i64toi32_i32$HIGH_BITS = 0;
  return 0 | 0;
 }
 
 function printf($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = $1;
  $1 = vfprintf(69072 | 0, $0 | 0, $1 | 0) | 0;
  __stack_pointer = $2 + 16 | 0;
  return $1 | 0;
 }
 
 function Debug_Printf($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $8 = 0, $12 = 0, $50 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $31 = 0, $37 = 0, $38 = 0, $39 = 0, $42 = 0, $43 = 0;
  $8 = __stack_pointer - 96 | 0;
  __stack_pointer = $8;
  HEAP32[($8 + 92 | 0) >> 2] = $0;
  HEAP32[($8 + 88 | 0) >> 2] = $1;
  HEAP8[($8 + 87 | 0) >> 0] = $2;
  HEAP32[($8 + 80 | 0) >> 2] = $3;
  HEAP32[($8 + 76 | 0) >> 2] = $4;
  HEAP32[($8 + 72 | 0) >> 2] = $5;
  $12 = 0;
  HEAP32[($8 + 68 | 0) >> 2] = vsnprintf($12 | 0, $12 | 0, HEAP32[($8 + 76 | 0) >> 2] | 0 | 0, HEAP32[($8 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($8 + 64 | 0) >> 2] = operator_20new_5b_5d_28unsigned_20long_29((HEAP32[($8 + 68 | 0) >> 2] | 0) + 1 | 0 | 0) | 0;
  vsnprintf(HEAP32[($8 + 64 | 0) >> 2] | 0 | 0, (HEAP32[($8 + 68 | 0) >> 2] | 0) + 1 | 0 | 0, HEAP32[($8 + 76 | 0) >> 2] | 0 | 0, HEAP32[($8 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($8 + 60 | 0) >> 2] = 69337;
  $25 = HEAP32[($8 + 60 | 0) >> 2] | 0;
  $26 = HEAP32[($8 + 64 | 0) >> 2] | 0;
  $27 = HEAP32[($8 + 92 | 0) >> 2] | 0;
  $28 = HEAP32[($8 + 88 | 0) >> 2] | 0;
  $31 = (HEAPU8[($8 + 87 | 0) >> 0] | 0) & 1 | 0;
  HEAP32[($8 + 16 | 0) >> 2] = HEAP32[($8 + 80 | 0) >> 2] | 0;
  HEAP32[($8 + 12 | 0) >> 2] = $31;
  HEAP32[($8 + 8 | 0) >> 2] = $28;
  HEAP32[($8 + 4 | 0) >> 2] = $27;
  HEAP32[$8 >> 2] = $26;
  emscripten_asm_const_int($25 | 0, 67440 | 0, $8 | 0) | 0;
  HEAP32[($8 + 56 | 0) >> 2] = 69499;
  $37 = HEAP32[($8 + 56 | 0) >> 2] | 0;
  $38 = HEAP32[($8 + 92 | 0) >> 2] | 0;
  $39 = HEAP32[($8 + 88 | 0) >> 2] | 0;
  $42 = (HEAPU8[($8 + 87 | 0) >> 0] | 0) & 1 | 0;
  $43 = HEAP32[($8 + 80 | 0) >> 2] | 0;
  HEAP32[($8 + 48 | 0) >> 2] = HEAP32[($8 + 64 | 0) >> 2] | 0;
  HEAP32[($8 + 44 | 0) >> 2] = $43;
  HEAP32[($8 + 40 | 0) >> 2] = $42;
  HEAP32[($8 + 36 | 0) >> 2] = $39;
  HEAP32[($8 + 32 | 0) >> 2] = $38;
  emscripten_asm_const_int($37 | 0, 67446 | 0, $8 + 32 | 0 | 0) | 0;
  $50 = HEAP32[($8 + 64 | 0) >> 2] | 0;
  label$1 : {
   if (($50 | 0) == (0 | 0) & 1 | 0) {
    break label$1
   }
   operator_20delete_5b_5d_28void__29($50 | 0);
  }
  __stack_pointer = $8 + 96 | 0;
  return;
 }
 
 function fillScreen($0) {
  $0 = $0 | 0;
  var $3 = 0, $6 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  HEAP16[($3 + 14 | 0) >> 1] = $0;
  HEAP16[($3 + 12 | 0) >> 1] = HEAPU16[($3 + 14 | 0) >> 1] | 0;
  HEAP32[($3 + 8 | 0) >> 2] = 70247;
  $6 = HEAP32[($3 + 8 | 0) >> 2] | 0;
  HEAP32[$3 >> 2] = (HEAPU16[($3 + 12 | 0) >> 1] | 0) & 65535 | 0;
  emscripten_asm_const_int($6 | 0, 67452 | 0, $3 | 0) | 0;
  __stack_pointer = $3 + 16 | 0;
  return;
 }
 
 function calcInit() {
  var $2 = 0, $9 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  emscripten_run_script(66813 | 0);
  emscripten_run_script(66719 | 0);
  printf(66910 | 0, 0 | 0) | 0;
  HEAP32[($2 + 12 | 0) >> 2] = 42;
  HEAP32[($2 + 8 | 0) >> 2] = 70694;
  $9 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  HEAP32[$2 >> 2] = HEAP32[($2 + 12 | 0) >> 2] | 0;
  emscripten_asm_const_int($9 | 0, 67454 | 0, $2 | 0) | 0;
  __stack_pointer = $2 + 16 | 0;
  return;
 }
 
 function calcEnd() {
  var $2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  emscripten_run_script(66868 | 0);
  printf(66929 | 0, 0 | 0) | 0;
  HEAP32[($2 + 12 | 0) >> 2] = 70822;
  emscripten_asm_const_int(HEAP32[($2 + 12 | 0) >> 2] | 0 | 0, 67456 | 0, 0 | 0) | 0;
  __stack_pointer = $2 + 16 | 0;
  return;
 }
 
 function LCD_Refresh() {
  var $2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = 70938;
  emscripten_asm_const_int(HEAP32[($2 + 12 | 0) >> 2] | 0 | 0, 67456 | 0, 0 | 0) | 0;
  __stack_pointer = $2 + 16 | 0;
  return;
 }
 
 function strlen($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = $0;
  label$1 : {
   label$2 : {
    if (!($1 & 3 | 0)) {
     break label$2
    }
    label$3 : {
     if (HEAPU8[$1 >> 0] | 0) {
      break label$3
     }
     return $1 - $1 | 0 | 0;
    }
    $1 = $0;
    label$4 : while (1) {
     $1 = $1 + 1 | 0;
     if (!($1 & 3 | 0)) {
      break label$2
     }
     if (HEAPU8[$1 >> 0] | 0) {
      continue label$4
     }
     break label$1;
    };
   }
   label$5 : while (1) {
    $2 = $1;
    $1 = $1 + 4 | 0;
    $3 = HEAP32[$2 >> 2] | 0;
    if (!((($3 ^ -1 | 0) & ($3 + -16843009 | 0) | 0) & -2139062144 | 0)) {
     continue label$5
    }
    break label$5;
   };
   label$6 : while (1) {
    $1 = $2;
    $2 = $1 + 1 | 0;
    if (HEAPU8[$1 >> 0] | 0) {
     continue label$6
    }
    break label$6;
   };
  }
  return $1 - $0 | 0 | 0;
 }
 
 function strdup($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  label$1 : {
   $1 = (strlen($0 | 0) | 0) + 1 | 0;
   $2 = dlmalloc($1 | 0) | 0;
   if ($2) {
    break label$1
   }
   return 0 | 0;
  }
  return __memcpy($2 | 0, $0 | 0, $1 | 0) | 0 | 0;
 }
 
 function __getTypeName($0) {
  $0 = $0 | 0;
  return strdup(HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function _embind_initialize_bindings() {
  var $0 = 0;
  label$1 : {
   $0 = HEAP32[(0 + 72648 | 0) >> 2] | 0;
   if (!$0) {
    break label$1
   }
   label$2 : while (1) {
    FUNCTION_TABLE[HEAP32[$0 >> 2] | 0 | 0]();
    $0 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    if ($0) {
     continue label$2
    }
    break label$2;
   };
  }
 }
 
 function embind_init_builtin_28_29() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  _embind_register_void(68648 | 0, 65832 | 0);
  _embind_register_bool(68660 | 0, 65699 | 0, 1 | 0, 0 | 0);
  _embind_register_integer(68672 | 0, 65625 | 0, 1 | 0, -128 | 0, 127 | 0);
  _embind_register_integer(68696 | 0, 65618 | 0, 1 | 0, -128 | 0, 127 | 0);
  _embind_register_integer(68684 | 0, 65616 | 0, 1 | 0, 0 | 0, 255 | 0);
  _embind_register_integer(68708 | 0, 65579 | 0, 2 | 0, -32768 | 0, 32767 | 0);
  _embind_register_integer(68720 | 0, 65570 | 0, 2 | 0, 0 | 0, 65535 | 0);
  _embind_register_integer(68732 | 0, 65594 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  _embind_register_integer(68744 | 0, 65585 | 0, 4 | 0, 0 | 0, -1 | 0);
  _embind_register_integer(68756 | 0, 65729 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  _embind_register_integer(68768 | 0, 65720 | 0, 4 | 0, 0 | 0, -1 | 0);
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$1 = 2147483647;
  legalfunc$_embind_register_bigint(68780 | 0, 65605 | 0, 8 | 0, 0 | 0, i64toi32_i32$0 | 0, -1 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = -1;
  legalfunc$_embind_register_bigint(68792 | 0, 65604 | 0, 8 | 0, 0 | 0, i64toi32_i32$1 | 0, -1 | 0, i64toi32_i32$0 | 0);
  _embind_register_float(68804 | 0, 65598 | 0, 4 | 0);
  _embind_register_float(68816 | 0, 65805 | 0, 8 | 0);
  _embind_register_std_string(67520 | 0, 65747 | 0);
  _embind_register_std_string(67592 | 0, 66474 | 0);
  _embind_register_std_wstring(67664 | 0, 4 | 0, 65734 | 0);
  _embind_register_std_wstring(67740 | 0, 2 | 0, 65759 | 0);
  _embind_register_std_wstring(67816 | 0, 4 | 0, 65774 | 0);
  _embind_register_emval(67844 | 0, 65704 | 0);
  _embind_register_memory_view(67884 | 0, 0 | 0, 66405 | 0);
  _embind_register_memory_view(67924 | 0, 0 | 0, 66507 | 0);
  _embind_register_memory_view(67964 | 0, 1 | 0, 66435 | 0);
  _embind_register_memory_view(68004 | 0, 2 | 0, 65970 | 0);
  _embind_register_memory_view(68044 | 0, 3 | 0, 66001 | 0);
  _embind_register_memory_view(68084 | 0, 4 | 0, 66041 | 0);
  _embind_register_memory_view(68124 | 0, 5 | 0, 66070 | 0);
  _embind_register_memory_view(68164 | 0, 4 | 0, 66544 | 0);
  _embind_register_memory_view(68204 | 0, 5 | 0, 66574 | 0);
  _embind_register_memory_view(67924 | 0, 0 | 0, 66172 | 0);
  _embind_register_memory_view(67964 | 0, 1 | 0, 66139 | 0);
  _embind_register_memory_view(68004 | 0, 2 | 0, 66238 | 0);
  _embind_register_memory_view(68044 | 0, 3 | 0, 66204 | 0);
  _embind_register_memory_view(68084 | 0, 4 | 0, 66372 | 0);
  _embind_register_memory_view(68124 | 0, 5 | 0, 66338 | 0);
  _embind_register_memory_view(68244 | 0, 8 | 0, 66305 | 0);
  _embind_register_memory_view(68284 | 0, 9 | 0, 66271 | 0);
  _embind_register_memory_view(68324 | 0, 6 | 0, 66108 | 0);
  _embind_register_memory_view(68364 | 0, 7 | 0, 66613 | 0);
 }
 
 function _GLOBAL__sub_I_bind_cpp() {
  HEAP32[(0 + 72652 | 0) >> 2] = 7;
  HEAP32[(0 + 72656 | 0) >> 2] = 0;
  embind_init_builtin_28_29();
  HEAP32[(0 + 72656 | 0) >> 2] = HEAP32[(0 + 72648 | 0) >> 2] | 0;
  HEAP32[(0 + 72648 | 0) >> 2] = 72652;
 }
 
 function emscripten_get_heap_size() {
  return __wasm_memory_size() << 16 | 0 | 0;
 }
 
 function sbrk($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = HEAP32[(0 + 69216 | 0) >> 2] | 0;
  $2 = ($0 + 7 | 0) & -8 | 0;
  $0 = $1 + $2 | 0;
  label$1 : {
   label$2 : {
    if (!$2) {
     break label$2
    }
    if ($0 >>> 0 <= $1 >>> 0) {
     break label$1
    }
   }
   label$3 : {
    if ($0 >>> 0 <= (emscripten_get_heap_size() | 0) >>> 0) {
     break label$3
    }
    if (!(emscripten_resize_heap($0 | 0) | 0)) {
     break label$1
    }
   }
   HEAP32[(0 + 69216 | 0) >> 2] = $0;
   return $1 | 0;
  }
  HEAP32[(__errno_location() | 0) >> 2] = 48;
  return -1 | 0;
 }
 
 function dlmalloc($0) {
  $0 = $0 | 0;
  var $4 = 0, $5 = 0, $7 = 0, $8 = 0, $3 = 0, $2 = 0, $11 = 0, $6 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $10 = 0, i64toi32_i32$2 = 0, $1 = 0, $9 = 0, $79 = 0, $184 = 0, $911 = 0, $913 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             label$12 : {
              label$13 : {
               label$14 : {
                label$15 : {
                 if ($0 >>> 0 > 244 >>> 0) {
                  break label$15
                 }
                 label$16 : {
                  $2 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
                  $3 = $0 >>> 0 < 11 >>> 0 ? 16 : ($0 + 11 | 0) & -8 | 0;
                  $4 = $3 >>> 3 | 0;
                  $0 = $2 >>> $4 | 0;
                  if (!($0 & 3 | 0)) {
                   break label$16
                  }
                  label$17 : {
                   label$18 : {
                    $5 = (($0 ^ -1 | 0) & 1 | 0) + $4 | 0;
                    $4 = $5 << 3 | 0;
                    $0 = $4 + 72700 | 0;
                    $4 = HEAP32[($4 + 72708 | 0) >> 2] | 0;
                    $3 = HEAP32[($4 + 8 | 0) >> 2] | 0;
                    if (($0 | 0) != ($3 | 0)) {
                     break label$18
                    }
                    HEAP32[(0 + 72660 | 0) >> 2] = $2 & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
                    break label$17;
                   }
                   HEAP32[($3 + 12 | 0) >> 2] = $0;
                   HEAP32[($0 + 8 | 0) >> 2] = $3;
                  }
                  $0 = $4 + 8 | 0;
                  $5 = $5 << 3 | 0;
                  HEAP32[($4 + 4 | 0) >> 2] = $5 | 3 | 0;
                  $4 = $4 + $5 | 0;
                  HEAP32[($4 + 4 | 0) >> 2] = HEAP32[($4 + 4 | 0) >> 2] | 0 | 1 | 0;
                  break label$1;
                 }
                 $6 = HEAP32[(0 + 72668 | 0) >> 2] | 0;
                 if ($3 >>> 0 <= $6 >>> 0) {
                  break label$14
                 }
                 label$19 : {
                  if (!$0) {
                   break label$19
                  }
                  label$20 : {
                   label$21 : {
                    $79 = $0 << $4 | 0;
                    $0 = 2 << $4 | 0;
                    $4 = __wasm_ctz_i32($79 & ($0 | (0 - $0 | 0) | 0) | 0 | 0) | 0;
                    $0 = $4 << 3 | 0;
                    $5 = $0 + 72700 | 0;
                    $0 = HEAP32[($0 + 72708 | 0) >> 2] | 0;
                    $7 = HEAP32[($0 + 8 | 0) >> 2] | 0;
                    if (($5 | 0) != ($7 | 0)) {
                     break label$21
                    }
                    $2 = $2 & (__wasm_rotl_i32(-2 | 0, $4 | 0) | 0) | 0;
                    HEAP32[(0 + 72660 | 0) >> 2] = $2;
                    break label$20;
                   }
                   HEAP32[($7 + 12 | 0) >> 2] = $5;
                   HEAP32[($5 + 8 | 0) >> 2] = $7;
                  }
                  HEAP32[($0 + 4 | 0) >> 2] = $3 | 3 | 0;
                  $7 = $0 + $3 | 0;
                  $4 = $4 << 3 | 0;
                  $5 = $4 - $3 | 0;
                  HEAP32[($7 + 4 | 0) >> 2] = $5 | 1 | 0;
                  HEAP32[($0 + $4 | 0) >> 2] = $5;
                  label$22 : {
                   if (!$6) {
                    break label$22
                   }
                   $3 = ($6 & -8 | 0) + 72700 | 0;
                   $4 = HEAP32[(0 + 72680 | 0) >> 2] | 0;
                   label$23 : {
                    label$24 : {
                     $8 = 1 << ($6 >>> 3 | 0) | 0;
                     if ($2 & $8 | 0) {
                      break label$24
                     }
                     HEAP32[(0 + 72660 | 0) >> 2] = $2 | $8 | 0;
                     $8 = $3;
                     break label$23;
                    }
                    $8 = HEAP32[($3 + 8 | 0) >> 2] | 0;
                   }
                   HEAP32[($3 + 8 | 0) >> 2] = $4;
                   HEAP32[($8 + 12 | 0) >> 2] = $4;
                   HEAP32[($4 + 12 | 0) >> 2] = $3;
                   HEAP32[($4 + 8 | 0) >> 2] = $8;
                  }
                  $0 = $0 + 8 | 0;
                  HEAP32[(0 + 72680 | 0) >> 2] = $7;
                  HEAP32[(0 + 72668 | 0) >> 2] = $5;
                  break label$1;
                 }
                 $9 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
                 if (!$9) {
                  break label$14
                 }
                 $7 = HEAP32[(((__wasm_ctz_i32($9 | 0) | 0) << 2 | 0) + 72964 | 0) >> 2] | 0;
                 $4 = ((HEAP32[($7 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
                 $5 = $7;
                 label$25 : {
                  label$26 : while (1) {
                   label$27 : {
                    $0 = HEAP32[($5 + 16 | 0) >> 2] | 0;
                    if ($0) {
                     break label$27
                    }
                    $0 = HEAP32[($5 + 20 | 0) >> 2] | 0;
                    if (!$0) {
                     break label$25
                    }
                   }
                   $5 = ((HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
                   $184 = $5;
                   $5 = $5 >>> 0 < $4 >>> 0;
                   $4 = $5 ? $184 : $4;
                   $7 = $5 ? $0 : $7;
                   $5 = $0;
                   continue label$26;
                  };
                 }
                 $10 = HEAP32[($7 + 24 | 0) >> 2] | 0;
                 label$28 : {
                  $8 = HEAP32[($7 + 12 | 0) >> 2] | 0;
                  if (($8 | 0) == ($7 | 0)) {
                   break label$28
                  }
                  $0 = HEAP32[($7 + 8 | 0) >> 2] | 0;
                  HEAP32[(0 + 72676 | 0) >> 2] | 0;
                  HEAP32[($0 + 12 | 0) >> 2] = $8;
                  HEAP32[($8 + 8 | 0) >> 2] = $0;
                  break label$2;
                 }
                 label$29 : {
                  $5 = $7 + 20 | 0;
                  $0 = HEAP32[$5 >> 2] | 0;
                  if ($0) {
                   break label$29
                  }
                  $0 = HEAP32[($7 + 16 | 0) >> 2] | 0;
                  if (!$0) {
                   break label$13
                  }
                  $5 = $7 + 16 | 0;
                 }
                 label$30 : while (1) {
                  $11 = $5;
                  $8 = $0;
                  $5 = $0 + 20 | 0;
                  $0 = HEAP32[$5 >> 2] | 0;
                  if ($0) {
                   continue label$30
                  }
                  $5 = $8 + 16 | 0;
                  $0 = HEAP32[($8 + 16 | 0) >> 2] | 0;
                  if ($0) {
                   continue label$30
                  }
                  break label$30;
                 };
                 HEAP32[$11 >> 2] = 0;
                 break label$2;
                }
                $3 = -1;
                if ($0 >>> 0 > -65 >>> 0) {
                 break label$14
                }
                $0 = $0 + 11 | 0;
                $3 = $0 & -8 | 0;
                $6 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
                if (!$6) {
                 break label$14
                }
                $11 = 0;
                label$31 : {
                 if ($3 >>> 0 < 256 >>> 0) {
                  break label$31
                 }
                 $11 = 31;
                 if ($3 >>> 0 > 16777215 >>> 0) {
                  break label$31
                 }
                 $0 = Math_clz32($0 >>> 8 | 0);
                 $11 = ((($3 >>> (38 - $0 | 0) | 0) & 1 | 0) - ($0 << 1 | 0) | 0) + 62 | 0;
                }
                $4 = 0 - $3 | 0;
                label$32 : {
                 label$33 : {
                  label$34 : {
                   label$35 : {
                    $5 = HEAP32[(($11 << 2 | 0) + 72964 | 0) >> 2] | 0;
                    if ($5) {
                     break label$35
                    }
                    $0 = 0;
                    $8 = 0;
                    break label$34;
                   }
                   $0 = 0;
                   $7 = $3 << (($11 | 0) == (31 | 0) ? 0 : 25 - ($11 >>> 1 | 0) | 0) | 0;
                   $8 = 0;
                   label$36 : while (1) {
                    label$37 : {
                     $2 = ((HEAP32[($5 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
                     if ($2 >>> 0 >= $4 >>> 0) {
                      break label$37
                     }
                     $4 = $2;
                     $8 = $5;
                     if ($4) {
                      break label$37
                     }
                     $4 = 0;
                     $8 = $5;
                     $0 = $5;
                     break label$33;
                    }
                    $2 = HEAP32[($5 + 20 | 0) >> 2] | 0;
                    $5 = HEAP32[(($5 + (($7 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
                    $0 = $2 ? (($2 | 0) == ($5 | 0) ? $0 : $2) : $0;
                    $7 = $7 << 1 | 0;
                    if ($5) {
                     continue label$36
                    }
                    break label$36;
                   };
                  }
                  label$38 : {
                   if ($0 | $8 | 0) {
                    break label$38
                   }
                   $8 = 0;
                   $0 = 2 << $11 | 0;
                   $0 = ($0 | (0 - $0 | 0) | 0) & $6 | 0;
                   if (!$0) {
                    break label$14
                   }
                   $0 = HEAP32[(((__wasm_ctz_i32($0 | 0) | 0) << 2 | 0) + 72964 | 0) >> 2] | 0;
                  }
                  if (!$0) {
                   break label$32
                  }
                 }
                 label$39 : while (1) {
                  $2 = ((HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
                  $7 = $2 >>> 0 < $4 >>> 0;
                  label$40 : {
                   $5 = HEAP32[($0 + 16 | 0) >> 2] | 0;
                   if ($5) {
                    break label$40
                   }
                   $5 = HEAP32[($0 + 20 | 0) >> 2] | 0;
                  }
                  $4 = $7 ? $2 : $4;
                  $8 = $7 ? $0 : $8;
                  $0 = $5;
                  if ($0) {
                   continue label$39
                  }
                  break label$39;
                 };
                }
                if (!$8) {
                 break label$14
                }
                if ($4 >>> 0 >= ((HEAP32[(0 + 72668 | 0) >> 2] | 0) - $3 | 0) >>> 0) {
                 break label$14
                }
                $11 = HEAP32[($8 + 24 | 0) >> 2] | 0;
                label$41 : {
                 $7 = HEAP32[($8 + 12 | 0) >> 2] | 0;
                 if (($7 | 0) == ($8 | 0)) {
                  break label$41
                 }
                 $0 = HEAP32[($8 + 8 | 0) >> 2] | 0;
                 HEAP32[(0 + 72676 | 0) >> 2] | 0;
                 HEAP32[($0 + 12 | 0) >> 2] = $7;
                 HEAP32[($7 + 8 | 0) >> 2] = $0;
                 break label$3;
                }
                label$42 : {
                 $5 = $8 + 20 | 0;
                 $0 = HEAP32[$5 >> 2] | 0;
                 if ($0) {
                  break label$42
                 }
                 $0 = HEAP32[($8 + 16 | 0) >> 2] | 0;
                 if (!$0) {
                  break label$12
                 }
                 $5 = $8 + 16 | 0;
                }
                label$43 : while (1) {
                 $2 = $5;
                 $7 = $0;
                 $5 = $0 + 20 | 0;
                 $0 = HEAP32[$5 >> 2] | 0;
                 if ($0) {
                  continue label$43
                 }
                 $5 = $7 + 16 | 0;
                 $0 = HEAP32[($7 + 16 | 0) >> 2] | 0;
                 if ($0) {
                  continue label$43
                 }
                 break label$43;
                };
                HEAP32[$2 >> 2] = 0;
                break label$3;
               }
               label$44 : {
                $0 = HEAP32[(0 + 72668 | 0) >> 2] | 0;
                if ($0 >>> 0 < $3 >>> 0) {
                 break label$44
                }
                $4 = HEAP32[(0 + 72680 | 0) >> 2] | 0;
                label$45 : {
                 label$46 : {
                  $5 = $0 - $3 | 0;
                  if ($5 >>> 0 < 16 >>> 0) {
                   break label$46
                  }
                  $7 = $4 + $3 | 0;
                  HEAP32[($7 + 4 | 0) >> 2] = $5 | 1 | 0;
                  HEAP32[($4 + $0 | 0) >> 2] = $5;
                  HEAP32[($4 + 4 | 0) >> 2] = $3 | 3 | 0;
                  break label$45;
                 }
                 HEAP32[($4 + 4 | 0) >> 2] = $0 | 3 | 0;
                 $0 = $4 + $0 | 0;
                 HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0 | 1 | 0;
                 $7 = 0;
                 $5 = 0;
                }
                HEAP32[(0 + 72668 | 0) >> 2] = $5;
                HEAP32[(0 + 72680 | 0) >> 2] = $7;
                $0 = $4 + 8 | 0;
                break label$1;
               }
               label$47 : {
                $7 = HEAP32[(0 + 72672 | 0) >> 2] | 0;
                if ($7 >>> 0 <= $3 >>> 0) {
                 break label$47
                }
                $4 = $7 - $3 | 0;
                HEAP32[(0 + 72672 | 0) >> 2] = $4;
                $0 = HEAP32[(0 + 72684 | 0) >> 2] | 0;
                $5 = $0 + $3 | 0;
                HEAP32[(0 + 72684 | 0) >> 2] = $5;
                HEAP32[($5 + 4 | 0) >> 2] = $4 | 1 | 0;
                HEAP32[($0 + 4 | 0) >> 2] = $3 | 3 | 0;
                $0 = $0 + 8 | 0;
                break label$1;
               }
               label$48 : {
                label$49 : {
                 if (!(HEAP32[(0 + 73132 | 0) >> 2] | 0)) {
                  break label$49
                 }
                 $4 = HEAP32[(0 + 73140 | 0) >> 2] | 0;
                 break label$48;
                }
                i64toi32_i32$1 = 0;
                i64toi32_i32$0 = -1;
                HEAP32[(i64toi32_i32$1 + 73144 | 0) >> 2] = -1;
                HEAP32[(i64toi32_i32$1 + 73148 | 0) >> 2] = i64toi32_i32$0;
                i64toi32_i32$1 = 0;
                i64toi32_i32$0 = 4096;
                HEAP32[(i64toi32_i32$1 + 73136 | 0) >> 2] = 4096;
                HEAP32[(i64toi32_i32$1 + 73140 | 0) >> 2] = i64toi32_i32$0;
                HEAP32[(0 + 73132 | 0) >> 2] = (($1 + 12 | 0) & -16 | 0) ^ 1431655768 | 0;
                HEAP32[(0 + 73152 | 0) >> 2] = 0;
                HEAP32[(0 + 73104 | 0) >> 2] = 0;
                $4 = 4096;
               }
               $0 = 0;
               $6 = $3 + 47 | 0;
               $2 = $4 + $6 | 0;
               $11 = 0 - $4 | 0;
               $8 = $2 & $11 | 0;
               if ($8 >>> 0 <= $3 >>> 0) {
                break label$1
               }
               $0 = 0;
               label$50 : {
                $4 = HEAP32[(0 + 73100 | 0) >> 2] | 0;
                if (!$4) {
                 break label$50
                }
                $5 = HEAP32[(0 + 73092 | 0) >> 2] | 0;
                $10 = $5 + $8 | 0;
                if ($10 >>> 0 <= $5 >>> 0) {
                 break label$1
                }
                if ($10 >>> 0 > $4 >>> 0) {
                 break label$1
                }
               }
               label$51 : {
                label$52 : {
                 if ((HEAPU8[(0 + 73104 | 0) >> 0] | 0) & 4 | 0) {
                  break label$52
                 }
                 label$53 : {
                  label$54 : {
                   label$55 : {
                    label$56 : {
                     label$57 : {
                      $4 = HEAP32[(0 + 72684 | 0) >> 2] | 0;
                      if (!$4) {
                       break label$57
                      }
                      $0 = 73108;
                      label$58 : while (1) {
                       label$59 : {
                        $5 = HEAP32[$0 >> 2] | 0;
                        if ($5 >>> 0 > $4 >>> 0) {
                         break label$59
                        }
                        if (($5 + (HEAP32[($0 + 4 | 0) >> 2] | 0) | 0) >>> 0 > $4 >>> 0) {
                         break label$56
                        }
                       }
                       $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
                       if ($0) {
                        continue label$58
                       }
                       break label$58;
                      };
                     }
                     $7 = sbrk(0 | 0) | 0;
                     if (($7 | 0) == (-1 | 0)) {
                      break label$53
                     }
                     $2 = $8;
                     label$60 : {
                      $0 = HEAP32[(0 + 73136 | 0) >> 2] | 0;
                      $4 = $0 + -1 | 0;
                      if (!($4 & $7 | 0)) {
                       break label$60
                      }
                      $2 = ($8 - $7 | 0) + (($4 + $7 | 0) & (0 - $0 | 0) | 0) | 0;
                     }
                     if ($2 >>> 0 <= $3 >>> 0) {
                      break label$53
                     }
                     label$61 : {
                      $0 = HEAP32[(0 + 73100 | 0) >> 2] | 0;
                      if (!$0) {
                       break label$61
                      }
                      $4 = HEAP32[(0 + 73092 | 0) >> 2] | 0;
                      $5 = $4 + $2 | 0;
                      if ($5 >>> 0 <= $4 >>> 0) {
                       break label$53
                      }
                      if ($5 >>> 0 > $0 >>> 0) {
                       break label$53
                      }
                     }
                     $0 = sbrk($2 | 0) | 0;
                     if (($0 | 0) != ($7 | 0)) {
                      break label$55
                     }
                     break label$51;
                    }
                    $2 = ($2 - $7 | 0) & $11 | 0;
                    $7 = sbrk($2 | 0) | 0;
                    if (($7 | 0) == ((HEAP32[$0 >> 2] | 0) + (HEAP32[($0 + 4 | 0) >> 2] | 0) | 0 | 0)) {
                     break label$54
                    }
                    $0 = $7;
                   }
                   if (($0 | 0) == (-1 | 0)) {
                    break label$53
                   }
                   label$62 : {
                    if ($2 >>> 0 < ($3 + 48 | 0) >>> 0) {
                     break label$62
                    }
                    $7 = $0;
                    break label$51;
                   }
                   $4 = HEAP32[(0 + 73140 | 0) >> 2] | 0;
                   $4 = (($6 - $2 | 0) + $4 | 0) & (0 - $4 | 0) | 0;
                   if ((sbrk($4 | 0) | 0 | 0) == (-1 | 0)) {
                    break label$53
                   }
                   $2 = $4 + $2 | 0;
                   $7 = $0;
                   break label$51;
                  }
                  if (($7 | 0) != (-1 | 0)) {
                   break label$51
                  }
                 }
                 HEAP32[(0 + 73104 | 0) >> 2] = HEAP32[(0 + 73104 | 0) >> 2] | 0 | 4 | 0;
                }
                $7 = sbrk($8 | 0) | 0;
                $0 = sbrk(0 | 0) | 0;
                if (($7 | 0) == (-1 | 0)) {
                 break label$9
                }
                if (($0 | 0) == (-1 | 0)) {
                 break label$9
                }
                if ($7 >>> 0 >= $0 >>> 0) {
                 break label$9
                }
                $2 = $0 - $7 | 0;
                if ($2 >>> 0 <= ($3 + 40 | 0) >>> 0) {
                 break label$9
                }
               }
               $0 = (HEAP32[(0 + 73092 | 0) >> 2] | 0) + $2 | 0;
               HEAP32[(0 + 73092 | 0) >> 2] = $0;
               label$63 : {
                if ($0 >>> 0 <= (HEAP32[(0 + 73096 | 0) >> 2] | 0) >>> 0) {
                 break label$63
                }
                HEAP32[(0 + 73096 | 0) >> 2] = $0;
               }
               label$64 : {
                label$65 : {
                 $4 = HEAP32[(0 + 72684 | 0) >> 2] | 0;
                 if (!$4) {
                  break label$65
                 }
                 $0 = 73108;
                 label$66 : while (1) {
                  $5 = HEAP32[$0 >> 2] | 0;
                  $8 = HEAP32[($0 + 4 | 0) >> 2] | 0;
                  if (($7 | 0) == ($5 + $8 | 0 | 0)) {
                   break label$64
                  }
                  $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
                  if ($0) {
                   continue label$66
                  }
                  break label$11;
                 };
                }
                label$67 : {
                 label$68 : {
                  $0 = HEAP32[(0 + 72676 | 0) >> 2] | 0;
                  if (!$0) {
                   break label$68
                  }
                  if ($7 >>> 0 >= $0 >>> 0) {
                   break label$67
                  }
                 }
                 HEAP32[(0 + 72676 | 0) >> 2] = $7;
                }
                $0 = 0;
                HEAP32[(0 + 73112 | 0) >> 2] = $2;
                HEAP32[(0 + 73108 | 0) >> 2] = $7;
                HEAP32[(0 + 72692 | 0) >> 2] = -1;
                HEAP32[(0 + 72696 | 0) >> 2] = HEAP32[(0 + 73132 | 0) >> 2] | 0;
                HEAP32[(0 + 73120 | 0) >> 2] = 0;
                label$69 : while (1) {
                 $4 = $0 << 3 | 0;
                 $5 = $4 + 72700 | 0;
                 HEAP32[($4 + 72708 | 0) >> 2] = $5;
                 HEAP32[($4 + 72712 | 0) >> 2] = $5;
                 $0 = $0 + 1 | 0;
                 if (($0 | 0) != (32 | 0)) {
                  continue label$69
                 }
                 break label$69;
                };
                $0 = $2 + -40 | 0;
                $4 = (-8 - $7 | 0) & 7 | 0;
                $5 = $0 - $4 | 0;
                HEAP32[(0 + 72672 | 0) >> 2] = $5;
                $4 = $7 + $4 | 0;
                HEAP32[(0 + 72684 | 0) >> 2] = $4;
                HEAP32[($4 + 4 | 0) >> 2] = $5 | 1 | 0;
                HEAP32[(($7 + $0 | 0) + 4 | 0) >> 2] = 40;
                HEAP32[(0 + 72688 | 0) >> 2] = HEAP32[(0 + 73148 | 0) >> 2] | 0;
                break label$10;
               }
               if ($4 >>> 0 >= $7 >>> 0) {
                break label$11
               }
               if ($4 >>> 0 < $5 >>> 0) {
                break label$11
               }
               if ((HEAP32[($0 + 12 | 0) >> 2] | 0) & 8 | 0) {
                break label$11
               }
               HEAP32[($0 + 4 | 0) >> 2] = $8 + $2 | 0;
               $0 = (-8 - $4 | 0) & 7 | 0;
               $5 = $4 + $0 | 0;
               HEAP32[(0 + 72684 | 0) >> 2] = $5;
               $7 = (HEAP32[(0 + 72672 | 0) >> 2] | 0) + $2 | 0;
               $0 = $7 - $0 | 0;
               HEAP32[(0 + 72672 | 0) >> 2] = $0;
               HEAP32[($5 + 4 | 0) >> 2] = $0 | 1 | 0;
               HEAP32[(($4 + $7 | 0) + 4 | 0) >> 2] = 40;
               HEAP32[(0 + 72688 | 0) >> 2] = HEAP32[(0 + 73148 | 0) >> 2] | 0;
               break label$10;
              }
              $8 = 0;
              break label$2;
             }
             $7 = 0;
             break label$3;
            }
            label$70 : {
             $8 = HEAP32[(0 + 72676 | 0) >> 2] | 0;
             if ($7 >>> 0 >= $8 >>> 0) {
              break label$70
             }
             HEAP32[(0 + 72676 | 0) >> 2] = $7;
             $8 = $7;
            }
            $5 = $7 + $2 | 0;
            $0 = 73108;
            label$71 : {
             label$72 : {
              label$73 : {
               label$74 : {
                label$75 : while (1) {
                 if ((HEAP32[$0 >> 2] | 0 | 0) == ($5 | 0)) {
                  break label$74
                 }
                 $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
                 if ($0) {
                  continue label$75
                 }
                 break label$73;
                };
               }
               if (!((HEAPU8[($0 + 12 | 0) >> 0] | 0) & 8 | 0)) {
                break label$72
               }
              }
              $0 = 73108;
              label$76 : while (1) {
               label$77 : {
                $5 = HEAP32[$0 >> 2] | 0;
                if ($5 >>> 0 > $4 >>> 0) {
                 break label$77
                }
                $5 = $5 + (HEAP32[($0 + 4 | 0) >> 2] | 0) | 0;
                if ($5 >>> 0 > $4 >>> 0) {
                 break label$71
                }
               }
               $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
               continue label$76;
              };
             }
             HEAP32[$0 >> 2] = $7;
             HEAP32[($0 + 4 | 0) >> 2] = (HEAP32[($0 + 4 | 0) >> 2] | 0) + $2 | 0;
             $11 = $7 + ((-8 - $7 | 0) & 7 | 0) | 0;
             HEAP32[($11 + 4 | 0) >> 2] = $3 | 3 | 0;
             $2 = $5 + ((-8 - $5 | 0) & 7 | 0) | 0;
             $3 = $11 + $3 | 0;
             $0 = $2 - $3 | 0;
             label$78 : {
              if (($2 | 0) != ($4 | 0)) {
               break label$78
              }
              HEAP32[(0 + 72684 | 0) >> 2] = $3;
              $0 = (HEAP32[(0 + 72672 | 0) >> 2] | 0) + $0 | 0;
              HEAP32[(0 + 72672 | 0) >> 2] = $0;
              HEAP32[($3 + 4 | 0) >> 2] = $0 | 1 | 0;
              break label$4;
             }
             label$79 : {
              if (($2 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
               break label$79
              }
              HEAP32[(0 + 72680 | 0) >> 2] = $3;
              $0 = (HEAP32[(0 + 72668 | 0) >> 2] | 0) + $0 | 0;
              HEAP32[(0 + 72668 | 0) >> 2] = $0;
              HEAP32[($3 + 4 | 0) >> 2] = $0 | 1 | 0;
              HEAP32[($3 + $0 | 0) >> 2] = $0;
              break label$4;
             }
             $4 = HEAP32[($2 + 4 | 0) >> 2] | 0;
             if (($4 & 3 | 0 | 0) != (1 | 0)) {
              break label$5
             }
             $6 = $4 & -8 | 0;
             label$80 : {
              if ($4 >>> 0 > 255 >>> 0) {
               break label$80
              }
              $5 = HEAP32[($2 + 8 | 0) >> 2] | 0;
              $8 = $4 >>> 3 | 0;
              $7 = ($8 << 3 | 0) + 72700 | 0;
              label$81 : {
               $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
               if (($4 | 0) != ($5 | 0)) {
                break label$81
               }
               HEAP32[(0 + 72660 | 0) >> 2] = (HEAP32[(0 + 72660 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $8 | 0) | 0) | 0;
               break label$6;
              }
              HEAP32[($5 + 12 | 0) >> 2] = $4;
              HEAP32[($4 + 8 | 0) >> 2] = $5;
              break label$6;
             }
             $10 = HEAP32[($2 + 24 | 0) >> 2] | 0;
             label$82 : {
              $7 = HEAP32[($2 + 12 | 0) >> 2] | 0;
              if (($7 | 0) == ($2 | 0)) {
               break label$82
              }
              $4 = HEAP32[($2 + 8 | 0) >> 2] | 0;
              HEAP32[($4 + 12 | 0) >> 2] = $7;
              HEAP32[($7 + 8 | 0) >> 2] = $4;
              break label$7;
             }
             label$83 : {
              $5 = $2 + 20 | 0;
              $4 = HEAP32[$5 >> 2] | 0;
              if ($4) {
               break label$83
              }
              $4 = HEAP32[($2 + 16 | 0) >> 2] | 0;
              if (!$4) {
               break label$8
              }
              $5 = $2 + 16 | 0;
             }
             label$84 : while (1) {
              $8 = $5;
              $7 = $4;
              $5 = $4 + 20 | 0;
              $4 = HEAP32[$5 >> 2] | 0;
              if ($4) {
               continue label$84
              }
              $5 = $7 + 16 | 0;
              $4 = HEAP32[($7 + 16 | 0) >> 2] | 0;
              if ($4) {
               continue label$84
              }
              break label$84;
             };
             HEAP32[$8 >> 2] = 0;
             break label$7;
            }
            $0 = $2 + -40 | 0;
            $8 = (-8 - $7 | 0) & 7 | 0;
            $11 = $0 - $8 | 0;
            HEAP32[(0 + 72672 | 0) >> 2] = $11;
            $8 = $7 + $8 | 0;
            HEAP32[(0 + 72684 | 0) >> 2] = $8;
            HEAP32[($8 + 4 | 0) >> 2] = $11 | 1 | 0;
            HEAP32[(($7 + $0 | 0) + 4 | 0) >> 2] = 40;
            HEAP32[(0 + 72688 | 0) >> 2] = HEAP32[(0 + 73148 | 0) >> 2] | 0;
            $0 = ($5 + ((39 - $5 | 0) & 7 | 0) | 0) + -47 | 0;
            $8 = $0 >>> 0 < ($4 + 16 | 0) >>> 0 ? $4 : $0;
            HEAP32[($8 + 4 | 0) >> 2] = 27;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 73116 | 0) >> 2] | 0;
            i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 73120 | 0) >> 2] | 0;
            $911 = i64toi32_i32$0;
            i64toi32_i32$0 = $8 + 16 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $911;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
            i64toi32_i32$2 = 0;
            i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 73108 | 0) >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 73112 | 0) >> 2] | 0;
            $913 = i64toi32_i32$1;
            i64toi32_i32$1 = $8;
            HEAP32[($8 + 8 | 0) >> 2] = $913;
            HEAP32[($8 + 12 | 0) >> 2] = i64toi32_i32$0;
            HEAP32[(0 + 73116 | 0) >> 2] = $8 + 8 | 0;
            HEAP32[(0 + 73112 | 0) >> 2] = $2;
            HEAP32[(0 + 73108 | 0) >> 2] = $7;
            HEAP32[(0 + 73120 | 0) >> 2] = 0;
            $0 = $8 + 24 | 0;
            label$85 : while (1) {
             HEAP32[($0 + 4 | 0) >> 2] = 7;
             $7 = $0 + 8 | 0;
             $0 = $0 + 4 | 0;
             if ($7 >>> 0 < $5 >>> 0) {
              continue label$85
             }
             break label$85;
            };
            if (($8 | 0) == ($4 | 0)) {
             break label$10
            }
            HEAP32[($8 + 4 | 0) >> 2] = (HEAP32[($8 + 4 | 0) >> 2] | 0) & -2 | 0;
            $7 = $8 - $4 | 0;
            HEAP32[($4 + 4 | 0) >> 2] = $7 | 1 | 0;
            HEAP32[$8 >> 2] = $7;
            label$86 : {
             if ($7 >>> 0 > 255 >>> 0) {
              break label$86
             }
             $0 = ($7 & -8 | 0) + 72700 | 0;
             label$87 : {
              label$88 : {
               $5 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
               $7 = 1 << ($7 >>> 3 | 0) | 0;
               if ($5 & $7 | 0) {
                break label$88
               }
               HEAP32[(0 + 72660 | 0) >> 2] = $5 | $7 | 0;
               $5 = $0;
               break label$87;
              }
              $5 = HEAP32[($0 + 8 | 0) >> 2] | 0;
             }
             HEAP32[($0 + 8 | 0) >> 2] = $4;
             HEAP32[($5 + 12 | 0) >> 2] = $4;
             HEAP32[($4 + 12 | 0) >> 2] = $0;
             HEAP32[($4 + 8 | 0) >> 2] = $5;
             break label$10;
            }
            $0 = 31;
            label$89 : {
             if ($7 >>> 0 > 16777215 >>> 0) {
              break label$89
             }
             $0 = Math_clz32($7 >>> 8 | 0);
             $0 = ((($7 >>> (38 - $0 | 0) | 0) & 1 | 0) - ($0 << 1 | 0) | 0) + 62 | 0;
            }
            HEAP32[($4 + 28 | 0) >> 2] = $0;
            i64toi32_i32$1 = $4;
            i64toi32_i32$0 = 0;
            HEAP32[($4 + 16 | 0) >> 2] = 0;
            HEAP32[($4 + 20 | 0) >> 2] = i64toi32_i32$0;
            $5 = ($0 << 2 | 0) + 72964 | 0;
            label$90 : {
             label$91 : {
              label$92 : {
               $8 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
               $2 = 1 << $0 | 0;
               if ($8 & $2 | 0) {
                break label$92
               }
               HEAP32[(0 + 72664 | 0) >> 2] = $8 | $2 | 0;
               HEAP32[$5 >> 2] = $4;
               HEAP32[($4 + 24 | 0) >> 2] = $5;
               break label$91;
              }
              $0 = $7 << (($0 | 0) == (31 | 0) ? 0 : 25 - ($0 >>> 1 | 0) | 0) | 0;
              $8 = HEAP32[$5 >> 2] | 0;
              label$93 : while (1) {
               $5 = $8;
               if (((HEAP32[($5 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($7 | 0)) {
                break label$90
               }
               $8 = $0 >>> 29 | 0;
               $0 = $0 << 1 | 0;
               $2 = ($5 + ($8 & 4 | 0) | 0) + 16 | 0;
               $8 = HEAP32[$2 >> 2] | 0;
               if ($8) {
                continue label$93
               }
               break label$93;
              };
              HEAP32[$2 >> 2] = $4;
              HEAP32[($4 + 24 | 0) >> 2] = $5;
             }
             HEAP32[($4 + 12 | 0) >> 2] = $4;
             HEAP32[($4 + 8 | 0) >> 2] = $4;
             break label$10;
            }
            $0 = HEAP32[($5 + 8 | 0) >> 2] | 0;
            HEAP32[($0 + 12 | 0) >> 2] = $4;
            HEAP32[($5 + 8 | 0) >> 2] = $4;
            HEAP32[($4 + 24 | 0) >> 2] = 0;
            HEAP32[($4 + 12 | 0) >> 2] = $5;
            HEAP32[($4 + 8 | 0) >> 2] = $0;
           }
           $0 = HEAP32[(0 + 72672 | 0) >> 2] | 0;
           if ($0 >>> 0 <= $3 >>> 0) {
            break label$9
           }
           $4 = $0 - $3 | 0;
           HEAP32[(0 + 72672 | 0) >> 2] = $4;
           $0 = HEAP32[(0 + 72684 | 0) >> 2] | 0;
           $5 = $0 + $3 | 0;
           HEAP32[(0 + 72684 | 0) >> 2] = $5;
           HEAP32[($5 + 4 | 0) >> 2] = $4 | 1 | 0;
           HEAP32[($0 + 4 | 0) >> 2] = $3 | 3 | 0;
           $0 = $0 + 8 | 0;
           break label$1;
          }
          HEAP32[(__errno_location() | 0) >> 2] = 48;
          $0 = 0;
          break label$1;
         }
         $7 = 0;
        }
        if (!$10) {
         break label$6
        }
        label$94 : {
         label$95 : {
          $5 = HEAP32[($2 + 28 | 0) >> 2] | 0;
          $4 = ($5 << 2 | 0) + 72964 | 0;
          if (($2 | 0) != (HEAP32[$4 >> 2] | 0 | 0)) {
           break label$95
          }
          HEAP32[$4 >> 2] = $7;
          if ($7) {
           break label$94
          }
          HEAP32[(0 + 72664 | 0) >> 2] = (HEAP32[(0 + 72664 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
          break label$6;
         }
         HEAP32[($10 + ((HEAP32[($10 + 16 | 0) >> 2] | 0 | 0) == ($2 | 0) ? 16 : 20) | 0) >> 2] = $7;
         if (!$7) {
          break label$6
         }
        }
        HEAP32[($7 + 24 | 0) >> 2] = $10;
        label$96 : {
         $4 = HEAP32[($2 + 16 | 0) >> 2] | 0;
         if (!$4) {
          break label$96
         }
         HEAP32[($7 + 16 | 0) >> 2] = $4;
         HEAP32[($4 + 24 | 0) >> 2] = $7;
        }
        $4 = HEAP32[($2 + 20 | 0) >> 2] | 0;
        if (!$4) {
         break label$6
        }
        HEAP32[($7 + 20 | 0) >> 2] = $4;
        HEAP32[($4 + 24 | 0) >> 2] = $7;
       }
       $0 = $6 + $0 | 0;
       $2 = $2 + $6 | 0;
       $4 = HEAP32[($2 + 4 | 0) >> 2] | 0;
      }
      HEAP32[($2 + 4 | 0) >> 2] = $4 & -2 | 0;
      HEAP32[($3 + 4 | 0) >> 2] = $0 | 1 | 0;
      HEAP32[($3 + $0 | 0) >> 2] = $0;
      label$97 : {
       if ($0 >>> 0 > 255 >>> 0) {
        break label$97
       }
       $4 = ($0 & -8 | 0) + 72700 | 0;
       label$98 : {
        label$99 : {
         $5 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
         $0 = 1 << ($0 >>> 3 | 0) | 0;
         if ($5 & $0 | 0) {
          break label$99
         }
         HEAP32[(0 + 72660 | 0) >> 2] = $5 | $0 | 0;
         $0 = $4;
         break label$98;
        }
        $0 = HEAP32[($4 + 8 | 0) >> 2] | 0;
       }
       HEAP32[($4 + 8 | 0) >> 2] = $3;
       HEAP32[($0 + 12 | 0) >> 2] = $3;
       HEAP32[($3 + 12 | 0) >> 2] = $4;
       HEAP32[($3 + 8 | 0) >> 2] = $0;
       break label$4;
      }
      $4 = 31;
      label$100 : {
       if ($0 >>> 0 > 16777215 >>> 0) {
        break label$100
       }
       $4 = Math_clz32($0 >>> 8 | 0);
       $4 = ((($0 >>> (38 - $4 | 0) | 0) & 1 | 0) - ($4 << 1 | 0) | 0) + 62 | 0;
      }
      HEAP32[($3 + 28 | 0) >> 2] = $4;
      i64toi32_i32$1 = $3;
      i64toi32_i32$0 = 0;
      HEAP32[($3 + 16 | 0) >> 2] = 0;
      HEAP32[($3 + 20 | 0) >> 2] = i64toi32_i32$0;
      $5 = ($4 << 2 | 0) + 72964 | 0;
      label$101 : {
       label$102 : {
        label$103 : {
         $7 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
         $8 = 1 << $4 | 0;
         if ($7 & $8 | 0) {
          break label$103
         }
         HEAP32[(0 + 72664 | 0) >> 2] = $7 | $8 | 0;
         HEAP32[$5 >> 2] = $3;
         HEAP32[($3 + 24 | 0) >> 2] = $5;
         break label$102;
        }
        $4 = $0 << (($4 | 0) == (31 | 0) ? 0 : 25 - ($4 >>> 1 | 0) | 0) | 0;
        $7 = HEAP32[$5 >> 2] | 0;
        label$104 : while (1) {
         $5 = $7;
         if (((HEAP32[($7 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0 | 0)) {
          break label$101
         }
         $7 = $4 >>> 29 | 0;
         $4 = $4 << 1 | 0;
         $8 = ($5 + ($7 & 4 | 0) | 0) + 16 | 0;
         $7 = HEAP32[$8 >> 2] | 0;
         if ($7) {
          continue label$104
         }
         break label$104;
        };
        HEAP32[$8 >> 2] = $3;
        HEAP32[($3 + 24 | 0) >> 2] = $5;
       }
       HEAP32[($3 + 12 | 0) >> 2] = $3;
       HEAP32[($3 + 8 | 0) >> 2] = $3;
       break label$4;
      }
      $0 = HEAP32[($5 + 8 | 0) >> 2] | 0;
      HEAP32[($0 + 12 | 0) >> 2] = $3;
      HEAP32[($5 + 8 | 0) >> 2] = $3;
      HEAP32[($3 + 24 | 0) >> 2] = 0;
      HEAP32[($3 + 12 | 0) >> 2] = $5;
      HEAP32[($3 + 8 | 0) >> 2] = $0;
     }
     $0 = $11 + 8 | 0;
     break label$1;
    }
    label$105 : {
     if (!$11) {
      break label$105
     }
     label$106 : {
      label$107 : {
       $5 = HEAP32[($8 + 28 | 0) >> 2] | 0;
       $0 = ($5 << 2 | 0) + 72964 | 0;
       if (($8 | 0) != (HEAP32[$0 >> 2] | 0 | 0)) {
        break label$107
       }
       HEAP32[$0 >> 2] = $7;
       if ($7) {
        break label$106
       }
       $6 = $6 & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
       HEAP32[(0 + 72664 | 0) >> 2] = $6;
       break label$105;
      }
      HEAP32[($11 + ((HEAP32[($11 + 16 | 0) >> 2] | 0 | 0) == ($8 | 0) ? 16 : 20) | 0) >> 2] = $7;
      if (!$7) {
       break label$105
      }
     }
     HEAP32[($7 + 24 | 0) >> 2] = $11;
     label$108 : {
      $0 = HEAP32[($8 + 16 | 0) >> 2] | 0;
      if (!$0) {
       break label$108
      }
      HEAP32[($7 + 16 | 0) >> 2] = $0;
      HEAP32[($0 + 24 | 0) >> 2] = $7;
     }
     $0 = HEAP32[($8 + 20 | 0) >> 2] | 0;
     if (!$0) {
      break label$105
     }
     HEAP32[($7 + 20 | 0) >> 2] = $0;
     HEAP32[($0 + 24 | 0) >> 2] = $7;
    }
    label$109 : {
     label$110 : {
      if ($4 >>> 0 > 15 >>> 0) {
       break label$110
      }
      $0 = $4 + $3 | 0;
      HEAP32[($8 + 4 | 0) >> 2] = $0 | 3 | 0;
      $0 = $8 + $0 | 0;
      HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0 | 1 | 0;
      break label$109;
     }
     HEAP32[($8 + 4 | 0) >> 2] = $3 | 3 | 0;
     $7 = $8 + $3 | 0;
     HEAP32[($7 + 4 | 0) >> 2] = $4 | 1 | 0;
     HEAP32[($7 + $4 | 0) >> 2] = $4;
     label$111 : {
      if ($4 >>> 0 > 255 >>> 0) {
       break label$111
      }
      $0 = ($4 & -8 | 0) + 72700 | 0;
      label$112 : {
       label$113 : {
        $5 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
        $4 = 1 << ($4 >>> 3 | 0) | 0;
        if ($5 & $4 | 0) {
         break label$113
        }
        HEAP32[(0 + 72660 | 0) >> 2] = $5 | $4 | 0;
        $4 = $0;
        break label$112;
       }
       $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
      }
      HEAP32[($0 + 8 | 0) >> 2] = $7;
      HEAP32[($4 + 12 | 0) >> 2] = $7;
      HEAP32[($7 + 12 | 0) >> 2] = $0;
      HEAP32[($7 + 8 | 0) >> 2] = $4;
      break label$109;
     }
     $0 = 31;
     label$114 : {
      if ($4 >>> 0 > 16777215 >>> 0) {
       break label$114
      }
      $0 = Math_clz32($4 >>> 8 | 0);
      $0 = ((($4 >>> (38 - $0 | 0) | 0) & 1 | 0) - ($0 << 1 | 0) | 0) + 62 | 0;
     }
     HEAP32[($7 + 28 | 0) >> 2] = $0;
     i64toi32_i32$1 = $7;
     i64toi32_i32$0 = 0;
     HEAP32[($7 + 16 | 0) >> 2] = 0;
     HEAP32[($7 + 20 | 0) >> 2] = i64toi32_i32$0;
     $5 = ($0 << 2 | 0) + 72964 | 0;
     label$115 : {
      label$116 : {
       label$117 : {
        $3 = 1 << $0 | 0;
        if ($6 & $3 | 0) {
         break label$117
        }
        HEAP32[(0 + 72664 | 0) >> 2] = $6 | $3 | 0;
        HEAP32[$5 >> 2] = $7;
        HEAP32[($7 + 24 | 0) >> 2] = $5;
        break label$116;
       }
       $0 = $4 << (($0 | 0) == (31 | 0) ? 0 : 25 - ($0 >>> 1 | 0) | 0) | 0;
       $3 = HEAP32[$5 >> 2] | 0;
       label$118 : while (1) {
        $5 = $3;
        if (((HEAP32[($5 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($4 | 0)) {
         break label$115
        }
        $3 = $0 >>> 29 | 0;
        $0 = $0 << 1 | 0;
        $2 = ($5 + ($3 & 4 | 0) | 0) + 16 | 0;
        $3 = HEAP32[$2 >> 2] | 0;
        if ($3) {
         continue label$118
        }
        break label$118;
       };
       HEAP32[$2 >> 2] = $7;
       HEAP32[($7 + 24 | 0) >> 2] = $5;
      }
      HEAP32[($7 + 12 | 0) >> 2] = $7;
      HEAP32[($7 + 8 | 0) >> 2] = $7;
      break label$109;
     }
     $0 = HEAP32[($5 + 8 | 0) >> 2] | 0;
     HEAP32[($0 + 12 | 0) >> 2] = $7;
     HEAP32[($5 + 8 | 0) >> 2] = $7;
     HEAP32[($7 + 24 | 0) >> 2] = 0;
     HEAP32[($7 + 12 | 0) >> 2] = $5;
     HEAP32[($7 + 8 | 0) >> 2] = $0;
    }
    $0 = $8 + 8 | 0;
    break label$1;
   }
   label$119 : {
    if (!$10) {
     break label$119
    }
    label$120 : {
     label$121 : {
      $5 = HEAP32[($7 + 28 | 0) >> 2] | 0;
      $0 = ($5 << 2 | 0) + 72964 | 0;
      if (($7 | 0) != (HEAP32[$0 >> 2] | 0 | 0)) {
       break label$121
      }
      HEAP32[$0 >> 2] = $8;
      if ($8) {
       break label$120
      }
      HEAP32[(0 + 72664 | 0) >> 2] = $9 & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
      break label$119;
     }
     HEAP32[($10 + ((HEAP32[($10 + 16 | 0) >> 2] | 0 | 0) == ($7 | 0) ? 16 : 20) | 0) >> 2] = $8;
     if (!$8) {
      break label$119
     }
    }
    HEAP32[($8 + 24 | 0) >> 2] = $10;
    label$122 : {
     $0 = HEAP32[($7 + 16 | 0) >> 2] | 0;
     if (!$0) {
      break label$122
     }
     HEAP32[($8 + 16 | 0) >> 2] = $0;
     HEAP32[($0 + 24 | 0) >> 2] = $8;
    }
    $0 = HEAP32[($7 + 20 | 0) >> 2] | 0;
    if (!$0) {
     break label$119
    }
    HEAP32[($8 + 20 | 0) >> 2] = $0;
    HEAP32[($0 + 24 | 0) >> 2] = $8;
   }
   label$123 : {
    label$124 : {
     if ($4 >>> 0 > 15 >>> 0) {
      break label$124
     }
     $0 = $4 + $3 | 0;
     HEAP32[($7 + 4 | 0) >> 2] = $0 | 3 | 0;
     $0 = $7 + $0 | 0;
     HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0 | 1 | 0;
     break label$123;
    }
    HEAP32[($7 + 4 | 0) >> 2] = $3 | 3 | 0;
    $5 = $7 + $3 | 0;
    HEAP32[($5 + 4 | 0) >> 2] = $4 | 1 | 0;
    HEAP32[($5 + $4 | 0) >> 2] = $4;
    label$125 : {
     if (!$6) {
      break label$125
     }
     $3 = ($6 & -8 | 0) + 72700 | 0;
     $0 = HEAP32[(0 + 72680 | 0) >> 2] | 0;
     label$126 : {
      label$127 : {
       $8 = 1 << ($6 >>> 3 | 0) | 0;
       if ($8 & $2 | 0) {
        break label$127
       }
       HEAP32[(0 + 72660 | 0) >> 2] = $8 | $2 | 0;
       $8 = $3;
       break label$126;
      }
      $8 = HEAP32[($3 + 8 | 0) >> 2] | 0;
     }
     HEAP32[($3 + 8 | 0) >> 2] = $0;
     HEAP32[($8 + 12 | 0) >> 2] = $0;
     HEAP32[($0 + 12 | 0) >> 2] = $3;
     HEAP32[($0 + 8 | 0) >> 2] = $8;
    }
    HEAP32[(0 + 72680 | 0) >> 2] = $5;
    HEAP32[(0 + 72668 | 0) >> 2] = $4;
   }
   $0 = $7 + 8 | 0;
  }
  __stack_pointer = $1 + 16 | 0;
  return $0 | 0;
 }
 
 function dlfree($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $6 = 0, $4 = 0, $3 = 0, $5 = 0, $7 = 0;
  label$1 : {
   if (!$0) {
    break label$1
   }
   $1 = $0 + -8 | 0;
   $2 = HEAP32[($0 + -4 | 0) >> 2] | 0;
   $0 = $2 & -8 | 0;
   $3 = $1 + $0 | 0;
   label$2 : {
    if ($2 & 1 | 0) {
     break label$2
    }
    if (!($2 & 3 | 0)) {
     break label$1
    }
    $2 = HEAP32[$1 >> 2] | 0;
    $1 = $1 - $2 | 0;
    $4 = HEAP32[(0 + 72676 | 0) >> 2] | 0;
    if ($1 >>> 0 < $4 >>> 0) {
     break label$1
    }
    $0 = $2 + $0 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       if (($1 | 0) == (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
        break label$5
       }
       label$6 : {
        if ($2 >>> 0 > 255 >>> 0) {
         break label$6
        }
        $4 = HEAP32[($1 + 8 | 0) >> 2] | 0;
        $5 = $2 >>> 3 | 0;
        $6 = ($5 << 3 | 0) + 72700 | 0;
        label$7 : {
         $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if (($2 | 0) != ($4 | 0)) {
          break label$7
         }
         HEAP32[(0 + 72660 | 0) >> 2] = (HEAP32[(0 + 72660 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
         break label$2;
        }
        HEAP32[($4 + 12 | 0) >> 2] = $2;
        HEAP32[($2 + 8 | 0) >> 2] = $4;
        break label$2;
       }
       $7 = HEAP32[($1 + 24 | 0) >> 2] | 0;
       label$8 : {
        $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
        if (($6 | 0) == ($1 | 0)) {
         break label$8
        }
        $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
        HEAP32[($2 + 12 | 0) >> 2] = $6;
        HEAP32[($6 + 8 | 0) >> 2] = $2;
        break label$3;
       }
       label$9 : {
        $4 = $1 + 20 | 0;
        $2 = HEAP32[$4 >> 2] | 0;
        if ($2) {
         break label$9
        }
        $2 = HEAP32[($1 + 16 | 0) >> 2] | 0;
        if (!$2) {
         break label$4
        }
        $4 = $1 + 16 | 0;
       }
       label$10 : while (1) {
        $5 = $4;
        $6 = $2;
        $4 = $2 + 20 | 0;
        $2 = HEAP32[$4 >> 2] | 0;
        if ($2) {
         continue label$10
        }
        $4 = $6 + 16 | 0;
        $2 = HEAP32[($6 + 16 | 0) >> 2] | 0;
        if ($2) {
         continue label$10
        }
        break label$10;
       };
       HEAP32[$5 >> 2] = 0;
       break label$3;
      }
      $2 = HEAP32[($3 + 4 | 0) >> 2] | 0;
      if (($2 & 3 | 0 | 0) != (3 | 0)) {
       break label$2
      }
      HEAP32[(0 + 72668 | 0) >> 2] = $0;
      HEAP32[($3 + 4 | 0) >> 2] = $2 & -2 | 0;
      HEAP32[($1 + 4 | 0) >> 2] = $0 | 1 | 0;
      HEAP32[$3 >> 2] = $0;
      return;
     }
     $6 = 0;
    }
    if (!$7) {
     break label$2
    }
    label$11 : {
     label$12 : {
      $4 = HEAP32[($1 + 28 | 0) >> 2] | 0;
      $2 = ($4 << 2 | 0) + 72964 | 0;
      if (($1 | 0) != (HEAP32[$2 >> 2] | 0 | 0)) {
       break label$12
      }
      HEAP32[$2 >> 2] = $6;
      if ($6) {
       break label$11
      }
      HEAP32[(0 + 72664 | 0) >> 2] = (HEAP32[(0 + 72664 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 | 0) | 0) | 0;
      break label$2;
     }
     HEAP32[($7 + ((HEAP32[($7 + 16 | 0) >> 2] | 0 | 0) == ($1 | 0) ? 16 : 20) | 0) >> 2] = $6;
     if (!$6) {
      break label$2
     }
    }
    HEAP32[($6 + 24 | 0) >> 2] = $7;
    label$13 : {
     $2 = HEAP32[($1 + 16 | 0) >> 2] | 0;
     if (!$2) {
      break label$13
     }
     HEAP32[($6 + 16 | 0) >> 2] = $2;
     HEAP32[($2 + 24 | 0) >> 2] = $6;
    }
    $2 = HEAP32[($1 + 20 | 0) >> 2] | 0;
    if (!$2) {
     break label$2
    }
    HEAP32[($6 + 20 | 0) >> 2] = $2;
    HEAP32[($2 + 24 | 0) >> 2] = $6;
   }
   if ($1 >>> 0 >= $3 >>> 0) {
    break label$1
   }
   $2 = HEAP32[($3 + 4 | 0) >> 2] | 0;
   if (!($2 & 1 | 0)) {
    break label$1
   }
   label$14 : {
    label$15 : {
     label$16 : {
      label$17 : {
       label$18 : {
        if ($2 & 2 | 0) {
         break label$18
        }
        label$19 : {
         if (($3 | 0) != (HEAP32[(0 + 72684 | 0) >> 2] | 0 | 0)) {
          break label$19
         }
         HEAP32[(0 + 72684 | 0) >> 2] = $1;
         $0 = (HEAP32[(0 + 72672 | 0) >> 2] | 0) + $0 | 0;
         HEAP32[(0 + 72672 | 0) >> 2] = $0;
         HEAP32[($1 + 4 | 0) >> 2] = $0 | 1 | 0;
         if (($1 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 72668 | 0) >> 2] = 0;
         HEAP32[(0 + 72680 | 0) >> 2] = 0;
         return;
        }
        label$20 : {
         if (($3 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 72680 | 0) >> 2] = $1;
         $0 = (HEAP32[(0 + 72668 | 0) >> 2] | 0) + $0 | 0;
         HEAP32[(0 + 72668 | 0) >> 2] = $0;
         HEAP32[($1 + 4 | 0) >> 2] = $0 | 1 | 0;
         HEAP32[($1 + $0 | 0) >> 2] = $0;
         return;
        }
        $0 = ($2 & -8 | 0) + $0 | 0;
        label$21 : {
         if ($2 >>> 0 > 255 >>> 0) {
          break label$21
         }
         $4 = HEAP32[($3 + 8 | 0) >> 2] | 0;
         $5 = $2 >>> 3 | 0;
         $6 = ($5 << 3 | 0) + 72700 | 0;
         label$22 : {
          $2 = HEAP32[($3 + 12 | 0) >> 2] | 0;
          if (($2 | 0) != ($4 | 0)) {
           break label$22
          }
          HEAP32[(0 + 72660 | 0) >> 2] = (HEAP32[(0 + 72660 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
          break label$15;
         }
         HEAP32[($4 + 12 | 0) >> 2] = $2;
         HEAP32[($2 + 8 | 0) >> 2] = $4;
         break label$15;
        }
        $7 = HEAP32[($3 + 24 | 0) >> 2] | 0;
        label$23 : {
         $6 = HEAP32[($3 + 12 | 0) >> 2] | 0;
         if (($6 | 0) == ($3 | 0)) {
          break label$23
         }
         $2 = HEAP32[($3 + 8 | 0) >> 2] | 0;
         HEAP32[(0 + 72676 | 0) >> 2] | 0;
         HEAP32[($2 + 12 | 0) >> 2] = $6;
         HEAP32[($6 + 8 | 0) >> 2] = $2;
         break label$16;
        }
        label$24 : {
         $4 = $3 + 20 | 0;
         $2 = HEAP32[$4 >> 2] | 0;
         if ($2) {
          break label$24
         }
         $2 = HEAP32[($3 + 16 | 0) >> 2] | 0;
         if (!$2) {
          break label$17
         }
         $4 = $3 + 16 | 0;
        }
        label$25 : while (1) {
         $5 = $4;
         $6 = $2;
         $4 = $2 + 20 | 0;
         $2 = HEAP32[$4 >> 2] | 0;
         if ($2) {
          continue label$25
         }
         $4 = $6 + 16 | 0;
         $2 = HEAP32[($6 + 16 | 0) >> 2] | 0;
         if ($2) {
          continue label$25
         }
         break label$25;
        };
        HEAP32[$5 >> 2] = 0;
        break label$16;
       }
       HEAP32[($3 + 4 | 0) >> 2] = $2 & -2 | 0;
       HEAP32[($1 + 4 | 0) >> 2] = $0 | 1 | 0;
       HEAP32[($1 + $0 | 0) >> 2] = $0;
       break label$14;
      }
      $6 = 0;
     }
     if (!$7) {
      break label$15
     }
     label$26 : {
      label$27 : {
       $4 = HEAP32[($3 + 28 | 0) >> 2] | 0;
       $2 = ($4 << 2 | 0) + 72964 | 0;
       if (($3 | 0) != (HEAP32[$2 >> 2] | 0 | 0)) {
        break label$27
       }
       HEAP32[$2 >> 2] = $6;
       if ($6) {
        break label$26
       }
       HEAP32[(0 + 72664 | 0) >> 2] = (HEAP32[(0 + 72664 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 | 0) | 0) | 0;
       break label$15;
      }
      HEAP32[($7 + ((HEAP32[($7 + 16 | 0) >> 2] | 0 | 0) == ($3 | 0) ? 16 : 20) | 0) >> 2] = $6;
      if (!$6) {
       break label$15
      }
     }
     HEAP32[($6 + 24 | 0) >> 2] = $7;
     label$28 : {
      $2 = HEAP32[($3 + 16 | 0) >> 2] | 0;
      if (!$2) {
       break label$28
      }
      HEAP32[($6 + 16 | 0) >> 2] = $2;
      HEAP32[($2 + 24 | 0) >> 2] = $6;
     }
     $2 = HEAP32[($3 + 20 | 0) >> 2] | 0;
     if (!$2) {
      break label$15
     }
     HEAP32[($6 + 20 | 0) >> 2] = $2;
     HEAP32[($2 + 24 | 0) >> 2] = $6;
    }
    HEAP32[($1 + 4 | 0) >> 2] = $0 | 1 | 0;
    HEAP32[($1 + $0 | 0) >> 2] = $0;
    if (($1 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
     break label$14
    }
    HEAP32[(0 + 72668 | 0) >> 2] = $0;
    return;
   }
   label$29 : {
    if ($0 >>> 0 > 255 >>> 0) {
     break label$29
    }
    $2 = ($0 & -8 | 0) + 72700 | 0;
    label$30 : {
     label$31 : {
      $4 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
      $0 = 1 << ($0 >>> 3 | 0) | 0;
      if ($4 & $0 | 0) {
       break label$31
      }
      HEAP32[(0 + 72660 | 0) >> 2] = $4 | $0 | 0;
      $0 = $2;
      break label$30;
     }
     $0 = HEAP32[($2 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($2 + 8 | 0) >> 2] = $1;
    HEAP32[($0 + 12 | 0) >> 2] = $1;
    HEAP32[($1 + 12 | 0) >> 2] = $2;
    HEAP32[($1 + 8 | 0) >> 2] = $0;
    return;
   }
   $2 = 31;
   label$32 : {
    if ($0 >>> 0 > 16777215 >>> 0) {
     break label$32
    }
    $2 = Math_clz32($0 >>> 8 | 0);
    $2 = ((($0 >>> (38 - $2 | 0) | 0) & 1 | 0) - ($2 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($1 + 28 | 0) >> 2] = $2;
   HEAP32[($1 + 16 | 0) >> 2] = 0;
   HEAP32[($1 + 20 | 0) >> 2] = 0;
   $4 = ($2 << 2 | 0) + 72964 | 0;
   label$33 : {
    label$34 : {
     label$35 : {
      label$36 : {
       $6 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
       $3 = 1 << $2 | 0;
       if ($6 & $3 | 0) {
        break label$36
       }
       HEAP32[(0 + 72664 | 0) >> 2] = $6 | $3 | 0;
       HEAP32[$4 >> 2] = $1;
       HEAP32[($1 + 24 | 0) >> 2] = $4;
       break label$35;
      }
      $2 = $0 << (($2 | 0) == (31 | 0) ? 0 : 25 - ($2 >>> 1 | 0) | 0) | 0;
      $6 = HEAP32[$4 >> 2] | 0;
      label$37 : while (1) {
       $4 = $6;
       if (((HEAP32[($6 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0 | 0)) {
        break label$34
       }
       $6 = $2 >>> 29 | 0;
       $2 = $2 << 1 | 0;
       $3 = ($4 + ($6 & 4 | 0) | 0) + 16 | 0;
       $6 = HEAP32[$3 >> 2] | 0;
       if ($6) {
        continue label$37
       }
       break label$37;
      };
      HEAP32[$3 >> 2] = $1;
      HEAP32[($1 + 24 | 0) >> 2] = $4;
     }
     HEAP32[($1 + 12 | 0) >> 2] = $1;
     HEAP32[($1 + 8 | 0) >> 2] = $1;
     break label$33;
    }
    $0 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    HEAP32[($0 + 12 | 0) >> 2] = $1;
    HEAP32[($4 + 8 | 0) >> 2] = $1;
    HEAP32[($1 + 24 | 0) >> 2] = 0;
    HEAP32[($1 + 12 | 0) >> 2] = $4;
    HEAP32[($1 + 8 | 0) >> 2] = $0;
   }
   $1 = (HEAP32[(0 + 72692 | 0) >> 2] | 0) + -1 | 0;
   HEAP32[(0 + 72692 | 0) >> 2] = $1 ? $1 : -1;
  }
 }
 
 function internal_memalign($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $6 = 0, $4 = 0, $5 = 0;
  $2 = 16;
  label$1 : {
   label$2 : {
    $3 = $0 >>> 0 > 16 >>> 0 ? $0 : 16;
    if ($3 & ($3 + -1 | 0) | 0) {
     break label$2
    }
    $0 = $3;
    break label$1;
   }
   label$3 : while (1) {
    $0 = $2;
    $2 = $0 << 1 | 0;
    if ($0 >>> 0 < $3 >>> 0) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   if ((-64 - $0 | 0) >>> 0 > $1 >>> 0) {
    break label$4
   }
   HEAP32[(__errno_location() | 0) >> 2] = 48;
   return 0 | 0;
  }
  label$5 : {
   $1 = $1 >>> 0 < 11 >>> 0 ? 16 : ($1 + 11 | 0) & -8 | 0;
   $2 = dlmalloc(($1 + $0 | 0) + 12 | 0 | 0) | 0;
   if ($2) {
    break label$5
   }
   return 0 | 0;
  }
  $3 = $2 + -8 | 0;
  label$6 : {
   label$7 : {
    if (($0 + -1 | 0) & $2 | 0) {
     break label$7
    }
    $0 = $3;
    break label$6;
   }
   $4 = $2 + -4 | 0;
   $5 = HEAP32[$4 >> 2] | 0;
   $2 = ((($2 + $0 | 0) + -1 | 0) & (0 - $0 | 0) | 0) + -8 | 0;
   $0 = $2 + (($2 - $3 | 0) >>> 0 > 15 >>> 0 ? 0 : $0) | 0;
   $2 = $0 - $3 | 0;
   $6 = ($5 & -8 | 0) - $2 | 0;
   label$8 : {
    if ($5 & 3 | 0) {
     break label$8
    }
    $3 = HEAP32[$3 >> 2] | 0;
    HEAP32[($0 + 4 | 0) >> 2] = $6;
    HEAP32[$0 >> 2] = $3 + $2 | 0;
    break label$6;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $6 | ((HEAP32[($0 + 4 | 0) >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
   $6 = $0 + $6 | 0;
   HEAP32[($6 + 4 | 0) >> 2] = HEAP32[($6 + 4 | 0) >> 2] | 0 | 1 | 0;
   HEAP32[$4 >> 2] = $2 | ((HEAP32[$4 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
   $6 = $3 + $2 | 0;
   HEAP32[($6 + 4 | 0) >> 2] = HEAP32[($6 + 4 | 0) >> 2] | 0 | 1 | 0;
   dispose_chunk($3 | 0, $2 | 0);
  }
  label$9 : {
   $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   if (!($2 & 3 | 0)) {
    break label$9
   }
   $3 = $2 & -8 | 0;
   if ($3 >>> 0 <= ($1 + 16 | 0) >>> 0) {
    break label$9
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1 | ($2 & 1 | 0) | 0 | 2 | 0;
   $2 = $0 + $1 | 0;
   $1 = $3 - $1 | 0;
   HEAP32[($2 + 4 | 0) >> 2] = $1 | 3 | 0;
   $3 = $0 + $3 | 0;
   HEAP32[($3 + 4 | 0) >> 2] = HEAP32[($3 + 4 | 0) >> 2] | 0 | 1 | 0;
   dispose_chunk($2 | 0, $1 | 0);
  }
  return $0 + 8 | 0 | 0;
 }
 
 function dlposix_memalign($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($1 | 0) != (8 | 0)) {
      break label$3
     }
     $1 = dlmalloc($2 | 0) | 0;
     break label$2;
    }
    $3 = 28;
    if ($1 >>> 0 < 4 >>> 0) {
     break label$1
    }
    if ($1 & 3 | 0) {
     break label$1
    }
    $4 = $1 >>> 2 | 0;
    if ($4 & ($4 + -1 | 0) | 0) {
     break label$1
    }
    $3 = 48;
    if ((-64 - $1 | 0) >>> 0 < $2 >>> 0) {
     break label$1
    }
    $1 = internal_memalign(($1 >>> 0 > 16 >>> 0 ? $1 : 16) | 0, $2 | 0) | 0;
   }
   label$4 : {
    if ($1) {
     break label$4
    }
    return 48 | 0;
   }
   HEAP32[$0 >> 2] = $1;
   $3 = 0;
  }
  return $3 | 0;
 }
 
 function dispose_chunk($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $6 = 0, $4 = 0, $2 = 0, $5 = 0, $7 = 0;
  $2 = $0 + $1 | 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    if ($3 & 1 | 0) {
     break label$2
    }
    if (!($3 & 3 | 0)) {
     break label$1
    }
    $3 = HEAP32[$0 >> 2] | 0;
    $1 = $3 + $1 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $0 = $0 - $3 | 0;
        if (($0 | 0) == (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
         break label$6
        }
        label$7 : {
         if ($3 >>> 0 > 255 >>> 0) {
          break label$7
         }
         $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
         $5 = $3 >>> 3 | 0;
         $6 = ($5 << 3 | 0) + 72700 | 0;
         $3 = HEAP32[($0 + 12 | 0) >> 2] | 0;
         if (($3 | 0) != ($4 | 0)) {
          break label$5
         }
         HEAP32[(0 + 72660 | 0) >> 2] = (HEAP32[(0 + 72660 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
         break label$2;
        }
        $7 = HEAP32[($0 + 24 | 0) >> 2] | 0;
        label$8 : {
         $6 = HEAP32[($0 + 12 | 0) >> 2] | 0;
         if (($6 | 0) == ($0 | 0)) {
          break label$8
         }
         $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
         HEAP32[(0 + 72676 | 0) >> 2] | 0;
         HEAP32[($3 + 12 | 0) >> 2] = $6;
         HEAP32[($6 + 8 | 0) >> 2] = $3;
         break label$3;
        }
        label$9 : {
         $4 = $0 + 20 | 0;
         $3 = HEAP32[$4 >> 2] | 0;
         if ($3) {
          break label$9
         }
         $3 = HEAP32[($0 + 16 | 0) >> 2] | 0;
         if (!$3) {
          break label$4
         }
         $4 = $0 + 16 | 0;
        }
        label$10 : while (1) {
         $5 = $4;
         $6 = $3;
         $4 = $3 + 20 | 0;
         $3 = HEAP32[$4 >> 2] | 0;
         if ($3) {
          continue label$10
         }
         $4 = $6 + 16 | 0;
         $3 = HEAP32[($6 + 16 | 0) >> 2] | 0;
         if ($3) {
          continue label$10
         }
         break label$10;
        };
        HEAP32[$5 >> 2] = 0;
        break label$3;
       }
       $3 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       if (($3 & 3 | 0 | 0) != (3 | 0)) {
        break label$2
       }
       HEAP32[(0 + 72668 | 0) >> 2] = $1;
       HEAP32[($2 + 4 | 0) >> 2] = $3 & -2 | 0;
       HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[$2 >> 2] = $1;
       return;
      }
      HEAP32[($4 + 12 | 0) >> 2] = $3;
      HEAP32[($3 + 8 | 0) >> 2] = $4;
      break label$2;
     }
     $6 = 0;
    }
    if (!$7) {
     break label$2
    }
    label$11 : {
     label$12 : {
      $4 = HEAP32[($0 + 28 | 0) >> 2] | 0;
      $3 = ($4 << 2 | 0) + 72964 | 0;
      if (($0 | 0) != (HEAP32[$3 >> 2] | 0 | 0)) {
       break label$12
      }
      HEAP32[$3 >> 2] = $6;
      if ($6) {
       break label$11
      }
      HEAP32[(0 + 72664 | 0) >> 2] = (HEAP32[(0 + 72664 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 | 0) | 0) | 0;
      break label$2;
     }
     HEAP32[($7 + ((HEAP32[($7 + 16 | 0) >> 2] | 0 | 0) == ($0 | 0) ? 16 : 20) | 0) >> 2] = $6;
     if (!$6) {
      break label$2
     }
    }
    HEAP32[($6 + 24 | 0) >> 2] = $7;
    label$13 : {
     $3 = HEAP32[($0 + 16 | 0) >> 2] | 0;
     if (!$3) {
      break label$13
     }
     HEAP32[($6 + 16 | 0) >> 2] = $3;
     HEAP32[($3 + 24 | 0) >> 2] = $6;
    }
    $3 = HEAP32[($0 + 20 | 0) >> 2] | 0;
    if (!$3) {
     break label$2
    }
    HEAP32[($6 + 20 | 0) >> 2] = $3;
    HEAP32[($3 + 24 | 0) >> 2] = $6;
   }
   label$14 : {
    label$15 : {
     label$16 : {
      label$17 : {
       label$18 : {
        $3 = HEAP32[($2 + 4 | 0) >> 2] | 0;
        if ($3 & 2 | 0) {
         break label$18
        }
        label$19 : {
         if (($2 | 0) != (HEAP32[(0 + 72684 | 0) >> 2] | 0 | 0)) {
          break label$19
         }
         HEAP32[(0 + 72684 | 0) >> 2] = $0;
         $1 = (HEAP32[(0 + 72672 | 0) >> 2] | 0) + $1 | 0;
         HEAP32[(0 + 72672 | 0) >> 2] = $1;
         HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
         if (($0 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 72668 | 0) >> 2] = 0;
         HEAP32[(0 + 72680 | 0) >> 2] = 0;
         return;
        }
        label$20 : {
         if (($2 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 72680 | 0) >> 2] = $0;
         $1 = (HEAP32[(0 + 72668 | 0) >> 2] | 0) + $1 | 0;
         HEAP32[(0 + 72668 | 0) >> 2] = $1;
         HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
         HEAP32[($0 + $1 | 0) >> 2] = $1;
         return;
        }
        $1 = ($3 & -8 | 0) + $1 | 0;
        label$21 : {
         if ($3 >>> 0 > 255 >>> 0) {
          break label$21
         }
         $4 = HEAP32[($2 + 8 | 0) >> 2] | 0;
         $5 = $3 >>> 3 | 0;
         $6 = ($5 << 3 | 0) + 72700 | 0;
         label$22 : {
          $3 = HEAP32[($2 + 12 | 0) >> 2] | 0;
          if (($3 | 0) != ($4 | 0)) {
           break label$22
          }
          HEAP32[(0 + 72660 | 0) >> 2] = (HEAP32[(0 + 72660 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5 | 0) | 0) | 0;
          break label$15;
         }
         HEAP32[($4 + 12 | 0) >> 2] = $3;
         HEAP32[($3 + 8 | 0) >> 2] = $4;
         break label$15;
        }
        $7 = HEAP32[($2 + 24 | 0) >> 2] | 0;
        label$23 : {
         $6 = HEAP32[($2 + 12 | 0) >> 2] | 0;
         if (($6 | 0) == ($2 | 0)) {
          break label$23
         }
         $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
         HEAP32[(0 + 72676 | 0) >> 2] | 0;
         HEAP32[($3 + 12 | 0) >> 2] = $6;
         HEAP32[($6 + 8 | 0) >> 2] = $3;
         break label$16;
        }
        label$24 : {
         $4 = $2 + 20 | 0;
         $3 = HEAP32[$4 >> 2] | 0;
         if ($3) {
          break label$24
         }
         $3 = HEAP32[($2 + 16 | 0) >> 2] | 0;
         if (!$3) {
          break label$17
         }
         $4 = $2 + 16 | 0;
        }
        label$25 : while (1) {
         $5 = $4;
         $6 = $3;
         $4 = $3 + 20 | 0;
         $3 = HEAP32[$4 >> 2] | 0;
         if ($3) {
          continue label$25
         }
         $4 = $6 + 16 | 0;
         $3 = HEAP32[($6 + 16 | 0) >> 2] | 0;
         if ($3) {
          continue label$25
         }
         break label$25;
        };
        HEAP32[$5 >> 2] = 0;
        break label$16;
       }
       HEAP32[($2 + 4 | 0) >> 2] = $3 & -2 | 0;
       HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[($0 + $1 | 0) >> 2] = $1;
       break label$14;
      }
      $6 = 0;
     }
     if (!$7) {
      break label$15
     }
     label$26 : {
      label$27 : {
       $4 = HEAP32[($2 + 28 | 0) >> 2] | 0;
       $3 = ($4 << 2 | 0) + 72964 | 0;
       if (($2 | 0) != (HEAP32[$3 >> 2] | 0 | 0)) {
        break label$27
       }
       HEAP32[$3 >> 2] = $6;
       if ($6) {
        break label$26
       }
       HEAP32[(0 + 72664 | 0) >> 2] = (HEAP32[(0 + 72664 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 | 0) | 0) | 0;
       break label$15;
      }
      HEAP32[($7 + ((HEAP32[($7 + 16 | 0) >> 2] | 0 | 0) == ($2 | 0) ? 16 : 20) | 0) >> 2] = $6;
      if (!$6) {
       break label$15
      }
     }
     HEAP32[($6 + 24 | 0) >> 2] = $7;
     label$28 : {
      $3 = HEAP32[($2 + 16 | 0) >> 2] | 0;
      if (!$3) {
       break label$28
      }
      HEAP32[($6 + 16 | 0) >> 2] = $3;
      HEAP32[($3 + 24 | 0) >> 2] = $6;
     }
     $3 = HEAP32[($2 + 20 | 0) >> 2] | 0;
     if (!$3) {
      break label$15
     }
     HEAP32[($6 + 20 | 0) >> 2] = $3;
     HEAP32[($3 + 24 | 0) >> 2] = $6;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
    HEAP32[($0 + $1 | 0) >> 2] = $1;
    if (($0 | 0) != (HEAP32[(0 + 72680 | 0) >> 2] | 0 | 0)) {
     break label$14
    }
    HEAP32[(0 + 72668 | 0) >> 2] = $1;
    return;
   }
   label$29 : {
    if ($1 >>> 0 > 255 >>> 0) {
     break label$29
    }
    $3 = ($1 & -8 | 0) + 72700 | 0;
    label$30 : {
     label$31 : {
      $4 = HEAP32[(0 + 72660 | 0) >> 2] | 0;
      $1 = 1 << ($1 >>> 3 | 0) | 0;
      if ($4 & $1 | 0) {
       break label$31
      }
      HEAP32[(0 + 72660 | 0) >> 2] = $4 | $1 | 0;
      $1 = $3;
      break label$30;
     }
     $1 = HEAP32[($3 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($3 + 8 | 0) >> 2] = $0;
    HEAP32[($1 + 12 | 0) >> 2] = $0;
    HEAP32[($0 + 12 | 0) >> 2] = $3;
    HEAP32[($0 + 8 | 0) >> 2] = $1;
    return;
   }
   $3 = 31;
   label$32 : {
    if ($1 >>> 0 > 16777215 >>> 0) {
     break label$32
    }
    $3 = Math_clz32($1 >>> 8 | 0);
    $3 = ((($1 >>> (38 - $3 | 0) | 0) & 1 | 0) - ($3 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($0 + 28 | 0) >> 2] = $3;
   HEAP32[($0 + 16 | 0) >> 2] = 0;
   HEAP32[($0 + 20 | 0) >> 2] = 0;
   $4 = ($3 << 2 | 0) + 72964 | 0;
   label$33 : {
    label$34 : {
     label$35 : {
      $6 = HEAP32[(0 + 72664 | 0) >> 2] | 0;
      $2 = 1 << $3 | 0;
      if ($6 & $2 | 0) {
       break label$35
      }
      HEAP32[(0 + 72664 | 0) >> 2] = $6 | $2 | 0;
      HEAP32[$4 >> 2] = $0;
      HEAP32[($0 + 24 | 0) >> 2] = $4;
      break label$34;
     }
     $3 = $1 << (($3 | 0) == (31 | 0) ? 0 : 25 - ($3 >>> 1 | 0) | 0) | 0;
     $6 = HEAP32[$4 >> 2] | 0;
     label$36 : while (1) {
      $4 = $6;
      if (((HEAP32[($6 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($1 | 0)) {
       break label$33
      }
      $6 = $3 >>> 29 | 0;
      $3 = $3 << 1 | 0;
      $2 = ($4 + ($6 & 4 | 0) | 0) + 16 | 0;
      $6 = HEAP32[$2 >> 2] | 0;
      if ($6) {
       continue label$36
      }
      break label$36;
     };
     HEAP32[$2 >> 2] = $0;
     HEAP32[($0 + 24 | 0) >> 2] = $4;
    }
    HEAP32[($0 + 12 | 0) >> 2] = $0;
    HEAP32[($0 + 8 | 0) >> 2] = $0;
    return;
   }
   $1 = HEAP32[($4 + 8 | 0) >> 2] | 0;
   HEAP32[($1 + 12 | 0) >> 2] = $0;
   HEAP32[($4 + 8 | 0) >> 2] = $0;
   HEAP32[($0 + 24 | 0) >> 2] = 0;
   HEAP32[($0 + 12 | 0) >> 2] = $4;
   HEAP32[($0 + 8 | 0) >> 2] = $1;
  }
 }
 
 function __ashlti3($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18 = 0, $20 = 0, $21 = 0, $22 = 0, $11$hi = 0, $18$hi = 0, $19 = 0, $19$hi = 0, $4 = 0, $24$hi = 0;
  label$1 : {
   label$2 : {
    if (!($3 & 64 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     $18 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
     $18 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    }
    $2 = $18;
    $2$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $1 = 0;
    $1$hi = i64toi32_i32$1;
    break label$1;
   }
   if (!$3) {
    break label$1
   }
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $20 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $20 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $19 = $20;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$2 = 0;
   $4 = $3;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$1 = $2;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
    $21 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
    $21 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $2$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $22 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $22 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $1 = $22;
   $1$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0;
  HEAP32[i64toi32_i32$0 >> 2] = $1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function __lshrti3($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18 = 0, $20 = 0, $21 = 0, $22 = 0, $11$hi = 0, $18$hi = 0, $19 = 0, $19$hi = 0, $4 = 0, $24$hi = 0;
  label$1 : {
   label$2 : {
    if (!($3 & 64 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$2 = $2;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $18 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $18 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $1 = $18;
    $1$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $2 = 0;
    $2$hi = i64toi32_i32$1;
    break label$1;
   }
   if (!$3) {
    break label$1
   }
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $20 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $20 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $19 = $20;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$2 = 0;
   $4 = $3;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$1 = $1;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = 0;
    $21 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $1$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $2 = $22;
   $2$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0;
  HEAP32[i64toi32_i32$0 >> 2] = $1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function __trunctfdf2($0, $0$hi, $1, $1$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, i64toi32_i32$1 = 0, $3 = 0, $3$hi = 0, $4$hi = 0, $4 = 0, $2 = 0, $5 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $12 = 0, $12$hi = 0, $14$hi = 0, $17 = 0, $17$hi = 0, $19$hi = 0, $33 = 0, $33$hi = 0, $36 = 0, $38 = 0, $43 = 0, $43$hi = 0, $45$hi = 0, $73 = 0, $73$hi = 0, $77$hi = 0, $80 = 0, $80$hi = 0, $82 = 0, $82$hi = 0, $86 = 0, $86$hi = 0, $88 = 0, $89$hi = 0, $98$hi = 0, $105 = 0, $105$hi = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = 2147483647;
    i64toi32_i32$3 = -1;
    i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
    $3 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
    $3$hi = i64toi32_i32$1;
    i64toi32_i32$0 = $3;
    i64toi32_i32$2 = -1006698496;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$2 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $12 = i64toi32_i32$4;
    $12$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $3$hi;
    i64toi32_i32$1 = $3;
    i64toi32_i32$0 = -1140785152;
    i64toi32_i32$3 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
    i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
    }
    $14$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $12$hi;
    i64toi32_i32$5 = $12;
    i64toi32_i32$1 = $14$hi;
    i64toi32_i32$3 = i64toi32_i32$2;
    if (i64toi32_i32$4 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$5 >>> 0 >= i64toi32_i32$2 >>> 0 | 0) | 0) {
     break label$2
    }
    i64toi32_i32$5 = $0$hi;
    i64toi32_i32$3 = $0;
    i64toi32_i32$4 = 0;
    i64toi32_i32$1 = 60;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = 0;
     $44 = i64toi32_i32$5 >>> i64toi32_i32$0 | 0;
    } else {
     i64toi32_i32$4 = i64toi32_i32$5 >>> i64toi32_i32$0 | 0;
     $44 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$0 | 0) | 0;
    }
    $17 = $44;
    $17$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $1$hi;
    i64toi32_i32$5 = $1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = 4;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = i64toi32_i32$5 << i64toi32_i32$0 | 0;
     $45 = 0;
    } else {
     i64toi32_i32$3 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$4 << i64toi32_i32$0 | 0) | 0;
     $45 = i64toi32_i32$5 << i64toi32_i32$0 | 0;
    }
    $19$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $17$hi;
    i64toi32_i32$4 = $17;
    i64toi32_i32$5 = $19$hi;
    i64toi32_i32$1 = $45;
    i64toi32_i32$5 = i64toi32_i32$3 | i64toi32_i32$5 | 0;
    $3 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
    $3$hi = i64toi32_i32$5;
    label$3 : {
     i64toi32_i32$5 = $0$hi;
     i64toi32_i32$3 = $0;
     i64toi32_i32$4 = 268435455;
     i64toi32_i32$1 = -1;
     i64toi32_i32$4 = i64toi32_i32$5 & i64toi32_i32$4 | 0;
     $0 = i64toi32_i32$3 & i64toi32_i32$1 | 0;
     $0$hi = i64toi32_i32$4;
     i64toi32_i32$5 = $0;
     i64toi32_i32$3 = 134217728;
     i64toi32_i32$1 = 1;
     if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0 | 0) | 0) {
      break label$3
     }
     i64toi32_i32$5 = $3$hi;
     i64toi32_i32$1 = $3;
     i64toi32_i32$4 = 1073741824;
     i64toi32_i32$3 = 1;
     i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
     i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$4 | 0;
     if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
     }
     $4 = i64toi32_i32$0;
     $4$hi = i64toi32_i32$2;
     break label$1;
    }
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$5 = $3;
    i64toi32_i32$1 = 1073741824;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
    i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$1 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
    }
    $4 = i64toi32_i32$4;
    $4$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$5 = 134217728;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | 0) {
     break label$1
    }
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$3 = $3;
    i64toi32_i32$0 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
    $33 = i64toi32_i32$3 & i64toi32_i32$5 | 0;
    $33$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $4$hi;
    i64toi32_i32$2 = i64toi32_i32$4;
    i64toi32_i32$3 = $33$hi;
    i64toi32_i32$5 = $33;
    i64toi32_i32$1 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
    if (i64toi32_i32$1 >>> 0 < i64toi32_i32$5 >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
    }
    $4 = i64toi32_i32$1;
    $4$hi = i64toi32_i32$4;
    break label$1;
   }
   label$4 : {
    i64toi32_i32$4 = $0$hi;
    $36 = !($0 | i64toi32_i32$4 | 0);
    i64toi32_i32$4 = $3$hi;
    i64toi32_i32$0 = $3;
    i64toi32_i32$2 = 2147418112;
    i64toi32_i32$5 = 0;
    $38 = i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$5 >>> 0 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$4;
    i64toi32_i32$0 = i64toi32_i32$4;
    i64toi32_i32$5 = $3;
    i64toi32_i32$4 = 2147418112;
    i64toi32_i32$2 = 0;
    if ((i64toi32_i32$5 | 0) == (i64toi32_i32$2 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$4 | 0) | 0 ? $36 : $38) {
     break label$4
    }
    i64toi32_i32$5 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$4 = 60;
    i64toi32_i32$3 = i64toi32_i32$4 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $46 = i64toi32_i32$5 >>> i64toi32_i32$3 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$5 >>> i64toi32_i32$3 | 0;
     $46 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$3 | 0) | 0;
    }
    $43 = $46;
    $43$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$5 = $1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$4 = 4;
    i64toi32_i32$3 = i64toi32_i32$4 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$3 | 0;
     $47 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$3 | 0) | 0;
     $47 = i64toi32_i32$5 << i64toi32_i32$3 | 0;
    }
    $45$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $43$hi;
    i64toi32_i32$0 = $43;
    i64toi32_i32$5 = $45$hi;
    i64toi32_i32$4 = $47;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$4 | 0;
    i64toi32_i32$0 = 524287;
    i64toi32_i32$4 = -1;
    i64toi32_i32$0 = i64toi32_i32$5 & i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$4 | 0;
    i64toi32_i32$2 = 2146959360;
    i64toi32_i32$4 = 0;
    i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
    $4 = i64toi32_i32$5 | i64toi32_i32$4 | 0;
    $4$hi = i64toi32_i32$2;
    break label$1;
   }
   i64toi32_i32$2 = 2146435072;
   $4 = 0;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $3$hi;
   i64toi32_i32$0 = $3;
   i64toi32_i32$5 = 1140785151;
   i64toi32_i32$4 = -1;
   if (i64toi32_i32$2 >>> 0 > i64toi32_i32$5 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$0 >>> 0 > i64toi32_i32$4 >>> 0 | 0) | 0) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   $4 = 0;
   $4$hi = i64toi32_i32$0;
   i64toi32_i32$0 = i64toi32_i32$2;
   i64toi32_i32$0 = i64toi32_i32$2;
   i64toi32_i32$4 = $3;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 48;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $48 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
    $48 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$3 | 0) | 0;
   }
   $5 = $48;
   if ($5 >>> 0 < 15249 >>> 0) {
    break label$1
   }
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$0 = $1;
   i64toi32_i32$4 = 65535;
   i64toi32_i32$5 = -1;
   i64toi32_i32$4 = i64toi32_i32$2 & i64toi32_i32$4 | 0;
   i64toi32_i32$2 = i64toi32_i32$0 & i64toi32_i32$5 | 0;
   i64toi32_i32$0 = 65536;
   i64toi32_i32$5 = 0;
   i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
   $3 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
   $3$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$2 = $3$hi;
   __ashlti3($2 + 16 | 0 | 0, $0 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$2 | 0, $5 + -15233 | 0 | 0);
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$2 = $3$hi;
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$0 = $3$hi;
   __lshrti3($2 | 0, $0 | 0, i64toi32_i32$2 | 0, $3 | 0, i64toi32_i32$0 | 0, 15361 - $5 | 0 | 0);
   i64toi32_i32$4 = $2;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$4 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] | 0;
   $3 = i64toi32_i32$0;
   $3$hi = i64toi32_i32$2;
   i64toi32_i32$4 = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$5 = 60;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = 0;
    $49 = i64toi32_i32$2 >>> i64toi32_i32$3 | 0;
   } else {
    i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$3 | 0;
    $49 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$3 | 0) | 0;
   }
   $73 = $49;
   $73$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $2 + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$5 = 4;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
    $50 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$4 << i64toi32_i32$3 | 0) | 0;
    $50 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
   }
   $77$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $73$hi;
   i64toi32_i32$4 = $73;
   i64toi32_i32$2 = $77$hi;
   i64toi32_i32$5 = $50;
   i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
   $4 = i64toi32_i32$4 | i64toi32_i32$5 | 0;
   $4$hi = i64toi32_i32$2;
   label$5 : {
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$0 = $3;
    i64toi32_i32$4 = 268435455;
    i64toi32_i32$5 = -1;
    i64toi32_i32$4 = i64toi32_i32$2 & i64toi32_i32$4 | 0;
    $80 = i64toi32_i32$0 & i64toi32_i32$5 | 0;
    $80$hi = i64toi32_i32$4;
    i64toi32_i32$2 = $2;
    i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
    $82 = i64toi32_i32$4;
    $82$hi = i64toi32_i32$0;
    i64toi32_i32$2 = (i64toi32_i32$2 + 16 | 0) + 8 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $86 = i64toi32_i32$0;
    $86$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $82$hi;
    i64toi32_i32$2 = $82;
    i64toi32_i32$0 = $86$hi;
    i64toi32_i32$5 = $86;
    i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
    i64toi32_i32$4 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$5 = 0;
    $88 = (i64toi32_i32$4 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | 0;
    i64toi32_i32$4 = 0;
    $89$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $80$hi;
    i64toi32_i32$5 = $80;
    i64toi32_i32$0 = $89$hi;
    i64toi32_i32$2 = $88;
    i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
    $3 = i64toi32_i32$5 | i64toi32_i32$2 | 0;
    $3$hi = i64toi32_i32$0;
    i64toi32_i32$4 = $3;
    i64toi32_i32$5 = 134217728;
    i64toi32_i32$2 = 1;
    if (i64toi32_i32$0 >>> 0 < i64toi32_i32$5 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0 | 0) | 0) {
     break label$5
    }
    i64toi32_i32$4 = $4$hi;
    i64toi32_i32$2 = $4;
    i64toi32_i32$0 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$3 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
    i64toi32_i32$1 = i64toi32_i32$4 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$3 >>> 0 < i64toi32_i32$5 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $4 = i64toi32_i32$3;
    $4$hi = i64toi32_i32$1;
    break label$1;
   }
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$4 = $3;
   i64toi32_i32$2 = 134217728;
   i64toi32_i32$5 = 0;
   if ((i64toi32_i32$4 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0) {
    break label$1
   }
   i64toi32_i32$4 = $4$hi;
   i64toi32_i32$5 = $4;
   i64toi32_i32$1 = 0;
   i64toi32_i32$2 = 1;
   i64toi32_i32$1 = i64toi32_i32$4 & i64toi32_i32$1 | 0;
   $98$hi = i64toi32_i32$1;
   i64toi32_i32$1 = i64toi32_i32$4;
   i64toi32_i32$1 = $98$hi;
   i64toi32_i32$4 = i64toi32_i32$5 & i64toi32_i32$2 | 0;
   i64toi32_i32$5 = $4$hi;
   i64toi32_i32$2 = $4;
   i64toi32_i32$0 = i64toi32_i32$4 + i64toi32_i32$2 | 0;
   i64toi32_i32$3 = i64toi32_i32$1 + i64toi32_i32$5 | 0;
   if (i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0) {
    i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
   }
   $4 = i64toi32_i32$0;
   $4$hi = i64toi32_i32$3;
  }
  __stack_pointer = $2 + 32 | 0;
  i64toi32_i32$3 = $4$hi;
  i64toi32_i32$3 = $1$hi;
  i64toi32_i32$1 = $1;
  i64toi32_i32$4 = -2147483648;
  i64toi32_i32$2 = 0;
  i64toi32_i32$4 = i64toi32_i32$3 & i64toi32_i32$4 | 0;
  $105 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
  $105$hi = i64toi32_i32$4;
  i64toi32_i32$4 = $4$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$1 = $105$hi;
  i64toi32_i32$2 = $105;
  i64toi32_i32$1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$3 | i64toi32_i32$2 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$1 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function setThrew($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (HEAP32[(0 + 73156 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[73156 >> 2] = $0;
   HEAP32[(0 + 73160 | 0) >> 2] = $1;
  }
 }
 
 function setTempRet0($0) {
  $0 = $0 | 0;
  tempRet0 = $0;
 }
 
 function getTempRet0() {
  return tempRet0 | 0;
 }
 
 function aligned_alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = 0;
  label$1 : {
   if ($0 & 3 | 0) {
    break label$1
   }
   if (($1 >>> 0) % ($0 >>> 0) | 0) {
    break label$1
   }
   $0 = dlposix_memalign($2 + 12 | 0 | 0, $0 | 0, $1 | 0) | 0;
   $3 = (wasm2js_i32$0 = 0, wasm2js_i32$1 = HEAP32[($2 + 12 | 0) >> 2] | 0, wasm2js_i32$2 = $0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
  }
  __stack_pointer = $2 + 16 | 0;
  return $3 | 0;
 }
 
 function operator_20new_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = $0 >>> 0 > 1 >>> 0 ? $0 : 1;
  label$1 : {
   label$2 : while (1) {
    $0 = dlmalloc($1 | 0) | 0;
    if ($0) {
     break label$1
    }
    label$3 : {
     $0 = std__get_new_handler_28_29() | 0;
     if (!$0) {
      break label$3
     }
     FUNCTION_TABLE[$0 | 0]();
     continue label$2;
    }
    break label$2;
   };
   __cxa_throw(std__bad_alloc__bad_alloc_28_29(__cxa_allocate_exception(4 | 0) | 0 | 0) | 0 | 0, 69036 | 0, 8 | 0);
   wasm2js_trap();
  }
  return $0 | 0;
 }
 
 function operator_20new_5b_5d_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  return operator_20new_28unsigned_20long_29($0 | 0) | 0 | 0;
 }
 
 function operator_20delete_28void__29($0) {
  $0 = $0 | 0;
  dlfree($0 | 0);
 }
 
 function operator_20delete_5b_5d_28void__29($0) {
  $0 = $0 | 0;
  operator_20delete_28void__29($0 | 0);
 }
 
 function std____2____libcpp_aligned_alloc_5babi_v160006_5d_28unsigned_20long_2c_20unsigned_20long_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = (($0 + $1 | 0) + -1 | 0) & (0 - $0 | 0) | 0;
  return aligned_alloc($0 | 0, ($2 >>> 0 > $1 >>> 0 ? $2 : $1) | 0) | 0 | 0;
 }
 
 function std____2____libcpp_aligned_free_5babi_v160006_5d_28void__29($0) {
  $0 = $0 | 0;
  dlfree($0 | 0);
 }
 
 function __cxa_allocate_exception($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  $1 = __cxxabiv1__cxa_exception_size_from_exception_thrown_size_28unsigned_20long_29($0 | 0) | 0;
  $0 = invoke_ii(9 | 0, $1 | 0) | 0;
  $2 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (($2 | 0) == (1 | 0)) {
     break label$2
    }
    if (!$0) {
     break label$1
    }
    return __cxxabiv1__thrown_object_from_cxa_exception_28__cxxabiv1____cxa_exception__29(__memset($0 | 0, 0 | 0, $1 | 0) | 0 | 0) | 0 | 0;
   }
   __cxa_find_matching_catch_3(0 | 0) | 0;
   getTempRet0() | 0;
  }
  std__terminate_28_29();
  wasm2js_trap();
 }
 
 function __cxxabiv1__cxa_exception_size_from_exception_thrown_size_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  return __cxxabiv1__aligned_allocation_size_28unsigned_20long_2c_20unsigned_20long_29($0 + 24 | 0 | 0) | 0 | 0;
 }
 
 function __cxxabiv1__thrown_object_from_cxa_exception_28__cxxabiv1____cxa_exception__29($0) {
  $0 = $0 | 0;
  return $0 + 24 | 0 | 0;
 }
 
 function __cxxabiv1__aligned_allocation_size_28unsigned_20long_2c_20unsigned_20long_29($0) {
  $0 = $0 | 0;
  return ($0 + 3 | 0) & -4 | 0 | 0;
 }
 
 function __cxa_free_exception($0) {
  $0 = $0 | 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  invoke_vi(10 | 0, __cxxabiv1__cxa_exception_from_thrown_object_28void__29($0 | 0) | 0 | 0);
  $0 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  label$1 : {
   if (($0 | 0) == (1 | 0)) {
    break label$1
   }
   return;
  }
  __cxa_find_matching_catch_3(0 | 0) | 0;
  getTempRet0() | 0;
  std__terminate_28_29();
  wasm2js_trap();
 }
 
 function __cxxabiv1__cxa_exception_from_thrown_object_28void__29($0) {
  $0 = $0 | 0;
  return $0 + -24 | 0 | 0;
 }
 
 function __cxa_increment_exception_refcount($0) {
  $0 = $0 | 0;
  label$1 : {
   if (!$0) {
    break label$1
   }
   unsigned_20long_20std____2___28anonymous_20namespace_29____libcpp_atomic_add_5babi_v160006_5d_unsigned_20long_2c_20unsigned_20long__28unsigned_20long__2c_20unsigned_20long_2c_20int_29(__cxxabiv1__cxa_exception_from_thrown_object_28void__29($0 | 0) | 0 | 0, 1 | 0) | 0;
  }
 }
 
 function unsigned_20long_20std____2___28anonymous_20namespace_29____libcpp_atomic_add_5babi_v160006_5d_unsigned_20long_2c_20unsigned_20long__28unsigned_20long__2c_20unsigned_20long_2c_20int_29($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1 = (HEAP32[$0 >> 2] | 0) + $1 | 0;
  HEAP32[$0 >> 2] = $1;
  return $1 | 0;
 }
 
 function __cxa_decrement_exception_refcount($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   label$2 : {
    if (!$0) {
     break label$2
    }
    $1 = __cxxabiv1__cxa_exception_from_thrown_object_28void__29($0 | 0) | 0;
    if (unsigned_20long_20std____2___28anonymous_20namespace_29____libcpp_atomic_add_5babi_v160006_5d_unsigned_20long_2c_20unsigned_20long__28unsigned_20long__2c_20unsigned_20long_2c_20int_29($1 | 0, -1 | 0) | 0) {
     break label$2
    }
    if (HEAPU8[($1 + 13 | 0) >> 0] | 0) {
     break label$2
    }
    label$3 : {
     $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     if (!$1) {
      break label$3
     }
     HEAP32[(0 + 73156 | 0) >> 2] = 0;
     invoke_ii($1 | 0, $0 | 0) | 0;
     $1 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
     HEAP32[(0 + 73156 | 0) >> 2] = 0;
     if (($1 | 0) == (1 | 0)) {
      break label$1
     }
    }
    __cxa_free_exception($0 | 0);
   }
   return;
  }
  __cxa_find_matching_catch_3(0 | 0) | 0;
  getTempRet0() | 0;
  std__terminate_28_29();
  wasm2js_trap();
 }
 
 function abort_message($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  abort();
  wasm2js_trap();
 }
 
 function void_20_28_std____2___28anonymous_20namespace_29____libcpp_atomic_load_5babi_v160006_5d_void_20_28__29_28_29__28void_20_28__20const__29_28_29_2c_20int_29_29_28_29($0) {
  $0 = $0 | 0;
  return HEAP32[$0 >> 2] | 0 | 0;
 }
 
 function std__terminate_28_29() {
  std____terminate_28void_20_28__29_28_29_29(std__get_terminate_28_29() | 0 | 0);
  wasm2js_trap();
 }
 
 function std__get_terminate_28_29() {
  return void_20_28_std____2___28anonymous_20namespace_29____libcpp_atomic_load_5babi_v160006_5d_void_20_28__29_28_29__28void_20_28__20const__29_28_29_2c_20int_29_29_28_29(69220 | 0) | 0 | 0;
 }
 
 function std____terminate_28void_20_28__29_28_29_29($0) {
  $0 = $0 | 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  invoke_v($0 | 0);
  $0 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
  HEAP32[(0 + 73156 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (($0 | 0) == (1 | 0)) {
     break label$2
    }
    HEAP32[(0 + 73156 | 0) >> 2] = 0;
    invoke_vii(12 | 0, 65837 | 0, 0 | 0);
    $0 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
    HEAP32[(0 + 73156 | 0) >> 2] = 0;
    if (($0 | 0) != (1 | 0)) {
     break label$1
    }
   }
   $0 = __cxa_find_matching_catch_3(0 | 0) | 0;
   getTempRet0() | 0;
   __cxa_begin_catch($0 | 0) | 0;
   HEAP32[(0 + 73156 | 0) >> 2] = 0;
   invoke_vii(12 | 0, 65645 | 0, 0 | 0);
   $0 = HEAP32[(0 + 73156 | 0) >> 2] | 0;
   HEAP32[(0 + 73156 | 0) >> 2] = 0;
   if (($0 | 0) != (1 | 0)) {
    break label$1
   }
   __cxa_find_matching_catch_3(0 | 0) | 0;
   getTempRet0() | 0;
   std__terminate_28_29();
  }
  wasm2js_trap();
 }
 
 function std__get_new_handler_28_29() {
  return void_20_28_std____2___28anonymous_20namespace_29____libcpp_atomic_load_5babi_v160006_5d_void_20_28__29_28_29__28void_20_28__20const__29_28_29_2c_20int_29_29_28_29(73164 | 0) | 0 | 0;
 }
 
 function __cxxabiv1____aligned_malloc_with_fallback_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   $1 = $0 >>> 0 > 1 >>> 0 ? $0 : 1;
   $0 = std____2____libcpp_aligned_alloc_5babi_v160006_5d_28unsigned_20long_2c_20unsigned_20long_29(16 | 0, $1 | 0) | 0;
   if ($0) {
    break label$1
   }
   $0 = $28anonymous_20namespace_29__fallback_malloc_28unsigned_20long_29($1 | 0) | 0;
  }
  return $0 | 0;
 }
 
 function $28anonymous_20namespace_29__fallback_malloc_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  var $1 = 0, $3 = 0, $2 = 0, $4 = 0;
  $1 = $28anonymous_20namespace_29__alloc_size_28unsigned_20long_29($0 | 0) | 0;
  label$1 : {
   $0 = HEAP32[(0 + 73168 | 0) >> 2] | 0;
   if ($0) {
    break label$1
   }
   $28anonymous_20namespace_29__init_heap_28_29();
   $0 = HEAP32[(0 + 73168 | 0) >> 2] | 0;
  }
  $2 = 0;
  label$2 : while (1) {
   $3 = 0;
   label$3 : {
    label$4 : {
     if (!$0) {
      break label$4
     }
     if (($0 | 0) == (73696 | 0)) {
      break label$4
     }
     label$5 : {
      $3 = HEAPU16[($0 + 2 | 0) >> 1] | 0;
      $4 = ($3 >>> 0 > $1 >>> 0 ? ($3 - $1 | 0) & 3 | 0 : 0) + $1 | 0;
      if ($4 >>> 0 >= $3 >>> 0) {
       break label$5
      }
      $1 = $3 - $4 | 0;
      HEAP16[($0 + 2 | 0) >> 1] = $1;
      $0 = $0 + (($1 & 65535 | 0) << 2 | 0) | 0;
      HEAP16[($0 + 2 | 0) >> 1] = $4;
      HEAP16[$0 >> 1] = 0;
      return $0 + 4 | 0 | 0;
     }
     if ($1 >>> 0 > $3 >>> 0) {
      break label$3
     }
     $1 = HEAPU16[$0 >> 1] | 0;
     label$6 : {
      label$7 : {
       if ($2) {
        break label$7
       }
       HEAP32[(0 + 73168 | 0) >> 2] = $28anonymous_20namespace_29__node_from_offset_28unsigned_20short_29($1 & 65535 | 0 | 0) | 0;
       break label$6;
      }
      HEAP16[$2 >> 1] = $1;
     }
     HEAP16[$0 >> 1] = 0;
     $3 = $0 + 4 | 0;
    }
    return $3 | 0;
   }
   $2 = $0;
   $0 = $28anonymous_20namespace_29__node_from_offset_28unsigned_20short_29(HEAPU16[$0 >> 1] | 0 | 0) | 0;
   continue label$2;
  };
 }
 
 function $28anonymous_20namespace_29__alloc_size_28unsigned_20long_29($0) {
  $0 = $0 | 0;
  return (($0 + 3 | 0) >>> 2 | 0) + 1 | 0 | 0;
 }
 
 function $28anonymous_20namespace_29__init_heap_28_29() {
  var $0 = 0;
  $0 = $28anonymous_20namespace_29__getFirstAlignedNodeInHeap_28_29() | 0;
  HEAP32[(0 + 73168 | 0) >> 2] = $0;
  HEAP16[($0 + 2 | 0) >> 1] = (73696 - $0 | 0) >>> 2 | 0;
  HEAP16[$0 >> 1] = $28anonymous_20namespace_29__offset_from_node_28_28anonymous_20namespace_29__heap_node_20const__29(73696 | 0) | 0;
 }
 
 function $28anonymous_20namespace_29__node_from_offset_28unsigned_20short_29($0) {
  $0 = $0 | 0;
  return ($0 << 2 | 0) + 73184 | 0 | 0;
 }
 
 function __cxxabiv1____aligned_free_with_fallback_28void__29($0) {
  $0 = $0 | 0;
  label$1 : {
   if (!($28anonymous_20namespace_29__is_fallback_ptr_28void__29($0 | 0) | 0)) {
    break label$1
   }
   $28anonymous_20namespace_29__fallback_free_28void__29($0 | 0);
   return;
  }
  std____2____libcpp_aligned_free_5babi_v160006_5d_28void__29($0 | 0);
 }
 
 function $28anonymous_20namespace_29__is_fallback_ptr_28void__29($0) {
  $0 = $0 | 0;
  return $0 >>> 0 >= 73184 >>> 0 & $0 >>> 0 < 73696 >>> 0 | 0 | 0;
 }
 
 function $28anonymous_20namespace_29__fallback_free_28void__29($0) {
  $0 = $0 | 0;
  var $5 = 0, $1 = 0, $4 = 0, $2 = 0, $3 = 0;
  $1 = $0 + -4 | 0;
  $2 = 0;
  $3 = HEAP32[(0 + 73168 | 0) >> 2] | 0;
  $4 = $3;
  label$1 : {
   label$2 : while (1) {
    $5 = $4;
    if (!$5) {
     break label$1
    }
    if (($5 | 0) == (73696 | 0)) {
     break label$1
    }
    label$3 : {
     if (($28anonymous_20namespace_29__after_28_28anonymous_20namespace_29__heap_node__29($5 | 0) | 0 | 0) != ($1 | 0)) {
      break label$3
     }
     HEAP16[($5 + 2 | 0) >> 1] = (HEAPU16[($0 + -2 | 0) >> 1] | 0) + (HEAPU16[($5 + 2 | 0) >> 1] | 0) | 0;
     return;
    }
    label$4 : {
     if (($28anonymous_20namespace_29__after_28_28anonymous_20namespace_29__heap_node__29($1 | 0) | 0 | 0) != ($5 | 0)) {
      break label$4
     }
     $4 = $0 + -2 | 0;
     HEAP16[$4 >> 1] = (HEAPU16[($5 + 2 | 0) >> 1] | 0) + (HEAPU16[$4 >> 1] | 0) | 0;
     label$5 : {
      if ($2) {
       break label$5
      }
      HEAP32[(0 + 73168 | 0) >> 2] = $1;
      HEAP16[$1 >> 1] = HEAPU16[$5 >> 1] | 0;
      return;
     }
     HEAP16[$2 >> 1] = $28anonymous_20namespace_29__offset_from_node_28_28anonymous_20namespace_29__heap_node_20const__29($1 | 0) | 0;
     return;
    }
    $4 = $28anonymous_20namespace_29__node_from_offset_28unsigned_20short_29(HEAPU16[$5 >> 1] | 0 | 0) | 0;
    $2 = $5;
    continue label$2;
   };
  }
  HEAP16[$1 >> 1] = $28anonymous_20namespace_29__offset_from_node_28_28anonymous_20namespace_29__heap_node_20const__29($3 | 0) | 0;
  HEAP32[(0 + 73168 | 0) >> 2] = $1;
 }
 
 function $28anonymous_20namespace_29__after_28_28anonymous_20namespace_29__heap_node__29($0) {
  $0 = $0 | 0;
  return $0 + ((HEAPU16[($0 + 2 | 0) >> 1] | 0) << 2 | 0) | 0 | 0;
 }
 
 function $28anonymous_20namespace_29__offset_from_node_28_28anonymous_20namespace_29__heap_node_20const__29($0) {
  $0 = $0 | 0;
  return (($0 - 73184 | 0) >>> 2 | 0) & 65535 | 0 | 0;
 }
 
 function $28anonymous_20namespace_29__getFirstAlignedNodeInHeap_28_29() {
  return 73196 | 0;
 }
 
 function strcmp($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = HEAPU8[$1 >> 0] | 0;
  label$1 : {
   $3 = HEAPU8[$0 >> 0] | 0;
   if (!$3) {
    break label$1
   }
   if (($3 | 0) != ($2 & 255 | 0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $2 = HEAPU8[($1 + 1 | 0) >> 0] | 0;
    $3 = HEAPU8[($0 + 1 | 0) >> 0] | 0;
    if (!$3) {
     break label$1
    }
    $1 = $1 + 1 | 0;
    $0 = $0 + 1 | 0;
    if (($3 | 0) == ($2 & 255 | 0 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  return $3 - ($2 & 255 | 0) | 0 | 0;
 }
 
 function __cxxabiv1____shim_type_info_____shim_type_info_28_29($0) {
  $0 = $0 | 0;
  return std__type_info___type_info_28_29($0 | 0) | 0 | 0;
 }
 
 function __cxxabiv1____shim_type_info__noop1_28_29_20const($0) {
  $0 = $0 | 0;
 }
 
 function __cxxabiv1____shim_type_info__noop2_28_29_20const($0) {
  $0 = $0 | 0;
 }
 
 function __cxxabiv1____fundamental_type_info_____fundamental_type_info_28_29($0) {
  $0 = $0 | 0;
  operator_20delete_28void__29(__cxxabiv1____shim_type_info_____shim_type_info_28_29($0 | 0) | 0 | 0);
 }
 
 function __cxxabiv1____class_type_info_____class_type_info_28_29($0) {
  $0 = $0 | 0;
  operator_20delete_28void__29(__cxxabiv1____shim_type_info_____shim_type_info_28_29($0 | 0) | 0 | 0);
 }
 
 function __cxxabiv1____si_class_type_info_____si_class_type_info_28_29($0) {
  $0 = $0 | 0;
  operator_20delete_28void__29(__cxxabiv1____shim_type_info_____shim_type_info_28_29($0 | 0) | 0 | 0);
 }
 
 function __cxxabiv1____fundamental_type_info__can_catch_28__cxxabiv1____shim_type_info_20const__2c_20void___29_20const($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, $1 | 0, 0 | 0) | 0 | 0;
 }
 
 function is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($2) {
    break label$1
   }
   return (HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) == (HEAP32[($1 + 4 | 0) >> 2] | 0 | 0) | 0;
  }
  label$2 : {
   if (($0 | 0) != ($1 | 0)) {
    break label$2
   }
   return 1 | 0;
  }
  return !(strcmp(std__type_info__name_5babi_v160006_5d_28_29_20const($0 | 0) | 0 | 0, std__type_info__name_5babi_v160006_5d_28_29_20const($1 | 0) | 0 | 0) | 0) | 0;
 }
 
 function std__type_info__name_5babi_v160006_5d_28_29_20const($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 4 | 0) >> 2] | 0 | 0;
 }
 
 function __cxxabiv1____class_type_info__can_catch_28__cxxabiv1____shim_type_info_20const__2c_20void___29_20const($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  $3 = __stack_pointer - 64 | 0;
  __stack_pointer = $3;
  $4 = 1;
  label$1 : {
   if (is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, $1 | 0, 0 | 0) | 0) {
    break label$1
   }
   $4 = 0;
   if (!$1) {
    break label$1
   }
   $4 = 0;
   $1 = __dynamic_cast($1 | 0, 68408 | 0, 68456 | 0, 0 | 0) | 0;
   if (!$1) {
    break label$1
   }
   __memset($3 + 12 | 0 | 0, 0 | 0, 52 | 0) | 0;
   HEAP32[($3 + 56 | 0) >> 2] = 1;
   HEAP32[($3 + 20 | 0) >> 2] = -1;
   HEAP32[($3 + 16 | 0) >> 2] = $0;
   HEAP32[($3 + 8 | 0) >> 2] = $1;
   FUNCTION_TABLE[HEAP32[((HEAP32[$1 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($1, $3 + 8 | 0, HEAP32[$2 >> 2] | 0, 1);
   label$2 : {
    $4 = HEAP32[($3 + 32 | 0) >> 2] | 0;
    if (($4 | 0) != (1 | 0)) {
     break label$2
    }
    HEAP32[$2 >> 2] = HEAP32[($3 + 24 | 0) >> 2] | 0;
   }
   $4 = ($4 | 0) == (1 | 0);
  }
  __stack_pointer = $3 + 64 | 0;
  return $4 | 0;
 }
 
 function __dynamic_cast($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $6 = 0, $5 = 0, $9 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_i32$3 = 0, wasm2js_i32$4 = 0, wasm2js_i32$5 = 0, wasm2js_i32$6 = 0, wasm2js_i32$7 = 0, wasm2js_i32$8 = 0;
  $4 = __stack_pointer - 64 | 0;
  __stack_pointer = $4;
  $5 = HEAP32[$0 >> 2] | 0;
  $6 = HEAP32[($5 + -4 | 0) >> 2] | 0;
  $5 = HEAP32[($5 + -8 | 0) >> 2] | 0;
  i64toi32_i32$1 = $4 + 32 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $4 + 40 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $4 + 48 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $4 + 55 | 0;
  i64toi32_i32$0 = 0;
  $9 = 0;
  HEAP8[i64toi32_i32$1 >> 0] = $9;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $9 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $9 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $9 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$1 = $4;
  i64toi32_i32$0 = 0;
  HEAP32[($4 + 24 | 0) >> 2] = 0;
  HEAP32[($4 + 28 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4 + 20 | 0) >> 2] = $3;
  HEAP32[($4 + 16 | 0) >> 2] = $1;
  HEAP32[($4 + 12 | 0) >> 2] = $0;
  HEAP32[($4 + 8 | 0) >> 2] = $2;
  $0 = $0 + $5 | 0;
  $3 = 0;
  label$1 : {
   label$2 : {
    if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($6 | 0, $2 | 0, 0 | 0) | 0)) {
     break label$2
    }
    HEAP32[($4 + 56 | 0) >> 2] = 1;
    FUNCTION_TABLE[HEAP32[((HEAP32[$6 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($6, $4 + 8 | 0, $0, $0, 1, 0);
    $3 = (HEAP32[($4 + 32 | 0) >> 2] | 0 | 0) == (1 | 0) ? $0 : 0;
    break label$1;
   }
   FUNCTION_TABLE[HEAP32[((HEAP32[$6 >> 2] | 0) + 24 | 0) >> 2] | 0 | 0]($6, $4 + 8 | 0, $0, 1, 0);
   label$3 : {
    switch (HEAP32[($4 + 44 | 0) >> 2] | 0 | 0) {
    case 0:
     $3 = (wasm2js_i32$0 = (wasm2js_i32$3 = (wasm2js_i32$6 = HEAP32[($4 + 28 | 0) >> 2] | 0, wasm2js_i32$7 = 0, wasm2js_i32$8 = (HEAP32[($4 + 40 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$8 ? wasm2js_i32$6 : wasm2js_i32$7), wasm2js_i32$4 = 0, wasm2js_i32$5 = (HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$5 ? wasm2js_i32$3 : wasm2js_i32$4), wasm2js_i32$1 = 0, wasm2js_i32$2 = (HEAP32[($4 + 48 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
     break label$1;
    case 1:
     break label$3;
    default:
     break label$1;
    };
   }
   label$5 : {
    if ((HEAP32[($4 + 32 | 0) >> 2] | 0 | 0) == (1 | 0)) {
     break label$5
    }
    if (HEAP32[($4 + 48 | 0) >> 2] | 0) {
     break label$1
    }
    if ((HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
    if ((HEAP32[($4 + 40 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
   }
   $3 = HEAP32[($4 + 24 | 0) >> 2] | 0;
  }
  __stack_pointer = $4 + 64 | 0;
  return $3 | 0;
 }
 
 function __cxxabiv1____class_type_info__process_found_base_class_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  label$1 : {
   $4 = HEAP32[($1 + 16 | 0) >> 2] | 0;
   if ($4) {
    break label$1
   }
   HEAP32[($1 + 36 | 0) >> 2] = 1;
   HEAP32[($1 + 24 | 0) >> 2] = $3;
   HEAP32[($1 + 16 | 0) >> 2] = $2;
   return;
  }
  label$2 : {
   label$3 : {
    if (($4 | 0) != ($2 | 0)) {
     break label$3
    }
    if ((HEAP32[($1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$2
    }
    HEAP32[($1 + 24 | 0) >> 2] = $3;
    return;
   }
   HEAP8[($1 + 54 | 0) >> 0] = 1;
   HEAP32[($1 + 24 | 0) >> 2] = 2;
   HEAP32[($1 + 36 | 0) >> 2] = (HEAP32[($1 + 36 | 0) >> 2] | 0) + 1 | 0;
  }
 }
 
 function __cxxabiv1____class_type_info__has_unambiguous_public_base_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_found_base_class_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0);
  }
 }
 
 function __cxxabiv1____si_class_type_info__has_unambiguous_public_base_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_found_base_class_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0);
   return;
  }
  $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($0, $1, $2, $3);
 }
 
 function __cxxabiv1____class_type_info__process_static_type_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_29_20const($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  HEAP8[($1 + 53 | 0) >> 0] = 1;
  label$1 : {
   if ((HEAP32[($1 + 4 | 0) >> 2] | 0 | 0) != ($3 | 0)) {
    break label$1
   }
   HEAP8[($1 + 52 | 0) >> 0] = 1;
   label$2 : {
    label$3 : {
     $3 = HEAP32[($1 + 16 | 0) >> 2] | 0;
     if ($3) {
      break label$3
     }
     HEAP32[($1 + 36 | 0) >> 2] = 1;
     HEAP32[($1 + 24 | 0) >> 2] = $4;
     HEAP32[($1 + 16 | 0) >> 2] = $2;
     if (($4 | 0) != (1 | 0)) {
      break label$1
     }
     if ((HEAP32[($1 + 48 | 0) >> 2] | 0 | 0) == (1 | 0)) {
      break label$2
     }
     break label$1;
    }
    label$4 : {
     if (($3 | 0) != ($2 | 0)) {
      break label$4
     }
     label$5 : {
      $3 = HEAP32[($1 + 24 | 0) >> 2] | 0;
      if (($3 | 0) != (2 | 0)) {
       break label$5
      }
      HEAP32[($1 + 24 | 0) >> 2] = $4;
      $3 = $4;
     }
     if ((HEAP32[($1 + 48 | 0) >> 2] | 0 | 0) != (1 | 0)) {
      break label$1
     }
     if (($3 | 0) == (1 | 0)) {
      break label$2
     }
     break label$1;
    }
    HEAP32[($1 + 36 | 0) >> 2] = (HEAP32[($1 + 36 | 0) >> 2] | 0) + 1 | 0;
   }
   HEAP8[($1 + 54 | 0) >> 0] = 1;
  }
 }
 
 function __cxxabiv1____class_type_info__process_static_type_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_29_20const($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if ((HEAP32[($1 + 4 | 0) >> 2] | 0 | 0) != ($2 | 0)) {
    break label$1
   }
   if ((HEAP32[($1 + 28 | 0) >> 2] | 0 | 0) == (1 | 0)) {
    break label$1
   }
   HEAP32[($1 + 28 | 0) >> 2] = $3;
  }
 }
 
 function __cxxabiv1____si_class_type_info__search_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_2c_20bool_29_20const($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $4 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_static_type_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0);
   return;
  }
  label$2 : {
   label$3 : {
    if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[$1 >> 2] | 0 | 0, $4 | 0) | 0)) {
     break label$3
    }
    label$4 : {
     label$5 : {
      if ((HEAP32[($1 + 16 | 0) >> 2] | 0 | 0) == ($2 | 0)) {
       break label$5
      }
      if ((HEAP32[($1 + 20 | 0) >> 2] | 0 | 0) != ($2 | 0)) {
       break label$4
      }
     }
     if (($3 | 0) != (1 | 0)) {
      break label$2
     }
     HEAP32[($1 + 32 | 0) >> 2] = 1;
     return;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $3;
    label$6 : {
     if ((HEAP32[($1 + 44 | 0) >> 2] | 0 | 0) == (4 | 0)) {
      break label$6
     }
     HEAP16[($1 + 52 | 0) >> 1] = 0;
     $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     FUNCTION_TABLE[HEAP32[((HEAP32[$0 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($0, $1, $2, $2, 1, $4);
     label$7 : {
      if (!(HEAPU8[($1 + 53 | 0) >> 0] | 0)) {
       break label$7
      }
      HEAP32[($1 + 44 | 0) >> 2] = 3;
      if (!(HEAPU8[($1 + 52 | 0) >> 0] | 0)) {
       break label$6
      }
      break label$2;
     }
     HEAP32[($1 + 44 | 0) >> 2] = 4;
    }
    HEAP32[($1 + 20 | 0) >> 2] = $2;
    HEAP32[($1 + 40 | 0) >> 2] = (HEAP32[($1 + 40 | 0) >> 2] | 0) + 1 | 0;
    if ((HEAP32[($1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$2
    }
    if ((HEAP32[($1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$2
    }
    HEAP8[($1 + 54 | 0) >> 0] = 1;
    return;
   }
   $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   FUNCTION_TABLE[HEAP32[((HEAP32[$0 >> 2] | 0) + 24 | 0) >> 2] | 0 | 0]($0, $1, $2, $3, $4);
  }
 }
 
 function __cxxabiv1____class_type_info__search_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_2c_20bool_29_20const($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $4 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_static_type_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0);
   return;
  }
  label$2 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[$1 >> 2] | 0 | 0, $4 | 0) | 0)) {
    break label$2
   }
   label$3 : {
    label$4 : {
     if ((HEAP32[($1 + 16 | 0) >> 2] | 0 | 0) == ($2 | 0)) {
      break label$4
     }
     if ((HEAP32[($1 + 20 | 0) >> 2] | 0 | 0) != ($2 | 0)) {
      break label$3
     }
    }
    if (($3 | 0) != (1 | 0)) {
     break label$2
    }
    HEAP32[($1 + 32 | 0) >> 2] = 1;
    return;
   }
   HEAP32[($1 + 20 | 0) >> 2] = $2;
   HEAP32[($1 + 32 | 0) >> 2] = $3;
   HEAP32[($1 + 40 | 0) >> 2] = (HEAP32[($1 + 40 | 0) >> 2] | 0) + 1 | 0;
   label$5 : {
    if ((HEAP32[($1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$5
    }
    if ((HEAP32[($1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$5
    }
    HEAP8[($1 + 54 | 0) >> 0] = 1;
   }
   HEAP32[($1 + 44 | 0) >> 2] = 4;
  }
 }
 
 function __cxxabiv1____si_class_type_info__search_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_2c_20bool_29_20const($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $5 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_static_type_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0, $4 | 0);
   return;
  }
  $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($0, $1, $2, $3, $4, $5);
 }
 
 function __cxxabiv1____class_type_info__search_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_2c_20bool_29_20const($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  label$1 : {
   if (!(is_equal_28std__type_info_20const__2c_20std__type_info_20const__2c_20bool_29($0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $5 | 0) | 0)) {
    break label$1
   }
   __cxxabiv1____class_type_info__process_static_type_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_29_20const($1 | 0, $1 | 0, $2 | 0, $3 | 0, $4 | 0);
  }
 }
 
 function __cxa_can_catch($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  HEAP32[($3 + 12 | 0) >> 2] = HEAP32[$2 >> 2] | 0;
  label$1 : {
   $0 = FUNCTION_TABLE[HEAP32[((HEAP32[$0 >> 2] | 0) + 16 | 0) >> 2] | 0 | 0]($0, $1, $3 + 12 | 0) | 0;
   if (!$0) {
    break label$1
   }
   HEAP32[$2 >> 2] = HEAP32[($3 + 12 | 0) >> 2] | 0;
  }
  __stack_pointer = $3 + 16 | 0;
  return $0 | 0;
 }
 
 function __cxa_is_pointer_type($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   return 0 | 0;
  }
  return (__dynamic_cast($0 | 0, 68408 | 0, 68552 | 0, 0 | 0) | 0 | 0) != (0 | 0) | 0;
 }
 
 function std__exception___exception_28_29($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function std__exception___exception_28_29_1($0) {
  $0 = $0 | 0;
  std__exception___exception_28_29($0 | 0) | 0;
  operator_20delete_28void__29($0 | 0);
 }
 
 function std__exception__what_28_29_20const($0) {
  $0 = $0 | 0;
  return 65630 | 0;
 }
 
 function std__bad_alloc__bad_alloc_28_29($0) {
  $0 = $0 | 0;
  $0 = std__exception__exception_5babi_v160006_5d_28_29($0 | 0) | 0;
  HEAP32[$0 >> 2] = 68956 + 8 | 0;
  return $0 | 0;
 }
 
 function std__exception__exception_5babi_v160006_5d_28_29($0) {
  $0 = $0 | 0;
  HEAP32[$0 >> 2] = 68976 + 8 | 0;
  return $0 | 0;
 }
 
 function std__bad_alloc___bad_alloc_28_29($0) {
  $0 = $0 | 0;
  std__exception___exception_28_29($0 | 0) | 0;
  operator_20delete_28void__29($0 | 0);
 }
 
 function std__bad_alloc__what_28_29_20const($0) {
  $0 = $0 | 0;
  return 65893 | 0;
 }
 
 function std__type_info___type_info_28_29($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function stackSave() {
  return __stack_pointer | 0;
 }
 
 function stackRestore($0) {
  $0 = $0 | 0;
  __stack_pointer = $0;
 }
 
 function stackAlloc($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = (__stack_pointer - $0 | 0) & -16 | 0;
  __stack_pointer = $1;
  return $1 | 0;
 }
 
 function dynCall_jiji(fptr, $0, $1, $1$hi, $2) {
  fptr = fptr | 0;
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = FUNCTION_TABLE[fptr | 0]($0, $1, i64toi32_i32$0, $2) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function legalstub$dynCall_jiji($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $17 = 0, $18 = 0, $6 = 0, $7 = 0, $9 = 0, $9$hi = 0, $12$hi = 0, $5 = 0, $5$hi = 0;
  $6 = $0;
  $7 = $1;
  i64toi32_i32$0 = 0;
  $9 = $2;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $17 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $17 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$0 = $9;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $17;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = dynCall_jiji($6 | 0, $7 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $4 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5 = i64toi32_i32$2;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($18 | 0);
  i64toi32_i32$2 = $5$hi;
  return $5 | 0;
 }
 
 function legalfunc$_embind_register_bigint($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $9 = 0, $12 = 0, $14 = 0;
  $5 = $0;
  $6 = $1;
  $7 = $2;
  i64toi32_i32$0 = $3$hi;
  $9 = $3;
  i64toi32_i32$2 = $3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $18 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $12 = $18;
  i64toi32_i32$1 = $4$hi;
  $14 = $4;
  i64toi32_i32$0 = $4;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $19 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $19 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  legalimport$_embind_register_bigint($5 | 0, $6 | 0, $7 | 0, $9 | 0, $12 | 0, $14 | 0, $19 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, var$8$hi = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, var$7$hi = 0, $49 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140 = $45;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 // EMSCRIPTEN_END_FUNCS
;
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, fmt_fp, pop_arg_long_double, sn_write, __emscripten_stdout_close, __stdio_write, __emscripten_stdout_seek, embind_init_builtin_28_29, std__exception___exception_28_29, __cxxabiv1____aligned_malloc_with_fallback_28unsigned_20long_29, __cxxabiv1____aligned_free_with_fallback_28void__29, abort, abort_message, __cxxabiv1____shim_type_info_____shim_type_info_28_29, __cxxabiv1____fundamental_type_info_____fundamental_type_info_28_29, __cxxabiv1____shim_type_info__noop1_28_29_20const, __cxxabiv1____shim_type_info__noop2_28_29_20const, __cxxabiv1____fundamental_type_info__can_catch_28__cxxabiv1____shim_type_info_20const__2c_20void___29_20const, __cxxabiv1____class_type_info_____class_type_info_28_29, __cxxabiv1____class_type_info__can_catch_28__cxxabiv1____shim_type_info_20const__2c_20void___29_20const, __cxxabiv1____class_type_info__search_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_2c_20bool_29_20const, __cxxabiv1____class_type_info__search_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_2c_20bool_29_20const, __cxxabiv1____class_type_info__has_unambiguous_public_base_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const, __cxxabiv1____si_class_type_info_____si_class_type_info_28_29, __cxxabiv1____si_class_type_info__search_above_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20void_20const__2c_20int_2c_20bool_29_20const, __cxxabiv1____si_class_type_info__search_below_dst_28__cxxabiv1____dynamic_cast_info__2c_20void_20const__2c_20int_2c_20bool_29_20const, __cxxabiv1____si_class_type_info__has_unambiguous_public_base_28__cxxabiv1____dynamic_cast_info__2c_20void__2c_20int_29_20const, std__bad_alloc___bad_alloc_28_29, std__bad_alloc__what_28_29_20const, std__exception___exception_28_29_1, std__exception__what_28_29_20const]);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  "__wasm_call_ctors": __wasm_call_ctors, 
  "__errno_location": __errno_location, 
  "runMain": runMain, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "malloc": dlmalloc, 
  "__getTypeName": __getTypeName, 
  "_embind_initialize_bindings": _embind_initialize_bindings, 
  "free": dlfree, 
  "setThrew": setThrew, 
  "setTempRet0": setTempRet0, 
  "stackSave": stackSave, 
  "stackRestore": stackRestore, 
  "stackAlloc": stackAlloc, 
  "__cxa_free_exception": __cxa_free_exception, 
  "__cxa_increment_exception_refcount": __cxa_increment_exception_refcount, 
  "__cxa_decrement_exception_refcount": __cxa_decrement_exception_refcount, 
  "__cxa_can_catch": __cxa_can_catch, 
  "__cxa_is_pointer_type": __cxa_is_pointer_type, 
  "__start_em_asm": {
   get value() {
    return global$2;
   }, 
   set value(_global$2) {
    global$2 = _global$2;
   }
  }, 
  "__stop_em_asm": {
   get value() {
    return global$3;
   }, 
   set value(_global$3) {
    global$3 = _global$3;
   }
  }, 
  "dynCall_jiji": legalstub$dynCall_jiji
 };
}

  return asmFunc(info);
}

)(info);
  },

  instantiate: /** @suppress{checkTypes} */ function(binary, info) {
    return {
      then: function(ok) {
        var module = new WebAssembly.Module(binary);
        ok({
          'instance': new WebAssembly.Instance(module, info)
        });
      }
    };
  },

  RuntimeError: Error
};

// We don't need to actually download a wasm binary, mark it as present but empty.
wasmBinary = [];
// end include: wasm2js.js
if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implemenation here for now.
    abort(text);
  }
}

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

// In non-standalone/normal mode, we create the memory here.
// include: runtime_init_memory.js
// Create the wasm memory. (Note: this only applies if IMPORTED_MEMORY is defined)

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

assert(INITIAL_MEMORY >= 65536, 'INITIAL_MEMORY should be larger than STACK_SIZE, was ' + INITIAL_MEMORY + '! (STACK_SIZE=' + 65536 + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_MEMORY / 65536,
      // In theory we should not need to emit the maximum if we want "unlimited"
      // or 4GB of memory, but VMs error on that atm, see
      // https://github.com/emscripten-core/emscripten/issues/14130
      // And in the pthreads case we definitely need to emit a maximum. So
      // always emit one.
      'maximum': 16777216 / 65536,
    });
  }

updateMemoryViews();

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_MEMORY = wasmMemory.buffer.byteLength;
// end include: runtime_init_memory.js

// include: runtime_stack_check.js
// end include: runtime_stack_check.js
// include: runtime_assertions.js
// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */
var isDataURI = (filename) => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');
// end include: URIUtils.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'PyVM.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  wasmBinaryFile = new URL('PyVM.wasm', import.meta.url).href;
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  var binary = tryParseAsDataURI(file);
  if (binary) {
    return binary;
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary
      && !isDataURI(binaryFile)
      && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(() => getBinarySync(binaryFile));
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then((binary) => {
    return WebAssembly.instantiate(binary, imports);
  }).then((instance) => {
    return instance;
  }).then(receiver, (reason) => {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err(`wasm streaming compile failed: ${reason}`);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmTable = wasmExports['__indirect_function_table'];
    

    addOnInit(wasmExports['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
// end include: runtime_debug.js
// === Body ===

var ASM_CONSTS = {
  69224: ($0, $1) => { Module.cursor = Module.cursor || {}; setValue($0, Module.cursor.x || 0); setValue($1, Module.cursor.y || 0); },  
 69337: ($0, $1, $2, $3) => { var msg = Module.UTF8ToString($0); var x = $1; var y = $2; var invert = $3; var zero = 0x0000; Module.debug.drawText(msg, x, y, invert, 1); console.log(msg); },  
 69499: ($0, $1, $2, $3, $4) => { console.log("Debug_Printf - EM_ASM", $0, $1, $2, $3, Module.UTF8ToString($4)); document.dispatchEvent(new CustomEvent("onCall", { detail: { function: "Debug_Printf", args: { x: $0, y: $1, invert: $2, zero: $3, output: Module.UTF8ToString($4) } } })); },  
 69754: ($0, $1) => { Module.cursor = Module.cursor || {}; const msg = Module.UTF8ToString($0); const invert = $1; const x = Module.cursor.x || 0; const y = Module.cursor.y || 0; const scale = 2; Module.debug.drawText(msg, x, y, invert, scale); document.dispatchEvent(new CustomEvent("onCall", { detail: { function: "Debug_PrintString", args: { string: Module.UTF8ToString($0), invert: $1 } } })); },  
 70134: ($0, $1) => { Module.cursor = Module.cursor || {}; Module.cursor.x = $0; Module.cursor.y = $1; console.log(Module.cursor); },  
 70247: ($0) => { const size = Module.width * Module.height; var vramArray = new Uint16Array(Module.vram.buffer, 0, size); vramArray.fill($0); document.dispatchEvent(new CustomEvent("onCall", { detail: { function: "fillScreen", args: { color: $0 } } })); },  
 70488: ($0, $1, $2) => { var x = $0; var y = $1; var color = $2; var width = Module.width; var height = Module.height; if (x >= 0 && x < width && y >= 0 && y < height) { var index = y * width + x; Module.vram[index] = color; } },  
 70694: ($0) => { console.log("calcInit - EM_ASM", $0); document.dispatchEvent(new CustomEvent("calcInit", { detail: `test EM_ASM ${$0}` })); },  
 70822: () => { console.log("calcEnd - EM_ASM"); document.dispatchEvent(new CustomEvent("calcEnd", { detail: `test EM_ASM` })); },  
 70938: () => { document.dispatchEvent(new CustomEvent("onCall", { detail: { function: "LCD_Refresh", args: {} } })); },  
 71044: ($0, $1) => { var key1Ptr = $0; var key2Ptr = $1; setValue(key1Ptr, 1, 'i32'); setValue(key2Ptr, 1, 'i32'); },  
 71142: () => { Module.fileExists = function(path) { return FS.analyzePath(path).exists; }; },  
 71222: ($0) => { return Module.fileExists(Pointer_stringify($0)); },  
 71275: ($0) => { var flags = ($0&1?"r":"")+($0&2?"w":"")+($03&4?"+":""); var file = FS.open(Pointer_stringify($0), flags); return file.fd; }
};


// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }

  var listenOnce = (object, event, func) => {
      object.addEventListener(event, func, { 'once': true });
    };
  /** @param {Object=} elements */
  var autoResumeAudioContext = (ctx, elements) => {
      if (!elements) {
        elements = [document, document.getElementById('canvas')];
      }
      ['keydown', 'mousedown', 'touchstart'].forEach((event) => {
        elements.forEach((element) => {
          if (element) {
            listenOnce(element, event, () => {
              if (ctx.state === 'suspended') ctx.resume();
            });
          }
        });
      });
    };

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };

  var dynCallLegacy = (sig, ptr, args) => {
      var f = Module['dynCall_' + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    };
  
  var wasmTableMirror = [];
  
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };
  
  /** @param {Object=} args */
  var dynCall = (sig, ptr, args) => {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.includes('j')) {
        return dynCallLegacy(sig, ptr, args);
      }
      var rtn = getWasmTableEntry(ptr).apply(null, args);
      return rtn;
    };

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = Module['noExitRuntime'] || true;

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var exceptionCaught =  [];
  
  
  var uncaughtExceptionCount = 0;
  var ___cxa_begin_catch = (ptr) => {
      var info = new ExceptionInfo(ptr);
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(info);
      ___cxa_increment_exception_refcount(info.excPtr);
      return info.get_exception_ptr();
    };

  var exceptionLast = 0;
  
  /** @constructor */
  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 24;
  
      this.set_type = function(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      };
  
      this.set_caught = function(caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(12))>>0)] = caught;
      };
  
      this.get_caught = function() {
        return HEAP8[(((this.ptr)+(12))>>0)] != 0;
      };
  
      this.set_rethrown = function(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
      };
  
      this.get_rethrown = function() {
        return HEAP8[(((this.ptr)+(13))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[((this.excPtr)>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      };
    }
  
  var ___resumeException = (ptr) => {
      if (!exceptionLast) {
        exceptionLast = ptr;
      }
      throw exceptionLast;
    };
  
  
  var findMatchingCatch = (args) => {
      var thrown =
        exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var arg in args) {
        var caughtType = args[arg];
  
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    };
  var ___cxa_find_matching_catch_3 = (arg0) => findMatchingCatch([arg0]);

  
  
  var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw exceptionLast;
    };

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
  basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },
  join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },
  join2:(l, r) => {
        return PATH.normalize(l + '/' + r);
      },
  };
  
  var initRandomFill = () => {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        return (view) => crypto.getRandomValues(view);
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort("initRandomDevice");
    };
  var randomFill = (view) => {
      // Lazily init on the first invocation.
      return (randomFill = initRandomFill())(view);
    };
  
  
  
  var PATH_FS = {
  resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },
  relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
  };
  
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (typeof window != 'undefined' &&
          typeof window.prompt == 'function') {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else if (typeof readline == 'function') {
          // Command line.
          result = readline();
          if (result !== null) {
            result += '\n';
          }
        }
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  },
  };
  
  
  var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
      return address;
    };
  
  var alignMemory = (size, alignment) => {
      return Math.ceil(size / alignment) * alignment;
    };
  var mmapAlloc = (size) => {
      abort();
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          throw FS.genericErrors[44];
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  readdir(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  /** @param {boolean=} noRunDep */
  var asyncLoad = (url, onload, onerror, noRunDep) => {
      var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw `Loading data file "${url}" failed.`;
        }
      });
      if (dep) addRunDependency(dep);
    };
  
  
  var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      return FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
  
  var preloadPlugins = Module['preloadPlugins'] || [];
  var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin['canHandle'](fullname)) {
          plugin['handle'](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      function processData(byteArray) {
        function finish(byteArray) {
          if (preFinish) preFinish();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
          }
          if (onload) onload();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          if (onerror) onerror();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url, (byteArray) => processData(byteArray), onerror);
      } else {
        processData(url);
      }
    };
  
  var FS_modeStringToFlags = (str) => {
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  ErrnoError:null,
  genericErrors:{
  },
  filesystems:null,
  syncFSRequests:0,
  lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the absolute path
        var parts = path.split('/').filter((p) => !!p);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get() { return this.node; },
              /** @this {FS.FSStream} */
              set(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
  mount(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  create(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode);
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid);
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },
  open(path, flags, mode) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  munmap:(stream) => 0,
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },
  ensureErrnoError() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          // We set the `name` property to be able to identify `FS.ErrnoError`
          // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
          // - when using PROXYFS, an error can come from an underlying FS
          // as different FS objects have their own FS.ErrnoError each,
          // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
          // we'll use the reliable test `err.name == "ErrnoError"` instead
          this.name = 'ErrnoError';
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },
  staticInit() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },
  quit() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  };
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var SYSCALLS = {
  DEFAULT_POLLMASK:5,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },
  doStat(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAP32[(((buf)+(12))>>2)] = stat.uid;
        HEAP32[(((buf)+(16))>>2)] = stat.gid;
        HEAP32[(((buf)+(20))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(24))>>2)] = tempI64[0],HEAP32[(((buf)+(28))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        (tempI64 = [Math.floor(atime / 1000)>>>0,(tempDouble=Math.floor(atime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000;
        (tempI64 = [Math.floor(mtime / 1000)>>>0,(tempDouble=Math.floor(mtime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000;
        (tempI64 = [Math.floor(ctime / 1000)>>>0,(tempDouble=Math.floor(ctime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        return 0;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  varargs:undefined,
  get() {
        // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
        var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
        SYSCALLS.varargs += 4;
        return ret;
      },
  getp() { return SYSCALLS.get() },
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  };
  function ___syscall_fstat64(fd, buf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~6400);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var __embind_register_bigint = (primitiveType, name, size, minRange, maxRange) => {};

  var embind_init_charCodes = () => {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    };
  var embind_charCodes;
  var readLatin1String = (ptr) => {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    };
  
  var awaitingDependencies = {
  };
  
  var registeredTypes = {
  };
  
  var typeDependencies = {
  };
  
  var BindingError;
  var throwBindingError = (message) => { throw new BindingError(message); };
  
  
  
  
  var InternalError;
  var throwInternalError = (message) => { throw new InternalError(message); };
  var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(() => {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    };
  /** @param {Object=} options */
  function sharedRegisterType(rawType, registeredInstance, options = {}) {
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(`type "${name}" must have a positive integer typeid pointer`);
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError(`Cannot register type '${name}' twice`);
        }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach((cb) => cb());
      }
    }
  /** @param {Object=} options */
  function registerType(rawType, registeredInstance, options = {}) {
      if (!('argPackAdvance' in registeredInstance)) {
        throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
      return sharedRegisterType(rawType, registeredInstance, options);
    }
  
  var GenericWireTypeSize = 8;
  /** @suppress {globalThis} */
  var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
      name = readLatin1String(name);
      registerType(rawType, {
          name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': GenericWireTypeSize,
          'readValueFromPointer': function(pointer) {
              return this['fromWireType'](HEAPU8[pointer]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    };

  function handleAllocatorInit() {
      Object.assign(HandleAllocator.prototype, /** @lends {HandleAllocator.prototype} */ {
        get(id) {
          return this.allocated[id];
        },
        has(id) {
          return this.allocated[id] !== undefined;
        },
        allocate(handle) {
          var id = this.freelist.pop() || this.allocated.length;
          this.allocated[id] = handle;
          return id;
        },
        free(id) {
          // Set the slot to `undefined` rather than using `delete` here since
          // apparently arrays with holes in them can be less efficient.
          this.allocated[id] = undefined;
          this.freelist.push(id);
        }
      });
    }
  /** @constructor */
  function HandleAllocator() {
      // Reserve slot 0 so that 0 is always an invalid handle
      this.allocated = [undefined];
      this.freelist = [];
    }
  var emval_handles = new HandleAllocator();;
  var __emval_decref = (handle) => {
      if (handle >= emval_handles.reserved && 0 === --emval_handles.get(handle).refcount) {
        emval_handles.free(handle);
      }
    };
  
  
  
  var count_emval_handles = () => {
      var count = 0;
      for (var i = emval_handles.reserved; i < emval_handles.allocated.length; ++i) {
        if (emval_handles.allocated[i] !== undefined) {
          ++count;
        }
      }
      return count;
    };
  
  var init_emval = () => {
      // reserve some special values. These never get de-allocated.
      // The HandleAllocator takes care of reserving zero.
      emval_handles.allocated.push(
        {value: undefined},
        {value: null},
        {value: true},
        {value: false},
      );
      emval_handles.reserved = emval_handles.allocated.length
      Module['count_emval_handles'] = count_emval_handles;
    };
  var Emval = {
  toValue:(handle) => {
        if (!handle) {
            throwBindingError('Cannot use deleted val. handle = ' + handle);
        }
        return emval_handles.get(handle).value;
      },
  toHandle:(value) => {
        switch (value) {
          case undefined: return 1;
          case null: return 2;
          case true: return 3;
          case false: return 4;
          default:{
            return emval_handles.allocate({refcount: 1, value: value});
          }
        }
      },
  };
  
  
  
  /** @suppress {globalThis} */
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAP32[((pointer)>>2)]);
    }
  var __embind_register_emval = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        'fromWireType': (handle) => {
          var rv = Emval.toValue(handle);
          __emval_decref(handle);
          return rv;
        },
        'toWireType': (destructors, value) => Emval.toHandle(value),
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': simpleReadValueFromPointer,
        destructorFunction: null, // This type does not need a destructor
  
        // TODO: do we need a deleteObject here?  write a test where
        // emval is passed into JS via an interface
      });
    };

  var embindRepr = (v) => {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    };
  
  var floatReadValueFromPointer = (name, width) => {
      switch (width) {
          case 4: return function(pointer) {
              return this['fromWireType'](HEAPF32[((pointer)>>2)]);
          };
          case 8: return function(pointer) {
              return this['fromWireType'](HEAPF64[((pointer)>>3)]);
          };
          default:
              throw new TypeError(`invalid float width (${width}): ${name}`);
      }
    };
  
  
  var __embind_register_float = (rawType, name, size) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        'fromWireType': (value) => value,
        'toWireType': (destructors, value) => {
          // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue
          return value;
        },
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': floatReadValueFromPointer(name, size),
        destructorFunction: null, // This type does not need a destructor
      });
    };

  
  var integerReadValueFromPointer = (name, width, signed) => {
      // integers are quite common, so generate very specialized functions
      switch (width) {
          case 1: return signed ?
              (pointer) => HEAP8[((pointer)>>0)] :
              (pointer) => HEAPU8[((pointer)>>0)];
          case 2: return signed ?
              (pointer) => HEAP16[((pointer)>>1)] :
              (pointer) => HEAPU16[((pointer)>>1)]
          case 4: return signed ?
              (pointer) => HEAP32[((pointer)>>2)] :
              (pointer) => HEAPU32[((pointer)>>2)]
          default:
              throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
  
  
  /** @suppress {globalThis} */
  var __embind_register_integer = (primitiveType, name, size, minRange, maxRange) => {
      name = readLatin1String(name);
      // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come
      // out as 'i32 -1'. Always treat those as max u32.
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
  
      var fromWireType = (value) => value;
  
      if (minRange === 0) {
        var bitshift = 32 - 8*size;
        fromWireType = (value) => (value << bitshift) >>> bitshift;
      }
  
      var isUnsignedType = (name.includes('unsigned'));
      var checkAssertions = (value, toTypeName) => {
      }
      var toWireType;
      if (isUnsignedType) {
        toWireType = function(destructors, value) {
          checkAssertions(value, this.name);
          return value >>> 0;
        }
      } else {
        toWireType = function(destructors, value) {
          checkAssertions(value, this.name);
          // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue
          return value;
        }
      }
      registerType(primitiveType, {
        name,
        'fromWireType': fromWireType,
        'toWireType': toWireType,
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': integerReadValueFromPointer(name, size, minRange !== 0),
        destructorFunction: null, // This type does not need a destructor
      });
    };

  
  var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
        var size = HEAPU32[((handle)>>2)];
        var data = HEAPU32[(((handle)+(4))>>2)];
        return new TA(HEAP8.buffer, data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        'fromWireType': decodeMemoryView,
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': decodeMemoryView,
      }, {
        ignoreDuplicateRegistrations: true,
      });
    };

  
  
  /** @suppress {globalThis} */
  function readPointer(pointer) {
      return this['fromWireType'](HEAPU32[((pointer)>>2)]);
    }
  
  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  
  
  
  
  var __embind_register_std_string = (rawType, name) => {
      name = readLatin1String(name);
      var stdStringIsUTF8
      //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = (name === "std::string");
  
      registerType(rawType, {
        name,
        // For some method names we use string keys here since they are part of
        // the public/external API and/or used by the runtime-generated code.
        'fromWireType'(value) {
          var length = HEAPU32[((value)>>2)];
          var payload = value + 4;
  
          var str;
          if (stdStringIsUTF8) {
            var decodeStartPtr = payload;
            // Looping here to support possible embedded '0' bytes
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = payload + i;
              if (i == length || HEAPU8[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[payload + i]);
            }
            str = a.join('');
          }
  
          _free(value);
  
          return str;
        },
        'toWireType'(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
  
          var length;
          var valueIsOfTypeString = (typeof value == 'string');
  
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError('Cannot pass non-string to std::string');
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            length = lengthBytesUTF8(value);
          } else {
            length = value.length;
          }
  
          // assumes 4-byte alignment
          var base = _malloc(4 + length + 1);
          var ptr = base + 4;
          HEAPU32[((base)>>2)] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                }
                HEAPU8[ptr + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + i] = value[i];
              }
            }
          }
  
          if (destructors !== null) {
            destructors.push(_free, base);
          }
          return base;
        },
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        },
      });
    };

  
  
  
  var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;;
  var UTF16ToString = (ptr, maxBytesToRead) => {
      var endPtr = ptr;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.
      // Also, use the length info to avoid running tiny strings through
      // TextDecoder, since .subarray() allocates garbage.
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
      endPtr = idx << 1;
  
      if (endPtr - ptr > 32 && UTF16Decoder)
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  
      // Fallback: decode without UTF16Decoder
      var str = '';
  
      // If maxBytesToRead is not passed explicitly, it will be undefined, and the
      // for-loop's condition will always evaluate to true. The loop is then
      // terminated on the first null char.
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
        if (codeUnit == 0) break;
        // fromCharCode constructs a character from a UTF-16 code unit, so we can
        // pass the UTF16 string right through.
        str += String.fromCharCode(codeUnit);
      }
  
      return str;
    };
  
  var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2; // Null terminator.
      var startPtr = outPtr;
      var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
        HEAP16[((outPtr)>>1)] = codeUnit;
        outPtr += 2;
      }
      // Null-terminate the pointer to the HEAP.
      HEAP16[((outPtr)>>1)] = 0;
      return outPtr - startPtr;
    };
  
  var lengthBytesUTF16 = (str) => {
      return str.length*2;
    };
  
  var UTF32ToString = (ptr, maxBytesToRead) => {
      var i = 0;
  
      var str = '';
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
        if (utf32 == 0) break;
        ++i;
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        if (utf32 >= 0x10000) {
          var ch = utf32 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        } else {
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    };
  
  var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }
      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
        }
        HEAP32[((outPtr)>>2)] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }
      // Null-terminate the pointer to the HEAP.
      HEAP32[((outPtr)>>2)] = 0;
      return outPtr - startPtr;
    };
  
  var lengthBytesUTF32 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
        len += 4;
      }
  
      return len;
    };
  var __embind_register_std_wstring = (rawType, charSize, name) => {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = () => HEAPU16;
        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = () => HEAPU32;
        shift = 2;
      }
      registerType(rawType, {
        name,
        'fromWireType': (value) => {
          // Code mostly taken from _embind_register_std_string fromWireType
          var length = HEAPU32[((value)>>2)];
          var HEAP = getHeap();
          var str;
  
          var decodeStartPtr = value + 4;
          // Looping here to support possible embedded '0' bytes
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || HEAP[currentBytePtr >> shift] == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
  
          _free(value);
  
          return str;
        },
        'toWireType': (destructors, value) => {
          if (!(typeof value == 'string')) {
            throwBindingError(`Cannot pass non-string to C++ string type ${name}`);
          }
  
          // assumes 4-byte alignment
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length >> shift;
  
          encodeString(value, ptr + 4, length + charSize);
  
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        'argPackAdvance': GenericWireTypeSize,
        'readValueFromPointer': simpleReadValueFromPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    };

  
  var __embind_register_void = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true, // void return values can be optimized out sometimes
        name,
        'argPackAdvance': 0,
        'fromWireType': () => undefined,
        // TODO: assert if anything else is given?
        'toWireType': (destructors, o) => undefined,
      });
    };

  var _abort = () => {
      abort('');
    };

  var readEmAsmArgsArray = [];
  var readEmAsmArgs = (sigPtr, buf) => {
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      while (ch = HEAPU8[sigPtr++]) {
        // Floats are always passed as doubles, so all types except for 'i'
        // are 8 bytes and require alignment.
        var wide = (ch != 105);
        wide &= (ch != 112);
        buf += wide && (buf % 8) ? 4 : 0;
        readEmAsmArgsArray.push(
          // Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
          ch == 112 ? HEAPU32[((buf)>>2)] :
          ch == 105 ?
            HEAP32[((buf)>>2)] :
            HEAPF64[((buf)>>3)]
        );
        buf += wide ? 8 : 4;
      }
      return readEmAsmArgsArray;
    };
  var runEmAsmFunction = (code, sigPtr, argbuf) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    };
  var _emscripten_asm_const_int = (code, sigPtr, argbuf) => {
      return runEmAsmFunction(code, sigPtr, argbuf);
    };

  var _emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);

  var getHeapMax = () =>
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      16777216;
  
  var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow(pages); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = growMemory(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    };

  var _emscripten_run_script = (ptr) => {
      eval(UTF8ToString(ptr));
    };

  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }


  var getCFunc = (ident) => {
      var func = Module['_' + ident]; // closure exported function
      return func;
    };
  
  var writeArrayToMemory = (array, buffer) => {
      HEAP8.set(array, buffer);
    };
  
  
  var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
  
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  var ccall = (ident, returnType, argTypes, args, opts) => {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
            ret = stringToUTF8OnStack(str);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
  
      ret = onDone(ret);
      return ret;
    };

  
  
    /**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */
  var cwrap = (ident, returnType, argTypes, opts) => {
      // When the function takes numbers and returns a number, we can just return
      // the original function
      var numericArgs = !argTypes || argTypes.every((type) => type === 'number' || type === 'boolean');
      var numericRet = returnType !== 'string';
      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }
      return function() {
        return ccall(ident, returnType, argTypes, arguments, opts);
      }
    };


  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.staticInit();;
embind_init_charCodes();
BindingError = Module['BindingError'] = class BindingError extends Error { constructor(message) { super(message); this.name = 'BindingError'; }};
InternalError = Module['InternalError'] = class InternalError extends Error { constructor(message) { super(message); this.name = 'InternalError'; }};
handleAllocatorInit();
init_emval();;
var wasmImports = {
  /** @export */
  __cxa_begin_catch: ___cxa_begin_catch,
  /** @export */
  __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
  /** @export */
  __cxa_throw: ___cxa_throw,
  /** @export */
  __syscall_fstat64: ___syscall_fstat64,
  /** @export */
  __syscall_lstat64: ___syscall_lstat64,
  /** @export */
  __syscall_newfstatat: ___syscall_newfstatat,
  /** @export */
  __syscall_stat64: ___syscall_stat64,
  /** @export */
  _embind_register_bigint: __embind_register_bigint,
  /** @export */
  _embind_register_bool: __embind_register_bool,
  /** @export */
  _embind_register_emval: __embind_register_emval,
  /** @export */
  _embind_register_float: __embind_register_float,
  /** @export */
  _embind_register_integer: __embind_register_integer,
  /** @export */
  _embind_register_memory_view: __embind_register_memory_view,
  /** @export */
  _embind_register_std_string: __embind_register_std_string,
  /** @export */
  _embind_register_std_wstring: __embind_register_std_wstring,
  /** @export */
  _embind_register_void: __embind_register_void,
  /** @export */
  abort: _abort,
  /** @export */
  emscripten_asm_const_int: _emscripten_asm_const_int,
  /** @export */
  emscripten_memcpy_js: _emscripten_memcpy_js,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  emscripten_run_script: _emscripten_run_script,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_ii: invoke_ii,
  /** @export */
  invoke_v: invoke_v,
  /** @export */
  invoke_vi: invoke_vi,
  /** @export */
  invoke_vii: invoke_vii,
  /** @export */
  memory: wasmMemory
};
var wasmExports = createWasm();
var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports['__wasm_call_ctors'])();
var ___errno_location = () => (___errno_location = wasmExports['__errno_location'])();
var _runMain = Module['_runMain'] = () => (_runMain = Module['_runMain'] = wasmExports['runMain'])();
var _malloc = Module['_malloc'] = (a0) => (_malloc = Module['_malloc'] = wasmExports['malloc'])(a0);
var ___getTypeName = (a0) => (___getTypeName = wasmExports['__getTypeName'])(a0);
var __embind_initialize_bindings = Module['__embind_initialize_bindings'] = () => (__embind_initialize_bindings = Module['__embind_initialize_bindings'] = wasmExports['_embind_initialize_bindings'])();
var _free = Module['_free'] = (a0) => (_free = Module['_free'] = wasmExports['free'])(a0);
var _setThrew = (a0, a1) => (_setThrew = wasmExports['setThrew'])(a0, a1);
var setTempRet0 = (a0) => (setTempRet0 = wasmExports['setTempRet0'])(a0);
var stackSave = () => (stackSave = wasmExports['stackSave'])();
var stackRestore = (a0) => (stackRestore = wasmExports['stackRestore'])(a0);
var stackAlloc = (a0) => (stackAlloc = wasmExports['stackAlloc'])(a0);
var ___cxa_free_exception = (a0) => (___cxa_free_exception = wasmExports['__cxa_free_exception'])(a0);
var ___cxa_increment_exception_refcount = (a0) => (___cxa_increment_exception_refcount = wasmExports['__cxa_increment_exception_refcount'])(a0);
var ___cxa_decrement_exception_refcount = (a0) => (___cxa_decrement_exception_refcount = wasmExports['__cxa_decrement_exception_refcount'])(a0);
var ___cxa_can_catch = (a0, a1, a2) => (___cxa_can_catch = wasmExports['__cxa_can_catch'])(a0, a1, a2);
var ___cxa_is_pointer_type = (a0) => (___cxa_is_pointer_type = wasmExports['__cxa_is_pointer_type'])(a0);
var dynCall_jiji = Module['dynCall_jiji'] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module['dynCall_jiji'] = wasmExports['dynCall_jiji'])(a0, a1, a2, a3, a4);

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

// include: base64Utils.js
// Converts a string of base64 into a byte array (Uint8Array).
function intArrayFromBase64(s) {

  var decoded = atob(s);
  var bytes = new Uint8Array(decoded.length);
  for (var i = 0 ; i < decoded.length ; ++i) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}
// end include: base64Utils.js
Module['run'] = run;
Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['UTF8ToString'] = UTF8ToString;


var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function run() {

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js
// include: C:\Users\Phoebe\Documents\git\CPPythonVM\web\wasm\hello.post.js
/// <reference types="emscripten" />

function drawText(msg, x, y, invert = false, scale = 1) {
  x = x * 6;
  y = y * 12;
  // leading zeroes
  const pre_color = invert ? 0x0000 : 0xffff;

  for (var row = 0; row < 12 * scale; row++) {
    for (var col = 0; col < 1 * scale; col++) {
      var index = (y * scale + row) * Module.width + x * scale + col;
      Module.vram[index] = pre_color;
    }
  }

  // for each character c
  for (var i = 0; i < msg.length; i++) {
    var letter = globalThis?.fonts?.getLetter(msg.charAt(i));
    if (letter) {
      for (var row = 0; row < 12 * scale; row++) {
        for (var col = 0; col < 6 * scale; col++) {
          var pixelValue =
            Math.floor(col / scale) == 5
              ? 0
              : letter[Math.floor(row / scale) * 5 + Math.floor(col / scale)];
          var color = invert
            ? pixelValue
              ? 0xffff
              : 0x0000
            : pixelValue
            ? 0x0000
            : 0xffff;
          var index =
            (y * scale + row) * Module.width +
            ((x + 1) * scale + col + i * scale * 6);
          Module.vram[index] = color;
        }
      }
    }
  }

  // ending zeroes
  for (var row = 0; row < 12 * scale; row++) {
    for (var col = 0; col < 1 * scale; col++) {
      var index =
        (y * scale + row) * Module.width +
        (x * scale + 1 * scale + msg.length * 6 * scale + col);
      Module.vram[index] = pre_color;
    }
  }
}

Module["onRuntimeInitialized"] = function () {
  document.dispatchEvent(new Event("emReady"));

  Module["add"] = cwrap("add", "number", ["number", "number"]);
  // Debug_printf(int x, int y, const char *message)
  Module["Debug_printf"] = cwrap("Debug_printf", null, [
    "number",
    "number",
    "string",
  ]);
};

Module["debug"] = Module["debug"] || {};

Module["debug"]["drawText"] = drawText;

// end include: C:\Users\Phoebe\Documents\git\CPPythonVM\web\wasm\hello.post.js
// include: C:\Users\Phoebe\Documents\git\CPPythonVM\web\wasm\hello.post.js
/// <reference types="emscripten" />

function drawText(msg, x, y, invert = false, scale = 1) {
  x = x * 6;
  y = y * 12;
  // leading zeroes
  const pre_color = invert ? 0x0000 : 0xffff;

  for (var row = 0; row < 12 * scale; row++) {
    for (var col = 0; col < 1 * scale; col++) {
      var index = (y * scale + row) * Module.width + x * scale + col;
      Module.vram[index] = pre_color;
    }
  }

  // for each character c
  for (var i = 0; i < msg.length; i++) {
    var letter = globalThis?.fonts?.getLetter(msg.charAt(i));
    if (letter) {
      for (var row = 0; row < 12 * scale; row++) {
        for (var col = 0; col < 6 * scale; col++) {
          var pixelValue =
            Math.floor(col / scale) == 5
              ? 0
              : letter[Math.floor(row / scale) * 5 + Math.floor(col / scale)];
          var color = invert
            ? pixelValue
              ? 0xffff
              : 0x0000
            : pixelValue
            ? 0x0000
            : 0xffff;
          var index =
            (y * scale + row) * Module.width +
            ((x + 1) * scale + col + i * scale * 6);
          Module.vram[index] = color;
        }
      }
    }
  }

  // ending zeroes
  for (var row = 0; row < 12 * scale; row++) {
    for (var col = 0; col < 1 * scale; col++) {
      var index =
        (y * scale + row) * Module.width +
        (x * scale + 1 * scale + msg.length * 6 * scale + col);
      Module.vram[index] = pre_color;
    }
  }
}

Module["onRuntimeInitialized"] = function () {
  document.dispatchEvent(new Event("emReady"));

  Module["add"] = cwrap("add", "number", ["number", "number"]);
  // Debug_printf(int x, int y, const char *message)
  Module["Debug_printf"] = cwrap("Debug_printf", null, [
    "number",
    "number",
    "string",
  ]);
};

Module["debug"] = Module["debug"] || {};

Module["debug"]["drawText"] = drawText;

// end include: C:\Users\Phoebe\Documents\git\CPPythonVM\web\wasm\hello.post.js


  return moduleArg.ready
}

);
})();
export default Module;