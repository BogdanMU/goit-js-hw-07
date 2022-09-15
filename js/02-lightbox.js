import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
  `<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`)
    .join("")

galleryList.innerHTML = markup
    
const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionType: 'alt',
    captionsData: 'alt', 
    captionPosition: 'bottom',
    captionDelay : 250
 });

console.log(galleryItems);


{/* <li>
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a></li> */}