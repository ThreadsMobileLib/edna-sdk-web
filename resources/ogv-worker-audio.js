(()=>{var e={506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},913:e=>{function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},754:e=>{function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},205:(e,t,o)=>{var r=o(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},585:(e,t,o)=>{var r=o(8).default,s=o(506);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},489:e=>{function t(o,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},445:(e,t,o)=>{"use strict";var r=o(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o(575)),n=r(o(913)),i=r(o(539)),u="1.8.9-20220406232920-cb5f7ff",a={OGVDemuxerOggW:"ogv-demuxer-ogg-wasm.js",OGVDemuxerWebMW:"ogv-demuxer-webm-wasm.js",OGVDecoderAudioOpusW:"ogv-decoder-audio-opus-wasm.js",OGVDecoderAudioVorbisW:"ogv-decoder-audio-vorbis-wasm.js",OGVDecoderVideoTheoraW:"ogv-decoder-video-theora-wasm.js",OGVDecoderVideoVP8W:"ogv-decoder-video-vp8-wasm.js",OGVDecoderVideoVP8MTW:"ogv-decoder-video-vp8-mt-wasm.js",OGVDecoderVideoVP9W:"ogv-decoder-video-vp9-wasm.js",OGVDecoderVideoVP9SIMDW:"ogv-decoder-video-vp9-simd-wasm.js",OGVDecoderVideoVP9MTW:"ogv-decoder-video-vp9-mt-wasm.js",OGVDecoderVideoVP9SIMDMTW:"ogv-decoder-video-vp9-simd-mt-wasm.js",OGVDecoderVideoAV1W:"ogv-decoder-video-av1-wasm.js",OGVDecoderVideoAV1SIMDW:"ogv-decoder-video-av1-simd-wasm.js",OGVDecoderVideoAV1MTW:"ogv-decoder-video-av1-mt-wasm.js",OGVDecoderVideoAV1SIMDMTW:"ogv-decoder-video-av1-simd-mt-wasm.js"},d=function(){function e(){(0,s.default)(this,e),this.base=this.defaultBase()}return(0,n.default)(e,[{key:"defaultBase",value:function(){}},{key:"wasmSupported",value:function(){return i.default.wasmSupported()}},{key:"scriptForClass",value:function(e){return a[e]}},{key:"urlForClass",value:function(e){var t=this.scriptForClass(e);if(t)return this.urlForScript(t);throw new Error("asked for URL for unknown class "+e)}},{key:"urlForScript",value:function(e){if(e){var t=this.base;return void 0===t?t="":t+="/",t+e+"?version="+encodeURIComponent(u)}throw new Error("asked for URL for unknown script "+e)}},{key:"loadClass",value:function(e,t,o){var r=this;o=o||{};var s=this.getGlobal(),n=this.urlForClass(e),i=function(t){return(t=t||{}).locateFile=function(e){return"data:"===e.slice(0,5)?e:r.urlForScript(e)},t.mainScriptUrlOrBlob=r.scriptForClass(e)+"?version="+encodeURIComponent(u),s[e](t)};"function"==typeof s[e]?t(i):this.loadScript(n,(function(){t(i)}))}}]),e}();t.default=d},713:(e,t,o)=>{"use strict";var r=o(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o(575)),n=r(o(913)),i=r(o(205)),u=r(o(585)),a=r(o(754));var d=new(function(e){(0,i.default)(o,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=(0,a.default)(e);if(t){var s=(0,a.default)(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return(0,u.default)(this,o)}}(o);function o(){return(0,s.default)(this,o),t.apply(this,arguments)}return(0,n.default)(o,[{key:"loadScript",value:function(e,t){importScripts(e),t()}},{key:"getGlobal",value:function(){return self}}]),o}(r(o(445)).default));t.default=d},607:(e,t,o)=>{"use strict";var r=o(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=new(r(o(172)).default)(["loadedMetadata","audioFormat","audioBuffer","cpuTime"],{init:function(e,t){this.target.init(t)},processHeader:function(e,t){this.target.processHeader(e[0],(function(e){t([e])}))},processAudio:function(e,t){this.target.processAudio(e[0],(function(e){t([e])}))}});t.default=s},172:(e,t,o)=>{"use strict";var r=o(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o(8)),n=r(o(575)),i=r(o(913)),u=r(o(713));o.g.OGVLoader=u.default;var a=function(){function e(t,o){var r=this;(0,n.default)(this,e),this.propList=t,this.handlers=o,this.transferables=function(){var e=new ArrayBuffer(1024),t=new Uint8Array(e);try{return postMessage({action:"transferTest",bytes:t},[e]),!e.byteLength}catch(e){return!1}}(),this.target=null,this.sentProps={},this.pendingEvents=[],this.handlers.construct=function(e,t){var o=e[0],s=e[1];u.default.loadClass(o,(function(e){e(s).then((function(e){for(r.target=e,t();r.pendingEvents.length;)r.handleEvent(r.pendingEvents.shift())}))}))},addEventListener("message",(function(e){r.workerOnMessage(e)}))}return(0,i.default)(e,[{key:"handleEvent",value:function(e){var t=this;this.handlers[e.action].call(this,e.args,(function(o){o=o||[];var r={},s=[];t.propList.forEach((function(e){var o=t.target[e];if(t.sentProps[e]!==o)if(t.sentProps[e]=o,"duration"==e&&isNaN(o)&&isNaN(t.sentProps[e]));else if("audioBuffer"==e){if(r[e]=o,o)for(var n=0;n<o.length;n++)s.push(o[n].buffer)}else"frameBuffer"==e?(r[e]=o,o&&(s.push(o.y.bytes.buffer),s.push(o.u.bytes.buffer),s.push(o.v.bytes.buffer))):r[e]=o}));var n={action:"callback",callbackId:e.callbackId,args:o,props:r};t.transferables?postMessage(n,s):postMessage(n)}))}},{key:"workerOnMessage",value:function(e){var t=e.data;t&&"object"===(0,s.default)(t)&&("transferTest"==t.action||("string"!=typeof t.action||"string"!=typeof t.callbackId||"object"!==(0,s.default)(t.args)?console.log("invalid message data",t):t.action in this.handlers?"construct"==t.action||this.target?this.handleEvent(t):this.pendingEvents.push(t):console.log("invalid message action",t.action)))}}]),e}();t.default=a},539:(e,t,o)=>{"use strict";var r=o(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o(8)),n=r(o(575)),i=r(o(913)),u=new(function(){function e(){(0,n.default)(this,e),this.tested=!1,this.testResult=void 0}return(0,i.default)(e,[{key:"wasmSupported",value:function(){if(!this.tested){try{"object"===("undefined"==typeof WebAssembly?"undefined":(0,s.default)(WebAssembly))?this.testResult=function(){var e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}():this.testResult=!1}catch(e){console.log("Exception while testing WebAssembly",e),this.testResult=!1}this.tested=!0}return this.testResult}}]),e}());t.default=u}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";o(318)(o(607))})()})();