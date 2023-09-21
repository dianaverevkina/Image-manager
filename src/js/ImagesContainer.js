export default class ImagesContainer {
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
    const { target } = e;
    const imgDelete = target.closest('.item__delete');

    if (!imgDelete) return;

    const imgEl = imgDelete.closest('.item');
    imgEl.remove();
  }

  // Создаем элемент картинки
  renderImgElement({ name, link }) {
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
