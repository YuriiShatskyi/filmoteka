!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||o.default()};var r=c(a("kMC0W")),n=c(a("7AJDX")),o=c(a("8CtQK")),i=c(a("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("4Nugj",(function(r,n){t(r.exports,"refs",(function(){return c}));var o,i=a("hKHmD"),c=(o={openAuthModalBtn:document.querySelector("[data-auth-modal-open]"),closeAuthModal:document.querySelector("[data-auth-modal-close]"),modalAuth:document.querySelector("[data-auth-modal]"),body:document.querySelector("body"),btnScrollTop:document.querySelector(".js-button-scroll-top"),gallery:document.querySelector(".gallery"),bouncer:document.querySelector(".js-bouncer")},e(i)(o,"body",document.querySelector("body")),e(i)(o,"openModalE",document.querySelector(".filmsModal")),e(i)(o,"modalFilmInfo",document.querySelector(".modal-movie")),e(i)(o,"backdropFilmModal",document.querySelector(".backdrop")),e(i)(o,"closeModalBtn",document.querySelector("modal__close-button")),e(i)(o,"gallery",document.querySelector(".gallery")),e(i)(o,"watchedBtn",document.querySelector(".wached-btn")),e(i)(o,"queueBtn",document.querySelector(".queue-btn")),e(i)(o,"gallery",document.querySelector(".gallery")),e(i)(o,"openModalE",document.querySelector(".filmsModal")),e(i)(o,"gallery",document.querySelector(".gallery")),e(i)(o,"inputForm",document.querySelector(".header__form")),e(i)(o,"body",document.querySelector("body")),e(i)(o,"openModalBtn",document.querySelector("[data-modal-open]")),e(i)(o,"closeModalBtn",document.querySelector("[data-modal-close]")),e(i)(o,"modal",document.querySelector("[data-modal]")),e(i)(o,"backdrop",document.querySelector(".backdrop__team")),o)})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("5xtVg",(function(t,r){var n=a("bpxeT"),o=a("2TvXO");a("5g02X"),a("dHhQw"),a("57Hi6");var i=a("kvC6y"),c=a("dN6xn"),s=a("bvnla"),u=a("hV87x"),l=a("4Nugj"),d="ae41ac8beda98b2e2d51e160e21365e8",f="https://api.themoviedb.org/3";function p(){return(p=e(n)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/movie/").concat(r,"?api_key=").concat(d,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(e){(e.target.classList.contains("backdrop")||e.target.classList.contains("modal__close-button")|e.target.classList.contains("modal__icon"))&&v()}function h(e){"Escape"===e.key&&v()}function v(){l.refs.backdropFilmModal.classList.add("backdrop__is-hidden"),l.refs.modalFilmInfo.classList.add("modal__is-hidden"),l.refs.body.classList.remove("no-scroll"),document.removeEventListener("click",m),document.removeEventListener("keydown",h)}l.refs.openModalE.addEventListener("click",(function(e){l.refs.modalFilmInfo.innerHTML="",e.preventDefault();var t=e.target.closest(".gallery__poster-card");if(!t)return;var r=t.getAttribute("id");(0,i.showLoader)(),l.refs.backdropFilmModal.classList.remove("backdrop__is-hidden"),l.refs.modalFilmInfo.classList.remove("modal__is-hidden"),l.refs.body.classList.add("no-scroll"),n=r,function(e){return p.apply(this,arguments)}(n).then((function(e){var t,r,n,o,a,d,f,p,m,h,v,y;console.log(e),r=(t=e).title,n=t.popularity,o=t.original_title,a=t.vote_average,d=t.genres,f=t.poster_path,p=t.overview,m=t.vote_count,h="https://image.tmdb.org/t/p/",v="w500",y=d.map((function(e){return e.name})).join(", "),l.refs.modalFilmInfo.innerHTML='<button type="button" class="modal__close-button">\n     <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="14"\n        height="14"\n        fill="currentColor"\n        class="modal__icon"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"\n        />\n      </svg>\n    </button>\n\n    \n        <div class="modal__card">\n        <div class="modal__wrapper">\n            <img class="modal__img" src="'.concat(f?"".concat(h).concat(v).concat(f):imgPlaceholder,'" alt="').concat(r,'">\n        </div>\n        \n        <div class="modal__filminfo">\n            <h2 class="modal__title">').concat(o,'</h2>\n        \n            <table class="modal-movie-properties">\n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Vote / Votes</td>\n                    <td class="modal-movie-properties__value"><span id="vote" class="modal-movie-properties__vote">').concat(a.toFixed(1),'</span>  / \n                        <span id="votes">').concat(m,'</span>\n                    </td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Popularity</td>\n                    <td class="modal-movie-properties__value" id="popularity">').concat(n,'</td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Original Title</td>\n                    <td class="modal-movie-properties__value" id="original-title">').concat(o,'</td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Genre</td>\n                    <td class="modal-movie-properties__value" id="genre"> ').concat(y,'</td>\n                </tr>\n        \n            </table>\n        \n            <h3 class="modal__descr-title">About</h3>\n            <p class="modal__descr" id="overview">').concat(p,'</p>\n\n            <button type="button" id="trailer" class="modal__button">watch trailer</button>\n        \n            <div class="modal__button-container">\n                <button type="button" id="watched" class="modal__button">add to watched</button>\n                <button type="button" id="queue" class="modal__button">add to queue</button>\n            </div>\n        \n        </div>\n    </div>'),(0,c.addFilmToWatched)(e),(0,u.watchedTrailer)(e),(0,s.addFilmToQueue)(e),(0,i.hideLoader)()})),document.addEventListener("keydown",h),document.addEventListener("click",m);var n}))})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?m:f,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function v(){}function y(){}function g(){}var _={};s(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(q([])));w&&w!==r&&n.call(w,a)&&(_=w);var x=g.prototype=v.prototype=Object.create(_);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function q(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=g,s(x,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},L(k.prototype),s(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=q,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("5g02X",(function(r,n){t(r.exports,"fetchSearchingFilms",(function(){return p}));var o=a("bpxeT"),i=a("2TvXO"),c=a("kvC6y"),s=a("dHhQw"),u=a("4Nugj"),l="ae41ac8beda98b2e2d51e160e21365e8",d="https://api.themoviedb.org/3";function f(){return(f=e(o)(e(i).mark((function t(){var r,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/trending/movie/day?api_key=").concat(l,"&page=").concat(1));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,console.log(n.results),e.abrupt("return",n.results);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,(0,c.hideLoader)(),e.finish(14);case 17:case"end":return e.stop()}}),t,null,[[0,11,14,17]])})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=e(o)(e(i).mark((function t(r){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/search/movie?api_key=").concat(l,"&language=en-US&query=").concat(r,"&page=").concat(1,"&include_adult=false"));case 3:return n=e.sent,e.next=6,n.json();case 6:return o=e.sent,console.log(o.results),e.abrupt("return",o.results);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,(0,c.hideLoader)(),e.finish(14);case 17:case"end":return e.stop()}}),t,null,[[0,11,14,17]])})))).apply(this,arguments)}(0,c.showLoader)(),(0,s.renderMarkup)(function(){return f.apply(this,arguments)}(),u.refs.gallery)})),a.register("kvC6y",(function(e,r){t(e.exports,"hideLoader",(function(){return o})),t(e.exports,"showLoader",(function(){return i}));var n=a("4Nugj");function o(){n.refs.bouncer.classList.add("is-hidden")}function i(){n.refs.bouncer.classList.remove("is-hidden")}console.log(n.refs.bouncer)})),a.register("dHhQw",(function(e,r){t(e.exports,"renderMarkup",(function(){return o}));var n=a("jPW8c");function o(e,t){e.then((function(e){var r=e.map((function(e){var t=e.genre_ids.map((function(e){return n.API_GENRES.find((function(t){return t.id===e})).name})).join(", ");return"\n   <a id=".concat(e.id,' class="gallery__poster-card" href="">\n    <img class="poster-card__image" src="https://image.tmdb.org/t/p/w780').concat(e.poster_path,'" alt="" loading="lazy" />\n    <div class="poster-card__info">\n      <p class="info-item title">\n        ').concat(e.original_title,'\n      </p>\n      <p class="info-item">\n      ').concat(t," | ").concat(e.release_date.substring(0,4),'      <span class="vote-container visually-hidden">').concat(e.vote_average.toFixed(1),"</span> \n      </p>\n\n    </div>\n    </a>\n  ")})).join("");t.innerHTML=r}))}a("kvC6y")})),a.register("jPW8c",(function(e,r){t(e.exports,"API_GENRES",(function(){return n}));var n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Sci-Fi"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]})),a.register("57Hi6",(function(e,t){var r=a("dHhQw"),n=a("5g02X"),o=a("kvC6y"),i=a("4Nugj");i.refs.inputForm.addEventListener("submit",(function(e){e.preventDefault(),(0,o.showLoader)();var t=e.currentTarget.elements.query.value;if(""===t.trim())return void alert("Search result not successful. Enter the correct movie name and try again");(0,r.renderMarkup)((0,n.fetchSearchingFilms)(t),i.refs.gallery),e.target.reset()}))})),a.register("dN6xn",(function(e,r){t(e.exports,"addFilmToWatched",(function(){return s}));var n,o=a("aoBB8"),i="watched-films",c=JSON.parse(localStorage.getItem(i));function s(e){var t=document.querySelector("#watched");n.some((function(t){return t.id==e.id}))&&(t.textContent="remove from watched"),t.addEventListener("click",(function(){var r=e;if(t.textContent="remove from watched",!n.some((function(t){return t.id===e.id})))return n.push(r),localStorage.setItem(i,JSON.stringify(n)),n;if(n.some((function(t){return t.id===e.id}))){var a=n.find((function(t){return t.id===e.id}));return(0,o.removeMovie)(n,a),t.textContent="add to watched",localStorage.setItem(i,JSON.stringify(n)),n}}))}n=c||[]})),a.register("aoBB8",(function(e,r){function n(e,t){var r=e.indexOf(t);return r>-1&&e.splice(r,1),e}t(e.exports,"removeMovie",(function(){return n}))})),a.register("bvnla",(function(e,r){t(e.exports,"addFilmToQueue",(function(){return s}));var n,o=a("aoBB8"),i="queue-films",c=JSON.parse(localStorage.getItem(i));function s(e){var t=document.querySelector("#queue");n.some((function(t){return t.id==e.id}))&&(t.textContent="remove from queue"),t.addEventListener("click",(function(){var r=e;if(t.textContent="remove from queue",!n.some((function(t){return t.id===e.id})))return n.push(r),localStorage.setItem(i,JSON.stringify(n)),n;if(n.some((function(t){return t.id===e.id}))){var a=n.find((function(t){return t.id===e.id}));return(0,o.removeMovie)(n,a),t.textContent="add to queue",localStorage.setItem(i,JSON.stringify(n)),n}}))}n=c||[]})),a.register("hV87x",(function(r,n){t(r.exports,"watchedTrailer",(function(){return f}));var o=a("bpxeT"),i=a("2TvXO"),c="ae41ac8beda98b2e2d51e160e21365e8",s="https://api.themoviedb.org/3",u=document.querySelector(".modal-movie");function l(){return(l=e(o)(e(i).mark((function t(r){var n,o,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(r,"/videos?api_key=").concat(c,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,a=o.results[0].key,console.log(a),d(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function d(e){var t=document.createElement("iframe");t.src="https://www.youtube.com/embed/".concat(e,"?"),t.frameborder="0",t.setAttribute("allowfullscreen","true"),console.log(t),u.append(t)}function f(e){document.querySelector("#trailer").addEventListener("click",(function(){var t=e.id;console.log(t),console.log(function(e){return l.apply(this,arguments)}(t))}))}})),a.register("ghnK3",(function(e,t){var r=a("4Nugj");function n(e){(e.target.classList.contains("backdrop__team")||e.target.classList.contains("modal-team__close-button")|e.target.classList.contains("modal__icon"))&&i()}function o(e){"Escape"===e.key&&i()}function i(){r.refs.backdrop.classList.add("backdrop-team__is-hidden"),r.refs.modal.classList.add("modal__is-hidden"),r.refs.body.classList.remove("no-scroll"),document.removeEventListener("click",n),document.removeEventListener("keydown",o)}r.refs.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),r.refs.backdrop.classList.remove("backdrop-team__is-hidden"),r.refs.modal.classList.remove("modal-team__is-hidden"),console.log("убрался бєк модалки"),r.refs.body.classList.add("no-scroll"),document.addEventListener("keydown",o),document.addEventListener("click",n)}))}))}();
//# sourceMappingURL=libraty.3925217d.js.map
