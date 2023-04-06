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

};
// openModal - end

// setMainImage - start
Gallery.prototype.setMainImage = function (selectedImage) {

    // Setting Main Modal Image src attribute
    this.mainModalImg.src = selectedImage.src;

    // Setting the Image Name text content
    this.imageName.textContent = selectedImage.alt;

};
// setMainImage - end
// Gallery Methods - end

// Gallery Instances - start
// Nature Gallery:
const natureGallery = new Gallery(getElement('.nature'));

// City Gallery:
const cityGallery = new Gallery(getElement('.city'));
// Gallery Instances - end

// getElement - start
function getElement(selection) {

    const element = document.querySelector(selection);

    if (element) {
        return element;
    }

    throw new Error(`Please check "${selection}" selector, no such element exists`);
}
// getElement - end