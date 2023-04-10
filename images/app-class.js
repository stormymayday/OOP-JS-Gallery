// Gallery class - start
class Gallery {

    // constructor - start
    constructor(element) {

        // Properties - start

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

        // Properties - end

        // Bidnings - start

        // Binding closeModal method to the Gallery
        this.closeModal = this.closeModal.bind(this);

        // Binding prevImage method to the Gallery
        this.prevImage = this.prevImage.bind(this);

        // Binding nextImage method to the Gallery
        this.nextImage = this.nextImage.bind(this);

        // Bidnings - end

        // Adding 'click' event listener to the container
        this.container.addEventListener('click', function (event) {

            // Checking if an image was clicked
            if (event.target.classList.contains('img')) {

                // Calling openModal method
                // event.target argument is the image that was clicked
                // this.list argument is the array that contains all the images ('img')
                this.openModal(event.target, this.list);

            }

            // Note: Callback is bound to the Gallery (instead of the container)
        }.bind(this));
        // Container 'click' Event Listener - end

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

    // closeModal - start
    closeModal() {

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
    prevImage() {

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
    nextImage() {

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