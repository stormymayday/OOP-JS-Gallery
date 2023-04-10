// Gallery class - start
class Gallery {

    // constructor - start
    constructor(element) {

        // Selecting the container (section with class '.nature' or '.city')
        this.container = element;

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