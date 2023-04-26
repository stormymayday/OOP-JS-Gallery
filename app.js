import Gallery from "./class/class.js";
import getElement from "./utils/getElement.js";

// Gallery Instances - start
// Nature Gallery:
const natureGallery = new Gallery(getElement('.nature'));

// City Gallery:
const cityGallery = new Gallery(getElement('.city'));
// Gallery Instances - end