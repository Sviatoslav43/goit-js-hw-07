import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('div.gallery')

console.log(galleryRef)


function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join('');
  }
  
galleryRef.insertAdjacentHTML("beforeend", createGalleryItemMarkup(galleryItems))
  
const photoAddToGallery = document.addEventListener('click', onGallery)
  
let modalWindow;

function onGallery(event) {
    event.preventDefault()

    if (event.target.nodeName !== "IMG") {
        return
    }

  modalWindow = basicLightbox.create( 
            `<img
              class="gallery__image"
              src="${event.target.dataset.source}"
              alt="${event.target.value}"
            />`)
  
  modalWindow.show() 


  window.addEventListener('keydown', onEscapeClose);
  
}


function onEscapeClose(event) {
  if(event.code ==="Escape")
    modalWindow.close();
  }