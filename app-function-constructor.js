import getElement from "./utils/getElement.js";

// Constructor function - start
function Gallery(element) {

    // Selecting the container (section with class '.nature' or '.city')
    this.container = element;

    // 1. Getting the NodeList of all '.img' for that element
    // 2. Using Spread Operator to convert NodeList into an Array
    this.list = [...element.querySelectorAll('.img')];

    // Selecting the Modal
    this.modal = getElement('.modal');

    // Selecting the Main Image inside the Modal
    this.mainModalImg = getElement('.main-img');

    // Selecting the Image Name
    this.imageName = getElement('.image-name');

    // Selecting the Modal Images
    this.modalImages = getElement('.modal-images');

    // Selecting the Close Modal Button
    this.closeModalBtn = getElement('.close-btn');

    // Selecting the Previous Button inside the Modal
    this.prevBtn = getElement('.prev-btn');

    // Selecting the Next Button inside the Modal
    this.nextBtn = getElement('.next-btn');

    // Binding closeModal method to the Gallery
    this.closeModal = this.closeModal.bind(this);

    // Binding prevImage method to the Gallery
    this.prevImage = this.prevImage.bind(this);

    // Binding nextImage method to the Gallery
    this.nextImage = this.nextImage.bind(this);

    // Binding selectModalImage method to the Gallery
    this.selectModalImage = this.selectModalImage.bind(this);

    // Adding 'click' event listener to the container
    this.container.addEventListener('click', function (event) {

        // Checking if an image was clicked
        if (event.target.classList.contains('img')) {

            // Calling openModal method (that is on the prototype)
            // event.target argument is the image that was clicked
            // this.list argument is the array that contains all the images ('img')
            this.openModal(event.target, this.list);

        }

        // Note: Callback is bound to the Gallery (instead of the container)
    }.bind(this));

}
// Constructor function - end

// Gallery Methods - start
// openModal - start
Gallery.prototype.openModal = function (selectedImage, list) {

    // Calling the setMainImage method and passing selectedImage
    this.setMainImage(selectedImage);

    // Setting the Modal Images
    this.modalImages.innerHTML = list.map(function (image) {
        return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" alt="${image.alt}" />`;
    }).join('');

    // Adding '.open' class to the modal
    // Note: openModal must be bound to the Gallery first because modal is on the Gallery
    this.modal.classList.add('open');

    // Modal buttons (close, prev, next) Event Listeners - start
    this.closeModalBtn.addEventListener('click', this.closeModal);

    this.prevBtn.addEventListener('click', this.prevImage);

    this.nextBtn.addEventListener('click', this.nextImage);
    // Modal buttons (close, prev, next) Event Listeners - end

    // Event listener for clicking the modalImages
    // Callbacks the selecModalImage method
    this.modalImages.addEventListener('click', this.selectModalImage);

};
// openModal - end

// closeModal - start
Gallery.prototype.closeModal = function () {

    // Removing '.open' class
    this.modal.classList.remove('open');

    // Removing Event Listeners from Modal buttons (close, prev, next) when Modal is closed - start
    this.closeModalBtn.removeEventListener('click', this.closeModal);

    this.prevBtn.removeEventListener('click', this.prevImage);

    this.nextBtn.removeEventListener('click', this.nextImage);
    // Removing Event Listeners from Modal buttons (close, prev, next) when Modal is closed - end

    // Removing 'click' Event listener from the modalImages
    this.modalImages.removeEventListener('click', this.selectModalImage);
};
// closeModal - end

// prevImage - start
Gallery.prototype.prevImage = function () {

    // Getting the selected image
    const selectedImage = this.modalImages.querySelector('.selected');

    // Getting the previous image
    // OR the last image (if it is the start of the array and previousElementSibling is undefined)
    const prevImage = selectedImage.previousElementSibling || this.modalImages.lastElementChild;

    // Removing the class '.selected' from the selected image
    selectedImage.classList.remove('selected');

    // Adding the class '.selected' to the previous image
    prevImage.classList.add('selected');

    // Setting the previous image as the main image
    this.setMainImage(prevImage);

};
// prevImage - end

// nextImage - start
Gallery.prototype.nextImage = function () {

    // Getting the selected image
    const selectedImage = this.modalImages.querySelector('.selected');

    // Getting the next image
    // OR the first image (if it is the end of the array and nextElementSibling is undefined)
    const nextImage = selectedImage.nextElementSibling || this.modalImages.firstElementChild;

    // Removing the class '.selected' from the selected image
    selectedImage.classList.remove('selected');

    // Adding the class '.selected' to the next image
    nextImage.classList.add('selected');

    // Setting the next image as the main image
    this.setMainImage(nextImage);

};
// nextImage - end

// setMainImage - start
Gallery.prototype.setMainImage = function (selectedImage) {

    // Setting Main Modal Image src attribute
    this.mainModalImg.src = selectedImage.src;

    // Setting the Image Name text content
    this.imageName.textContent = selectedImage.alt;

};
// setMainImage - end

// selectModalImage - start
// This method sets allows to set a new Main Image by clicking on Modal Image
Gallery.prototype.selectModalImage = function (event) {

    // Checking if '.modal-img' was clicked on
    if (event.target.classList.contains('modal-img')) {

        // Targetting currently '.selected' image
        const selectedImage = this.modalImages.querySelector('.selected');

        // Removing the '.selected' class from currently '.selected' image
        selectedImage.classList.remove('selected');

        // Invoking setMainImage method and passing 'clicked' image as an argument
        this.setMainImage(event.target);

        // Adding the '.selected' class to the clicked on image
        event.target.classList.add('selected');

    }

};
// selectModalImage - end
// Gallery Methods - end

// Gallery Instances - start
// Nature Gallery:
const natureGallery = new Gallery(getElement('.nature'));

// City Gallery:
const cityGallery = new Gallery(getElement('.city'));
// Gallery Instances - end