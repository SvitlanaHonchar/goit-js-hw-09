!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a=document.querySelector("input[name=amount]"),c=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]");u.addEventListener("submit",(function(n){var o=function(n){setTimeout((function(){var o,t,a;o=n,t=i,a=Math.random()>.3,new Promise((function(e,n){a?e({position:o,delay:t}):n({position:o,delay:t})})).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),i+=u}),d),d+=u};n.preventDefault();for(var t=+a.value,i=+c.value,u=+l.value,d=+c.value,f=1;f<t+1;f++)o(f)}))}();
//# sourceMappingURL=03-promises.f8b433c6.js.map
