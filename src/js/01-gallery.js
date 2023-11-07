import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('ul.gallery');

function createMarkUp({ preview, original, description }) {
  return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
}

const galaryCartArray = galleryItems.map(item => createMarkUp(item));
console.log(galaryCartArray);

galleryList.insertAdjacentHTML('afterbegin', galaryCartArray.join(''));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });