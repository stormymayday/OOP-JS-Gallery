// Gallery class - start
class Gallery {

    // constructor - start
    constructor(element) {

        // Selecting the container (section with class '.nature' or '.city')
        this.container = element;

        // 1. Getting the NodeList of all '.img' for that element
        // 2. Using Spread Operator to convert NodeList into an Array
        this.list = [...element.querySelectorAll('.img')];

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