import { API_GENRES } from "./genres-list";
import { hideLoader, showLoader } from "./loader";

const API_KEY = 'ae41ac8beda98b2e2d51e160e21365e8';
const BASE_URL = 'https://api.themoviedb.org/3';

const refs = {
  gallery: document.querySelector('.gallery'),
  // nextPage: document.querySelector('#next-button'),
  // prevPage: document.querySelector('#prev-button'),
}

let page = 1;

// Слухачі

// refs.nextPage.addEventListener('click', onLoadMore)
// refs.prevPage.addEventListener('click', backOnLoadMore)


export async function fetchTrendingFilms() {
  try {    
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const result = await response.json();
    console.log(result.results);
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

function renderMarkup(callback, destination) {
 
  callback.then(movies => {

    // addPage()
    
    const newMarkup = movies
      .map(movie => {
let genres = movie.genre_ids.map(genre_id => { return (API_GENRES.find(genre => genre.id === genre_id)).name}).join(', ');
       
        return `
 <a id=${movie.id} class="gallery__poster-card" href="">
  <img class="poster-card__image" src="https://image.tmdb.org/t/p/w780${
    movie.poster_path
  }" alt="" loading="lazy" />
  <div class="poster-card__info">
    <p class="info-item title">
      ${movie.original_title}
    </p>
    <p class="info-item">
    ${genres} | ${movie.release_date.substring(0, 4)}
    </p>
  
  </div>
  </a>
`;
      })
      .join('');
    destination.innerHTML = newMarkup;
    
  });
}
showLoader();
renderMarkup(fetchTrendingFilms(), refs.gallery);
hideLoader();

// // =============================================


// Функція для кнопки "next and back"
// function onLoadMore() {
//     addPage()
    
//     fetchTrendingFilms()
//         .then(renderMarkup)
       
    
// }


// function backOnLoadMore() {
//     resetPage()
    
//     fetchTrendingFilms()
//         .then(renderMarkup)
       
    
// }


// //  функція , що б переходити на наступну сторінку
//     function addPage() { 
      
//         page += 1;
            
//     }

// // функція що б почати з початку з нового пошуку
//     function resetPage() { 
//         page = 1;
//     }
//   function endOfPictures(params) {
    
//   }

//     // функція пошуку по назві


async function fetchSearchingFilms() {
  try {
    const response = await fetch(
           `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`
    );
    const result = await response.json();
    console.log(result.results);
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

// showLoader();
// renderMarkup(fetchSearchingFilms(), refs.gallery);
// hideLoader();