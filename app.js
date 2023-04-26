import Gallery from "./class/class.js";
import { Gallery as GalleryFC } from "./function-constructor/function-constructor.js";
import getElement from "./utils/getElement.js";

// Gallery Instances - start
// Nature Gallery:
const natureGallery = new Gallery(getElement('.nature'));

// City Gallery:
const cityGallery = new Gallery(getElement('.city'));
// Gallery Instances - end