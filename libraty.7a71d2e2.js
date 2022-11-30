function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return o}));const o={openAuthModalBtn:document.querySelector("[data-auth-modal-open]"),closeAuthModal:document.querySelector("[data-auth-modal-close]"),modalAuth:document.querySelector("[data-auth-modal]"),body:document.querySelector("body"),btnScrollTop:document.querySelector(".js-button-scroll-top"),gallery:document.querySelector(".gallery"),bouncer:document.querySelector(".js-bouncer"),openModalE:document.querySelector(".filmsModal"),modalFilmInfo:document.querySelector(".modal-movie"),backdropFilmModal:document.querySelector(".backdrop"),closeModalBtn:document.querySelector("modal__close-button"),watchedBtn:document.querySelector(".wached-btn"),queueBtn:document.querySelector(".queue-btn"),inputForm:document.querySelector(".header__form"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop__team"),modalTrailer:document.querySelector(".modal-movie"),iframe:document.querySelector(".iframe")}})),r.register("bTcpz",(function(e,t){r("cyIMT"),r("e7y5x"),r("8mwU1");var n=r("gjiCh"),o=r("gffsD"),a=r("i8szs"),i=r("bZJOo"),s=r("krGWQ");function d(e){(e.target.classList.contains("backdrop")||e.target.classList.contains("modal__close-button")|e.target.classList.contains("modal__icon"))&&l()}function c(e){"Escape"===e.key&&l()}function l(){s.refs.backdropFilmModal.classList.add("backdrop__is-hidden"),s.refs.modalFilmInfo.classList.add("modal__is-hidden"),s.refs.body.classList.remove("no-scroll"),s.refs.iframe.classList.add("backdrop__is-hidden"),s.refs.iframe.removeAttribute("src"),document.removeEventListener("click",d),document.removeEventListener("keydown",c)}s.refs.openModalE.addEventListener("click",(function(e){s.refs.modalFilmInfo.innerHTML="",e.preventDefault();const t=e.target.closest(".gallery__poster-card");if(!t)return;const r=t.getAttribute("id");(0,n.showLoader)(),s.refs.backdropFilmModal.classList.remove("backdrop__is-hidden"),s.refs.modalFilmInfo.classList.remove("modal__is-hidden"),s.refs.body.classList.add("no-scroll"),l=r,async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=ae41ac8beda98b2e2d51e160e21365e8&language=en-US`);return await t.json()}catch(e){console.error(e)}}(l).then((e=>{console.log(e),function({title:e,popularity:t,original_title:n,vote_average:o,genres:r,poster_path:a,overview:i,vote_count:d}){const c="https://image.tmdb.org/t/p/",l="w500",u=r.map((e=>e.name)).join(", ");s.refs.modalFilmInfo.innerHTML=`<button type="button" class="modal__close-button">\n     <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="14"\n        height="14"\n        fill="currentColor"\n        class="modal__icon"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"\n        />\n      </svg>\n    </button>\n\n    \n        <div class="modal__card">\n        <div class="modal__wrapper">\n            <img class="modal__img" src="${a?`${c}${l}${a}`:imgPlaceholder}" alt="${e}">\n        </div>\n        \n        <div class="modal__filminfo">\n            <h2 class="modal__title">${n}</h2>\n        \n            <table class="modal-movie-properties">\n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Vote / Votes</td>\n                    <td class="modal-movie-properties__value"><span id="vote" class="modal-movie-properties__vote">${o.toFixed(1)}</span>  / \n                        <span id="votes">${d}</span>\n                    </td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Popularity</td>\n                    <td class="modal-movie-properties__value" id="popularity">${t}</td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Original Title</td>\n                    <td class="modal-movie-properties__value" id="original-title">${n}</td>\n                </tr>\n        \n                <tr class="modal-movie-properties__info">\n                    <td class="modal-movie-properties__name">Genre</td>\n                    <td class="modal-movie-properties__value" id="genre"> ${u}</td>\n                </tr>\n        \n            </table>\n        \n            <h3 class="modal__descr-title">About</h3>\n            <p class="modal__descr" id="overview">${i}</p>\n\n            <button type="button" id="trailer" class="modal__button">watch trailer</button>\n        \n            <div class="modal__button-container">\n                <button type="button" id="watched" class="modal__button">add to watched</button>\n                <button type="button" id="queue" class="modal__button">add to queue</button>\n            </div>\n        \n        </div>\n    </div>`}(e),(0,o.addFilmToWatched)(e),(0,i.watchedTrailer)(e),(0,a.addFilmToQueue)(e),(0,n.hideLoader)()})),document.addEventListener("keydown",c),document.addEventListener("click",d);var l}))})),r.register("cyIMT",(function(t,n){e(t.exports,"currentURL",(function(){return d})),e(t.exports,"fetchTrendingFilms",(function(){return c})),e(t.exports,"fetchSearchingFilms",(function(){return l}));var o=r("gjiCh"),a=(o=r("gjiCh"),r("e7y5x")),i=r("2nhTy");r("8mwU1");var s=r("krGWQ");let d="";async function c(){try{const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=ae41ac8beda98b2e2d51e160e21365e8&page=${i.page}`),t=await e.json();return d="trendingFilmsURL",t.results}catch(e){console.error(e)}finally{(0,o.hideLoader)()}}async function l(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ae41ac8beda98b2e2d51e160e21365e8&language=en-US&query=${e}&page=${i.page}&include_adult=false`),n=await t.json();return console.log(n),d="searchingFilmsURL",n.results}catch(e){console.error(e)}finally{(0,o.hideLoader)()}}(0,o.showLoader)(),(0,a.renderMarkup)(c(),s.refs.gallery)})),r.register("gjiCh",(function(t,n){e(t.exports,"hideLoader",(function(){return a})),e(t.exports,"showLoader",(function(){return i}));var o=r("krGWQ");function a(){o.refs.bouncer.classList.add("is-hidden")}function i(){o.refs.bouncer.classList.remove("is-hidden")}})),r.register("e7y5x",(function(t,n){e(t.exports,"renderMarkup",(function(){return a}));var o=r("iWJ8d");function a(e,t){e.then((e=>{const n=e.map((e=>{let t=e.genre_ids.map((e=>o.API_GENRES.find((t=>t.id===e)).name)).join(", ");return`\n   <a id=${e.id} class="gallery__poster-card" href="">\n    <img class="poster-card__image" src="https://image.tmdb.org/t/p/w780${e.poster_path}" alt="" loading="lazy" />\n    <div class="poster-card__info">\n      <p class="info-item title">\n        ${e.original_title}\n      </p>\n      <p class="info-item">\n      ${t} | ${e.release_date.substring(0,4)}      <span class="vote-container visually-hidden">${e.vote_average.toFixed(1)}</span> \n      </p>\n\n    </div>\n    </a>\n  `})).join("");t.innerHTML=n}))}r("gjiCh")})),r.register("iWJ8d",(function(t,n){e(t.exports,"API_GENRES",(function(){return o}));const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Sci-Fi"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]})),r.register("2nhTy",(function(t,n){e(t.exports,"page",(function(){return s})),r("iWJ8d");var o=r("krGWQ"),a=r("cyIMT"),i=r("e7y5x");r("8mwU1");let s=1;const d=document.querySelector(".pagination ul");let c="";function l(e,t){let n,o="",r=t-1,a=t+1;t>1&&(o+=`<li class="btn prev" id = ${t-1}><span><i class="fas fa-angle-left"></i>Prev</span></li>`),t>2&&(o+='<li class="first number" id=1><span>1</span></li>',t>3&&(o+='<li class="dots"><span>...</span></li>')),t===e?r-=2:t===e-1&&(r-=1),1===t?a+=2:2===t&&(a+=1);for(let i=r;i<=a;i++)i>e||(0===i&&(i+=1),n=t===i?"active":"",o+=`<li class="number ${n}" id=${i}><span>${i}</span></li>`);return t<e-1&&(t<e-2&&(o+='<li class="dots"><span>...</span></li>'),o+=`<li class="last number" id=${e}><span>${e}</span></li>`),t<e&&(o+=`<li class="btn next"  id=${t+1}><span>Next<i class="fas fa-angle-right"></i></span></li>`),l.innerHTML=o,o}function u(){return"trendingFilmsURL"==a.currentURL?(c=(0,a.fetchTrendingFilms)(),c):"searchingFilmsURL"==a.currentURL?(c=(0,a.fetchSearchingFilms)(),c):void 0}function m(e){if("LI"===e.target.nodeName)return"Prev"===e.target.textContent?(s-=1,u(),(0,i.renderMarkup)(c,o.refs.gallery),d.innerHTML=l(10,s),void console.log(s)):"Next"===e.target.textContent?(s+=1,u(),(0,i.renderMarkup)(c,o.refs.gallery),d.innerHTML=l(10,s),void console.log(s)):void("..."!==e.target.textContent&&(s=e.target.textContent,u(),(0,i.renderMarkup)(c,o.refs.gallery),console.log(s)))}d.innerHTML=l(10,s),d.addEventListener("click",m),d.addEventListener("click",m),d.innerHTML=l(10,s),d.addEventListener("click",m)})),r.register("8mwU1",(function(e,t){var n=r("e7y5x"),o=r("cyIMT"),a=r("gjiCh"),i=(a=r("gjiCh"),r("krGWQ"));i.refs.inputForm.addEventListener("submit",(function(e){e.preventDefault(),(0,a.showLoader)();const t=e.currentTarget.elements.query.value;if(console.log(t),""===t.trim())return alert("Search result not successful. Enter the correct movie name and try again"),void(0,a.hideLoader)();(0,o.fetchSearchingFilms)(t).then((e=>{0!==e?(0,n.renderMarkup)((0,o.fetchSearchingFilms)(t),i.refs.gallery):alert("Search result not successful. Enter the correct movie name and try again")})).catch((e=>alert(`${e}`))),(0,a.hideLoader)(),e.target.reset()}))})),r.register("gffsD",(function(t,n){e(t.exports,"addFilmToWatched",(function(){return d}));var o=r("jCrzr");const a="watched-films";let i;const s=JSON.parse(localStorage.getItem(a));function d(e){const t=document.querySelector("#watched");i.some((t=>t.id==e.id))&&(t.textContent="remove from watched"),t.addEventListener("click",(()=>{const n=e;if(t.textContent="remove from watched",i.some((t=>t.id===e.id))){const n=i.find((t=>t.id===e.id));return(0,o.removeMovie)(i,n),t.textContent="add to watched",localStorage.setItem(a,JSON.stringify(i)),i}return i.push(n),localStorage.setItem(a,JSON.stringify(i)),i}))}i=s||[]})),r.register("jCrzr",(function(t,n){function o(e,t){const n=e.indexOf(t);return n>-1&&e.splice(n,1),e}e(t.exports,"removeMovie",(function(){return o}))})),r.register("i8szs",(function(t,n){e(t.exports,"addFilmToQueue",(function(){return d}));var o=r("jCrzr");const a="queue-films";let i;const s=JSON.parse(localStorage.getItem(a));function d(e){const t=document.querySelector("#queue");i.some((t=>t.id==e.id))&&(t.textContent="remove from queue"),t.addEventListener("click",(()=>{const n=e;if(t.textContent="remove from queue",i.some((t=>t.id===e.id))){const n=i.find((t=>t.id===e.id));return(0,o.removeMovie)(i,n),t.textContent="add to queue",localStorage.setItem(a,JSON.stringify(i)),i}return i.push(n),localStorage.setItem(a,JSON.stringify(i)),i}))}i=s||[]})),r.register("bZJOo",(function(t,n){e(t.exports,"watchedTrailer",(function(){return i}));var o=r("krGWQ");o.refs.iframe.classList.add("backdrop__is-hidden");async function a(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=ae41ac8beda98b2e2d51e160e21365e8&language=en-US`);!function(e){o.refs.iframe.classList.remove("backdrop__is-hidden"),o.refs.iframe.setAttribute("src",`https://www.youtube.com/embed/${e}?`)}((await t.json()).results[0].key)}catch(e){alert("Your movie dont have any trailer")}}function i(e){document.querySelector("#trailer").addEventListener("click",(()=>{const t=e.id;console.log(t),a(t)}))}})),r.register("baGT8",(function(e,t){var n=r("krGWQ");function o(e){(e.target.classList.contains("backdrop__team")||e.target.classList.contains("modal-team__close-button")|e.target.classList.contains("modal__icon"))&&i()}function a(e){"Escape"===e.key&&i()}function i(){n.refs.backdrop.classList.add("backdrop-team__is-hidden"),n.refs.modal.classList.add("modal__is-hidden"),n.refs.body.classList.remove("no-scroll"),document.removeEventListener("click",o),document.removeEventListener("keydown",a)}n.refs.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),n.refs.backdrop.classList.remove("backdrop-team__is-hidden"),n.refs.modal.classList.remove("modal-team__is-hidden"),console.log("убрался бєк модалки"),n.refs.body.classList.add("no-scroll"),document.addEventListener("keydown",a),document.addEventListener("click",o)}))}));
//# sourceMappingURL=libraty.7a71d2e2.js.map
