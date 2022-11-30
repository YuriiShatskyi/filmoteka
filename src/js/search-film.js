import { renderMarkup } from './render-card-markup';
import { fetchSearchingFilms } from './fetch';
import { showLoader } from './loader';
import { hideLoader } from './loader';
import { refs } from "./refs";


// const refs = {
//   gallery: document.querySelector('.gallery'),
//   inputForm: document.querySelector('.header__form'),
// };


export let searchQuery = '';

refs.inputForm.addEventListener('submit', onInput);

// search function by "input"

function onInput(evt) {
  evt.preventDefault();
  
 
  showLoader();


  const searchQuery = evt.currentTarget.elements.query.value;
  console.log(searchQuery);

  if (searchQuery.trim() === '') {
    alert(
      'Search result not successful. Enter the correct movie name and try again'
    );
    hideLoader();
    return;
  }

  fetchSearchingFilms(searchQuery)
   
    .then(data => {
      
      if (data === 0) {
        alert(
          'Search result not successful. Enter the correct movie name and try again'
        );
        return;
      }

      renderMarkup(fetchSearchingFilms(searchQuery), refs.gallery);
    })
    .catch(error => alert(`${error}`));

  hideLoader();

  evt.target.reset();

}
