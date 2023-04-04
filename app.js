// Constructor function - start
function Gallery(element) {

}
// Constructor function - end

// Gallery Instances - start
// Nature Gallery:
const natureGallery = new Gallery(getElement('.nature'));

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