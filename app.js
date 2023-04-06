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
    this.mainImg = getElement('.main-img');

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

        }

        // Calling openModal method (that is on the prototype):
        this.openModal();

        // Note: Callback is bound to the Gallery (instead of the container)
    }.bind(this));

}
// Constructor function - end

// Gallery Methods - start
// openModal - start
Gallery.prototype.openModal = function (selectedImage, list) {

    // Adding '.open' class to the modal
    // Note: openModal must be bound to the Gallery first because modal is on the Gallery
    this.modal.classList.add('open');

}
// openModal - end
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