const e={watchedBtn:document.querySelector(".wached-btn"),queueBtn:document.querySelector(".queue-btn"),gallery:document.querySelector(".gallery")};function t(){e.watchedBtn.classList.add("active"),e.queueBtn.classList.remove("active");const t=JSON.parse(localStorage.getItem("watched-films"));if(null===t){const t="<p>Your list is empty(</p>";return void(e.gallery.innerHTML=t)}const n=t.map((e=>`\n <a id=${e.id} class="gallery__poster-card" href="">\n  <img class="poster-card__image" src="https://image.tmdb.org/t/p/w780${e.poster_path}" alt="" loading="lazy" />\n  <div class="poster-card__info">\n    <p class="info-item title">\n      ${e.original_title}\n    </p>\n    <p class="info-item">\n     | ${e.release_date.substring(0,4)}\n    </p>\n  \n  </div>\n  </a>\n`)).join("");e.gallery.innerHTML=n}e.watchedBtn.addEventListener("click",t),e.queueBtn.addEventListener("click",(function(){e.watchedBtn.classList.remove("active"),e.queueBtn.classList.add("active");const t=JSON.parse(localStorage.getItem("queued-films"));if(null===t){const t="<p>Your list is empty(</p>";return void(e.gallery.innerHTML=t)}const n=t.map((e=>`\n <a id=${e.id} class="gallery__poster-card" href="">\n  <img class="poster-card__image" src="https://image.tmdb.org/t/p/w780${e.poster_path}" alt="" loading="lazy" />\n  <div class="poster-card__info">\n    <p class="info-item title">\n      ${e.original_title}\n    </p>\n    <p class="info-item">\n     | ${e.release_date.substring(0,4)}\n    </p>\n  \n  </div>\n  </a>\n`)).join("");e.gallery.innerHTML=n})),t();
//# sourceMappingURL=libraty.5e14f3a8.js.map
