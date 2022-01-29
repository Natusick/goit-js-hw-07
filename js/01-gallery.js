import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const newGalleryItems = createGalleryItems(galleryItems);
galleryEl.addEventListener('click', onGalleryClick)
galleryEl.insertAdjacentHTML('beforeend', newGalleryItems);
function createGalleryItems(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
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
};

console.log(createGalleryItems(galleryItems));

function onGalleryClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
    return;
    }
    console.log(event.target);

const onImageLink = event.target.dataset.source;
const onImageAlt = event.target.dataset.alt;

const instanceOfModal = {
    onShow: () => {window.addEventListener('keydown',  pressOnEscape); },
    onClose: () => {window.removeEventListener('keydown', pressOnEscape);},
    }; 

    function pressOnEscape(event){
        
        if(event.code === 'Escape'){ 
            instance.close();
        }
    };

const instance = basicLightbox.create(`<img src="${onImageLink}", alt="${onImageAlt}"></img>`, instanceOfModal);
instance.show();
    
};