import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
    .join("")

galleryContainer.innerHTML = markup

galleryContainer.addEventListener('click', onImgClick)


function onImgClick(event){
  event.preventDefault()
    if (event.target.nodeName !== "IMG") {
      return
    }
  const clickedImg = event.target
  
  const instance = basicLightbox.create(`
    <img src="${clickedImg.dataset.source}">`, {
    onShow: (instance) => {
      // Close when hitting escape.
      galleryContainer.onkeydown = function (event) {
        event = event || window.event;
        let isEscape = false;
        if ("key" in event) {
          isEscape = (event.key === "Escape" || event.key === "Esc");
        } else {
          isEscape = (event.keyCode === 27);
        }
        if (isEscape) {
          instance.close();
        }
      };
    }
  }
)

  instance.show()

} 

console.log(galleryItems);



{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}
