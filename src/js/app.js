import ImageWidget from './ImageWidget';
import ImagesContainer from './ImagesContainer';

const imagesContainer = new ImagesContainer('.images__container');
const imageWidget = new ImageWidget('.image-widget', imagesContainer.addImage);
console.log(imageWidget);
