import Gallery from "./class/class.js";
import { Gallery as GalleryFC } from "./function-constructor/function-constructor.js";
import getElement from "./utils/getElement.js";

// Gallery Instances - start
// Nature Gallery (using function constructor):
const natureGallery = new GalleryFC(getElement('.nature'));

// City Gallery (using class):
const cityGallery = new Gallery(getElement('.city'));
// Gallery Instances - end