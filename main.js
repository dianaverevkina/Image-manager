/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/ImageWidget.js
class ImageWidget {
  constructor(container, createImg) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    }
    this.createImg = createImg;
    this.imageWidgetForm = this.container.querySelector('.image-widget__form');
    this.imageWidgetBtn = this.container.querySelector('.image-widget__btn');
    this.inputLink = this.container.querySelector('.field__input-link');
    this.inputName = this.container.querySelector('.field__input-name');
    this.addImage = this.addImage.bind(this);
    this.hideErrorText = this.hideErrorText.bind(this);
    this.deleteRedBorder = this.deleteRedBorder.bind(this);
    this.addEvents();
  }

  // Добавляем прослушиватели событий
  addEvents() {
    this.imageWidgetForm.addEventListener('submit', this.addImage);
    this.imageWidgetBtn.addEventListener('click', this.addImage);
    this.inputLink.addEventListener('input', this.hideErrorText);
    this.inputName.addEventListener('input', this.deleteRedBorder);
  }

  // Добавляем изображение по ссылке, указанной пользователем
  addImage(e) {
    e.preventDefault();
    const imgName = this.inputName.value;
    if (!imgName.trim()) {
      this.inputName.classList.add('field__input-name_red');
      return;
    }
    const imgLink = this.inputLink.value;
    const data = {
      name: imgName,
      link: imgLink
    };
    const fieldLink = this.container.querySelector('.field__block-link');
    this.createImg(data, fieldLink);
    this.imageWidgetForm.reset();
  }

  // Удаляем сообщение об ошибке при вводе текста
  hideErrorText() {
    this.errorText = this.container.querySelector('.field__error-text');
    if (!this.errorText) return;
    this.errorText.remove();
  }

  // Удаляем красную обводку инпута
  deleteRedBorder() {
    const isRedInput = this.inputName.classList.contains('field__input-name_red');
    if (isRedInput) {
      this.inputName.classList.remove('field__input-name_red');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/ImagesContainer.js
class ImagesContainer {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    }
    this.addImage = this.addImage.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
    this.showError = this.showError.bind(this);
    this.container.addEventListener('click', this.deleteImg);
  }

  // Удаляем изображение
  deleteImg(e) {
    const {
      target
    } = e;
    const imgDelete = target.closest('.item__delete');
    if (!imgDelete) return;
    const imgEl = imgDelete.closest('.item');
    imgEl.remove();
  }

  // Создаем элемент картинки
  renderImgElement(_ref) {
    let {
      name,
      link
    } = _ref;
    const imgEl = document.createElement('div');
    imgEl.classList.add('images__item', 'item');
    imgEl.innerHTML = `
      <div class="item__img">
        <img src=${link} alt=${name} class="item__img-picture">
      </div>
      <div class="item__delete">
        <img src="./images/cross.jpg" alt="cross-icon" class="item__cross">
      </div>
    `;
    return imgEl;
  }

  // Добавляем картинку
  addImage(data, field) {
    this.fieldLink = field;
    const imgElement = this.renderImgElement(data);
    const img = imgElement.querySelector('.item__img-picture');
    img.addEventListener('load', () => {
      this.container.append(imgElement);
    });
    img.addEventListener('error', this.showError);
  }

  // Если невозможно подгрузить картинку, показываем сообщение об ошибке
  showError() {
    this.errorText = document.createElement('p');
    this.errorText.classList.add('field__error-text');
    this.errorText.textContent = 'Неверный URL изображения';
    this.fieldLink.append(this.errorText);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const imagesContainer = new ImagesContainer('.images__container');
const imageWidget = new ImageWidget('.image-widget', imagesContainer.addImage);
console.log(imageWidget);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map