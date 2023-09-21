export default class ImageWidget {
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
      link: imgLink,
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
