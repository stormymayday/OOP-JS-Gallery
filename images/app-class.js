// Gallery class - start
class Gallery {

    // constructor - start
    constructor(element) {

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

    }
    // constructor - end

    // Methods - start
    // openModal - start
    openModal(selectedImage, list) {

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
    // Methods - end

}
// Gallery class - end

// getElement - start
function getElement(selection) {

    const element = document.querySelector(selection);

    if (element) {
        return element;
    }

    throw new Error(`Please check "${selection}" selector, no such element exists`);
}
// getElement - end