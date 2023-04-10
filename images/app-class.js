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